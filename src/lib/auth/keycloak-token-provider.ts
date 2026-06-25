import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable, InjectionToken, OnDestroy } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { TokenProvider, TokenResult } from "./token-provider";

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the background
 * refresh fires *before* the access token actually lapses (covers clock skew and
 * the round-trip to Keycloak). Mirrors the nodejs/python SDK references.
 */
const REFRESH_SKEW_IN_S: number = 30;

/**
 * Lower bound (in seconds) for the scheduled refresh delay so a tiny / zero
 * `expires_in` cannot spin a hot refresh loop.
 */
const MIN_REFRESH_DELAY_IN_S: number = 1;

/**
 * The parsed Keycloak token-endpoint response (only the fields this provider
 * consumes).
 */
interface KeycloakTokenResponse {
  /** The short-lived bearer access token. */
  access_token: string;
  /** The (optionally rotated) offline / refresh token; absent if none was returned. */
  refresh_token?: string;
  /** The access token lifetime in seconds, as reported by Keycloak. */
  expires_in?: number;
}

/**
 * Configuration for {@link KeycloakTokenProvider}.
 *
 * Provide a credential in exactly one of two shapes:
 *
 * - `offlineToken` — a long-lived offline / refresh token previously obtained
 *   out-of-band. The provider performs no password login; it bootstraps by
 *   exchanging this token for an access token (`grant_type=refresh_token`).
 * - `username` + `password` — a 2FA-exempt technical user. The provider performs
 *   a one-time Resource Owner Password Credentials login
 *   (`grant_type=password`, `scope=offline_access`) and keeps the resulting
 *   refresh token fresh.
 *
 * SECURITY: prefer `offlineToken` in browsers; embedding a `username`/`password`
 * ships those credentials to the client. The chosen grant never sends a
 * `client_secret` (the SDK Keycloak client is public).
 */
export interface KeycloakTokenProviderConfig {
  /** Base Keycloak URL, e.g. `"https://auth.example.com/auth"` (trailing slash tolerated). */
  keycloakUrl: string;
  /** Realm name, e.g. `"ondewo-ccai-platform"`. */
  realm: string;
  /** Public SDK client id, e.g. `"ondewo-t2s-sdk-public"`. No `client_secret` is ever sent. */
  clientId: string;
  /**
   * A long-lived offline / refresh token. When set, the provider bootstraps via
   * `grant_type=refresh_token` and `username`/`password` are ignored.
   */
  offlineToken?: string;
  /** 2FA-exempt technical-user email/username (used only when `offlineToken` is absent). */
  username?: string;
  /** Technical-user password (used only when `offlineToken` is absent). */
  password?: string;
  /**
   * Optional cap (seconds since bootstrap) on how long the background auto-refresh
   * runs. Once elapsed, the loop stops and the access token is allowed to lapse
   * (a fresh provider is then required). Omit to keep refreshing until the offline
   * session itself expires.
   */
  tokenExpirationInS?: number;
}

/**
 * DI token carrying the {@link KeycloakTokenProviderConfig} consumed by
 * {@link KeycloakTokenProvider}.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com/auth",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-t2s-sdk-public",
 *       offlineToken: "<offline-token>"
 *     } satisfies KeycloakTokenProviderConfig
 *   }
 * ]
 * ```
 */
export const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig> =
  new InjectionToken<KeycloakTokenProviderConfig>("ONDEWO_T2S_KEYCLOAK_TOKEN_PROVIDER_CONFIG");

/**
 * Error raised on any token-endpoint failure or unusable token-endpoint response.
 */
export class KeycloakAuthenticationError extends Error {
  /**
   * Create a {@link KeycloakAuthenticationError} with a fixed `name`.
   *
   * @param message a human-readable description of the token failure.
   */
  public constructor(message: string) {
    super(message);
    this.name = "KeycloakAuthenticationError";
  }
}

/**
 * A concrete, ready-to-use {@link TokenProvider} that performs the Keycloak
 * offline-token flow itself, so consumers get background access-token refresh
 * without implementing {@link TokenProvider}.
 *
 * On first {@link getToken} the provider logs in once against the Keycloak token
 * endpoint (offline / refresh-token grant, or a password grant with
 * `scope=offline_access`), then keeps the access token fresh with a background
 * timer that refreshes shortly *before* expiry (see {@link REFRESH_SKEW_IN_S}).
 * {@link getToken} returns the current valid access token; while the very first
 * login is still in flight it returns the bootstrap `Promise` so the auth
 * interceptors await it before sending the request.
 *
 * Register it with {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG} and `provideOndewoT2sAuth`:
 *
 * ```ts
 * import { provideHttpClient, withInterceptors } from "@angular/common/http";
 * import {
 *   authHttpInterceptor,
 *   KeycloakTokenProvider,
 *   KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *   provideOndewoT2sAuth
 * } from "@ondewo/t2s-client-angular";
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     {
 *       provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *       useValue: {
 *         keycloakUrl: "https://auth.example.com/auth",
 *         realm: "ondewo-ccai-platform",
 *         clientId: "ondewo-t2s-sdk-public",
 *         offlineToken: "<offline-token>"
 *       }
 *     },
 *     provideOndewoT2sAuth(KeycloakTokenProvider),
 *     provideHttpClient(withInterceptors([authHttpInterceptor]))
 *   ]
 * });
 * ```
 */
@Injectable({ providedIn: "root" })
export class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Pre-computed OIDC token endpoint URL for the configured realm. */
  private readonly tokenEndpoint: string;
  /** Public SDK client id sent on every token request (no `client_secret`). */
  private readonly clientId: string;
  /** Seed offline / refresh token; empty when a `username` + `password` login is used instead. */
  private readonly offlineToken: string;
  /** Technical-user name; empty when an `offlineToken` is used instead. */
  private readonly username: string;
  /** Technical-user password; empty when an `offlineToken` is used instead. */
  private readonly password: string;
  /** Optional cap (seconds) after which the auto-refresh loop stops; `undefined` means unbounded. */
  private readonly tokenExpirationInS: number | undefined;

  /** The current access token; empty before bootstrap / after the bounded loop has lapsed. */
  private accessToken: string = "";
  /** The current offline / refresh token; empty before bootstrap. */
  private refreshToken: string = "";
  /** Handle of the armed refresh timer, or `null` when no refresh is scheduled. */
  private timer: ReturnType<typeof setTimeout> | null = null;
  /** Whether {@link ngOnDestroy} has run; suppresses any further (re-)scheduling. */
  private stopped: boolean = false;
  /** Absolute epoch-ms deadline for the bounded loop, or `null` when unbounded. */
  private deadlineInMs: number | null = null;
  /** The in-flight bootstrap promise, memoised so login happens exactly once. */
  private bootstrapPromise: Promise<string | null> | null = null;

  /**
   * @param http the Angular {@link HttpClient} used for the token-endpoint calls.
   * @param config the {@link KeycloakTokenProviderConfig} for the login + refresh loop.
   */
  public constructor(
    private readonly http: HttpClient,
    @Inject(KEYCLOAK_TOKEN_PROVIDER_CONFIG) config: KeycloakTokenProviderConfig
  ) {
    this.validateConfig(config);
    const base: string = config.keycloakUrl.replace(/\/+$/, "");
    this.tokenEndpoint = `${base}/realms/${encodeURIComponent(config.realm)}/protocol/openid-connect/token`;
    this.clientId = config.clientId;
    this.offlineToken = config.offlineToken ?? "";
    this.username = config.username ?? "";
    this.password = config.password ?? "";
    this.tokenExpirationInS = config.tokenExpirationInS;
  }

  /**
   * Return the current access token, kicking off the one-time login on first call.
   *
   * @returns the current access token synchronously once login has completed; the
   *   bootstrap `Promise` while the first login is still in flight; or `null` once
   *   the bounded refresh window has elapsed.
   */
  public getToken(): TokenResult {
    if (this.bootstrapPromise === null) {
      this.bootstrapPromise = this.bootstrap();
    }
    return this.accessToken.length > 0 ? this.accessToken : this.bootstrapPromise;
  }

  /** Stop the background refresh loop when the injector is destroyed. Idempotent. */
  public ngOnDestroy(): void {
    this.stopped = true;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  /**
   * Perform the one-time login (offline / refresh-token grant when `offlineToken`
   * is set, otherwise a `password` grant with `scope=offline_access`) and arm the
   * first background refresh.
   *
   * @returns a promise resolving to the freshly acquired access token.
   * @throws {@link KeycloakAuthenticationError} if the token endpoint fails or the
   *   response carries no `access_token` / `refresh_token`.
   */
  private async bootstrap(): Promise<string | null> {
    const params: Record<string, string> =
      this.offlineToken.length > 0
        ? {
            grant_type: "refresh_token",
            client_id: this.clientId,
            refresh_token: this.offlineToken
          }
        : {
            grant_type: "password",
            client_id: this.clientId,
            username: this.username,
            password: this.password,
            scope: "offline_access"
          };

    const response: KeycloakTokenResponse = await this.postTokenRequest(params);
    this.storeTokens(response);
    if (this.refreshToken.length === 0) {
      throw new KeycloakAuthenticationError(
        "Keycloak token response did not contain a refresh_token; the SDK client must have " +
          "directAccessGrants + the offline_access scope"
      );
    }

    if (this.tokenExpirationInS !== undefined) {
      this.deadlineInMs = Date.now() + (this.tokenExpirationInS * 1000);
    }
    this.scheduleRefresh(response.expires_in);
    return this.accessToken;
  }

  /**
   * Exchange the offline / refresh token for a fresh access token and re-arm the
   * next background refresh. No-ops once stopped or once the bounded deadline has
   * elapsed (in which case it also stops the loop, letting the token lapse).
   *
   * @returns a promise that resolves once the token is refreshed and the next
   *   refresh is armed (or once the loop has been stopped).
   * @throws {@link KeycloakAuthenticationError} if the refresh call fails or
   *   returns an unusable body.
   */
  private async refresh(): Promise<void> {
    if (this.stopped) {
      return;
    }
    if (this.deadlineInMs !== null && Date.now() >= this.deadlineInMs) {
      this.ngOnDestroy();
      return;
    }
    const response: KeycloakTokenResponse = await this.postTokenRequest({
      grant_type: "refresh_token",
      client_id: this.clientId,
      refresh_token: this.refreshToken
    });
    this.storeTokens(response);
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Arm a single timer for the next refresh, clamped to the bounded deadline.
   * Stops silently once `tokenExpirationInS` has elapsed (no further renewal →
   * access lapses → a fresh provider is required).
   *
   * The delay is `expiresInRaw` minus {@link REFRESH_SKEW_IN_S}, floored at
   * {@link MIN_REFRESH_DELAY_IN_S}, then clamped to the time left before the deadline.
   *
   * @param expiresInRaw the `expires_in` (seconds) from the latest token response;
   *   a missing or non-positive value falls back to {@link MIN_REFRESH_DELAY_IN_S}.
   */
  private scheduleRefresh(expiresInRaw: number | undefined): void {
    if (this.stopped) {
      return;
    }
    const expiresInS: number =
      typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
    let delayInS: number = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);

    if (this.deadlineInMs !== null) {
      const remainingInMs: number = this.deadlineInMs - Date.now();
      if (remainingInMs <= 0) {
        this.ngOnDestroy();
        return;
      }
      delayInS = Math.min(delayInS, remainingInMs / 1000);
    }

    this.timer = setTimeout((): void => {
      void this.refresh();
    }, delayInS * 1000);
  }

  /**
   * POST an `application/x-www-form-urlencoded` body to the token endpoint and
   * return the parsed response.
   *
   * @param params the form fields to URL-encode (grant type, client id, credentials).
   * @returns the parsed {@link KeycloakTokenResponse}.
   * @throws {@link KeycloakAuthenticationError} on a non-2xx response or a body
   *   without a usable `access_token`.
   */
  private async postTokenRequest(params: Record<string, string>): Promise<KeycloakTokenResponse> {
    const body: string = new URLSearchParams(params).toString();
    let response: KeycloakTokenResponse;
    try {
      response = await firstValueFrom(
        this.http.post<KeycloakTokenResponse>(this.tokenEndpoint, body, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
          }
        })
      );
    } catch (caught: unknown) {
      const status: number = caught instanceof HttpErrorResponse ? caught.status : 0;
      throw new KeycloakAuthenticationError(`Keycloak token endpoint request failed with HTTP ${status}`);
    }
    if (typeof response.access_token !== "string" || response.access_token.length === 0) {
      throw new KeycloakAuthenticationError("Keycloak token response did not contain an access_token");
    }
    return response;
  }

  /**
   * Store the access token and, when present, the (possibly rotated) refresh
   * token from a token response. A response that omits `refresh_token` keeps the
   * previous one so a same-token refresh does not blank out the offline token.
   *
   * @param response the parsed token-endpoint response.
   */
  private storeTokens(response: KeycloakTokenResponse): void {
    this.accessToken = response.access_token;
    if (typeof response.refresh_token === "string" && response.refresh_token.length > 0) {
      this.refreshToken = response.refresh_token;
    }
  }

  /**
   * Validate the injected config: the three URL/realm/client fields are required,
   * and a credential must be supplied as either `offlineToken` or
   * `username` + `password`.
   *
   * @param config the {@link KeycloakTokenProviderConfig} to validate.
   * @throws {@link KeycloakAuthenticationError} when a required field is missing.
   */
  private validateConfig(config: KeycloakTokenProviderConfig): void {
    for (const key of ["keycloakUrl", "realm", "clientId"] as const) {
      if (config[key].length === 0) {
        throw new KeycloakAuthenticationError(`KeycloakTokenProviderConfig.${key} is required and must be non-empty`);
      }
    }
    const hasOfflineToken: boolean = (config.offlineToken ?? "").length > 0;
    const hasPassword: boolean = (config.username ?? "").length > 0 && (config.password ?? "").length > 0;
    if (!hasOfflineToken && !hasPassword) {
      throw new KeycloakAuthenticationError(
        "KeycloakTokenProviderConfig requires either an offlineToken or a username + password"
      );
    }
  }
}

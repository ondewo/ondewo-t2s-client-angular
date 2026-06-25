import { HttpClient, provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting, TestRequest } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { throwError } from "rxjs";
import {
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakAuthenticationError,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig
} from "./keycloak-token-provider";

/** Base Keycloak URL with a trailing slash, to prove the slash is stripped. */
const KEYCLOAK_URL: string = "https://auth.example.com/auth/";
/** Realm name with a character that must be URL-encoded into the endpoint path. */
const REALM: string = "ondewo ccai";
/** Public SDK client id sent on every token request. */
const CLIENT_ID: string = "ondewo-t2s-sdk-public";
/** The fully-qualified token endpoint the provider must POST to (slash stripped, realm encoded). */
const TOKEN_ENDPOINT: string = "https://auth.example.com/auth/realms/ondewo%20ccai/protocol/openid-connect/token";
/** The first access token returned by a login / refresh-token bootstrap. */
const ACCESS_TOKEN: string = "access-token-1";
/** The access token returned by the first background refresh. */
const ACCESS_TOKEN_2: string = "access-token-2";
/** The offline / refresh token returned by the initial bootstrap. */
const REFRESH_TOKEN: string = "refresh-token-1";
/** A rotated refresh token a refresh response may carry. */
const REFRESH_TOKEN_2: string = "refresh-token-2";
/** A pre-existing offline token supplied via config (no password login). */
const OFFLINE_TOKEN: string = "offline-token-seed";
/** The access token lifetime Keycloak reports, in seconds. */
const EXPIRES_IN_S: number = 300;
/** Skew (seconds) the provider subtracts from `expires_in` before scheduling a refresh. */
const REFRESH_SKEW_IN_S: number = 30;
/** The ms delay at which a refresh fires for {@link EXPIRES_IN_S} (expires_in minus skew). */
const REFRESH_AT_MS: number = (EXPIRES_IN_S - REFRESH_SKEW_IN_S) * 1000;

/**
 * Build a `KeycloakTokenProviderConfig` for the offline-token (refresh-token
 * grant) flow, overridden by `overrides`.
 *
 * @param overrides partial config fields to merge over the offline-token defaults.
 * @returns the assembled config.
 */
function offlineConfig(overrides: Partial<KeycloakTokenProviderConfig> = {}): KeycloakTokenProviderConfig {
  return { keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID, offlineToken: OFFLINE_TOKEN, ...overrides };
}

/**
 * Instantiate a {@link KeycloakTokenProvider} through `TestBed` with the
 * `HttpClient` testing backend and the given config.
 *
 * @param config the config to inject under {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
 * @returns the provider instance and the `HttpTestingController` for the backend.
 */
function setup(config: KeycloakTokenProviderConfig): {
  provider: KeycloakTokenProvider;
  httpMock: HttpTestingController;
} {
  TestBed.configureTestingModule({
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      { provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG, useValue: config },
      KeycloakTokenProvider
    ]
  });
  return {
    provider: TestBed.inject(KeycloakTokenProvider),
    httpMock: TestBed.inject(HttpTestingController)
  };
}

/**
 * Flush the next expected POST to the token endpoint with the given JSON body and
 * return the captured request so the caller can assert on its form fields.
 *
 * @param httpMock the testing backend.
 * @param body the JSON token-endpoint response to return.
 * @returns the captured {@link TestRequest}.
 */
function flushToken(httpMock: HttpTestingController, body: Record<string, unknown>): TestRequest {
  const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
  request.flush(body);
  return request;
}

/**
 * Flush the microtask queue so an async `refresh()` kicked off by a fired timer
 * reaches its HttpClient subscription (which issues the request the mock backend
 * then matches). Several ticks cover the `firstValueFrom` + `await` chain.
 *
 * @returns a promise that resolves after the queued microtasks have run.
 */
async function tick(): Promise<void> {
  await Promise.resolve();
  await Promise.resolve();
  await Promise.resolve();
}

/**
 * Covers the concrete {@link KeycloakTokenProvider}: it must log in once via the
 * Keycloak token endpoint (offline / password grant), expose the access token
 * from `getToken`, refresh it on a background timer *before* expiry, rotate the
 * refresh token, honour the bounded refresh deadline, validate its config, and
 * surface token-endpoint failures as {@link KeycloakAuthenticationError}.
 */
describe("KeycloakTokenProvider", (): void => {
  beforeEach((): void => {
    jest.useFakeTimers();
  });

  afterEach((): void => {
    jest.clearAllTimers();
    jest.useRealTimers();
    TestBed.resetTestingModule();
  });

  /** The first `getToken` returns the bootstrap promise; it resolves to the access token. */
  it("bootstraps via the refresh-token grant and resolves the first token", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());

    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    expect(typeof (provider.getToken() as Promise<string | null>).then).toBe("function");

    const request: TestRequest = flushToken(httpMock, {
      access_token: ACCESS_TOKEN,
      refresh_token: REFRESH_TOKEN,
      expires_in: EXPIRES_IN_S
    });
    await expect(pending).resolves.toBe(ACCESS_TOKEN);

    expect(request.request.body).toContain("grant_type=refresh_token");
    expect(request.request.body).toContain(`client_id=${CLIENT_ID}`);
    expect(request.request.body).toContain(`refresh_token=${OFFLINE_TOKEN}`);
    expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");

    provider.ngOnDestroy();
    httpMock.verify();
  });

  /** After bootstrap, `getToken` returns the current access token synchronously. */
  it("returns the current access token synchronously after bootstrap", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    flushToken(httpMock, { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN_S });
    await pending;

    expect(provider.getToken()).toBe(ACCESS_TOKEN);

    provider.ngOnDestroy();
    httpMock.verify();
  });

  /** A username/password config bootstraps via the password + offline_access grant. */
  it("bootstraps via the password grant when no offlineToken is supplied", async (): Promise<void> => {
    const username: string = "tech-user@example.com";
    const password: string = "s3cret";
    const { provider, httpMock } = setup(
      offlineConfig({ offlineToken: undefined, username, password })
    );

    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    const request: TestRequest = flushToken(httpMock, {
      access_token: ACCESS_TOKEN,
      refresh_token: REFRESH_TOKEN,
      expires_in: EXPIRES_IN_S
    });
    await pending;

    expect(request.request.body).toContain("grant_type=password");
    expect(request.request.body).toContain(`username=${encodeURIComponent(username)}`);
    expect(request.request.body).toContain(`password=${password}`);
    expect(request.request.body).toContain("scope=offline_access");

    provider.ngOnDestroy();
    httpMock.verify();
  });

  /** The background timer fires REFRESH_SKEW_IN_S before expiry and rotates the token. */
  it("refreshes the access token on the background timer before expiry", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    flushToken(httpMock, { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN_S });
    await pending;

    // expires_in 300 - skew 30 = 270s. Just before the deadline nothing fires.
    jest.advanceTimersByTime(REFRESH_AT_MS - 1);
    httpMock.expectNone(TOKEN_ENDPOINT);

    jest.advanceTimersByTime(1);
    await tick();
    const refreshRequest: TestRequest = flushToken(httpMock, {
      access_token: ACCESS_TOKEN_2,
      refresh_token: REFRESH_TOKEN_2,
      expires_in: EXPIRES_IN_S
    });
    await tick();

    expect(refreshRequest.request.body).toContain("grant_type=refresh_token");
    expect(refreshRequest.request.body).toContain(`refresh_token=${REFRESH_TOKEN}`);
    expect(provider.getToken()).toBe(ACCESS_TOKEN_2);

    provider.ngOnDestroy();
    httpMock.verify();
  });

  /** A refresh response omitting refresh_token keeps the previously stored one. */
  it("keeps the previous refresh token when a refresh response omits it", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    flushToken(httpMock, { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN_S });
    await pending;

    jest.advanceTimersByTime(REFRESH_AT_MS);
    await tick();
    flushToken(httpMock, { access_token: ACCESS_TOKEN_2, expires_in: EXPIRES_IN_S });
    await tick();

    // The next scheduled refresh must reuse the original (non-rotated) refresh token.
    jest.advanceTimersByTime(REFRESH_AT_MS);
    await tick();
    const secondRefresh: TestRequest = flushToken(httpMock, {
      access_token: "access-token-3",
      expires_in: EXPIRES_IN_S
    });
    expect(secondRefresh.request.body).toContain(`refresh_token=${REFRESH_TOKEN}`);

    provider.ngOnDestroy();
    httpMock.verify();
  });

  /** A missing/non-positive expires_in floors the next refresh delay at MIN_REFRESH_DELAY_IN_S. */
  it("floors the refresh delay when expires_in is missing or non-positive", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    flushToken(httpMock, { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
    await pending;

    jest.advanceTimersByTime(1000);
    await tick();
    flushToken(httpMock, { access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN_2, expires_in: 0 });
    await tick();
    expect(provider.getToken()).toBe(ACCESS_TOKEN_2);

    provider.ngOnDestroy();
    httpMock.verify();
  });

  /** With tokenExpirationInS set, the deadline clamps the scheduled delay (Math.min path). */
  it("clamps the refresh delay to the bounded deadline and stops at it", async (): Promise<void> => {
    const tokenExpirationInS: number = 60;
    const { provider, httpMock } = setup(offlineConfig({ tokenExpirationInS }));
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    // expires_in 300 -> raw delay 270s, but the 60s deadline clamps it (Math.min) to 60s.
    flushToken(httpMock, { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN_S });
    await pending;

    // Nothing fires before the clamped 60s delay.
    jest.advanceTimersByTime((tokenExpirationInS * 1000) - 1);
    httpMock.expectNone(TOKEN_ENDPOINT);

    // At the deadline the refresh fires but, finding now >= deadline, stops without a request.
    jest.advanceTimersByTime(1);
    await tick();
    httpMock.expectNone(TOKEN_ENDPOINT);
    expect(provider.getToken()).toBe(ACCESS_TOKEN);

    provider.ngOnDestroy();
    httpMock.verify();
  });

  /** A zero-length window makes scheduleRefresh see remainingInMs <= 0 and stop on bootstrap. */
  it("stops scheduling immediately when the bounded window is already elapsed", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig({ tokenExpirationInS: 0 }));
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    // deadline = now + 0; scheduleRefresh computes remainingInMs <= 0 and stops without arming.
    flushToken(httpMock, { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN_S });
    await pending;

    jest.advanceTimersByTime(REFRESH_AT_MS);
    httpMock.expectNone(TOKEN_ENDPOINT);
    expect(provider.getToken()).toBe(ACCESS_TOKEN);

    provider.ngOnDestroy();
    httpMock.verify();
  });

  /** A bootstrap response without a refresh_token rejects with KeycloakAuthenticationError. */
  it("rejects when the bootstrap response carries no refresh_token", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    flushToken(httpMock, { access_token: ACCESS_TOKEN, expires_in: EXPIRES_IN_S });
    await expect(pending).rejects.toBeInstanceOf(KeycloakAuthenticationError);
    httpMock.verify();
  });

  /** A response without an access_token rejects with KeycloakAuthenticationError. */
  it("rejects when the token response carries no access_token", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    flushToken(httpMock, { refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN_S });
    await expect(pending).rejects.toBeInstanceOf(KeycloakAuthenticationError);
    httpMock.verify();
  });

  /** A non-2xx token endpoint response surfaces the HTTP status in the error. */
  it("rejects with the HTTP status when the token endpoint returns an error", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 401, statusText: "Unauthorized" });
    await expect(pending).rejects.toThrow("HTTP 401");
    httpMock.verify();
  });

  /** A transport-level (non-HttpErrorResponse) failure falls back to HTTP 0 in the error. */
  it("rejects with HTTP 0 on a non-HttpErrorResponse transport failure", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    // Make HttpClient.post emit a plain (non-HttpErrorResponse) error so the catch
    // branch hits the `: 0` fallback instead of reading `caught.status`.
    const http: HttpClient = TestBed.inject(HttpClient);
    const postSpy: jest.SpiedFunction<HttpClient["post"]> = jest.spyOn(http, "post");
    postSpy.mockReturnValue(throwError((): Error => new Error("socket hang up")));
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    await expect(pending).rejects.toThrow("HTTP 0");
    postSpy.mockRestore();
    httpMock.verify();
  });

  /** ngOnDestroy with no armed timer is a safe no-op (timer === null branch). */
  it("ngOnDestroy is a no-op when no refresh timer is armed", (): void => {
    const { provider } = setup(offlineConfig());
    expect((): void => provider.ngOnDestroy()).not.toThrow();
  });

  /** A refresh that runs after ngOnDestroy issues no token request (stopped guard). */
  it("does not refresh after the provider has been destroyed", async (): Promise<void> => {
    const { provider, httpMock } = setup(offlineConfig());
    const pending: Promise<string | null> = provider.getToken() as Promise<string | null>;
    flushToken(httpMock, { access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN_S });
    await pending;

    provider.ngOnDestroy();
    // A late refresh (e.g. a timer that had already fired before stop) must short-circuit.
    await (provider as unknown as { refresh: () => Promise<void> }).refresh();
    httpMock.expectNone(TOKEN_ENDPOINT);

    httpMock.verify();
  });

  describe("config validation", (): void => {
    /** Each required URL/realm/client field, when empty, throws on construction. */
    it.each(["keycloakUrl", "realm", "clientId"] as const)(
      "throws when required field %s is empty",
      (field: "keycloakUrl" | "realm" | "clientId"): void => {
        expect((): void => {
          setup(offlineConfig({ [field]: "" }));
          TestBed.inject(KeycloakTokenProvider);
        }).toThrow(KeycloakAuthenticationError);
      }
    );

    /** Neither an offlineToken nor a username+password pair throws on construction. */
    it("throws when neither offlineToken nor username+password is supplied", (): void => {
      expect((): void => {
        setup(offlineConfig({ offlineToken: undefined }));
        TestBed.inject(KeycloakTokenProvider);
      }).toThrow(KeycloakAuthenticationError);
    });

    /** A username without a password is treated as no credential and throws. */
    it("throws when a username is supplied without a password", (): void => {
      expect((): void => {
        setup(offlineConfig({ offlineToken: undefined, username: "user@example.com" }));
        TestBed.inject(KeycloakTokenProvider);
      }).toThrow(KeycloakAuthenticationError);
    });
  });
});

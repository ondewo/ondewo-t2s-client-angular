import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injector, runInInjectionContext } from "@angular/core";
import { firstValueFrom, Observable, of, throwError } from "rxjs";
import { authHttpInterceptor } from "./auth-http.interceptor";
import { AUTHORIZATION_HEADER, BEARER_PREFIX } from "./resolve-token";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/** A representative JWT-shaped access token used across the HTTP-interceptor specs. */
const TOKEN: string = "header.payload.signature";
/** The expected `Authorization` header value built from {@link TOKEN}. */
const BEARER: string = `${BEARER_PREFIX}${TOKEN}`;
/** An arbitrary request URL the interceptor neither inspects nor rewrites. */
const URL: string = "https://api.example.com/ondewo.t2s.Text2Speech/Synthesize";

/** A `TokenProvider` whose `getToken` returns a caller-supplied value. */
class StubTokenProvider implements TokenProvider {
  /**
   * @param value the {@link TokenResult} every `getToken()` call should return.
   */
  public constructor(private readonly value: TokenResult) {}

  /**
   * Return the caller-supplied token result unchanged.
   *
   * @returns the configured {@link TokenResult}.
   */
  public getToken(): TokenResult {
    return this.value;
  }
}

/** The captured outcome of driving the interceptor through {@link run}. */
interface RunResult {
  /** The request actually handed to the next handler (throws if `next` was not invoked). */
  forwarded: HttpRequest<unknown>;
  /** The stream of HTTP events produced by the interceptor. */
  events: Observable<HttpEvent<unknown>>;
}

/**
 * Drive `authHttpInterceptor` inside an injection context that provides the
 * given `TokenProvider`, capturing the request actually handed to the next
 * handler. The fake `next` echoes a sentinel data event so the stream is
 * observable end-to-end.
 *
 * @param tokenResult the token the stubbed {@link TokenProvider} should return.
 * @param request the request fed into the interceptor.
 * @returns a {@link RunResult} exposing the forwarded request and the event stream.
 */
function run(tokenResult: TokenResult, request: HttpRequest<unknown>): RunResult {
  const injector: Injector = Injector.create({
    providers: [{ provide: TOKEN_PROVIDER, useValue: new StubTokenProvider(tokenResult) }]
  });

  let forwarded: HttpRequest<unknown> | undefined;
  const next: HttpHandlerFn = (req: HttpRequest<unknown>): Observable<HttpEvent<unknown>> => {
    forwarded = req;
    return of({ type: 0 } as HttpEvent<unknown>);
  };

  const events: Observable<HttpEvent<unknown>> = runInInjectionContext(
    injector,
    (): Observable<HttpEvent<unknown>> => authHttpInterceptor(request, next)
  );
  // `forwarded` is assigned synchronously only for the sync-token paths; the
  // caller awaits `events` before reading it for async paths.
  return {
    get forwarded(): HttpRequest<unknown> {
      if (forwarded === undefined) {
        throw new Error("next handler was not invoked");
      }
      return forwarded;
    },
    events
  };
}

/**
 * Build a bare `GET` request for {@link URL}, optionally seeded with the given
 * headers.
 *
 * @param headers optional headers to attach to the request.
 * @returns the constructed {@link HttpRequest}.
 */
function newRequest(headers?: HttpHeaders): HttpRequest<unknown> {
  return new HttpRequest("GET", URL, headers === undefined ? undefined : { headers });
}

/**
 * Covers the functional {@link authHttpInterceptor}: it must attach the bearer
 * header for any resolvable token (sync / Promise / Observable), forward the
 * original request untouched when there is no usable token, never overwrite a
 * caller-set `Authorization` header, and propagate token-source errors instead
 * of sending an unauthenticated request.
 */
describe("authHttpInterceptor", (): void => {
  /** A synchronous token is attached as the `Authorization: Bearer …` header. */
  it("attaches the bearer header when a synchronous token is present", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** A `null` token forwards the exact original request with no header added. */
  it("forwards the original request untouched when the token is null", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run(null, request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** An empty-string token is treated as no token: the request is forwarded as-is. */
  it("forwards untouched when the token is an empty string", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run("", request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** A `Promise`-based token is awaited before the request is sent. */
  it("resolves a Promise-based token before sending", async (): Promise<void> => {
    const result: RunResult = run(Promise.resolve(TOKEN), newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An `Observable`-based token is resolved before the request is sent. */
  it("resolves an Observable-based token before sending", async (): Promise<void> => {
    const result: RunResult = run(of(TOKEN), newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An async source resolving to `null` forwards the original request unchanged. */
  it("does not clone the request when the token source resolves to null", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run(Promise.resolve(null), request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
  });

  /** A caller-supplied `Authorization` header wins and the provider is bypassed. */
  it("leaves an explicitly-set Authorization header untouched", async (): Promise<void> => {
    const preset: string = `${BEARER_PREFIX}caller-supplied`;
    const request: HttpRequest<unknown> = newRequest(new HttpHeaders({ [AUTHORIZATION_HEADER]: preset }));
    const result: RunResult = run(TOKEN, request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(preset);
  });

  /** An error from the token source aborts the request and surfaces to the caller. */
  it("propagates an error raised by the token source without sending the request", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    const result: RunResult = run(throwError(() => boom), newRequest());
    await expect(firstValueFrom(result.events)).rejects.toBe(boom);
  });
});

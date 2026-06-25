import { firstValueFrom, Observable, of, Subject, Subscription, throwError } from "rxjs";
import {
  AUTHORIZATION_HEADER,
  BEARER_PREFIX,
  buildBearerValue,
  once,
  resolveBearerValue,
  resolveToken
} from "./resolve-token";

/** A representative JWT-shaped access token used across the token-resolution specs. */
const TOKEN: string = "eyJhbGciOi.payload.signature";

/**
 * Pins the two exported header constants used to build the bearer credential:
 * the lower-case `authorization` header name (HTTP/2 + gRPC-web requirement) and
 * the standard `"Bearer "` scheme prefix.
 */
describe("constants", (): void => {
  /** The header name must stay lower-case to be valid HTTP/2 / gRPC-web metadata. */
  it("uses a lower-case authorization header name", (): void => {
    expect(AUTHORIZATION_HEADER).toBe("authorization");
  });

  /** The scheme prefix must be the canonical `"Bearer "` (note the trailing space). */
  it("uses the standard bearer scheme prefix", (): void => {
    expect(BEARER_PREFIX).toBe("Bearer ");
  });
});

/**
 * Covers {@link resolveToken}: normalizing every `TokenResult` shape (sync
 * string, `null`, `Promise`, `Observable`) into a single-emission
 * `Observable<string | null>`, collapsing blank tokens to `null`, trimming real
 * tokens, propagating source errors, and tearing the source subscription down.
 */
describe("resolveToken", (): void => {
  /** A ready synchronous string token is emitted verbatim. */
  it("resolves a synchronous string token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(TOKEN))).resolves.toBe(TOKEN);
  });

  /** A `null` input (unauthenticated) yields a `null` emission. */
  it("resolves null when the token is null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(null))).resolves.toBeNull();
  });

  /** An empty string is treated as "no token" and collapsed to `null`. */
  it("collapses an empty-string token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(""))).resolves.toBeNull();
  });

  /** A whitespace-only string carries no usable credential and collapses to `null`. */
  it("collapses a whitespace-only token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken("   "))).resolves.toBeNull();
  });

  /** A source that emits `undefined` at runtime must be treated as "no token". */
  it("collapses an undefined emission from a misbehaving source to null", async (): Promise<void> => {
    // A `TokenResult` source can emit `undefined` at runtime even though the
    // type says `string | null`; it must be treated as "no token", not crash.
    const source: Observable<string | null> = of(undefined as unknown as string | null);
    await expect(firstValueFrom(resolveToken(source))).resolves.toBeNull();
  });

  /** Surrounding whitespace is trimmed from an otherwise valid token. */
  it("trims surrounding whitespace from a real token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(`  ${TOKEN}  `))).resolves.toBe(TOKEN);
  });

  /** A `Promise`-based source is awaited and its resolved token emitted. */
  it("resolves a Promise-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A `Promise` that resolves to `null` yields a `null` emission. */
  it("resolves a Promise that resolves to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(null)))).resolves.toBeNull();
  });

  /** An `Observable`-based source is passed through and its token emitted. */
  it("resolves an Observable-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(of(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A rejected `Promise` source surfaces its error to the subscriber unchanged. */
  it("propagates an error from a Promise token source", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    await expect(firstValueFrom(resolveToken(Promise.reject(boom)))).rejects.toBe(boom);
  });

  /** An erroring `Observable` source surfaces its error to the subscriber unchanged. */
  it("propagates an error from an Observable token source", async (): Promise<void> => {
    const boom: Error = new Error("token stream failed");
    await expect(firstValueFrom(resolveToken(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the returned observable unsubscribes from the wrapped source. */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveToken(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });
});

/**
 * Covers {@link buildBearerValue}: a real token becomes `"Bearer <token>"`,
 * while a `null` token stays `null` (so no empty `Bearer` header is ever built).
 */
describe("buildBearerValue", (): void => {
  /** A non-null token is prefixed with the bearer scheme. */
  it("prefixes a real token with the bearer scheme", (): void => {
    expect(buildBearerValue(TOKEN)).toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token produces a `null` header value, never `"Bearer "`. */
  it("returns null for a null token", (): void => {
    expect(buildBearerValue(null)).toBeNull();
  });
});

/**
 * Covers {@link resolveBearerValue}: the end-to-end convenience wrapper that
 * resolves a `TokenResult` and emits the ready `Authorization` header value (or
 * `null`), including error propagation and subscription teardown.
 */
describe("resolveBearerValue", (): void => {
  /** A present token yields the fully-built `"Bearer <token>"` header value. */
  it("emits the bearer header value for a present token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(TOKEN))).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token yields a `null` header value. */
  it("emits null when no token is available", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(null))).resolves.toBeNull();
  });

  /** A blank token yields a `null` header value (no empty `Bearer` header). */
  it("emits null for an empty token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(""))).resolves.toBeNull();
  });

  /** An error from the underlying token source is propagated unchanged. */
  it("propagates an error from the token source", async (): Promise<void> => {
    const boom: Error = new Error("nope");
    await expect(firstValueFrom(resolveBearerValue(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing tears the wrapped source subscription down. */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveBearerValue(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });

  /** A token pushed asynchronously through a `Subject` is built into the header value. */
  it("emits the bearer value for a token pushed through an Observable source", async (): Promise<void> => {
    const source: Subject<string | null> = new Subject<string | null>();
    const promise: Promise<string | null> = firstValueFrom(resolveBearerValue(source));
    source.next(TOKEN);
    source.complete();
    await expect(promise).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });
});

/**
 * Covers {@link once}: the thin `rxjs` `of` wrapper that emits a single value and
 * completes, letting callers stay in the observable world without importing `of`.
 */
describe("once", (): void => {
  /** The supplied value is emitted exactly once. */
  it("emits the given value exactly once", async (): Promise<void> => {
    await expect(firstValueFrom(once("value"))).resolves.toBe("value");
  });
});

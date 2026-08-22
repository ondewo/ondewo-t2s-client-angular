import { EnvironmentProviders, Provider } from "@angular/core";
import { GRPC_INTERCEPTORS } from "@ngx-grpc/core";
import { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
import { provideOndewoT2sAuth } from "./auth.providers";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/** A concrete `TokenProvider` the consumer would register. */
class KeycloakTokenProvider implements TokenProvider {
  /**
   * Return a fixed token; the wiring assertions never read its value.
   *
   * @returns a placeholder access token.
   */
  public getToken(): TokenResult {
    return "token-from-keycloak";
  }
}

/**
 * `makeEnvironmentProviders` wraps the provider array in an opaque
 * `EnvironmentProviders` whose flat list lives under the internal `ɵproviders`
 * field. Reading it lets us assert the exact wiring without bootstrapping a full
 * Angular environment injector (which would need zone.js / TestBed).
 *
 * @param environmentProviders the value returned by {@link provideOndewoT2sAuth}.
 * @returns the flat list of providers it wraps.
 */
function flatten(environmentProviders: EnvironmentProviders): Provider[] {
  return (environmentProviders as unknown as { ɵproviders: Provider[] }).ɵproviders;
}

/**
 * Covers {@link provideOndewoT2sAuth}: the single entry point that wires a
 * consumer's `TokenProvider` class into the library. It must register the class
 * itself, alias `TOKEN_PROVIDER` to it via `useExisting`, and register
 * {@link AuthGrpcInterceptor} as a `multi` `GRPC_INTERCEPTORS` provider.
 */
describe("provideOndewoT2sAuth", (): void => {
  /** The concrete provider class is registered so Angular can instantiate it. */
  it("registers the supplied TokenProvider class so it is instantiable", (): void => {
    const providers: Provider[] = flatten(provideOndewoT2sAuth(KeycloakTokenProvider));
    expect(providers).toContain(KeycloakTokenProvider);
  });

  /** `TOKEN_PROVIDER` is aliased to the concrete class via `useExisting`. */
  it("aliases TOKEN_PROVIDER to the supplied implementation via useExisting", (): void => {
    const providers: Provider[] = flatten(provideOndewoT2sAuth(KeycloakTokenProvider));
    const tokenBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" && provider !== null && "provide" in provider && provider.provide === TOKEN_PROVIDER
    );
    expect(tokenBinding).toEqual({ provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider });
  });

  /** The gRPC interceptor is registered as a `multi` `GRPC_INTERCEPTORS` provider. */
  it("registers AuthGrpcInterceptor as a multi GRPC_INTERCEPTORS provider", (): void => {
    const providers: Provider[] = flatten(provideOndewoT2sAuth(KeycloakTokenProvider));
    const interceptorBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" &&
        provider !== null &&
        "provide" in provider &&
        provider.provide === GRPC_INTERCEPTORS
    );
    expect(interceptorBinding).toEqual({
      provide: GRPC_INTERCEPTORS,
      useClass: AuthGrpcInterceptor,
      multi: true
    });
  });
});

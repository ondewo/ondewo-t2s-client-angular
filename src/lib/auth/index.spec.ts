import * as authApi from "./index";

/**
 * Guards the public barrel (`./index`): every hand-written symbol that consumers
 * import from `@ondewo/t2s-client-angular` must remain exported with the right
 * runtime kind, so an accidental re-export removal or rename is caught here.
 */
describe("auth public API barrel", (): void => {
  /**
   * Asserts the presence and runtime kind of each re-exported symbol — the three
   * interceptor/provider functions, the three token-resolution helpers, the two
   * header constants, the `TOKEN_PROVIDER` injection token, and the concrete
   * `KeycloakTokenProvider` with its config token and error class.
   */
  it("re-exports the full hand-written auth surface", (): void => {
    expect(typeof authApi.authHttpInterceptor).toBe("function");
    expect(typeof authApi.AuthGrpcInterceptor).toBe("function");
    expect(typeof authApi.provideOndewoT2sAuth).toBe("function");
    expect(typeof authApi.resolveToken).toBe("function");
    expect(typeof authApi.resolveBearerValue).toBe("function");
    expect(typeof authApi.buildBearerValue).toBe("function");
    expect(authApi.AUTHORIZATION_HEADER).toBe("authorization");
    expect(authApi.BEARER_PREFIX).toBe("Bearer ");
    expect(authApi.TOKEN_PROVIDER).toBeDefined();
    expect(typeof authApi.KeycloakTokenProvider).toBe("function");
    expect(typeof authApi.KeycloakAuthenticationError).toBe("function");
    expect(authApi.KEYCLOAK_TOKEN_PROVIDER_CONFIG).toBeDefined();
  });
});

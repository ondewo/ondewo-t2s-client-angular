import { InjectionToken } from "@angular/core";
import { TOKEN_PROVIDER } from "./token-provider";

/**
 * Specifies the `TOKEN_PROVIDER` dependency-injection token: it must be a real
 * Angular {@link InjectionToken} carrying the documented, descriptive runtime
 * description so misconfiguration surfaces as a readable provider error.
 */
describe("TOKEN_PROVIDER", (): void => {
  /**
   * The token is the {@link InjectionToken} instance the consuming application
   * binds its `TokenProvider` implementation against, and its `toString()`
   * exposes the description used in Angular's provider diagnostics.
   */
  it("is an InjectionToken with a descriptive name", (): void => {
    expect(TOKEN_PROVIDER).toBeInstanceOf(InjectionToken);
    expect(TOKEN_PROVIDER.toString()).toContain("ONDEWO_T2S_TOKEN_PROVIDER");
  });
});

/**
 * Minimal, idiomatic usage example for `@ondewo/t2s-client-angular`.
 *
 * It shows the three things a consuming Angular application does:
 *
 * 1. Feed the current Keycloak access token into the SDK through a
 *    {@link TokenProvider} (bearer-token auth — this client performs no
 *    OAuth/OIDC flow itself; see `src/lib/auth`).
 * 2. Register that provider together with the SDK's gRPC-web and HTTP auth
 *    interceptors via {@link provideOndewoT2sAuth} + `authHttpInterceptor`.
 * 3. Inject the generated {@link Text2SpeechClient} and call a representative
 *    RPC (`Synthesize`), then handle the {@link SynthesizeResponse}.
 *
 * A published-package consumer imports the same symbols from
 * `@ondewo/t2s-client-angular`; inside this repository the imports are relative.
 */
import { EnvironmentProviders, Injectable } from "@angular/core";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { firstValueFrom, Observable } from "rxjs";
import { Text2SpeechClient } from "../../api/ondewo/t2s/text-to-speech.pbsc";
import {
  AudioFormat,
  RequestConfig,
  SynthesizeRequest,
  SynthesizeResponse
} from "../../api/ondewo/t2s/text-to-speech.pb";
import { authHttpInterceptor, provideOndewoT2sAuth, TokenProvider, TokenResult } from "../lib/auth";

/**
 * A dependency-free {@link TokenProvider} that hands the SDK a Keycloak access
 * token the host application already holds.
 *
 * This is the smallest possible implementation of the bearer-token seam: the
 * client only reads the current token and attaches it as
 * `Authorization: Bearer <token>` — it never logs in, stores, or refreshes a
 * credential. A real application typically wraps `keycloak-js` /
 * `keycloak-angular`, or uses the SDK's built-in `KeycloakTokenProvider` for a
 * headless (offline-token) session.
 */
@Injectable()
export class StaticTokenProvider implements TokenProvider {
  private currentToken: string | null = null;

  /**
   * Store the access token to attach to subsequent requests.
   *
   * @param token the current Keycloak access token, or `null` when the user is
   *   not authenticated.
   */
  public setToken(token: string | null): void {
    this.currentToken = token;
  }

  /**
   * Return the stored access token, or `null` when none has been set.
   *
   * @returns the current token result read by the SDK's auth interceptors.
   */
  public getToken(): TokenResult {
    return this.currentToken;
  }
}

/**
 * Build the Angular environment providers that wire this SDK's bearer-token auth
 * into an application: the {@link StaticTokenProvider} plus the gRPC-web
 * interceptor (via {@link provideOndewoT2sAuth}) and the HTTP interceptor.
 *
 * Drop the result into a standalone `bootstrapApplication(..., { providers })`
 * call or an `ApplicationConfig`.
 *
 * @returns the environment providers registering the token provider and both
 *   auth interceptors.
 */
export function buildOndewoT2sExampleProviders(): EnvironmentProviders[] {
  return [
    provideOndewoT2sAuth(StaticTokenProvider),
    provideHttpClient(withInterceptors([authHttpInterceptor]))
  ];
}

/**
 * Thin application service that wraps the generated {@link Text2SpeechClient}.
 *
 * Injecting the generated client and exposing task-focused methods is the
 * idiomatic way to consume an `@ngx-grpc` service in Angular. Every call this
 * service makes automatically carries the `Authorization: Bearer <token>`
 * metadata once {@link buildOndewoT2sExampleProviders} is registered.
 */
@Injectable({ providedIn: "root" })
export class T2sSpeechSynthesisService {
  /**
   * @param client the generated T2S gRPC-web client, provided by Angular DI.
   */
  public constructor(private readonly client: Text2SpeechClient) {}

  /**
   * Synthesize `text` with the given pipeline into WAV audio.
   *
   * @param text the text to speak.
   * @param pipelineId the id of the T2S pipeline to synthesize with.
   * @returns an observable emitting the {@link SynthesizeResponse} (audio bytes
   *   plus metadata) once the server responds.
   */
  public synthesize(text: string, pipelineId: string): Observable<SynthesizeResponse> {
    const request: SynthesizeRequest = new SynthesizeRequest({
      text,
      config: new RequestConfig({
        t2sPipelineId: pipelineId,
        audioFormat: AudioFormat.wav,
        sampleRate: 22050,
        useCache: true
      })
    });
    return this.client.synthesize(request);
  }

  /**
   * Convenience wrapper that awaits {@link synthesize} and returns just the raw
   * audio bytes — a typical "handle the response" step.
   *
   * @param text the text to speak.
   * @param pipelineId the id of the T2S pipeline to synthesize with.
   * @returns the synthesized audio as raw bytes.
   */
  public async synthesizeToAudio(text: string, pipelineId: string): Promise<Uint8Array> {
    const response: SynthesizeResponse = await firstValueFrom(this.synthesize(text, pipelineId));
    return response.audio;
  }
}

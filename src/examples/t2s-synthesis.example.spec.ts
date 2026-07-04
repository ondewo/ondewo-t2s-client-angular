import { EnvironmentProviders } from "@angular/core";
import { firstValueFrom, Observable, of } from "rxjs";
import { Text2SpeechClient } from "../../api/ondewo/t2s/text-to-speech.pbsc";
import { AudioFormat, SynthesizeRequest, SynthesizeResponse } from "../../api/ondewo/t2s/text-to-speech.pb";
import { buildOndewoT2sExampleProviders, StaticTokenProvider, T2sSpeechSynthesisService } from "./t2s-synthesis.example";

/** Text handed to the synthesis service across the specs. */
const TEXT: string = "Hello from ONDEWO T2S.";
/** Pipeline id selected in the request config. */
const PIPELINE_ID: string = "kerstin-neural-22khz";
/** The sample rate the example service pins on every request. */
const SAMPLE_RATE: number = 22050;
/** Audio bytes the mocked server "returns". */
const AUDIO_BYTES: Uint8Array = new Uint8Array([1, 2, 3, 4]);

/** The service under test, its recording mock, and the captured request. */
interface SynthesisHarness {
  /** The example service wired to the mocked client. */
  service: T2sSpeechSynthesisService;
  /** The `synthesize` mock standing in for the gRPC transport. */
  synthesizeMock: jest.Mock;
  /** Returns the request the service handed to the client (throws if none). */
  capturedRequest: () => SynthesizeRequest;
}

/**
 * Build a {@link SynthesizeResponse} standing in for a real server reply.
 *
 * @returns a response carrying {@link AUDIO_BYTES} and matching metadata.
 */
function buildResponse(): SynthesizeResponse {
  return new SynthesizeResponse({
    audioUuid: "audio-uuid-1",
    audio: AUDIO_BYTES,
    audioLength: 1.5,
    sampleRate: SAMPLE_RATE,
    text: TEXT,
    normalizedText: TEXT
  });
}

/**
 * Wire a {@link T2sSpeechSynthesisService} to a mocked {@link Text2SpeechClient}
 * whose `synthesize` records the request it received and emits `response`.
 *
 * @param response the reply the mocked client should emit.
 * @returns the {@link SynthesisHarness} for the assertions.
 */
function buildServiceWithMock(response: SynthesizeResponse): SynthesisHarness {
  let sent: SynthesizeRequest | undefined;
  const synthesizeMock: jest.Mock = jest.fn((request: SynthesizeRequest): Observable<SynthesizeResponse> => {
    sent = request;
    return of(response);
  });
  const client: Text2SpeechClient = { synthesize: synthesizeMock } as unknown as Text2SpeechClient;
  return {
    service: new T2sSpeechSynthesisService(client),
    synthesizeMock,
    capturedRequest: (): SynthesizeRequest => {
      if (sent === undefined) {
        throw new Error("synthesize was not called");
      }
      return sent;
    }
  };
}

/**
 * Covers the representative-RPC example: the {@link T2sSpeechSynthesisService}
 * must build a correct {@link SynthesizeRequest} from its arguments, forward it
 * to the generated client exactly once, and surface the server's
 * {@link SynthesizeResponse} — proven end to end against a mocked client, with
 * no live gRPC server.
 */
describe("T2sSpeechSynthesisService", (): void => {
  /** The request carries the text and the pipeline/audio config the example pins. */
  it("builds a SynthesizeRequest with the text and pipeline config", async (): Promise<void> => {
    const harness: SynthesisHarness = buildServiceWithMock(buildResponse());

    await firstValueFrom(harness.service.synthesize(TEXT, PIPELINE_ID));

    const request: SynthesizeRequest = harness.capturedRequest();
    expect(harness.synthesizeMock).toHaveBeenCalledTimes(1);
    expect(request.text).toBe(TEXT);
    expect(request.config?.t2sPipelineId).toBe(PIPELINE_ID);
    expect(request.config?.audioFormat).toBe(AudioFormat.wav);
    expect(request.config?.sampleRate).toBe(SAMPLE_RATE);
    expect(request.config?.useCache).toBe(true);
  });

  /** The server's response object flows back to the caller unchanged. */
  it("passes the server's SynthesizeResponse straight through", async (): Promise<void> => {
    const response: SynthesizeResponse = buildResponse();
    const harness: SynthesisHarness = buildServiceWithMock(response);

    const received: SynthesizeResponse = await firstValueFrom(harness.service.synthesize(TEXT, PIPELINE_ID));

    expect(received).toBe(response);
  });

  /** The convenience wrapper extracts just the raw audio bytes from the response. */
  it("synthesizeToAudio returns just the audio bytes from the response", async (): Promise<void> => {
    const harness: SynthesisHarness = buildServiceWithMock(buildResponse());

    const audio: Uint8Array = await harness.service.synthesizeToAudio(TEXT, PIPELINE_ID);

    expect(audio).toEqual(AUDIO_BYTES);
  });
});

/**
 * Covers the auth seam shown by the example: {@link StaticTokenProvider} feeds
 * the current bearer token (or `null` when unauthenticated) into the SDK's
 * interceptors — the current Keycloak bearer pattern, with no legacy credential flow.
 */
describe("StaticTokenProvider", (): void => {
  /** Before a token is set, the provider reports "no token" so requests go unauthenticated. */
  it("returns null before any token is set", (): void => {
    const provider: StaticTokenProvider = new StaticTokenProvider();
    expect(provider.getToken()).toBeNull();
  });

  /** Once set, the stored bearer token is what the interceptors read. */
  it("returns the stored bearer token once set", (): void => {
    const provider: StaticTokenProvider = new StaticTokenProvider();
    const token: string = "header.payload.signature";

    provider.setToken(token);

    expect(provider.getToken()).toBe(token);
  });
});

/**
 * Covers {@link buildOndewoT2sExampleProviders}: the one call that registers the
 * token provider and both auth interceptors for a consuming application.
 */
describe("buildOndewoT2sExampleProviders", (): void => {
  /** It yields exactly the gRPC-auth and HTTP-client environment providers. */
  it("returns the token-provider and interceptor environment providers", (): void => {
    const providers: EnvironmentProviders[] = buildOndewoT2sExampleProviders();
    expect(providers).toHaveLength(2);
  });
});

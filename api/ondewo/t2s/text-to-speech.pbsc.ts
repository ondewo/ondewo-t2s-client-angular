/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './text-to-speech.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_TEXT2_SPEECH_CLIENT_SETTINGS } from './text-to-speech.pbconf';
/**
 * Service client implementation for ondewo.t2s.Text2Speech
 */
@Injectable({ providedIn: 'any' })
export class Text2SpeechClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.t2s.Text2Speech/Synthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SynthesizeResponse>>
     */
    synthesize: (
      requestData: thisProto.SynthesizeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SynthesizeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/Synthesize',
        requestData,
        requestMetadata,
        requestClass: thisProto.SynthesizeRequest,
        responseClass: thisProto.SynthesizeResponse
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/BatchSynthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchSynthesizeResponse>>
     */
    batchSynthesize: (
      requestData: thisProto.BatchSynthesizeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.BatchSynthesizeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/BatchSynthesize',
        requestData,
        requestMetadata,
        requestClass: thisProto.BatchSynthesizeRequest,
        responseClass: thisProto.BatchSynthesizeResponse
      });
    },
    /**
     * Bidirectional streaming: /ondewo.t2s.Text2Speech/StreamingSynthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamingSynthesizeResponse>>
     */
    streamingSynthesize: (
      requestData: Observable<thisProto.StreamingSynthesizeRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamingSynthesizeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.bidiStream,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/StreamingSynthesize',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamingSynthesizeRequest,
        responseClass: thisProto.StreamingSynthesizeResponse
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/NormalizeText
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.NormalizeTextResponse>>
     */
    normalizeText: (
      requestData: thisProto.NormalizeTextRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.NormalizeTextResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/NormalizeText',
        requestData,
        requestMetadata,
        requestClass: thisProto.NormalizeTextRequest,
        responseClass: thisProto.NormalizeTextResponse
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/GetT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
     */
    getT2sPipeline: (
      requestData: thisProto.T2sPipelineId,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Text2SpeechConfig>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/GetT2sPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.T2sPipelineId,
        responseClass: thisProto.Text2SpeechConfig
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/CreateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.T2sPipelineId>>
     */
    createT2sPipeline: (
      requestData: thisProto.Text2SpeechConfig,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.T2sPipelineId>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.Text2SpeechConfig,
        responseClass: thisProto.T2sPipelineId
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/DeleteT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteT2sPipeline: (
      requestData: thisProto.T2sPipelineId,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.T2sPipelineId,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/UpdateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateT2sPipeline: (
      requestData: thisProto.Text2SpeechConfig,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
        requestData,
        requestMetadata,
        requestClass: thisProto.Text2SpeechConfig,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListT2sPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
     */
    listT2sPipelines: (
      requestData: thisProto.ListT2sPipelinesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/ListT2sPipelines',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListT2sPipelinesRequest,
        responseClass: thisProto.ListT2sPipelinesResponse
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListT2sLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListT2sLanguagesResponse>>
     */
    listT2sLanguages: (
      requestData: thisProto.ListT2sLanguagesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListT2sLanguagesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/ListT2sLanguages',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListT2sLanguagesRequest,
        responseClass: thisProto.ListT2sLanguagesResponse
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListT2sDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListT2sDomainsResponse>>
     */
    listT2sDomains: (
      requestData: thisProto.ListT2sDomainsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListT2sDomainsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/ListT2sDomains',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListT2sDomainsRequest,
        responseClass: thisProto.ListT2sDomainsResponse
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListT2sNormalizationPipelinesResponse>>
     */
    listT2sNormalizationPipelines: (
      requestData: thisProto.ListT2sNormalizationPipelinesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListT2sNormalizationPipelinesResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListT2sNormalizationPipelinesRequest,
        responseClass: thisProto.ListT2sNormalizationPipelinesResponse
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/GetServiceInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.T2SGetServiceInfoResponse>>
     */
    getServiceInfo: (
      requestData: googleProtobuf000.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.T2SGetServiceInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/GetServiceInfo',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf000.Empty,
        responseClass: thisProto.T2SGetServiceInfoResponse
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/GetCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
     */
    getCustomPhonemizer: (
      requestData: thisProto.PhonemizerId,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CustomPhonemizerProto>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/GetCustomPhonemizer',
        requestData,
        requestMetadata,
        requestClass: thisProto.PhonemizerId,
        responseClass: thisProto.CustomPhonemizerProto
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/CreateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PhonemizerId>>
     */
    createCustomPhonemizer: (
      requestData: thisProto.CreateCustomPhonemizerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PhonemizerId>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/CreateCustomPhonemizer',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateCustomPhonemizerRequest,
        responseClass: thisProto.PhonemizerId
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/DeleteCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteCustomPhonemizer: (
      requestData: thisProto.PhonemizerId,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/DeleteCustomPhonemizer',
        requestData,
        requestMetadata,
        requestClass: thisProto.PhonemizerId,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/UpdateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
     */
    updateCustomPhonemizer: (
      requestData: thisProto.UpdateCustomPhonemizerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CustomPhonemizerProto>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/UpdateCustomPhonemizer',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCustomPhonemizerRequest,
        responseClass: thisProto.CustomPhonemizerProto
      });
    },
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>
     */
    listCustomPhonemizer: (
      requestData: thisProto.ListCustomPhonemizerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.t2s.Text2Speech/ListCustomPhonemizer',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCustomPhonemizerRequest,
        responseClass: thisProto.ListCustomPhonemizerResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_TEXT2_SPEECH_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.t2s.Text2Speech',
      settings
    );
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/Synthesize
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SynthesizeResponse>
   */
  synthesize(
    requestData: thisProto.SynthesizeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SynthesizeResponse> {
    return this.$raw
      .synthesize(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/BatchSynthesize
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchSynthesizeResponse>
   */
  batchSynthesize(
    requestData: thisProto.BatchSynthesizeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.BatchSynthesizeResponse> {
    return this.$raw
      .batchSynthesize(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Bidirectional streaming @/ondewo.t2s.Text2Speech/StreamingSynthesize
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamingSynthesizeResponse>
   */
  streamingSynthesize(
    requestData: Observable<thisProto.StreamingSynthesizeRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamingSynthesizeResponse> {
    return this.$raw
      .streamingSynthesize(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/NormalizeText
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.NormalizeTextResponse>
   */
  normalizeText(
    requestData: thisProto.NormalizeTextRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.NormalizeTextResponse> {
    return this.$raw
      .normalizeText(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/GetT2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Text2SpeechConfig>
   */
  getT2sPipeline(
    requestData: thisProto.T2sPipelineId,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Text2SpeechConfig> {
    return this.$raw
      .getT2sPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/CreateT2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.T2sPipelineId>
   */
  createT2sPipeline(
    requestData: thisProto.Text2SpeechConfig,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.T2sPipelineId> {
    return this.$raw
      .createT2sPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/DeleteT2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteT2sPipeline(
    requestData: thisProto.T2sPipelineId,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deleteT2sPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/UpdateT2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  updateT2sPipeline(
    requestData: thisProto.Text2SpeechConfig,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .updateT2sPipeline(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListT2sPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListT2sPipelinesResponse>
   */
  listT2sPipelines(
    requestData: thisProto.ListT2sPipelinesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListT2sPipelinesResponse> {
    return this.$raw
      .listT2sPipelines(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListT2sLanguages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListT2sLanguagesResponse>
   */
  listT2sLanguages(
    requestData: thisProto.ListT2sLanguagesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListT2sLanguagesResponse> {
    return this.$raw
      .listT2sLanguages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListT2sDomains
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListT2sDomainsResponse>
   */
  listT2sDomains(
    requestData: thisProto.ListT2sDomainsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListT2sDomainsResponse> {
    return this.$raw
      .listT2sDomains(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListT2sNormalizationPipelinesResponse>
   */
  listT2sNormalizationPipelines(
    requestData: thisProto.ListT2sNormalizationPipelinesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListT2sNormalizationPipelinesResponse> {
    return this.$raw
      .listT2sNormalizationPipelines(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/GetServiceInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.T2SGetServiceInfoResponse>
   */
  getServiceInfo(
    requestData: googleProtobuf000.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.T2SGetServiceInfoResponse> {
    return this.$raw
      .getServiceInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/GetCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CustomPhonemizerProto>
   */
  getCustomPhonemizer(
    requestData: thisProto.PhonemizerId,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CustomPhonemizerProto> {
    return this.$raw
      .getCustomPhonemizer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/CreateCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PhonemizerId>
   */
  createCustomPhonemizer(
    requestData: thisProto.CreateCustomPhonemizerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PhonemizerId> {
    return this.$raw
      .createCustomPhonemizer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/DeleteCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteCustomPhonemizer(
    requestData: thisProto.PhonemizerId,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deleteCustomPhonemizer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/UpdateCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CustomPhonemizerProto>
   */
  updateCustomPhonemizer(
    requestData: thisProto.UpdateCustomPhonemizerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CustomPhonemizerProto> {
    return this.$raw
      .updateCustomPhonemizer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCustomPhonemizerResponse>
   */
  listCustomPhonemizer(
    requestData: thisProto.ListCustomPhonemizerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCustomPhonemizerResponse> {
    return this.$raw
      .listCustomPhonemizer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}

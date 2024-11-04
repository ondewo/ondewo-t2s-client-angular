import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './text-to-speech.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.t2s.Text2Speech
 */
export declare class Text2SpeechClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.t2s.Text2Speech/Synthesize
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SynthesizeResponse>>
         */
        synthesize: (requestData: thisProto.SynthesizeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SynthesizeResponse>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/BatchSynthesize
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchSynthesizeResponse>>
         */
        batchSynthesize: (requestData: thisProto.BatchSynthesizeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchSynthesizeResponse>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/NormalizeText
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.NormalizeTextResponse>>
         */
        normalizeText: (requestData: thisProto.NormalizeTextRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.NormalizeTextResponse>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/GetT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
         */
        getT2sPipeline: (requestData: thisProto.T2sPipelineId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Text2SpeechConfig>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/CreateT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.T2sPipelineId>>
         */
        createT2sPipeline: (requestData: thisProto.Text2SpeechConfig, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.T2sPipelineId>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/DeleteT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        deleteT2sPipeline: (requestData: thisProto.T2sPipelineId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/UpdateT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        updateT2sPipeline: (requestData: thisProto.Text2SpeechConfig, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListT2sPipelines
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
         */
        listT2sPipelines: (requestData: thisProto.ListT2sPipelinesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListT2sLanguages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListT2sLanguagesResponse>>
         */
        listT2sLanguages: (requestData: thisProto.ListT2sLanguagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListT2sLanguagesResponse>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListT2sDomains
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListT2sDomainsResponse>>
         */
        listT2sDomains: (requestData: thisProto.ListT2sDomainsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListT2sDomainsResponse>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/GetServiceInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.T2SGetServiceInfoResponse>>
         */
        getServiceInfo: (requestData: googleProtobuf000.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.T2SGetServiceInfoResponse>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/GetCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
         */
        getCustomPhonemizer: (requestData: thisProto.PhonemizerId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/CreateCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PhonemizerId>>
         */
        createCustomPhonemizer: (requestData: thisProto.CreateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PhonemizerId>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/DeleteCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        deleteCustomPhonemizer: (requestData: thisProto.PhonemizerId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/UpdateCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
         */
        updateCustomPhonemizer: (requestData: thisProto.UpdateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>;
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>
         */
        listCustomPhonemizer: (requestData: thisProto.ListCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.t2s.Text2Speech/Synthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SynthesizeResponse>
     */
    synthesize(requestData: thisProto.SynthesizeRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SynthesizeResponse>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/BatchSynthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchSynthesizeResponse>
     */
    batchSynthesize(requestData: thisProto.BatchSynthesizeRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchSynthesizeResponse>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/NormalizeText
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.NormalizeTextResponse>
     */
    normalizeText(requestData: thisProto.NormalizeTextRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.NormalizeTextResponse>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/GetT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Text2SpeechConfig>
     */
    getT2sPipeline(requestData: thisProto.T2sPipelineId, requestMetadata?: GrpcMetadata): Observable<thisProto.Text2SpeechConfig>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/CreateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.T2sPipelineId>
     */
    createT2sPipeline(requestData: thisProto.Text2SpeechConfig, requestMetadata?: GrpcMetadata): Observable<thisProto.T2sPipelineId>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/DeleteT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteT2sPipeline(requestData: thisProto.T2sPipelineId, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/UpdateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    updateT2sPipeline(requestData: thisProto.Text2SpeechConfig, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/ListT2sPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sPipelinesResponse>
     */
    listT2sPipelines(requestData: thisProto.ListT2sPipelinesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListT2sPipelinesResponse>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/ListT2sLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sLanguagesResponse>
     */
    listT2sLanguages(requestData: thisProto.ListT2sLanguagesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListT2sLanguagesResponse>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/ListT2sDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sDomainsResponse>
     */
    listT2sDomains(requestData: thisProto.ListT2sDomainsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListT2sDomainsResponse>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/GetServiceInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.T2SGetServiceInfoResponse>
     */
    getServiceInfo(requestData: googleProtobuf000.Empty, requestMetadata?: GrpcMetadata): Observable<thisProto.T2SGetServiceInfoResponse>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/GetCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CustomPhonemizerProto>
     */
    getCustomPhonemizer(requestData: thisProto.PhonemizerId, requestMetadata?: GrpcMetadata): Observable<thisProto.CustomPhonemizerProto>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/CreateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PhonemizerId>
     */
    createCustomPhonemizer(requestData: thisProto.CreateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.PhonemizerId>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/DeleteCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteCustomPhonemizer(requestData: thisProto.PhonemizerId, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/UpdateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CustomPhonemizerProto>
     */
    updateCustomPhonemizer(requestData: thisProto.UpdateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CustomPhonemizerProto>;
    /**
     * Unary call @/ondewo.t2s.Text2Speech/ListCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListCustomPhonemizerResponse>
     */
    listCustomPhonemizer(requestData: thisProto.ListCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListCustomPhonemizerResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Text2SpeechClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Text2SpeechClient>;
}

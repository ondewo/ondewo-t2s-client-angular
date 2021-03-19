import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './text-to-speech.pb';
import * as googleProtobuf000 from '../../google/protobuf/empty.pb';
export declare class Text2SpeechClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.SynthesizeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SynthesizeResponse>
     */
    synthesize(requestData: thisProto.SynthesizeRequest, requestMetadata?: Metadata): Observable<thisProto.SynthesizeResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.SynthesizeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SynthesizeResponse>>
     */
    synthesize$eventStream(requestData: thisProto.SynthesizeRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.SynthesizeResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.T2sPipelineId request
     * @param Metadata metadata
     * @return Observable<thisProto.Text2SpeechConfig>
     */
    getT2sPipeline(requestData: thisProto.T2sPipelineId, requestMetadata?: Metadata): Observable<thisProto.Text2SpeechConfig>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.T2sPipelineId request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
     */
    getT2sPipeline$eventStream(requestData: thisProto.T2sPipelineId, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Text2SpeechConfig>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.Text2SpeechConfig request
     * @param Metadata metadata
     * @return Observable<thisProto.T2sPipelineId>
     */
    createT2sPipeline(requestData: thisProto.Text2SpeechConfig, requestMetadata?: Metadata): Observable<thisProto.T2sPipelineId>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.Text2SpeechConfig request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.T2sPipelineId>>
     */
    createT2sPipeline$eventStream(requestData: thisProto.Text2SpeechConfig, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.T2sPipelineId>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.T2sPipelineId request
     * @param Metadata metadata
     * @return Observable<googleProtobuf000.Empty>
     */
    deleteT2sPipeline(requestData: thisProto.T2sPipelineId, requestMetadata?: Metadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.T2sPipelineId request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteT2sPipeline$eventStream(requestData: thisProto.T2sPipelineId, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf000.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.Text2SpeechConfig request
     * @param Metadata metadata
     * @return Observable<googleProtobuf000.Empty>
     */
    updateT2sPipeline(requestData: thisProto.Text2SpeechConfig, requestMetadata?: Metadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.Text2SpeechConfig request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateT2sPipeline$eventStream(requestData: thisProto.Text2SpeechConfig, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf000.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListT2sPipelinesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListT2sPipelinesResponse>
     */
    listT2sPipelines(requestData: thisProto.ListT2sPipelinesRequest, requestMetadata?: Metadata): Observable<thisProto.ListT2sPipelinesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListT2sPipelinesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
     */
    listT2sPipelines$eventStream(requestData: thisProto.ListT2sPipelinesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>;
}

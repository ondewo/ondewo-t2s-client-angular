/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './text-to-speech.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_TEXT2_SPEECH_CLIENT_SETTINGS } from './text-to-speech.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./text-to-speech.pbconf";
import * as i2 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.t2s.Text2Speech
 */
export class Text2SpeechClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.t2s.Text2Speech/Synthesize
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SynthesizeResponse>>
             */
            synthesize: (requestData, requestMetadata = new GrpcMetadata()) => {
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
             * Unary RPC for /ondewo.t2s.Text2Speech/BatchSynthesize
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchSynthesizeResponse>>
             */
            batchSynthesize: (requestData, requestMetadata = new GrpcMetadata()) => {
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
             * Unary RPC for /ondewo.t2s.Text2Speech/GetT2sPipeline
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
             */
            getT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
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
             * Unary RPC for /ondewo.t2s.Text2Speech/CreateT2sPipeline
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.T2sPipelineId>>
             */
            createT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
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
             * Unary RPC for /ondewo.t2s.Text2Speech/DeleteT2sPipeline
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            deleteT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
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
             * Unary RPC for /ondewo.t2s.Text2Speech/UpdateT2sPipeline
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            updateT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
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
             * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sPipelines
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
             */
            listT2sPipelines: (requestData, requestMetadata = new GrpcMetadata()) => {
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
             * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sLanguages
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListT2sLanguagesResponse>>
             */
            listT2sLanguages: (requestData, requestMetadata = new GrpcMetadata()) => {
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
             * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sDomains
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListT2sDomainsResponse>>
             */
            listT2sDomains: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.t2s.Text2Speech/ListT2sDomains',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ListT2sDomainsRequest,
                    responseClass: thisProto.ListT2sDomainsResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.t2s.Text2Speech', settings);
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/Synthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SynthesizeResponse>
     */
    synthesize(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .synthesize(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/BatchSynthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchSynthesizeResponse>
     */
    batchSynthesize(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchSynthesize(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/GetT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Text2SpeechConfig>
     */
    getT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getT2sPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/CreateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.T2sPipelineId>
     */
    createT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createT2sPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/DeleteT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteT2sPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/UpdateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    updateT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateT2sPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sPipelinesResponse>
     */
    listT2sPipelines(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listT2sPipelines(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sLanguagesResponse>
     */
    listT2sLanguages(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listT2sLanguages(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sDomainsResponse>
     */
    listT2sDomains(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listT2sDomains(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
Text2SpeechClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function Text2SpeechClient_Factory() { return new Text2SpeechClient(i0.ɵɵinject(i1.GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: Text2SpeechClient, providedIn: "any" });
Text2SpeechClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
Text2SpeechClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_TEXT2_SPEECH_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC10by1zcGVlY2gucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vdDJzL3RleHQtdG8tc3BlZWNoLnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFJWixZQUFZLEVBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFDNUU7O0dBRUc7QUFFSCxNQUFNLE9BQU8saUJBQWlCO0lBd001QixZQUN5RCxRQUFhLEVBQ3ZDLGFBQXFDLEVBQzFELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUF4TTlCOzs7O1dBSUc7UUFDSCxTQUFJLEdBQUc7WUFDTDs7Ozs7O2VBTUc7WUFDSCxVQUFVLEVBQUUsQ0FDVixXQUF3QyxFQUN4QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDaUIsRUFBRTtnQkFDdkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFBRSxvQ0FBb0M7b0JBQzFDLFdBQVc7b0JBQ1gsZUFBZTtv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VyxFQUFFLGVBQWUsQ0FBQzthQUM1QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7WUFsV0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7OzRDQTBNNUIsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7NENBQ3BELE1BQU0sU0FBQyxtQkFBbUI7WUF0TjdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNFdmVudCxcbiAgR3JwY01ldGFkYXRhXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vdGV4dC10by1zcGVlY2gucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDAgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0IHsgR1JQQ19URVhUMl9TUEVFQ0hfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi90ZXh0LXRvLXNwZWVjaC5wYmNvbmYnO1xuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5UZXh0MlNwZWVjaFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgVGV4dDJTcGVlY2hDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5UZXh0MlNwZWVjaC9TeW50aGVzaXplXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlN5bnRoZXNpemVSZXNwb25zZT4+XG4gICAgICovXG4gICAgc3ludGhlc2l6ZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TeW50aGVzaXplUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TeW50aGVzaXplUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28udDJzLlRleHQyU3BlZWNoL1N5bnRoZXNpemUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5TeW50aGVzaXplUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlN5bnRoZXNpemVSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLlRleHQyU3BlZWNoL0JhdGNoU3ludGhlc2l6ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaFN5bnRoZXNpemVSZXNwb25zZT4+XG4gICAgICovXG4gICAgYmF0Y2hTeW50aGVzaXplOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoU3ludGhlc2l6ZVJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hTeW50aGVzaXplUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28udDJzLlRleHQyU3BlZWNoL0JhdGNoU3ludGhlc2l6ZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoU3ludGhlc2l6ZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5CYXRjaFN5bnRoZXNpemVSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLlRleHQyU3BlZWNoL0dldFQyc1BpcGVsaW5lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlRleHQyU3BlZWNoQ29uZmlnPj5cbiAgICAgKi9cbiAgICBnZXRUMnNQaXBlbGluZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5UMnNQaXBlbGluZUlkLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlRleHQyU3BlZWNoQ29uZmlnPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnQycy5UZXh0MlNwZWVjaC9HZXRUMnNQaXBlbGluZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlQyc1BpcGVsaW5lSWQsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5UZXh0MlNwZWVjaENvbmZpZ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLlRleHQyU3BlZWNoL0NyZWF0ZVQyc1BpcGVsaW5lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlQyc1BpcGVsaW5lSWQ+PlxuICAgICAqL1xuICAgIGNyZWF0ZVQyc1BpcGVsaW5lOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlRleHQyU3BlZWNoQ29uZmlnLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlQyc1BpcGVsaW5lSWQ+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28udDJzLlRleHQyU3BlZWNoL0NyZWF0ZVQyc1BpcGVsaW5lJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVGV4dDJTcGVlY2hDb25maWcsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5UMnNQaXBlbGluZUlkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuVGV4dDJTcGVlY2gvRGVsZXRlVDJzUGlwZWxpbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT4+XG4gICAgICovXG4gICAgZGVsZXRlVDJzUGlwZWxpbmU6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVDJzUGlwZWxpbmVJZCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnQycy5UZXh0MlNwZWVjaC9EZWxldGVUMnNQaXBlbGluZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlQyc1BpcGVsaW5lSWQsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuVGV4dDJTcGVlY2gvVXBkYXRlVDJzUGlwZWxpbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT4+XG4gICAgICovXG4gICAgdXBkYXRlVDJzUGlwZWxpbmU6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVGV4dDJTcGVlY2hDb25maWcsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by50MnMuVGV4dDJTcGVlY2gvVXBkYXRlVDJzUGlwZWxpbmUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5UZXh0MlNwZWVjaENvbmZpZyxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5UZXh0MlNwZWVjaC9MaXN0VDJzUGlwZWxpbmVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RUMnNQaXBlbGluZXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFQyc1BpcGVsaW5lczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0VDJzUGlwZWxpbmVzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28udDJzLlRleHQyU3BlZWNoL0xpc3RUMnNQaXBlbGluZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0VDJzUGlwZWxpbmVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RUMnNQaXBlbGluZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLlRleHQyU3BlZWNoL0xpc3RUMnNMYW5ndWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFQyc0xhbmd1YWdlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0VDJzTGFuZ3VhZ2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RUMnNMYW5ndWFnZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by50MnMuVGV4dDJTcGVlY2gvTGlzdFQyc0xhbmd1YWdlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFQyc0xhbmd1YWdlc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuVGV4dDJTcGVlY2gvTGlzdFQyc0RvbWFpbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFQyc0RvbWFpbnNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFQyc0RvbWFpbnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFQyc0RvbWFpbnNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RUMnNEb21haW5zUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28udDJzLlRleHQyU3BlZWNoL0xpc3RUMnNEb21haW5zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdFQyc0RvbWFpbnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFQyc0RvbWFpbnNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR1JQQ19URVhUMl9TUEVFQ0hfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoXG4gICAgICAnb25kZXdvLnQycy5UZXh0MlNwZWVjaCcsXG4gICAgICBzZXR0aW5nc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5UZXh0MlNwZWVjaC9TeW50aGVzaXplXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlN5bnRoZXNpemVSZXNwb25zZT5cbiAgICovXG4gIHN5bnRoZXNpemUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TeW50aGVzaXplUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU3ludGhlc2l6ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnN5bnRoZXNpemUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLlRleHQyU3BlZWNoL0JhdGNoU3ludGhlc2l6ZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaFN5bnRoZXNpemVSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoU3ludGhlc2l6ZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoU3ludGhlc2l6ZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoU3ludGhlc2l6ZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuVGV4dDJTcGVlY2gvR2V0VDJzUGlwZWxpbmVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVGV4dDJTcGVlY2hDb25maWc+XG4gICAqL1xuICBnZXRUMnNQaXBlbGluZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlQyc1BpcGVsaW5lSWQsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlRleHQyU3BlZWNoQ29uZmlnPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFQyc1BpcGVsaW5lKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5UZXh0MlNwZWVjaC9DcmVhdGVUMnNQaXBlbGluZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5UMnNQaXBlbGluZUlkPlxuICAgKi9cbiAgY3JlYXRlVDJzUGlwZWxpbmUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5UZXh0MlNwZWVjaENvbmZpZyxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVDJzUGlwZWxpbmVJZD4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jcmVhdGVUMnNQaXBlbGluZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuVGV4dDJTcGVlY2gvRGVsZXRlVDJzUGlwZWxpbmVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT5cbiAgICovXG4gIGRlbGV0ZVQyc1BpcGVsaW5lKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVDJzUGlwZWxpbmVJZCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVUMnNQaXBlbGluZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuVGV4dDJTcGVlY2gvVXBkYXRlVDJzUGlwZWxpbmVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT5cbiAgICovXG4gIHVwZGF0ZVQyc1BpcGVsaW5lKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVGV4dDJTcGVlY2hDb25maWcsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDAuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudXBkYXRlVDJzUGlwZWxpbmUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLlRleHQyU3BlZWNoL0xpc3RUMnNQaXBlbGluZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFQyc1BpcGVsaW5lcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdFQyc1BpcGVsaW5lcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuVGV4dDJTcGVlY2gvTGlzdFQyc0xhbmd1YWdlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0VDJzTGFuZ3VhZ2VzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RUMnNMYW5ndWFnZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0VDJzTGFuZ3VhZ2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5UZXh0MlNwZWVjaC9MaXN0VDJzRG9tYWluc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VDJzRG9tYWluc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFQyc0RvbWFpbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0VDJzRG9tYWluc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RUMnNEb21haW5zUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdFQyc0RvbWFpbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19
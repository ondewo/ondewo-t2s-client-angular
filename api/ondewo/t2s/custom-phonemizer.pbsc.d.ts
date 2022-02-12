import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './custom-phonemizer.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.t2s.CustomPhonemizers
 */
export declare class CustomPhonemizersClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
         */
        getCustomPhonemizer: (requestData: thisProto.PhonemizerId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>;
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PhonemizerId>>
         */
        createCustomPhonemizer: (requestData: thisProto.CreateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PhonemizerId>>;
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        deleteCustomPhonemizer: (requestData: thisProto.PhonemizerId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf000.Empty>>;
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
         */
        updateCustomPhonemizer: (requestData: thisProto.UpdateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>;
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>
         */
        listCustomPhonemizer: (requestData: thisProto.ListCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CustomPhonemizerProto>
     */
    getCustomPhonemizer(requestData: thisProto.PhonemizerId, requestMetadata?: GrpcMetadata): Observable<thisProto.CustomPhonemizerProto>;
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PhonemizerId>
     */
    createCustomPhonemizer(requestData: thisProto.CreateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.PhonemizerId>;
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteCustomPhonemizer(requestData: thisProto.PhonemizerId, requestMetadata?: GrpcMetadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CustomPhonemizerProto>
     */
    updateCustomPhonemizer(requestData: thisProto.UpdateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CustomPhonemizerProto>;
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListCustomPhonemizerResponse>
     */
    listCustomPhonemizer(requestData: thisProto.ListCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListCustomPhonemizerResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPhonemizersClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomPhonemizersClient>;
}
//# sourceMappingURL=custom-phonemizer.pbsc.d.ts.map
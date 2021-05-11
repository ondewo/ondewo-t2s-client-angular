/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './custom-phonemizer.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS } from './custom-phonemizer.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./custom-phonemizer.pbconf";
import * as i2 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.t2s.CustomPhonemizers
 */
export class CustomPhonemizersClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
             */
            getCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.PhonemizerId,
                    responseClass: thisProto.CustomPhonemizerProto
                });
            },
            /**
             * Unary RPC for /ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.PhonemizerId>>
             */
            createCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateCustomPhonemizerRequest,
                    responseClass: thisProto.PhonemizerId
                });
            },
            /**
             * Unary RPC for /ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            deleteCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.PhonemizerId,
                    responseClass: googleProtobuf000.Empty
                });
            },
            /**
             * Unary RPC for /ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
             */
            updateCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateCustomPhonemizerRequest,
                    responseClass: thisProto.CustomPhonemizerProto
                });
            },
            /**
             * Unary RPC for /ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>
             */
            listCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ListCustomPhonemizerRequest,
                    responseClass: thisProto.ListCustomPhonemizerResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.t2s.CustomPhonemizers', settings);
    }
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CustomPhonemizerProto>
     */
    getCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getCustomPhonemizer(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PhonemizerId>
     */
    createCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createCustomPhonemizer(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteCustomPhonemizer(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CustomPhonemizerProto>
     */
    updateCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateCustomPhonemizer(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListCustomPhonemizerResponse>
     */
    listCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listCustomPhonemizer(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
CustomPhonemizersClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomPhonemizersClient_Factory() { return new CustomPhonemizersClient(i0.ɵɵinject(i1.GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: CustomPhonemizersClient, providedIn: "any" });
CustomPhonemizersClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
CustomPhonemizersClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXBob25lbWl6ZXIucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vdDJzL2N1c3RvbS1waG9uZW1pemVyLnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFJWixZQUFZLEVBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFDckY7O0dBRUc7QUFFSCxNQUFNLE9BQU8sdUJBQXVCO0lBb0hsQyxZQUMrRCxRQUFhLEVBQzdDLGFBQXFDLEVBQzFELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFwSDlCOzs7O1dBSUc7UUFDSCxTQUFJLEdBQUc7WUFDTDs7Ozs7O2VBTUc7WUFDSCxtQkFBbUIsRUFBRSxDQUNuQixXQUFtQyxFQUNuQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDb0IsRUFBRTtnQkFDMUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFBRSxtREFBbUQ7b0JBQ3pELFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLFlBQVk7b0JBQ3BDLGFBQWEsRUFBRSxTQUFTLENBQUMscUJBQXFCO2lCQUMvQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsc0JBQXNCLEVBQUUsQ0FDdEIsV0FBb0QsRUFDcEQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ1csRUFBRTtnQkFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFBRSxzREFBc0Q7b0JBQzVELFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLDZCQUE2QjtvQkFDckQsYUFBYSxFQUFFLFNBQVMsQ0FBQyxZQUFZO2lCQUN0QyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsc0JBQXNCLEVBQUUsQ0FDdEIsV0FBbUMsRUFDbkMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ1ksRUFBRTtnQkFDbEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFBRSxzREFBc0Q7b0JBQzVELFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLFlBQVk7b0JBQ3BDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO2lCQUN2QyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsc0JBQXNCLEVBQUUsQ0FDdEIsV0FBb0QsRUFDcEQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ29CLEVBQUU7Z0JBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsc0RBQXNEO29CQUM1RCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyw2QkFBNkI7b0JBQ3JELGFBQWEsRUFBRSxTQUFTLENBQUMscUJBQXFCO2lCQUMvQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsb0JBQW9CLEVBQUUsQ0FDcEIsV0FBa0QsRUFDbEQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQzJCLEVBQUU7Z0JBQ2pFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsb0RBQW9EO29CQUMxRCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQywyQkFBMkI7b0JBQ25ELGFBQWEsRUFBRSxTQUFTLENBQUMsNEJBQTRCO2lCQUN0RCxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQztRQU9BLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FDdEMsOEJBQThCLEVBQzlCLFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILG1CQUFtQixDQUNqQixXQUFtQyxFQUNuQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDakQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsc0JBQXNCLENBQ3BCLFdBQW9ELEVBQ3BELGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2Isc0JBQXNCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUNwRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxzQkFBc0IsQ0FDcEIsV0FBbUMsRUFDbkMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3BELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHNCQUFzQixDQUNwQixXQUFvRCxFQUNwRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDcEQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsb0JBQW9CLENBQ2xCLFdBQWtELEVBQ2xELGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2Isb0JBQW9CLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUNsRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7WUE5TUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7OzRDQXNINUIsUUFBUSxZQUFJLE1BQU0sU0FBQyx1Q0FBdUM7NENBQzFELE1BQU0sU0FBQyxtQkFBbUI7WUFsSTdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNFdmVudCxcbiAgR3JwY01ldGFkYXRhXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vY3VzdG9tLXBob25lbWl6ZXIucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDAgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0IHsgR1JQQ19DVVNUT01fUEhPTkVNSVpFUlNfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9jdXN0b20tcGhvbmVtaXplci5wYmNvbmYnO1xuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVyc1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tUGhvbmVtaXplcnNDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVycy9HZXRDdXN0b21QaG9uZW1pemVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkN1c3RvbVBob25lbWl6ZXJQcm90bz4+XG4gICAgICovXG4gICAgZ2V0Q3VzdG9tUGhvbmVtaXplcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5QaG9uZW1pemVySWQsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ3VzdG9tUGhvbmVtaXplclByb3RvPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVycy9HZXRDdXN0b21QaG9uZW1pemVyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUGhvbmVtaXplcklkLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ3VzdG9tUGhvbmVtaXplclByb3RvXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuQ3VzdG9tUGhvbmVtaXplcnMvQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5QaG9uZW1pemVySWQ+PlxuICAgICAqL1xuICAgIGNyZWF0ZUN1c3RvbVBob25lbWl6ZXI6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUGhvbmVtaXplcklkPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVycy9DcmVhdGVDdXN0b21QaG9uZW1pemVyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5QaG9uZW1pemVySWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVycy9EZWxldGVDdXN0b21QaG9uZW1pemVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDAuRW1wdHk+PlxuICAgICAqL1xuICAgIGRlbGV0ZUN1c3RvbVBob25lbWl6ZXI6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUGhvbmVtaXplcklkLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDAuRW1wdHk+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28udDJzLkN1c3RvbVBob25lbWl6ZXJzL0RlbGV0ZUN1c3RvbVBob25lbWl6ZXInLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5QaG9uZW1pemVySWQsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuQ3VzdG9tUGhvbmVtaXplcnMvVXBkYXRlQ3VzdG9tUGhvbmVtaXplclxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DdXN0b21QaG9uZW1pemVyUHJvdG8+PlxuICAgICAqL1xuICAgIHVwZGF0ZUN1c3RvbVBob25lbWl6ZXI6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ3VzdG9tUGhvbmVtaXplclByb3RvPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVycy9VcGRhdGVDdXN0b21QaG9uZW1pemVyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5DdXN0b21QaG9uZW1pemVyUHJvdG9cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVycy9MaXN0Q3VzdG9tUGhvbmVtaXplclxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0Q3VzdG9tUGhvbmVtaXplclJlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0Q3VzdG9tUGhvbmVtaXplcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0Q3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdEN1c3RvbVBob25lbWl6ZXJSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by50MnMuQ3VzdG9tUGhvbmVtaXplcnMvTGlzdEN1c3RvbVBob25lbWl6ZXInLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0Q3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0Q3VzdG9tUGhvbmVtaXplclJlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChHUlBDX0NVU1RPTV9QSE9ORU1JWkVSU19DTElFTlRfU0VUVElOR1MpIHNldHRpbmdzOiBhbnksXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeTxhbnk+LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudChcbiAgICAgICdvbmRld28udDJzLkN1c3RvbVBob25lbWl6ZXJzJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLkN1c3RvbVBob25lbWl6ZXJzL0dldEN1c3RvbVBob25lbWl6ZXJcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ3VzdG9tUGhvbmVtaXplclByb3RvPlxuICAgKi9cbiAgZ2V0Q3VzdG9tUGhvbmVtaXplcihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlBob25lbWl6ZXJJZCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ3VzdG9tUGhvbmVtaXplclByb3RvPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldEN1c3RvbVBob25lbWl6ZXIocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLkN1c3RvbVBob25lbWl6ZXJzL0NyZWF0ZUN1c3RvbVBob25lbWl6ZXJcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUGhvbmVtaXplcklkPlxuICAgKi9cbiAgY3JlYXRlQ3VzdG9tUGhvbmVtaXplcihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5QaG9uZW1pemVySWQ+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY3JlYXRlQ3VzdG9tUGhvbmVtaXplcihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by50MnMuQ3VzdG9tUGhvbmVtaXplcnMvRGVsZXRlQ3VzdG9tUGhvbmVtaXplclxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlQ3VzdG9tUGhvbmVtaXplcihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlBob25lbWl6ZXJJZCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVDdXN0b21QaG9uZW1pemVyKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVycy9VcGRhdGVDdXN0b21QaG9uZW1pemVyXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkN1c3RvbVBob25lbWl6ZXJQcm90bz5cbiAgICovXG4gIHVwZGF0ZUN1c3RvbVBob25lbWl6ZXIoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ3VzdG9tUGhvbmVtaXplclByb3RvPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnVwZGF0ZUN1c3RvbVBob25lbWl6ZXIocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udDJzLkN1c3RvbVBob25lbWl6ZXJzL0xpc3RDdXN0b21QaG9uZW1pemVyXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0Q3VzdG9tUGhvbmVtaXplcihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RDdXN0b21QaG9uZW1pemVyUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdEN1c3RvbVBob25lbWl6ZXJSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0Q3VzdG9tUGhvbmVtaXplcihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG59XG4iXX0=
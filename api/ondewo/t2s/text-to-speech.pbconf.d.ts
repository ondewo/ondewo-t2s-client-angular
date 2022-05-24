import { InjectionToken } from '@angular/core';
/**
 * Specific GrpcClientSettings for Text2Speech.
 * Use it only if your default settings are not set or the service requires other settings.
 */
export declare const GRPC_TEXT2_SPEECH_CLIENT_SETTINGS: InjectionToken<any>;
/**
 * Specific GrpcClientSettings for CustomPhonemizers.
 * Use it only if your default settings are not set or the service requires other settings.
 */
export declare const GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS: InjectionToken<any>;

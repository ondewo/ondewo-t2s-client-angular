import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export declare enum Pcm {
    PCM_16 = 0,
    PCM_24 = 1,
    PCM_32 = 2,
    PCM_S8 = 3,
    PCM_U8 = 4,
    FLOAT = 5,
    DOUBLE = 6
}
export declare enum AudioFormat {
    wav = 0,
    flac = 1,
    caf = 2,
    mp3 = 3,
    aac = 4,
    ogg = 5,
    wma = 6
}
/**
 * Message implementation for ondewo.t2s.SynthesizeRequest
 */
export declare class SynthesizeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SynthesizeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SynthesizeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SynthesizeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SynthesizeRequest, _writer: BinaryWriter): void;
    private _text;
    private _config?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SynthesizeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SynthesizeRequest.AsObject>);
    get text(): string;
    set text(value: string);
    get config(): RequestConfig | undefined;
    set config(value: RequestConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SynthesizeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SynthesizeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SynthesizeRequest.AsProtobufJSON;
}
export declare namespace SynthesizeRequest {
    /**
     * Standard JavaScript object representation for SynthesizeRequest
     */
    interface AsObject {
        text: string;
        config?: RequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for SynthesizeRequest
     */
    interface AsProtobufJSON {
        text: string;
        config: RequestConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.BatchSynthesizeRequest
 */
export declare class BatchSynthesizeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchSynthesizeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchSynthesizeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchSynthesizeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchSynthesizeRequest, _writer: BinaryWriter): void;
    private _batchRequest?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchSynthesizeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchSynthesizeRequest.AsObject>);
    get batchRequest(): SynthesizeRequest[] | undefined;
    set batchRequest(value: SynthesizeRequest[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchSynthesizeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchSynthesizeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchSynthesizeRequest.AsProtobufJSON;
}
export declare namespace BatchSynthesizeRequest {
    /**
     * Standard JavaScript object representation for BatchSynthesizeRequest
     */
    interface AsObject {
        batchRequest?: SynthesizeRequest.AsObject[];
    }
    /**
     * Protobuf JSON representation for BatchSynthesizeRequest
     */
    interface AsProtobufJSON {
        batchRequest: SynthesizeRequest.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.t2s.BatchSynthesizeResponse
 */
export declare class BatchSynthesizeResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchSynthesizeResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchSynthesizeResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchSynthesizeResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchSynthesizeResponse, _writer: BinaryWriter): void;
    private _batchResponse?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchSynthesizeResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchSynthesizeResponse.AsObject>);
    get batchResponse(): SynthesizeResponse[] | undefined;
    set batchResponse(value: SynthesizeResponse[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchSynthesizeResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchSynthesizeResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchSynthesizeResponse.AsProtobufJSON;
}
export declare namespace BatchSynthesizeResponse {
    /**
     * Standard JavaScript object representation for BatchSynthesizeResponse
     */
    interface AsObject {
        batchResponse?: SynthesizeResponse.AsObject[];
    }
    /**
     * Protobuf JSON representation for BatchSynthesizeResponse
     */
    interface AsProtobufJSON {
        batchResponse: SynthesizeResponse.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.t2s.RequestConfig
 */
export declare class RequestConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RequestConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RequestConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RequestConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RequestConfig, _writer: BinaryWriter): void;
    private _t2sPipelineId;
    private _lengthScale;
    private _noiseScale;
    private _sampleRate;
    private _pcm;
    private _audioFormat;
    private _useCache;
    private _normalizer;
    private _t2sServiceConfig?;
    private _t2sCloudProviderConfig?;
    private _oneofLengthScale;
    private _oneofNoiseScale;
    private _oneofSampleRate;
    private _oneofPcm;
    private _oneofAudioFormat;
    private _oneofUseCache;
    private _oneofNormalizer;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RequestConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<RequestConfig.AsObject>);
    get t2sPipelineId(): string;
    set t2sPipelineId(value: string);
    get lengthScale(): number;
    set lengthScale(value: number);
    get noiseScale(): number;
    set noiseScale(value: number);
    get sampleRate(): number;
    set sampleRate(value: number);
    get pcm(): Pcm;
    set pcm(value: Pcm);
    get audioFormat(): AudioFormat;
    set audioFormat(value: AudioFormat);
    get useCache(): boolean;
    set useCache(value: boolean);
    get normalizer(): string;
    set normalizer(value: string);
    get t2sServiceConfig(): googleProtobuf001.Struct | undefined;
    set t2sServiceConfig(value: googleProtobuf001.Struct | undefined);
    get t2sCloudProviderConfig(): T2sCloudProviderConfig | undefined;
    set t2sCloudProviderConfig(value: T2sCloudProviderConfig | undefined);
    get oneofLengthScale(): RequestConfig.OneofLengthScaleCase;
    get oneofNoiseScale(): RequestConfig.OneofNoiseScaleCase;
    get oneofSampleRate(): RequestConfig.OneofSampleRateCase;
    get oneofPcm(): RequestConfig.OneofPcmCase;
    get oneofAudioFormat(): RequestConfig.OneofAudioFormatCase;
    get oneofUseCache(): RequestConfig.OneofUseCacheCase;
    get oneofNormalizer(): RequestConfig.OneofNormalizerCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RequestConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RequestConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RequestConfig.AsProtobufJSON;
}
export declare namespace RequestConfig {
    /**
     * Standard JavaScript object representation for RequestConfig
     */
    interface AsObject {
        t2sPipelineId: string;
        lengthScale: number;
        noiseScale: number;
        sampleRate: number;
        pcm: Pcm;
        audioFormat: AudioFormat;
        useCache: boolean;
        normalizer: string;
        t2sServiceConfig?: googleProtobuf001.Struct.AsObject;
        t2sCloudProviderConfig?: T2sCloudProviderConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for RequestConfig
     */
    interface AsProtobufJSON {
        t2sPipelineId: string;
        lengthScale: number | null;
        noiseScale: number | null;
        sampleRate: number | null;
        pcm: string | null;
        audioFormat: string | null;
        useCache: boolean;
        normalizer: string | null;
        t2sServiceConfig: googleProtobuf001.Struct.AsProtobufJSON | null;
        t2sCloudProviderConfig: T2sCloudProviderConfig.AsProtobufJSON | null;
    }
    enum OneofLengthScaleCase {
        none = 0,
        lengthScale = 1
    }
    enum OneofNoiseScaleCase {
        none = 0,
        noiseScale = 1
    }
    enum OneofSampleRateCase {
        none = 0,
        sampleRate = 1
    }
    enum OneofPcmCase {
        none = 0,
        pcm = 1
    }
    enum OneofAudioFormatCase {
        none = 0,
        audioFormat = 1
    }
    enum OneofUseCacheCase {
        none = 0,
        useCache = 1
    }
    enum OneofNormalizerCase {
        none = 0,
        normalizer = 1
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfig
 */
export declare class T2sCloudProviderConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCloudProviderConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCloudProviderConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCloudProviderConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCloudProviderConfig, _writer: BinaryWriter): void;
    private _t2sCloudProviderConfigElevenlabs?;
    private _t2sCloudProviderConfigGoogle?;
    private _t2sCloudProviderConfigMicrosoft?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudProviderConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCloudProviderConfig.AsObject>);
    get t2sCloudProviderConfigElevenlabs(): T2sCloudProviderConfigElevenLabs | undefined;
    set t2sCloudProviderConfigElevenlabs(value: T2sCloudProviderConfigElevenLabs | undefined);
    get t2sCloudProviderConfigGoogle(): T2sCloudProviderConfigGoogle | undefined;
    set t2sCloudProviderConfigGoogle(value: T2sCloudProviderConfigGoogle | undefined);
    get t2sCloudProviderConfigMicrosoft(): T2sCloudProviderConfigMicrosoft | undefined;
    set t2sCloudProviderConfigMicrosoft(value: T2sCloudProviderConfigMicrosoft | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCloudProviderConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCloudProviderConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCloudProviderConfig.AsProtobufJSON;
}
export declare namespace T2sCloudProviderConfig {
    /**
     * Standard JavaScript object representation for T2sCloudProviderConfig
     */
    interface AsObject {
        t2sCloudProviderConfigElevenlabs?: T2sCloudProviderConfigElevenLabs.AsObject;
        t2sCloudProviderConfigGoogle?: T2sCloudProviderConfigGoogle.AsObject;
        t2sCloudProviderConfigMicrosoft?: T2sCloudProviderConfigMicrosoft.AsObject;
    }
    /**
     * Protobuf JSON representation for T2sCloudProviderConfig
     */
    interface AsProtobufJSON {
        t2sCloudProviderConfigElevenlabs: T2sCloudProviderConfigElevenLabs.AsProtobufJSON | null;
        t2sCloudProviderConfigGoogle: T2sCloudProviderConfigGoogle.AsProtobufJSON | null;
        t2sCloudProviderConfigMicrosoft: T2sCloudProviderConfigMicrosoft.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfigElevenLabs
 */
export declare class T2sCloudProviderConfigElevenLabs implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCloudProviderConfigElevenLabs;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCloudProviderConfigElevenLabs): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCloudProviderConfigElevenLabs, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCloudProviderConfigElevenLabs, _writer: BinaryWriter): void;
    private _stability;
    private _similarityBoost;
    private _style;
    private _useSpeakerBoost;
    private _applyTextNormalization;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudProviderConfigElevenLabs to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCloudProviderConfigElevenLabs.AsObject>);
    get stability(): number;
    set stability(value: number);
    get similarityBoost(): number;
    set similarityBoost(value: number);
    get style(): number;
    set style(value: number);
    get useSpeakerBoost(): boolean;
    set useSpeakerBoost(value: boolean);
    get applyTextNormalization(): string;
    set applyTextNormalization(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCloudProviderConfigElevenLabs.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCloudProviderConfigElevenLabs.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCloudProviderConfigElevenLabs.AsProtobufJSON;
}
export declare namespace T2sCloudProviderConfigElevenLabs {
    /**
     * Standard JavaScript object representation for T2sCloudProviderConfigElevenLabs
     */
    interface AsObject {
        stability: number;
        similarityBoost: number;
        style: number;
        useSpeakerBoost: boolean;
        applyTextNormalization: string;
    }
    /**
     * Protobuf JSON representation for T2sCloudProviderConfigElevenLabs
     */
    interface AsProtobufJSON {
        stability: number;
        similarityBoost: number;
        style: number;
        useSpeakerBoost: boolean;
        applyTextNormalization: string;
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfigMicrosoft
 */
export declare class T2sCloudProviderConfigMicrosoft implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCloudProviderConfigMicrosoft;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCloudProviderConfigMicrosoft): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCloudProviderConfigMicrosoft, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCloudProviderConfigMicrosoft, _writer: BinaryWriter): void;
    private _useDefaultSpeaker;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudProviderConfigMicrosoft to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCloudProviderConfigMicrosoft.AsObject>);
    get useDefaultSpeaker(): boolean;
    set useDefaultSpeaker(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCloudProviderConfigMicrosoft.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCloudProviderConfigMicrosoft.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCloudProviderConfigMicrosoft.AsProtobufJSON;
}
export declare namespace T2sCloudProviderConfigMicrosoft {
    /**
     * Standard JavaScript object representation for T2sCloudProviderConfigMicrosoft
     */
    interface AsObject {
        useDefaultSpeaker: boolean;
    }
    /**
     * Protobuf JSON representation for T2sCloudProviderConfigMicrosoft
     */
    interface AsProtobufJSON {
        useDefaultSpeaker: boolean;
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfigGoogle
 */
export declare class T2sCloudProviderConfigGoogle implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCloudProviderConfigGoogle;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCloudProviderConfigGoogle): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCloudProviderConfigGoogle, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCloudProviderConfigGoogle, _writer: BinaryWriter): void;
    private _speakingRate;
    private _volumeGainDb;
    private _pitch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudProviderConfigGoogle to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCloudProviderConfigGoogle.AsObject>);
    get speakingRate(): number;
    set speakingRate(value: number);
    get volumeGainDb(): number;
    set volumeGainDb(value: number);
    get pitch(): number;
    set pitch(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCloudProviderConfigGoogle.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCloudProviderConfigGoogle.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCloudProviderConfigGoogle.AsProtobufJSON;
}
export declare namespace T2sCloudProviderConfigGoogle {
    /**
     * Standard JavaScript object representation for T2sCloudProviderConfigGoogle
     */
    interface AsObject {
        speakingRate: number;
        volumeGainDb: number;
        pitch: number;
    }
    /**
     * Protobuf JSON representation for T2sCloudProviderConfigGoogle
     */
    interface AsProtobufJSON {
        speakingRate: number;
        volumeGainDb: number;
        pitch: number;
    }
}
/**
 * Message implementation for ondewo.t2s.SynthesizeResponse
 */
export declare class SynthesizeResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SynthesizeResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SynthesizeResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SynthesizeResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SynthesizeResponse, _writer: BinaryWriter): void;
    private _audioUuid;
    private _audio;
    private _generationTime;
    private _audioLength;
    private _text;
    private _config?;
    private _normalizedText;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SynthesizeResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<SynthesizeResponse.AsObject>);
    get audioUuid(): string;
    set audioUuid(value: string);
    get audio(): Uint8Array;
    set audio(value: Uint8Array);
    get generationTime(): number;
    set generationTime(value: number);
    get audioLength(): number;
    set audioLength(value: number);
    get text(): string;
    set text(value: string);
    get config(): RequestConfig | undefined;
    set config(value: RequestConfig | undefined);
    get normalizedText(): string;
    set normalizedText(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SynthesizeResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SynthesizeResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SynthesizeResponse.AsProtobufJSON;
}
export declare namespace SynthesizeResponse {
    /**
     * Standard JavaScript object representation for SynthesizeResponse
     */
    interface AsObject {
        audioUuid: string;
        audio: Uint8Array;
        generationTime: number;
        audioLength: number;
        text: string;
        config?: RequestConfig.AsObject;
        normalizedText: string;
    }
    /**
     * Protobuf JSON representation for SynthesizeResponse
     */
    interface AsProtobufJSON {
        audioUuid: string;
        audio: string;
        generationTime: number;
        audioLength: number;
        text: string;
        config: RequestConfig.AsProtobufJSON | null;
        normalizedText: string;
    }
}
/**
 * Message implementation for ondewo.t2s.NormalizeTextRequest
 */
export declare class NormalizeTextRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): NormalizeTextRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NormalizeTextRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: NormalizeTextRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: NormalizeTextRequest, _writer: BinaryWriter): void;
    private _t2sPipelineId;
    private _text;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NormalizeTextRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<NormalizeTextRequest.AsObject>);
    get t2sPipelineId(): string;
    set t2sPipelineId(value: string);
    get text(): string;
    set text(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NormalizeTextRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): NormalizeTextRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): NormalizeTextRequest.AsProtobufJSON;
}
export declare namespace NormalizeTextRequest {
    /**
     * Standard JavaScript object representation for NormalizeTextRequest
     */
    interface AsObject {
        t2sPipelineId: string;
        text: string;
    }
    /**
     * Protobuf JSON representation for NormalizeTextRequest
     */
    interface AsProtobufJSON {
        t2sPipelineId: string;
        text: string;
    }
}
/**
 * Message implementation for ondewo.t2s.NormalizeTextResponse
 */
export declare class NormalizeTextResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): NormalizeTextResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NormalizeTextResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: NormalizeTextResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: NormalizeTextResponse, _writer: BinaryWriter): void;
    private _normalizedText;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NormalizeTextResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<NormalizeTextResponse.AsObject>);
    get normalizedText(): string;
    set normalizedText(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NormalizeTextResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): NormalizeTextResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): NormalizeTextResponse.AsProtobufJSON;
}
export declare namespace NormalizeTextResponse {
    /**
     * Standard JavaScript object representation for NormalizeTextResponse
     */
    interface AsObject {
        normalizedText: string;
    }
    /**
     * Protobuf JSON representation for NormalizeTextResponse
     */
    interface AsProtobufJSON {
        normalizedText: string;
    }
}
/**
 * Message implementation for ondewo.t2s.T2SGetServiceInfoResponse
 */
export declare class T2SGetServiceInfoResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2SGetServiceInfoResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2SGetServiceInfoResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2SGetServiceInfoResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2SGetServiceInfoResponse, _writer: BinaryWriter): void;
    private _version;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SGetServiceInfoResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2SGetServiceInfoResponse.AsObject>);
    get version(): string;
    set version(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2SGetServiceInfoResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2SGetServiceInfoResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2SGetServiceInfoResponse.AsProtobufJSON;
}
export declare namespace T2SGetServiceInfoResponse {
    /**
     * Standard JavaScript object representation for T2SGetServiceInfoResponse
     */
    interface AsObject {
        version: string;
    }
    /**
     * Protobuf JSON representation for T2SGetServiceInfoResponse
     */
    interface AsProtobufJSON {
        version: string;
    }
}
/**
 * Message implementation for ondewo.t2s.ListT2sPipelinesRequest
 */
export declare class ListT2sPipelinesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListT2sPipelinesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListT2sPipelinesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListT2sPipelinesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListT2sPipelinesRequest, _writer: BinaryWriter): void;
    private _languages;
    private _speakerSexes;
    private _pipelineOwners;
    private _speakerNames;
    private _domains;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sPipelinesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sPipelinesRequest.AsObject>);
    get languages(): string[];
    set languages(value: string[]);
    get speakerSexes(): string[];
    set speakerSexes(value: string[]);
    get pipelineOwners(): string[];
    set pipelineOwners(value: string[]);
    get speakerNames(): string[];
    set speakerNames(value: string[]);
    get domains(): string[];
    set domains(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListT2sPipelinesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListT2sPipelinesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListT2sPipelinesRequest.AsProtobufJSON;
}
export declare namespace ListT2sPipelinesRequest {
    /**
     * Standard JavaScript object representation for ListT2sPipelinesRequest
     */
    interface AsObject {
        languages: string[];
        speakerSexes: string[];
        pipelineOwners: string[];
        speakerNames: string[];
        domains: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sPipelinesRequest
     */
    interface AsProtobufJSON {
        languages: string[];
        speakerSexes: string[];
        pipelineOwners: string[];
        speakerNames: string[];
        domains: string[];
    }
}
/**
 * Message implementation for ondewo.t2s.ListT2sPipelinesResponse
 */
export declare class ListT2sPipelinesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListT2sPipelinesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListT2sPipelinesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListT2sPipelinesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListT2sPipelinesResponse, _writer: BinaryWriter): void;
    private _pipelines?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sPipelinesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sPipelinesResponse.AsObject>);
    get pipelines(): Text2SpeechConfig[] | undefined;
    set pipelines(value: Text2SpeechConfig[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListT2sPipelinesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListT2sPipelinesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListT2sPipelinesResponse.AsProtobufJSON;
}
export declare namespace ListT2sPipelinesResponse {
    /**
     * Standard JavaScript object representation for ListT2sPipelinesResponse
     */
    interface AsObject {
        pipelines?: Text2SpeechConfig.AsObject[];
    }
    /**
     * Protobuf JSON representation for ListT2sPipelinesResponse
     */
    interface AsProtobufJSON {
        pipelines: Text2SpeechConfig.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.t2s.ListT2sLanguagesRequest
 */
export declare class ListT2sLanguagesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListT2sLanguagesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListT2sLanguagesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListT2sLanguagesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListT2sLanguagesRequest, _writer: BinaryWriter): void;
    private _speakerSexes;
    private _pipelineOwners;
    private _speakerNames;
    private _domains;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sLanguagesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sLanguagesRequest.AsObject>);
    get speakerSexes(): string[];
    set speakerSexes(value: string[]);
    get pipelineOwners(): string[];
    set pipelineOwners(value: string[]);
    get speakerNames(): string[];
    set speakerNames(value: string[]);
    get domains(): string[];
    set domains(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListT2sLanguagesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListT2sLanguagesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListT2sLanguagesRequest.AsProtobufJSON;
}
export declare namespace ListT2sLanguagesRequest {
    /**
     * Standard JavaScript object representation for ListT2sLanguagesRequest
     */
    interface AsObject {
        speakerSexes: string[];
        pipelineOwners: string[];
        speakerNames: string[];
        domains: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sLanguagesRequest
     */
    interface AsProtobufJSON {
        speakerSexes: string[];
        pipelineOwners: string[];
        speakerNames: string[];
        domains: string[];
    }
}
/**
 * Message implementation for ondewo.t2s.ListT2sLanguagesResponse
 */
export declare class ListT2sLanguagesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListT2sLanguagesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListT2sLanguagesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListT2sLanguagesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListT2sLanguagesResponse, _writer: BinaryWriter): void;
    private _languages;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sLanguagesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sLanguagesResponse.AsObject>);
    get languages(): string[];
    set languages(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListT2sLanguagesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListT2sLanguagesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListT2sLanguagesResponse.AsProtobufJSON;
}
export declare namespace ListT2sLanguagesResponse {
    /**
     * Standard JavaScript object representation for ListT2sLanguagesResponse
     */
    interface AsObject {
        languages: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sLanguagesResponse
     */
    interface AsProtobufJSON {
        languages: string[];
    }
}
/**
 * Message implementation for ondewo.t2s.ListT2sDomainsRequest
 */
export declare class ListT2sDomainsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListT2sDomainsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListT2sDomainsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListT2sDomainsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListT2sDomainsRequest, _writer: BinaryWriter): void;
    private _speakerSexes;
    private _pipelineOwners;
    private _speakerNames;
    private _languages;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sDomainsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sDomainsRequest.AsObject>);
    get speakerSexes(): string[];
    set speakerSexes(value: string[]);
    get pipelineOwners(): string[];
    set pipelineOwners(value: string[]);
    get speakerNames(): string[];
    set speakerNames(value: string[]);
    get languages(): string[];
    set languages(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListT2sDomainsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListT2sDomainsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListT2sDomainsRequest.AsProtobufJSON;
}
export declare namespace ListT2sDomainsRequest {
    /**
     * Standard JavaScript object representation for ListT2sDomainsRequest
     */
    interface AsObject {
        speakerSexes: string[];
        pipelineOwners: string[];
        speakerNames: string[];
        languages: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sDomainsRequest
     */
    interface AsProtobufJSON {
        speakerSexes: string[];
        pipelineOwners: string[];
        speakerNames: string[];
        languages: string[];
    }
}
/**
 * Message implementation for ondewo.t2s.ListT2sDomainsResponse
 */
export declare class ListT2sDomainsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListT2sDomainsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListT2sDomainsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListT2sDomainsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListT2sDomainsResponse, _writer: BinaryWriter): void;
    private _domains;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sDomainsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sDomainsResponse.AsObject>);
    get domains(): string[];
    set domains(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListT2sDomainsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListT2sDomainsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListT2sDomainsResponse.AsProtobufJSON;
}
export declare namespace ListT2sDomainsResponse {
    /**
     * Standard JavaScript object representation for ListT2sDomainsResponse
     */
    interface AsObject {
        domains: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sDomainsResponse
     */
    interface AsProtobufJSON {
        domains: string[];
    }
}
/**
 * Message implementation for ondewo.t2s.T2sPipelineId
 */
export declare class T2sPipelineId implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sPipelineId;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sPipelineId): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sPipelineId, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sPipelineId, _writer: BinaryWriter): void;
    private _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sPipelineId to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sPipelineId.AsObject>);
    get id(): string;
    set id(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sPipelineId.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sPipelineId.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sPipelineId.AsProtobufJSON;
}
export declare namespace T2sPipelineId {
    /**
     * Standard JavaScript object representation for T2sPipelineId
     */
    interface AsObject {
        id: string;
    }
    /**
     * Protobuf JSON representation for T2sPipelineId
     */
    interface AsProtobufJSON {
        id: string;
    }
}
/**
 * Message implementation for ondewo.t2s.Text2SpeechConfig
 */
export declare class Text2SpeechConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Text2SpeechConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Text2SpeechConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Text2SpeechConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Text2SpeechConfig, _writer: BinaryWriter): void;
    private _id;
    private _description?;
    private _active;
    private _inference?;
    private _normalization?;
    private _postprocessing?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text2SpeechConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<Text2SpeechConfig.AsObject>);
    get id(): string;
    set id(value: string);
    get description(): T2SDescription | undefined;
    set description(value: T2SDescription | undefined);
    get active(): boolean;
    set active(value: boolean);
    get inference(): T2SInference | undefined;
    set inference(value: T2SInference | undefined);
    get normalization(): T2SNormalization | undefined;
    set normalization(value: T2SNormalization | undefined);
    get postprocessing(): Postprocessing | undefined;
    set postprocessing(value: Postprocessing | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Text2SpeechConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Text2SpeechConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Text2SpeechConfig.AsProtobufJSON;
}
export declare namespace Text2SpeechConfig {
    /**
     * Standard JavaScript object representation for Text2SpeechConfig
     */
    interface AsObject {
        id: string;
        description?: T2SDescription.AsObject;
        active: boolean;
        inference?: T2SInference.AsObject;
        normalization?: T2SNormalization.AsObject;
        postprocessing?: Postprocessing.AsObject;
    }
    /**
     * Protobuf JSON representation for Text2SpeechConfig
     */
    interface AsProtobufJSON {
        id: string;
        description: T2SDescription.AsProtobufJSON | null;
        active: boolean;
        inference: T2SInference.AsProtobufJSON | null;
        normalization: T2SNormalization.AsProtobufJSON | null;
        postprocessing: Postprocessing.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.T2SDescription
 */
export declare class T2SDescription implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2SDescription;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2SDescription): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2SDescription, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2SDescription, _writer: BinaryWriter): void;
    private _language;
    private _speakerSex;
    private _pipelineOwner;
    private _comments;
    private _speakerName;
    private _domain;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SDescription to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2SDescription.AsObject>);
    get language(): string;
    set language(value: string);
    get speakerSex(): string;
    set speakerSex(value: string);
    get pipelineOwner(): string;
    set pipelineOwner(value: string);
    get comments(): string;
    set comments(value: string);
    get speakerName(): string;
    set speakerName(value: string);
    get domain(): string;
    set domain(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2SDescription.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2SDescription.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2SDescription.AsProtobufJSON;
}
export declare namespace T2SDescription {
    /**
     * Standard JavaScript object representation for T2SDescription
     */
    interface AsObject {
        language: string;
        speakerSex: string;
        pipelineOwner: string;
        comments: string;
        speakerName: string;
        domain: string;
    }
    /**
     * Protobuf JSON representation for T2SDescription
     */
    interface AsProtobufJSON {
        language: string;
        speakerSex: string;
        pipelineOwner: string;
        comments: string;
        speakerName: string;
        domain: string;
    }
}
/**
 * Message implementation for ondewo.t2s.T2SInference
 */
export declare class T2SInference implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2SInference;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2SInference): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2SInference, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2SInference, _writer: BinaryWriter): void;
    private _type;
    private _compositeInference?;
    private _singleInference?;
    private _caching?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SInference to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2SInference.AsObject>);
    get type(): string;
    set type(value: string);
    get compositeInference(): CompositeInference | undefined;
    set compositeInference(value: CompositeInference | undefined);
    get singleInference(): SingleInference | undefined;
    set singleInference(value: SingleInference | undefined);
    get caching(): Caching | undefined;
    set caching(value: Caching | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2SInference.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2SInference.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2SInference.AsProtobufJSON;
}
export declare namespace T2SInference {
    /**
     * Standard JavaScript object representation for T2SInference
     */
    interface AsObject {
        type: string;
        compositeInference?: CompositeInference.AsObject;
        singleInference?: SingleInference.AsObject;
        caching?: Caching.AsObject;
    }
    /**
     * Protobuf JSON representation for T2SInference
     */
    interface AsProtobufJSON {
        type: string;
        compositeInference: CompositeInference.AsProtobufJSON | null;
        singleInference: SingleInference.AsProtobufJSON | null;
        caching: Caching.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.CompositeInference
 */
export declare class CompositeInference implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CompositeInference;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CompositeInference): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CompositeInference, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CompositeInference, _writer: BinaryWriter): void;
    private _text2mel?;
    private _mel2audio?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CompositeInference to deeply clone from
     */
    constructor(_value?: RecursivePartial<CompositeInference.AsObject>);
    get text2mel(): Text2Mel | undefined;
    set text2mel(value: Text2Mel | undefined);
    get mel2audio(): Mel2Audio | undefined;
    set mel2audio(value: Mel2Audio | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CompositeInference.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CompositeInference.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CompositeInference.AsProtobufJSON;
}
export declare namespace CompositeInference {
    /**
     * Standard JavaScript object representation for CompositeInference
     */
    interface AsObject {
        text2mel?: Text2Mel.AsObject;
        mel2audio?: Mel2Audio.AsObject;
    }
    /**
     * Protobuf JSON representation for CompositeInference
     */
    interface AsProtobufJSON {
        text2mel: Text2Mel.AsProtobufJSON | null;
        mel2audio: Mel2Audio.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.SingleInference
 */
export declare class SingleInference implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SingleInference;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SingleInference): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SingleInference, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SingleInference, _writer: BinaryWriter): void;
    private _text2audio?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SingleInference to deeply clone from
     */
    constructor(_value?: RecursivePartial<SingleInference.AsObject>);
    get text2audio(): Text2Audio | undefined;
    set text2audio(value: Text2Audio | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SingleInference.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SingleInference.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SingleInference.AsProtobufJSON;
}
export declare namespace SingleInference {
    /**
     * Standard JavaScript object representation for SingleInference
     */
    interface AsObject {
        text2audio?: Text2Audio.AsObject;
    }
    /**
     * Protobuf JSON representation for SingleInference
     */
    interface AsProtobufJSON {
        text2audio: Text2Audio.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.Text2Mel
 */
export declare class Text2Mel implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Text2Mel;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Text2Mel): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Text2Mel, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Text2Mel, _writer: BinaryWriter): void;
    private _type;
    private _glowTts?;
    private _glowTtsTriton?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text2Mel to deeply clone from
     */
    constructor(_value?: RecursivePartial<Text2Mel.AsObject>);
    get type(): string;
    set type(value: string);
    get glowTts(): GlowTTS | undefined;
    set glowTts(value: GlowTTS | undefined);
    get glowTtsTriton(): GlowTTSTriton | undefined;
    set glowTtsTriton(value: GlowTTSTriton | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Text2Mel.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Text2Mel.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Text2Mel.AsProtobufJSON;
}
export declare namespace Text2Mel {
    /**
     * Standard JavaScript object representation for Text2Mel
     */
    interface AsObject {
        type: string;
        glowTts?: GlowTTS.AsObject;
        glowTtsTriton?: GlowTTSTriton.AsObject;
    }
    /**
     * Protobuf JSON representation for Text2Mel
     */
    interface AsProtobufJSON {
        type: string;
        glowTts: GlowTTS.AsProtobufJSON | null;
        glowTtsTriton: GlowTTSTriton.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.Text2Audio
 */
export declare class Text2Audio implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Text2Audio;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Text2Audio): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Text2Audio, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Text2Audio, _writer: BinaryWriter): void;
    private _type;
    private _vits?;
    private _vitsTriton?;
    private _t2sCloudServiceElevenlabs?;
    private _t2sCloudServiceAmazon?;
    private _t2sCloudServiceGoogle?;
    private _t2sCloudServiceMicrosoft?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text2Audio to deeply clone from
     */
    constructor(_value?: RecursivePartial<Text2Audio.AsObject>);
    get type(): string;
    set type(value: string);
    get vits(): Vits | undefined;
    set vits(value: Vits | undefined);
    get vitsTriton(): VitsTriton | undefined;
    set vitsTriton(value: VitsTriton | undefined);
    get t2sCloudServiceElevenlabs(): T2sCloudServiceElevenLabs | undefined;
    set t2sCloudServiceElevenlabs(value: T2sCloudServiceElevenLabs | undefined);
    get t2sCloudServiceAmazon(): T2sCloudServiceAmazon | undefined;
    set t2sCloudServiceAmazon(value: T2sCloudServiceAmazon | undefined);
    get t2sCloudServiceGoogle(): T2sCloudServiceGoogle | undefined;
    set t2sCloudServiceGoogle(value: T2sCloudServiceGoogle | undefined);
    get t2sCloudServiceMicrosoft(): T2sCloudServiceMicrosoft | undefined;
    set t2sCloudServiceMicrosoft(value: T2sCloudServiceMicrosoft | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Text2Audio.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Text2Audio.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Text2Audio.AsProtobufJSON;
}
export declare namespace Text2Audio {
    /**
     * Standard JavaScript object representation for Text2Audio
     */
    interface AsObject {
        type: string;
        vits?: Vits.AsObject;
        vitsTriton?: VitsTriton.AsObject;
        t2sCloudServiceElevenlabs?: T2sCloudServiceElevenLabs.AsObject;
        t2sCloudServiceAmazon?: T2sCloudServiceAmazon.AsObject;
        t2sCloudServiceGoogle?: T2sCloudServiceGoogle.AsObject;
        t2sCloudServiceMicrosoft?: T2sCloudServiceMicrosoft.AsObject;
    }
    /**
     * Protobuf JSON representation for Text2Audio
     */
    interface AsProtobufJSON {
        type: string;
        vits: Vits.AsProtobufJSON | null;
        vitsTriton: VitsTriton.AsProtobufJSON | null;
        t2sCloudServiceElevenlabs: T2sCloudServiceElevenLabs.AsProtobufJSON | null;
        t2sCloudServiceAmazon: T2sCloudServiceAmazon.AsProtobufJSON | null;
        t2sCloudServiceGoogle: T2sCloudServiceGoogle.AsProtobufJSON | null;
        t2sCloudServiceMicrosoft: T2sCloudServiceMicrosoft.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.GlowTTS
 */
export declare class GlowTTS implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GlowTTS;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GlowTTS): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GlowTTS, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GlowTTS, _writer: BinaryWriter): void;
    private _batchSize;
    private _useGpu;
    private _lengthScale;
    private _noiseScale;
    private _path;
    private _cleaners;
    private _paramConfigPath;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GlowTTS to deeply clone from
     */
    constructor(_value?: RecursivePartial<GlowTTS.AsObject>);
    get batchSize(): string;
    set batchSize(value: string);
    get useGpu(): boolean;
    set useGpu(value: boolean);
    get lengthScale(): number;
    set lengthScale(value: number);
    get noiseScale(): number;
    set noiseScale(value: number);
    get path(): string;
    set path(value: string);
    get cleaners(): string[];
    set cleaners(value: string[]);
    get paramConfigPath(): string;
    set paramConfigPath(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GlowTTS.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GlowTTS.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GlowTTS.AsProtobufJSON;
}
export declare namespace GlowTTS {
    /**
     * Standard JavaScript object representation for GlowTTS
     */
    interface AsObject {
        batchSize: string;
        useGpu: boolean;
        lengthScale: number;
        noiseScale: number;
        path: string;
        cleaners: string[];
        paramConfigPath: string;
    }
    /**
     * Protobuf JSON representation for GlowTTS
     */
    interface AsProtobufJSON {
        batchSize: string;
        useGpu: boolean;
        lengthScale: number;
        noiseScale: number;
        path: string;
        cleaners: string[];
        paramConfigPath: string;
    }
}
/**
 * Message implementation for ondewo.t2s.GlowTTSTriton
 */
export declare class GlowTTSTriton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GlowTTSTriton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GlowTTSTriton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GlowTTSTriton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GlowTTSTriton, _writer: BinaryWriter): void;
    private _batchSize;
    private _lengthScale;
    private _noiseScale;
    private _cleaners;
    private _maxTextLength;
    private _paramConfigPath;
    private _tritonModelName;
    private _tritonServerHost;
    private _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GlowTTSTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<GlowTTSTriton.AsObject>);
    get batchSize(): string;
    set batchSize(value: string);
    get lengthScale(): number;
    set lengthScale(value: number);
    get noiseScale(): number;
    set noiseScale(value: number);
    get cleaners(): string[];
    set cleaners(value: string[]);
    get maxTextLength(): string;
    set maxTextLength(value: string);
    get paramConfigPath(): string;
    set paramConfigPath(value: string);
    get tritonModelName(): string;
    set tritonModelName(value: string);
    get tritonServerHost(): string;
    set tritonServerHost(value: string);
    get tritonServerPort(): string;
    set tritonServerPort(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GlowTTSTriton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GlowTTSTriton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GlowTTSTriton.AsProtobufJSON;
}
export declare namespace GlowTTSTriton {
    /**
     * Standard JavaScript object representation for GlowTTSTriton
     */
    interface AsObject {
        batchSize: string;
        lengthScale: number;
        noiseScale: number;
        cleaners: string[];
        maxTextLength: string;
        paramConfigPath: string;
        tritonModelName: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
    /**
     * Protobuf JSON representation for GlowTTSTriton
     */
    interface AsProtobufJSON {
        batchSize: string;
        lengthScale: number;
        noiseScale: number;
        cleaners: string[];
        maxTextLength: string;
        paramConfigPath: string;
        tritonModelName: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
}
/**
 * Message implementation for ondewo.t2s.Vits
 */
export declare class Vits implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Vits;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Vits): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Vits, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Vits, _writer: BinaryWriter): void;
    private _batchSize;
    private _useGpu;
    private _lengthScale;
    private _noiseScale;
    private _path;
    private _cleaners;
    private _paramConfigPath;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Vits to deeply clone from
     */
    constructor(_value?: RecursivePartial<Vits.AsObject>);
    get batchSize(): string;
    set batchSize(value: string);
    get useGpu(): boolean;
    set useGpu(value: boolean);
    get lengthScale(): number;
    set lengthScale(value: number);
    get noiseScale(): number;
    set noiseScale(value: number);
    get path(): string;
    set path(value: string);
    get cleaners(): string[];
    set cleaners(value: string[]);
    get paramConfigPath(): string;
    set paramConfigPath(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Vits.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Vits.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Vits.AsProtobufJSON;
}
export declare namespace Vits {
    /**
     * Standard JavaScript object representation for Vits
     */
    interface AsObject {
        batchSize: string;
        useGpu: boolean;
        lengthScale: number;
        noiseScale: number;
        path: string;
        cleaners: string[];
        paramConfigPath: string;
    }
    /**
     * Protobuf JSON representation for Vits
     */
    interface AsProtobufJSON {
        batchSize: string;
        useGpu: boolean;
        lengthScale: number;
        noiseScale: number;
        path: string;
        cleaners: string[];
        paramConfigPath: string;
    }
}
/**
 * Message implementation for ondewo.t2s.VitsTriton
 */
export declare class VitsTriton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VitsTriton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VitsTriton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VitsTriton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VitsTriton, _writer: BinaryWriter): void;
    private _batchSize;
    private _lengthScale;
    private _noiseScale;
    private _cleaners;
    private _maxTextLength;
    private _paramConfigPath;
    private _tritonModelName;
    private _tritonServerHost;
    private _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VitsTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<VitsTriton.AsObject>);
    get batchSize(): string;
    set batchSize(value: string);
    get lengthScale(): number;
    set lengthScale(value: number);
    get noiseScale(): number;
    set noiseScale(value: number);
    get cleaners(): string[];
    set cleaners(value: string[]);
    get maxTextLength(): string;
    set maxTextLength(value: string);
    get paramConfigPath(): string;
    set paramConfigPath(value: string);
    get tritonModelName(): string;
    set tritonModelName(value: string);
    get tritonServerHost(): string;
    set tritonServerHost(value: string);
    get tritonServerPort(): string;
    set tritonServerPort(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VitsTriton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VitsTriton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VitsTriton.AsProtobufJSON;
}
export declare namespace VitsTriton {
    /**
     * Standard JavaScript object representation for VitsTriton
     */
    interface AsObject {
        batchSize: string;
        lengthScale: number;
        noiseScale: number;
        cleaners: string[];
        maxTextLength: string;
        paramConfigPath: string;
        tritonModelName: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
    /**
     * Protobuf JSON representation for VitsTriton
     */
    interface AsProtobufJSON {
        batchSize: string;
        lengthScale: number;
        noiseScale: number;
        cleaners: string[];
        maxTextLength: string;
        paramConfigPath: string;
        tritonModelName: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudServiceElevenLabs
 */
export declare class T2sCloudServiceElevenLabs implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCloudServiceElevenLabs;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCloudServiceElevenLabs): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCloudServiceElevenLabs, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCloudServiceElevenLabs, _writer: BinaryWriter): void;
    private _languageCode;
    private _modelId;
    private _voiceId;
    private _voiceSettings?;
    private _applyTextNormalization;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudServiceElevenLabs to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCloudServiceElevenLabs.AsObject>);
    get languageCode(): string;
    set languageCode(value: string);
    get modelId(): string;
    set modelId(value: string);
    get voiceId(): string;
    set voiceId(value: string);
    get voiceSettings(): VoiceSettings | undefined;
    set voiceSettings(value: VoiceSettings | undefined);
    get applyTextNormalization(): string;
    set applyTextNormalization(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCloudServiceElevenLabs.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCloudServiceElevenLabs.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCloudServiceElevenLabs.AsProtobufJSON;
}
export declare namespace T2sCloudServiceElevenLabs {
    /**
     * Standard JavaScript object representation for T2sCloudServiceElevenLabs
     */
    interface AsObject {
        languageCode: string;
        modelId: string;
        voiceId: string;
        voiceSettings?: VoiceSettings.AsObject;
        applyTextNormalization: string;
    }
    /**
     * Protobuf JSON representation for T2sCloudServiceElevenLabs
     */
    interface AsProtobufJSON {
        languageCode: string;
        modelId: string;
        voiceId: string;
        voiceSettings: VoiceSettings.AsProtobufJSON | null;
        applyTextNormalization: string;
    }
}
/**
 * Message implementation for ondewo.t2s.VoiceSettings
 */
export declare class VoiceSettings implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoiceSettings;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoiceSettings): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoiceSettings, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoiceSettings, _writer: BinaryWriter): void;
    private _stability;
    private _similarityBoost;
    private _style;
    private _useSpeakerBoost;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoiceSettings to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoiceSettings.AsObject>);
    get stability(): number;
    set stability(value: number);
    get similarityBoost(): number;
    set similarityBoost(value: number);
    get style(): number;
    set style(value: number);
    get useSpeakerBoost(): boolean;
    set useSpeakerBoost(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VoiceSettings.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoiceSettings.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoiceSettings.AsProtobufJSON;
}
export declare namespace VoiceSettings {
    /**
     * Standard JavaScript object representation for VoiceSettings
     */
    interface AsObject {
        stability: number;
        similarityBoost: number;
        style: number;
        useSpeakerBoost: boolean;
    }
    /**
     * Protobuf JSON representation for VoiceSettings
     */
    interface AsProtobufJSON {
        stability: number;
        similarityBoost: number;
        style: number;
        useSpeakerBoost: boolean;
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudServiceAmazon
 */
export declare class T2sCloudServiceAmazon implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCloudServiceAmazon;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCloudServiceAmazon): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCloudServiceAmazon, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCloudServiceAmazon, _writer: BinaryWriter): void;
    private _voiceId;
    private _modelId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudServiceAmazon to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCloudServiceAmazon.AsObject>);
    get voiceId(): string;
    set voiceId(value: string);
    get modelId(): string;
    set modelId(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCloudServiceAmazon.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCloudServiceAmazon.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCloudServiceAmazon.AsProtobufJSON;
}
export declare namespace T2sCloudServiceAmazon {
    /**
     * Standard JavaScript object representation for T2sCloudServiceAmazon
     */
    interface AsObject {
        voiceId: string;
        modelId: string;
    }
    /**
     * Protobuf JSON representation for T2sCloudServiceAmazon
     */
    interface AsProtobufJSON {
        voiceId: string;
        modelId: string;
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudServiceGoogle
 */
export declare class T2sCloudServiceGoogle implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCloudServiceGoogle;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCloudServiceGoogle): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCloudServiceGoogle, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCloudServiceGoogle, _writer: BinaryWriter): void;
    private _voiceId;
    private _speakingRate;
    private _volumeGainDb;
    private _pitch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudServiceGoogle to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCloudServiceGoogle.AsObject>);
    get voiceId(): string;
    set voiceId(value: string);
    get speakingRate(): number;
    set speakingRate(value: number);
    get volumeGainDb(): number;
    set volumeGainDb(value: number);
    get pitch(): number;
    set pitch(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCloudServiceGoogle.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCloudServiceGoogle.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCloudServiceGoogle.AsProtobufJSON;
}
export declare namespace T2sCloudServiceGoogle {
    /**
     * Standard JavaScript object representation for T2sCloudServiceGoogle
     */
    interface AsObject {
        voiceId: string;
        speakingRate: number;
        volumeGainDb: number;
        pitch: number;
    }
    /**
     * Protobuf JSON representation for T2sCloudServiceGoogle
     */
    interface AsProtobufJSON {
        voiceId: string;
        speakingRate: number;
        volumeGainDb: number;
        pitch: number;
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudServiceMicrosoft
 */
export declare class T2sCloudServiceMicrosoft implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCloudServiceMicrosoft;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCloudServiceMicrosoft): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCloudServiceMicrosoft, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCloudServiceMicrosoft, _writer: BinaryWriter): void;
    private _voiceId;
    private _useDefaultSpeaker;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudServiceMicrosoft to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCloudServiceMicrosoft.AsObject>);
    get voiceId(): string;
    set voiceId(value: string);
    get useDefaultSpeaker(): boolean;
    set useDefaultSpeaker(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCloudServiceMicrosoft.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCloudServiceMicrosoft.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCloudServiceMicrosoft.AsProtobufJSON;
}
export declare namespace T2sCloudServiceMicrosoft {
    /**
     * Standard JavaScript object representation for T2sCloudServiceMicrosoft
     */
    interface AsObject {
        voiceId: string;
        useDefaultSpeaker: boolean;
    }
    /**
     * Protobuf JSON representation for T2sCloudServiceMicrosoft
     */
    interface AsProtobufJSON {
        voiceId: string;
        useDefaultSpeaker: boolean;
    }
}
/**
 * Message implementation for ondewo.t2s.Mel2Audio
 */
export declare class Mel2Audio implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Mel2Audio;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Mel2Audio): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Mel2Audio, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Mel2Audio, _writer: BinaryWriter): void;
    private _type;
    private _mbMelganTriton?;
    private _hifiGan?;
    private _hifiGanTriton?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Mel2Audio to deeply clone from
     */
    constructor(_value?: RecursivePartial<Mel2Audio.AsObject>);
    get type(): string;
    set type(value: string);
    get mbMelganTriton(): MbMelganTriton | undefined;
    set mbMelganTriton(value: MbMelganTriton | undefined);
    get hifiGan(): HiFiGan | undefined;
    set hifiGan(value: HiFiGan | undefined);
    get hifiGanTriton(): HiFiGanTriton | undefined;
    set hifiGanTriton(value: HiFiGanTriton | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Mel2Audio.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Mel2Audio.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Mel2Audio.AsProtobufJSON;
}
export declare namespace Mel2Audio {
    /**
     * Standard JavaScript object representation for Mel2Audio
     */
    interface AsObject {
        type: string;
        mbMelganTriton?: MbMelganTriton.AsObject;
        hifiGan?: HiFiGan.AsObject;
        hifiGanTriton?: HiFiGanTriton.AsObject;
    }
    /**
     * Protobuf JSON representation for Mel2Audio
     */
    interface AsProtobufJSON {
        type: string;
        mbMelganTriton: MbMelganTriton.AsProtobufJSON | null;
        hifiGan: HiFiGan.AsProtobufJSON | null;
        hifiGanTriton: HiFiGanTriton.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.HiFiGan
 */
export declare class HiFiGan implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): HiFiGan;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: HiFiGan): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: HiFiGan, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: HiFiGan, _writer: BinaryWriter): void;
    private _useGpu;
    private _batchSize;
    private _configPath;
    private _modelPath;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HiFiGan to deeply clone from
     */
    constructor(_value?: RecursivePartial<HiFiGan.AsObject>);
    get useGpu(): boolean;
    set useGpu(value: boolean);
    get batchSize(): string;
    set batchSize(value: string);
    get configPath(): string;
    set configPath(value: string);
    get modelPath(): string;
    set modelPath(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): HiFiGan.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): HiFiGan.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): HiFiGan.AsProtobufJSON;
}
export declare namespace HiFiGan {
    /**
     * Standard JavaScript object representation for HiFiGan
     */
    interface AsObject {
        useGpu: boolean;
        batchSize: string;
        configPath: string;
        modelPath: string;
    }
    /**
     * Protobuf JSON representation for HiFiGan
     */
    interface AsProtobufJSON {
        useGpu: boolean;
        batchSize: string;
        configPath: string;
        modelPath: string;
    }
}
/**
 * Message implementation for ondewo.t2s.HiFiGanTriton
 */
export declare class HiFiGanTriton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): HiFiGanTriton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: HiFiGanTriton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: HiFiGanTriton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: HiFiGanTriton, _writer: BinaryWriter): void;
    private _configPath;
    private _tritonModelName;
    private _tritonServerHost;
    private _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HiFiGanTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<HiFiGanTriton.AsObject>);
    get configPath(): string;
    set configPath(value: string);
    get tritonModelName(): string;
    set tritonModelName(value: string);
    get tritonServerHost(): string;
    set tritonServerHost(value: string);
    get tritonServerPort(): string;
    set tritonServerPort(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): HiFiGanTriton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): HiFiGanTriton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): HiFiGanTriton.AsProtobufJSON;
}
export declare namespace HiFiGanTriton {
    /**
     * Standard JavaScript object representation for HiFiGanTriton
     */
    interface AsObject {
        configPath: string;
        tritonModelName: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
    /**
     * Protobuf JSON representation for HiFiGanTriton
     */
    interface AsProtobufJSON {
        configPath: string;
        tritonModelName: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
}
/**
 * Message implementation for ondewo.t2s.MbMelganTriton
 */
export declare class MbMelganTriton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MbMelganTriton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MbMelganTriton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MbMelganTriton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MbMelganTriton, _writer: BinaryWriter): void;
    private _configPath;
    private _statsPath;
    private _tritonModelName;
    private _tritonServerHost;
    private _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MbMelganTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<MbMelganTriton.AsObject>);
    get configPath(): string;
    set configPath(value: string);
    get statsPath(): string;
    set statsPath(value: string);
    get tritonModelName(): string;
    set tritonModelName(value: string);
    get tritonServerHost(): string;
    set tritonServerHost(value: string);
    get tritonServerPort(): string;
    set tritonServerPort(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MbMelganTriton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MbMelganTriton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MbMelganTriton.AsProtobufJSON;
}
export declare namespace MbMelganTriton {
    /**
     * Standard JavaScript object representation for MbMelganTriton
     */
    interface AsObject {
        configPath: string;
        statsPath: string;
        tritonModelName: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
    /**
     * Protobuf JSON representation for MbMelganTriton
     */
    interface AsProtobufJSON {
        configPath: string;
        statsPath: string;
        tritonModelName: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
}
/**
 * Message implementation for ondewo.t2s.Caching
 */
export declare class Caching implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Caching;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Caching): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Caching, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Caching, _writer: BinaryWriter): void;
    private _active;
    private _memoryCacheMaxSize;
    private _samplingRate;
    private _loadCache;
    private _saveCache;
    private _cacheSaveDir;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Caching to deeply clone from
     */
    constructor(_value?: RecursivePartial<Caching.AsObject>);
    get active(): boolean;
    set active(value: boolean);
    get memoryCacheMaxSize(): string;
    set memoryCacheMaxSize(value: string);
    get samplingRate(): string;
    set samplingRate(value: string);
    get loadCache(): boolean;
    set loadCache(value: boolean);
    get saveCache(): boolean;
    set saveCache(value: boolean);
    get cacheSaveDir(): string;
    set cacheSaveDir(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Caching.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Caching.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Caching.AsProtobufJSON;
}
export declare namespace Caching {
    /**
     * Standard JavaScript object representation for Caching
     */
    interface AsObject {
        active: boolean;
        memoryCacheMaxSize: string;
        samplingRate: string;
        loadCache: boolean;
        saveCache: boolean;
        cacheSaveDir: string;
    }
    /**
     * Protobuf JSON representation for Caching
     */
    interface AsProtobufJSON {
        active: boolean;
        memoryCacheMaxSize: string;
        samplingRate: string;
        loadCache: boolean;
        saveCache: boolean;
        cacheSaveDir: string;
    }
}
/**
 * Message implementation for ondewo.t2s.T2SNormalization
 */
export declare class T2SNormalization implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2SNormalization;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2SNormalization): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2SNormalization, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2SNormalization, _writer: BinaryWriter): void;
    private _language;
    private _pipeline;
    private _customPhonemizerId;
    private _customLengthScales?;
    private _arpabetMapping;
    private _numericMapping;
    private _callsignsMapping;
    private _phonemeCorrectionMapping;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SNormalization to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2SNormalization.AsObject>);
    get language(): string;
    set language(value: string);
    get pipeline(): string[];
    set pipeline(value: string[]);
    get customPhonemizerId(): string;
    set customPhonemizerId(value: string);
    get customLengthScales(): T2SCustomLengthScales | undefined;
    set customLengthScales(value: T2SCustomLengthScales | undefined);
    get arpabetMapping(): string;
    set arpabetMapping(value: string);
    get numericMapping(): string;
    set numericMapping(value: string);
    get callsignsMapping(): string;
    set callsignsMapping(value: string);
    get phonemeCorrectionMapping(): string;
    set phonemeCorrectionMapping(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2SNormalization.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2SNormalization.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2SNormalization.AsProtobufJSON;
}
export declare namespace T2SNormalization {
    /**
     * Standard JavaScript object representation for T2SNormalization
     */
    interface AsObject {
        language: string;
        pipeline: string[];
        customPhonemizerId: string;
        customLengthScales?: T2SCustomLengthScales.AsObject;
        arpabetMapping: string;
        numericMapping: string;
        callsignsMapping: string;
        phonemeCorrectionMapping: string;
    }
    /**
     * Protobuf JSON representation for T2SNormalization
     */
    interface AsProtobufJSON {
        language: string;
        pipeline: string[];
        customPhonemizerId: string;
        customLengthScales: T2SCustomLengthScales.AsProtobufJSON | null;
        arpabetMapping: string;
        numericMapping: string;
        callsignsMapping: string;
        phonemeCorrectionMapping: string;
    }
}
/**
 * Message implementation for ondewo.t2s.Postprocessing
 */
export declare class Postprocessing implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Postprocessing;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Postprocessing): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Postprocessing, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Postprocessing, _writer: BinaryWriter): void;
    private _silenceSecs;
    private _pipeline;
    private _logmmse?;
    private _wiener?;
    private _apodization?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Postprocessing to deeply clone from
     */
    constructor(_value?: RecursivePartial<Postprocessing.AsObject>);
    get silenceSecs(): number;
    set silenceSecs(value: number);
    get pipeline(): string[];
    set pipeline(value: string[]);
    get logmmse(): Logmnse | undefined;
    set logmmse(value: Logmnse | undefined);
    get wiener(): Wiener | undefined;
    set wiener(value: Wiener | undefined);
    get apodization(): Apodization | undefined;
    set apodization(value: Apodization | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Postprocessing.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Postprocessing.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Postprocessing.AsProtobufJSON;
}
export declare namespace Postprocessing {
    /**
     * Standard JavaScript object representation for Postprocessing
     */
    interface AsObject {
        silenceSecs: number;
        pipeline: string[];
        logmmse?: Logmnse.AsObject;
        wiener?: Wiener.AsObject;
        apodization?: Apodization.AsObject;
    }
    /**
     * Protobuf JSON representation for Postprocessing
     */
    interface AsProtobufJSON {
        silenceSecs: number;
        pipeline: string[];
        logmmse: Logmnse.AsProtobufJSON | null;
        wiener: Wiener.AsProtobufJSON | null;
        apodization: Apodization.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.Logmnse
 */
export declare class Logmnse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Logmnse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Logmnse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Logmnse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Logmnse, _writer: BinaryWriter): void;
    private _initialNoise;
    private _windowSize;
    private _noiseThreshold;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Logmnse to deeply clone from
     */
    constructor(_value?: RecursivePartial<Logmnse.AsObject>);
    get initialNoise(): string;
    set initialNoise(value: string);
    get windowSize(): string;
    set windowSize(value: string);
    get noiseThreshold(): number;
    set noiseThreshold(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Logmnse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Logmnse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Logmnse.AsProtobufJSON;
}
export declare namespace Logmnse {
    /**
     * Standard JavaScript object representation for Logmnse
     */
    interface AsObject {
        initialNoise: string;
        windowSize: string;
        noiseThreshold: number;
    }
    /**
     * Protobuf JSON representation for Logmnse
     */
    interface AsProtobufJSON {
        initialNoise: string;
        windowSize: string;
        noiseThreshold: number;
    }
}
/**
 * Message implementation for ondewo.t2s.Wiener
 */
export declare class Wiener implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Wiener;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Wiener): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Wiener, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Wiener, _writer: BinaryWriter): void;
    private _frameLen;
    private _lpcOrder;
    private _iterations;
    private _alpha;
    private _thresh;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Wiener to deeply clone from
     */
    constructor(_value?: RecursivePartial<Wiener.AsObject>);
    get frameLen(): string;
    set frameLen(value: string);
    get lpcOrder(): string;
    set lpcOrder(value: string);
    get iterations(): string;
    set iterations(value: string);
    get alpha(): number;
    set alpha(value: number);
    get thresh(): number;
    set thresh(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Wiener.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Wiener.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Wiener.AsProtobufJSON;
}
export declare namespace Wiener {
    /**
     * Standard JavaScript object representation for Wiener
     */
    interface AsObject {
        frameLen: string;
        lpcOrder: string;
        iterations: string;
        alpha: number;
        thresh: number;
    }
    /**
     * Protobuf JSON representation for Wiener
     */
    interface AsProtobufJSON {
        frameLen: string;
        lpcOrder: string;
        iterations: string;
        alpha: number;
        thresh: number;
    }
}
/**
 * Message implementation for ondewo.t2s.Apodization
 */
export declare class Apodization implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Apodization;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Apodization): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Apodization, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Apodization, _writer: BinaryWriter): void;
    private _apodizationSecs;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Apodization to deeply clone from
     */
    constructor(_value?: RecursivePartial<Apodization.AsObject>);
    get apodizationSecs(): number;
    set apodizationSecs(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Apodization.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Apodization.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Apodization.AsProtobufJSON;
}
export declare namespace Apodization {
    /**
     * Standard JavaScript object representation for Apodization
     */
    interface AsObject {
        apodizationSecs: number;
    }
    /**
     * Protobuf JSON representation for Apodization
     */
    interface AsProtobufJSON {
        apodizationSecs: number;
    }
}
/**
 * Message implementation for ondewo.t2s.T2SCustomLengthScales
 */
export declare class T2SCustomLengthScales implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2SCustomLengthScales;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2SCustomLengthScales): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2SCustomLengthScales, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2SCustomLengthScales, _writer: BinaryWriter): void;
    private _text;
    private _email;
    private _url;
    private _phone;
    private _spell;
    private _spellWithNames;
    private _callsignLong;
    private _callsignShort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SCustomLengthScales to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2SCustomLengthScales.AsObject>);
    get text(): number;
    set text(value: number);
    get email(): number;
    set email(value: number);
    get url(): number;
    set url(value: number);
    get phone(): number;
    set phone(value: number);
    get spell(): number;
    set spell(value: number);
    get spellWithNames(): number;
    set spellWithNames(value: number);
    get callsignLong(): number;
    set callsignLong(value: number);
    get callsignShort(): number;
    set callsignShort(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2SCustomLengthScales.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2SCustomLengthScales.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2SCustomLengthScales.AsProtobufJSON;
}
export declare namespace T2SCustomLengthScales {
    /**
     * Standard JavaScript object representation for T2SCustomLengthScales
     */
    interface AsObject {
        text: number;
        email: number;
        url: number;
        phone: number;
        spell: number;
        spellWithNames: number;
        callsignLong: number;
        callsignShort: number;
    }
    /**
     * Protobuf JSON representation for T2SCustomLengthScales
     */
    interface AsProtobufJSON {
        text: number;
        email: number;
        url: number;
        phone: number;
        spell: number;
        spellWithNames: number;
        callsignLong: number;
        callsignShort: number;
    }
}
/**
 * Message implementation for ondewo.t2s.PhonemizerId
 */
export declare class PhonemizerId implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PhonemizerId;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PhonemizerId): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PhonemizerId, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PhonemizerId, _writer: BinaryWriter): void;
    private _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PhonemizerId to deeply clone from
     */
    constructor(_value?: RecursivePartial<PhonemizerId.AsObject>);
    get id(): string;
    set id(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PhonemizerId.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PhonemizerId.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PhonemizerId.AsProtobufJSON;
}
export declare namespace PhonemizerId {
    /**
     * Standard JavaScript object representation for PhonemizerId
     */
    interface AsObject {
        id: string;
    }
    /**
     * Protobuf JSON representation for PhonemizerId
     */
    interface AsProtobufJSON {
        id: string;
    }
}
/**
 * Message implementation for ondewo.t2s.CustomPhonemizerProto
 */
export declare class CustomPhonemizerProto implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CustomPhonemizerProto;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CustomPhonemizerProto): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CustomPhonemizerProto, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CustomPhonemizerProto, _writer: BinaryWriter): void;
    private _id;
    private _maps?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CustomPhonemizerProto to deeply clone from
     */
    constructor(_value?: RecursivePartial<CustomPhonemizerProto.AsObject>);
    get id(): string;
    set id(value: string);
    get maps(): Map[] | undefined;
    set maps(value: Map[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CustomPhonemizerProto.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CustomPhonemizerProto.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CustomPhonemizerProto.AsProtobufJSON;
}
export declare namespace CustomPhonemizerProto {
    /**
     * Standard JavaScript object representation for CustomPhonemizerProto
     */
    interface AsObject {
        id: string;
        maps?: Map.AsObject[];
    }
    /**
     * Protobuf JSON representation for CustomPhonemizerProto
     */
    interface AsProtobufJSON {
        id: string;
        maps: Map.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.t2s.Map
 */
export declare class Map implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Map;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Map): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Map, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Map, _writer: BinaryWriter): void;
    private _word;
    private _phonemeGroups;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Map to deeply clone from
     */
    constructor(_value?: RecursivePartial<Map.AsObject>);
    get word(): string;
    set word(value: string);
    get phonemeGroups(): string;
    set phonemeGroups(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Map.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Map.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Map.AsProtobufJSON;
}
export declare namespace Map {
    /**
     * Standard JavaScript object representation for Map
     */
    interface AsObject {
        word: string;
        phonemeGroups: string;
    }
    /**
     * Protobuf JSON representation for Map
     */
    interface AsProtobufJSON {
        word: string;
        phonemeGroups: string;
    }
}
/**
 * Message implementation for ondewo.t2s.ListCustomPhonemizerResponse
 */
export declare class ListCustomPhonemizerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListCustomPhonemizerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListCustomPhonemizerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListCustomPhonemizerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListCustomPhonemizerResponse, _writer: BinaryWriter): void;
    private _phonemizers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCustomPhonemizerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCustomPhonemizerResponse.AsObject>);
    get phonemizers(): CustomPhonemizerProto[] | undefined;
    set phonemizers(value: CustomPhonemizerProto[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListCustomPhonemizerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListCustomPhonemizerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListCustomPhonemizerResponse.AsProtobufJSON;
}
export declare namespace ListCustomPhonemizerResponse {
    /**
     * Standard JavaScript object representation for ListCustomPhonemizerResponse
     */
    interface AsObject {
        phonemizers?: CustomPhonemizerProto.AsObject[];
    }
    /**
     * Protobuf JSON representation for ListCustomPhonemizerResponse
     */
    interface AsProtobufJSON {
        phonemizers: CustomPhonemizerProto.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.t2s.ListCustomPhonemizerRequest
 */
export declare class ListCustomPhonemizerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListCustomPhonemizerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListCustomPhonemizerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListCustomPhonemizerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListCustomPhonemizerRequest, _writer: BinaryWriter): void;
    private _pipelineIds;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCustomPhonemizerRequest.AsObject>);
    get pipelineIds(): string[];
    set pipelineIds(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListCustomPhonemizerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListCustomPhonemizerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListCustomPhonemizerRequest.AsProtobufJSON;
}
export declare namespace ListCustomPhonemizerRequest {
    /**
     * Standard JavaScript object representation for ListCustomPhonemizerRequest
     */
    interface AsObject {
        pipelineIds: string[];
    }
    /**
     * Protobuf JSON representation for ListCustomPhonemizerRequest
     */
    interface AsProtobufJSON {
        pipelineIds: string[];
    }
}
/**
 * Message implementation for ondewo.t2s.UpdateCustomPhonemizerRequest
 */
export declare class UpdateCustomPhonemizerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateCustomPhonemizerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateCustomPhonemizerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateCustomPhonemizerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateCustomPhonemizerRequest, _writer: BinaryWriter): void;
    private _id;
    private _updateMethod;
    private _maps?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateCustomPhonemizerRequest.AsObject>);
    get id(): string;
    set id(value: string);
    get updateMethod(): UpdateCustomPhonemizerRequest.UpdateMethod;
    set updateMethod(value: UpdateCustomPhonemizerRequest.UpdateMethod);
    get maps(): Map[] | undefined;
    set maps(value: Map[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateCustomPhonemizerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateCustomPhonemizerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateCustomPhonemizerRequest.AsProtobufJSON;
}
export declare namespace UpdateCustomPhonemizerRequest {
    /**
     * Standard JavaScript object representation for UpdateCustomPhonemizerRequest
     */
    interface AsObject {
        id: string;
        updateMethod: UpdateCustomPhonemizerRequest.UpdateMethod;
        maps?: Map.AsObject[];
    }
    /**
     * Protobuf JSON representation for UpdateCustomPhonemizerRequest
     */
    interface AsProtobufJSON {
        id: string;
        updateMethod: string;
        maps: Map.AsProtobufJSON[] | null;
    }
    enum UpdateMethod {
        extend_hard = 0,
        extend_soft = 1,
        replace = 2
    }
}
/**
 * Message implementation for ondewo.t2s.CreateCustomPhonemizerRequest
 */
export declare class CreateCustomPhonemizerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateCustomPhonemizerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateCustomPhonemizerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateCustomPhonemizerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateCustomPhonemizerRequest, _writer: BinaryWriter): void;
    private _prefix;
    private _maps?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateCustomPhonemizerRequest.AsObject>);
    get prefix(): string;
    set prefix(value: string);
    get maps(): Map[] | undefined;
    set maps(value: Map[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateCustomPhonemizerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateCustomPhonemizerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateCustomPhonemizerRequest.AsProtobufJSON;
}
export declare namespace CreateCustomPhonemizerRequest {
    /**
     * Standard JavaScript object representation for CreateCustomPhonemizerRequest
     */
    interface AsObject {
        prefix: string;
        maps?: Map.AsObject[];
    }
    /**
     * Protobuf JSON representation for CreateCustomPhonemizerRequest
     */
    interface AsProtobufJSON {
        prefix: string;
        maps: Map.AsProtobufJSON[] | null;
    }
}

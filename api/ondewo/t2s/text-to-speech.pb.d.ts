import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
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
    private _t2sPipelineId?;
    private _text?;
    private _lengthScale?;
    private _noiseScale?;
    private _sampleRate?;
    private _pcm?;
    private _audioFormat?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SynthesizeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SynthesizeRequest.AsObject>);
    get t2sPipelineId(): string | undefined;
    set t2sPipelineId(value: string | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    get lengthScale(): number | undefined;
    set lengthScale(value: number | undefined);
    get noiseScale(): number | undefined;
    set noiseScale(value: number | undefined);
    get sampleRate(): number | undefined;
    set sampleRate(value: number | undefined);
    get pcm(): SynthesizeRequest.Pcm | undefined;
    set pcm(value: SynthesizeRequest.Pcm | undefined);
    get audioFormat(): AudioFormat | undefined;
    set audioFormat(value: AudioFormat | undefined);
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
export declare module SynthesizeRequest {
    /**
     * Standard JavaScript object representation for SynthesizeRequest
     */
    interface AsObject {
        t2sPipelineId?: string;
        text?: string;
        lengthScale?: number;
        noiseScale?: number;
        sampleRate?: number;
        pcm?: SynthesizeRequest.Pcm;
        audioFormat?: AudioFormat;
    }
    /**
     * Protobuf JSON representation for SynthesizeRequest
     */
    interface AsProtobufJSON {
        t2sPipelineId?: string;
        text?: string;
        lengthScale?: number;
        noiseScale?: number;
        sampleRate?: number;
        pcm?: string;
        audioFormat?: string;
    }
    enum Pcm {
        PCM_16 = 0,
        PCM_24 = 1,
        PCM_32 = 2,
        PCM_S8 = 3,
        PCM_U8 = 4,
        FLOAT = 5,
        DOUBLE = 6
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
    private _audio?;
    private _generationTime?;
    private _audioLength?;
    private _t2sPipelineId?;
    private _audioFormat?;
    private _text?;
    private _sampleRate?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SynthesizeResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<SynthesizeResponse.AsObject>);
    get audio(): Uint8Array | undefined;
    set audio(value: Uint8Array | undefined);
    get generationTime(): number | undefined;
    set generationTime(value: number | undefined);
    get audioLength(): number | undefined;
    set audioLength(value: number | undefined);
    get t2sPipelineId(): string | undefined;
    set t2sPipelineId(value: string | undefined);
    get audioFormat(): AudioFormat | undefined;
    set audioFormat(value: AudioFormat | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    get sampleRate(): number | undefined;
    set sampleRate(value: number | undefined);
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
export declare module SynthesizeResponse {
    /**
     * Standard JavaScript object representation for SynthesizeResponse
     */
    interface AsObject {
        audio?: Uint8Array;
        generationTime?: number;
        audioLength?: number;
        t2sPipelineId?: string;
        audioFormat?: AudioFormat;
        text?: string;
        sampleRate?: number;
    }
    /**
     * Protobuf JSON representation for SynthesizeResponse
     */
    interface AsProtobufJSON {
        audio?: string;
        generationTime?: number;
        audioLength?: number;
        t2sPipelineId?: string;
        audioFormat?: string;
        text?: string;
        sampleRate?: number;
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
    private _languages?;
    private _speakerSexes?;
    private _pipelineOwners?;
    private _speakerNames?;
    private _domains?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sPipelinesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sPipelinesRequest.AsObject>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
    get speakerSexes(): string[] | undefined;
    set speakerSexes(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
    get speakerNames(): string[] | undefined;
    set speakerNames(value: string[] | undefined);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
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
export declare module ListT2sPipelinesRequest {
    /**
     * Standard JavaScript object representation for ListT2sPipelinesRequest
     */
    interface AsObject {
        languages?: string[];
        speakerSexes?: string[];
        pipelineOwners?: string[];
        speakerNames?: string[];
        domains?: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sPipelinesRequest
     */
    interface AsProtobufJSON {
        languages?: string[];
        speakerSexes?: string[];
        pipelineOwners?: string[];
        speakerNames?: string[];
        domains?: string[];
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
export declare module ListT2sPipelinesResponse {
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
        pipelines?: Text2SpeechConfig.AsProtobufJSON[] | null;
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
    private _speakerSexes?;
    private _pipelineOwners?;
    private _speakerNames?;
    private _domains?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sLanguagesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sLanguagesRequest.AsObject>);
    get speakerSexes(): string[] | undefined;
    set speakerSexes(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
    get speakerNames(): string[] | undefined;
    set speakerNames(value: string[] | undefined);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
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
export declare module ListT2sLanguagesRequest {
    /**
     * Standard JavaScript object representation for ListT2sLanguagesRequest
     */
    interface AsObject {
        speakerSexes?: string[];
        pipelineOwners?: string[];
        speakerNames?: string[];
        domains?: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sLanguagesRequest
     */
    interface AsProtobufJSON {
        speakerSexes?: string[];
        pipelineOwners?: string[];
        speakerNames?: string[];
        domains?: string[];
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
    private _languages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sLanguagesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sLanguagesResponse.AsObject>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
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
export declare module ListT2sLanguagesResponse {
    /**
     * Standard JavaScript object representation for ListT2sLanguagesResponse
     */
    interface AsObject {
        languages?: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sLanguagesResponse
     */
    interface AsProtobufJSON {
        languages?: string[];
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
    private _speakerSexes?;
    private _pipelineOwners?;
    private _speakerNames?;
    private _languages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sDomainsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sDomainsRequest.AsObject>);
    get speakerSexes(): string[] | undefined;
    set speakerSexes(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
    get speakerNames(): string[] | undefined;
    set speakerNames(value: string[] | undefined);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
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
export declare module ListT2sDomainsRequest {
    /**
     * Standard JavaScript object representation for ListT2sDomainsRequest
     */
    interface AsObject {
        speakerSexes?: string[];
        pipelineOwners?: string[];
        speakerNames?: string[];
        languages?: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sDomainsRequest
     */
    interface AsProtobufJSON {
        speakerSexes?: string[];
        pipelineOwners?: string[];
        speakerNames?: string[];
        languages?: string[];
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
    private _domains?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sDomainsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListT2sDomainsResponse.AsObject>);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
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
export declare module ListT2sDomainsResponse {
    /**
     * Standard JavaScript object representation for ListT2sDomainsResponse
     */
    interface AsObject {
        domains?: string[];
    }
    /**
     * Protobuf JSON representation for ListT2sDomainsResponse
     */
    interface AsProtobufJSON {
        domains?: string[];
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
    private _id?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sPipelineId to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sPipelineId.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
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
export declare module T2sPipelineId {
    /**
     * Standard JavaScript object representation for T2sPipelineId
     */
    interface AsObject {
        id?: string;
    }
    /**
     * Protobuf JSON representation for T2sPipelineId
     */
    interface AsProtobufJSON {
        id?: string;
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
    private _id?;
    private _description?;
    private _active?;
    private _inference?;
    private _normalization?;
    private _postprocessing?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text2SpeechConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<Text2SpeechConfig.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get description(): Description | undefined;
    set description(value: Description | undefined);
    get active(): boolean | undefined;
    set active(value: boolean | undefined);
    get inference(): Inference | undefined;
    set inference(value: Inference | undefined);
    get normalization(): Normalization | undefined;
    set normalization(value: Normalization | undefined);
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
export declare module Text2SpeechConfig {
    /**
     * Standard JavaScript object representation for Text2SpeechConfig
     */
    interface AsObject {
        id?: string;
        description?: Description.AsObject;
        active?: boolean;
        inference?: Inference.AsObject;
        normalization?: Normalization.AsObject;
        postprocessing?: Postprocessing.AsObject;
    }
    /**
     * Protobuf JSON representation for Text2SpeechConfig
     */
    interface AsProtobufJSON {
        id?: string;
        description?: Description.AsProtobufJSON | null;
        active?: boolean;
        inference?: Inference.AsProtobufJSON | null;
        normalization?: Normalization.AsProtobufJSON | null;
        postprocessing?: Postprocessing.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.t2s.Description
 */
export declare class Description implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Description;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Description): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Description, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Description, _writer: BinaryWriter): void;
    private _language?;
    private _speakerSex?;
    private _pipelineOwner?;
    private _comments?;
    private _speakerName?;
    private _domain?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Description to deeply clone from
     */
    constructor(_value?: RecursivePartial<Description.AsObject>);
    get language(): string | undefined;
    set language(value: string | undefined);
    get speakerSex(): string | undefined;
    set speakerSex(value: string | undefined);
    get pipelineOwner(): string | undefined;
    set pipelineOwner(value: string | undefined);
    get comments(): string | undefined;
    set comments(value: string | undefined);
    get speakerName(): string | undefined;
    set speakerName(value: string | undefined);
    get domain(): string | undefined;
    set domain(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Description.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Description.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Description.AsProtobufJSON;
}
export declare module Description {
    /**
     * Standard JavaScript object representation for Description
     */
    interface AsObject {
        language?: string;
        speakerSex?: string;
        pipelineOwner?: string;
        comments?: string;
        speakerName?: string;
        domain?: string;
    }
    /**
     * Protobuf JSON representation for Description
     */
    interface AsProtobufJSON {
        language?: string;
        speakerSex?: string;
        pipelineOwner?: string;
        comments?: string;
        speakerName?: string;
        domain?: string;
    }
}
/**
 * Message implementation for ondewo.t2s.Inference
 */
export declare class Inference implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Inference;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Inference): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Inference, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Inference, _writer: BinaryWriter): void;
    private _type?;
    private _compositeInference?;
    private _caching?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Inference to deeply clone from
     */
    constructor(_value?: RecursivePartial<Inference.AsObject>);
    get type(): string | undefined;
    set type(value: string | undefined);
    get compositeInference(): CompositeInference | undefined;
    set compositeInference(value: CompositeInference | undefined);
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
    toObject(): Inference.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Inference.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Inference.AsProtobufJSON;
}
export declare module Inference {
    /**
     * Standard JavaScript object representation for Inference
     */
    interface AsObject {
        type?: string;
        compositeInference?: CompositeInference.AsObject;
        caching?: Caching.AsObject;
    }
    /**
     * Protobuf JSON representation for Inference
     */
    interface AsProtobufJSON {
        type?: string;
        compositeInference?: CompositeInference.AsProtobufJSON | null;
        caching?: Caching.AsProtobufJSON | null;
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
export declare module CompositeInference {
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
        text2mel?: Text2Mel.AsProtobufJSON | null;
        mel2audio?: Mel2Audio.AsProtobufJSON | null;
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
    private _type?;
    private _glowTts?;
    private _glowTtsTriton?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text2Mel to deeply clone from
     */
    constructor(_value?: RecursivePartial<Text2Mel.AsObject>);
    get type(): string | undefined;
    set type(value: string | undefined);
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
export declare module Text2Mel {
    /**
     * Standard JavaScript object representation for Text2Mel
     */
    interface AsObject {
        type?: string;
        glowTts?: GlowTTS.AsObject;
        glowTtsTriton?: GlowTTSTriton.AsObject;
    }
    /**
     * Protobuf JSON representation for Text2Mel
     */
    interface AsProtobufJSON {
        type?: string;
        glowTts?: GlowTTS.AsProtobufJSON | null;
        glowTtsTriton?: GlowTTSTriton.AsProtobufJSON | null;
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
    private _batchSize?;
    private _useGpu?;
    private _lengthScale?;
    private _noiseScale?;
    private _path?;
    private _cleaners?;
    private _paramConfigPath?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GlowTTS to deeply clone from
     */
    constructor(_value?: RecursivePartial<GlowTTS.AsObject>);
    get batchSize(): string | undefined;
    set batchSize(value: string | undefined);
    get useGpu(): boolean | undefined;
    set useGpu(value: boolean | undefined);
    get lengthScale(): number | undefined;
    set lengthScale(value: number | undefined);
    get noiseScale(): number | undefined;
    set noiseScale(value: number | undefined);
    get path(): string | undefined;
    set path(value: string | undefined);
    get cleaners(): string[] | undefined;
    set cleaners(value: string[] | undefined);
    get paramConfigPath(): string | undefined;
    set paramConfigPath(value: string | undefined);
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
export declare module GlowTTS {
    /**
     * Standard JavaScript object representation for GlowTTS
     */
    interface AsObject {
        batchSize?: string;
        useGpu?: boolean;
        lengthScale?: number;
        noiseScale?: number;
        path?: string;
        cleaners?: string[];
        paramConfigPath?: string;
    }
    /**
     * Protobuf JSON representation for GlowTTS
     */
    interface AsProtobufJSON {
        batchSize?: string;
        useGpu?: boolean;
        lengthScale?: number;
        noiseScale?: number;
        path?: string;
        cleaners?: string[];
        paramConfigPath?: string;
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
    private _batchSize?;
    private _lengthScale?;
    private _noiseScale?;
    private _cleaners?;
    private _maxTextLength?;
    private _paramConfigPath?;
    private _tritonUrl?;
    private _tritonModelName?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GlowTTSTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<GlowTTSTriton.AsObject>);
    get batchSize(): string | undefined;
    set batchSize(value: string | undefined);
    get lengthScale(): number | undefined;
    set lengthScale(value: number | undefined);
    get noiseScale(): number | undefined;
    set noiseScale(value: number | undefined);
    get cleaners(): string[] | undefined;
    set cleaners(value: string[] | undefined);
    get maxTextLength(): string | undefined;
    set maxTextLength(value: string | undefined);
    get paramConfigPath(): string | undefined;
    set paramConfigPath(value: string | undefined);
    get tritonUrl(): string | undefined;
    set tritonUrl(value: string | undefined);
    get tritonModelName(): string | undefined;
    set tritonModelName(value: string | undefined);
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
export declare module GlowTTSTriton {
    /**
     * Standard JavaScript object representation for GlowTTSTriton
     */
    interface AsObject {
        batchSize?: string;
        lengthScale?: number;
        noiseScale?: number;
        cleaners?: string[];
        maxTextLength?: string;
        paramConfigPath?: string;
        tritonUrl?: string;
        tritonModelName?: string;
    }
    /**
     * Protobuf JSON representation for GlowTTSTriton
     */
    interface AsProtobufJSON {
        batchSize?: string;
        lengthScale?: number;
        noiseScale?: number;
        cleaners?: string[];
        maxTextLength?: string;
        paramConfigPath?: string;
        tritonUrl?: string;
        tritonModelName?: string;
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
    private _type?;
    private _mbMelganTriton?;
    private _hifiGan?;
    private _hifiGanTriton?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Mel2Audio to deeply clone from
     */
    constructor(_value?: RecursivePartial<Mel2Audio.AsObject>);
    get type(): string | undefined;
    set type(value: string | undefined);
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
export declare module Mel2Audio {
    /**
     * Standard JavaScript object representation for Mel2Audio
     */
    interface AsObject {
        type?: string;
        mbMelganTriton?: MbMelganTriton.AsObject;
        hifiGan?: HiFiGan.AsObject;
        hifiGanTriton?: HiFiGanTriton.AsObject;
    }
    /**
     * Protobuf JSON representation for Mel2Audio
     */
    interface AsProtobufJSON {
        type?: string;
        mbMelganTriton?: MbMelganTriton.AsProtobufJSON | null;
        hifiGan?: HiFiGan.AsProtobufJSON | null;
        hifiGanTriton?: HiFiGanTriton.AsProtobufJSON | null;
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
    private _useGpu?;
    private _batchSize?;
    private _configPath?;
    private _modelPath?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HiFiGan to deeply clone from
     */
    constructor(_value?: RecursivePartial<HiFiGan.AsObject>);
    get useGpu(): boolean | undefined;
    set useGpu(value: boolean | undefined);
    get batchSize(): string | undefined;
    set batchSize(value: string | undefined);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get modelPath(): string | undefined;
    set modelPath(value: string | undefined);
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
export declare module HiFiGan {
    /**
     * Standard JavaScript object representation for HiFiGan
     */
    interface AsObject {
        useGpu?: boolean;
        batchSize?: string;
        configPath?: string;
        modelPath?: string;
    }
    /**
     * Protobuf JSON representation for HiFiGan
     */
    interface AsProtobufJSON {
        useGpu?: boolean;
        batchSize?: string;
        configPath?: string;
        modelPath?: string;
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
    private _configPath?;
    private _tritonModelName?;
    private _tritonUrl?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HiFiGanTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<HiFiGanTriton.AsObject>);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get tritonModelName(): string | undefined;
    set tritonModelName(value: string | undefined);
    get tritonUrl(): string | undefined;
    set tritonUrl(value: string | undefined);
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
export declare module HiFiGanTriton {
    /**
     * Standard JavaScript object representation for HiFiGanTriton
     */
    interface AsObject {
        configPath?: string;
        tritonModelName?: string;
        tritonUrl?: string;
    }
    /**
     * Protobuf JSON representation for HiFiGanTriton
     */
    interface AsProtobufJSON {
        configPath?: string;
        tritonModelName?: string;
        tritonUrl?: string;
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
    private _configPath?;
    private _statsPath?;
    private _tritonModelName?;
    private _tritonUrl?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MbMelganTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<MbMelganTriton.AsObject>);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get statsPath(): string | undefined;
    set statsPath(value: string | undefined);
    get tritonModelName(): string | undefined;
    set tritonModelName(value: string | undefined);
    get tritonUrl(): string | undefined;
    set tritonUrl(value: string | undefined);
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
export declare module MbMelganTriton {
    /**
     * Standard JavaScript object representation for MbMelganTriton
     */
    interface AsObject {
        configPath?: string;
        statsPath?: string;
        tritonModelName?: string;
        tritonUrl?: string;
    }
    /**
     * Protobuf JSON representation for MbMelganTriton
     */
    interface AsProtobufJSON {
        configPath?: string;
        statsPath?: string;
        tritonModelName?: string;
        tritonUrl?: string;
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
    private _active?;
    private _memoryCacheMaxSize?;
    private _samplingRate?;
    private _loadCache?;
    private _saveCache?;
    private _cacheSaveDir?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Caching to deeply clone from
     */
    constructor(_value?: RecursivePartial<Caching.AsObject>);
    get active(): boolean | undefined;
    set active(value: boolean | undefined);
    get memoryCacheMaxSize(): string | undefined;
    set memoryCacheMaxSize(value: string | undefined);
    get samplingRate(): string | undefined;
    set samplingRate(value: string | undefined);
    get loadCache(): boolean | undefined;
    set loadCache(value: boolean | undefined);
    get saveCache(): boolean | undefined;
    set saveCache(value: boolean | undefined);
    get cacheSaveDir(): string | undefined;
    set cacheSaveDir(value: string | undefined);
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
export declare module Caching {
    /**
     * Standard JavaScript object representation for Caching
     */
    interface AsObject {
        active?: boolean;
        memoryCacheMaxSize?: string;
        samplingRate?: string;
        loadCache?: boolean;
        saveCache?: boolean;
        cacheSaveDir?: string;
    }
    /**
     * Protobuf JSON representation for Caching
     */
    interface AsProtobufJSON {
        active?: boolean;
        memoryCacheMaxSize?: string;
        samplingRate?: string;
        loadCache?: boolean;
        saveCache?: boolean;
        cacheSaveDir?: string;
    }
}
/**
 * Message implementation for ondewo.t2s.Normalization
 */
export declare class Normalization implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Normalization;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Normalization): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Normalization, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Normalization, _writer: BinaryWriter): void;
    private _language?;
    private _pipeline?;
    private _customPhonemizerId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Normalization to deeply clone from
     */
    constructor(_value?: RecursivePartial<Normalization.AsObject>);
    get language(): string | undefined;
    set language(value: string | undefined);
    get pipeline(): string[] | undefined;
    set pipeline(value: string[] | undefined);
    get customPhonemizerId(): string | undefined;
    set customPhonemizerId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Normalization.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Normalization.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Normalization.AsProtobufJSON;
}
export declare module Normalization {
    /**
     * Standard JavaScript object representation for Normalization
     */
    interface AsObject {
        language?: string;
        pipeline?: string[];
        customPhonemizerId?: string;
    }
    /**
     * Protobuf JSON representation for Normalization
     */
    interface AsProtobufJSON {
        language?: string;
        pipeline?: string[];
        customPhonemizerId?: string;
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
    private _silenceSecs?;
    private _pipeline?;
    private _logmmse?;
    private _wiener?;
    private _apodization?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Postprocessing to deeply clone from
     */
    constructor(_value?: RecursivePartial<Postprocessing.AsObject>);
    get silenceSecs(): number | undefined;
    set silenceSecs(value: number | undefined);
    get pipeline(): string[] | undefined;
    set pipeline(value: string[] | undefined);
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
export declare module Postprocessing {
    /**
     * Standard JavaScript object representation for Postprocessing
     */
    interface AsObject {
        silenceSecs?: number;
        pipeline?: string[];
        logmmse?: Logmnse.AsObject;
        wiener?: Wiener.AsObject;
        apodization?: Apodization.AsObject;
    }
    /**
     * Protobuf JSON representation for Postprocessing
     */
    interface AsProtobufJSON {
        silenceSecs?: number;
        pipeline?: string[];
        logmmse?: Logmnse.AsProtobufJSON | null;
        wiener?: Wiener.AsProtobufJSON | null;
        apodization?: Apodization.AsProtobufJSON | null;
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
    private _initialNoise?;
    private _windowSize?;
    private _noiseThreshold?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Logmnse to deeply clone from
     */
    constructor(_value?: RecursivePartial<Logmnse.AsObject>);
    get initialNoise(): string | undefined;
    set initialNoise(value: string | undefined);
    get windowSize(): string | undefined;
    set windowSize(value: string | undefined);
    get noiseThreshold(): number | undefined;
    set noiseThreshold(value: number | undefined);
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
export declare module Logmnse {
    /**
     * Standard JavaScript object representation for Logmnse
     */
    interface AsObject {
        initialNoise?: string;
        windowSize?: string;
        noiseThreshold?: number;
    }
    /**
     * Protobuf JSON representation for Logmnse
     */
    interface AsProtobufJSON {
        initialNoise?: string;
        windowSize?: string;
        noiseThreshold?: number;
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
    private _frameLen?;
    private _lpcOrder?;
    private _iterations?;
    private _alpha?;
    private _thresh?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Wiener to deeply clone from
     */
    constructor(_value?: RecursivePartial<Wiener.AsObject>);
    get frameLen(): string | undefined;
    set frameLen(value: string | undefined);
    get lpcOrder(): string | undefined;
    set lpcOrder(value: string | undefined);
    get iterations(): string | undefined;
    set iterations(value: string | undefined);
    get alpha(): number | undefined;
    set alpha(value: number | undefined);
    get thresh(): number | undefined;
    set thresh(value: number | undefined);
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
export declare module Wiener {
    /**
     * Standard JavaScript object representation for Wiener
     */
    interface AsObject {
        frameLen?: string;
        lpcOrder?: string;
        iterations?: string;
        alpha?: number;
        thresh?: number;
    }
    /**
     * Protobuf JSON representation for Wiener
     */
    interface AsProtobufJSON {
        frameLen?: string;
        lpcOrder?: string;
        iterations?: string;
        alpha?: number;
        thresh?: number;
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
    private _apodizationSecs?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Apodization to deeply clone from
     */
    constructor(_value?: RecursivePartial<Apodization.AsObject>);
    get apodizationSecs(): number | undefined;
    set apodizationSecs(value: number | undefined);
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
export declare module Apodization {
    /**
     * Standard JavaScript object representation for Apodization
     */
    interface AsObject {
        apodizationSecs?: number;
    }
    /**
     * Protobuf JSON representation for Apodization
     */
    interface AsProtobufJSON {
        apodizationSecs?: number;
    }
}

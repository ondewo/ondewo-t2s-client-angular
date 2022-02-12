import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
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
    private _id?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PhonemizerId to deeply clone from
     */
    constructor(_value?: RecursivePartial<PhonemizerId.AsObject>);
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
export declare module PhonemizerId {
    /**
     * Standard JavaScript object representation for PhonemizerId
     */
    interface AsObject {
        id?: string;
    }
    /**
     * Protobuf JSON representation for PhonemizerId
     */
    interface AsProtobufJSON {
        id?: string;
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
    private _id?;
    private _maps?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CustomPhonemizerProto to deeply clone from
     */
    constructor(_value?: RecursivePartial<CustomPhonemizerProto.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
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
export declare module CustomPhonemizerProto {
    /**
     * Standard JavaScript object representation for CustomPhonemizerProto
     */
    interface AsObject {
        id?: string;
        maps?: Map.AsObject[];
    }
    /**
     * Protobuf JSON representation for CustomPhonemizerProto
     */
    interface AsProtobufJSON {
        id?: string;
        maps?: Map.AsProtobufJSON[] | null;
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
    private _word?;
    private _phonemeGroups?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Map to deeply clone from
     */
    constructor(_value?: RecursivePartial<Map.AsObject>);
    get word(): string | undefined;
    set word(value: string | undefined);
    get phonemeGroups(): string | undefined;
    set phonemeGroups(value: string | undefined);
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
export declare module Map {
    /**
     * Standard JavaScript object representation for Map
     */
    interface AsObject {
        word?: string;
        phonemeGroups?: string;
    }
    /**
     * Protobuf JSON representation for Map
     */
    interface AsProtobufJSON {
        word?: string;
        phonemeGroups?: string;
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
export declare module ListCustomPhonemizerResponse {
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
        phonemizers?: CustomPhonemizerProto.AsProtobufJSON[] | null;
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
    private _pipelineIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCustomPhonemizerRequest.AsObject>);
    get pipelineIds(): string[] | undefined;
    set pipelineIds(value: string[] | undefined);
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
export declare module ListCustomPhonemizerRequest {
    /**
     * Standard JavaScript object representation for ListCustomPhonemizerRequest
     */
    interface AsObject {
        pipelineIds?: string[];
    }
    /**
     * Protobuf JSON representation for ListCustomPhonemizerRequest
     */
    interface AsProtobufJSON {
        pipelineIds?: string[];
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
    private _id?;
    private _updateMethod?;
    private _maps?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateCustomPhonemizerRequest.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get updateMethod(): UpdateCustomPhonemizerRequest.UpdateMethod | undefined;
    set updateMethod(value: UpdateCustomPhonemizerRequest.UpdateMethod | undefined);
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
export declare module UpdateCustomPhonemizerRequest {
    /**
     * Standard JavaScript object representation for UpdateCustomPhonemizerRequest
     */
    interface AsObject {
        id?: string;
        updateMethod?: UpdateCustomPhonemizerRequest.UpdateMethod;
        maps?: Map.AsObject[];
    }
    /**
     * Protobuf JSON representation for UpdateCustomPhonemizerRequest
     */
    interface AsProtobufJSON {
        id?: string;
        updateMethod?: string;
        maps?: Map.AsProtobufJSON[] | null;
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
    private _prefix?;
    private _maps?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateCustomPhonemizerRequest.AsObject>);
    get prefix(): string | undefined;
    set prefix(value: string | undefined);
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
export declare module CreateCustomPhonemizerRequest {
    /**
     * Standard JavaScript object representation for CreateCustomPhonemizerRequest
     */
    interface AsObject {
        prefix?: string;
        maps?: Map.AsObject[];
    }
    /**
     * Protobuf JSON representation for CreateCustomPhonemizerRequest
     */
    interface AsProtobufJSON {
        prefix?: string;
        maps?: Map.AsProtobufJSON[] | null;
    }
}
//# sourceMappingURL=custom-phonemizer.pb.d.ts.map
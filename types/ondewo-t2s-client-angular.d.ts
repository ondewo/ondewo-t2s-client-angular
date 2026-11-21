/**
 * Generated bundle index. Do not edit.
 */
import { GrpcClientFactory, GrpcEvent, GrpcMessage, GrpcMetadata, GrpcRequest, RecursivePartial, ToProtobufJSONOptions } from "@ngx-grpc/common";
import { BinaryReader, BinaryWriter, ByteSource } from "google-protobuf";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";
import * as i0 from "@angular/core";
import { EnvironmentProviders, InjectionToken, OnDestroy, Type } from "@angular/core";
import { GrpcHandler, GrpcInterceptor } from "@ngx-grpc/core";
import { Observable } from "rxjs";
import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
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
 * Message implementation for ondewo.t2s.StreamingSynthesizeRequest
 */
export declare class StreamingSynthesizeRequest implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): StreamingSynthesizeRequest;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingSynthesizeRequest): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: StreamingSynthesizeRequest, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: StreamingSynthesizeRequest, _writer: BinaryWriter): void;
  private _text;
  private _config?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingSynthesizeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamingSynthesizeRequest.AsObject>);
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
  toObject(): StreamingSynthesizeRequest.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): StreamingSynthesizeRequest.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): StreamingSynthesizeRequest.AsProtobufJSON;
}
export declare namespace StreamingSynthesizeRequest {
  /**
   * Standard JavaScript object representation for StreamingSynthesizeRequest
   */
  interface AsObject {
    text: string;
    config?: RequestConfig.AsObject;
  }
  /**
   * Protobuf JSON representation for StreamingSynthesizeRequest
   */
  interface AsProtobufJSON {
    text: string;
    config: RequestConfig.AsProtobufJSON | null;
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
  private _t2sServiceConfig?;
  private _t2sCloudProviderConfig?;
  private _t2sNormalization?;
  private _wordToPhonemeMapping?;
  private _instruction;
  private _oneofLengthScale;
  private _oneofNoiseScale;
  private _oneofSampleRate;
  private _oneofPcm;
  private _oneofAudioFormat;
  private _oneofUseCache;
  private _oneofT2sNormalization;
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
  get t2sServiceConfig(): googleProtobuf001.Struct | undefined;
  set t2sServiceConfig(value: googleProtobuf001.Struct | undefined);
  get t2sCloudProviderConfig(): T2sCloudProviderConfig | undefined;
  set t2sCloudProviderConfig(value: T2sCloudProviderConfig | undefined);
  get t2sNormalization(): T2SNormalization | undefined;
  set t2sNormalization(value: T2SNormalization | undefined);
  get wordToPhonemeMapping(): googleProtobuf001.Struct | undefined;
  set wordToPhonemeMapping(value: googleProtobuf001.Struct | undefined);
  get instruction(): string;
  set instruction(value: string);
  get oneofLengthScale(): RequestConfig.OneofLengthScaleCase;
  get oneofNoiseScale(): RequestConfig.OneofNoiseScaleCase;
  get oneofSampleRate(): RequestConfig.OneofSampleRateCase;
  get oneofPcm(): RequestConfig.OneofPcmCase;
  get oneofAudioFormat(): RequestConfig.OneofAudioFormatCase;
  get oneofUseCache(): RequestConfig.OneofUseCacheCase;
  get oneofT2sNormalization(): RequestConfig.OneofT2sNormalizationCase;
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
    t2sServiceConfig?: googleProtobuf001.Struct.AsObject;
    t2sCloudProviderConfig?: T2sCloudProviderConfig.AsObject;
    t2sNormalization?: T2SNormalization.AsObject;
    wordToPhonemeMapping?: googleProtobuf001.Struct.AsObject;
    instruction: string;
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
    t2sServiceConfig: googleProtobuf001.Struct.AsProtobufJSON | null;
    t2sCloudProviderConfig: T2sCloudProviderConfig.AsProtobufJSON | null;
    t2sNormalization: T2SNormalization.AsProtobufJSON | null;
    wordToPhonemeMapping: googleProtobuf001.Struct.AsProtobufJSON | null;
    instruction: string;
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
  enum OneofT2sNormalizationCase {
    none = 0,
    t2sNormalization = 1
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
  private _sampleRate;
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
  get sampleRate(): number;
  set sampleRate(value: number);
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
    sampleRate: number;
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
    sampleRate: number;
  }
}
/**
 * Message implementation for ondewo.t2s.StreamingSynthesizeResponse
 */
export declare class StreamingSynthesizeResponse implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): StreamingSynthesizeResponse;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingSynthesizeResponse): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: StreamingSynthesizeResponse, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: StreamingSynthesizeResponse, _writer: BinaryWriter): void;
  private _audioUuid;
  private _audio;
  private _generationTime;
  private _audioLength;
  private _text;
  private _config?;
  private _normalizedText;
  private _sampleRate;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingSynthesizeResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamingSynthesizeResponse.AsObject>);
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
  get sampleRate(): number;
  set sampleRate(value: number);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingSynthesizeResponse.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): StreamingSynthesizeResponse.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): StreamingSynthesizeResponse.AsProtobufJSON;
}
export declare namespace StreamingSynthesizeResponse {
  /**
   * Standard JavaScript object representation for StreamingSynthesizeResponse
   */
  interface AsObject {
    audioUuid: string;
    audio: Uint8Array;
    generationTime: number;
    audioLength: number;
    text: string;
    config?: RequestConfig.AsObject;
    normalizedText: string;
    sampleRate: number;
  }
  /**
   * Protobuf JSON representation for StreamingSynthesizeResponse
   */
  interface AsProtobufJSON {
    audioUuid: string;
    audio: string;
    generationTime: number;
    audioLength: number;
    text: string;
    config: RequestConfig.AsProtobufJSON | null;
    normalizedText: string;
    sampleRate: number;
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
 * Message implementation for ondewo.t2s.ListT2sNormalizationPipelinesRequest
 */
export declare class ListT2sNormalizationPipelinesRequest implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): ListT2sNormalizationPipelinesRequest;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sNormalizationPipelinesRequest): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: ListT2sNormalizationPipelinesRequest, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ListT2sNormalizationPipelinesRequest, _writer: BinaryWriter): void;
  private _language;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sNormalizationPipelinesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListT2sNormalizationPipelinesRequest.AsObject>);
  get language(): string;
  set language(value: string);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sNormalizationPipelinesRequest.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): ListT2sNormalizationPipelinesRequest.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): ListT2sNormalizationPipelinesRequest.AsProtobufJSON;
}
export declare namespace ListT2sNormalizationPipelinesRequest {
  /**
   * Standard JavaScript object representation for ListT2sNormalizationPipelinesRequest
   */
  interface AsObject {
    language: string;
  }
  /**
   * Protobuf JSON representation for ListT2sNormalizationPipelinesRequest
   */
  interface AsProtobufJSON {
    language: string;
  }
}
/**
 * Message implementation for ondewo.t2s.ListT2sNormalizationPipelinesResponse
 */
export declare class ListT2sNormalizationPipelinesResponse implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): ListT2sNormalizationPipelinesResponse;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sNormalizationPipelinesResponse): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: ListT2sNormalizationPipelinesResponse, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ListT2sNormalizationPipelinesResponse, _writer: BinaryWriter): void;
  private _t2sNormalizationPipelines;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sNormalizationPipelinesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListT2sNormalizationPipelinesResponse.AsObject>);
  get t2sNormalizationPipelines(): string[];
  set t2sNormalizationPipelines(value: string[]);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sNormalizationPipelinesResponse.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): ListT2sNormalizationPipelinesResponse.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): ListT2sNormalizationPipelinesResponse.AsProtobufJSON;
}
export declare namespace ListT2sNormalizationPipelinesResponse {
  /**
   * Standard JavaScript object representation for ListT2sNormalizationPipelinesResponse
   */
  interface AsObject {
    t2sNormalizationPipelines: string[];
  }
  /**
   * Protobuf JSON representation for ListT2sNormalizationPipelinesResponse
   */
  interface AsProtobufJSON {
    t2sNormalizationPipelines: string[];
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
  private _qwen3TtsCustomVoice?;
  private _qwen3TtsBase?;
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
  get qwen3TtsCustomVoice(): Qwen3TtsCustomVoice | undefined;
  set qwen3TtsCustomVoice(value: Qwen3TtsCustomVoice | undefined);
  get qwen3TtsBase(): Qwen3TtsBase | undefined;
  set qwen3TtsBase(value: Qwen3TtsBase | undefined);
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
    qwen3TtsCustomVoice?: Qwen3TtsCustomVoice.AsObject;
    qwen3TtsBase?: Qwen3TtsBase.AsObject;
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
    qwen3TtsCustomVoice: Qwen3TtsCustomVoice.AsProtobufJSON | null;
    qwen3TtsBase: Qwen3TtsBase.AsProtobufJSON | null;
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
  private _speakerLanguage;
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
  get speakerLanguage(): string;
  set speakerLanguage(value: string);
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
    speakerLanguage: string;
  }
  /**
   * Protobuf JSON representation for T2sCloudServiceGoogle
   */
  interface AsProtobufJSON {
    voiceId: string;
    speakingRate: number;
    volumeGainDb: number;
    pitch: number;
    speakerLanguage: string;
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
 * Message implementation for ondewo.t2s.Qwen3TtsCustomVoice
 */
export declare class Qwen3TtsCustomVoice implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): Qwen3TtsCustomVoice;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Qwen3TtsCustomVoice): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Qwen3TtsCustomVoice, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Qwen3TtsCustomVoice, _writer: BinaryWriter): void;
  private _voiceId;
  private _modelName;
  private _language;
  private _qwen3TtsServerHost;
  private _qwen3TtsServerPort;
  private _qwen3TtsServerHeader?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Qwen3TtsCustomVoice to deeply clone from
   */
  constructor(_value?: RecursivePartial<Qwen3TtsCustomVoice.AsObject>);
  get voiceId(): string;
  set voiceId(value: string);
  get modelName(): string;
  set modelName(value: string);
  get language(): string;
  set language(value: string);
  get qwen3TtsServerHost(): string;
  set qwen3TtsServerHost(value: string);
  get qwen3TtsServerPort(): string;
  set qwen3TtsServerPort(value: string);
  get qwen3TtsServerHeader(): googleProtobuf001.Struct | undefined;
  set qwen3TtsServerHeader(value: googleProtobuf001.Struct | undefined);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Qwen3TtsCustomVoice.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): Qwen3TtsCustomVoice.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): Qwen3TtsCustomVoice.AsProtobufJSON;
}
export declare namespace Qwen3TtsCustomVoice {
  /**
   * Standard JavaScript object representation for Qwen3TtsCustomVoice
   */
  interface AsObject {
    voiceId: string;
    modelName: string;
    language: string;
    qwen3TtsServerHost: string;
    qwen3TtsServerPort: string;
    qwen3TtsServerHeader?: googleProtobuf001.Struct.AsObject;
  }
  /**
   * Protobuf JSON representation for Qwen3TtsCustomVoice
   */
  interface AsProtobufJSON {
    voiceId: string;
    modelName: string;
    language: string;
    qwen3TtsServerHost: string;
    qwen3TtsServerPort: string;
    qwen3TtsServerHeader: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}
/**
 * Message implementation for ondewo.t2s.Qwen3TtsBase
 */
export declare class Qwen3TtsBase implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): Qwen3TtsBase;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Qwen3TtsBase): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Qwen3TtsBase, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Qwen3TtsBase, _writer: BinaryWriter): void;
  private _modelName;
  private _language;
  private _embeddingPath;
  private _qwen3TtsServerHost;
  private _qwen3TtsServerPort;
  private _qwen3TtsServerHeader?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Qwen3TtsBase to deeply clone from
   */
  constructor(_value?: RecursivePartial<Qwen3TtsBase.AsObject>);
  get modelName(): string;
  set modelName(value: string);
  get language(): string;
  set language(value: string);
  get embeddingPath(): string;
  set embeddingPath(value: string);
  get qwen3TtsServerHost(): string;
  set qwen3TtsServerHost(value: string);
  get qwen3TtsServerPort(): string;
  set qwen3TtsServerPort(value: string);
  get qwen3TtsServerHeader(): googleProtobuf001.Struct | undefined;
  set qwen3TtsServerHeader(value: googleProtobuf001.Struct | undefined);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Qwen3TtsBase.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): Qwen3TtsBase.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): Qwen3TtsBase.AsProtobufJSON;
}
export declare namespace Qwen3TtsBase {
  /**
   * Standard JavaScript object representation for Qwen3TtsBase
   */
  interface AsObject {
    modelName: string;
    language: string;
    embeddingPath: string;
    qwen3TtsServerHost: string;
    qwen3TtsServerPort: string;
    qwen3TtsServerHeader?: googleProtobuf001.Struct.AsObject;
  }
  /**
   * Protobuf JSON representation for Qwen3TtsBase
   */
  interface AsProtobufJSON {
    modelName: string;
    language: string;
    embeddingPath: string;
    qwen3TtsServerHost: string;
    qwen3TtsServerPort: string;
    qwen3TtsServerHeader: googleProtobuf001.Struct.AsProtobufJSON | null;
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
/**
 * Message implementation for ondewo.t2s.VoiceCloningRequest
 */
export declare class VoiceCloningRequest implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): VoiceCloningRequest;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VoiceCloningRequest): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: VoiceCloningRequest, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: VoiceCloningRequest, _writer: BinaryWriter): void;
  private _sampleAudio;
  private _transcription;
  private _speakerName;
  private _speakerLanguage;
  private _modelName;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VoiceCloningRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<VoiceCloningRequest.AsObject>);
  get sampleAudio(): Uint8Array;
  set sampleAudio(value: Uint8Array);
  get transcription(): string;
  set transcription(value: string);
  get speakerName(): string;
  set speakerName(value: string);
  get speakerLanguage(): string;
  set speakerLanguage(value: string);
  get modelName(): string;
  set modelName(value: string);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VoiceCloningRequest.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): VoiceCloningRequest.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): VoiceCloningRequest.AsProtobufJSON;
}
export declare namespace VoiceCloningRequest {
  /**
   * Standard JavaScript object representation for VoiceCloningRequest
   */
  interface AsObject {
    sampleAudio: Uint8Array;
    transcription: string;
    speakerName: string;
    speakerLanguage: string;
    modelName: string;
  }
  /**
   * Protobuf JSON representation for VoiceCloningRequest
   */
  interface AsProtobufJSON {
    sampleAudio: string;
    transcription: string;
    speakerName: string;
    speakerLanguage: string;
    modelName: string;
  }
}
/**
 * Specific GrpcClientSettings for Text2Speech.
 * Use it only if your default settings are not set or the service requires other settings.
 */
export declare const GRPC_TEXT2_SPEECH_CLIENT_SETTINGS: InjectionToken<any>;
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
    synthesize: (requestData: SynthesizeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<SynthesizeResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/BatchSynthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.BatchSynthesizeResponse>>
     */
    batchSynthesize: (requestData: BatchSynthesizeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<BatchSynthesizeResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/NormalizeText
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.NormalizeTextResponse>>
     */
    normalizeText: (requestData: NormalizeTextRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<NormalizeTextResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/GetT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
     */
    getT2sPipeline: (requestData: T2sPipelineId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<Text2SpeechConfig>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/CreateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.T2sPipelineId>>
     */
    createT2sPipeline: (requestData: Text2SpeechConfig, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<T2sPipelineId>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/DeleteT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteT2sPipeline: (requestData: T2sPipelineId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/UpdateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateT2sPipeline: (requestData: Text2SpeechConfig, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListT2sPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
     */
    listT2sPipelines: (requestData: ListT2sPipelinesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListT2sPipelinesResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListT2sLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListT2sLanguagesResponse>>
     */
    listT2sLanguages: (requestData: ListT2sLanguagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListT2sLanguagesResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListT2sDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListT2sDomainsResponse>>
     */
    listT2sDomains: (requestData: ListT2sDomainsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListT2sDomainsResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListT2sNormalizationPipelinesResponse>>
     */
    listT2sNormalizationPipelines: (requestData: ListT2sNormalizationPipelinesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListT2sNormalizationPipelinesResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/GetServiceInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.T2SGetServiceInfoResponse>>
     */
    getServiceInfo: (requestData: googleProtobuf001.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<T2SGetServiceInfoResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/GetCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
     */
    getCustomPhonemizer: (requestData: PhonemizerId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<CustomPhonemizerProto>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/CreateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PhonemizerId>>
     */
    createCustomPhonemizer: (requestData: CreateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<PhonemizerId>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/DeleteCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteCustomPhonemizer: (requestData: PhonemizerId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/UpdateCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
     */
    updateCustomPhonemizer: (requestData: UpdateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<CustomPhonemizerProto>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/ListCustomPhonemizer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>
     */
    listCustomPhonemizer: (requestData: ListCustomPhonemizerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListCustomPhonemizerResponse>>;
    /**
     * Unary call: /ondewo.t2s.Text2Speech/VoiceCloning
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    voiceCloning: (requestData: VoiceCloningRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
  };
  constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
  /**
   * Unary call @/ondewo.t2s.Text2Speech/Synthesize
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SynthesizeResponse>
   */
  synthesize(requestData: SynthesizeRequest, requestMetadata?: GrpcMetadata): Observable<SynthesizeResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/BatchSynthesize
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.BatchSynthesizeResponse>
   */
  batchSynthesize(requestData: BatchSynthesizeRequest, requestMetadata?: GrpcMetadata): Observable<BatchSynthesizeResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/NormalizeText
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.NormalizeTextResponse>
   */
  normalizeText(requestData: NormalizeTextRequest, requestMetadata?: GrpcMetadata): Observable<NormalizeTextResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/GetT2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Text2SpeechConfig>
   */
  getT2sPipeline(requestData: T2sPipelineId, requestMetadata?: GrpcMetadata): Observable<Text2SpeechConfig>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/CreateT2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.T2sPipelineId>
   */
  createT2sPipeline(requestData: Text2SpeechConfig, requestMetadata?: GrpcMetadata): Observable<T2sPipelineId>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/DeleteT2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteT2sPipeline(requestData: T2sPipelineId, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/UpdateT2sPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  updateT2sPipeline(requestData: Text2SpeechConfig, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListT2sPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListT2sPipelinesResponse>
   */
  listT2sPipelines(requestData: ListT2sPipelinesRequest, requestMetadata?: GrpcMetadata): Observable<ListT2sPipelinesResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListT2sLanguages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListT2sLanguagesResponse>
   */
  listT2sLanguages(requestData: ListT2sLanguagesRequest, requestMetadata?: GrpcMetadata): Observable<ListT2sLanguagesResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListT2sDomains
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListT2sDomainsResponse>
   */
  listT2sDomains(requestData: ListT2sDomainsRequest, requestMetadata?: GrpcMetadata): Observable<ListT2sDomainsResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListT2sNormalizationPipelinesResponse>
   */
  listT2sNormalizationPipelines(requestData: ListT2sNormalizationPipelinesRequest, requestMetadata?: GrpcMetadata): Observable<ListT2sNormalizationPipelinesResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/GetServiceInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.T2SGetServiceInfoResponse>
   */
  getServiceInfo(requestData: googleProtobuf001.Empty, requestMetadata?: GrpcMetadata): Observable<T2SGetServiceInfoResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/GetCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CustomPhonemizerProto>
   */
  getCustomPhonemizer(requestData: PhonemizerId, requestMetadata?: GrpcMetadata): Observable<CustomPhonemizerProto>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/CreateCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PhonemizerId>
   */
  createCustomPhonemizer(requestData: CreateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<PhonemizerId>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/DeleteCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteCustomPhonemizer(requestData: PhonemizerId, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/UpdateCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CustomPhonemizerProto>
   */
  updateCustomPhonemizer(requestData: UpdateCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<CustomPhonemizerProto>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/ListCustomPhonemizer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCustomPhonemizerResponse>
   */
  listCustomPhonemizer(requestData: ListCustomPhonemizerRequest, requestMetadata?: GrpcMetadata): Observable<ListCustomPhonemizerResponse>;
  /**
   * Unary call @/ondewo.t2s.Text2Speech/VoiceCloning
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  voiceCloning(requestData: VoiceCloningRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  static ɵfac: i0.ɵɵFactoryDeclaration<Text2SpeechClient, [{
    optional: true;
  }, null, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * The set of shapes a {@link TokenProvider} is allowed to return for the current
 * access token.
 *
 * - `string` — a ready, synchronous token.
 * - `null` — there is no token right now (the user is unauthenticated). The
 *   request must be sent unchanged, never with an empty `Bearer` header.
 * - `Promise<...>` / `Observable<...>` — an asynchronous source (e.g.
 *   `keycloak.updateToken()` from `keycloak-js`, or `KeycloakService` from
 *   `keycloak-angular`) that resolves to a token or `null`.
 */
export type TokenResult = string | null | Promise<string | null> | Observable<string | null>;
/**
 * Contract the consuming application implements to feed the current Keycloak
 * access token into this library's auth interceptors.
 *
 * SECURITY: this client deliberately does NOT perform any OAuth/OIDC flow
 * itself — no Resource Owner Password Credentials grant, no client secret, no
 * token storage. Acquiring, refreshing and storing the token is the
 * responsibility of a dedicated, browser-safe library (`keycloak-js` /
 * `keycloak-angular`) in the host application. This client only reads the
 * current token and attaches it as a bearer credential to outgoing requests.
 *
 * Implementations should return the freshest token they have. Returning a
 * `Promise`/`Observable` lets the implementation refresh a soon-to-expire token
 * before the request is sent (e.g. `keycloak.updateToken(30)`).
 */
export interface TokenProvider {
  /**
   * Return the current access token, or `null` when the user is not
   * authenticated. May be synchronous or asynchronous.
   */
  getToken(): TokenResult;
}
/**
 * DI token under which the consuming application registers its
 * {@link TokenProvider} implementation.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   { provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider },
 * ]
 * ```
 */
export declare const TOKEN_PROVIDER: InjectionToken<TokenProvider>;
/**
 * Seconds before `expires_at` at which the access token is refreshed (spec `EXPIRY_LEEWAY`). Covers
 * clock skew and the round trip to Keycloak. Identical in every ONDEWO client SDK.
 */
export declare const REFRESH_SKEW_IN_S: number;
/** Floor (seconds) of any background wait, so an `expires_in` of 0 cannot spin a hot loop. */
export declare const MIN_REFRESH_DELAY_IN_S: number;
/**
 * First retry delay (seconds) after a FAILED refresh. Far above {@link MIN_REFRESH_DELAY_IN_S} on
 * purpose: ondewo runs one client per call container, so clients that fail together would otherwise
 * poll a shared realm at 1 Hz, together, for the whole outage.
 */
export declare const REFRESH_RETRY_BASE_DELAY_IN_S: number;
/** Ceiling (seconds) of the failure backoff: a persistent outage is retried at most this often. */
export declare const REFRESH_RETRY_MAX_DELAY_IN_S: number;
/** Exponent cap so `2 ** n` cannot grow without bound; `5 * 2^6 = 320` already exceeds the ceiling. */
export declare const MAX_REFRESH_RETRY_EXPONENT: number;
/** Timeout (seconds) of one whole token-endpoint call. Must stay below {@link REFRESH_SKEW_IN_S}. */
export declare const HTTP_TIMEOUT_IN_S: number;
/** An error body quoted into an error message is truncated to this many characters. */
export declare const MAX_ERROR_BODY_CHARS: number;
/** How a non-empty secret is rendered by every string rendering of a configuration. */
export declare const REDACTED: string;
/** The timing constants of the token session, overridable (shrinkable) by tests. */
export interface KeycloakTimings {
  /** See {@link REFRESH_SKEW_IN_S}. */
  expiryLeewayInS: number;
  /** See {@link MIN_REFRESH_DELAY_IN_S}. */
  minRefreshDelayInS: number;
  /** See {@link REFRESH_RETRY_BASE_DELAY_IN_S}. */
  retryBaseDelayInS: number;
  /** See {@link REFRESH_RETRY_MAX_DELAY_IN_S}. */
  retryMaxDelayInS: number;
  /** See {@link MAX_REFRESH_RETRY_EXPONENT}. */
  maxRetryExponent: number;
  /** See {@link HTTP_TIMEOUT_IN_S}. */
  httpTimeoutInS: number;
  /** See {@link MAX_ERROR_BODY_CHARS}. */
  maxErrorBodyChars: number;
}
/** The production timings: exactly the constants above. */
export declare const DEFAULT_KEYCLOAK_TIMINGS: Readonly<KeycloakTimings>;
/**
 * The one error type of every Keycloak failure: login, refresh, and the lazy read of an expired
 * token. The original error, when there is one, is kept as `cause`. Its message never carries a
 * credential.
 */
export declare class KeycloakAuthenticationError extends Error {
  /**
   * @param message a human-readable description of the authentication failure.
   * @param options `cause`: the underlying error, kept as the standard `Error.cause`.
   */
  constructor(message: string, options?: ErrorOptions);
}
/**
 * Raised by a {@link KeycloakTokenTransport} when the token endpoint could not be REACHED (connection
 * refused, DNS, TLS handshake, timeout). The session reports it as "could not reach the token
 * endpoint"; any other error a transport throws is treated as a defect of the transport.
 */
export declare class KeycloakTransportError extends Error {
  /**
   * @param message what failed.
   * @param options `cause`: the underlying network error, kept as the standard `Error.cause`.
   */
  constructor(message: string, options?: ErrorOptions);
}
/** One token-endpoint request handed to a {@link KeycloakTokenTransport}. */
export interface KeycloakTokenRequest {
  /** `<keycloakUrl>/realms/<realm>/protocol/openid-connect/token`. */
  url: string;
  /** The form fields, to be sent `application/x-www-form-urlencoded`. */
  form: Record<string, string>;
  /** Timeout of the whole call (seconds). */
  timeoutInS: number;
  /** Whether to verify the endpoint's TLS certificate (a browser transport cannot honour `false`). */
  verifySsl: boolean;
}
/** The raw HTTP answer of the token endpoint. */
export interface KeycloakTokenHttpResponse {
  /** HTTP status code. */
  status: number;
  /** The raw response body. */
  body: string;
}
/**
 * POST one form to the token endpoint. Resolves with ANY HTTP answer (the session judges the status),
 * rejects with a {@link KeycloakTransportError} when no answer could be obtained.
 */
export type KeycloakTokenTransport = (request: KeycloakTokenRequest) => Promise<KeycloakTokenHttpResponse>;
/** Log sink; levels as in every ONDEWO SDK (WARNING per failed refresh, INFO on recovery). */
export interface KeycloakLogger {
  /** One line per failed refresh. */
  warn(message: string): void;
  /** One line when refreshing recovers. */
  info(message: string): void;
  /** Diagnostic detail only. */
  debug(message: string): void;
}
/** The default {@link KeycloakLogger}: the browser console. */
export declare const CONSOLE_KEYCLOAK_LOGGER: KeycloakLogger;
/** Timer seam of the background refresher. */
export interface KeycloakScheduler {
  /** Arm `fn` to run in `delayInMs`; returns a handle for {@link clearTimeout}. */
  setTimeout(fn: () => void, delayInMs: number): unknown;
  /** Disarm a handle returned by {@link setTimeout}. */
  clearTimeout(handle: unknown): void;
}
/** The default {@link KeycloakScheduler}: the global timers (looked up per call, so fakes apply). */
export declare const GLOBAL_KEYCLOAK_SCHEDULER: KeycloakScheduler;
/** Options of {@link KeycloakTokenSession.create}. `refreshToken` is deliberately the last field. */
export interface KeycloakTokenSessionOptions {
  /** Keycloak base URL, the part before `/realms/<realm>`; trailing `/` characters are stripped. */
  keycloakUrl: string;
  /** Realm, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /** PUBLIC SDK client id; no client secret exists and none is ever sent. */
  clientId: string;
  /** Technical user of the password grant. */
  username?: string;
  /** Technical-user password. SECRET. */
  password?: string;
  /** Bounds auto-refresh, measured from the initial token acquisition; absent = unbounded. */
  tokenExpirationInS?: number | null;
  /** TLS verification of the token-endpoint call only (default `true`). */
  verifySsl?: boolean;
  /** The HTTP exchange with the token endpoint. */
  transport: KeycloakTokenTransport;
  /** MONOTONIC clock in seconds; defaults to `performance.now() / 1000`. */
  timeFn?: () => number;
  /** [0,1] jitter source of the failure backoff; defaults to `Math.random`. */
  randomFn?: () => number;
  /** Timer seam of the background refresher. */
  scheduler?: KeycloakScheduler;
  /** Log sink; defaults to the console. */
  logger?: KeycloakLogger;
  /** `false` skips the background refresher (test seam); default `true`. */
  startBackgroundRefresh?: boolean;
  /** Overrides of {@link DEFAULT_KEYCLOAK_TIMINGS} (test seam). */
  timings?: Partial<KeycloakTimings>;
  /** A handed-off Keycloak OFFLINE refresh token used instead of the password. SECRET. */
  refreshToken?: string;
}
/** Options of {@link KeycloakTokenSession.getAccessToken}. */
export interface KeycloakAccessTokenOptions {
  /**
   * Refresh even when the token still looks comfortably valid (e.g. after the server answered
   * `UNAUTHENTICATED`). A running backoff and the `tokenExpirationInS` deadline still apply.
   */
  force?: boolean;
}
/**
 * Full-jitter backoff delay (seconds) after `consecutiveFailures` failed refreshes: uniform in
 * `[base, ceiling]`, the ceiling doubling per failure up to the maximum.
 *
 * @param consecutiveFailures how many refreshes failed in a row (values below 1 count as 1).
 * @param randomFn jitter source; its value is clamped to [0, 1].
 * @param timings the timing constants to use.
 * @returns the delay in seconds.
 */
export declare function backoffDelayInS(consecutiveFailures: number, randomFn: () => number, timings?: Readonly<KeycloakTimings>): number;
/**
 * @param value a secret, possibly empty.
 * @returns {@link REDACTED} for a non-empty secret, the empty string otherwise.
 */
export declare function redactSecret(value: string | undefined | null): string;
/**
 * The fields that identify one credential set, in the order the shared-session key hashes them.
 */
export interface KeycloakCredentialFields {
  /** Keycloak base URL. */
  keycloakUrl: string;
  /** Realm. */
  realm: string;
  /** Public client id. */
  clientId: string;
  /** Technical user. */
  username?: string;
  /** Password. */
  password?: string;
  /** Auto-refresh bound. */
  tokenExpirationInS?: number | null;
  /** TLS verification flag. */
  verifySsl?: boolean;
  /** Offline refresh token. */
  refreshToken?: string;
}
/**
 * Key of the shared-session registry: SHA-256 hex of the credential fields joined with NUL, in the
 * order of every ONDEWO SDK. Never an object identity, and it holds no secret substring.
 *
 * @param fields the credential set.
 * @returns 64 hex characters.
 */
export declare function keycloakSessionRegistryKey(fields: KeycloakCredentialFields): string;
/**
 * One Keycloak login and the access token it keeps fresh: the framework-free core of
 * `KeycloakTokenProvider`, behaving exactly like the token provider of every other ONDEWO SDK.
 *
 * - Start-up ({@link create}): ONE refresh grant with a handed-off offline token, or else ONE password
 *   grant. A refused offline token is never answered with a password login.
 * - Lazy path ({@link getAccessToken} / {@link authorizationMetadata}): inside {@link REFRESH_SKEW_IN_S}
 *   of expiry one refresh grant is sent, shared by every concurrent caller; while it fails, the
 *   still-valid token keeps being served and the jittered backoff decides when the next request may
 *   go out. Only an EXPIRED token whose refresh fails raises.
 * - Background: a timer refreshes ahead of expiry; no failure ever ends it, it backs off instead.
 *   It ends on {@link stop} or once `tokenExpirationInS` has elapsed.
 */
export declare class KeycloakTokenSession {
  /** Keycloak base URL without trailing `/`. */
  readonly keycloakUrl: string;
  /** Realm. */
  readonly realm: string;
  /** Public client id. */
  readonly clientId: string;
  /** Technical user. */
  readonly username: string;
  /** Auto-refresh bound in seconds, or `null`. */
  readonly tokenExpirationInS: number | null;
  /** TLS verification flag of the token-endpoint call. */
  readonly verifySsl: boolean;
  /** Password; never rendered. */
  private readonly password;
  /** The offline token handed in at start-up; never rendered. */
  private readonly configuredRefreshToken;
  /** Token endpoint URL. */
  private readonly tokenEndpoint;
  /** HTTP exchange. */
  private readonly transport;
  /** Monotonic clock (seconds). */
  private readonly timeFn;
  /** Backoff jitter. */
  private readonly randomFn;
  /** Timer seam. */
  private readonly scheduler;
  /** Log sink. */
  private readonly logger;
  /** Timing constants. */
  private readonly timings;
  /** The current access token. */
  private currentAccessToken;
  /** The current refresh token (rotated by Keycloak, kept when a response carries none). */
  private currentRefreshToken;
  /** Monotonic second at which the access token lapses. */
  private expiresAt;
  /** Monotonic second after which auto-refresh stops, or `null`. */
  private loginDeadline;
  /** Consecutive failed refreshes; shared by the lazy path and the background refresher. */
  private failures;
  /** No refresh request is sent before this monotonic second (0 = no backoff running). */
  private nextAttemptAt;
  /** The refresh attempt in flight, shared by every caller. */
  private inFlight;
  /** The armed background timer handle. */
  private timer;
  /** Whether a background timer is armed. */
  private timerArmed;
  /** Whether the background refresher has ended. */
  private backgroundStopped;
  /** Whether {@link stop} ran. */
  private stopCalled;
  /**
   * @param options the session options.
   */
  private constructor();
  /**
   * Acquire the first token and start the background refresher.
   *
   * @param options the session options.
   * @returns the started session.
   * @throws KeycloakAuthenticationError when the initial acquisition fails (nothing is retried and
   *   no refresher is started).
   */
  static create(options: KeycloakTokenSessionOptions): Promise<KeycloakTokenSession>;
  /** @returns the current access token as stored, without any refresh decision. */
  get accessToken(): string;
  /** @returns the monotonic second at which the current access token lapses. */
  get accessTokenExpiresAt(): number;
  /** @returns the monotonic second after which auto-refresh stops, or `null`. */
  get autoRefreshDeadline(): number | null;
  /** @returns how many refreshes have failed in a row. */
  get consecutiveFailures(): number;
  /** @returns the monotonic second before which no refresh request is sent (0 = none pending). */
  get nextRefreshAttemptAt(): number;
  /** @returns whether the background refresher is still running. */
  get backgroundRefreshActive(): boolean;
  /** @returns whether {@link stop} was called. */
  get closed(): boolean;
  /**
   * The access token if it may be served WITHOUT a refresh decision that could send a request:
   * comfortably valid, or past the auto-refresh deadline. Lets an interceptor stay synchronous.
   *
   * @returns the token, or `null` when the caller must go through {@link getAccessToken}.
   */
  peekAccessToken(): string | null;
  /**
   * The access token to send right now, refreshing first when it is inside the leeway.
   *
   * @param options `force`: refresh even when the token still looks comfortably valid.
   * @returns the access token.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  getAccessToken(options?: KeycloakAccessTokenOptions): Promise<string>;
  /**
   * The gRPC metadata entry to attach to an RPC.
   *
   * @returns `["authorization", "Bearer <token>"]`.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  authorizationMetadata(): Promise<[string, string]>;
  /**
   * Stop the background refresher, interrupting a pending wait (a backoff wait included) so no
   * further request is sent. Idempotent and safe from any state, also from inside a refresh. The lazy
   * path keeps working afterwards.
   */
  stop(): void;
  /** Alias of {@link stop}. */
  close(): void;
  /** @returns the configuration with every non-empty secret rendered as {@link REDACTED}. */
  toJSON(): Record<string, unknown>;
  /** @returns a redacted rendering of the configuration. */
  toString(): string;
  /** P1-P4: one refresh grant with a handed-off token, else one password grant; then the deadline. */
  private acquireInitialToken;
  /**
   * The refresh decision shared by the lazy path and the background refresher (R1-R6). Concurrent
   * callers share one in-flight attempt.
   *
   * @param force skip the "comfortably valid" short-cut.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  private refreshIfWithinWindow;
  /**
   * Count a failed refresh, arm the backoff from NOW (the moment it is recorded) and warn once.
   *
   * @param error the failure.
   */
  private recordFailure;
  /** Reset the backoff after a successful refresh, with one INFO line if it had been failing. */
  private recordSuccess;
  /** Arm the next background refresh per the loop of every ONDEWO SDK. */
  private scheduleNextBackgroundRefresh;
  /** Disarm the background timer, if armed. */
  private disarmTimer;
  /** One password (ROPC) grant: exactly the five fields of every ONDEWO SDK. */
  private passwordGrant;
  /** One refresh grant: exactly the three fields of every ONDEWO SDK. Never a password. */
  private refreshGrant;
  /**
   * POST one form and return the JSON object it answered with (E1-E4).
   *
   * @param form the form fields.
   * @param action `login` or `refresh`, for the error messages.
   * @returns the parsed JSON object.
   * @throws KeycloakAuthenticationError on every failure; a non-transport error of the transport
   *   itself is passed through for the caller to wrap.
   */
  private postTokenRequest;
  /**
   * Validate a token response completely, then adopt it (S1-S4): a malformed response changes nothing.
   *
   * @param payload the parsed token response.
   * @throws KeycloakAuthenticationError on a missing access token or a non-numeric `expires_in`.
   */
  private storeTokens;
}
/** A counted hold on a shared {@link KeycloakTokenSession}. */
export interface KeycloakTokenSessionLease {
  /** The shared session. */
  readonly session: KeycloakTokenSession;
  /** Give the hold back; the last release stops the session. Idempotent. */
  release(): void;
}
/**
 * Hold the ONE session of a credential set, starting it when none is live: every caller with the
 * same credentials and scope shares one login and one refresher. Concurrent first callers share one
 * start-up; a failed start-up is not cached; a stopped session is never handed out again.
 *
 * @param options the session options.
 * @param scope what the session is shared within (default: the transport), e.g. one Angular
 *   `HttpClient`, so a session never sends through another application's HTTP stack.
 * @returns a lease on the session; release it when done.
 * @throws KeycloakAuthenticationError when the start-up fails.
 */
export declare function acquireKeycloakTokenSession(options: KeycloakTokenSessionOptions, scope?: object): Promise<KeycloakTokenSessionLease>;
/** Options accepted by {@link KeycloakTokenProvider.ensureFreshToken}. */
export interface EnsureFreshTokenOptions {
  /**
   * Renew even when the cached access token still looks valid.
   *
   * Set this after the server has rejected a request with `UNAUTHENTICATED`: the
   * token may have been revoked, or the local clock may be ahead of Keycloak's,
   * in which case the cached expiry cannot be trusted. A running failure backoff
   * still applies, so a forced renewal never hammers an unavailable Keycloak.
   */
  force?: boolean;
}
/**
 * Runtime configuration for {@link KeycloakTokenProvider}.
 *
 * Authentication is performed against the *public* SDK Keycloak client (no
 * `client_secret` is ever sent). Supply **either** a long-lived offline
 * refresh token (`refreshToken`) **or** a username + password pair for a
 * one-time Resource-Owner-Password-Credentials (ROPC) login — the technical
 * user must be 2FA-exempt for the ROPC grant to succeed.
 *
 * `keycloakUrl`, `realm` and `clientId` are all-or-nothing: all three empty
 * means "no Keycloak" (no login, no `authorization` metadata); setting only
 * some of them is rejected.
 */
export interface KeycloakTokenProviderConfig {
  /** Base Keycloak URL, e.g. `https://auth.example.com/auth` (trailing slash tolerated). */
  keycloakUrl: string;
  /** Realm name, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /** Public SDK client id, e.g. `ondewo-nlu-cai-sdk-public` (no `client_secret`). */
  clientId: string;
  /**
   * Deprecated alias of {@link refreshToken}, used only when `refreshToken` is empty.
   *
   * @deprecated use `refreshToken`.
   */
  offlineToken?: string;
  /** Technical-user email / username for the ROPC grant (not needed with a refresh token). */
  username?: string;
  /** Technical-user password for the ROPC grant. Never sent when a refresh token is configured. */
  password?: string;
  /**
   * Optional cap (seconds) on how long the auto-refresh runs after the
   * first login. Once it elapses no refresh is sent any more and the access
   * token is allowed to lapse. Omit to keep refreshing until the offline
   * session itself expires.
   */
  tokenExpirationInS?: number;
  /**
   * Whether to verify the Keycloak server's TLS certificate on the
   * token-endpoint call. Defaults to `true` (secure).
   *
   * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
   * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
   * handshake is owned by the user agent — there is no `https.Agent`, undici
   * dispatcher, or `rejectUnauthorized` hook that app code can reach. The value
   * is accepted for cross-SDK config parity (it is part of the shared-login key)
   * but has no effect on the outgoing request here. For a self-signed
   * Keycloak/Envoy endpoint, trust the certificate at the browser/OS level.
   */
  keycloakVerifySsl?: boolean;
  /**
   * Optional [0,1] random source for the failure-backoff jitter; defaults to
   * `Math.random`. Tests inject a constant to make the retry delay exact.
   */
  randomFraction?: () => number;
  /**
   * Optional log sink for the refresh WARNING / recovery INFO lines; defaults to
   * the console. No credential ever reaches it.
   */
  logger?: KeycloakLogger;
  /**
   * A handed-off Keycloak OFFLINE refresh token. When set, start-up is ONE
   * `refresh_token` grant with it and no password grant is ever sent, not even
   * as a fallback when the token is refused. Takes precedence over
   * `username` / `password`.
   */
  refreshToken?: string;
}
/**
 * DI token under which the consuming application supplies the
 * {@link KeycloakTokenProviderConfig} for {@link KeycloakTokenProvider}.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com/auth",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-nlu-cai-sdk-public",
 *       refreshToken: "<offline token>", // or: username + password
 *     } satisfies KeycloakTokenProviderConfig,
 *   },
 *   provideOndewoT2sAuth(KeycloakTokenProvider),
 * ]
 * ```
 */
export declare const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig>;
/**
 * Concrete, ready-to-use {@link TokenProvider} that logs in once against the
 * public Keycloak SDK client and keeps the access token fresh, behaving exactly
 * like the token provider of every other ONDEWO SDK (see {@link KeycloakTokenSession}):
 *
 * 1. **Start-up once** — ONE `refresh_token` grant with a configured
 *    `refreshToken`, or else ONE `grant_type=password` login with
 *    `scope=offline_access`. A refused refresh token is never answered with a
 *    password login.
 * 2. **Refresh ahead of expiry** — a background timer refreshes
 *    {@link REFRESH_SKEW_IN_S} before the token lapses; a failed refresh is
 *    retried with a jittered backoff (5 s doubling to 300 s) and never ends the
 *    loop. The optional `tokenExpirationInS` bounds it.
 * 3. **Serve the current token** — {@link getToken} answers synchronously while
 *    the token is comfortably valid; inside the leeway it returns a promise that
 *    runs one shared refresh, and keeps serving the still-valid token while that
 *    refresh fails. Only an expired token that cannot be refreshed rejects, with
 *    a {@link KeycloakAuthenticationError}.
 *
 * Providers with the same credentials on the same `HttpClient` share one login.
 *
 * Register it through `provideOndewoT2sAuth` after supplying a
 * {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}. The first login is kicked off on
 * construction; call {@link whenReady} to await it explicitly (e.g. in an
 * `APP_INITIALIZER`).
 */
export declare class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Angular HTTP client used for the token-endpoint calls (and the scope of the shared login). */
  private readonly http;
  /**
   * The resolved runtime configuration, or `null` until {@link configure} supplies
   * one. Injected optionally so an application that only learns its credentials at
   * runtime (e.g. an embedded widget reading them from its URL) can register the
   * provider at bootstrap and configure it later.
   */
  private config;
  /**
   * Whether TLS-certificate verification is requested for the token-endpoint
   * call. Defaults to `true`. A NO-OP in this browser client (the browser owns the
   * TLS handshake). See {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
   */
  private verifySsl;
  /** The started session, or `null` before the first login / without Keycloak. */
  private session;
  /** This provider's hold on the shared session, released on destroy / re-configure. */
  private lease;
  /** The start-up in flight, or `null`. */
  private starting;
  /** Bumped by every start-up, so a superseded start-up drops its session. */
  private generation;
  /** Whether {@link ngOnDestroy} has run. */
  private destroyed;
  /**
   * Promise settled by the *first* login attempt — the one started by the constructor when a
   * config was injected, otherwise the one started by the first {@link configure} call. It
   * resolves when that login succeeds and rejects when it fails; later attempts leave it as-is
   * (a settled promise cannot be re-settled), so callers tracking a re-{@link configure} must
   * await the promise `configure()` returns rather than {@link whenReady}.
   */
  private readonly ready;
  /** Settles {@link ready} on the first successful login. */
  private resolveReady;
  /** Settles {@link ready} when the first login fails. */
  private rejectReady;
  /**
   * The token-endpoint exchange over Angular's `HttpClient`: the raw body is kept as text so the
   * session can judge the status and parse the JSON itself; a status-0 answer, a timeout or any
   * other failure to get an answer becomes a {@link KeycloakTransportError}.
   *
   * @param request the token request.
   * @returns the HTTP answer.
   */
  private readonly transport;
  /**
   * Build the provider and kick off the first login in the background.
   *
   * No network call is awaited here; {@link getToken} returns `null` until the
   * login resolves. Await {@link whenReady} to block until the first token is
   * available.
   */
  constructor();
  /**
   * Supply (or replace) the runtime configuration and log in with it.
   *
   * This is the entry point for credentials that are only known after the
   * application has bootstrapped — an embedded widget that reads a technical
   * user and secret from its own URL, for example. The previous login is
   * released (and stopped when nothing else shares it) before the new one runs,
   * so a provider can be re-pointed at a different technical user without being
   * re-created.
   *
   * When this is the provider's first login attempt it also settles {@link whenReady}; a later
   * re-configure does not, so track those through the promise returned here.
   *
   * @param config the configuration to adopt, replacing any earlier one.
   * @returns a promise that resolves once the login with `config` has completed.
   * @throws KeycloakAuthenticationError when the configuration is invalid or the
   *   login fails (the provider is left unauthenticated; {@link getToken} returns `null`).
   */
  configure(config: KeycloakTokenProviderConfig): Promise<void>;
  /**
   * Return an access token that is safe to send right now, refreshing first when
   * the cached one is within {@link REFRESH_SKEW_IN_S} of lapsing.
   *
   * Concurrent calls share a single refresh, so a burst of requests arriving on
   * an expiring token issues one grant rather than one per request. When the
   * provider holds no session yet (the first login failed), the start-up is run
   * again — with the refresh token when one is configured.
   *
   * @param options renewal options; `force` renews even when the cached token
   *   still looks valid.
   * @returns the usable access token, or `null` when the provider has no
   *   Keycloak config (nothing to renew with).
   * @throws KeycloakAuthenticationError when the token has expired and cannot be
   *   refreshed, or the repeated start-up fails.
   */
  ensureFreshToken(options?: EnsureFreshTokenOptions): Promise<string | null>;
  /**
   * Return the current access token for the auth interceptors.
   *
   * @returns the access token synchronously while it is comfortably valid; a
   *   promise running the shared refresh when it is inside the leeway (rejecting
   *   with a {@link KeycloakAuthenticationError} only when the token has expired
   *   and cannot be refreshed); while the first login is still in flight, a
   *   promise that waits for it and yields its token (`null` when it fails), so
   *   a request issued right after bootstrap is not sent unauthenticated; `null`
   *   without a Keycloak config or after a failed first login.
   */
  getToken(): TokenResult;
  /**
   * The resolved TLS-verification setting from
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
   * A NO-OP in this browser client.
   *
   * @returns `true` when TLS verification is requested (the default), `false`
   *   when the config explicitly opted out (still inert here).
   */
  get keycloakVerifySsl(): boolean;
  /**
   * Await the first login so callers can guarantee a token is present before
   * issuing requests (e.g. from an `APP_INITIALIZER`).
   *
   * @returns a promise that resolves once the first access token is stored, or
   *   rejects with the {@link KeycloakAuthenticationError} from a failed login.
   */
  whenReady(): Promise<void>;
  /**
   * Release this provider's hold on the shared login; the background refresh stops once nothing
   * else shares it. Invoked automatically when the root injector is destroyed. The token stays
   * readable (and is still refreshed on demand) afterwards.
   */
  ngOnDestroy(): void;
  /** @returns the configuration with every non-empty secret rendered as `***REDACTED***`. */
  toJSON(): Record<string, unknown>;
  /** @returns a redacted rendering of the configuration. */
  toString(): string;
  /** Give the shared session back, if held. */
  private releaseLease;
  /**
   * Adopt `config`, drop the previous session and start (or join) the session of `config`.
   *
   * @param config the configuration to adopt.
   * @returns a promise that resolves once the session is started (immediately without Keycloak).
   */
  private start;
  /**
   * Validate `config` and hold the shared session of its credentials.
   *
   * @param config the configuration.
   * @param generation the start-up generation this call belongs to.
   * @returns a promise that resolves once the session is held (or no Keycloak is configured).
   */
  private startSession;
  static ɵfac: i0.ɵɵFactoryDeclaration<KeycloakTokenProvider, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * The HTTP / gRPC header under which the bearer credential is attached.
 *
 * Canonical `Authorization` casing: gRPC-web and HTTP header names are
 * case-insensitive, so this interoperates with any server, while the HTTP/2
 * transport still lower-cases header names on the wire regardless.
 */
export declare const AUTHORIZATION_HEADER: string;
/** The credential scheme prefix prepended to the raw access token. */
export declare const BEARER_PREFIX: string;
/**
 * Normalize the value returned by a `TokenProvider.getToken()` call — which may
 * be a `string`, `null`, a `Promise` or an `Observable` — into a single
 * `Observable<string | null>` that emits exactly once.
 *
 * A non-empty token is returned trimmed; `null`, `undefined`, an empty string
 * and a whitespace-only string are all collapsed to `null` so callers have a
 * single "no usable token" signal and never build an empty `Bearer` header.
 *
 * @param result the raw value returned by `TokenProvider.getToken()`.
 * @returns an observable emitting the usable token, or `null` when absent.
 */
export declare function resolveToken(result: TokenResult): Observable<string | null>;
/**
 * Build the `Authorization` header value for a resolved token, or `null` when
 * the token is absent.
 *
 * @param token a usable token, or `null`.
 * @returns the `"Bearer <token>"` string, or `null` when there is no token.
 */
export declare function buildBearerValue(token: string | null): string | null;
/**
 * Convenience wrapper: emit the ready-to-use `Authorization` header value, or
 * `null` when no token is available.
 *
 * @param result the raw value returned by `TokenProvider.getToken()`.
 * @returns an observable emitting the bearer header value, or `null`.
 */
export declare function resolveBearerValue(result: TokenResult): Observable<string | null>;
/**
 * Functional Angular `HttpInterceptor` that attaches the current Keycloak access
 * token as an `Authorization: Bearer <token>` header to outgoing HTTP requests.
 *
 * Behaviour:
 * - token present  → a cloned request carrying the bearer header is forwarded.
 * - token absent / empty → the original request is forwarded untouched (no empty
 *   `Bearer` header is ever sent).
 * - token source is async (Promise/Observable) → resolved before the request is
 *   sent.
 * - an existing `Authorization` header on the request is left untouched, so a
 *   caller that already set credentials explicitly wins.
 *
 * Register it in the application's HTTP pipeline:
 *
 * ```ts
 * provideHttpClient(withInterceptors([authHttpInterceptor]))
 * ```
 *
 * Errors raised by the `TokenProvider` propagate to the caller (the request is
 * not sent) so an authentication failure surfaces rather than silently issuing
 * an unauthenticated request.
 *
 * @param req the outgoing HTTP request.
 * @param next the next handler in the interceptor chain.
 * @returns the stream of HTTP events for the (possibly authorized) request.
 */
export declare function authHttpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>;
/**
 * `@ngx-grpc` interceptor that attaches the current Keycloak access token as an
 * `authorization: Bearer <token>` entry on the gRPC-web request metadata. This
 * is the gRPC-web counterpart of {@link authHttpInterceptor} and matches the
 * `@ngx-grpc` client style used by every generated `*.pbsc.ts` service client in
 * this library.
 *
 * Behaviour mirrors the HTTP interceptor:
 * - token present → the bearer credential is set on `requestMetadata`.
 * - token absent / empty → the request metadata is left untouched (no empty
 *   `Bearer` value is ever attached).
 * - token source is async (Promise/Observable) → resolved before the request is
 *   handed to the next handler.
 * - an `authorization` entry already present on the request metadata is left
 *   untouched, so an explicitly-set credential wins.
 *
 * Register it via the standard `@ngx-grpc` multi-provider:
 *
 * ```ts
 * providers: [
 *   { provide: GRPC_INTERCEPTORS, useClass: AuthGrpcInterceptor, multi: true },
 * ]
 * ```
 */
export declare class AuthGrpcInterceptor implements GrpcInterceptor {
  private readonly tokenProvider;
  /**
   * @param tokenProvider the application-supplied {@link TokenProvider},
   *   resolved through the {@link TOKEN_PROVIDER} DI token.
   */
  constructor(tokenProvider: TokenProvider);
  /**
   * Attach the bearer credential (when available) to the request metadata, then
   * delegate to the next handler in the chain.
   *
   * @param request the intercepted gRPC request.
   * @param next the next handler to pass the request through.
   * @returns the stream of gRPC events for the (possibly authorized) request.
   */
  intercept<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>, next: GrpcHandler): Observable<GrpcEvent<S>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<AuthGrpcInterceptor, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * Wire a consuming application's {@link TokenProvider} implementation into this
 * library and register the `@ngx-grpc` {@link AuthGrpcInterceptor} that uses it.
 *
 * This covers the gRPC-web side. For HTTP requests, additionally register the
 * functional `authHttpInterceptor`:
 *
 * ```ts
 * provideHttpClient(withInterceptors([authHttpInterceptor]))
 * ```
 *
 * Usage in an application's `providers` (standalone bootstrap or `AppModule`):
 *
 * ```ts
 * import { provideOndewoT2sAuth } from "@ondewo/t2s-client-angular";
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideOndewoT2sAuth(KeycloakTokenProvider),
 *     provideHttpClient(withInterceptors([authHttpInterceptor])),
 *   ],
 * });
 * ```
 *
 * @param tokenProvider the application's `TokenProvider` class (e.g. one that
 *   wraps `keycloak-js` / `keycloak-angular`).
 * @returns environment providers binding the token provider and the gRPC
 *   interceptor.
 */
export declare function provideOndewoT2sAuth(tokenProvider: Type<TokenProvider>): EnvironmentProviders;
/**
 * Builds the gRPC-web endpoint URL (`host` setting of `@ngx-grpc/grpc-web-client`) from the
 * same `host` / `port` / `useSecureChannel` fields every ONDEWO SDK takes.
 *
 * In a browser the TLS handshake belongs to the user agent: it verifies the server against
 * its own (OS / browser) trust store and presents a client certificate only from the
 * browser's certificate store. Application code can neither add a CA nor attach a client
 * identity, and a private key must never be shipped to a browser. The certificate fields the
 * other SDKs accept (`grpcCert`, `grpcClientCert`, `grpcClientKey`) are therefore refused
 * here instead of being silently dropped.
 */
/** Connection settings for a gRPC-web endpoint (an Envoy / gRPC-web proxy in front of the ONDEWO server). */
export interface GrpcWebEndpointConfig {
  /**
   * Host name or IP address (`nlu.example.com`, `10.0.0.5`, `::1`, `[::1]`), or a complete base
   * URL with scheme (`https://nlu.example.com:8443/grpc`), which is then used as given.
   */
  host: string;
  /** Port; omit it for the scheme's default port. Must be omitted when `host` is a URL. */
  port?: number | string;
  /** `true` (default): `https://`. `false`: plain `http://`, logged as a warning -- never in production. */
  useSecureChannel?: boolean;
}
/**
 * Certificate / key fields of the other ONDEWO SDKs' configs (camelCase and snake_case) that a
 * browser cannot use. A non-empty value in any of them makes {@link buildGrpcWebHost} throw.
 */
export declare const BROWSER_UNSUPPORTED_TLS_FIELDS: readonly string[];
/** Raised for an unusable {@link GrpcWebEndpointConfig}. The message names fields, never their values. */
export declare class GrpcWebEndpointError extends Error {
  /**
   * @param message a description of the problem that names the offending field.
   */
  constructor(message: string);
}
/**
 * Return the gRPC-web base URL for `config`: `https://host:port` by default, `http://host:port`
 * when `useSecureChannel` is `false` (with a warning naming `host:port`). A bare IPv6 literal is
 * bracketed (`https://[::1]:8443`); a bracketed host or a host that already carries a scheme is
 * left alone.
 *
 * ```ts
 * GrpcWebClientModule.forRoot({ settings: { host: buildGrpcWebHost({ host: "nlu.example.com", port: 443 }) } })
 * ```
 *
 * @param config the endpoint settings.
 * @returns the base URL to pass as the gRPC-web client's `host` setting.
 * @throws GrpcWebEndpointError when a certificate / key field is set, the host is empty or
 *   carries a port, the port is invalid, or an `http://` URL is combined with
 *   `useSecureChannel: true`.
 */
export declare function buildGrpcWebHost(config: GrpcWebEndpointConfig): string;
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export enum Pcm {
  PCM_16 = 0,
  PCM_24 = 1,
  PCM_32 = 2,
  PCM_S8 = 3,
  PCM_U8 = 4,
  FLOAT = 5,
  DOUBLE = 6
}
export enum AudioFormat {
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
export class SynthesizeRequest implements GrpcMessage {
  static id = 'ondewo.t2s.SynthesizeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SynthesizeRequest();
    SynthesizeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SynthesizeRequest) {
    _instance.text = _instance.text || '';
    _instance.config = _instance.config || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SynthesizeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.text = _reader.readString();
          break;
        case 2:
          _instance.config = new RequestConfig();
          _reader.readMessage(
            _instance.config,
            RequestConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SynthesizeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SynthesizeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.text) {
      _writer.writeString(1, _instance.text);
    }
    if (_instance.config) {
      _writer.writeMessage(
        2,
        _instance.config as any,
        RequestConfig.serializeBinaryToWriter
      );
    }
  }

  private _text: string;
  private _config?: RequestConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SynthesizeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SynthesizeRequest.AsObject>) {
    _value = _value || {};
    this.text = _value.text;
    this.config = _value.config ? new RequestConfig(_value.config) : undefined;
    SynthesizeRequest.refineValues(this);
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get config(): RequestConfig | undefined {
    return this._config;
  }
  set config(value: RequestConfig | undefined) {
    this._config = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SynthesizeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SynthesizeRequest.AsObject {
    return {
      text: this.text,
      config: this.config ? this.config.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SynthesizeRequest.AsProtobufJSON {
    return {
      text: this.text,
      config: this.config ? this.config.toProtobufJSON(options) : null
    };
  }
}
export module SynthesizeRequest {
  /**
   * Standard JavaScript object representation for SynthesizeRequest
   */
  export interface AsObject {
    text: string;
    config?: RequestConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for SynthesizeRequest
   */
  export interface AsProtobufJSON {
    text: string;
    config: RequestConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.t2s.BatchSynthesizeRequest
 */
export class BatchSynthesizeRequest implements GrpcMessage {
  static id = 'ondewo.t2s.BatchSynthesizeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchSynthesizeRequest();
    BatchSynthesizeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchSynthesizeRequest) {
    _instance.batchRequest = _instance.batchRequest || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchSynthesizeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new SynthesizeRequest();
          _reader.readMessage(
            messageInitializer1,
            SynthesizeRequest.deserializeBinaryFromReader
          );
          (_instance.batchRequest = _instance.batchRequest || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchSynthesizeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchSynthesizeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.batchRequest && _instance.batchRequest.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.batchRequest as any,
        SynthesizeRequest.serializeBinaryToWriter
      );
    }
  }

  private _batchRequest?: SynthesizeRequest[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchSynthesizeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchSynthesizeRequest.AsObject>) {
    _value = _value || {};
    this.batchRequest = (_value.batchRequest || []).map(
      m => new SynthesizeRequest(m)
    );
    BatchSynthesizeRequest.refineValues(this);
  }
  get batchRequest(): SynthesizeRequest[] | undefined {
    return this._batchRequest;
  }
  set batchRequest(value: SynthesizeRequest[] | undefined) {
    this._batchRequest = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchSynthesizeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchSynthesizeRequest.AsObject {
    return {
      batchRequest: (this.batchRequest || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchSynthesizeRequest.AsProtobufJSON {
    return {
      batchRequest: (this.batchRequest || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module BatchSynthesizeRequest {
  /**
   * Standard JavaScript object representation for BatchSynthesizeRequest
   */
  export interface AsObject {
    batchRequest?: SynthesizeRequest.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchSynthesizeRequest
   */
  export interface AsProtobufJSON {
    batchRequest: SynthesizeRequest.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.t2s.StreamingSynthesizeRequest
 */
export class StreamingSynthesizeRequest implements GrpcMessage {
  static id = 'ondewo.t2s.StreamingSynthesizeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamingSynthesizeRequest();
    StreamingSynthesizeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingSynthesizeRequest) {
    _instance.text = _instance.text || '';
    _instance.config = _instance.config || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamingSynthesizeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.text = _reader.readString();
          break;
        case 2:
          _instance.config = new RequestConfig();
          _reader.readMessage(
            _instance.config,
            RequestConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StreamingSynthesizeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamingSynthesizeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.text) {
      _writer.writeString(1, _instance.text);
    }
    if (_instance.config) {
      _writer.writeMessage(
        2,
        _instance.config as any,
        RequestConfig.serializeBinaryToWriter
      );
    }
  }

  private _text: string;
  private _config?: RequestConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingSynthesizeRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamingSynthesizeRequest.AsObject>) {
    _value = _value || {};
    this.text = _value.text;
    this.config = _value.config ? new RequestConfig(_value.config) : undefined;
    StreamingSynthesizeRequest.refineValues(this);
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get config(): RequestConfig | undefined {
    return this._config;
  }
  set config(value: RequestConfig | undefined) {
    this._config = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamingSynthesizeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingSynthesizeRequest.AsObject {
    return {
      text: this.text,
      config: this.config ? this.config.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StreamingSynthesizeRequest.AsProtobufJSON {
    return {
      text: this.text,
      config: this.config ? this.config.toProtobufJSON(options) : null
    };
  }
}
export module StreamingSynthesizeRequest {
  /**
   * Standard JavaScript object representation for StreamingSynthesizeRequest
   */
  export interface AsObject {
    text: string;
    config?: RequestConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for StreamingSynthesizeRequest
   */
  export interface AsProtobufJSON {
    text: string;
    config: RequestConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.t2s.BatchSynthesizeResponse
 */
export class BatchSynthesizeResponse implements GrpcMessage {
  static id = 'ondewo.t2s.BatchSynthesizeResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BatchSynthesizeResponse();
    BatchSynthesizeResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BatchSynthesizeResponse) {
    _instance.batchResponse = _instance.batchResponse || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BatchSynthesizeResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new SynthesizeResponse();
          _reader.readMessage(
            messageInitializer1,
            SynthesizeResponse.deserializeBinaryFromReader
          );
          (_instance.batchResponse = _instance.batchResponse || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    BatchSynthesizeResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BatchSynthesizeResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.batchResponse && _instance.batchResponse.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.batchResponse as any,
        SynthesizeResponse.serializeBinaryToWriter
      );
    }
  }

  private _batchResponse?: SynthesizeResponse[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BatchSynthesizeResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<BatchSynthesizeResponse.AsObject>) {
    _value = _value || {};
    this.batchResponse = (_value.batchResponse || []).map(
      m => new SynthesizeResponse(m)
    );
    BatchSynthesizeResponse.refineValues(this);
  }
  get batchResponse(): SynthesizeResponse[] | undefined {
    return this._batchResponse;
  }
  set batchResponse(value: SynthesizeResponse[] | undefined) {
    this._batchResponse = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BatchSynthesizeResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BatchSynthesizeResponse.AsObject {
    return {
      batchResponse: (this.batchResponse || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): BatchSynthesizeResponse.AsProtobufJSON {
    return {
      batchResponse: (this.batchResponse || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module BatchSynthesizeResponse {
  /**
   * Standard JavaScript object representation for BatchSynthesizeResponse
   */
  export interface AsObject {
    batchResponse?: SynthesizeResponse.AsObject[];
  }

  /**
   * Protobuf JSON representation for BatchSynthesizeResponse
   */
  export interface AsProtobufJSON {
    batchResponse: SynthesizeResponse.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.t2s.RequestConfig
 */
export class RequestConfig implements GrpcMessage {
  static id = 'ondewo.t2s.RequestConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RequestConfig();
    RequestConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RequestConfig) {
    _instance.t2sPipelineId = _instance.t2sPipelineId || '';

    _instance.t2sServiceConfig = _instance.t2sServiceConfig || undefined;
    _instance.t2sCloudProviderConfig =
      _instance.t2sCloudProviderConfig || undefined;

    _instance.wordToPhonemeMapping =
      _instance.wordToPhonemeMapping || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RequestConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.t2sPipelineId = _reader.readString();
          break;
        case 2:
          _instance.lengthScale = _reader.readFloat();
          break;
        case 3:
          _instance.noiseScale = _reader.readFloat();
          break;
        case 4:
          _instance.sampleRate = _reader.readInt32();
          break;
        case 5:
          _instance.pcm = _reader.readEnum();
          break;
        case 6:
          _instance.audioFormat = _reader.readEnum();
          break;
        case 7:
          _instance.useCache = _reader.readBool();
          break;
        case 9:
          _instance.t2sServiceConfig = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.t2sServiceConfig,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.t2sCloudProviderConfig = new T2sCloudProviderConfig();
          _reader.readMessage(
            _instance.t2sCloudProviderConfig,
            T2sCloudProviderConfig.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.t2sNormalization = new T2SNormalization();
          _reader.readMessage(
            _instance.t2sNormalization,
            T2SNormalization.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.wordToPhonemeMapping = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.wordToPhonemeMapping,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RequestConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RequestConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.t2sPipelineId) {
      _writer.writeString(1, _instance.t2sPipelineId);
    }
    if (_instance.lengthScale || _instance.lengthScale === 0) {
      _writer.writeFloat(2, _instance.lengthScale);
    }
    if (_instance.noiseScale || _instance.noiseScale === 0) {
      _writer.writeFloat(3, _instance.noiseScale);
    }
    if (_instance.sampleRate || _instance.sampleRate === 0) {
      _writer.writeInt32(4, _instance.sampleRate);
    }
    if (_instance.pcm || _instance.pcm === 0) {
      _writer.writeEnum(5, _instance.pcm);
    }
    if (_instance.audioFormat || _instance.audioFormat === 0) {
      _writer.writeEnum(6, _instance.audioFormat);
    }
    if (_instance.useCache || _instance.useCache === false) {
      _writer.writeBool(7, _instance.useCache);
    }
    if (_instance.t2sServiceConfig) {
      _writer.writeMessage(
        9,
        _instance.t2sServiceConfig as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.t2sCloudProviderConfig) {
      _writer.writeMessage(
        10,
        _instance.t2sCloudProviderConfig as any,
        T2sCloudProviderConfig.serializeBinaryToWriter
      );
    }
    if (_instance.t2sNormalization) {
      _writer.writeMessage(
        11,
        _instance.t2sNormalization as any,
        T2SNormalization.serializeBinaryToWriter
      );
    }
    if (_instance.wordToPhonemeMapping) {
      _writer.writeMessage(
        12,
        _instance.wordToPhonemeMapping as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _t2sPipelineId: string;
  private _lengthScale: number;
  private _noiseScale: number;
  private _sampleRate: number;
  private _pcm: Pcm;
  private _audioFormat: AudioFormat;
  private _useCache: boolean;
  private _t2sServiceConfig?: googleProtobuf001.Struct;
  private _t2sCloudProviderConfig?: T2sCloudProviderConfig;
  private _t2sNormalization?: T2SNormalization;
  private _wordToPhonemeMapping?: googleProtobuf001.Struct;

  private _oneofLengthScale: RequestConfig.OneofLengthScaleCase =
    RequestConfig.OneofLengthScaleCase.none;
  private _oneofNoiseScale: RequestConfig.OneofNoiseScaleCase =
    RequestConfig.OneofNoiseScaleCase.none;
  private _oneofSampleRate: RequestConfig.OneofSampleRateCase =
    RequestConfig.OneofSampleRateCase.none;
  private _oneofPcm: RequestConfig.OneofPcmCase =
    RequestConfig.OneofPcmCase.none;
  private _oneofAudioFormat: RequestConfig.OneofAudioFormatCase =
    RequestConfig.OneofAudioFormatCase.none;
  private _oneofUseCache: RequestConfig.OneofUseCacheCase =
    RequestConfig.OneofUseCacheCase.none;
  private _oneofT2sNormalization: RequestConfig.OneofT2sNormalizationCase =
    RequestConfig.OneofT2sNormalizationCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RequestConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RequestConfig.AsObject>) {
    _value = _value || {};
    this.t2sPipelineId = _value.t2sPipelineId;
    this.lengthScale = _value.lengthScale;
    this.noiseScale = _value.noiseScale;
    this.sampleRate = _value.sampleRate;
    this.pcm = _value.pcm;
    this.audioFormat = _value.audioFormat;
    this.useCache = _value.useCache;
    this.t2sServiceConfig = _value.t2sServiceConfig
      ? new googleProtobuf001.Struct(_value.t2sServiceConfig)
      : undefined;
    this.t2sCloudProviderConfig = _value.t2sCloudProviderConfig
      ? new T2sCloudProviderConfig(_value.t2sCloudProviderConfig)
      : undefined;
    this.t2sNormalization = _value.t2sNormalization
      ? new T2SNormalization(_value.t2sNormalization)
      : undefined;
    this.wordToPhonemeMapping = _value.wordToPhonemeMapping
      ? new googleProtobuf001.Struct(_value.wordToPhonemeMapping)
      : undefined;
    RequestConfig.refineValues(this);
  }
  get t2sPipelineId(): string {
    return this._t2sPipelineId;
  }
  set t2sPipelineId(value: string) {
    this._t2sPipelineId = value;
  }
  get lengthScale(): number {
    return this._lengthScale;
  }
  set lengthScale(value: number) {
    if (value !== undefined && value !== null) {
      this._oneofLengthScale = RequestConfig.OneofLengthScaleCase.lengthScale;
    }
    this._lengthScale = value;
  }
  get noiseScale(): number {
    return this._noiseScale;
  }
  set noiseScale(value: number) {
    if (value !== undefined && value !== null) {
      this._oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.noiseScale;
    }
    this._noiseScale = value;
  }
  get sampleRate(): number {
    return this._sampleRate;
  }
  set sampleRate(value: number) {
    if (value !== undefined && value !== null) {
      this._oneofSampleRate = RequestConfig.OneofSampleRateCase.sampleRate;
    }
    this._sampleRate = value;
  }
  get pcm(): Pcm {
    return this._pcm;
  }
  set pcm(value: Pcm) {
    if (value !== undefined && value !== null) {
      this._oneofPcm = RequestConfig.OneofPcmCase.pcm;
    }
    this._pcm = value;
  }
  get audioFormat(): AudioFormat {
    return this._audioFormat;
  }
  set audioFormat(value: AudioFormat) {
    if (value !== undefined && value !== null) {
      this._oneofAudioFormat = RequestConfig.OneofAudioFormatCase.audioFormat;
    }
    this._audioFormat = value;
  }
  get useCache(): boolean {
    return this._useCache;
  }
  set useCache(value: boolean) {
    if (value !== undefined && value !== null) {
      this._oneofUseCache = RequestConfig.OneofUseCacheCase.useCache;
    }
    this._useCache = value;
  }
  get t2sServiceConfig(): googleProtobuf001.Struct | undefined {
    return this._t2sServiceConfig;
  }
  set t2sServiceConfig(value: googleProtobuf001.Struct | undefined) {
    this._t2sServiceConfig = value;
  }
  get t2sCloudProviderConfig(): T2sCloudProviderConfig | undefined {
    return this._t2sCloudProviderConfig;
  }
  set t2sCloudProviderConfig(value: T2sCloudProviderConfig | undefined) {
    this._t2sCloudProviderConfig = value;
  }
  get t2sNormalization(): T2SNormalization | undefined {
    return this._t2sNormalization;
  }
  set t2sNormalization(value: T2SNormalization | undefined) {
    if (value !== undefined && value !== null) {
      this._oneofT2sNormalization =
        RequestConfig.OneofT2sNormalizationCase.t2sNormalization;
    }
    this._t2sNormalization = value;
  }
  get wordToPhonemeMapping(): googleProtobuf001.Struct | undefined {
    return this._wordToPhonemeMapping;
  }
  set wordToPhonemeMapping(value: googleProtobuf001.Struct | undefined) {
    this._wordToPhonemeMapping = value;
  }
  get oneofLengthScale() {
    return this._oneofLengthScale;
  }
  get oneofNoiseScale() {
    return this._oneofNoiseScale;
  }
  get oneofSampleRate() {
    return this._oneofSampleRate;
  }
  get oneofPcm() {
    return this._oneofPcm;
  }
  get oneofAudioFormat() {
    return this._oneofAudioFormat;
  }
  get oneofUseCache() {
    return this._oneofUseCache;
  }
  get oneofT2sNormalization() {
    return this._oneofT2sNormalization;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RequestConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RequestConfig.AsObject {
    return {
      t2sPipelineId: this.t2sPipelineId,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      sampleRate: this.sampleRate,
      pcm: this.pcm,
      audioFormat: this.audioFormat,
      useCache: this.useCache,
      t2sServiceConfig: this.t2sServiceConfig
        ? this.t2sServiceConfig.toObject()
        : undefined,
      t2sCloudProviderConfig: this.t2sCloudProviderConfig
        ? this.t2sCloudProviderConfig.toObject()
        : undefined,
      t2sNormalization: this.t2sNormalization
        ? this.t2sNormalization.toObject()
        : undefined,
      wordToPhonemeMapping: this.wordToPhonemeMapping
        ? this.wordToPhonemeMapping.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): RequestConfig.AsProtobufJSON {
    return {
      t2sPipelineId: this.t2sPipelineId,
      lengthScale:
        this.lengthScale === null || this.lengthScale === undefined
          ? null
          : this.lengthScale,
      noiseScale:
        this.noiseScale === null || this.noiseScale === undefined
          ? null
          : this.noiseScale,
      sampleRate:
        this.sampleRate === null || this.sampleRate === undefined
          ? null
          : this.sampleRate,
      pcm:
        this.pcm === undefined
          ? null
          : Pcm[this.pcm === null || this.pcm === undefined ? 0 : this.pcm],
      audioFormat:
        this.audioFormat === undefined
          ? null
          : AudioFormat[
              this.audioFormat === null || this.audioFormat === undefined
                ? 0
                : this.audioFormat
            ],
      useCache: this.useCache,
      t2sServiceConfig: this.t2sServiceConfig
        ? this.t2sServiceConfig.toProtobufJSON(options)
        : null,
      t2sCloudProviderConfig: this.t2sCloudProviderConfig
        ? this.t2sCloudProviderConfig.toProtobufJSON(options)
        : null,
      t2sNormalization: this.t2sNormalization
        ? this.t2sNormalization.toProtobufJSON(options)
        : null,
      wordToPhonemeMapping: this.wordToPhonemeMapping
        ? this.wordToPhonemeMapping.toProtobufJSON(options)
        : null
    };
  }
}
export module RequestConfig {
  /**
   * Standard JavaScript object representation for RequestConfig
   */
  export interface AsObject {
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
  }

  /**
   * Protobuf JSON representation for RequestConfig
   */
  export interface AsProtobufJSON {
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
  }
  export enum OneofLengthScaleCase {
    none = 0,
    lengthScale = 1
  }
  export enum OneofNoiseScaleCase {
    none = 0,
    noiseScale = 1
  }
  export enum OneofSampleRateCase {
    none = 0,
    sampleRate = 1
  }
  export enum OneofPcmCase {
    none = 0,
    pcm = 1
  }
  export enum OneofAudioFormatCase {
    none = 0,
    audioFormat = 1
  }
  export enum OneofUseCacheCase {
    none = 0,
    useCache = 1
  }
  export enum OneofT2sNormalizationCase {
    none = 0,
    t2sNormalization = 1
  }
}

/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfig
 */
export class T2sCloudProviderConfig implements GrpcMessage {
  static id = 'ondewo.t2s.T2sCloudProviderConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sCloudProviderConfig();
    T2sCloudProviderConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sCloudProviderConfig) {
    _instance.t2sCloudProviderConfigElevenlabs =
      _instance.t2sCloudProviderConfigElevenlabs || undefined;
    _instance.t2sCloudProviderConfigGoogle =
      _instance.t2sCloudProviderConfigGoogle || undefined;
    _instance.t2sCloudProviderConfigMicrosoft =
      _instance.t2sCloudProviderConfigMicrosoft || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sCloudProviderConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.t2sCloudProviderConfigElevenlabs = new T2sCloudProviderConfigElevenLabs();
          _reader.readMessage(
            _instance.t2sCloudProviderConfigElevenlabs,
            T2sCloudProviderConfigElevenLabs.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.t2sCloudProviderConfigGoogle = new T2sCloudProviderConfigGoogle();
          _reader.readMessage(
            _instance.t2sCloudProviderConfigGoogle,
            T2sCloudProviderConfigGoogle.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.t2sCloudProviderConfigMicrosoft = new T2sCloudProviderConfigMicrosoft();
          _reader.readMessage(
            _instance.t2sCloudProviderConfigMicrosoft,
            T2sCloudProviderConfigMicrosoft.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    T2sCloudProviderConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sCloudProviderConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.t2sCloudProviderConfigElevenlabs) {
      _writer.writeMessage(
        1,
        _instance.t2sCloudProviderConfigElevenlabs as any,
        T2sCloudProviderConfigElevenLabs.serializeBinaryToWriter
      );
    }
    if (_instance.t2sCloudProviderConfigGoogle) {
      _writer.writeMessage(
        2,
        _instance.t2sCloudProviderConfigGoogle as any,
        T2sCloudProviderConfigGoogle.serializeBinaryToWriter
      );
    }
    if (_instance.t2sCloudProviderConfigMicrosoft) {
      _writer.writeMessage(
        3,
        _instance.t2sCloudProviderConfigMicrosoft as any,
        T2sCloudProviderConfigMicrosoft.serializeBinaryToWriter
      );
    }
  }

  private _t2sCloudProviderConfigElevenlabs?: T2sCloudProviderConfigElevenLabs;
  private _t2sCloudProviderConfigGoogle?: T2sCloudProviderConfigGoogle;
  private _t2sCloudProviderConfigMicrosoft?: T2sCloudProviderConfigMicrosoft;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sCloudProviderConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2sCloudProviderConfig.AsObject>) {
    _value = _value || {};
    this.t2sCloudProviderConfigElevenlabs = _value.t2sCloudProviderConfigElevenlabs
      ? new T2sCloudProviderConfigElevenLabs(
          _value.t2sCloudProviderConfigElevenlabs
        )
      : undefined;
    this.t2sCloudProviderConfigGoogle = _value.t2sCloudProviderConfigGoogle
      ? new T2sCloudProviderConfigGoogle(_value.t2sCloudProviderConfigGoogle)
      : undefined;
    this.t2sCloudProviderConfigMicrosoft = _value.t2sCloudProviderConfigMicrosoft
      ? new T2sCloudProviderConfigMicrosoft(
          _value.t2sCloudProviderConfigMicrosoft
        )
      : undefined;
    T2sCloudProviderConfig.refineValues(this);
  }
  get t2sCloudProviderConfigElevenlabs():
    | T2sCloudProviderConfigElevenLabs
    | undefined {
    return this._t2sCloudProviderConfigElevenlabs;
  }
  set t2sCloudProviderConfigElevenlabs(
    value: T2sCloudProviderConfigElevenLabs | undefined
  ) {
    this._t2sCloudProviderConfigElevenlabs = value;
  }
  get t2sCloudProviderConfigGoogle(): T2sCloudProviderConfigGoogle | undefined {
    return this._t2sCloudProviderConfigGoogle;
  }
  set t2sCloudProviderConfigGoogle(
    value: T2sCloudProviderConfigGoogle | undefined
  ) {
    this._t2sCloudProviderConfigGoogle = value;
  }
  get t2sCloudProviderConfigMicrosoft():
    | T2sCloudProviderConfigMicrosoft
    | undefined {
    return this._t2sCloudProviderConfigMicrosoft;
  }
  set t2sCloudProviderConfigMicrosoft(
    value: T2sCloudProviderConfigMicrosoft | undefined
  ) {
    this._t2sCloudProviderConfigMicrosoft = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sCloudProviderConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sCloudProviderConfig.AsObject {
    return {
      t2sCloudProviderConfigElevenlabs: this.t2sCloudProviderConfigElevenlabs
        ? this.t2sCloudProviderConfigElevenlabs.toObject()
        : undefined,
      t2sCloudProviderConfigGoogle: this.t2sCloudProviderConfigGoogle
        ? this.t2sCloudProviderConfigGoogle.toObject()
        : undefined,
      t2sCloudProviderConfigMicrosoft: this.t2sCloudProviderConfigMicrosoft
        ? this.t2sCloudProviderConfigMicrosoft.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sCloudProviderConfig.AsProtobufJSON {
    return {
      t2sCloudProviderConfigElevenlabs: this.t2sCloudProviderConfigElevenlabs
        ? this.t2sCloudProviderConfigElevenlabs.toProtobufJSON(options)
        : null,
      t2sCloudProviderConfigGoogle: this.t2sCloudProviderConfigGoogle
        ? this.t2sCloudProviderConfigGoogle.toProtobufJSON(options)
        : null,
      t2sCloudProviderConfigMicrosoft: this.t2sCloudProviderConfigMicrosoft
        ? this.t2sCloudProviderConfigMicrosoft.toProtobufJSON(options)
        : null
    };
  }
}
export module T2sCloudProviderConfig {
  /**
   * Standard JavaScript object representation for T2sCloudProviderConfig
   */
  export interface AsObject {
    t2sCloudProviderConfigElevenlabs?: T2sCloudProviderConfigElevenLabs.AsObject;
    t2sCloudProviderConfigGoogle?: T2sCloudProviderConfigGoogle.AsObject;
    t2sCloudProviderConfigMicrosoft?: T2sCloudProviderConfigMicrosoft.AsObject;
  }

  /**
   * Protobuf JSON representation for T2sCloudProviderConfig
   */
  export interface AsProtobufJSON {
    t2sCloudProviderConfigElevenlabs: T2sCloudProviderConfigElevenLabs.AsProtobufJSON | null;
    t2sCloudProviderConfigGoogle: T2sCloudProviderConfigGoogle.AsProtobufJSON | null;
    t2sCloudProviderConfigMicrosoft: T2sCloudProviderConfigMicrosoft.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfigElevenLabs
 */
export class T2sCloudProviderConfigElevenLabs implements GrpcMessage {
  static id = 'ondewo.t2s.T2sCloudProviderConfigElevenLabs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sCloudProviderConfigElevenLabs();
    T2sCloudProviderConfigElevenLabs.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sCloudProviderConfigElevenLabs) {
    _instance.stability = _instance.stability || 0;
    _instance.similarityBoost = _instance.similarityBoost || 0;
    _instance.style = _instance.style || 0;
    _instance.useSpeakerBoost = _instance.useSpeakerBoost || false;
    _instance.applyTextNormalization = _instance.applyTextNormalization || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sCloudProviderConfigElevenLabs,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.stability = _reader.readFloat();
          break;
        case 2:
          _instance.similarityBoost = _reader.readFloat();
          break;
        case 3:
          _instance.style = _reader.readFloat();
          break;
        case 4:
          _instance.useSpeakerBoost = _reader.readBool();
          break;
        case 5:
          _instance.applyTextNormalization = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    T2sCloudProviderConfigElevenLabs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sCloudProviderConfigElevenLabs,
    _writer: BinaryWriter
  ) {
    if (_instance.stability) {
      _writer.writeFloat(1, _instance.stability);
    }
    if (_instance.similarityBoost) {
      _writer.writeFloat(2, _instance.similarityBoost);
    }
    if (_instance.style) {
      _writer.writeFloat(3, _instance.style);
    }
    if (_instance.useSpeakerBoost) {
      _writer.writeBool(4, _instance.useSpeakerBoost);
    }
    if (_instance.applyTextNormalization) {
      _writer.writeString(5, _instance.applyTextNormalization);
    }
  }

  private _stability: number;
  private _similarityBoost: number;
  private _style: number;
  private _useSpeakerBoost: boolean;
  private _applyTextNormalization: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sCloudProviderConfigElevenLabs to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<T2sCloudProviderConfigElevenLabs.AsObject>
  ) {
    _value = _value || {};
    this.stability = _value.stability;
    this.similarityBoost = _value.similarityBoost;
    this.style = _value.style;
    this.useSpeakerBoost = _value.useSpeakerBoost;
    this.applyTextNormalization = _value.applyTextNormalization;
    T2sCloudProviderConfigElevenLabs.refineValues(this);
  }
  get stability(): number {
    return this._stability;
  }
  set stability(value: number) {
    this._stability = value;
  }
  get similarityBoost(): number {
    return this._similarityBoost;
  }
  set similarityBoost(value: number) {
    this._similarityBoost = value;
  }
  get style(): number {
    return this._style;
  }
  set style(value: number) {
    this._style = value;
  }
  get useSpeakerBoost(): boolean {
    return this._useSpeakerBoost;
  }
  set useSpeakerBoost(value: boolean) {
    this._useSpeakerBoost = value;
  }
  get applyTextNormalization(): string {
    return this._applyTextNormalization;
  }
  set applyTextNormalization(value: string) {
    this._applyTextNormalization = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sCloudProviderConfigElevenLabs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sCloudProviderConfigElevenLabs.AsObject {
    return {
      stability: this.stability,
      similarityBoost: this.similarityBoost,
      style: this.style,
      useSpeakerBoost: this.useSpeakerBoost,
      applyTextNormalization: this.applyTextNormalization
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sCloudProviderConfigElevenLabs.AsProtobufJSON {
    return {
      stability: this.stability,
      similarityBoost: this.similarityBoost,
      style: this.style,
      useSpeakerBoost: this.useSpeakerBoost,
      applyTextNormalization: this.applyTextNormalization
    };
  }
}
export module T2sCloudProviderConfigElevenLabs {
  /**
   * Standard JavaScript object representation for T2sCloudProviderConfigElevenLabs
   */
  export interface AsObject {
    stability: number;
    similarityBoost: number;
    style: number;
    useSpeakerBoost: boolean;
    applyTextNormalization: string;
  }

  /**
   * Protobuf JSON representation for T2sCloudProviderConfigElevenLabs
   */
  export interface AsProtobufJSON {
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
export class T2sCloudProviderConfigMicrosoft implements GrpcMessage {
  static id = 'ondewo.t2s.T2sCloudProviderConfigMicrosoft';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sCloudProviderConfigMicrosoft();
    T2sCloudProviderConfigMicrosoft.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sCloudProviderConfigMicrosoft) {
    _instance.useDefaultSpeaker = _instance.useDefaultSpeaker || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sCloudProviderConfigMicrosoft,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.useDefaultSpeaker = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    T2sCloudProviderConfigMicrosoft.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sCloudProviderConfigMicrosoft,
    _writer: BinaryWriter
  ) {
    if (_instance.useDefaultSpeaker) {
      _writer.writeBool(1, _instance.useDefaultSpeaker);
    }
  }

  private _useDefaultSpeaker: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sCloudProviderConfigMicrosoft to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<T2sCloudProviderConfigMicrosoft.AsObject>
  ) {
    _value = _value || {};
    this.useDefaultSpeaker = _value.useDefaultSpeaker;
    T2sCloudProviderConfigMicrosoft.refineValues(this);
  }
  get useDefaultSpeaker(): boolean {
    return this._useDefaultSpeaker;
  }
  set useDefaultSpeaker(value: boolean) {
    this._useDefaultSpeaker = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sCloudProviderConfigMicrosoft.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sCloudProviderConfigMicrosoft.AsObject {
    return {
      useDefaultSpeaker: this.useDefaultSpeaker
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sCloudProviderConfigMicrosoft.AsProtobufJSON {
    return {
      useDefaultSpeaker: this.useDefaultSpeaker
    };
  }
}
export module T2sCloudProviderConfigMicrosoft {
  /**
   * Standard JavaScript object representation for T2sCloudProviderConfigMicrosoft
   */
  export interface AsObject {
    useDefaultSpeaker: boolean;
  }

  /**
   * Protobuf JSON representation for T2sCloudProviderConfigMicrosoft
   */
  export interface AsProtobufJSON {
    useDefaultSpeaker: boolean;
  }
}

/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfigGoogle
 */
export class T2sCloudProviderConfigGoogle implements GrpcMessage {
  static id = 'ondewo.t2s.T2sCloudProviderConfigGoogle';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sCloudProviderConfigGoogle();
    T2sCloudProviderConfigGoogle.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sCloudProviderConfigGoogle) {
    _instance.speakingRate = _instance.speakingRate || 0;
    _instance.volumeGainDb = _instance.volumeGainDb || 0;
    _instance.pitch = _instance.pitch || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sCloudProviderConfigGoogle,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.speakingRate = _reader.readFloat();
          break;
        case 2:
          _instance.volumeGainDb = _reader.readFloat();
          break;
        case 3:
          _instance.pitch = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    T2sCloudProviderConfigGoogle.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sCloudProviderConfigGoogle,
    _writer: BinaryWriter
  ) {
    if (_instance.speakingRate) {
      _writer.writeFloat(1, _instance.speakingRate);
    }
    if (_instance.volumeGainDb) {
      _writer.writeFloat(2, _instance.volumeGainDb);
    }
    if (_instance.pitch) {
      _writer.writeFloat(3, _instance.pitch);
    }
  }

  private _speakingRate: number;
  private _volumeGainDb: number;
  private _pitch: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sCloudProviderConfigGoogle to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<T2sCloudProviderConfigGoogle.AsObject>
  ) {
    _value = _value || {};
    this.speakingRate = _value.speakingRate;
    this.volumeGainDb = _value.volumeGainDb;
    this.pitch = _value.pitch;
    T2sCloudProviderConfigGoogle.refineValues(this);
  }
  get speakingRate(): number {
    return this._speakingRate;
  }
  set speakingRate(value: number) {
    this._speakingRate = value;
  }
  get volumeGainDb(): number {
    return this._volumeGainDb;
  }
  set volumeGainDb(value: number) {
    this._volumeGainDb = value;
  }
  get pitch(): number {
    return this._pitch;
  }
  set pitch(value: number) {
    this._pitch = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sCloudProviderConfigGoogle.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sCloudProviderConfigGoogle.AsObject {
    return {
      speakingRate: this.speakingRate,
      volumeGainDb: this.volumeGainDb,
      pitch: this.pitch
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sCloudProviderConfigGoogle.AsProtobufJSON {
    return {
      speakingRate: this.speakingRate,
      volumeGainDb: this.volumeGainDb,
      pitch: this.pitch
    };
  }
}
export module T2sCloudProviderConfigGoogle {
  /**
   * Standard JavaScript object representation for T2sCloudProviderConfigGoogle
   */
  export interface AsObject {
    speakingRate: number;
    volumeGainDb: number;
    pitch: number;
  }

  /**
   * Protobuf JSON representation for T2sCloudProviderConfigGoogle
   */
  export interface AsProtobufJSON {
    speakingRate: number;
    volumeGainDb: number;
    pitch: number;
  }
}

/**
 * Message implementation for ondewo.t2s.SynthesizeResponse
 */
export class SynthesizeResponse implements GrpcMessage {
  static id = 'ondewo.t2s.SynthesizeResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SynthesizeResponse();
    SynthesizeResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SynthesizeResponse) {
    _instance.audioUuid = _instance.audioUuid || '';
    _instance.audio = _instance.audio || new Uint8Array();
    _instance.generationTime = _instance.generationTime || 0;
    _instance.audioLength = _instance.audioLength || 0;
    _instance.text = _instance.text || '';
    _instance.config = _instance.config || undefined;
    _instance.normalizedText = _instance.normalizedText || '';
    _instance.sampleRate = _instance.sampleRate || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SynthesizeResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.audioUuid = _reader.readString();
          break;
        case 2:
          _instance.audio = _reader.readBytes();
          break;
        case 3:
          _instance.generationTime = _reader.readFloat();
          break;
        case 4:
          _instance.audioLength = _reader.readFloat();
          break;
        case 5:
          _instance.text = _reader.readString();
          break;
        case 6:
          _instance.config = new RequestConfig();
          _reader.readMessage(
            _instance.config,
            RequestConfig.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.normalizedText = _reader.readString();
          break;
        case 8:
          _instance.sampleRate = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    SynthesizeResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SynthesizeResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.audioUuid) {
      _writer.writeString(1, _instance.audioUuid);
    }
    if (_instance.audio && _instance.audio.length) {
      _writer.writeBytes(2, _instance.audio);
    }
    if (_instance.generationTime) {
      _writer.writeFloat(3, _instance.generationTime);
    }
    if (_instance.audioLength) {
      _writer.writeFloat(4, _instance.audioLength);
    }
    if (_instance.text) {
      _writer.writeString(5, _instance.text);
    }
    if (_instance.config) {
      _writer.writeMessage(
        6,
        _instance.config as any,
        RequestConfig.serializeBinaryToWriter
      );
    }
    if (_instance.normalizedText) {
      _writer.writeString(7, _instance.normalizedText);
    }
    if (_instance.sampleRate) {
      _writer.writeFloat(8, _instance.sampleRate);
    }
  }

  private _audioUuid: string;
  private _audio: Uint8Array;
  private _generationTime: number;
  private _audioLength: number;
  private _text: string;
  private _config?: RequestConfig;
  private _normalizedText: string;
  private _sampleRate: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SynthesizeResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SynthesizeResponse.AsObject>) {
    _value = _value || {};
    this.audioUuid = _value.audioUuid;
    this.audio = _value.audio;
    this.generationTime = _value.generationTime;
    this.audioLength = _value.audioLength;
    this.text = _value.text;
    this.config = _value.config ? new RequestConfig(_value.config) : undefined;
    this.normalizedText = _value.normalizedText;
    this.sampleRate = _value.sampleRate;
    SynthesizeResponse.refineValues(this);
  }
  get audioUuid(): string {
    return this._audioUuid;
  }
  set audioUuid(value: string) {
    this._audioUuid = value;
  }
  get audio(): Uint8Array {
    return this._audio;
  }
  set audio(value: Uint8Array) {
    this._audio = value;
  }
  get generationTime(): number {
    return this._generationTime;
  }
  set generationTime(value: number) {
    this._generationTime = value;
  }
  get audioLength(): number {
    return this._audioLength;
  }
  set audioLength(value: number) {
    this._audioLength = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get config(): RequestConfig | undefined {
    return this._config;
  }
  set config(value: RequestConfig | undefined) {
    this._config = value;
  }
  get normalizedText(): string {
    return this._normalizedText;
  }
  set normalizedText(value: string) {
    this._normalizedText = value;
  }
  get sampleRate(): number {
    return this._sampleRate;
  }
  set sampleRate(value: number) {
    this._sampleRate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SynthesizeResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SynthesizeResponse.AsObject {
    return {
      audioUuid: this.audioUuid,
      audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
      generationTime: this.generationTime,
      audioLength: this.audioLength,
      text: this.text,
      config: this.config ? this.config.toObject() : undefined,
      normalizedText: this.normalizedText,
      sampleRate: this.sampleRate
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SynthesizeResponse.AsProtobufJSON {
    return {
      audioUuid: this.audioUuid,
      audio: this.audio ? uint8ArrayToBase64(this.audio) : '',
      generationTime: this.generationTime,
      audioLength: this.audioLength,
      text: this.text,
      config: this.config ? this.config.toProtobufJSON(options) : null,
      normalizedText: this.normalizedText,
      sampleRate: this.sampleRate
    };
  }
}
export module SynthesizeResponse {
  /**
   * Standard JavaScript object representation for SynthesizeResponse
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class StreamingSynthesizeResponse implements GrpcMessage {
  static id = 'ondewo.t2s.StreamingSynthesizeResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamingSynthesizeResponse();
    StreamingSynthesizeResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamingSynthesizeResponse) {
    _instance.audioUuid = _instance.audioUuid || '';
    _instance.audio = _instance.audio || new Uint8Array();
    _instance.generationTime = _instance.generationTime || 0;
    _instance.audioLength = _instance.audioLength || 0;
    _instance.text = _instance.text || '';
    _instance.config = _instance.config || undefined;
    _instance.normalizedText = _instance.normalizedText || '';
    _instance.sampleRate = _instance.sampleRate || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamingSynthesizeResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.audioUuid = _reader.readString();
          break;
        case 2:
          _instance.audio = _reader.readBytes();
          break;
        case 3:
          _instance.generationTime = _reader.readFloat();
          break;
        case 4:
          _instance.audioLength = _reader.readFloat();
          break;
        case 5:
          _instance.text = _reader.readString();
          break;
        case 6:
          _instance.config = new RequestConfig();
          _reader.readMessage(
            _instance.config,
            RequestConfig.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.normalizedText = _reader.readString();
          break;
        case 8:
          _instance.sampleRate = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamingSynthesizeResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamingSynthesizeResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.audioUuid) {
      _writer.writeString(1, _instance.audioUuid);
    }
    if (_instance.audio && _instance.audio.length) {
      _writer.writeBytes(2, _instance.audio);
    }
    if (_instance.generationTime) {
      _writer.writeFloat(3, _instance.generationTime);
    }
    if (_instance.audioLength) {
      _writer.writeFloat(4, _instance.audioLength);
    }
    if (_instance.text) {
      _writer.writeString(5, _instance.text);
    }
    if (_instance.config) {
      _writer.writeMessage(
        6,
        _instance.config as any,
        RequestConfig.serializeBinaryToWriter
      );
    }
    if (_instance.normalizedText) {
      _writer.writeString(7, _instance.normalizedText);
    }
    if (_instance.sampleRate) {
      _writer.writeFloat(8, _instance.sampleRate);
    }
  }

  private _audioUuid: string;
  private _audio: Uint8Array;
  private _generationTime: number;
  private _audioLength: number;
  private _text: string;
  private _config?: RequestConfig;
  private _normalizedText: string;
  private _sampleRate: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamingSynthesizeResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamingSynthesizeResponse.AsObject>) {
    _value = _value || {};
    this.audioUuid = _value.audioUuid;
    this.audio = _value.audio;
    this.generationTime = _value.generationTime;
    this.audioLength = _value.audioLength;
    this.text = _value.text;
    this.config = _value.config ? new RequestConfig(_value.config) : undefined;
    this.normalizedText = _value.normalizedText;
    this.sampleRate = _value.sampleRate;
    StreamingSynthesizeResponse.refineValues(this);
  }
  get audioUuid(): string {
    return this._audioUuid;
  }
  set audioUuid(value: string) {
    this._audioUuid = value;
  }
  get audio(): Uint8Array {
    return this._audio;
  }
  set audio(value: Uint8Array) {
    this._audio = value;
  }
  get generationTime(): number {
    return this._generationTime;
  }
  set generationTime(value: number) {
    this._generationTime = value;
  }
  get audioLength(): number {
    return this._audioLength;
  }
  set audioLength(value: number) {
    this._audioLength = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get config(): RequestConfig | undefined {
    return this._config;
  }
  set config(value: RequestConfig | undefined) {
    this._config = value;
  }
  get normalizedText(): string {
    return this._normalizedText;
  }
  set normalizedText(value: string) {
    this._normalizedText = value;
  }
  get sampleRate(): number {
    return this._sampleRate;
  }
  set sampleRate(value: number) {
    this._sampleRate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamingSynthesizeResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamingSynthesizeResponse.AsObject {
    return {
      audioUuid: this.audioUuid,
      audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
      generationTime: this.generationTime,
      audioLength: this.audioLength,
      text: this.text,
      config: this.config ? this.config.toObject() : undefined,
      normalizedText: this.normalizedText,
      sampleRate: this.sampleRate
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StreamingSynthesizeResponse.AsProtobufJSON {
    return {
      audioUuid: this.audioUuid,
      audio: this.audio ? uint8ArrayToBase64(this.audio) : '',
      generationTime: this.generationTime,
      audioLength: this.audioLength,
      text: this.text,
      config: this.config ? this.config.toProtobufJSON(options) : null,
      normalizedText: this.normalizedText,
      sampleRate: this.sampleRate
    };
  }
}
export module StreamingSynthesizeResponse {
  /**
   * Standard JavaScript object representation for StreamingSynthesizeResponse
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class NormalizeTextRequest implements GrpcMessage {
  static id = 'ondewo.t2s.NormalizeTextRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NormalizeTextRequest();
    NormalizeTextRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NormalizeTextRequest) {
    _instance.t2sPipelineId = _instance.t2sPipelineId || '';
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NormalizeTextRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.t2sPipelineId = _reader.readString();
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    NormalizeTextRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: NormalizeTextRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.t2sPipelineId) {
      _writer.writeString(1, _instance.t2sPipelineId);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
  }

  private _t2sPipelineId: string;
  private _text: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NormalizeTextRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<NormalizeTextRequest.AsObject>) {
    _value = _value || {};
    this.t2sPipelineId = _value.t2sPipelineId;
    this.text = _value.text;
    NormalizeTextRequest.refineValues(this);
  }
  get t2sPipelineId(): string {
    return this._t2sPipelineId;
  }
  set t2sPipelineId(value: string) {
    this._t2sPipelineId = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NormalizeTextRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NormalizeTextRequest.AsObject {
    return {
      t2sPipelineId: this.t2sPipelineId,
      text: this.text
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): NormalizeTextRequest.AsProtobufJSON {
    return {
      t2sPipelineId: this.t2sPipelineId,
      text: this.text
    };
  }
}
export module NormalizeTextRequest {
  /**
   * Standard JavaScript object representation for NormalizeTextRequest
   */
  export interface AsObject {
    t2sPipelineId: string;
    text: string;
  }

  /**
   * Protobuf JSON representation for NormalizeTextRequest
   */
  export interface AsProtobufJSON {
    t2sPipelineId: string;
    text: string;
  }
}

/**
 * Message implementation for ondewo.t2s.NormalizeTextResponse
 */
export class NormalizeTextResponse implements GrpcMessage {
  static id = 'ondewo.t2s.NormalizeTextResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NormalizeTextResponse();
    NormalizeTextResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NormalizeTextResponse) {
    _instance.normalizedText = _instance.normalizedText || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NormalizeTextResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.normalizedText = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    NormalizeTextResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: NormalizeTextResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.normalizedText) {
      _writer.writeString(1, _instance.normalizedText);
    }
  }

  private _normalizedText: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NormalizeTextResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<NormalizeTextResponse.AsObject>) {
    _value = _value || {};
    this.normalizedText = _value.normalizedText;
    NormalizeTextResponse.refineValues(this);
  }
  get normalizedText(): string {
    return this._normalizedText;
  }
  set normalizedText(value: string) {
    this._normalizedText = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NormalizeTextResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NormalizeTextResponse.AsObject {
    return {
      normalizedText: this.normalizedText
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): NormalizeTextResponse.AsProtobufJSON {
    return {
      normalizedText: this.normalizedText
    };
  }
}
export module NormalizeTextResponse {
  /**
   * Standard JavaScript object representation for NormalizeTextResponse
   */
  export interface AsObject {
    normalizedText: string;
  }

  /**
   * Protobuf JSON representation for NormalizeTextResponse
   */
  export interface AsProtobufJSON {
    normalizedText: string;
  }
}

/**
 * Message implementation for ondewo.t2s.T2SGetServiceInfoResponse
 */
export class T2SGetServiceInfoResponse implements GrpcMessage {
  static id = 'ondewo.t2s.T2SGetServiceInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2SGetServiceInfoResponse();
    T2SGetServiceInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2SGetServiceInfoResponse) {
    _instance.version = _instance.version || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2SGetServiceInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.version = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    T2SGetServiceInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2SGetServiceInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.version) {
      _writer.writeString(1, _instance.version);
    }
  }

  private _version: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2SGetServiceInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2SGetServiceInfoResponse.AsObject>) {
    _value = _value || {};
    this.version = _value.version;
    T2SGetServiceInfoResponse.refineValues(this);
  }
  get version(): string {
    return this._version;
  }
  set version(value: string) {
    this._version = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2SGetServiceInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2SGetServiceInfoResponse.AsObject {
    return {
      version: this.version
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2SGetServiceInfoResponse.AsProtobufJSON {
    return {
      version: this.version
    };
  }
}
export module T2SGetServiceInfoResponse {
  /**
   * Standard JavaScript object representation for T2SGetServiceInfoResponse
   */
  export interface AsObject {
    version: string;
  }

  /**
   * Protobuf JSON representation for T2SGetServiceInfoResponse
   */
  export interface AsProtobufJSON {
    version: string;
  }
}

/**
 * Message implementation for ondewo.t2s.ListT2sPipelinesRequest
 */
export class ListT2sPipelinesRequest implements GrpcMessage {
  static id = 'ondewo.t2s.ListT2sPipelinesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListT2sPipelinesRequest();
    ListT2sPipelinesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sPipelinesRequest) {
    _instance.languages = _instance.languages || [];
    _instance.speakerSexes = _instance.speakerSexes || [];
    _instance.pipelineOwners = _instance.pipelineOwners || [];
    _instance.speakerNames = _instance.speakerNames || [];
    _instance.domains = _instance.domains || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListT2sPipelinesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languages = _instance.languages || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.speakerSexes = _instance.speakerSexes || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.pipelineOwners = _instance.pipelineOwners || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.speakerNames = _instance.speakerNames || []).push(
            _reader.readString()
          );
          break;
        case 5:
          (_instance.domains = _instance.domains || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListT2sPipelinesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListT2sPipelinesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.languages && _instance.languages.length) {
      _writer.writeRepeatedString(1, _instance.languages);
    }
    if (_instance.speakerSexes && _instance.speakerSexes.length) {
      _writer.writeRepeatedString(2, _instance.speakerSexes);
    }
    if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
      _writer.writeRepeatedString(3, _instance.pipelineOwners);
    }
    if (_instance.speakerNames && _instance.speakerNames.length) {
      _writer.writeRepeatedString(4, _instance.speakerNames);
    }
    if (_instance.domains && _instance.domains.length) {
      _writer.writeRepeatedString(5, _instance.domains);
    }
  }

  private _languages: string[];
  private _speakerSexes: string[];
  private _pipelineOwners: string[];
  private _speakerNames: string[];
  private _domains: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sPipelinesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListT2sPipelinesRequest.AsObject>) {
    _value = _value || {};
    this.languages = (_value.languages || []).slice();
    this.speakerSexes = (_value.speakerSexes || []).slice();
    this.pipelineOwners = (_value.pipelineOwners || []).slice();
    this.speakerNames = (_value.speakerNames || []).slice();
    this.domains = (_value.domains || []).slice();
    ListT2sPipelinesRequest.refineValues(this);
  }
  get languages(): string[] {
    return this._languages;
  }
  set languages(value: string[]) {
    this._languages = value;
  }
  get speakerSexes(): string[] {
    return this._speakerSexes;
  }
  set speakerSexes(value: string[]) {
    this._speakerSexes = value;
  }
  get pipelineOwners(): string[] {
    return this._pipelineOwners;
  }
  set pipelineOwners(value: string[]) {
    this._pipelineOwners = value;
  }
  get speakerNames(): string[] {
    return this._speakerNames;
  }
  set speakerNames(value: string[]) {
    this._speakerNames = value;
  }
  get domains(): string[] {
    return this._domains;
  }
  set domains(value: string[]) {
    this._domains = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListT2sPipelinesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sPipelinesRequest.AsObject {
    return {
      languages: (this.languages || []).slice(),
      speakerSexes: (this.speakerSexes || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice(),
      speakerNames: (this.speakerNames || []).slice(),
      domains: (this.domains || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListT2sPipelinesRequest.AsProtobufJSON {
    return {
      languages: (this.languages || []).slice(),
      speakerSexes: (this.speakerSexes || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice(),
      speakerNames: (this.speakerNames || []).slice(),
      domains: (this.domains || []).slice()
    };
  }
}
export module ListT2sPipelinesRequest {
  /**
   * Standard JavaScript object representation for ListT2sPipelinesRequest
   */
  export interface AsObject {
    languages: string[];
    speakerSexes: string[];
    pipelineOwners: string[];
    speakerNames: string[];
    domains: string[];
  }

  /**
   * Protobuf JSON representation for ListT2sPipelinesRequest
   */
  export interface AsProtobufJSON {
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
export class ListT2sPipelinesResponse implements GrpcMessage {
  static id = 'ondewo.t2s.ListT2sPipelinesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListT2sPipelinesResponse();
    ListT2sPipelinesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sPipelinesResponse) {
    _instance.pipelines = _instance.pipelines || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListT2sPipelinesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Text2SpeechConfig();
          _reader.readMessage(
            messageInitializer1,
            Text2SpeechConfig.deserializeBinaryFromReader
          );
          (_instance.pipelines = _instance.pipelines || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListT2sPipelinesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListT2sPipelinesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.pipelines && _instance.pipelines.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.pipelines as any,
        Text2SpeechConfig.serializeBinaryToWriter
      );
    }
  }

  private _pipelines?: Text2SpeechConfig[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sPipelinesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListT2sPipelinesResponse.AsObject>) {
    _value = _value || {};
    this.pipelines = (_value.pipelines || []).map(
      m => new Text2SpeechConfig(m)
    );
    ListT2sPipelinesResponse.refineValues(this);
  }
  get pipelines(): Text2SpeechConfig[] | undefined {
    return this._pipelines;
  }
  set pipelines(value: Text2SpeechConfig[] | undefined) {
    this._pipelines = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListT2sPipelinesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sPipelinesResponse.AsObject {
    return {
      pipelines: (this.pipelines || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListT2sPipelinesResponse.AsProtobufJSON {
    return {
      pipelines: (this.pipelines || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListT2sPipelinesResponse {
  /**
   * Standard JavaScript object representation for ListT2sPipelinesResponse
   */
  export interface AsObject {
    pipelines?: Text2SpeechConfig.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListT2sPipelinesResponse
   */
  export interface AsProtobufJSON {
    pipelines: Text2SpeechConfig.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.t2s.ListT2sLanguagesRequest
 */
export class ListT2sLanguagesRequest implements GrpcMessage {
  static id = 'ondewo.t2s.ListT2sLanguagesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListT2sLanguagesRequest();
    ListT2sLanguagesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sLanguagesRequest) {
    _instance.speakerSexes = _instance.speakerSexes || [];
    _instance.pipelineOwners = _instance.pipelineOwners || [];
    _instance.speakerNames = _instance.speakerNames || [];
    _instance.domains = _instance.domains || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListT2sLanguagesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.speakerSexes = _instance.speakerSexes || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.pipelineOwners = _instance.pipelineOwners || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.speakerNames = _instance.speakerNames || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.domains = _instance.domains || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListT2sLanguagesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListT2sLanguagesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.speakerSexes && _instance.speakerSexes.length) {
      _writer.writeRepeatedString(1, _instance.speakerSexes);
    }
    if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
      _writer.writeRepeatedString(2, _instance.pipelineOwners);
    }
    if (_instance.speakerNames && _instance.speakerNames.length) {
      _writer.writeRepeatedString(3, _instance.speakerNames);
    }
    if (_instance.domains && _instance.domains.length) {
      _writer.writeRepeatedString(4, _instance.domains);
    }
  }

  private _speakerSexes: string[];
  private _pipelineOwners: string[];
  private _speakerNames: string[];
  private _domains: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sLanguagesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListT2sLanguagesRequest.AsObject>) {
    _value = _value || {};
    this.speakerSexes = (_value.speakerSexes || []).slice();
    this.pipelineOwners = (_value.pipelineOwners || []).slice();
    this.speakerNames = (_value.speakerNames || []).slice();
    this.domains = (_value.domains || []).slice();
    ListT2sLanguagesRequest.refineValues(this);
  }
  get speakerSexes(): string[] {
    return this._speakerSexes;
  }
  set speakerSexes(value: string[]) {
    this._speakerSexes = value;
  }
  get pipelineOwners(): string[] {
    return this._pipelineOwners;
  }
  set pipelineOwners(value: string[]) {
    this._pipelineOwners = value;
  }
  get speakerNames(): string[] {
    return this._speakerNames;
  }
  set speakerNames(value: string[]) {
    this._speakerNames = value;
  }
  get domains(): string[] {
    return this._domains;
  }
  set domains(value: string[]) {
    this._domains = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListT2sLanguagesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sLanguagesRequest.AsObject {
    return {
      speakerSexes: (this.speakerSexes || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice(),
      speakerNames: (this.speakerNames || []).slice(),
      domains: (this.domains || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListT2sLanguagesRequest.AsProtobufJSON {
    return {
      speakerSexes: (this.speakerSexes || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice(),
      speakerNames: (this.speakerNames || []).slice(),
      domains: (this.domains || []).slice()
    };
  }
}
export module ListT2sLanguagesRequest {
  /**
   * Standard JavaScript object representation for ListT2sLanguagesRequest
   */
  export interface AsObject {
    speakerSexes: string[];
    pipelineOwners: string[];
    speakerNames: string[];
    domains: string[];
  }

  /**
   * Protobuf JSON representation for ListT2sLanguagesRequest
   */
  export interface AsProtobufJSON {
    speakerSexes: string[];
    pipelineOwners: string[];
    speakerNames: string[];
    domains: string[];
  }
}

/**
 * Message implementation for ondewo.t2s.ListT2sLanguagesResponse
 */
export class ListT2sLanguagesResponse implements GrpcMessage {
  static id = 'ondewo.t2s.ListT2sLanguagesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListT2sLanguagesResponse();
    ListT2sLanguagesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sLanguagesResponse) {
    _instance.languages = _instance.languages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListT2sLanguagesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.languages = _instance.languages || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListT2sLanguagesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListT2sLanguagesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.languages && _instance.languages.length) {
      _writer.writeRepeatedString(1, _instance.languages);
    }
  }

  private _languages: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sLanguagesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListT2sLanguagesResponse.AsObject>) {
    _value = _value || {};
    this.languages = (_value.languages || []).slice();
    ListT2sLanguagesResponse.refineValues(this);
  }
  get languages(): string[] {
    return this._languages;
  }
  set languages(value: string[]) {
    this._languages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListT2sLanguagesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sLanguagesResponse.AsObject {
    return {
      languages: (this.languages || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListT2sLanguagesResponse.AsProtobufJSON {
    return {
      languages: (this.languages || []).slice()
    };
  }
}
export module ListT2sLanguagesResponse {
  /**
   * Standard JavaScript object representation for ListT2sLanguagesResponse
   */
  export interface AsObject {
    languages: string[];
  }

  /**
   * Protobuf JSON representation for ListT2sLanguagesResponse
   */
  export interface AsProtobufJSON {
    languages: string[];
  }
}

/**
 * Message implementation for ondewo.t2s.ListT2sDomainsRequest
 */
export class ListT2sDomainsRequest implements GrpcMessage {
  static id = 'ondewo.t2s.ListT2sDomainsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListT2sDomainsRequest();
    ListT2sDomainsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sDomainsRequest) {
    _instance.speakerSexes = _instance.speakerSexes || [];
    _instance.pipelineOwners = _instance.pipelineOwners || [];
    _instance.speakerNames = _instance.speakerNames || [];
    _instance.languages = _instance.languages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListT2sDomainsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.speakerSexes = _instance.speakerSexes || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.pipelineOwners = _instance.pipelineOwners || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.speakerNames = _instance.speakerNames || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.languages = _instance.languages || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListT2sDomainsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListT2sDomainsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.speakerSexes && _instance.speakerSexes.length) {
      _writer.writeRepeatedString(1, _instance.speakerSexes);
    }
    if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
      _writer.writeRepeatedString(2, _instance.pipelineOwners);
    }
    if (_instance.speakerNames && _instance.speakerNames.length) {
      _writer.writeRepeatedString(3, _instance.speakerNames);
    }
    if (_instance.languages && _instance.languages.length) {
      _writer.writeRepeatedString(4, _instance.languages);
    }
  }

  private _speakerSexes: string[];
  private _pipelineOwners: string[];
  private _speakerNames: string[];
  private _languages: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sDomainsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListT2sDomainsRequest.AsObject>) {
    _value = _value || {};
    this.speakerSexes = (_value.speakerSexes || []).slice();
    this.pipelineOwners = (_value.pipelineOwners || []).slice();
    this.speakerNames = (_value.speakerNames || []).slice();
    this.languages = (_value.languages || []).slice();
    ListT2sDomainsRequest.refineValues(this);
  }
  get speakerSexes(): string[] {
    return this._speakerSexes;
  }
  set speakerSexes(value: string[]) {
    this._speakerSexes = value;
  }
  get pipelineOwners(): string[] {
    return this._pipelineOwners;
  }
  set pipelineOwners(value: string[]) {
    this._pipelineOwners = value;
  }
  get speakerNames(): string[] {
    return this._speakerNames;
  }
  set speakerNames(value: string[]) {
    this._speakerNames = value;
  }
  get languages(): string[] {
    return this._languages;
  }
  set languages(value: string[]) {
    this._languages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListT2sDomainsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sDomainsRequest.AsObject {
    return {
      speakerSexes: (this.speakerSexes || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice(),
      speakerNames: (this.speakerNames || []).slice(),
      languages: (this.languages || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListT2sDomainsRequest.AsProtobufJSON {
    return {
      speakerSexes: (this.speakerSexes || []).slice(),
      pipelineOwners: (this.pipelineOwners || []).slice(),
      speakerNames: (this.speakerNames || []).slice(),
      languages: (this.languages || []).slice()
    };
  }
}
export module ListT2sDomainsRequest {
  /**
   * Standard JavaScript object representation for ListT2sDomainsRequest
   */
  export interface AsObject {
    speakerSexes: string[];
    pipelineOwners: string[];
    speakerNames: string[];
    languages: string[];
  }

  /**
   * Protobuf JSON representation for ListT2sDomainsRequest
   */
  export interface AsProtobufJSON {
    speakerSexes: string[];
    pipelineOwners: string[];
    speakerNames: string[];
    languages: string[];
  }
}

/**
 * Message implementation for ondewo.t2s.ListT2sDomainsResponse
 */
export class ListT2sDomainsResponse implements GrpcMessage {
  static id = 'ondewo.t2s.ListT2sDomainsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListT2sDomainsResponse();
    ListT2sDomainsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sDomainsResponse) {
    _instance.domains = _instance.domains || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListT2sDomainsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.domains = _instance.domains || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListT2sDomainsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListT2sDomainsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.domains && _instance.domains.length) {
      _writer.writeRepeatedString(1, _instance.domains);
    }
  }

  private _domains: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sDomainsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListT2sDomainsResponse.AsObject>) {
    _value = _value || {};
    this.domains = (_value.domains || []).slice();
    ListT2sDomainsResponse.refineValues(this);
  }
  get domains(): string[] {
    return this._domains;
  }
  set domains(value: string[]) {
    this._domains = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListT2sDomainsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sDomainsResponse.AsObject {
    return {
      domains: (this.domains || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListT2sDomainsResponse.AsProtobufJSON {
    return {
      domains: (this.domains || []).slice()
    };
  }
}
export module ListT2sDomainsResponse {
  /**
   * Standard JavaScript object representation for ListT2sDomainsResponse
   */
  export interface AsObject {
    domains: string[];
  }

  /**
   * Protobuf JSON representation for ListT2sDomainsResponse
   */
  export interface AsProtobufJSON {
    domains: string[];
  }
}

/**
 * Message implementation for ondewo.t2s.ListT2sNormalizationPipelinesRequest
 */
export class ListT2sNormalizationPipelinesRequest implements GrpcMessage {
  static id = 'ondewo.t2s.ListT2sNormalizationPipelinesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListT2sNormalizationPipelinesRequest();
    ListT2sNormalizationPipelinesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sNormalizationPipelinesRequest) {
    _instance.language = _instance.language || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListT2sNormalizationPipelinesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.language = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListT2sNormalizationPipelinesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListT2sNormalizationPipelinesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.language) {
      _writer.writeString(1, _instance.language);
    }
  }

  private _language: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sNormalizationPipelinesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListT2sNormalizationPipelinesRequest.AsObject>
  ) {
    _value = _value || {};
    this.language = _value.language;
    ListT2sNormalizationPipelinesRequest.refineValues(this);
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListT2sNormalizationPipelinesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sNormalizationPipelinesRequest.AsObject {
    return {
      language: this.language
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListT2sNormalizationPipelinesRequest.AsProtobufJSON {
    return {
      language: this.language
    };
  }
}
export module ListT2sNormalizationPipelinesRequest {
  /**
   * Standard JavaScript object representation for ListT2sNormalizationPipelinesRequest
   */
  export interface AsObject {
    language: string;
  }

  /**
   * Protobuf JSON representation for ListT2sNormalizationPipelinesRequest
   */
  export interface AsProtobufJSON {
    language: string;
  }
}

/**
 * Message implementation for ondewo.t2s.ListT2sNormalizationPipelinesResponse
 */
export class ListT2sNormalizationPipelinesResponse implements GrpcMessage {
  static id = 'ondewo.t2s.ListT2sNormalizationPipelinesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListT2sNormalizationPipelinesResponse();
    ListT2sNormalizationPipelinesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListT2sNormalizationPipelinesResponse) {
    _instance.t2sNormalizationPipelines =
      _instance.t2sNormalizationPipelines || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListT2sNormalizationPipelinesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.t2sNormalizationPipelines =
            _instance.t2sNormalizationPipelines || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListT2sNormalizationPipelinesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListT2sNormalizationPipelinesResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.t2sNormalizationPipelines &&
      _instance.t2sNormalizationPipelines.length
    ) {
      _writer.writeRepeatedString(1, _instance.t2sNormalizationPipelines);
    }
  }

  private _t2sNormalizationPipelines: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListT2sNormalizationPipelinesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListT2sNormalizationPipelinesResponse.AsObject>
  ) {
    _value = _value || {};
    this.t2sNormalizationPipelines = (
      _value.t2sNormalizationPipelines || []
    ).slice();
    ListT2sNormalizationPipelinesResponse.refineValues(this);
  }
  get t2sNormalizationPipelines(): string[] {
    return this._t2sNormalizationPipelines;
  }
  set t2sNormalizationPipelines(value: string[]) {
    this._t2sNormalizationPipelines = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListT2sNormalizationPipelinesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListT2sNormalizationPipelinesResponse.AsObject {
    return {
      t2sNormalizationPipelines: (this.t2sNormalizationPipelines || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListT2sNormalizationPipelinesResponse.AsProtobufJSON {
    return {
      t2sNormalizationPipelines: (this.t2sNormalizationPipelines || []).slice()
    };
  }
}
export module ListT2sNormalizationPipelinesResponse {
  /**
   * Standard JavaScript object representation for ListT2sNormalizationPipelinesResponse
   */
  export interface AsObject {
    t2sNormalizationPipelines: string[];
  }

  /**
   * Protobuf JSON representation for ListT2sNormalizationPipelinesResponse
   */
  export interface AsProtobufJSON {
    t2sNormalizationPipelines: string[];
  }
}

/**
 * Message implementation for ondewo.t2s.T2sPipelineId
 */
export class T2sPipelineId implements GrpcMessage {
  static id = 'ondewo.t2s.T2sPipelineId';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sPipelineId();
    T2sPipelineId.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sPipelineId) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sPipelineId,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    T2sPipelineId.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sPipelineId,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sPipelineId to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2sPipelineId.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    T2sPipelineId.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sPipelineId.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sPipelineId.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sPipelineId.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module T2sPipelineId {
  /**
   * Standard JavaScript object representation for T2sPipelineId
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for T2sPipelineId
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for ondewo.t2s.Text2SpeechConfig
 */
export class Text2SpeechConfig implements GrpcMessage {
  static id = 'ondewo.t2s.Text2SpeechConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Text2SpeechConfig();
    Text2SpeechConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Text2SpeechConfig) {
    _instance.id = _instance.id || '';
    _instance.description = _instance.description || undefined;
    _instance.active = _instance.active || false;
    _instance.inference = _instance.inference || undefined;
    _instance.normalization = _instance.normalization || undefined;
    _instance.postprocessing = _instance.postprocessing || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Text2SpeechConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.description = new T2SDescription();
          _reader.readMessage(
            _instance.description,
            T2SDescription.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.active = _reader.readBool();
          break;
        case 4:
          _instance.inference = new T2SInference();
          _reader.readMessage(
            _instance.inference,
            T2SInference.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.normalization = new T2SNormalization();
          _reader.readMessage(
            _instance.normalization,
            T2SNormalization.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.postprocessing = new Postprocessing();
          _reader.readMessage(
            _instance.postprocessing,
            Postprocessing.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Text2SpeechConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Text2SpeechConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.description) {
      _writer.writeMessage(
        2,
        _instance.description as any,
        T2SDescription.serializeBinaryToWriter
      );
    }
    if (_instance.active) {
      _writer.writeBool(3, _instance.active);
    }
    if (_instance.inference) {
      _writer.writeMessage(
        4,
        _instance.inference as any,
        T2SInference.serializeBinaryToWriter
      );
    }
    if (_instance.normalization) {
      _writer.writeMessage(
        5,
        _instance.normalization as any,
        T2SNormalization.serializeBinaryToWriter
      );
    }
    if (_instance.postprocessing) {
      _writer.writeMessage(
        6,
        _instance.postprocessing as any,
        Postprocessing.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _description?: T2SDescription;
  private _active: boolean;
  private _inference?: T2SInference;
  private _normalization?: T2SNormalization;
  private _postprocessing?: Postprocessing;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Text2SpeechConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<Text2SpeechConfig.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.description = _value.description
      ? new T2SDescription(_value.description)
      : undefined;
    this.active = _value.active;
    this.inference = _value.inference
      ? new T2SInference(_value.inference)
      : undefined;
    this.normalization = _value.normalization
      ? new T2SNormalization(_value.normalization)
      : undefined;
    this.postprocessing = _value.postprocessing
      ? new Postprocessing(_value.postprocessing)
      : undefined;
    Text2SpeechConfig.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get description(): T2SDescription | undefined {
    return this._description;
  }
  set description(value: T2SDescription | undefined) {
    this._description = value;
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get inference(): T2SInference | undefined {
    return this._inference;
  }
  set inference(value: T2SInference | undefined) {
    this._inference = value;
  }
  get normalization(): T2SNormalization | undefined {
    return this._normalization;
  }
  set normalization(value: T2SNormalization | undefined) {
    this._normalization = value;
  }
  get postprocessing(): Postprocessing | undefined {
    return this._postprocessing;
  }
  set postprocessing(value: Postprocessing | undefined) {
    this._postprocessing = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Text2SpeechConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Text2SpeechConfig.AsObject {
    return {
      id: this.id,
      description: this.description ? this.description.toObject() : undefined,
      active: this.active,
      inference: this.inference ? this.inference.toObject() : undefined,
      normalization: this.normalization
        ? this.normalization.toObject()
        : undefined,
      postprocessing: this.postprocessing
        ? this.postprocessing.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Text2SpeechConfig.AsProtobufJSON {
    return {
      id: this.id,
      description: this.description
        ? this.description.toProtobufJSON(options)
        : null,
      active: this.active,
      inference: this.inference ? this.inference.toProtobufJSON(options) : null,
      normalization: this.normalization
        ? this.normalization.toProtobufJSON(options)
        : null,
      postprocessing: this.postprocessing
        ? this.postprocessing.toProtobufJSON(options)
        : null
    };
  }
}
export module Text2SpeechConfig {
  /**
   * Standard JavaScript object representation for Text2SpeechConfig
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class T2SDescription implements GrpcMessage {
  static id = 'ondewo.t2s.T2SDescription';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2SDescription();
    T2SDescription.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2SDescription) {
    _instance.language = _instance.language || '';
    _instance.speakerSex = _instance.speakerSex || '';
    _instance.pipelineOwner = _instance.pipelineOwner || '';
    _instance.comments = _instance.comments || '';
    _instance.speakerName = _instance.speakerName || '';
    _instance.domain = _instance.domain || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2SDescription,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.language = _reader.readString();
          break;
        case 2:
          _instance.speakerSex = _reader.readString();
          break;
        case 3:
          _instance.pipelineOwner = _reader.readString();
          break;
        case 4:
          _instance.comments = _reader.readString();
          break;
        case 5:
          _instance.speakerName = _reader.readString();
          break;
        case 6:
          _instance.domain = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    T2SDescription.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2SDescription,
    _writer: BinaryWriter
  ) {
    if (_instance.language) {
      _writer.writeString(1, _instance.language);
    }
    if (_instance.speakerSex) {
      _writer.writeString(2, _instance.speakerSex);
    }
    if (_instance.pipelineOwner) {
      _writer.writeString(3, _instance.pipelineOwner);
    }
    if (_instance.comments) {
      _writer.writeString(4, _instance.comments);
    }
    if (_instance.speakerName) {
      _writer.writeString(5, _instance.speakerName);
    }
    if (_instance.domain) {
      _writer.writeString(6, _instance.domain);
    }
  }

  private _language: string;
  private _speakerSex: string;
  private _pipelineOwner: string;
  private _comments: string;
  private _speakerName: string;
  private _domain: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2SDescription to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2SDescription.AsObject>) {
    _value = _value || {};
    this.language = _value.language;
    this.speakerSex = _value.speakerSex;
    this.pipelineOwner = _value.pipelineOwner;
    this.comments = _value.comments;
    this.speakerName = _value.speakerName;
    this.domain = _value.domain;
    T2SDescription.refineValues(this);
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get speakerSex(): string {
    return this._speakerSex;
  }
  set speakerSex(value: string) {
    this._speakerSex = value;
  }
  get pipelineOwner(): string {
    return this._pipelineOwner;
  }
  set pipelineOwner(value: string) {
    this._pipelineOwner = value;
  }
  get comments(): string {
    return this._comments;
  }
  set comments(value: string) {
    this._comments = value;
  }
  get speakerName(): string {
    return this._speakerName;
  }
  set speakerName(value: string) {
    this._speakerName = value;
  }
  get domain(): string {
    return this._domain;
  }
  set domain(value: string) {
    this._domain = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2SDescription.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2SDescription.AsObject {
    return {
      language: this.language,
      speakerSex: this.speakerSex,
      pipelineOwner: this.pipelineOwner,
      comments: this.comments,
      speakerName: this.speakerName,
      domain: this.domain
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2SDescription.AsProtobufJSON {
    return {
      language: this.language,
      speakerSex: this.speakerSex,
      pipelineOwner: this.pipelineOwner,
      comments: this.comments,
      speakerName: this.speakerName,
      domain: this.domain
    };
  }
}
export module T2SDescription {
  /**
   * Standard JavaScript object representation for T2SDescription
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class T2SInference implements GrpcMessage {
  static id = 'ondewo.t2s.T2SInference';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2SInference();
    T2SInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2SInference) {
    _instance.type = _instance.type || '';
    _instance.compositeInference = _instance.compositeInference || undefined;
    _instance.singleInference = _instance.singleInference || undefined;
    _instance.caching = _instance.caching || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2SInference,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readString();
          break;
        case 2:
          _instance.compositeInference = new CompositeInference();
          _reader.readMessage(
            _instance.compositeInference,
            CompositeInference.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.singleInference = new SingleInference();
          _reader.readMessage(
            _instance.singleInference,
            SingleInference.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.caching = new Caching();
          _reader.readMessage(
            _instance.caching,
            Caching.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    T2SInference.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2SInference,
    _writer: BinaryWriter
  ) {
    if (_instance.type) {
      _writer.writeString(1, _instance.type);
    }
    if (_instance.compositeInference) {
      _writer.writeMessage(
        2,
        _instance.compositeInference as any,
        CompositeInference.serializeBinaryToWriter
      );
    }
    if (_instance.singleInference) {
      _writer.writeMessage(
        3,
        _instance.singleInference as any,
        SingleInference.serializeBinaryToWriter
      );
    }
    if (_instance.caching) {
      _writer.writeMessage(
        4,
        _instance.caching as any,
        Caching.serializeBinaryToWriter
      );
    }
  }

  private _type: string;
  private _compositeInference?: CompositeInference;
  private _singleInference?: SingleInference;
  private _caching?: Caching;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2SInference to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2SInference.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.compositeInference = _value.compositeInference
      ? new CompositeInference(_value.compositeInference)
      : undefined;
    this.singleInference = _value.singleInference
      ? new SingleInference(_value.singleInference)
      : undefined;
    this.caching = _value.caching ? new Caching(_value.caching) : undefined;
    T2SInference.refineValues(this);
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get compositeInference(): CompositeInference | undefined {
    return this._compositeInference;
  }
  set compositeInference(value: CompositeInference | undefined) {
    this._compositeInference = value;
  }
  get singleInference(): SingleInference | undefined {
    return this._singleInference;
  }
  set singleInference(value: SingleInference | undefined) {
    this._singleInference = value;
  }
  get caching(): Caching | undefined {
    return this._caching;
  }
  set caching(value: Caching | undefined) {
    this._caching = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2SInference.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2SInference.AsObject {
    return {
      type: this.type,
      compositeInference: this.compositeInference
        ? this.compositeInference.toObject()
        : undefined,
      singleInference: this.singleInference
        ? this.singleInference.toObject()
        : undefined,
      caching: this.caching ? this.caching.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2SInference.AsProtobufJSON {
    return {
      type: this.type,
      compositeInference: this.compositeInference
        ? this.compositeInference.toProtobufJSON(options)
        : null,
      singleInference: this.singleInference
        ? this.singleInference.toProtobufJSON(options)
        : null,
      caching: this.caching ? this.caching.toProtobufJSON(options) : null
    };
  }
}
export module T2SInference {
  /**
   * Standard JavaScript object representation for T2SInference
   */
  export interface AsObject {
    type: string;
    compositeInference?: CompositeInference.AsObject;
    singleInference?: SingleInference.AsObject;
    caching?: Caching.AsObject;
  }

  /**
   * Protobuf JSON representation for T2SInference
   */
  export interface AsProtobufJSON {
    type: string;
    compositeInference: CompositeInference.AsProtobufJSON | null;
    singleInference: SingleInference.AsProtobufJSON | null;
    caching: Caching.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.t2s.CompositeInference
 */
export class CompositeInference implements GrpcMessage {
  static id = 'ondewo.t2s.CompositeInference';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CompositeInference();
    CompositeInference.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CompositeInference) {
    _instance.text2mel = _instance.text2mel || undefined;
    _instance.mel2audio = _instance.mel2audio || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CompositeInference,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.text2mel = new Text2Mel();
          _reader.readMessage(
            _instance.text2mel,
            Text2Mel.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.mel2audio = new Mel2Audio();
          _reader.readMessage(
            _instance.mel2audio,
            Mel2Audio.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CompositeInference.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CompositeInference,
    _writer: BinaryWriter
  ) {
    if (_instance.text2mel) {
      _writer.writeMessage(
        1,
        _instance.text2mel as any,
        Text2Mel.serializeBinaryToWriter
      );
    }
    if (_instance.mel2audio) {
      _writer.writeMessage(
        2,
        _instance.mel2audio as any,
        Mel2Audio.serializeBinaryToWriter
      );
    }
  }

  private _text2mel?: Text2Mel;
  private _mel2audio?: Mel2Audio;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CompositeInference to deeply clone from
   */
  constructor(_value?: RecursivePartial<CompositeInference.AsObject>) {
    _value = _value || {};
    this.text2mel = _value.text2mel ? new Text2Mel(_value.text2mel) : undefined;
    this.mel2audio = _value.mel2audio
      ? new Mel2Audio(_value.mel2audio)
      : undefined;
    CompositeInference.refineValues(this);
  }
  get text2mel(): Text2Mel | undefined {
    return this._text2mel;
  }
  set text2mel(value: Text2Mel | undefined) {
    this._text2mel = value;
  }
  get mel2audio(): Mel2Audio | undefined {
    return this._mel2audio;
  }
  set mel2audio(value: Mel2Audio | undefined) {
    this._mel2audio = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CompositeInference.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CompositeInference.AsObject {
    return {
      text2mel: this.text2mel ? this.text2mel.toObject() : undefined,
      mel2audio: this.mel2audio ? this.mel2audio.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CompositeInference.AsProtobufJSON {
    return {
      text2mel: this.text2mel ? this.text2mel.toProtobufJSON(options) : null,
      mel2audio: this.mel2audio ? this.mel2audio.toProtobufJSON(options) : null
    };
  }
}
export module CompositeInference {
  /**
   * Standard JavaScript object representation for CompositeInference
   */
  export interface AsObject {
    text2mel?: Text2Mel.AsObject;
    mel2audio?: Mel2Audio.AsObject;
  }

  /**
   * Protobuf JSON representation for CompositeInference
   */
  export interface AsProtobufJSON {
    text2mel: Text2Mel.AsProtobufJSON | null;
    mel2audio: Mel2Audio.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.t2s.SingleInference
 */
export class SingleInference implements GrpcMessage {
  static id = 'ondewo.t2s.SingleInference';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SingleInference();
    SingleInference.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SingleInference) {
    _instance.text2audio = _instance.text2audio || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SingleInference,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.text2audio = new Text2Audio();
          _reader.readMessage(
            _instance.text2audio,
            Text2Audio.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SingleInference.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SingleInference,
    _writer: BinaryWriter
  ) {
    if (_instance.text2audio) {
      _writer.writeMessage(
        1,
        _instance.text2audio as any,
        Text2Audio.serializeBinaryToWriter
      );
    }
  }

  private _text2audio?: Text2Audio;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SingleInference to deeply clone from
   */
  constructor(_value?: RecursivePartial<SingleInference.AsObject>) {
    _value = _value || {};
    this.text2audio = _value.text2audio
      ? new Text2Audio(_value.text2audio)
      : undefined;
    SingleInference.refineValues(this);
  }
  get text2audio(): Text2Audio | undefined {
    return this._text2audio;
  }
  set text2audio(value: Text2Audio | undefined) {
    this._text2audio = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SingleInference.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SingleInference.AsObject {
    return {
      text2audio: this.text2audio ? this.text2audio.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SingleInference.AsProtobufJSON {
    return {
      text2audio: this.text2audio
        ? this.text2audio.toProtobufJSON(options)
        : null
    };
  }
}
export module SingleInference {
  /**
   * Standard JavaScript object representation for SingleInference
   */
  export interface AsObject {
    text2audio?: Text2Audio.AsObject;
  }

  /**
   * Protobuf JSON representation for SingleInference
   */
  export interface AsProtobufJSON {
    text2audio: Text2Audio.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.t2s.Text2Mel
 */
export class Text2Mel implements GrpcMessage {
  static id = 'ondewo.t2s.Text2Mel';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Text2Mel();
    Text2Mel.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Text2Mel) {
    _instance.type = _instance.type || '';
    _instance.glowTts = _instance.glowTts || undefined;
    _instance.glowTtsTriton = _instance.glowTtsTriton || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Text2Mel,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readString();
          break;
        case 2:
          _instance.glowTts = new GlowTTS();
          _reader.readMessage(
            _instance.glowTts,
            GlowTTS.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.glowTtsTriton = new GlowTTSTriton();
          _reader.readMessage(
            _instance.glowTtsTriton,
            GlowTTSTriton.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Text2Mel.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Text2Mel, _writer: BinaryWriter) {
    if (_instance.type) {
      _writer.writeString(1, _instance.type);
    }
    if (_instance.glowTts) {
      _writer.writeMessage(
        2,
        _instance.glowTts as any,
        GlowTTS.serializeBinaryToWriter
      );
    }
    if (_instance.glowTtsTriton) {
      _writer.writeMessage(
        3,
        _instance.glowTtsTriton as any,
        GlowTTSTriton.serializeBinaryToWriter
      );
    }
  }

  private _type: string;
  private _glowTts?: GlowTTS;
  private _glowTtsTriton?: GlowTTSTriton;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Text2Mel to deeply clone from
   */
  constructor(_value?: RecursivePartial<Text2Mel.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.glowTts = _value.glowTts ? new GlowTTS(_value.glowTts) : undefined;
    this.glowTtsTriton = _value.glowTtsTriton
      ? new GlowTTSTriton(_value.glowTtsTriton)
      : undefined;
    Text2Mel.refineValues(this);
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get glowTts(): GlowTTS | undefined {
    return this._glowTts;
  }
  set glowTts(value: GlowTTS | undefined) {
    this._glowTts = value;
  }
  get glowTtsTriton(): GlowTTSTriton | undefined {
    return this._glowTtsTriton;
  }
  set glowTtsTriton(value: GlowTTSTriton | undefined) {
    this._glowTtsTriton = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Text2Mel.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Text2Mel.AsObject {
    return {
      type: this.type,
      glowTts: this.glowTts ? this.glowTts.toObject() : undefined,
      glowTtsTriton: this.glowTtsTriton
        ? this.glowTtsTriton.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Text2Mel.AsProtobufJSON {
    return {
      type: this.type,
      glowTts: this.glowTts ? this.glowTts.toProtobufJSON(options) : null,
      glowTtsTriton: this.glowTtsTriton
        ? this.glowTtsTriton.toProtobufJSON(options)
        : null
    };
  }
}
export module Text2Mel {
  /**
   * Standard JavaScript object representation for Text2Mel
   */
  export interface AsObject {
    type: string;
    glowTts?: GlowTTS.AsObject;
    glowTtsTriton?: GlowTTSTriton.AsObject;
  }

  /**
   * Protobuf JSON representation for Text2Mel
   */
  export interface AsProtobufJSON {
    type: string;
    glowTts: GlowTTS.AsProtobufJSON | null;
    glowTtsTriton: GlowTTSTriton.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.t2s.Text2Audio
 */
export class Text2Audio implements GrpcMessage {
  static id = 'ondewo.t2s.Text2Audio';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Text2Audio();
    Text2Audio.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Text2Audio) {
    _instance.type = _instance.type || '';
    _instance.vits = _instance.vits || undefined;
    _instance.vitsTriton = _instance.vitsTriton || undefined;
    _instance.t2sCloudServiceElevenlabs =
      _instance.t2sCloudServiceElevenlabs || undefined;
    _instance.t2sCloudServiceAmazon =
      _instance.t2sCloudServiceAmazon || undefined;
    _instance.t2sCloudServiceGoogle =
      _instance.t2sCloudServiceGoogle || undefined;
    _instance.t2sCloudServiceMicrosoft =
      _instance.t2sCloudServiceMicrosoft || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Text2Audio,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readString();
          break;
        case 2:
          _instance.vits = new Vits();
          _reader.readMessage(_instance.vits, Vits.deserializeBinaryFromReader);
          break;
        case 3:
          _instance.vitsTriton = new VitsTriton();
          _reader.readMessage(
            _instance.vitsTriton,
            VitsTriton.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.t2sCloudServiceElevenlabs = new T2sCloudServiceElevenLabs();
          _reader.readMessage(
            _instance.t2sCloudServiceElevenlabs,
            T2sCloudServiceElevenLabs.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.t2sCloudServiceAmazon = new T2sCloudServiceAmazon();
          _reader.readMessage(
            _instance.t2sCloudServiceAmazon,
            T2sCloudServiceAmazon.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.t2sCloudServiceGoogle = new T2sCloudServiceGoogle();
          _reader.readMessage(
            _instance.t2sCloudServiceGoogle,
            T2sCloudServiceGoogle.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.t2sCloudServiceMicrosoft = new T2sCloudServiceMicrosoft();
          _reader.readMessage(
            _instance.t2sCloudServiceMicrosoft,
            T2sCloudServiceMicrosoft.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Text2Audio.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Text2Audio, _writer: BinaryWriter) {
    if (_instance.type) {
      _writer.writeString(1, _instance.type);
    }
    if (_instance.vits) {
      _writer.writeMessage(
        2,
        _instance.vits as any,
        Vits.serializeBinaryToWriter
      );
    }
    if (_instance.vitsTriton) {
      _writer.writeMessage(
        3,
        _instance.vitsTriton as any,
        VitsTriton.serializeBinaryToWriter
      );
    }
    if (_instance.t2sCloudServiceElevenlabs) {
      _writer.writeMessage(
        4,
        _instance.t2sCloudServiceElevenlabs as any,
        T2sCloudServiceElevenLabs.serializeBinaryToWriter
      );
    }
    if (_instance.t2sCloudServiceAmazon) {
      _writer.writeMessage(
        5,
        _instance.t2sCloudServiceAmazon as any,
        T2sCloudServiceAmazon.serializeBinaryToWriter
      );
    }
    if (_instance.t2sCloudServiceGoogle) {
      _writer.writeMessage(
        6,
        _instance.t2sCloudServiceGoogle as any,
        T2sCloudServiceGoogle.serializeBinaryToWriter
      );
    }
    if (_instance.t2sCloudServiceMicrosoft) {
      _writer.writeMessage(
        7,
        _instance.t2sCloudServiceMicrosoft as any,
        T2sCloudServiceMicrosoft.serializeBinaryToWriter
      );
    }
  }

  private _type: string;
  private _vits?: Vits;
  private _vitsTriton?: VitsTriton;
  private _t2sCloudServiceElevenlabs?: T2sCloudServiceElevenLabs;
  private _t2sCloudServiceAmazon?: T2sCloudServiceAmazon;
  private _t2sCloudServiceGoogle?: T2sCloudServiceGoogle;
  private _t2sCloudServiceMicrosoft?: T2sCloudServiceMicrosoft;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Text2Audio to deeply clone from
   */
  constructor(_value?: RecursivePartial<Text2Audio.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.vits = _value.vits ? new Vits(_value.vits) : undefined;
    this.vitsTriton = _value.vitsTriton
      ? new VitsTriton(_value.vitsTriton)
      : undefined;
    this.t2sCloudServiceElevenlabs = _value.t2sCloudServiceElevenlabs
      ? new T2sCloudServiceElevenLabs(_value.t2sCloudServiceElevenlabs)
      : undefined;
    this.t2sCloudServiceAmazon = _value.t2sCloudServiceAmazon
      ? new T2sCloudServiceAmazon(_value.t2sCloudServiceAmazon)
      : undefined;
    this.t2sCloudServiceGoogle = _value.t2sCloudServiceGoogle
      ? new T2sCloudServiceGoogle(_value.t2sCloudServiceGoogle)
      : undefined;
    this.t2sCloudServiceMicrosoft = _value.t2sCloudServiceMicrosoft
      ? new T2sCloudServiceMicrosoft(_value.t2sCloudServiceMicrosoft)
      : undefined;
    Text2Audio.refineValues(this);
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get vits(): Vits | undefined {
    return this._vits;
  }
  set vits(value: Vits | undefined) {
    this._vits = value;
  }
  get vitsTriton(): VitsTriton | undefined {
    return this._vitsTriton;
  }
  set vitsTriton(value: VitsTriton | undefined) {
    this._vitsTriton = value;
  }
  get t2sCloudServiceElevenlabs(): T2sCloudServiceElevenLabs | undefined {
    return this._t2sCloudServiceElevenlabs;
  }
  set t2sCloudServiceElevenlabs(value: T2sCloudServiceElevenLabs | undefined) {
    this._t2sCloudServiceElevenlabs = value;
  }
  get t2sCloudServiceAmazon(): T2sCloudServiceAmazon | undefined {
    return this._t2sCloudServiceAmazon;
  }
  set t2sCloudServiceAmazon(value: T2sCloudServiceAmazon | undefined) {
    this._t2sCloudServiceAmazon = value;
  }
  get t2sCloudServiceGoogle(): T2sCloudServiceGoogle | undefined {
    return this._t2sCloudServiceGoogle;
  }
  set t2sCloudServiceGoogle(value: T2sCloudServiceGoogle | undefined) {
    this._t2sCloudServiceGoogle = value;
  }
  get t2sCloudServiceMicrosoft(): T2sCloudServiceMicrosoft | undefined {
    return this._t2sCloudServiceMicrosoft;
  }
  set t2sCloudServiceMicrosoft(value: T2sCloudServiceMicrosoft | undefined) {
    this._t2sCloudServiceMicrosoft = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Text2Audio.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Text2Audio.AsObject {
    return {
      type: this.type,
      vits: this.vits ? this.vits.toObject() : undefined,
      vitsTriton: this.vitsTriton ? this.vitsTriton.toObject() : undefined,
      t2sCloudServiceElevenlabs: this.t2sCloudServiceElevenlabs
        ? this.t2sCloudServiceElevenlabs.toObject()
        : undefined,
      t2sCloudServiceAmazon: this.t2sCloudServiceAmazon
        ? this.t2sCloudServiceAmazon.toObject()
        : undefined,
      t2sCloudServiceGoogle: this.t2sCloudServiceGoogle
        ? this.t2sCloudServiceGoogle.toObject()
        : undefined,
      t2sCloudServiceMicrosoft: this.t2sCloudServiceMicrosoft
        ? this.t2sCloudServiceMicrosoft.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Text2Audio.AsProtobufJSON {
    return {
      type: this.type,
      vits: this.vits ? this.vits.toProtobufJSON(options) : null,
      vitsTriton: this.vitsTriton
        ? this.vitsTriton.toProtobufJSON(options)
        : null,
      t2sCloudServiceElevenlabs: this.t2sCloudServiceElevenlabs
        ? this.t2sCloudServiceElevenlabs.toProtobufJSON(options)
        : null,
      t2sCloudServiceAmazon: this.t2sCloudServiceAmazon
        ? this.t2sCloudServiceAmazon.toProtobufJSON(options)
        : null,
      t2sCloudServiceGoogle: this.t2sCloudServiceGoogle
        ? this.t2sCloudServiceGoogle.toProtobufJSON(options)
        : null,
      t2sCloudServiceMicrosoft: this.t2sCloudServiceMicrosoft
        ? this.t2sCloudServiceMicrosoft.toProtobufJSON(options)
        : null
    };
  }
}
export module Text2Audio {
  /**
   * Standard JavaScript object representation for Text2Audio
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class GlowTTS implements GrpcMessage {
  static id = 'ondewo.t2s.GlowTTS';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GlowTTS();
    GlowTTS.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GlowTTS) {
    _instance.batchSize = _instance.batchSize || '0';
    _instance.useGpu = _instance.useGpu || false;
    _instance.lengthScale = _instance.lengthScale || 0;
    _instance.noiseScale = _instance.noiseScale || 0;
    _instance.path = _instance.path || '';
    _instance.cleaners = _instance.cleaners || [];
    _instance.paramConfigPath = _instance.paramConfigPath || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GlowTTS,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.batchSize = _reader.readInt64String();
          break;
        case 2:
          _instance.useGpu = _reader.readBool();
          break;
        case 3:
          _instance.lengthScale = _reader.readFloat();
          break;
        case 4:
          _instance.noiseScale = _reader.readFloat();
          break;
        case 5:
          _instance.path = _reader.readString();
          break;
        case 6:
          (_instance.cleaners = _instance.cleaners || []).push(
            _reader.readString()
          );
          break;
        case 7:
          _instance.paramConfigPath = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GlowTTS.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: GlowTTS, _writer: BinaryWriter) {
    if (_instance.batchSize) {
      _writer.writeInt64String(1, _instance.batchSize);
    }
    if (_instance.useGpu) {
      _writer.writeBool(2, _instance.useGpu);
    }
    if (_instance.lengthScale) {
      _writer.writeFloat(3, _instance.lengthScale);
    }
    if (_instance.noiseScale) {
      _writer.writeFloat(4, _instance.noiseScale);
    }
    if (_instance.path) {
      _writer.writeString(5, _instance.path);
    }
    if (_instance.cleaners && _instance.cleaners.length) {
      _writer.writeRepeatedString(6, _instance.cleaners);
    }
    if (_instance.paramConfigPath) {
      _writer.writeString(7, _instance.paramConfigPath);
    }
  }

  private _batchSize: string;
  private _useGpu: boolean;
  private _lengthScale: number;
  private _noiseScale: number;
  private _path: string;
  private _cleaners: string[];
  private _paramConfigPath: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GlowTTS to deeply clone from
   */
  constructor(_value?: RecursivePartial<GlowTTS.AsObject>) {
    _value = _value || {};
    this.batchSize = _value.batchSize;
    this.useGpu = _value.useGpu;
    this.lengthScale = _value.lengthScale;
    this.noiseScale = _value.noiseScale;
    this.path = _value.path;
    this.cleaners = (_value.cleaners || []).slice();
    this.paramConfigPath = _value.paramConfigPath;
    GlowTTS.refineValues(this);
  }
  get batchSize(): string {
    return this._batchSize;
  }
  set batchSize(value: string) {
    this._batchSize = value;
  }
  get useGpu(): boolean {
    return this._useGpu;
  }
  set useGpu(value: boolean) {
    this._useGpu = value;
  }
  get lengthScale(): number {
    return this._lengthScale;
  }
  set lengthScale(value: number) {
    this._lengthScale = value;
  }
  get noiseScale(): number {
    return this._noiseScale;
  }
  set noiseScale(value: number) {
    this._noiseScale = value;
  }
  get path(): string {
    return this._path;
  }
  set path(value: string) {
    this._path = value;
  }
  get cleaners(): string[] {
    return this._cleaners;
  }
  set cleaners(value: string[]) {
    this._cleaners = value;
  }
  get paramConfigPath(): string {
    return this._paramConfigPath;
  }
  set paramConfigPath(value: string) {
    this._paramConfigPath = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GlowTTS.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GlowTTS.AsObject {
    return {
      batchSize: this.batchSize,
      useGpu: this.useGpu,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      path: this.path,
      cleaners: (this.cleaners || []).slice(),
      paramConfigPath: this.paramConfigPath
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GlowTTS.AsProtobufJSON {
    return {
      batchSize: this.batchSize,
      useGpu: this.useGpu,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      path: this.path,
      cleaners: (this.cleaners || []).slice(),
      paramConfigPath: this.paramConfigPath
    };
  }
}
export module GlowTTS {
  /**
   * Standard JavaScript object representation for GlowTTS
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class GlowTTSTriton implements GrpcMessage {
  static id = 'ondewo.t2s.GlowTTSTriton';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GlowTTSTriton();
    GlowTTSTriton.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GlowTTSTriton) {
    _instance.batchSize = _instance.batchSize || '0';
    _instance.lengthScale = _instance.lengthScale || 0;
    _instance.noiseScale = _instance.noiseScale || 0;
    _instance.cleaners = _instance.cleaners || [];
    _instance.maxTextLength = _instance.maxTextLength || '0';
    _instance.paramConfigPath = _instance.paramConfigPath || '';
    _instance.tritonModelName = _instance.tritonModelName || '';
    _instance.tritonServerHost = _instance.tritonServerHost || '';
    _instance.tritonServerPort = _instance.tritonServerPort || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GlowTTSTriton,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.batchSize = _reader.readInt64String();
          break;
        case 2:
          _instance.lengthScale = _reader.readFloat();
          break;
        case 3:
          _instance.noiseScale = _reader.readFloat();
          break;
        case 4:
          (_instance.cleaners = _instance.cleaners || []).push(
            _reader.readString()
          );
          break;
        case 5:
          _instance.maxTextLength = _reader.readInt64String();
          break;
        case 6:
          _instance.paramConfigPath = _reader.readString();
          break;
        case 7:
          _instance.tritonModelName = _reader.readString();
          break;
        case 8:
          _instance.tritonServerHost = _reader.readString();
          break;
        case 9:
          _instance.tritonServerPort = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GlowTTSTriton.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GlowTTSTriton,
    _writer: BinaryWriter
  ) {
    if (_instance.batchSize) {
      _writer.writeInt64String(1, _instance.batchSize);
    }
    if (_instance.lengthScale) {
      _writer.writeFloat(2, _instance.lengthScale);
    }
    if (_instance.noiseScale) {
      _writer.writeFloat(3, _instance.noiseScale);
    }
    if (_instance.cleaners && _instance.cleaners.length) {
      _writer.writeRepeatedString(4, _instance.cleaners);
    }
    if (_instance.maxTextLength) {
      _writer.writeInt64String(5, _instance.maxTextLength);
    }
    if (_instance.paramConfigPath) {
      _writer.writeString(6, _instance.paramConfigPath);
    }
    if (_instance.tritonModelName) {
      _writer.writeString(7, _instance.tritonModelName);
    }
    if (_instance.tritonServerHost) {
      _writer.writeString(8, _instance.tritonServerHost);
    }
    if (_instance.tritonServerPort) {
      _writer.writeInt64String(9, _instance.tritonServerPort);
    }
  }

  private _batchSize: string;
  private _lengthScale: number;
  private _noiseScale: number;
  private _cleaners: string[];
  private _maxTextLength: string;
  private _paramConfigPath: string;
  private _tritonModelName: string;
  private _tritonServerHost: string;
  private _tritonServerPort: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GlowTTSTriton to deeply clone from
   */
  constructor(_value?: RecursivePartial<GlowTTSTriton.AsObject>) {
    _value = _value || {};
    this.batchSize = _value.batchSize;
    this.lengthScale = _value.lengthScale;
    this.noiseScale = _value.noiseScale;
    this.cleaners = (_value.cleaners || []).slice();
    this.maxTextLength = _value.maxTextLength;
    this.paramConfigPath = _value.paramConfigPath;
    this.tritonModelName = _value.tritonModelName;
    this.tritonServerHost = _value.tritonServerHost;
    this.tritonServerPort = _value.tritonServerPort;
    GlowTTSTriton.refineValues(this);
  }
  get batchSize(): string {
    return this._batchSize;
  }
  set batchSize(value: string) {
    this._batchSize = value;
  }
  get lengthScale(): number {
    return this._lengthScale;
  }
  set lengthScale(value: number) {
    this._lengthScale = value;
  }
  get noiseScale(): number {
    return this._noiseScale;
  }
  set noiseScale(value: number) {
    this._noiseScale = value;
  }
  get cleaners(): string[] {
    return this._cleaners;
  }
  set cleaners(value: string[]) {
    this._cleaners = value;
  }
  get maxTextLength(): string {
    return this._maxTextLength;
  }
  set maxTextLength(value: string) {
    this._maxTextLength = value;
  }
  get paramConfigPath(): string {
    return this._paramConfigPath;
  }
  set paramConfigPath(value: string) {
    this._paramConfigPath = value;
  }
  get tritonModelName(): string {
    return this._tritonModelName;
  }
  set tritonModelName(value: string) {
    this._tritonModelName = value;
  }
  get tritonServerHost(): string {
    return this._tritonServerHost;
  }
  set tritonServerHost(value: string) {
    this._tritonServerHost = value;
  }
  get tritonServerPort(): string {
    return this._tritonServerPort;
  }
  set tritonServerPort(value: string) {
    this._tritonServerPort = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GlowTTSTriton.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GlowTTSTriton.AsObject {
    return {
      batchSize: this.batchSize,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      cleaners: (this.cleaners || []).slice(),
      maxTextLength: this.maxTextLength,
      paramConfigPath: this.paramConfigPath,
      tritonModelName: this.tritonModelName,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GlowTTSTriton.AsProtobufJSON {
    return {
      batchSize: this.batchSize,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      cleaners: (this.cleaners || []).slice(),
      maxTextLength: this.maxTextLength,
      paramConfigPath: this.paramConfigPath,
      tritonModelName: this.tritonModelName,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }
}
export module GlowTTSTriton {
  /**
   * Standard JavaScript object representation for GlowTTSTriton
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class Vits implements GrpcMessage {
  static id = 'ondewo.t2s.Vits';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Vits();
    Vits.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Vits) {
    _instance.batchSize = _instance.batchSize || '0';
    _instance.useGpu = _instance.useGpu || false;
    _instance.lengthScale = _instance.lengthScale || 0;
    _instance.noiseScale = _instance.noiseScale || 0;
    _instance.path = _instance.path || '';
    _instance.cleaners = _instance.cleaners || [];
    _instance.paramConfigPath = _instance.paramConfigPath || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Vits, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.batchSize = _reader.readInt64String();
          break;
        case 2:
          _instance.useGpu = _reader.readBool();
          break;
        case 3:
          _instance.lengthScale = _reader.readFloat();
          break;
        case 4:
          _instance.noiseScale = _reader.readFloat();
          break;
        case 5:
          _instance.path = _reader.readString();
          break;
        case 6:
          (_instance.cleaners = _instance.cleaners || []).push(
            _reader.readString()
          );
          break;
        case 7:
          _instance.paramConfigPath = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Vits.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Vits, _writer: BinaryWriter) {
    if (_instance.batchSize) {
      _writer.writeInt64String(1, _instance.batchSize);
    }
    if (_instance.useGpu) {
      _writer.writeBool(2, _instance.useGpu);
    }
    if (_instance.lengthScale) {
      _writer.writeFloat(3, _instance.lengthScale);
    }
    if (_instance.noiseScale) {
      _writer.writeFloat(4, _instance.noiseScale);
    }
    if (_instance.path) {
      _writer.writeString(5, _instance.path);
    }
    if (_instance.cleaners && _instance.cleaners.length) {
      _writer.writeRepeatedString(6, _instance.cleaners);
    }
    if (_instance.paramConfigPath) {
      _writer.writeString(7, _instance.paramConfigPath);
    }
  }

  private _batchSize: string;
  private _useGpu: boolean;
  private _lengthScale: number;
  private _noiseScale: number;
  private _path: string;
  private _cleaners: string[];
  private _paramConfigPath: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Vits to deeply clone from
   */
  constructor(_value?: RecursivePartial<Vits.AsObject>) {
    _value = _value || {};
    this.batchSize = _value.batchSize;
    this.useGpu = _value.useGpu;
    this.lengthScale = _value.lengthScale;
    this.noiseScale = _value.noiseScale;
    this.path = _value.path;
    this.cleaners = (_value.cleaners || []).slice();
    this.paramConfigPath = _value.paramConfigPath;
    Vits.refineValues(this);
  }
  get batchSize(): string {
    return this._batchSize;
  }
  set batchSize(value: string) {
    this._batchSize = value;
  }
  get useGpu(): boolean {
    return this._useGpu;
  }
  set useGpu(value: boolean) {
    this._useGpu = value;
  }
  get lengthScale(): number {
    return this._lengthScale;
  }
  set lengthScale(value: number) {
    this._lengthScale = value;
  }
  get noiseScale(): number {
    return this._noiseScale;
  }
  set noiseScale(value: number) {
    this._noiseScale = value;
  }
  get path(): string {
    return this._path;
  }
  set path(value: string) {
    this._path = value;
  }
  get cleaners(): string[] {
    return this._cleaners;
  }
  set cleaners(value: string[]) {
    this._cleaners = value;
  }
  get paramConfigPath(): string {
    return this._paramConfigPath;
  }
  set paramConfigPath(value: string) {
    this._paramConfigPath = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Vits.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Vits.AsObject {
    return {
      batchSize: this.batchSize,
      useGpu: this.useGpu,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      path: this.path,
      cleaners: (this.cleaners || []).slice(),
      paramConfigPath: this.paramConfigPath
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Vits.AsProtobufJSON {
    return {
      batchSize: this.batchSize,
      useGpu: this.useGpu,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      path: this.path,
      cleaners: (this.cleaners || []).slice(),
      paramConfigPath: this.paramConfigPath
    };
  }
}
export module Vits {
  /**
   * Standard JavaScript object representation for Vits
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class VitsTriton implements GrpcMessage {
  static id = 'ondewo.t2s.VitsTriton';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VitsTriton();
    VitsTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VitsTriton) {
    _instance.batchSize = _instance.batchSize || '0';
    _instance.lengthScale = _instance.lengthScale || 0;
    _instance.noiseScale = _instance.noiseScale || 0;
    _instance.cleaners = _instance.cleaners || [];
    _instance.maxTextLength = _instance.maxTextLength || '0';
    _instance.paramConfigPath = _instance.paramConfigPath || '';
    _instance.tritonModelName = _instance.tritonModelName || '';
    _instance.tritonServerHost = _instance.tritonServerHost || '';
    _instance.tritonServerPort = _instance.tritonServerPort || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VitsTriton,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.batchSize = _reader.readInt64String();
          break;
        case 2:
          _instance.lengthScale = _reader.readFloat();
          break;
        case 3:
          _instance.noiseScale = _reader.readFloat();
          break;
        case 4:
          (_instance.cleaners = _instance.cleaners || []).push(
            _reader.readString()
          );
          break;
        case 5:
          _instance.maxTextLength = _reader.readInt64String();
          break;
        case 6:
          _instance.paramConfigPath = _reader.readString();
          break;
        case 7:
          _instance.tritonModelName = _reader.readString();
          break;
        case 8:
          _instance.tritonServerHost = _reader.readString();
          break;
        case 9:
          _instance.tritonServerPort = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    VitsTriton.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: VitsTriton, _writer: BinaryWriter) {
    if (_instance.batchSize) {
      _writer.writeInt64String(1, _instance.batchSize);
    }
    if (_instance.lengthScale) {
      _writer.writeFloat(2, _instance.lengthScale);
    }
    if (_instance.noiseScale) {
      _writer.writeFloat(3, _instance.noiseScale);
    }
    if (_instance.cleaners && _instance.cleaners.length) {
      _writer.writeRepeatedString(4, _instance.cleaners);
    }
    if (_instance.maxTextLength) {
      _writer.writeInt64String(5, _instance.maxTextLength);
    }
    if (_instance.paramConfigPath) {
      _writer.writeString(6, _instance.paramConfigPath);
    }
    if (_instance.tritonModelName) {
      _writer.writeString(7, _instance.tritonModelName);
    }
    if (_instance.tritonServerHost) {
      _writer.writeString(8, _instance.tritonServerHost);
    }
    if (_instance.tritonServerPort) {
      _writer.writeInt64String(9, _instance.tritonServerPort);
    }
  }

  private _batchSize: string;
  private _lengthScale: number;
  private _noiseScale: number;
  private _cleaners: string[];
  private _maxTextLength: string;
  private _paramConfigPath: string;
  private _tritonModelName: string;
  private _tritonServerHost: string;
  private _tritonServerPort: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VitsTriton to deeply clone from
   */
  constructor(_value?: RecursivePartial<VitsTriton.AsObject>) {
    _value = _value || {};
    this.batchSize = _value.batchSize;
    this.lengthScale = _value.lengthScale;
    this.noiseScale = _value.noiseScale;
    this.cleaners = (_value.cleaners || []).slice();
    this.maxTextLength = _value.maxTextLength;
    this.paramConfigPath = _value.paramConfigPath;
    this.tritonModelName = _value.tritonModelName;
    this.tritonServerHost = _value.tritonServerHost;
    this.tritonServerPort = _value.tritonServerPort;
    VitsTriton.refineValues(this);
  }
  get batchSize(): string {
    return this._batchSize;
  }
  set batchSize(value: string) {
    this._batchSize = value;
  }
  get lengthScale(): number {
    return this._lengthScale;
  }
  set lengthScale(value: number) {
    this._lengthScale = value;
  }
  get noiseScale(): number {
    return this._noiseScale;
  }
  set noiseScale(value: number) {
    this._noiseScale = value;
  }
  get cleaners(): string[] {
    return this._cleaners;
  }
  set cleaners(value: string[]) {
    this._cleaners = value;
  }
  get maxTextLength(): string {
    return this._maxTextLength;
  }
  set maxTextLength(value: string) {
    this._maxTextLength = value;
  }
  get paramConfigPath(): string {
    return this._paramConfigPath;
  }
  set paramConfigPath(value: string) {
    this._paramConfigPath = value;
  }
  get tritonModelName(): string {
    return this._tritonModelName;
  }
  set tritonModelName(value: string) {
    this._tritonModelName = value;
  }
  get tritonServerHost(): string {
    return this._tritonServerHost;
  }
  set tritonServerHost(value: string) {
    this._tritonServerHost = value;
  }
  get tritonServerPort(): string {
    return this._tritonServerPort;
  }
  set tritonServerPort(value: string) {
    this._tritonServerPort = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VitsTriton.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VitsTriton.AsObject {
    return {
      batchSize: this.batchSize,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      cleaners: (this.cleaners || []).slice(),
      maxTextLength: this.maxTextLength,
      paramConfigPath: this.paramConfigPath,
      tritonModelName: this.tritonModelName,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): VitsTriton.AsProtobufJSON {
    return {
      batchSize: this.batchSize,
      lengthScale: this.lengthScale,
      noiseScale: this.noiseScale,
      cleaners: (this.cleaners || []).slice(),
      maxTextLength: this.maxTextLength,
      paramConfigPath: this.paramConfigPath,
      tritonModelName: this.tritonModelName,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }
}
export module VitsTriton {
  /**
   * Standard JavaScript object representation for VitsTriton
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class T2sCloudServiceElevenLabs implements GrpcMessage {
  static id = 'ondewo.t2s.T2sCloudServiceElevenLabs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sCloudServiceElevenLabs();
    T2sCloudServiceElevenLabs.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sCloudServiceElevenLabs) {
    _instance.languageCode = _instance.languageCode || '';
    _instance.modelId = _instance.modelId || '';
    _instance.voiceId = _instance.voiceId || '';
    _instance.voiceSettings = _instance.voiceSettings || undefined;
    _instance.applyTextNormalization = _instance.applyTextNormalization || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sCloudServiceElevenLabs,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.languageCode = _reader.readString();
          break;
        case 2:
          _instance.modelId = _reader.readString();
          break;
        case 3:
          _instance.voiceId = _reader.readString();
          break;
        case 4:
          _instance.voiceSettings = new VoiceSettings();
          _reader.readMessage(
            _instance.voiceSettings,
            VoiceSettings.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.applyTextNormalization = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    T2sCloudServiceElevenLabs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sCloudServiceElevenLabs,
    _writer: BinaryWriter
  ) {
    if (_instance.languageCode) {
      _writer.writeString(1, _instance.languageCode);
    }
    if (_instance.modelId) {
      _writer.writeString(2, _instance.modelId);
    }
    if (_instance.voiceId) {
      _writer.writeString(3, _instance.voiceId);
    }
    if (_instance.voiceSettings) {
      _writer.writeMessage(
        4,
        _instance.voiceSettings as any,
        VoiceSettings.serializeBinaryToWriter
      );
    }
    if (_instance.applyTextNormalization) {
      _writer.writeString(5, _instance.applyTextNormalization);
    }
  }

  private _languageCode: string;
  private _modelId: string;
  private _voiceId: string;
  private _voiceSettings?: VoiceSettings;
  private _applyTextNormalization: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sCloudServiceElevenLabs to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2sCloudServiceElevenLabs.AsObject>) {
    _value = _value || {};
    this.languageCode = _value.languageCode;
    this.modelId = _value.modelId;
    this.voiceId = _value.voiceId;
    this.voiceSettings = _value.voiceSettings
      ? new VoiceSettings(_value.voiceSettings)
      : undefined;
    this.applyTextNormalization = _value.applyTextNormalization;
    T2sCloudServiceElevenLabs.refineValues(this);
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get modelId(): string {
    return this._modelId;
  }
  set modelId(value: string) {
    this._modelId = value;
  }
  get voiceId(): string {
    return this._voiceId;
  }
  set voiceId(value: string) {
    this._voiceId = value;
  }
  get voiceSettings(): VoiceSettings | undefined {
    return this._voiceSettings;
  }
  set voiceSettings(value: VoiceSettings | undefined) {
    this._voiceSettings = value;
  }
  get applyTextNormalization(): string {
    return this._applyTextNormalization;
  }
  set applyTextNormalization(value: string) {
    this._applyTextNormalization = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sCloudServiceElevenLabs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sCloudServiceElevenLabs.AsObject {
    return {
      languageCode: this.languageCode,
      modelId: this.modelId,
      voiceId: this.voiceId,
      voiceSettings: this.voiceSettings
        ? this.voiceSettings.toObject()
        : undefined,
      applyTextNormalization: this.applyTextNormalization
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sCloudServiceElevenLabs.AsProtobufJSON {
    return {
      languageCode: this.languageCode,
      modelId: this.modelId,
      voiceId: this.voiceId,
      voiceSettings: this.voiceSettings
        ? this.voiceSettings.toProtobufJSON(options)
        : null,
      applyTextNormalization: this.applyTextNormalization
    };
  }
}
export module T2sCloudServiceElevenLabs {
  /**
   * Standard JavaScript object representation for T2sCloudServiceElevenLabs
   */
  export interface AsObject {
    languageCode: string;
    modelId: string;
    voiceId: string;
    voiceSettings?: VoiceSettings.AsObject;
    applyTextNormalization: string;
  }

  /**
   * Protobuf JSON representation for T2sCloudServiceElevenLabs
   */
  export interface AsProtobufJSON {
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
export class VoiceSettings implements GrpcMessage {
  static id = 'ondewo.t2s.VoiceSettings';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VoiceSettings();
    VoiceSettings.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VoiceSettings) {
    _instance.stability = _instance.stability || 0;
    _instance.similarityBoost = _instance.similarityBoost || 0;
    _instance.style = _instance.style || 0;
    _instance.useSpeakerBoost = _instance.useSpeakerBoost || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VoiceSettings,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.stability = _reader.readFloat();
          break;
        case 2:
          _instance.similarityBoost = _reader.readFloat();
          break;
        case 3:
          _instance.style = _reader.readFloat();
          break;
        case 4:
          _instance.useSpeakerBoost = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    VoiceSettings.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VoiceSettings,
    _writer: BinaryWriter
  ) {
    if (_instance.stability) {
      _writer.writeFloat(1, _instance.stability);
    }
    if (_instance.similarityBoost) {
      _writer.writeFloat(2, _instance.similarityBoost);
    }
    if (_instance.style) {
      _writer.writeFloat(3, _instance.style);
    }
    if (_instance.useSpeakerBoost) {
      _writer.writeBool(4, _instance.useSpeakerBoost);
    }
  }

  private _stability: number;
  private _similarityBoost: number;
  private _style: number;
  private _useSpeakerBoost: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VoiceSettings to deeply clone from
   */
  constructor(_value?: RecursivePartial<VoiceSettings.AsObject>) {
    _value = _value || {};
    this.stability = _value.stability;
    this.similarityBoost = _value.similarityBoost;
    this.style = _value.style;
    this.useSpeakerBoost = _value.useSpeakerBoost;
    VoiceSettings.refineValues(this);
  }
  get stability(): number {
    return this._stability;
  }
  set stability(value: number) {
    this._stability = value;
  }
  get similarityBoost(): number {
    return this._similarityBoost;
  }
  set similarityBoost(value: number) {
    this._similarityBoost = value;
  }
  get style(): number {
    return this._style;
  }
  set style(value: number) {
    this._style = value;
  }
  get useSpeakerBoost(): boolean {
    return this._useSpeakerBoost;
  }
  set useSpeakerBoost(value: boolean) {
    this._useSpeakerBoost = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VoiceSettings.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VoiceSettings.AsObject {
    return {
      stability: this.stability,
      similarityBoost: this.similarityBoost,
      style: this.style,
      useSpeakerBoost: this.useSpeakerBoost
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): VoiceSettings.AsProtobufJSON {
    return {
      stability: this.stability,
      similarityBoost: this.similarityBoost,
      style: this.style,
      useSpeakerBoost: this.useSpeakerBoost
    };
  }
}
export module VoiceSettings {
  /**
   * Standard JavaScript object representation for VoiceSettings
   */
  export interface AsObject {
    stability: number;
    similarityBoost: number;
    style: number;
    useSpeakerBoost: boolean;
  }

  /**
   * Protobuf JSON representation for VoiceSettings
   */
  export interface AsProtobufJSON {
    stability: number;
    similarityBoost: number;
    style: number;
    useSpeakerBoost: boolean;
  }
}

/**
 * Message implementation for ondewo.t2s.T2sCloudServiceAmazon
 */
export class T2sCloudServiceAmazon implements GrpcMessage {
  static id = 'ondewo.t2s.T2sCloudServiceAmazon';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sCloudServiceAmazon();
    T2sCloudServiceAmazon.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sCloudServiceAmazon) {
    _instance.voiceId = _instance.voiceId || '';
    _instance.modelId = _instance.modelId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sCloudServiceAmazon,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.voiceId = _reader.readString();
          break;
        case 2:
          _instance.modelId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    T2sCloudServiceAmazon.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sCloudServiceAmazon,
    _writer: BinaryWriter
  ) {
    if (_instance.voiceId) {
      _writer.writeString(1, _instance.voiceId);
    }
    if (_instance.modelId) {
      _writer.writeString(2, _instance.modelId);
    }
  }

  private _voiceId: string;
  private _modelId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sCloudServiceAmazon to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2sCloudServiceAmazon.AsObject>) {
    _value = _value || {};
    this.voiceId = _value.voiceId;
    this.modelId = _value.modelId;
    T2sCloudServiceAmazon.refineValues(this);
  }
  get voiceId(): string {
    return this._voiceId;
  }
  set voiceId(value: string) {
    this._voiceId = value;
  }
  get modelId(): string {
    return this._modelId;
  }
  set modelId(value: string) {
    this._modelId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sCloudServiceAmazon.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sCloudServiceAmazon.AsObject {
    return {
      voiceId: this.voiceId,
      modelId: this.modelId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sCloudServiceAmazon.AsProtobufJSON {
    return {
      voiceId: this.voiceId,
      modelId: this.modelId
    };
  }
}
export module T2sCloudServiceAmazon {
  /**
   * Standard JavaScript object representation for T2sCloudServiceAmazon
   */
  export interface AsObject {
    voiceId: string;
    modelId: string;
  }

  /**
   * Protobuf JSON representation for T2sCloudServiceAmazon
   */
  export interface AsProtobufJSON {
    voiceId: string;
    modelId: string;
  }
}

/**
 * Message implementation for ondewo.t2s.T2sCloudServiceGoogle
 */
export class T2sCloudServiceGoogle implements GrpcMessage {
  static id = 'ondewo.t2s.T2sCloudServiceGoogle';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sCloudServiceGoogle();
    T2sCloudServiceGoogle.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sCloudServiceGoogle) {
    _instance.voiceId = _instance.voiceId || '';
    _instance.speakingRate = _instance.speakingRate || 0;
    _instance.volumeGainDb = _instance.volumeGainDb || 0;
    _instance.pitch = _instance.pitch || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sCloudServiceGoogle,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.voiceId = _reader.readString();
          break;
        case 2:
          _instance.speakingRate = _reader.readFloat();
          break;
        case 3:
          _instance.volumeGainDb = _reader.readFloat();
          break;
        case 4:
          _instance.pitch = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    T2sCloudServiceGoogle.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sCloudServiceGoogle,
    _writer: BinaryWriter
  ) {
    if (_instance.voiceId) {
      _writer.writeString(1, _instance.voiceId);
    }
    if (_instance.speakingRate) {
      _writer.writeFloat(2, _instance.speakingRate);
    }
    if (_instance.volumeGainDb) {
      _writer.writeFloat(3, _instance.volumeGainDb);
    }
    if (_instance.pitch) {
      _writer.writeFloat(4, _instance.pitch);
    }
  }

  private _voiceId: string;
  private _speakingRate: number;
  private _volumeGainDb: number;
  private _pitch: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sCloudServiceGoogle to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2sCloudServiceGoogle.AsObject>) {
    _value = _value || {};
    this.voiceId = _value.voiceId;
    this.speakingRate = _value.speakingRate;
    this.volumeGainDb = _value.volumeGainDb;
    this.pitch = _value.pitch;
    T2sCloudServiceGoogle.refineValues(this);
  }
  get voiceId(): string {
    return this._voiceId;
  }
  set voiceId(value: string) {
    this._voiceId = value;
  }
  get speakingRate(): number {
    return this._speakingRate;
  }
  set speakingRate(value: number) {
    this._speakingRate = value;
  }
  get volumeGainDb(): number {
    return this._volumeGainDb;
  }
  set volumeGainDb(value: number) {
    this._volumeGainDb = value;
  }
  get pitch(): number {
    return this._pitch;
  }
  set pitch(value: number) {
    this._pitch = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sCloudServiceGoogle.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sCloudServiceGoogle.AsObject {
    return {
      voiceId: this.voiceId,
      speakingRate: this.speakingRate,
      volumeGainDb: this.volumeGainDb,
      pitch: this.pitch
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sCloudServiceGoogle.AsProtobufJSON {
    return {
      voiceId: this.voiceId,
      speakingRate: this.speakingRate,
      volumeGainDb: this.volumeGainDb,
      pitch: this.pitch
    };
  }
}
export module T2sCloudServiceGoogle {
  /**
   * Standard JavaScript object representation for T2sCloudServiceGoogle
   */
  export interface AsObject {
    voiceId: string;
    speakingRate: number;
    volumeGainDb: number;
    pitch: number;
  }

  /**
   * Protobuf JSON representation for T2sCloudServiceGoogle
   */
  export interface AsProtobufJSON {
    voiceId: string;
    speakingRate: number;
    volumeGainDb: number;
    pitch: number;
  }
}

/**
 * Message implementation for ondewo.t2s.T2sCloudServiceMicrosoft
 */
export class T2sCloudServiceMicrosoft implements GrpcMessage {
  static id = 'ondewo.t2s.T2sCloudServiceMicrosoft';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sCloudServiceMicrosoft();
    T2sCloudServiceMicrosoft.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sCloudServiceMicrosoft) {
    _instance.voiceId = _instance.voiceId || '';
    _instance.useDefaultSpeaker = _instance.useDefaultSpeaker || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sCloudServiceMicrosoft,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.voiceId = _reader.readString();
          break;
        case 2:
          _instance.useDefaultSpeaker = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    T2sCloudServiceMicrosoft.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sCloudServiceMicrosoft,
    _writer: BinaryWriter
  ) {
    if (_instance.voiceId) {
      _writer.writeString(1, _instance.voiceId);
    }
    if (_instance.useDefaultSpeaker) {
      _writer.writeBool(2, _instance.useDefaultSpeaker);
    }
  }

  private _voiceId: string;
  private _useDefaultSpeaker: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sCloudServiceMicrosoft to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2sCloudServiceMicrosoft.AsObject>) {
    _value = _value || {};
    this.voiceId = _value.voiceId;
    this.useDefaultSpeaker = _value.useDefaultSpeaker;
    T2sCloudServiceMicrosoft.refineValues(this);
  }
  get voiceId(): string {
    return this._voiceId;
  }
  set voiceId(value: string) {
    this._voiceId = value;
  }
  get useDefaultSpeaker(): boolean {
    return this._useDefaultSpeaker;
  }
  set useDefaultSpeaker(value: boolean) {
    this._useDefaultSpeaker = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sCloudServiceMicrosoft.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sCloudServiceMicrosoft.AsObject {
    return {
      voiceId: this.voiceId,
      useDefaultSpeaker: this.useDefaultSpeaker
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2sCloudServiceMicrosoft.AsProtobufJSON {
    return {
      voiceId: this.voiceId,
      useDefaultSpeaker: this.useDefaultSpeaker
    };
  }
}
export module T2sCloudServiceMicrosoft {
  /**
   * Standard JavaScript object representation for T2sCloudServiceMicrosoft
   */
  export interface AsObject {
    voiceId: string;
    useDefaultSpeaker: boolean;
  }

  /**
   * Protobuf JSON representation for T2sCloudServiceMicrosoft
   */
  export interface AsProtobufJSON {
    voiceId: string;
    useDefaultSpeaker: boolean;
  }
}

/**
 * Message implementation for ondewo.t2s.Mel2Audio
 */
export class Mel2Audio implements GrpcMessage {
  static id = 'ondewo.t2s.Mel2Audio';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Mel2Audio();
    Mel2Audio.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Mel2Audio) {
    _instance.type = _instance.type || '';
    _instance.mbMelganTriton = _instance.mbMelganTriton || undefined;
    _instance.hifiGan = _instance.hifiGan || undefined;
    _instance.hifiGanTriton = _instance.hifiGanTriton || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Mel2Audio,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readString();
          break;
        case 2:
          _instance.mbMelganTriton = new MbMelganTriton();
          _reader.readMessage(
            _instance.mbMelganTriton,
            MbMelganTriton.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.hifiGan = new HiFiGan();
          _reader.readMessage(
            _instance.hifiGan,
            HiFiGan.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.hifiGanTriton = new HiFiGanTriton();
          _reader.readMessage(
            _instance.hifiGanTriton,
            HiFiGanTriton.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Mel2Audio.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Mel2Audio, _writer: BinaryWriter) {
    if (_instance.type) {
      _writer.writeString(1, _instance.type);
    }
    if (_instance.mbMelganTriton) {
      _writer.writeMessage(
        2,
        _instance.mbMelganTriton as any,
        MbMelganTriton.serializeBinaryToWriter
      );
    }
    if (_instance.hifiGan) {
      _writer.writeMessage(
        3,
        _instance.hifiGan as any,
        HiFiGan.serializeBinaryToWriter
      );
    }
    if (_instance.hifiGanTriton) {
      _writer.writeMessage(
        4,
        _instance.hifiGanTriton as any,
        HiFiGanTriton.serializeBinaryToWriter
      );
    }
  }

  private _type: string;
  private _mbMelganTriton?: MbMelganTriton;
  private _hifiGan?: HiFiGan;
  private _hifiGanTriton?: HiFiGanTriton;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Mel2Audio to deeply clone from
   */
  constructor(_value?: RecursivePartial<Mel2Audio.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.mbMelganTriton = _value.mbMelganTriton
      ? new MbMelganTriton(_value.mbMelganTriton)
      : undefined;
    this.hifiGan = _value.hifiGan ? new HiFiGan(_value.hifiGan) : undefined;
    this.hifiGanTriton = _value.hifiGanTriton
      ? new HiFiGanTriton(_value.hifiGanTriton)
      : undefined;
    Mel2Audio.refineValues(this);
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get mbMelganTriton(): MbMelganTriton | undefined {
    return this._mbMelganTriton;
  }
  set mbMelganTriton(value: MbMelganTriton | undefined) {
    this._mbMelganTriton = value;
  }
  get hifiGan(): HiFiGan | undefined {
    return this._hifiGan;
  }
  set hifiGan(value: HiFiGan | undefined) {
    this._hifiGan = value;
  }
  get hifiGanTriton(): HiFiGanTriton | undefined {
    return this._hifiGanTriton;
  }
  set hifiGanTriton(value: HiFiGanTriton | undefined) {
    this._hifiGanTriton = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Mel2Audio.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Mel2Audio.AsObject {
    return {
      type: this.type,
      mbMelganTriton: this.mbMelganTriton
        ? this.mbMelganTriton.toObject()
        : undefined,
      hifiGan: this.hifiGan ? this.hifiGan.toObject() : undefined,
      hifiGanTriton: this.hifiGanTriton
        ? this.hifiGanTriton.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Mel2Audio.AsProtobufJSON {
    return {
      type: this.type,
      mbMelganTriton: this.mbMelganTriton
        ? this.mbMelganTriton.toProtobufJSON(options)
        : null,
      hifiGan: this.hifiGan ? this.hifiGan.toProtobufJSON(options) : null,
      hifiGanTriton: this.hifiGanTriton
        ? this.hifiGanTriton.toProtobufJSON(options)
        : null
    };
  }
}
export module Mel2Audio {
  /**
   * Standard JavaScript object representation for Mel2Audio
   */
  export interface AsObject {
    type: string;
    mbMelganTriton?: MbMelganTriton.AsObject;
    hifiGan?: HiFiGan.AsObject;
    hifiGanTriton?: HiFiGanTriton.AsObject;
  }

  /**
   * Protobuf JSON representation for Mel2Audio
   */
  export interface AsProtobufJSON {
    type: string;
    mbMelganTriton: MbMelganTriton.AsProtobufJSON | null;
    hifiGan: HiFiGan.AsProtobufJSON | null;
    hifiGanTriton: HiFiGanTriton.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.t2s.HiFiGan
 */
export class HiFiGan implements GrpcMessage {
  static id = 'ondewo.t2s.HiFiGan';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HiFiGan();
    HiFiGan.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HiFiGan) {
    _instance.useGpu = _instance.useGpu || false;
    _instance.batchSize = _instance.batchSize || '0';
    _instance.configPath = _instance.configPath || '';
    _instance.modelPath = _instance.modelPath || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HiFiGan,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.useGpu = _reader.readBool();
          break;
        case 2:
          _instance.batchSize = _reader.readInt64String();
          break;
        case 3:
          _instance.configPath = _reader.readString();
          break;
        case 4:
          _instance.modelPath = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    HiFiGan.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: HiFiGan, _writer: BinaryWriter) {
    if (_instance.useGpu) {
      _writer.writeBool(1, _instance.useGpu);
    }
    if (_instance.batchSize) {
      _writer.writeInt64String(2, _instance.batchSize);
    }
    if (_instance.configPath) {
      _writer.writeString(3, _instance.configPath);
    }
    if (_instance.modelPath) {
      _writer.writeString(4, _instance.modelPath);
    }
  }

  private _useGpu: boolean;
  private _batchSize: string;
  private _configPath: string;
  private _modelPath: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HiFiGan to deeply clone from
   */
  constructor(_value?: RecursivePartial<HiFiGan.AsObject>) {
    _value = _value || {};
    this.useGpu = _value.useGpu;
    this.batchSize = _value.batchSize;
    this.configPath = _value.configPath;
    this.modelPath = _value.modelPath;
    HiFiGan.refineValues(this);
  }
  get useGpu(): boolean {
    return this._useGpu;
  }
  set useGpu(value: boolean) {
    this._useGpu = value;
  }
  get batchSize(): string {
    return this._batchSize;
  }
  set batchSize(value: string) {
    this._batchSize = value;
  }
  get configPath(): string {
    return this._configPath;
  }
  set configPath(value: string) {
    this._configPath = value;
  }
  get modelPath(): string {
    return this._modelPath;
  }
  set modelPath(value: string) {
    this._modelPath = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HiFiGan.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HiFiGan.AsObject {
    return {
      useGpu: this.useGpu,
      batchSize: this.batchSize,
      configPath: this.configPath,
      modelPath: this.modelPath
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): HiFiGan.AsProtobufJSON {
    return {
      useGpu: this.useGpu,
      batchSize: this.batchSize,
      configPath: this.configPath,
      modelPath: this.modelPath
    };
  }
}
export module HiFiGan {
  /**
   * Standard JavaScript object representation for HiFiGan
   */
  export interface AsObject {
    useGpu: boolean;
    batchSize: string;
    configPath: string;
    modelPath: string;
  }

  /**
   * Protobuf JSON representation for HiFiGan
   */
  export interface AsProtobufJSON {
    useGpu: boolean;
    batchSize: string;
    configPath: string;
    modelPath: string;
  }
}

/**
 * Message implementation for ondewo.t2s.HiFiGanTriton
 */
export class HiFiGanTriton implements GrpcMessage {
  static id = 'ondewo.t2s.HiFiGanTriton';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HiFiGanTriton();
    HiFiGanTriton.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HiFiGanTriton) {
    _instance.configPath = _instance.configPath || '';
    _instance.tritonModelName = _instance.tritonModelName || '';
    _instance.tritonServerHost = _instance.tritonServerHost || '';
    _instance.tritonServerPort = _instance.tritonServerPort || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HiFiGanTriton,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.configPath = _reader.readString();
          break;
        case 2:
          _instance.tritonModelName = _reader.readString();
          break;
        case 3:
          _instance.tritonServerHost = _reader.readString();
          break;
        case 4:
          _instance.tritonServerPort = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    HiFiGanTriton.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HiFiGanTriton,
    _writer: BinaryWriter
  ) {
    if (_instance.configPath) {
      _writer.writeString(1, _instance.configPath);
    }
    if (_instance.tritonModelName) {
      _writer.writeString(2, _instance.tritonModelName);
    }
    if (_instance.tritonServerHost) {
      _writer.writeString(3, _instance.tritonServerHost);
    }
    if (_instance.tritonServerPort) {
      _writer.writeInt64String(4, _instance.tritonServerPort);
    }
  }

  private _configPath: string;
  private _tritonModelName: string;
  private _tritonServerHost: string;
  private _tritonServerPort: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HiFiGanTriton to deeply clone from
   */
  constructor(_value?: RecursivePartial<HiFiGanTriton.AsObject>) {
    _value = _value || {};
    this.configPath = _value.configPath;
    this.tritonModelName = _value.tritonModelName;
    this.tritonServerHost = _value.tritonServerHost;
    this.tritonServerPort = _value.tritonServerPort;
    HiFiGanTriton.refineValues(this);
  }
  get configPath(): string {
    return this._configPath;
  }
  set configPath(value: string) {
    this._configPath = value;
  }
  get tritonModelName(): string {
    return this._tritonModelName;
  }
  set tritonModelName(value: string) {
    this._tritonModelName = value;
  }
  get tritonServerHost(): string {
    return this._tritonServerHost;
  }
  set tritonServerHost(value: string) {
    this._tritonServerHost = value;
  }
  get tritonServerPort(): string {
    return this._tritonServerPort;
  }
  set tritonServerPort(value: string) {
    this._tritonServerPort = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HiFiGanTriton.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HiFiGanTriton.AsObject {
    return {
      configPath: this.configPath,
      tritonModelName: this.tritonModelName,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): HiFiGanTriton.AsProtobufJSON {
    return {
      configPath: this.configPath,
      tritonModelName: this.tritonModelName,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }
}
export module HiFiGanTriton {
  /**
   * Standard JavaScript object representation for HiFiGanTriton
   */
  export interface AsObject {
    configPath: string;
    tritonModelName: string;
    tritonServerHost: string;
    tritonServerPort: string;
  }

  /**
   * Protobuf JSON representation for HiFiGanTriton
   */
  export interface AsProtobufJSON {
    configPath: string;
    tritonModelName: string;
    tritonServerHost: string;
    tritonServerPort: string;
  }
}

/**
 * Message implementation for ondewo.t2s.MbMelganTriton
 */
export class MbMelganTriton implements GrpcMessage {
  static id = 'ondewo.t2s.MbMelganTriton';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MbMelganTriton();
    MbMelganTriton.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MbMelganTriton) {
    _instance.configPath = _instance.configPath || '';
    _instance.statsPath = _instance.statsPath || '';
    _instance.tritonModelName = _instance.tritonModelName || '';
    _instance.tritonServerHost = _instance.tritonServerHost || '';
    _instance.tritonServerPort = _instance.tritonServerPort || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MbMelganTriton,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.configPath = _reader.readString();
          break;
        case 2:
          _instance.statsPath = _reader.readString();
          break;
        case 3:
          _instance.tritonModelName = _reader.readString();
          break;
        case 4:
          _instance.tritonServerHost = _reader.readString();
          break;
        case 5:
          _instance.tritonServerPort = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    MbMelganTriton.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MbMelganTriton,
    _writer: BinaryWriter
  ) {
    if (_instance.configPath) {
      _writer.writeString(1, _instance.configPath);
    }
    if (_instance.statsPath) {
      _writer.writeString(2, _instance.statsPath);
    }
    if (_instance.tritonModelName) {
      _writer.writeString(3, _instance.tritonModelName);
    }
    if (_instance.tritonServerHost) {
      _writer.writeString(4, _instance.tritonServerHost);
    }
    if (_instance.tritonServerPort) {
      _writer.writeInt64String(5, _instance.tritonServerPort);
    }
  }

  private _configPath: string;
  private _statsPath: string;
  private _tritonModelName: string;
  private _tritonServerHost: string;
  private _tritonServerPort: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MbMelganTriton to deeply clone from
   */
  constructor(_value?: RecursivePartial<MbMelganTriton.AsObject>) {
    _value = _value || {};
    this.configPath = _value.configPath;
    this.statsPath = _value.statsPath;
    this.tritonModelName = _value.tritonModelName;
    this.tritonServerHost = _value.tritonServerHost;
    this.tritonServerPort = _value.tritonServerPort;
    MbMelganTriton.refineValues(this);
  }
  get configPath(): string {
    return this._configPath;
  }
  set configPath(value: string) {
    this._configPath = value;
  }
  get statsPath(): string {
    return this._statsPath;
  }
  set statsPath(value: string) {
    this._statsPath = value;
  }
  get tritonModelName(): string {
    return this._tritonModelName;
  }
  set tritonModelName(value: string) {
    this._tritonModelName = value;
  }
  get tritonServerHost(): string {
    return this._tritonServerHost;
  }
  set tritonServerHost(value: string) {
    this._tritonServerHost = value;
  }
  get tritonServerPort(): string {
    return this._tritonServerPort;
  }
  set tritonServerPort(value: string) {
    this._tritonServerPort = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MbMelganTriton.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MbMelganTriton.AsObject {
    return {
      configPath: this.configPath,
      statsPath: this.statsPath,
      tritonModelName: this.tritonModelName,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): MbMelganTriton.AsProtobufJSON {
    return {
      configPath: this.configPath,
      statsPath: this.statsPath,
      tritonModelName: this.tritonModelName,
      tritonServerHost: this.tritonServerHost,
      tritonServerPort: this.tritonServerPort
    };
  }
}
export module MbMelganTriton {
  /**
   * Standard JavaScript object representation for MbMelganTriton
   */
  export interface AsObject {
    configPath: string;
    statsPath: string;
    tritonModelName: string;
    tritonServerHost: string;
    tritonServerPort: string;
  }

  /**
   * Protobuf JSON representation for MbMelganTriton
   */
  export interface AsProtobufJSON {
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
export class Caching implements GrpcMessage {
  static id = 'ondewo.t2s.Caching';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Caching();
    Caching.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Caching) {
    _instance.active = _instance.active || false;
    _instance.memoryCacheMaxSize = _instance.memoryCacheMaxSize || '0';
    _instance.samplingRate = _instance.samplingRate || '0';
    _instance.loadCache = _instance.loadCache || false;
    _instance.saveCache = _instance.saveCache || false;
    _instance.cacheSaveDir = _instance.cacheSaveDir || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Caching,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.active = _reader.readBool();
          break;
        case 2:
          _instance.memoryCacheMaxSize = _reader.readInt64String();
          break;
        case 3:
          _instance.samplingRate = _reader.readInt64String();
          break;
        case 4:
          _instance.loadCache = _reader.readBool();
          break;
        case 5:
          _instance.saveCache = _reader.readBool();
          break;
        case 6:
          _instance.cacheSaveDir = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Caching.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Caching, _writer: BinaryWriter) {
    if (_instance.active) {
      _writer.writeBool(1, _instance.active);
    }
    if (_instance.memoryCacheMaxSize) {
      _writer.writeInt64String(2, _instance.memoryCacheMaxSize);
    }
    if (_instance.samplingRate) {
      _writer.writeInt64String(3, _instance.samplingRate);
    }
    if (_instance.loadCache) {
      _writer.writeBool(4, _instance.loadCache);
    }
    if (_instance.saveCache) {
      _writer.writeBool(5, _instance.saveCache);
    }
    if (_instance.cacheSaveDir) {
      _writer.writeString(6, _instance.cacheSaveDir);
    }
  }

  private _active: boolean;
  private _memoryCacheMaxSize: string;
  private _samplingRate: string;
  private _loadCache: boolean;
  private _saveCache: boolean;
  private _cacheSaveDir: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Caching to deeply clone from
   */
  constructor(_value?: RecursivePartial<Caching.AsObject>) {
    _value = _value || {};
    this.active = _value.active;
    this.memoryCacheMaxSize = _value.memoryCacheMaxSize;
    this.samplingRate = _value.samplingRate;
    this.loadCache = _value.loadCache;
    this.saveCache = _value.saveCache;
    this.cacheSaveDir = _value.cacheSaveDir;
    Caching.refineValues(this);
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get memoryCacheMaxSize(): string {
    return this._memoryCacheMaxSize;
  }
  set memoryCacheMaxSize(value: string) {
    this._memoryCacheMaxSize = value;
  }
  get samplingRate(): string {
    return this._samplingRate;
  }
  set samplingRate(value: string) {
    this._samplingRate = value;
  }
  get loadCache(): boolean {
    return this._loadCache;
  }
  set loadCache(value: boolean) {
    this._loadCache = value;
  }
  get saveCache(): boolean {
    return this._saveCache;
  }
  set saveCache(value: boolean) {
    this._saveCache = value;
  }
  get cacheSaveDir(): string {
    return this._cacheSaveDir;
  }
  set cacheSaveDir(value: string) {
    this._cacheSaveDir = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Caching.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Caching.AsObject {
    return {
      active: this.active,
      memoryCacheMaxSize: this.memoryCacheMaxSize,
      samplingRate: this.samplingRate,
      loadCache: this.loadCache,
      saveCache: this.saveCache,
      cacheSaveDir: this.cacheSaveDir
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Caching.AsProtobufJSON {
    return {
      active: this.active,
      memoryCacheMaxSize: this.memoryCacheMaxSize,
      samplingRate: this.samplingRate,
      loadCache: this.loadCache,
      saveCache: this.saveCache,
      cacheSaveDir: this.cacheSaveDir
    };
  }
}
export module Caching {
  /**
   * Standard JavaScript object representation for Caching
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class T2SNormalization implements GrpcMessage {
  static id = 'ondewo.t2s.T2SNormalization';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2SNormalization();
    T2SNormalization.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2SNormalization) {
    _instance.language = _instance.language || '';
    _instance.pipeline = _instance.pipeline || [];
    _instance.customPhonemizerId = _instance.customPhonemizerId || '';
    _instance.customLengthScales = _instance.customLengthScales || undefined;
    _instance.arpabetMapping = _instance.arpabetMapping || '';
    _instance.numericMapping = _instance.numericMapping || '';
    _instance.callsignsMapping = _instance.callsignsMapping || '';
    _instance.phonemeCorrectionMapping =
      _instance.phonemeCorrectionMapping || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2SNormalization,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.language = _reader.readString();
          break;
        case 2:
          (_instance.pipeline = _instance.pipeline || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.customPhonemizerId = _reader.readString();
          break;
        case 4:
          _instance.customLengthScales = new T2SCustomLengthScales();
          _reader.readMessage(
            _instance.customLengthScales,
            T2SCustomLengthScales.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.arpabetMapping = _reader.readString();
          break;
        case 6:
          _instance.numericMapping = _reader.readString();
          break;
        case 7:
          _instance.callsignsMapping = _reader.readString();
          break;
        case 8:
          _instance.phonemeCorrectionMapping = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    T2SNormalization.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2SNormalization,
    _writer: BinaryWriter
  ) {
    if (_instance.language) {
      _writer.writeString(1, _instance.language);
    }
    if (_instance.pipeline && _instance.pipeline.length) {
      _writer.writeRepeatedString(2, _instance.pipeline);
    }
    if (_instance.customPhonemizerId) {
      _writer.writeString(3, _instance.customPhonemizerId);
    }
    if (_instance.customLengthScales) {
      _writer.writeMessage(
        4,
        _instance.customLengthScales as any,
        T2SCustomLengthScales.serializeBinaryToWriter
      );
    }
    if (_instance.arpabetMapping) {
      _writer.writeString(5, _instance.arpabetMapping);
    }
    if (_instance.numericMapping) {
      _writer.writeString(6, _instance.numericMapping);
    }
    if (_instance.callsignsMapping) {
      _writer.writeString(7, _instance.callsignsMapping);
    }
    if (_instance.phonemeCorrectionMapping) {
      _writer.writeString(8, _instance.phonemeCorrectionMapping);
    }
  }

  private _language: string;
  private _pipeline: string[];
  private _customPhonemizerId: string;
  private _customLengthScales?: T2SCustomLengthScales;
  private _arpabetMapping: string;
  private _numericMapping: string;
  private _callsignsMapping: string;
  private _phonemeCorrectionMapping: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2SNormalization to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2SNormalization.AsObject>) {
    _value = _value || {};
    this.language = _value.language;
    this.pipeline = (_value.pipeline || []).slice();
    this.customPhonemizerId = _value.customPhonemizerId;
    this.customLengthScales = _value.customLengthScales
      ? new T2SCustomLengthScales(_value.customLengthScales)
      : undefined;
    this.arpabetMapping = _value.arpabetMapping;
    this.numericMapping = _value.numericMapping;
    this.callsignsMapping = _value.callsignsMapping;
    this.phonemeCorrectionMapping = _value.phonemeCorrectionMapping;
    T2SNormalization.refineValues(this);
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get pipeline(): string[] {
    return this._pipeline;
  }
  set pipeline(value: string[]) {
    this._pipeline = value;
  }
  get customPhonemizerId(): string {
    return this._customPhonemizerId;
  }
  set customPhonemizerId(value: string) {
    this._customPhonemizerId = value;
  }
  get customLengthScales(): T2SCustomLengthScales | undefined {
    return this._customLengthScales;
  }
  set customLengthScales(value: T2SCustomLengthScales | undefined) {
    this._customLengthScales = value;
  }
  get arpabetMapping(): string {
    return this._arpabetMapping;
  }
  set arpabetMapping(value: string) {
    this._arpabetMapping = value;
  }
  get numericMapping(): string {
    return this._numericMapping;
  }
  set numericMapping(value: string) {
    this._numericMapping = value;
  }
  get callsignsMapping(): string {
    return this._callsignsMapping;
  }
  set callsignsMapping(value: string) {
    this._callsignsMapping = value;
  }
  get phonemeCorrectionMapping(): string {
    return this._phonemeCorrectionMapping;
  }
  set phonemeCorrectionMapping(value: string) {
    this._phonemeCorrectionMapping = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2SNormalization.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2SNormalization.AsObject {
    return {
      language: this.language,
      pipeline: (this.pipeline || []).slice(),
      customPhonemizerId: this.customPhonemizerId,
      customLengthScales: this.customLengthScales
        ? this.customLengthScales.toObject()
        : undefined,
      arpabetMapping: this.arpabetMapping,
      numericMapping: this.numericMapping,
      callsignsMapping: this.callsignsMapping,
      phonemeCorrectionMapping: this.phonemeCorrectionMapping
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2SNormalization.AsProtobufJSON {
    return {
      language: this.language,
      pipeline: (this.pipeline || []).slice(),
      customPhonemizerId: this.customPhonemizerId,
      customLengthScales: this.customLengthScales
        ? this.customLengthScales.toProtobufJSON(options)
        : null,
      arpabetMapping: this.arpabetMapping,
      numericMapping: this.numericMapping,
      callsignsMapping: this.callsignsMapping,
      phonemeCorrectionMapping: this.phonemeCorrectionMapping
    };
  }
}
export module T2SNormalization {
  /**
   * Standard JavaScript object representation for T2SNormalization
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class Postprocessing implements GrpcMessage {
  static id = 'ondewo.t2s.Postprocessing';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Postprocessing();
    Postprocessing.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Postprocessing) {
    _instance.silenceSecs = _instance.silenceSecs || 0;
    _instance.pipeline = _instance.pipeline || [];
    _instance.logmmse = _instance.logmmse || undefined;
    _instance.wiener = _instance.wiener || undefined;
    _instance.apodization = _instance.apodization || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Postprocessing,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.silenceSecs = _reader.readFloat();
          break;
        case 2:
          (_instance.pipeline = _instance.pipeline || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.logmmse = new Logmnse();
          _reader.readMessage(
            _instance.logmmse,
            Logmnse.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.wiener = new Wiener();
          _reader.readMessage(
            _instance.wiener,
            Wiener.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.apodization = new Apodization();
          _reader.readMessage(
            _instance.apodization,
            Apodization.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Postprocessing.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Postprocessing,
    _writer: BinaryWriter
  ) {
    if (_instance.silenceSecs) {
      _writer.writeFloat(1, _instance.silenceSecs);
    }
    if (_instance.pipeline && _instance.pipeline.length) {
      _writer.writeRepeatedString(2, _instance.pipeline);
    }
    if (_instance.logmmse) {
      _writer.writeMessage(
        3,
        _instance.logmmse as any,
        Logmnse.serializeBinaryToWriter
      );
    }
    if (_instance.wiener) {
      _writer.writeMessage(
        4,
        _instance.wiener as any,
        Wiener.serializeBinaryToWriter
      );
    }
    if (_instance.apodization) {
      _writer.writeMessage(
        5,
        _instance.apodization as any,
        Apodization.serializeBinaryToWriter
      );
    }
  }

  private _silenceSecs: number;
  private _pipeline: string[];
  private _logmmse?: Logmnse;
  private _wiener?: Wiener;
  private _apodization?: Apodization;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Postprocessing to deeply clone from
   */
  constructor(_value?: RecursivePartial<Postprocessing.AsObject>) {
    _value = _value || {};
    this.silenceSecs = _value.silenceSecs;
    this.pipeline = (_value.pipeline || []).slice();
    this.logmmse = _value.logmmse ? new Logmnse(_value.logmmse) : undefined;
    this.wiener = _value.wiener ? new Wiener(_value.wiener) : undefined;
    this.apodization = _value.apodization
      ? new Apodization(_value.apodization)
      : undefined;
    Postprocessing.refineValues(this);
  }
  get silenceSecs(): number {
    return this._silenceSecs;
  }
  set silenceSecs(value: number) {
    this._silenceSecs = value;
  }
  get pipeline(): string[] {
    return this._pipeline;
  }
  set pipeline(value: string[]) {
    this._pipeline = value;
  }
  get logmmse(): Logmnse | undefined {
    return this._logmmse;
  }
  set logmmse(value: Logmnse | undefined) {
    this._logmmse = value;
  }
  get wiener(): Wiener | undefined {
    return this._wiener;
  }
  set wiener(value: Wiener | undefined) {
    this._wiener = value;
  }
  get apodization(): Apodization | undefined {
    return this._apodization;
  }
  set apodization(value: Apodization | undefined) {
    this._apodization = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Postprocessing.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Postprocessing.AsObject {
    return {
      silenceSecs: this.silenceSecs,
      pipeline: (this.pipeline || []).slice(),
      logmmse: this.logmmse ? this.logmmse.toObject() : undefined,
      wiener: this.wiener ? this.wiener.toObject() : undefined,
      apodization: this.apodization ? this.apodization.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Postprocessing.AsProtobufJSON {
    return {
      silenceSecs: this.silenceSecs,
      pipeline: (this.pipeline || []).slice(),
      logmmse: this.logmmse ? this.logmmse.toProtobufJSON(options) : null,
      wiener: this.wiener ? this.wiener.toProtobufJSON(options) : null,
      apodization: this.apodization
        ? this.apodization.toProtobufJSON(options)
        : null
    };
  }
}
export module Postprocessing {
  /**
   * Standard JavaScript object representation for Postprocessing
   */
  export interface AsObject {
    silenceSecs: number;
    pipeline: string[];
    logmmse?: Logmnse.AsObject;
    wiener?: Wiener.AsObject;
    apodization?: Apodization.AsObject;
  }

  /**
   * Protobuf JSON representation for Postprocessing
   */
  export interface AsProtobufJSON {
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
export class Logmnse implements GrpcMessage {
  static id = 'ondewo.t2s.Logmnse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Logmnse();
    Logmnse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Logmnse) {
    _instance.initialNoise = _instance.initialNoise || '0';
    _instance.windowSize = _instance.windowSize || '0';
    _instance.noiseThreshold = _instance.noiseThreshold || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Logmnse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.initialNoise = _reader.readInt64String();
          break;
        case 2:
          _instance.windowSize = _reader.readInt64String();
          break;
        case 3:
          _instance.noiseThreshold = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    Logmnse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Logmnse, _writer: BinaryWriter) {
    if (_instance.initialNoise) {
      _writer.writeInt64String(1, _instance.initialNoise);
    }
    if (_instance.windowSize) {
      _writer.writeInt64String(2, _instance.windowSize);
    }
    if (_instance.noiseThreshold) {
      _writer.writeFloat(3, _instance.noiseThreshold);
    }
  }

  private _initialNoise: string;
  private _windowSize: string;
  private _noiseThreshold: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Logmnse to deeply clone from
   */
  constructor(_value?: RecursivePartial<Logmnse.AsObject>) {
    _value = _value || {};
    this.initialNoise = _value.initialNoise;
    this.windowSize = _value.windowSize;
    this.noiseThreshold = _value.noiseThreshold;
    Logmnse.refineValues(this);
  }
  get initialNoise(): string {
    return this._initialNoise;
  }
  set initialNoise(value: string) {
    this._initialNoise = value;
  }
  get windowSize(): string {
    return this._windowSize;
  }
  set windowSize(value: string) {
    this._windowSize = value;
  }
  get noiseThreshold(): number {
    return this._noiseThreshold;
  }
  set noiseThreshold(value: number) {
    this._noiseThreshold = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Logmnse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Logmnse.AsObject {
    return {
      initialNoise: this.initialNoise,
      windowSize: this.windowSize,
      noiseThreshold: this.noiseThreshold
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Logmnse.AsProtobufJSON {
    return {
      initialNoise: this.initialNoise,
      windowSize: this.windowSize,
      noiseThreshold: this.noiseThreshold
    };
  }
}
export module Logmnse {
  /**
   * Standard JavaScript object representation for Logmnse
   */
  export interface AsObject {
    initialNoise: string;
    windowSize: string;
    noiseThreshold: number;
  }

  /**
   * Protobuf JSON representation for Logmnse
   */
  export interface AsProtobufJSON {
    initialNoise: string;
    windowSize: string;
    noiseThreshold: number;
  }
}

/**
 * Message implementation for ondewo.t2s.Wiener
 */
export class Wiener implements GrpcMessage {
  static id = 'ondewo.t2s.Wiener';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Wiener();
    Wiener.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Wiener) {
    _instance.frameLen = _instance.frameLen || '0';
    _instance.lpcOrder = _instance.lpcOrder || '0';
    _instance.iterations = _instance.iterations || '0';
    _instance.alpha = _instance.alpha || 0;
    _instance.thresh = _instance.thresh || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Wiener, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.frameLen = _reader.readInt64String();
          break;
        case 2:
          _instance.lpcOrder = _reader.readInt64String();
          break;
        case 3:
          _instance.iterations = _reader.readInt64String();
          break;
        case 4:
          _instance.alpha = _reader.readFloat();
          break;
        case 5:
          _instance.thresh = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    Wiener.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Wiener, _writer: BinaryWriter) {
    if (_instance.frameLen) {
      _writer.writeInt64String(1, _instance.frameLen);
    }
    if (_instance.lpcOrder) {
      _writer.writeInt64String(2, _instance.lpcOrder);
    }
    if (_instance.iterations) {
      _writer.writeInt64String(3, _instance.iterations);
    }
    if (_instance.alpha) {
      _writer.writeFloat(4, _instance.alpha);
    }
    if (_instance.thresh) {
      _writer.writeFloat(5, _instance.thresh);
    }
  }

  private _frameLen: string;
  private _lpcOrder: string;
  private _iterations: string;
  private _alpha: number;
  private _thresh: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Wiener to deeply clone from
   */
  constructor(_value?: RecursivePartial<Wiener.AsObject>) {
    _value = _value || {};
    this.frameLen = _value.frameLen;
    this.lpcOrder = _value.lpcOrder;
    this.iterations = _value.iterations;
    this.alpha = _value.alpha;
    this.thresh = _value.thresh;
    Wiener.refineValues(this);
  }
  get frameLen(): string {
    return this._frameLen;
  }
  set frameLen(value: string) {
    this._frameLen = value;
  }
  get lpcOrder(): string {
    return this._lpcOrder;
  }
  set lpcOrder(value: string) {
    this._lpcOrder = value;
  }
  get iterations(): string {
    return this._iterations;
  }
  set iterations(value: string) {
    this._iterations = value;
  }
  get alpha(): number {
    return this._alpha;
  }
  set alpha(value: number) {
    this._alpha = value;
  }
  get thresh(): number {
    return this._thresh;
  }
  set thresh(value: number) {
    this._thresh = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Wiener.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Wiener.AsObject {
    return {
      frameLen: this.frameLen,
      lpcOrder: this.lpcOrder,
      iterations: this.iterations,
      alpha: this.alpha,
      thresh: this.thresh
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Wiener.AsProtobufJSON {
    return {
      frameLen: this.frameLen,
      lpcOrder: this.lpcOrder,
      iterations: this.iterations,
      alpha: this.alpha,
      thresh: this.thresh
    };
  }
}
export module Wiener {
  /**
   * Standard JavaScript object representation for Wiener
   */
  export interface AsObject {
    frameLen: string;
    lpcOrder: string;
    iterations: string;
    alpha: number;
    thresh: number;
  }

  /**
   * Protobuf JSON representation for Wiener
   */
  export interface AsProtobufJSON {
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
export class Apodization implements GrpcMessage {
  static id = 'ondewo.t2s.Apodization';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Apodization();
    Apodization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Apodization) {
    _instance.apodizationSecs = _instance.apodizationSecs || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Apodization,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.apodizationSecs = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    Apodization.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Apodization,
    _writer: BinaryWriter
  ) {
    if (_instance.apodizationSecs) {
      _writer.writeFloat(1, _instance.apodizationSecs);
    }
  }

  private _apodizationSecs: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Apodization to deeply clone from
   */
  constructor(_value?: RecursivePartial<Apodization.AsObject>) {
    _value = _value || {};
    this.apodizationSecs = _value.apodizationSecs;
    Apodization.refineValues(this);
  }
  get apodizationSecs(): number {
    return this._apodizationSecs;
  }
  set apodizationSecs(value: number) {
    this._apodizationSecs = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Apodization.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Apodization.AsObject {
    return {
      apodizationSecs: this.apodizationSecs
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Apodization.AsProtobufJSON {
    return {
      apodizationSecs: this.apodizationSecs
    };
  }
}
export module Apodization {
  /**
   * Standard JavaScript object representation for Apodization
   */
  export interface AsObject {
    apodizationSecs: number;
  }

  /**
   * Protobuf JSON representation for Apodization
   */
  export interface AsProtobufJSON {
    apodizationSecs: number;
  }
}

/**
 * Message implementation for ondewo.t2s.T2SCustomLengthScales
 */
export class T2SCustomLengthScales implements GrpcMessage {
  static id = 'ondewo.t2s.T2SCustomLengthScales';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2SCustomLengthScales();
    T2SCustomLengthScales.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2SCustomLengthScales) {
    _instance.text = _instance.text || 0;
    _instance.email = _instance.email || 0;
    _instance.url = _instance.url || 0;
    _instance.phone = _instance.phone || 0;
    _instance.spell = _instance.spell || 0;
    _instance.spellWithNames = _instance.spellWithNames || 0;
    _instance.callsignLong = _instance.callsignLong || 0;
    _instance.callsignShort = _instance.callsignShort || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2SCustomLengthScales,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.text = _reader.readFloat();
          break;
        case 2:
          _instance.email = _reader.readFloat();
          break;
        case 3:
          _instance.url = _reader.readFloat();
          break;
        case 4:
          _instance.phone = _reader.readFloat();
          break;
        case 5:
          _instance.spell = _reader.readFloat();
          break;
        case 6:
          _instance.spellWithNames = _reader.readFloat();
          break;
        case 7:
          _instance.callsignLong = _reader.readFloat();
          break;
        case 8:
          _instance.callsignShort = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    T2SCustomLengthScales.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2SCustomLengthScales,
    _writer: BinaryWriter
  ) {
    if (_instance.text) {
      _writer.writeFloat(1, _instance.text);
    }
    if (_instance.email) {
      _writer.writeFloat(2, _instance.email);
    }
    if (_instance.url) {
      _writer.writeFloat(3, _instance.url);
    }
    if (_instance.phone) {
      _writer.writeFloat(4, _instance.phone);
    }
    if (_instance.spell) {
      _writer.writeFloat(5, _instance.spell);
    }
    if (_instance.spellWithNames) {
      _writer.writeFloat(6, _instance.spellWithNames);
    }
    if (_instance.callsignLong) {
      _writer.writeFloat(7, _instance.callsignLong);
    }
    if (_instance.callsignShort) {
      _writer.writeFloat(8, _instance.callsignShort);
    }
  }

  private _text: number;
  private _email: number;
  private _url: number;
  private _phone: number;
  private _spell: number;
  private _spellWithNames: number;
  private _callsignLong: number;
  private _callsignShort: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2SCustomLengthScales to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2SCustomLengthScales.AsObject>) {
    _value = _value || {};
    this.text = _value.text;
    this.email = _value.email;
    this.url = _value.url;
    this.phone = _value.phone;
    this.spell = _value.spell;
    this.spellWithNames = _value.spellWithNames;
    this.callsignLong = _value.callsignLong;
    this.callsignShort = _value.callsignShort;
    T2SCustomLengthScales.refineValues(this);
  }
  get text(): number {
    return this._text;
  }
  set text(value: number) {
    this._text = value;
  }
  get email(): number {
    return this._email;
  }
  set email(value: number) {
    this._email = value;
  }
  get url(): number {
    return this._url;
  }
  set url(value: number) {
    this._url = value;
  }
  get phone(): number {
    return this._phone;
  }
  set phone(value: number) {
    this._phone = value;
  }
  get spell(): number {
    return this._spell;
  }
  set spell(value: number) {
    this._spell = value;
  }
  get spellWithNames(): number {
    return this._spellWithNames;
  }
  set spellWithNames(value: number) {
    this._spellWithNames = value;
  }
  get callsignLong(): number {
    return this._callsignLong;
  }
  set callsignLong(value: number) {
    this._callsignLong = value;
  }
  get callsignShort(): number {
    return this._callsignShort;
  }
  set callsignShort(value: number) {
    this._callsignShort = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2SCustomLengthScales.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2SCustomLengthScales.AsObject {
    return {
      text: this.text,
      email: this.email,
      url: this.url,
      phone: this.phone,
      spell: this.spell,
      spellWithNames: this.spellWithNames,
      callsignLong: this.callsignLong,
      callsignShort: this.callsignShort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): T2SCustomLengthScales.AsProtobufJSON {
    return {
      text: this.text,
      email: this.email,
      url: this.url,
      phone: this.phone,
      spell: this.spell,
      spellWithNames: this.spellWithNames,
      callsignLong: this.callsignLong,
      callsignShort: this.callsignShort
    };
  }
}
export module T2SCustomLengthScales {
  /**
   * Standard JavaScript object representation for T2SCustomLengthScales
   */
  export interface AsObject {
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
  export interface AsProtobufJSON {
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
export class PhonemizerId implements GrpcMessage {
  static id = 'ondewo.t2s.PhonemizerId';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PhonemizerId();
    PhonemizerId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PhonemizerId) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PhonemizerId,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PhonemizerId.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PhonemizerId,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PhonemizerId to deeply clone from
   */
  constructor(_value?: RecursivePartial<PhonemizerId.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    PhonemizerId.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PhonemizerId.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PhonemizerId.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PhonemizerId.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module PhonemizerId {
  /**
   * Standard JavaScript object representation for PhonemizerId
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for PhonemizerId
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for ondewo.t2s.CustomPhonemizerProto
 */
export class CustomPhonemizerProto implements GrpcMessage {
  static id = 'ondewo.t2s.CustomPhonemizerProto';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CustomPhonemizerProto();
    CustomPhonemizerProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CustomPhonemizerProto) {
    _instance.id = _instance.id || '';
    _instance.maps = _instance.maps || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CustomPhonemizerProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new Map();
          _reader.readMessage(
            messageInitializer2,
            Map.deserializeBinaryFromReader
          );
          (_instance.maps = _instance.maps || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    CustomPhonemizerProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CustomPhonemizerProto,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.maps && _instance.maps.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.maps as any,
        Map.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _maps?: Map[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CustomPhonemizerProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<CustomPhonemizerProto.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.maps = (_value.maps || []).map(m => new Map(m));
    CustomPhonemizerProto.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get maps(): Map[] | undefined {
    return this._maps;
  }
  set maps(value: Map[] | undefined) {
    this._maps = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CustomPhonemizerProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CustomPhonemizerProto.AsObject {
    return {
      id: this.id,
      maps: (this.maps || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CustomPhonemizerProto.AsProtobufJSON {
    return {
      id: this.id,
      maps: (this.maps || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CustomPhonemizerProto {
  /**
   * Standard JavaScript object representation for CustomPhonemizerProto
   */
  export interface AsObject {
    id: string;
    maps?: Map.AsObject[];
  }

  /**
   * Protobuf JSON representation for CustomPhonemizerProto
   */
  export interface AsProtobufJSON {
    id: string;
    maps: Map.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.t2s.Map
 */
export class Map implements GrpcMessage {
  static id = 'ondewo.t2s.Map';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Map();
    Map.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Map) {
    _instance.word = _instance.word || '';
    _instance.phonemeGroups = _instance.phonemeGroups || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Map, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.word = _reader.readString();
          break;
        case 2:
          _instance.phonemeGroups = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Map.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Map, _writer: BinaryWriter) {
    if (_instance.word) {
      _writer.writeString(1, _instance.word);
    }
    if (_instance.phonemeGroups) {
      _writer.writeString(2, _instance.phonemeGroups);
    }
  }

  private _word: string;
  private _phonemeGroups: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Map to deeply clone from
   */
  constructor(_value?: RecursivePartial<Map.AsObject>) {
    _value = _value || {};
    this.word = _value.word;
    this.phonemeGroups = _value.phonemeGroups;
    Map.refineValues(this);
  }
  get word(): string {
    return this._word;
  }
  set word(value: string) {
    this._word = value;
  }
  get phonemeGroups(): string {
    return this._phonemeGroups;
  }
  set phonemeGroups(value: string) {
    this._phonemeGroups = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Map.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Map.AsObject {
    return {
      word: this.word,
      phonemeGroups: this.phonemeGroups
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Map.AsProtobufJSON {
    return {
      word: this.word,
      phonemeGroups: this.phonemeGroups
    };
  }
}
export module Map {
  /**
   * Standard JavaScript object representation for Map
   */
  export interface AsObject {
    word: string;
    phonemeGroups: string;
  }

  /**
   * Protobuf JSON representation for Map
   */
  export interface AsProtobufJSON {
    word: string;
    phonemeGroups: string;
  }
}

/**
 * Message implementation for ondewo.t2s.ListCustomPhonemizerResponse
 */
export class ListCustomPhonemizerResponse implements GrpcMessage {
  static id = 'ondewo.t2s.ListCustomPhonemizerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCustomPhonemizerResponse();
    ListCustomPhonemizerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCustomPhonemizerResponse) {
    _instance.phonemizers = _instance.phonemizers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCustomPhonemizerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CustomPhonemizerProto();
          _reader.readMessage(
            messageInitializer1,
            CustomPhonemizerProto.deserializeBinaryFromReader
          );
          (_instance.phonemizers = _instance.phonemizers || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListCustomPhonemizerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCustomPhonemizerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.phonemizers && _instance.phonemizers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.phonemizers as any,
        CustomPhonemizerProto.serializeBinaryToWriter
      );
    }
  }

  private _phonemizers?: CustomPhonemizerProto[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCustomPhonemizerResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListCustomPhonemizerResponse.AsObject>
  ) {
    _value = _value || {};
    this.phonemizers = (_value.phonemizers || []).map(
      m => new CustomPhonemizerProto(m)
    );
    ListCustomPhonemizerResponse.refineValues(this);
  }
  get phonemizers(): CustomPhonemizerProto[] | undefined {
    return this._phonemizers;
  }
  set phonemizers(value: CustomPhonemizerProto[] | undefined) {
    this._phonemizers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCustomPhonemizerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCustomPhonemizerResponse.AsObject {
    return {
      phonemizers: (this.phonemizers || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListCustomPhonemizerResponse.AsProtobufJSON {
    return {
      phonemizers: (this.phonemizers || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListCustomPhonemizerResponse {
  /**
   * Standard JavaScript object representation for ListCustomPhonemizerResponse
   */
  export interface AsObject {
    phonemizers?: CustomPhonemizerProto.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListCustomPhonemizerResponse
   */
  export interface AsProtobufJSON {
    phonemizers: CustomPhonemizerProto.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.t2s.ListCustomPhonemizerRequest
 */
export class ListCustomPhonemizerRequest implements GrpcMessage {
  static id = 'ondewo.t2s.ListCustomPhonemizerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCustomPhonemizerRequest();
    ListCustomPhonemizerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCustomPhonemizerRequest) {
    _instance.pipelineIds = _instance.pipelineIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCustomPhonemizerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.pipelineIds = _instance.pipelineIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListCustomPhonemizerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCustomPhonemizerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pipelineIds && _instance.pipelineIds.length) {
      _writer.writeRepeatedString(1, _instance.pipelineIds);
    }
  }

  private _pipelineIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCustomPhonemizerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCustomPhonemizerRequest.AsObject>) {
    _value = _value || {};
    this.pipelineIds = (_value.pipelineIds || []).slice();
    ListCustomPhonemizerRequest.refineValues(this);
  }
  get pipelineIds(): string[] {
    return this._pipelineIds;
  }
  set pipelineIds(value: string[]) {
    this._pipelineIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCustomPhonemizerRequest.AsObject {
    return {
      pipelineIds: (this.pipelineIds || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListCustomPhonemizerRequest.AsProtobufJSON {
    return {
      pipelineIds: (this.pipelineIds || []).slice()
    };
  }
}
export module ListCustomPhonemizerRequest {
  /**
   * Standard JavaScript object representation for ListCustomPhonemizerRequest
   */
  export interface AsObject {
    pipelineIds: string[];
  }

  /**
   * Protobuf JSON representation for ListCustomPhonemizerRequest
   */
  export interface AsProtobufJSON {
    pipelineIds: string[];
  }
}

/**
 * Message implementation for ondewo.t2s.UpdateCustomPhonemizerRequest
 */
export class UpdateCustomPhonemizerRequest implements GrpcMessage {
  static id = 'ondewo.t2s.UpdateCustomPhonemizerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCustomPhonemizerRequest();
    UpdateCustomPhonemizerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCustomPhonemizerRequest) {
    _instance.id = _instance.id || '';
    _instance.updateMethod = _instance.updateMethod || 0;
    _instance.maps = _instance.maps || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCustomPhonemizerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.updateMethod = _reader.readEnum();
          break;
        case 3:
          const messageInitializer3 = new Map();
          _reader.readMessage(
            messageInitializer3,
            Map.deserializeBinaryFromReader
          );
          (_instance.maps = _instance.maps || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCustomPhonemizerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCustomPhonemizerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.updateMethod) {
      _writer.writeEnum(2, _instance.updateMethod);
    }
    if (_instance.maps && _instance.maps.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.maps as any,
        Map.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _updateMethod: UpdateCustomPhonemizerRequest.UpdateMethod;
  private _maps?: Map[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCustomPhonemizerRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateCustomPhonemizerRequest.AsObject>
  ) {
    _value = _value || {};
    this.id = _value.id;
    this.updateMethod = _value.updateMethod;
    this.maps = (_value.maps || []).map(m => new Map(m));
    UpdateCustomPhonemizerRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get updateMethod(): UpdateCustomPhonemizerRequest.UpdateMethod {
    return this._updateMethod;
  }
  set updateMethod(value: UpdateCustomPhonemizerRequest.UpdateMethod) {
    this._updateMethod = value;
  }
  get maps(): Map[] | undefined {
    return this._maps;
  }
  set maps(value: Map[] | undefined) {
    this._maps = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCustomPhonemizerRequest.AsObject {
    return {
      id: this.id,
      updateMethod: this.updateMethod,
      maps: (this.maps || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateCustomPhonemizerRequest.AsProtobufJSON {
    return {
      id: this.id,
      updateMethod:
        UpdateCustomPhonemizerRequest.UpdateMethod[
          this.updateMethod === null || this.updateMethod === undefined
            ? 0
            : this.updateMethod
        ],
      maps: (this.maps || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module UpdateCustomPhonemizerRequest {
  /**
   * Standard JavaScript object representation for UpdateCustomPhonemizerRequest
   */
  export interface AsObject {
    id: string;
    updateMethod: UpdateCustomPhonemizerRequest.UpdateMethod;
    maps?: Map.AsObject[];
  }

  /**
   * Protobuf JSON representation for UpdateCustomPhonemizerRequest
   */
  export interface AsProtobufJSON {
    id: string;
    updateMethod: string;
    maps: Map.AsProtobufJSON[] | null;
  }
  export enum UpdateMethod {
    extend_hard = 0,
    extend_soft = 1,
    replace = 2
  }
}

/**
 * Message implementation for ondewo.t2s.CreateCustomPhonemizerRequest
 */
export class CreateCustomPhonemizerRequest implements GrpcMessage {
  static id = 'ondewo.t2s.CreateCustomPhonemizerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateCustomPhonemizerRequest();
    CreateCustomPhonemizerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateCustomPhonemizerRequest) {
    _instance.prefix = _instance.prefix || '';
    _instance.maps = _instance.maps || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateCustomPhonemizerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.prefix = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new Map();
          _reader.readMessage(
            messageInitializer2,
            Map.deserializeBinaryFromReader
          );
          (_instance.maps = _instance.maps || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    CreateCustomPhonemizerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateCustomPhonemizerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.prefix) {
      _writer.writeString(1, _instance.prefix);
    }
    if (_instance.maps && _instance.maps.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.maps as any,
        Map.serializeBinaryToWriter
      );
    }
  }

  private _prefix: string;
  private _maps?: Map[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCustomPhonemizerRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateCustomPhonemizerRequest.AsObject>
  ) {
    _value = _value || {};
    this.prefix = _value.prefix;
    this.maps = (_value.maps || []).map(m => new Map(m));
    CreateCustomPhonemizerRequest.refineValues(this);
  }
  get prefix(): string {
    return this._prefix;
  }
  set prefix(value: string) {
    this._prefix = value;
  }
  get maps(): Map[] | undefined {
    return this._maps;
  }
  set maps(value: Map[] | undefined) {
    this._maps = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateCustomPhonemizerRequest.AsObject {
    return {
      prefix: this.prefix,
      maps: (this.maps || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateCustomPhonemizerRequest.AsProtobufJSON {
    return {
      prefix: this.prefix,
      maps: (this.maps || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CreateCustomPhonemizerRequest {
  /**
   * Standard JavaScript object representation for CreateCustomPhonemizerRequest
   */
  export interface AsObject {
    prefix: string;
    maps?: Map.AsObject[];
  }

  /**
   * Protobuf JSON representation for CreateCustomPhonemizerRequest
   */
  export interface AsProtobufJSON {
    prefix: string;
    maps: Map.AsProtobufJSON[] | null;
  }
}

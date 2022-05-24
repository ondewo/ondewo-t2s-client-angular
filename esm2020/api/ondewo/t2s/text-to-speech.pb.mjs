/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { uint8ArrayToBase64 } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
export var Pcm;
(function (Pcm) {
    Pcm[Pcm["PCM_16"] = 0] = "PCM_16";
    Pcm[Pcm["PCM_24"] = 1] = "PCM_24";
    Pcm[Pcm["PCM_32"] = 2] = "PCM_32";
    Pcm[Pcm["PCM_S8"] = 3] = "PCM_S8";
    Pcm[Pcm["PCM_U8"] = 4] = "PCM_U8";
    Pcm[Pcm["FLOAT"] = 5] = "FLOAT";
    Pcm[Pcm["DOUBLE"] = 6] = "DOUBLE";
})(Pcm || (Pcm = {}));
export var AudioFormat;
(function (AudioFormat) {
    AudioFormat[AudioFormat["wav"] = 0] = "wav";
    AudioFormat[AudioFormat["flac"] = 1] = "flac";
    AudioFormat[AudioFormat["caf"] = 2] = "caf";
    AudioFormat[AudioFormat["mp3"] = 3] = "mp3";
    AudioFormat[AudioFormat["aac"] = 4] = "aac";
    AudioFormat[AudioFormat["ogg"] = 5] = "ogg";
    AudioFormat[AudioFormat["wma"] = 6] = "wma";
})(AudioFormat || (AudioFormat = {}));
/**
 * Message implementation for ondewo.t2s.SynthesizeRequest
 */
export class SynthesizeRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SynthesizeRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.text = _value.text;
        this.config = _value.config ? new RequestConfig(_value.config) : undefined;
        SynthesizeRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SynthesizeRequest();
        SynthesizeRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.text = _instance.text || '';
        _instance.config = _instance.config || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.text = _reader.readString();
                    break;
                case 2:
                    _instance.config = new RequestConfig();
                    _reader.readMessage(_instance.config, RequestConfig.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.text) {
            _writer.writeString(1, _instance.text);
        }
        if (_instance.config) {
            _writer.writeMessage(2, _instance.config, RequestConfig.serializeBinaryToWriter);
        }
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
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
    toObject() {
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
    options) {
        return {
            text: this.text,
            config: this.config ? this.config.toProtobufJSON(options) : null
        };
    }
}
SynthesizeRequest.id = 'ondewo.t2s.SynthesizeRequest';
/**
 * Message implementation for ondewo.t2s.BatchSynthesizeRequest
 */
export class BatchSynthesizeRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchSynthesizeRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.batchRequest = (_value.batchRequest || []).map(m => new SynthesizeRequest(m));
        BatchSynthesizeRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchSynthesizeRequest();
        BatchSynthesizeRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.batchRequest = _instance.batchRequest || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new SynthesizeRequest();
                    _reader.readMessage(messageInitializer1, SynthesizeRequest.deserializeBinaryFromReader);
                    (_instance.batchRequest = _instance.batchRequest || []).push(messageInitializer1);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.batchRequest && _instance.batchRequest.length) {
            _writer.writeRepeatedMessage(1, _instance.batchRequest, SynthesizeRequest.serializeBinaryToWriter);
        }
    }
    get batchRequest() {
        return this._batchRequest;
    }
    set batchRequest(value) {
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
    toObject() {
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
    options) {
        return {
            batchRequest: (this.batchRequest || []).map(m => m.toProtobufJSON(options))
        };
    }
}
BatchSynthesizeRequest.id = 'ondewo.t2s.BatchSynthesizeRequest';
/**
 * Message implementation for ondewo.t2s.BatchSynthesizeResponse
 */
export class BatchSynthesizeResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchSynthesizeResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.batchResponse = (_value.batchResponse || []).map(m => new SynthesizeResponse(m));
        BatchSynthesizeResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchSynthesizeResponse();
        BatchSynthesizeResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.batchResponse = _instance.batchResponse || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new SynthesizeResponse();
                    _reader.readMessage(messageInitializer1, SynthesizeResponse.deserializeBinaryFromReader);
                    (_instance.batchResponse = _instance.batchResponse || []).push(messageInitializer1);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.batchResponse && _instance.batchResponse.length) {
            _writer.writeRepeatedMessage(1, _instance.batchResponse, SynthesizeResponse.serializeBinaryToWriter);
        }
    }
    get batchResponse() {
        return this._batchResponse;
    }
    set batchResponse(value) {
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
    toObject() {
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
    options) {
        return {
            batchResponse: (this.batchResponse || []).map(m => m.toProtobufJSON(options))
        };
    }
}
BatchSynthesizeResponse.id = 'ondewo.t2s.BatchSynthesizeResponse';
/**
 * Message implementation for ondewo.t2s.RequestConfig
 */
export class RequestConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RequestConfig to deeply clone from
     */
    constructor(_value) {
        this._oneofLengthScale = RequestConfig.OneofLengthScaleCase.none;
        this._oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.none;
        this._oneofSampleRate = RequestConfig.OneofSampleRateCase.none;
        this._oneofPcm = RequestConfig.OneofPcmCase.none;
        this._oneofAudioFormat = RequestConfig.OneofAudioFormatCase.none;
        this._oneofUseCache = RequestConfig.OneofUseCacheCase.none;
        _value = _value || {};
        this.t2sPipelineId = _value.t2sPipelineId;
        this.lengthScale = _value.lengthScale;
        this.noiseScale = _value.noiseScale;
        this.sampleRate = _value.sampleRate;
        this.pcm = _value.pcm;
        this.audioFormat = _value.audioFormat;
        this.useCache = _value.useCache;
        RequestConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RequestConfig();
        RequestConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.t2sPipelineId = _instance.t2sPipelineId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    }
    get t2sPipelineId() {
        return this._t2sPipelineId;
    }
    set t2sPipelineId(value) {
        this._t2sPipelineId = value;
    }
    get lengthScale() {
        return this._lengthScale;
    }
    set lengthScale(value) {
        if (value !== undefined && value !== null) {
            this._oneofLengthScale = RequestConfig.OneofLengthScaleCase.lengthScale;
        }
        this._lengthScale = value;
    }
    get noiseScale() {
        return this._noiseScale;
    }
    set noiseScale(value) {
        if (value !== undefined && value !== null) {
            this._oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.noiseScale;
        }
        this._noiseScale = value;
    }
    get sampleRate() {
        return this._sampleRate;
    }
    set sampleRate(value) {
        if (value !== undefined && value !== null) {
            this._oneofSampleRate = RequestConfig.OneofSampleRateCase.sampleRate;
        }
        this._sampleRate = value;
    }
    get pcm() {
        return this._pcm;
    }
    set pcm(value) {
        if (value !== undefined && value !== null) {
            this._oneofPcm = RequestConfig.OneofPcmCase.pcm;
        }
        this._pcm = value;
    }
    get audioFormat() {
        return this._audioFormat;
    }
    set audioFormat(value) {
        if (value !== undefined && value !== null) {
            this._oneofAudioFormat = RequestConfig.OneofAudioFormatCase.audioFormat;
        }
        this._audioFormat = value;
    }
    get useCache() {
        return this._useCache;
    }
    set useCache(value) {
        if (value !== undefined && value !== null) {
            this._oneofUseCache = RequestConfig.OneofUseCacheCase.useCache;
        }
        this._useCache = value;
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
    toObject() {
        return {
            t2sPipelineId: this.t2sPipelineId,
            lengthScale: this.lengthScale,
            noiseScale: this.noiseScale,
            sampleRate: this.sampleRate,
            pcm: this.pcm,
            audioFormat: this.audioFormat,
            useCache: this.useCache
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
    options) {
        return {
            t2sPipelineId: this.t2sPipelineId,
            lengthScale: this.lengthScale === null || this.lengthScale === undefined
                ? null
                : this.lengthScale,
            noiseScale: this.noiseScale === null || this.noiseScale === undefined
                ? null
                : this.noiseScale,
            sampleRate: this.sampleRate === null || this.sampleRate === undefined
                ? null
                : this.sampleRate,
            pcm: this.pcm === undefined
                ? null
                : Pcm[this.pcm === null || this.pcm === undefined ? 0 : this.pcm],
            audioFormat: this.audioFormat === undefined
                ? null
                : AudioFormat[this.audioFormat === null || this.audioFormat === undefined
                    ? 0
                    : this.audioFormat],
            useCache: this.useCache
        };
    }
}
RequestConfig.id = 'ondewo.t2s.RequestConfig';
(function (RequestConfig) {
    let OneofLengthScaleCase;
    (function (OneofLengthScaleCase) {
        OneofLengthScaleCase[OneofLengthScaleCase["none"] = 0] = "none";
        OneofLengthScaleCase[OneofLengthScaleCase["lengthScale"] = 1] = "lengthScale";
    })(OneofLengthScaleCase = RequestConfig.OneofLengthScaleCase || (RequestConfig.OneofLengthScaleCase = {}));
    let OneofNoiseScaleCase;
    (function (OneofNoiseScaleCase) {
        OneofNoiseScaleCase[OneofNoiseScaleCase["none"] = 0] = "none";
        OneofNoiseScaleCase[OneofNoiseScaleCase["noiseScale"] = 1] = "noiseScale";
    })(OneofNoiseScaleCase = RequestConfig.OneofNoiseScaleCase || (RequestConfig.OneofNoiseScaleCase = {}));
    let OneofSampleRateCase;
    (function (OneofSampleRateCase) {
        OneofSampleRateCase[OneofSampleRateCase["none"] = 0] = "none";
        OneofSampleRateCase[OneofSampleRateCase["sampleRate"] = 1] = "sampleRate";
    })(OneofSampleRateCase = RequestConfig.OneofSampleRateCase || (RequestConfig.OneofSampleRateCase = {}));
    let OneofPcmCase;
    (function (OneofPcmCase) {
        OneofPcmCase[OneofPcmCase["none"] = 0] = "none";
        OneofPcmCase[OneofPcmCase["pcm"] = 1] = "pcm";
    })(OneofPcmCase = RequestConfig.OneofPcmCase || (RequestConfig.OneofPcmCase = {}));
    let OneofAudioFormatCase;
    (function (OneofAudioFormatCase) {
        OneofAudioFormatCase[OneofAudioFormatCase["none"] = 0] = "none";
        OneofAudioFormatCase[OneofAudioFormatCase["audioFormat"] = 1] = "audioFormat";
    })(OneofAudioFormatCase = RequestConfig.OneofAudioFormatCase || (RequestConfig.OneofAudioFormatCase = {}));
    let OneofUseCacheCase;
    (function (OneofUseCacheCase) {
        OneofUseCacheCase[OneofUseCacheCase["none"] = 0] = "none";
        OneofUseCacheCase[OneofUseCacheCase["useCache"] = 1] = "useCache";
    })(OneofUseCacheCase = RequestConfig.OneofUseCacheCase || (RequestConfig.OneofUseCacheCase = {}));
})(RequestConfig || (RequestConfig = {}));
/**
 * Message implementation for ondewo.t2s.SynthesizeResponse
 */
export class SynthesizeResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SynthesizeResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.audioUuid = _value.audioUuid;
        this.audio = _value.audio;
        this.generationTime = _value.generationTime;
        this.audioLength = _value.audioLength;
        this.text = _value.text;
        this.config = _value.config ? new RequestConfig(_value.config) : undefined;
        this.normalizedText = _value.normalizedText;
        SynthesizeResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SynthesizeResponse();
        SynthesizeResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.audioUuid = _instance.audioUuid || '';
        _instance.audio = _instance.audio || new Uint8Array();
        _instance.generationTime = _instance.generationTime || 0;
        _instance.audioLength = _instance.audioLength || 0;
        _instance.text = _instance.text || '';
        _instance.config = _instance.config || undefined;
        _instance.normalizedText = _instance.normalizedText || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    _reader.readMessage(_instance.config, RequestConfig.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.normalizedText = _reader.readString();
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
    static serializeBinaryToWriter(_instance, _writer) {
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
            _writer.writeMessage(6, _instance.config, RequestConfig.serializeBinaryToWriter);
        }
        if (_instance.normalizedText) {
            _writer.writeString(7, _instance.normalizedText);
        }
    }
    get audioUuid() {
        return this._audioUuid;
    }
    set audioUuid(value) {
        this._audioUuid = value;
    }
    get audio() {
        return this._audio;
    }
    set audio(value) {
        this._audio = value;
    }
    get generationTime() {
        return this._generationTime;
    }
    set generationTime(value) {
        this._generationTime = value;
    }
    get audioLength() {
        return this._audioLength;
    }
    set audioLength(value) {
        this._audioLength = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get normalizedText() {
        return this._normalizedText;
    }
    set normalizedText(value) {
        this._normalizedText = value;
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
    toObject() {
        return {
            audioUuid: this.audioUuid,
            audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
            generationTime: this.generationTime,
            audioLength: this.audioLength,
            text: this.text,
            config: this.config ? this.config.toObject() : undefined,
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
    options) {
        return {
            audioUuid: this.audioUuid,
            audio: this.audio ? uint8ArrayToBase64(this.audio) : '',
            generationTime: this.generationTime,
            audioLength: this.audioLength,
            text: this.text,
            config: this.config ? this.config.toProtobufJSON(options) : null,
            normalizedText: this.normalizedText
        };
    }
}
SynthesizeResponse.id = 'ondewo.t2s.SynthesizeResponse';
/**
 * Message implementation for ondewo.t2s.T2SGetServiceInfoResponse
 */
export class T2SGetServiceInfoResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SGetServiceInfoResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.version = _value.version;
        T2SGetServiceInfoResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2SGetServiceInfoResponse();
        T2SGetServiceInfoResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.version = _instance.version || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.version) {
            _writer.writeString(1, _instance.version);
        }
    }
    get version() {
        return this._version;
    }
    set version(value) {
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
    toObject() {
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
    options) {
        return {
            version: this.version
        };
    }
}
T2SGetServiceInfoResponse.id = 'ondewo.t2s.T2SGetServiceInfoResponse';
/**
 * Message implementation for ondewo.t2s.ListT2sPipelinesRequest
 */
export class ListT2sPipelinesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sPipelinesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languages = (_value.languages || []).slice();
        this.speakerSexes = (_value.speakerSexes || []).slice();
        this.pipelineOwners = (_value.pipelineOwners || []).slice();
        this.speakerNames = (_value.speakerNames || []).slice();
        this.domains = (_value.domains || []).slice();
        ListT2sPipelinesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListT2sPipelinesRequest();
        ListT2sPipelinesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.languages = _instance.languages || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.speakerSexes = _instance.speakerSexes || []).push(_reader.readString());
                    break;
                case 3:
                    (_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
                    break;
                case 4:
                    (_instance.speakerNames = _instance.speakerNames || []).push(_reader.readString());
                    break;
                case 5:
                    (_instance.domains = _instance.domains || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get languages() {
        return this._languages;
    }
    set languages(value) {
        this._languages = value;
    }
    get speakerSexes() {
        return this._speakerSexes;
    }
    set speakerSexes(value) {
        this._speakerSexes = value;
    }
    get pipelineOwners() {
        return this._pipelineOwners;
    }
    set pipelineOwners(value) {
        this._pipelineOwners = value;
    }
    get speakerNames() {
        return this._speakerNames;
    }
    set speakerNames(value) {
        this._speakerNames = value;
    }
    get domains() {
        return this._domains;
    }
    set domains(value) {
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
    toObject() {
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
    options) {
        return {
            languages: (this.languages || []).slice(),
            speakerSexes: (this.speakerSexes || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice(),
            speakerNames: (this.speakerNames || []).slice(),
            domains: (this.domains || []).slice()
        };
    }
}
ListT2sPipelinesRequest.id = 'ondewo.t2s.ListT2sPipelinesRequest';
/**
 * Message implementation for ondewo.t2s.ListT2sPipelinesResponse
 */
export class ListT2sPipelinesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sPipelinesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pipelines = (_value.pipelines || []).map(m => new Text2SpeechConfig(m));
        ListT2sPipelinesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListT2sPipelinesResponse();
        ListT2sPipelinesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.pipelines = _instance.pipelines || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Text2SpeechConfig();
                    _reader.readMessage(messageInitializer1, Text2SpeechConfig.deserializeBinaryFromReader);
                    (_instance.pipelines = _instance.pipelines || []).push(messageInitializer1);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.pipelines && _instance.pipelines.length) {
            _writer.writeRepeatedMessage(1, _instance.pipelines, Text2SpeechConfig.serializeBinaryToWriter);
        }
    }
    get pipelines() {
        return this._pipelines;
    }
    set pipelines(value) {
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
    toObject() {
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
    options) {
        return {
            pipelines: (this.pipelines || []).map(m => m.toProtobufJSON(options))
        };
    }
}
ListT2sPipelinesResponse.id = 'ondewo.t2s.ListT2sPipelinesResponse';
/**
 * Message implementation for ondewo.t2s.ListT2sLanguagesRequest
 */
export class ListT2sLanguagesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sLanguagesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.speakerSexes = (_value.speakerSexes || []).slice();
        this.pipelineOwners = (_value.pipelineOwners || []).slice();
        this.speakerNames = (_value.speakerNames || []).slice();
        this.domains = (_value.domains || []).slice();
        ListT2sLanguagesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListT2sLanguagesRequest();
        ListT2sLanguagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.speakerSexes = _instance.speakerSexes || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
                    break;
                case 3:
                    (_instance.speakerNames = _instance.speakerNames || []).push(_reader.readString());
                    break;
                case 4:
                    (_instance.domains = _instance.domains || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get speakerSexes() {
        return this._speakerSexes;
    }
    set speakerSexes(value) {
        this._speakerSexes = value;
    }
    get pipelineOwners() {
        return this._pipelineOwners;
    }
    set pipelineOwners(value) {
        this._pipelineOwners = value;
    }
    get speakerNames() {
        return this._speakerNames;
    }
    set speakerNames(value) {
        this._speakerNames = value;
    }
    get domains() {
        return this._domains;
    }
    set domains(value) {
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
    toObject() {
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
    options) {
        return {
            speakerSexes: (this.speakerSexes || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice(),
            speakerNames: (this.speakerNames || []).slice(),
            domains: (this.domains || []).slice()
        };
    }
}
ListT2sLanguagesRequest.id = 'ondewo.t2s.ListT2sLanguagesRequest';
/**
 * Message implementation for ondewo.t2s.ListT2sLanguagesResponse
 */
export class ListT2sLanguagesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sLanguagesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languages = (_value.languages || []).slice();
        ListT2sLanguagesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListT2sLanguagesResponse();
        ListT2sLanguagesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languages = _instance.languages || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.languages = _instance.languages || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languages && _instance.languages.length) {
            _writer.writeRepeatedString(1, _instance.languages);
        }
    }
    get languages() {
        return this._languages;
    }
    set languages(value) {
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
    toObject() {
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
    options) {
        return {
            languages: (this.languages || []).slice()
        };
    }
}
ListT2sLanguagesResponse.id = 'ondewo.t2s.ListT2sLanguagesResponse';
/**
 * Message implementation for ondewo.t2s.ListT2sDomainsRequest
 */
export class ListT2sDomainsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sDomainsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.speakerSexes = (_value.speakerSexes || []).slice();
        this.pipelineOwners = (_value.pipelineOwners || []).slice();
        this.speakerNames = (_value.speakerNames || []).slice();
        this.languages = (_value.languages || []).slice();
        ListT2sDomainsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListT2sDomainsRequest();
        ListT2sDomainsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.speakerSexes = _instance.speakerSexes || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
                    break;
                case 3:
                    (_instance.speakerNames = _instance.speakerNames || []).push(_reader.readString());
                    break;
                case 4:
                    (_instance.languages = _instance.languages || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get speakerSexes() {
        return this._speakerSexes;
    }
    set speakerSexes(value) {
        this._speakerSexes = value;
    }
    get pipelineOwners() {
        return this._pipelineOwners;
    }
    set pipelineOwners(value) {
        this._pipelineOwners = value;
    }
    get speakerNames() {
        return this._speakerNames;
    }
    set speakerNames(value) {
        this._speakerNames = value;
    }
    get languages() {
        return this._languages;
    }
    set languages(value) {
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
    toObject() {
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
    options) {
        return {
            speakerSexes: (this.speakerSexes || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice(),
            speakerNames: (this.speakerNames || []).slice(),
            languages: (this.languages || []).slice()
        };
    }
}
ListT2sDomainsRequest.id = 'ondewo.t2s.ListT2sDomainsRequest';
/**
 * Message implementation for ondewo.t2s.ListT2sDomainsResponse
 */
export class ListT2sDomainsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sDomainsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.domains = (_value.domains || []).slice();
        ListT2sDomainsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListT2sDomainsResponse();
        ListT2sDomainsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.domains = _instance.domains || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.domains = _instance.domains || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.domains && _instance.domains.length) {
            _writer.writeRepeatedString(1, _instance.domains);
        }
    }
    get domains() {
        return this._domains;
    }
    set domains(value) {
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
    toObject() {
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
    options) {
        return {
            domains: (this.domains || []).slice()
        };
    }
}
ListT2sDomainsResponse.id = 'ondewo.t2s.ListT2sDomainsResponse';
/**
 * Message implementation for ondewo.t2s.T2sPipelineId
 */
export class T2sPipelineId {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sPipelineId to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        T2sPipelineId.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sPipelineId();
        T2sPipelineId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
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
    toObject() {
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
    options) {
        return {
            id: this.id
        };
    }
}
T2sPipelineId.id = 'ondewo.t2s.T2sPipelineId';
/**
 * Message implementation for ondewo.t2s.Text2SpeechConfig
 */
export class Text2SpeechConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text2SpeechConfig to deeply clone from
     */
    constructor(_value) {
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Text2SpeechConfig();
        Text2SpeechConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.id = _reader.readString();
                    break;
                case 2:
                    _instance.description = new T2SDescription();
                    _reader.readMessage(_instance.description, T2SDescription.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.active = _reader.readBool();
                    break;
                case 4:
                    _instance.inference = new T2SInference();
                    _reader.readMessage(_instance.inference, T2SInference.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.normalization = new T2SNormalization();
                    _reader.readMessage(_instance.normalization, T2SNormalization.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.postprocessing = new Postprocessing();
                    _reader.readMessage(_instance.postprocessing, Postprocessing.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
        if (_instance.description) {
            _writer.writeMessage(2, _instance.description, T2SDescription.serializeBinaryToWriter);
        }
        if (_instance.active) {
            _writer.writeBool(3, _instance.active);
        }
        if (_instance.inference) {
            _writer.writeMessage(4, _instance.inference, T2SInference.serializeBinaryToWriter);
        }
        if (_instance.normalization) {
            _writer.writeMessage(5, _instance.normalization, T2SNormalization.serializeBinaryToWriter);
        }
        if (_instance.postprocessing) {
            _writer.writeMessage(6, _instance.postprocessing, Postprocessing.serializeBinaryToWriter);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
    get inference() {
        return this._inference;
    }
    set inference(value) {
        this._inference = value;
    }
    get normalization() {
        return this._normalization;
    }
    set normalization(value) {
        this._normalization = value;
    }
    get postprocessing() {
        return this._postprocessing;
    }
    set postprocessing(value) {
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
    toObject() {
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
    options) {
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
Text2SpeechConfig.id = 'ondewo.t2s.Text2SpeechConfig';
/**
 * Message implementation for ondewo.t2s.T2SDescription
 */
export class T2SDescription {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SDescription to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        this.speakerSex = _value.speakerSex;
        this.pipelineOwner = _value.pipelineOwner;
        this.comments = _value.comments;
        this.speakerName = _value.speakerName;
        this.domain = _value.domain;
        T2SDescription.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2SDescription();
        T2SDescription.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get speakerSex() {
        return this._speakerSex;
    }
    set speakerSex(value) {
        this._speakerSex = value;
    }
    get pipelineOwner() {
        return this._pipelineOwner;
    }
    set pipelineOwner(value) {
        this._pipelineOwner = value;
    }
    get comments() {
        return this._comments;
    }
    set comments(value) {
        this._comments = value;
    }
    get speakerName() {
        return this._speakerName;
    }
    set speakerName(value) {
        this._speakerName = value;
    }
    get domain() {
        return this._domain;
    }
    set domain(value) {
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
    toObject() {
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
    options) {
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
T2SDescription.id = 'ondewo.t2s.T2SDescription';
/**
 * Message implementation for ondewo.t2s.T2SInference
 */
export class T2SInference {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SInference to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.type = _value.type;
        this.compositeInference = _value.compositeInference
            ? new CompositeInference(_value.compositeInference)
            : undefined;
        this.caching = _value.caching ? new Caching(_value.caching) : undefined;
        T2SInference.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2SInference();
        T2SInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.type = _instance.type || '';
        _instance.compositeInference = _instance.compositeInference || undefined;
        _instance.caching = _instance.caching || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.type = _reader.readString();
                    break;
                case 2:
                    _instance.compositeInference = new CompositeInference();
                    _reader.readMessage(_instance.compositeInference, CompositeInference.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.caching = new Caching();
                    _reader.readMessage(_instance.caching, Caching.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.type) {
            _writer.writeString(1, _instance.type);
        }
        if (_instance.compositeInference) {
            _writer.writeMessage(2, _instance.compositeInference, CompositeInference.serializeBinaryToWriter);
        }
        if (_instance.caching) {
            _writer.writeMessage(3, _instance.caching, Caching.serializeBinaryToWriter);
        }
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get compositeInference() {
        return this._compositeInference;
    }
    set compositeInference(value) {
        this._compositeInference = value;
    }
    get caching() {
        return this._caching;
    }
    set caching(value) {
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
    toObject() {
        return {
            type: this.type,
            compositeInference: this.compositeInference
                ? this.compositeInference.toObject()
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
    options) {
        return {
            type: this.type,
            compositeInference: this.compositeInference
                ? this.compositeInference.toProtobufJSON(options)
                : null,
            caching: this.caching ? this.caching.toProtobufJSON(options) : null
        };
    }
}
T2SInference.id = 'ondewo.t2s.T2SInference';
/**
 * Message implementation for ondewo.t2s.CompositeInference
 */
export class CompositeInference {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CompositeInference to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.text2mel = _value.text2mel ? new Text2Mel(_value.text2mel) : undefined;
        this.mel2audio = _value.mel2audio
            ? new Mel2Audio(_value.mel2audio)
            : undefined;
        CompositeInference.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CompositeInference();
        CompositeInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.text2mel = _instance.text2mel || undefined;
        _instance.mel2audio = _instance.mel2audio || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.text2mel = new Text2Mel();
                    _reader.readMessage(_instance.text2mel, Text2Mel.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.mel2audio = new Mel2Audio();
                    _reader.readMessage(_instance.mel2audio, Mel2Audio.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.text2mel) {
            _writer.writeMessage(1, _instance.text2mel, Text2Mel.serializeBinaryToWriter);
        }
        if (_instance.mel2audio) {
            _writer.writeMessage(2, _instance.mel2audio, Mel2Audio.serializeBinaryToWriter);
        }
    }
    get text2mel() {
        return this._text2mel;
    }
    set text2mel(value) {
        this._text2mel = value;
    }
    get mel2audio() {
        return this._mel2audio;
    }
    set mel2audio(value) {
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
    toObject() {
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
    options) {
        return {
            text2mel: this.text2mel ? this.text2mel.toProtobufJSON(options) : null,
            mel2audio: this.mel2audio ? this.mel2audio.toProtobufJSON(options) : null
        };
    }
}
CompositeInference.id = 'ondewo.t2s.CompositeInference';
/**
 * Message implementation for ondewo.t2s.Text2Mel
 */
export class Text2Mel {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text2Mel to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.type = _value.type;
        this.glowTts = _value.glowTts ? new GlowTTS(_value.glowTts) : undefined;
        this.glowTtsTriton = _value.glowTtsTriton
            ? new GlowTTSTriton(_value.glowTtsTriton)
            : undefined;
        Text2Mel.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Text2Mel();
        Text2Mel.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.type = _instance.type || '';
        _instance.glowTts = _instance.glowTts || undefined;
        _instance.glowTtsTriton = _instance.glowTtsTriton || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.type = _reader.readString();
                    break;
                case 2:
                    _instance.glowTts = new GlowTTS();
                    _reader.readMessage(_instance.glowTts, GlowTTS.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.glowTtsTriton = new GlowTTSTriton();
                    _reader.readMessage(_instance.glowTtsTriton, GlowTTSTriton.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.type) {
            _writer.writeString(1, _instance.type);
        }
        if (_instance.glowTts) {
            _writer.writeMessage(2, _instance.glowTts, GlowTTS.serializeBinaryToWriter);
        }
        if (_instance.glowTtsTriton) {
            _writer.writeMessage(3, _instance.glowTtsTriton, GlowTTSTriton.serializeBinaryToWriter);
        }
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get glowTts() {
        return this._glowTts;
    }
    set glowTts(value) {
        this._glowTts = value;
    }
    get glowTtsTriton() {
        return this._glowTtsTriton;
    }
    set glowTtsTriton(value) {
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
    toObject() {
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
    options) {
        return {
            type: this.type,
            glowTts: this.glowTts ? this.glowTts.toProtobufJSON(options) : null,
            glowTtsTriton: this.glowTtsTriton
                ? this.glowTtsTriton.toProtobufJSON(options)
                : null
        };
    }
}
Text2Mel.id = 'ondewo.t2s.Text2Mel';
/**
 * Message implementation for ondewo.t2s.GlowTTS
 */
export class GlowTTS {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GlowTTS to deeply clone from
     */
    constructor(_value) {
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GlowTTS();
        GlowTTS.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    (_instance.cleaners = _instance.cleaners || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get batchSize() {
        return this._batchSize;
    }
    set batchSize(value) {
        this._batchSize = value;
    }
    get useGpu() {
        return this._useGpu;
    }
    set useGpu(value) {
        this._useGpu = value;
    }
    get lengthScale() {
        return this._lengthScale;
    }
    set lengthScale(value) {
        this._lengthScale = value;
    }
    get noiseScale() {
        return this._noiseScale;
    }
    set noiseScale(value) {
        this._noiseScale = value;
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    get cleaners() {
        return this._cleaners;
    }
    set cleaners(value) {
        this._cleaners = value;
    }
    get paramConfigPath() {
        return this._paramConfigPath;
    }
    set paramConfigPath(value) {
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
    toObject() {
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
    options) {
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
GlowTTS.id = 'ondewo.t2s.GlowTTS';
/**
 * Message implementation for ondewo.t2s.GlowTTSTriton
 */
export class GlowTTSTriton {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GlowTTSTriton to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.batchSize = _value.batchSize;
        this.lengthScale = _value.lengthScale;
        this.noiseScale = _value.noiseScale;
        this.cleaners = (_value.cleaners || []).slice();
        this.maxTextLength = _value.maxTextLength;
        this.paramConfigPath = _value.paramConfigPath;
        this.tritonModelName = _value.tritonModelName;
        GlowTTSTriton.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GlowTTSTriton();
        GlowTTSTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.batchSize = _instance.batchSize || '0';
        _instance.lengthScale = _instance.lengthScale || 0;
        _instance.noiseScale = _instance.noiseScale || 0;
        _instance.cleaners = _instance.cleaners || [];
        _instance.maxTextLength = _instance.maxTextLength || '0';
        _instance.paramConfigPath = _instance.paramConfigPath || '';
        _instance.tritonModelName = _instance.tritonModelName || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    (_instance.cleaners = _instance.cleaners || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    }
    get batchSize() {
        return this._batchSize;
    }
    set batchSize(value) {
        this._batchSize = value;
    }
    get lengthScale() {
        return this._lengthScale;
    }
    set lengthScale(value) {
        this._lengthScale = value;
    }
    get noiseScale() {
        return this._noiseScale;
    }
    set noiseScale(value) {
        this._noiseScale = value;
    }
    get cleaners() {
        return this._cleaners;
    }
    set cleaners(value) {
        this._cleaners = value;
    }
    get maxTextLength() {
        return this._maxTextLength;
    }
    set maxTextLength(value) {
        this._maxTextLength = value;
    }
    get paramConfigPath() {
        return this._paramConfigPath;
    }
    set paramConfigPath(value) {
        this._paramConfigPath = value;
    }
    get tritonModelName() {
        return this._tritonModelName;
    }
    set tritonModelName(value) {
        this._tritonModelName = value;
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
    toObject() {
        return {
            batchSize: this.batchSize,
            lengthScale: this.lengthScale,
            noiseScale: this.noiseScale,
            cleaners: (this.cleaners || []).slice(),
            maxTextLength: this.maxTextLength,
            paramConfigPath: this.paramConfigPath,
            tritonModelName: this.tritonModelName
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
    options) {
        return {
            batchSize: this.batchSize,
            lengthScale: this.lengthScale,
            noiseScale: this.noiseScale,
            cleaners: (this.cleaners || []).slice(),
            maxTextLength: this.maxTextLength,
            paramConfigPath: this.paramConfigPath,
            tritonModelName: this.tritonModelName
        };
    }
}
GlowTTSTriton.id = 'ondewo.t2s.GlowTTSTriton';
/**
 * Message implementation for ondewo.t2s.Mel2Audio
 */
export class Mel2Audio {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Mel2Audio to deeply clone from
     */
    constructor(_value) {
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Mel2Audio();
        Mel2Audio.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.type = _reader.readString();
                    break;
                case 2:
                    _instance.mbMelganTriton = new MbMelganTriton();
                    _reader.readMessage(_instance.mbMelganTriton, MbMelganTriton.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.hifiGan = new HiFiGan();
                    _reader.readMessage(_instance.hifiGan, HiFiGan.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.hifiGanTriton = new HiFiGanTriton();
                    _reader.readMessage(_instance.hifiGanTriton, HiFiGanTriton.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.type) {
            _writer.writeString(1, _instance.type);
        }
        if (_instance.mbMelganTriton) {
            _writer.writeMessage(2, _instance.mbMelganTriton, MbMelganTriton.serializeBinaryToWriter);
        }
        if (_instance.hifiGan) {
            _writer.writeMessage(3, _instance.hifiGan, HiFiGan.serializeBinaryToWriter);
        }
        if (_instance.hifiGanTriton) {
            _writer.writeMessage(4, _instance.hifiGanTriton, HiFiGanTriton.serializeBinaryToWriter);
        }
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get mbMelganTriton() {
        return this._mbMelganTriton;
    }
    set mbMelganTriton(value) {
        this._mbMelganTriton = value;
    }
    get hifiGan() {
        return this._hifiGan;
    }
    set hifiGan(value) {
        this._hifiGan = value;
    }
    get hifiGanTriton() {
        return this._hifiGanTriton;
    }
    set hifiGanTriton(value) {
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
    toObject() {
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
    options) {
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
Mel2Audio.id = 'ondewo.t2s.Mel2Audio';
/**
 * Message implementation for ondewo.t2s.HiFiGan
 */
export class HiFiGan {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HiFiGan to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.useGpu = _value.useGpu;
        this.batchSize = _value.batchSize;
        this.configPath = _value.configPath;
        this.modelPath = _value.modelPath;
        HiFiGan.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new HiFiGan();
        HiFiGan.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get useGpu() {
        return this._useGpu;
    }
    set useGpu(value) {
        this._useGpu = value;
    }
    get batchSize() {
        return this._batchSize;
    }
    set batchSize(value) {
        this._batchSize = value;
    }
    get configPath() {
        return this._configPath;
    }
    set configPath(value) {
        this._configPath = value;
    }
    get modelPath() {
        return this._modelPath;
    }
    set modelPath(value) {
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
    toObject() {
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
    options) {
        return {
            useGpu: this.useGpu,
            batchSize: this.batchSize,
            configPath: this.configPath,
            modelPath: this.modelPath
        };
    }
}
HiFiGan.id = 'ondewo.t2s.HiFiGan';
/**
 * Message implementation for ondewo.t2s.HiFiGanTriton
 */
export class HiFiGanTriton {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HiFiGanTriton to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.configPath = _value.configPath;
        this.tritonModelName = _value.tritonModelName;
        HiFiGanTriton.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new HiFiGanTriton();
        HiFiGanTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.configPath = _instance.configPath || '';
        _instance.tritonModelName = _instance.tritonModelName || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.configPath = _reader.readString();
                    break;
                case 2:
                    _instance.tritonModelName = _reader.readString();
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.configPath) {
            _writer.writeString(1, _instance.configPath);
        }
        if (_instance.tritonModelName) {
            _writer.writeString(2, _instance.tritonModelName);
        }
    }
    get configPath() {
        return this._configPath;
    }
    set configPath(value) {
        this._configPath = value;
    }
    get tritonModelName() {
        return this._tritonModelName;
    }
    set tritonModelName(value) {
        this._tritonModelName = value;
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
    toObject() {
        return {
            configPath: this.configPath,
            tritonModelName: this.tritonModelName
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
    options) {
        return {
            configPath: this.configPath,
            tritonModelName: this.tritonModelName
        };
    }
}
HiFiGanTriton.id = 'ondewo.t2s.HiFiGanTriton';
/**
 * Message implementation for ondewo.t2s.MbMelganTriton
 */
export class MbMelganTriton {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MbMelganTriton to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.configPath = _value.configPath;
        this.statsPath = _value.statsPath;
        this.tritonModelName = _value.tritonModelName;
        this.tritonUrl = _value.tritonUrl;
        MbMelganTriton.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MbMelganTriton();
        MbMelganTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.configPath = _instance.configPath || '';
        _instance.statsPath = _instance.statsPath || '';
        _instance.tritonModelName = _instance.tritonModelName || '';
        _instance.tritonUrl = _instance.tritonUrl || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    _instance.tritonUrl = _reader.readString();
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.configPath) {
            _writer.writeString(1, _instance.configPath);
        }
        if (_instance.statsPath) {
            _writer.writeString(2, _instance.statsPath);
        }
        if (_instance.tritonModelName) {
            _writer.writeString(3, _instance.tritonModelName);
        }
        if (_instance.tritonUrl) {
            _writer.writeString(4, _instance.tritonUrl);
        }
    }
    get configPath() {
        return this._configPath;
    }
    set configPath(value) {
        this._configPath = value;
    }
    get statsPath() {
        return this._statsPath;
    }
    set statsPath(value) {
        this._statsPath = value;
    }
    get tritonModelName() {
        return this._tritonModelName;
    }
    set tritonModelName(value) {
        this._tritonModelName = value;
    }
    get tritonUrl() {
        return this._tritonUrl;
    }
    set tritonUrl(value) {
        this._tritonUrl = value;
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
    toObject() {
        return {
            configPath: this.configPath,
            statsPath: this.statsPath,
            tritonModelName: this.tritonModelName,
            tritonUrl: this.tritonUrl
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
    options) {
        return {
            configPath: this.configPath,
            statsPath: this.statsPath,
            tritonModelName: this.tritonModelName,
            tritonUrl: this.tritonUrl
        };
    }
}
MbMelganTriton.id = 'ondewo.t2s.MbMelganTriton';
/**
 * Message implementation for ondewo.t2s.Caching
 */
export class Caching {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Caching to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.active = _value.active;
        this.memoryCacheMaxSize = _value.memoryCacheMaxSize;
        this.samplingRate = _value.samplingRate;
        this.loadCache = _value.loadCache;
        this.saveCache = _value.saveCache;
        this.cacheSaveDir = _value.cacheSaveDir;
        Caching.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Caching();
        Caching.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
    get memoryCacheMaxSize() {
        return this._memoryCacheMaxSize;
    }
    set memoryCacheMaxSize(value) {
        this._memoryCacheMaxSize = value;
    }
    get samplingRate() {
        return this._samplingRate;
    }
    set samplingRate(value) {
        this._samplingRate = value;
    }
    get loadCache() {
        return this._loadCache;
    }
    set loadCache(value) {
        this._loadCache = value;
    }
    get saveCache() {
        return this._saveCache;
    }
    set saveCache(value) {
        this._saveCache = value;
    }
    get cacheSaveDir() {
        return this._cacheSaveDir;
    }
    set cacheSaveDir(value) {
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
    toObject() {
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
    options) {
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
Caching.id = 'ondewo.t2s.Caching';
/**
 * Message implementation for ondewo.t2s.T2SNormalization
 */
export class T2SNormalization {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SNormalization to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        this.pipeline = (_value.pipeline || []).slice();
        this.customPhonemizerId = _value.customPhonemizerId;
        this.customLengthScales = _value.customLengthScales
            ? new T2SCustomLengthScales(_value.customLengthScales)
            : undefined;
        this.arpabetMappping = _value.arpabetMappping;
        T2SNormalization.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2SNormalization();
        T2SNormalization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.language = _instance.language || '';
        _instance.pipeline = _instance.pipeline || [];
        _instance.customPhonemizerId = _instance.customPhonemizerId || '';
        _instance.customLengthScales = _instance.customLengthScales || undefined;
        _instance.arpabetMappping = _instance.arpabetMappping || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.language = _reader.readString();
                    break;
                case 2:
                    (_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
                    break;
                case 3:
                    _instance.customPhonemizerId = _reader.readString();
                    break;
                case 4:
                    _instance.customLengthScales = new T2SCustomLengthScales();
                    _reader.readMessage(_instance.customLengthScales, T2SCustomLengthScales.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.arpabetMappping = _reader.readString();
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
    static serializeBinaryToWriter(_instance, _writer) {
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
            _writer.writeMessage(4, _instance.customLengthScales, T2SCustomLengthScales.serializeBinaryToWriter);
        }
        if (_instance.arpabetMappping) {
            _writer.writeString(5, _instance.arpabetMappping);
        }
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get pipeline() {
        return this._pipeline;
    }
    set pipeline(value) {
        this._pipeline = value;
    }
    get customPhonemizerId() {
        return this._customPhonemizerId;
    }
    set customPhonemizerId(value) {
        this._customPhonemizerId = value;
    }
    get customLengthScales() {
        return this._customLengthScales;
    }
    set customLengthScales(value) {
        this._customLengthScales = value;
    }
    get arpabetMappping() {
        return this._arpabetMappping;
    }
    set arpabetMappping(value) {
        this._arpabetMappping = value;
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
    toObject() {
        return {
            language: this.language,
            pipeline: (this.pipeline || []).slice(),
            customPhonemizerId: this.customPhonemizerId,
            customLengthScales: this.customLengthScales
                ? this.customLengthScales.toObject()
                : undefined,
            arpabetMappping: this.arpabetMappping
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
    options) {
        return {
            language: this.language,
            pipeline: (this.pipeline || []).slice(),
            customPhonemizerId: this.customPhonemizerId,
            customLengthScales: this.customLengthScales
                ? this.customLengthScales.toProtobufJSON(options)
                : null,
            arpabetMappping: this.arpabetMappping
        };
    }
}
T2SNormalization.id = 'ondewo.t2s.T2SNormalization';
/**
 * Message implementation for ondewo.t2s.Postprocessing
 */
export class Postprocessing {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Postprocessing to deeply clone from
     */
    constructor(_value) {
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
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Postprocessing();
        Postprocessing.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.silenceSecs = _reader.readFloat();
                    break;
                case 2:
                    (_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
                    break;
                case 3:
                    _instance.logmmse = new Logmnse();
                    _reader.readMessage(_instance.logmmse, Logmnse.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.wiener = new Wiener();
                    _reader.readMessage(_instance.wiener, Wiener.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.apodization = new Apodization();
                    _reader.readMessage(_instance.apodization, Apodization.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.silenceSecs) {
            _writer.writeFloat(1, _instance.silenceSecs);
        }
        if (_instance.pipeline && _instance.pipeline.length) {
            _writer.writeRepeatedString(2, _instance.pipeline);
        }
        if (_instance.logmmse) {
            _writer.writeMessage(3, _instance.logmmse, Logmnse.serializeBinaryToWriter);
        }
        if (_instance.wiener) {
            _writer.writeMessage(4, _instance.wiener, Wiener.serializeBinaryToWriter);
        }
        if (_instance.apodization) {
            _writer.writeMessage(5, _instance.apodization, Apodization.serializeBinaryToWriter);
        }
    }
    get silenceSecs() {
        return this._silenceSecs;
    }
    set silenceSecs(value) {
        this._silenceSecs = value;
    }
    get pipeline() {
        return this._pipeline;
    }
    set pipeline(value) {
        this._pipeline = value;
    }
    get logmmse() {
        return this._logmmse;
    }
    set logmmse(value) {
        this._logmmse = value;
    }
    get wiener() {
        return this._wiener;
    }
    set wiener(value) {
        this._wiener = value;
    }
    get apodization() {
        return this._apodization;
    }
    set apodization(value) {
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
    toObject() {
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
    options) {
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
Postprocessing.id = 'ondewo.t2s.Postprocessing';
/**
 * Message implementation for ondewo.t2s.Logmnse
 */
export class Logmnse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Logmnse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.initialNoise = _value.initialNoise;
        this.windowSize = _value.windowSize;
        this.noiseThreshold = _value.noiseThreshold;
        Logmnse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Logmnse();
        Logmnse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.initialNoise = _instance.initialNoise || '0';
        _instance.windowSize = _instance.windowSize || '0';
        _instance.noiseThreshold = _instance.noiseThreshold || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get initialNoise() {
        return this._initialNoise;
    }
    set initialNoise(value) {
        this._initialNoise = value;
    }
    get windowSize() {
        return this._windowSize;
    }
    set windowSize(value) {
        this._windowSize = value;
    }
    get noiseThreshold() {
        return this._noiseThreshold;
    }
    set noiseThreshold(value) {
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
    toObject() {
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
    options) {
        return {
            initialNoise: this.initialNoise,
            windowSize: this.windowSize,
            noiseThreshold: this.noiseThreshold
        };
    }
}
Logmnse.id = 'ondewo.t2s.Logmnse';
/**
 * Message implementation for ondewo.t2s.Wiener
 */
export class Wiener {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Wiener to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.frameLen = _value.frameLen;
        this.lpcOrder = _value.lpcOrder;
        this.iterations = _value.iterations;
        this.alpha = _value.alpha;
        this.thresh = _value.thresh;
        Wiener.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Wiener();
        Wiener.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    get frameLen() {
        return this._frameLen;
    }
    set frameLen(value) {
        this._frameLen = value;
    }
    get lpcOrder() {
        return this._lpcOrder;
    }
    set lpcOrder(value) {
        this._lpcOrder = value;
    }
    get iterations() {
        return this._iterations;
    }
    set iterations(value) {
        this._iterations = value;
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(value) {
        this._alpha = value;
    }
    get thresh() {
        return this._thresh;
    }
    set thresh(value) {
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
    toObject() {
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
    options) {
        return {
            frameLen: this.frameLen,
            lpcOrder: this.lpcOrder,
            iterations: this.iterations,
            alpha: this.alpha,
            thresh: this.thresh
        };
    }
}
Wiener.id = 'ondewo.t2s.Wiener';
/**
 * Message implementation for ondewo.t2s.Apodization
 */
export class Apodization {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Apodization to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.apodizationSecs = _value.apodizationSecs;
        Apodization.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Apodization();
        Apodization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.apodizationSecs = _instance.apodizationSecs || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.apodizationSecs) {
            _writer.writeFloat(1, _instance.apodizationSecs);
        }
    }
    get apodizationSecs() {
        return this._apodizationSecs;
    }
    set apodizationSecs(value) {
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
    toObject() {
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
    options) {
        return {
            apodizationSecs: this.apodizationSecs
        };
    }
}
Apodization.id = 'ondewo.t2s.Apodization';
/**
 * Message implementation for ondewo.t2s.T2SCustomLengthScales
 */
export class T2SCustomLengthScales {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SCustomLengthScales to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.text = _value.text;
        this.email = _value.email;
        this.url = _value.url;
        this.phone = _value.phone;
        this.spell = _value.spell;
        this.spellWithNames = _value.spellWithNames;
        T2SCustomLengthScales.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2SCustomLengthScales();
        T2SCustomLengthScales.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.text = _instance.text || 0;
        _instance.email = _instance.email || 0;
        _instance.url = _instance.url || 0;
        _instance.phone = _instance.phone || 0;
        _instance.spell = _instance.spell || 0;
        _instance.spellWithNames = _instance.spellWithNames || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    get spell() {
        return this._spell;
    }
    set spell(value) {
        this._spell = value;
    }
    get spellWithNames() {
        return this._spellWithNames;
    }
    set spellWithNames(value) {
        this._spellWithNames = value;
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
    toObject() {
        return {
            text: this.text,
            email: this.email,
            url: this.url,
            phone: this.phone,
            spell: this.spell,
            spellWithNames: this.spellWithNames
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
    options) {
        return {
            text: this.text,
            email: this.email,
            url: this.url,
            phone: this.phone,
            spell: this.spell,
            spellWithNames: this.spellWithNames
        };
    }
}
T2SCustomLengthScales.id = 'ondewo.t2s.T2SCustomLengthScales';
/**
 * Message implementation for ondewo.t2s.PhonemizerId
 */
export class PhonemizerId {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PhonemizerId to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        PhonemizerId.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PhonemizerId();
        PhonemizerId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
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
    toObject() {
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
    options) {
        return {
            id: this.id
        };
    }
}
PhonemizerId.id = 'ondewo.t2s.PhonemizerId';
/**
 * Message implementation for ondewo.t2s.CustomPhonemizerProto
 */
export class CustomPhonemizerProto {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CustomPhonemizerProto to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        this.maps = (_value.maps || []).map(m => new Map(m));
        CustomPhonemizerProto.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CustomPhonemizerProto();
        CustomPhonemizerProto.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
        _instance.maps = _instance.maps || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.id = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Map();
                    _reader.readMessage(messageInitializer2, Map.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
        if (_instance.maps && _instance.maps.length) {
            _writer.writeRepeatedMessage(2, _instance.maps, Map.serializeBinaryToWriter);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get maps() {
        return this._maps;
    }
    set maps(value) {
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
    toObject() {
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
    options) {
        return {
            id: this.id,
            maps: (this.maps || []).map(m => m.toProtobufJSON(options))
        };
    }
}
CustomPhonemizerProto.id = 'ondewo.t2s.CustomPhonemizerProto';
/**
 * Message implementation for ondewo.t2s.Map
 */
export class Map {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Map to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.word = _value.word;
        this.phonemeGroups = _value.phonemeGroups;
        Map.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Map();
        Map.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.word = _instance.word || '';
        _instance.phonemeGroups = _instance.phonemeGroups || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.word) {
            _writer.writeString(1, _instance.word);
        }
        if (_instance.phonemeGroups) {
            _writer.writeString(2, _instance.phonemeGroups);
        }
    }
    get word() {
        return this._word;
    }
    set word(value) {
        this._word = value;
    }
    get phonemeGroups() {
        return this._phonemeGroups;
    }
    set phonemeGroups(value) {
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
    toObject() {
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
    options) {
        return {
            word: this.word,
            phonemeGroups: this.phonemeGroups
        };
    }
}
Map.id = 'ondewo.t2s.Map';
/**
 * Message implementation for ondewo.t2s.ListCustomPhonemizerResponse
 */
export class ListCustomPhonemizerResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCustomPhonemizerResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.phonemizers = (_value.phonemizers || []).map(m => new CustomPhonemizerProto(m));
        ListCustomPhonemizerResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListCustomPhonemizerResponse();
        ListCustomPhonemizerResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.phonemizers = _instance.phonemizers || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new CustomPhonemizerProto();
                    _reader.readMessage(messageInitializer1, CustomPhonemizerProto.deserializeBinaryFromReader);
                    (_instance.phonemizers = _instance.phonemizers || []).push(messageInitializer1);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.phonemizers && _instance.phonemizers.length) {
            _writer.writeRepeatedMessage(1, _instance.phonemizers, CustomPhonemizerProto.serializeBinaryToWriter);
        }
    }
    get phonemizers() {
        return this._phonemizers;
    }
    set phonemizers(value) {
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
    toObject() {
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
    options) {
        return {
            phonemizers: (this.phonemizers || []).map(m => m.toProtobufJSON(options))
        };
    }
}
ListCustomPhonemizerResponse.id = 'ondewo.t2s.ListCustomPhonemizerResponse';
/**
 * Message implementation for ondewo.t2s.ListCustomPhonemizerRequest
 */
export class ListCustomPhonemizerRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pipelineIds = (_value.pipelineIds || []).slice();
        ListCustomPhonemizerRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListCustomPhonemizerRequest();
        ListCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.pipelineIds = _instance.pipelineIds || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.pipelineIds = _instance.pipelineIds || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.pipelineIds && _instance.pipelineIds.length) {
            _writer.writeRepeatedString(1, _instance.pipelineIds);
        }
    }
    get pipelineIds() {
        return this._pipelineIds;
    }
    set pipelineIds(value) {
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
    toObject() {
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
    options) {
        return {
            pipelineIds: (this.pipelineIds || []).slice()
        };
    }
}
ListCustomPhonemizerRequest.id = 'ondewo.t2s.ListCustomPhonemizerRequest';
/**
 * Message implementation for ondewo.t2s.UpdateCustomPhonemizerRequest
 */
export class UpdateCustomPhonemizerRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        this.updateMethod = _value.updateMethod;
        this.maps = (_value.maps || []).map(m => new Map(m));
        UpdateCustomPhonemizerRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateCustomPhonemizerRequest();
        UpdateCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
        _instance.updateMethod = _instance.updateMethod || 0;
        _instance.maps = _instance.maps || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.id = _reader.readString();
                    break;
                case 2:
                    _instance.updateMethod = _reader.readEnum();
                    break;
                case 3:
                    const messageInitializer3 = new Map();
                    _reader.readMessage(messageInitializer3, Map.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
        if (_instance.updateMethod) {
            _writer.writeEnum(2, _instance.updateMethod);
        }
        if (_instance.maps && _instance.maps.length) {
            _writer.writeRepeatedMessage(3, _instance.maps, Map.serializeBinaryToWriter);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get updateMethod() {
        return this._updateMethod;
    }
    set updateMethod(value) {
        this._updateMethod = value;
    }
    get maps() {
        return this._maps;
    }
    set maps(value) {
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
    toObject() {
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
    options) {
        return {
            id: this.id,
            updateMethod: UpdateCustomPhonemizerRequest.UpdateMethod[this.updateMethod === null || this.updateMethod === undefined
                ? 0
                : this.updateMethod],
            maps: (this.maps || []).map(m => m.toProtobufJSON(options))
        };
    }
}
UpdateCustomPhonemizerRequest.id = 'ondewo.t2s.UpdateCustomPhonemizerRequest';
(function (UpdateCustomPhonemizerRequest) {
    let UpdateMethod;
    (function (UpdateMethod) {
        UpdateMethod[UpdateMethod["extend_hard"] = 0] = "extend_hard";
        UpdateMethod[UpdateMethod["extend_soft"] = 1] = "extend_soft";
        UpdateMethod[UpdateMethod["replace"] = 2] = "replace";
    })(UpdateMethod = UpdateCustomPhonemizerRequest.UpdateMethod || (UpdateCustomPhonemizerRequest.UpdateMethod = {}));
})(UpdateCustomPhonemizerRequest || (UpdateCustomPhonemizerRequest = {}));
/**
 * Message implementation for ondewo.t2s.CreateCustomPhonemizerRequest
 */
export class CreateCustomPhonemizerRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.prefix = _value.prefix;
        this.maps = (_value.maps || []).map(m => new Map(m));
        CreateCustomPhonemizerRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateCustomPhonemizerRequest();
        CreateCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.prefix = _instance.prefix || '';
        _instance.maps = _instance.maps || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.prefix = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Map();
                    _reader.readMessage(messageInitializer2, Map.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.prefix) {
            _writer.writeString(1, _instance.prefix);
        }
        if (_instance.maps && _instance.maps.length) {
            _writer.writeRepeatedMessage(2, _instance.maps, Map.serializeBinaryToWriter);
        }
    }
    get prefix() {
        return this._prefix;
    }
    set prefix(value) {
        this._prefix = value;
    }
    get maps() {
        return this._maps;
    }
    set maps(value) {
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
    toObject() {
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
    options) {
        return {
            prefix: this.prefix,
            maps: (this.maps || []).map(m => m.toProtobufJSON(options))
        };
    }
}
CreateCustomPhonemizerRequest.id = 'ondewo.t2s.CreateCustomPhonemizerRequest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC10by1zcGVlY2gucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL3Qycy90ZXh0LXRvLXNwZWVjaC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBSUwsa0JBQWtCLEVBQ25CLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxNQUFNLENBQU4sSUFBWSxHQVFYO0FBUkQsV0FBWSxHQUFHO0lBQ2IsaUNBQVUsQ0FBQTtJQUNWLGlDQUFVLENBQUE7SUFDVixpQ0FBVSxDQUFBO0lBQ1YsaUNBQVUsQ0FBQTtJQUNWLGlDQUFVLENBQUE7SUFDViwrQkFBUyxDQUFBO0lBQ1QsaUNBQVUsQ0FBQTtBQUNaLENBQUMsRUFSVyxHQUFHLEtBQUgsR0FBRyxRQVFkO0FBQ0QsTUFBTSxDQUFOLElBQVksV0FRWDtBQVJELFdBQVksV0FBVztJQUNyQiwyQ0FBTyxDQUFBO0lBQ1AsNkNBQVEsQ0FBQTtJQUNSLDJDQUFPLENBQUE7SUFDUCwyQ0FBTyxDQUFBO0lBQ1AsMkNBQU8sQ0FBQTtJQUNQLDJDQUFPLENBQUE7SUFDUCwyQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQVJXLFdBQVcsS0FBWCxXQUFXLFFBUXRCO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8saUJBQWlCO0lBZ0Y1Qjs7O09BR0c7SUFDSCxZQUFZLE1BQXFEO1FBQy9ELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNFLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBdEZEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDekMsaUJBQWlCLENBQUMsMkJBQTJCLENBQzNDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQTRCO1FBQzlDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBNEIsRUFDNUIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO29CQUN2QyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsTUFBTSxFQUNoQixhQUFhLENBQUMsMkJBQTJCLENBQzFDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBNEIsRUFDNUIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLE1BQWEsRUFDdkIsYUFBYSxDQUFDLHVCQUF1QixDQUN0QyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBZUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFnQztRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNqRSxDQUFDO0lBQ0osQ0FBQzs7QUE5SU0sb0JBQUUsR0FBRyw4QkFBOEIsQ0FBQztBQWtLN0M7O0dBRUc7QUFDSCxNQUFNLE9BQU8sc0JBQXNCO0lBMkVqQzs7O09BR0c7SUFDSCxZQUFZLE1BQTBEO1FBQ3BFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FDakQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDO1FBQ0Ysc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFsRkQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUM5QyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FDaEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBaUM7UUFDbkQsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixNQUFNLG1CQUFtQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztvQkFDcEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLGlCQUFpQixDQUFDLDJCQUEyQixDQUM5QyxDQUFDO29CQUNGLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsbUJBQW1CLENBQ3BCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELHNCQUFzQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzNELE9BQU8sQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxZQUFtQixFQUM3QixpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQWVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBc0M7UUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9ELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUM5QyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUMxQjtTQUNGLENBQUM7SUFDSixDQUFDOztBQXBJTSx5QkFBRSxHQUFHLG1DQUFtQyxDQUFDO0FBc0psRDs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBdUI7SUEyRWxDOzs7T0FHRztJQUNILFlBQVksTUFBMkQ7UUFDckUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUNuRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQy9CLENBQUM7UUFDRix1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWxGRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBQy9DLHVCQUF1QixDQUFDLDJCQUEyQixDQUNqRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFrQztRQUNwRCxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO29CQUNyRCxPQUFPLENBQUMsV0FBVyxDQUNqQixtQkFBbUIsRUFDbkIsa0JBQWtCLENBQUMsMkJBQTJCLENBQy9DLENBQUM7b0JBQ0YsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1RCxtQkFBbUIsQ0FDcEIsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsdUJBQXVCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxhQUFhLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDN0QsT0FBTyxDQUFDLG9CQUFvQixDQUMxQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGFBQW9CLEVBQzlCLGtCQUFrQixDQUFDLHVCQUF1QixDQUMzQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBZUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUF1QztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ2hELENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBcElNLDBCQUFFLEdBQUcsb0NBQW9DLENBQUM7QUFzSm5EOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7SUF1SHhCOzs7T0FHRztJQUNILFlBQVksTUFBaUQ7UUFqQnJELHNCQUFpQixHQUN2QixhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1FBQ2xDLHFCQUFnQixHQUN0QixhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ2pDLHFCQUFnQixHQUN0QixhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ2pDLGNBQVMsR0FDZixhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUMxQixzQkFBaUIsR0FDdkIsYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztRQUNsQyxtQkFBYyxHQUNwQixhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBT3JDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFsSUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLDJCQUEyQixDQUN2QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF3QjtRQUMxQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF3QixFQUN4QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDbkMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0IsRUFDeEIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksU0FBUyxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBRTtZQUN4RCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDdEQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksU0FBUyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUN4QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFzQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUF5QjtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUF5QjtRQUN2QyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztTQUN6RTtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQXlCO1FBQ3RDLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7U0FDdEU7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFzQjtRQUM1QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBOEI7UUFDNUMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7U0FDekU7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUEwQjtRQUNyQyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFdBQVcsRUFDVCxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVM7Z0JBQ3pELENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUN0QixVQUFVLEVBQ1IsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTO2dCQUN2RCxDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDckIsVUFBVSxFQUNSLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUztnQkFDdkQsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3JCLEdBQUcsRUFDRCxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7Z0JBQ3BCLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNyRSxXQUFXLEVBQ1QsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTO2dCQUM1QixDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsV0FBVyxDQUNULElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUztvQkFDekQsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQ3JCO1lBQ1AsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDOztBQXpSTSxnQkFBRSxHQUFHLDBCQUEwQixDQUFDO0FBMlJ6QyxXQUFjLGFBQWE7SUEwQnpCLElBQVksb0JBR1g7SUFIRCxXQUFZLG9CQUFvQjtRQUM5QiwrREFBUSxDQUFBO1FBQ1IsNkVBQWUsQ0FBQTtJQUNqQixDQUFDLEVBSFcsb0JBQW9CLEdBQXBCLGtDQUFvQixLQUFwQixrQ0FBb0IsUUFHL0I7SUFDRCxJQUFZLG1CQUdYO0lBSEQsV0FBWSxtQkFBbUI7UUFDN0IsNkRBQVEsQ0FBQTtRQUNSLHlFQUFjLENBQUE7SUFDaEIsQ0FBQyxFQUhXLG1CQUFtQixHQUFuQixpQ0FBbUIsS0FBbkIsaUNBQW1CLFFBRzlCO0lBQ0QsSUFBWSxtQkFHWDtJQUhELFdBQVksbUJBQW1CO1FBQzdCLDZEQUFRLENBQUE7UUFDUix5RUFBYyxDQUFBO0lBQ2hCLENBQUMsRUFIVyxtQkFBbUIsR0FBbkIsaUNBQW1CLEtBQW5CLGlDQUFtQixRQUc5QjtJQUNELElBQVksWUFHWDtJQUhELFdBQVksWUFBWTtRQUN0QiwrQ0FBUSxDQUFBO1FBQ1IsNkNBQU8sQ0FBQTtJQUNULENBQUMsRUFIVyxZQUFZLEdBQVosMEJBQVksS0FBWiwwQkFBWSxRQUd2QjtJQUNELElBQVksb0JBR1g7SUFIRCxXQUFZLG9CQUFvQjtRQUM5QiwrREFBUSxDQUFBO1FBQ1IsNkVBQWUsQ0FBQTtJQUNqQixDQUFDLEVBSFcsb0JBQW9CLEdBQXBCLGtDQUFvQixLQUFwQixrQ0FBb0IsUUFHL0I7SUFDRCxJQUFZLGlCQUdYO0lBSEQsV0FBWSxpQkFBaUI7UUFDM0IseURBQVEsQ0FBQTtRQUNSLGlFQUFZLENBQUE7SUFDZCxDQUFDLEVBSFcsaUJBQWlCLEdBQWpCLCtCQUFpQixLQUFqQiwrQkFBaUIsUUFHNUI7QUFDSCxDQUFDLEVBbERhLGFBQWEsS0FBYixhQUFhLFFBa0QxQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGtCQUFrQjtJQXdIN0I7OztPQUdHO0lBQ0gsWUFBWSxNQUFzRDtRQUNoRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBbklEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDMUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQzVDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQTZCO1FBQy9DLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksVUFBVSxFQUFFLENBQUM7UUFDdEQsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztRQUN6RCxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztRQUNqRCxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUE2QixFQUM3QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO29CQUN2QyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsTUFBTSxFQUNoQixhQUFhLENBQUMsMkJBQTJCLENBQzFDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2hELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQTZCLEVBQzdCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDN0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxTQUFTLENBQUMsY0FBYyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN6QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsTUFBYSxFQUN2QixhQUFhLENBQUMsdUJBQXVCLENBQ3RDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBeUJELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBeUI7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBNkI7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQXlCO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQXlCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQXlCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWdDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUF5QjtRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUU7WUFDN0QsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUN4RCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZELGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hFLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNwQyxDQUFDO0lBQ0osQ0FBQzs7QUFuT00scUJBQUUsR0FBRywrQkFBK0IsQ0FBQztBQWlROUM7O0dBRUc7QUFDSCxNQUFNLE9BQU8seUJBQXlCO0lBZ0VwQzs7O09BR0c7SUFDSCxZQUFZLE1BQTZEO1FBQ3ZFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5Qix5QkFBeUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXJFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pELHlCQUF5QixDQUFDLDJCQUEyQixDQUNuRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFvQztRQUN0RCxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFvQyxFQUNwQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQseUJBQXlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFvQyxFQUNwQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQWFELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBeUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7SUFDSixDQUFDOztBQXJITSw0QkFBRSxHQUFHLHNDQUFzQyxDQUFDO0FBdUlyRDs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBdUI7SUEwR2xDOzs7T0FHRztJQUNILFlBQVksTUFBMkQ7UUFDckUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFuSEQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUMvQyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FDakQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBa0M7UUFDcEQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUNoRCxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7UUFDMUQsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUN0RCxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDcEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDOUQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksU0FBUyxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUMzRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksU0FBUyxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUMzRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFxQkQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUEyQjtRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUEyQjtRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBMkI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBMkI7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBMkI7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3pDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQy9DLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ25ELFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQy9DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN6QyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUMvQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuRCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUMvQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUFuTU0sMEJBQUUsR0FBRyxvQ0FBb0MsQ0FBQztBQTZObkQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sd0JBQXdCO0lBMkVuQzs7O09BR0c7SUFDSCxZQUFZLE1BQTREO1FBQ3RFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FDM0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDO1FBQ0Ysd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFsRkQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUNoRCx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FDbEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBbUM7UUFDckQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixNQUFNLG1CQUFtQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztvQkFDcEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLGlCQUFpQixDQUFDLDJCQUEyQixDQUM5QyxDQUFDO29CQUNGLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDcEQsbUJBQW1CLENBQ3BCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELHdCQUF3QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxTQUFnQixFQUMxQixpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQWVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBc0M7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEUsQ0FBQztJQUNKLENBQUM7O0FBbElNLDJCQUFFLEdBQUcscUNBQXFDLENBQUM7QUFvSnBEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHVCQUF1QjtJQWdHbEM7OztPQUdHO0lBQ0gsWUFBWSxNQUEyRDtRQUNyRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5Qyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQXhHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBQy9DLHVCQUF1QixDQUFDLDJCQUEyQixDQUNqRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFrQztRQUNwRCxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7UUFDMUQsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUN0RCxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDOUQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUMzRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksU0FBUyxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUMzRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFtQkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUEyQjtRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBMkI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBMkI7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBMkI7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQy9DLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ25ELFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQy9DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUMvQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuRCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUMvQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUFoTE0sMEJBQUUsR0FBRyxvQ0FBb0MsQ0FBQztBQXdNbkQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sd0JBQXdCO0lBa0VuQzs7O09BR0c7SUFDSCxZQUFZLE1BQTREO1FBQ3RFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xELHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBdkVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7UUFDaEQsd0JBQXdCLENBQUMsMkJBQTJCLENBQ2xELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQW1DO1FBQ3JELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQW1DLEVBQ25DLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNwRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELHdCQUF3QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQWFELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBMkI7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQzFDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUMxQyxDQUFDO0lBQ0osQ0FBQzs7QUF2SE0sMkJBQUUsR0FBRyxxQ0FBcUMsQ0FBQztBQXlJcEQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8scUJBQXFCO0lBZ0doQzs7O09BR0c7SUFDSCxZQUFZLE1BQXlEO1FBQ25FLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xELHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBeEdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDN0MscUJBQXFCLENBQUMsMkJBQTJCLENBQy9DLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWdDO1FBQ2xELFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7UUFDdEQsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWdDLEVBQ2hDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMxRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM5RCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMxRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNwRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELHFCQUFxQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBZ0MsRUFDaEMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzNELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxTQUFTLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxTQUFTLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzNELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQW1CRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQTJCO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUEyQjtRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUEyQjtRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUEyQjtRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDL0MsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDbkQsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDL0MsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQy9DLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ25ELFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQy9DLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQzFDLENBQUM7SUFDSixDQUFDOztBQWhMTSx3QkFBRSxHQUFHLGtDQUFrQyxDQUFDO0FBd01qRDs7R0FFRztBQUNILE1BQU0sT0FBTyxzQkFBc0I7SUFrRWpDOzs7T0FHRztJQUNILFlBQVksTUFBMEQ7UUFDcEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUF2RUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUM5QyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FDaEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBaUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hELE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FDckIsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFpQyxFQUNqQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDakQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBYUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUEyQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDdEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQXZITSx5QkFBRSxHQUFHLG1DQUFtQyxDQUFDO0FBeUlsRDs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFhO0lBZ0V4Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWlEO1FBQzNELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFyRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLDJCQUEyQixDQUN2QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF3QjtRQUMxQyxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF3QixFQUN4QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNwQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0IsRUFDeEIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFhRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLEtBQXlCO1FBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDOztBQXJITSxnQkFBRSxHQUFHLDBCQUEwQixDQUFDO0FBdUl6Qzs7R0FFRztBQUNILE1BQU0sT0FBTyxpQkFBaUI7SUF3STVCOzs7T0FHRztJQUNILFlBQVksTUFBcUQ7UUFDL0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVc7WUFDbkMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1lBQy9CLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhO1lBQ3ZDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDNUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7WUFDekMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBMUpEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDekMsaUJBQWlCLENBQUMsMkJBQTJCLENBQzNDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQTRCO1FBQzlDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDbEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztRQUMzRCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQzdDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7UUFDdkQsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQztRQUMvRCxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUE0QixFQUM1QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxXQUFXLEVBQ3JCLGNBQWMsQ0FBQywyQkFBMkIsQ0FDM0MsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO29CQUN6QyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsU0FBUyxFQUNuQixZQUFZLENBQUMsMkJBQTJCLENBQ3pDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7b0JBQ2pELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxhQUFhLEVBQ3ZCLGdCQUFnQixDQUFDLDJCQUEyQixDQUM3QyxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztvQkFDaEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGNBQWMsRUFDeEIsY0FBYyxDQUFDLDJCQUEyQixDQUMzQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQTRCLEVBQzVCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUNoQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDekIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxXQUFrQixFQUM1QixjQUFjLENBQUMsdUJBQXVCLENBQ3ZDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxTQUFnQixFQUMxQixZQUFZLENBQUMsdUJBQXVCLENBQ3JDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGFBQW9CLEVBQzlCLGdCQUFnQixDQUFDLHVCQUF1QixDQUN6QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDNUIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxjQUFxQixFQUMvQixjQUFjLENBQUMsdUJBQXVCLENBQ3ZDLENBQUM7U0FDSDtJQUNILENBQUM7SUErQkQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxLQUF5QjtRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFpQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUEwQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUErQjtRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFtQztRQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBaUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ3ZFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNqRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtnQkFDL0IsQ0FBQyxDQUFDLFNBQVM7WUFDYixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTtnQkFDaEMsQ0FBQyxDQUFDLFNBQVM7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsSUFBSTtZQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDekUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsSUFBSTtZQUNSLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQzs7QUE1UE0sb0JBQUUsR0FBRyw4QkFBOEIsQ0FBQztBQXdSN0M7O0dBRUc7QUFDSCxNQUFNLE9BQU8sY0FBYztJQXdHekI7OztPQUdHO0lBQ0gsWUFBWSxNQUFrRDtRQUM1RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFsSEQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDdEMsY0FBYyxDQUFDLDJCQUEyQixDQUN4QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF5QjtRQUMzQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDbEQsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztRQUN4RCxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDcEQsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBeUIsRUFDekIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBeUIsRUFDekIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDM0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN6QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQXVCRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQXlCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQXlCO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQXlCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQXlCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQXlCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQXlCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDOztBQTFNTSxpQkFBRSxHQUFHLDJCQUEyQixDQUFDO0FBc08xQzs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBNkZ2Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWdEO1FBQzFELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQjtZQUNqRCxDQUFDLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDbkQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBdEdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF1QjtRQUN6QyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsa0JBQWtCLElBQUksU0FBUyxDQUFDO1FBQ3pFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXVCLEVBQ3ZCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7b0JBQ3hELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxrQkFBa0IsRUFDNUIsa0JBQWtCLENBQUMsMkJBQTJCLENBQy9DLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNsQyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsT0FBTyxFQUNqQixPQUFPLENBQUMsMkJBQTJCLENBQ3BDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXVCLEVBQ3ZCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoQyxPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGtCQUF5QixFQUNuQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FDM0MsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsT0FBYyxFQUN4QixPQUFPLENBQUMsdUJBQXVCLENBQ2hDLENBQUM7U0FDSDtJQUNILENBQUM7SUFtQkQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBcUM7UUFDMUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO2dCQUNwQyxDQUFDLENBQUMsU0FBUztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQzVELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2dCQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxJQUFJO1lBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3BFLENBQUM7SUFDSixDQUFDOztBQTFLTSxlQUFFLEdBQUcseUJBQXlCLENBQUM7QUFnTXhDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGtCQUFrQjtJQXdGN0I7OztPQUdHO0lBQ0gsWUFBWSxNQUFzRDtRQUNoRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7WUFDL0IsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBaEdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDMUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQzVDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQTZCO1FBQy9DLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUM7UUFDckQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBNkIsRUFDN0IsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxRQUFRLEVBQ2xCLFFBQVEsQ0FBQywyQkFBMkIsQ0FDckMsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxTQUFTLEVBQ25CLFNBQVMsQ0FBQywyQkFBMkIsQ0FDdEMsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUE2QixFQUM3QixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxRQUFlLEVBQ3pCLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDakMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsU0FBZ0IsRUFDMUIsU0FBUyxDQUFDLHVCQUF1QixDQUNsQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBaUJELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBMkI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBNEI7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzlELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ2xFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDdEUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQzFFLENBQUM7SUFDSixDQUFDOztBQXhKTSxxQkFBRSxHQUFHLCtCQUErQixDQUFDO0FBNEs5Qzs7R0FFRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBMEZuQjs7O09BR0c7SUFDSCxZQUFZLE1BQTRDO1FBQ3RELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWE7WUFDdkMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDekMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQW5HRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNoQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBbUI7UUFDckMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QyxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQW1CLEVBQ25CLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztvQkFDbEMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLE9BQU8sRUFDakIsT0FBTyxDQUFDLDJCQUEyQixDQUNwQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGFBQWEsRUFDdkIsYUFBYSxDQUFDLDJCQUEyQixDQUMxQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQW1CLEVBQUUsT0FBcUI7UUFDdkUsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLE9BQWMsRUFDeEIsT0FBTyxDQUFDLHVCQUF1QixDQUNoQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDM0IsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxhQUFvQixFQUM5QixhQUFhLENBQUMsdUJBQXVCLENBQ3RDLENBQUM7U0FDSDtJQUNILENBQUM7SUFtQkQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFnQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzNELGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUMvQixDQUFDLENBQUMsU0FBUztTQUNkLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsSUFBSTtTQUNULENBQUM7SUFDSixDQUFDOztBQXZLTSxXQUFFLEdBQUcscUJBQXFCLENBQUM7QUE2THBDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQU87SUE0R2xCOzs7T0FHRztJQUNILFlBQVksTUFBMkM7UUFDckQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDOUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBdkhEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFrQjtRQUNwQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO1FBQ2pELFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDN0MsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNuRCxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQ2pELFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQixFQUNsQixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNsRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQWtCLEVBQUUsT0FBcUI7UUFDdEUsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN6QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBeUJELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBeUI7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBMEI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBeUI7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBeUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBMkI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBeUI7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBdk5NLFVBQUUsR0FBRyxvQkFBb0IsQ0FBQztBQXFQbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sYUFBYTtJQWtIeEI7OztPQUdHO0lBQ0gsWUFBWSxNQUFpRDtRQUMzRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUE3SEQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLDJCQUEyQixDQUN2QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF3QjtRQUMxQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO1FBQ2pELFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDbkQsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsSUFBSSxHQUFHLENBQUM7UUFDekQsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUM1RCxTQUFTLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF3QixFQUN4QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNwRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUF3QixFQUN4QixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDekIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDN0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQXlCRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQXlCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQXlCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQXlCO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQTJCO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQXlCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQXlCO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBeUI7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3ZDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN2QyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUE3Tk0sZ0JBQUUsR0FBRywwQkFBMEIsQ0FBQztBQTJQekM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBUztJQTBHcEI7OztPQUdHO0lBQ0gsWUFBWSxNQUE2QztRQUN2RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYztZQUN6QyxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUMzQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhO1lBQ3ZDLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUF0SEQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDakMsU0FBUyxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQW9CO1FBQ3RDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEMsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQztRQUNqRSxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQW9CLEVBQ3BCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztvQkFDaEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGNBQWMsRUFDeEIsY0FBYyxDQUFDLDJCQUEyQixDQUMzQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztvQkFDbEMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLE9BQU8sRUFDakIsT0FBTyxDQUFDLDJCQUEyQixDQUNwQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGFBQWEsRUFDdkIsYUFBYSxDQUFDLDJCQUEyQixDQUMxQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQW9CLEVBQUUsT0FBcUI7UUFDeEUsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGNBQXFCLEVBQy9CLGNBQWMsQ0FBQyx1QkFBdUIsQ0FDdkMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsT0FBYyxFQUN4QixPQUFPLENBQUMsdUJBQXVCLENBQ2hDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGFBQW9CLEVBQzlCLGFBQWEsQ0FBQyx1QkFBdUIsQ0FDdEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQXVCRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQXlCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFpQztRQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFnQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxDQUFDLENBQUMsU0FBUztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzNELGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUMvQixDQUFDLENBQUMsU0FBUztTQUNkLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ25FLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQzs7QUF0TU0sWUFBRSxHQUFHLHNCQUFzQixDQUFDO0FBOE5yQzs7R0FFRztBQUNILE1BQU0sT0FBTyxPQUFPO0lBa0ZsQjs7O09BR0c7SUFDSCxZQUFZLE1BQTJDO1FBQ3JELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUExRkQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWtCO1FBQ3BDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDN0MsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztRQUNqRCxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWtCLEVBQ2xCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQWtCLEVBQUUsT0FBcUI7UUFDdEUsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQW1CRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQTBCO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQXlCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQXlCO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQXlCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7O0FBbEtNLFVBQUUsR0FBRyxvQkFBb0IsQ0FBQztBQTBMbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sYUFBYTtJQXdFeEI7OztPQUdHO0lBQ0gsWUFBWSxNQUFpRDtRQUMzRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTlFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNyQyxhQUFhLENBQUMsMkJBQTJCLENBQ3ZDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXdCO1FBQzFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDbEQsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBd0IsRUFDeEIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUF3QixFQUN4QixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFlRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQXlCO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQXlCO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQXRJTSxnQkFBRSxHQUFHLDBCQUEwQixDQUFDO0FBMEp6Qzs7R0FFRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBd0Z6Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWtEO1FBQzVELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFoR0Q7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDdEMsY0FBYyxDQUFDLDJCQUEyQixDQUN4QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF5QjtRQUMzQyxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUM1RCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF5QixFQUN6QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBeUIsRUFDekIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDN0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFtQkQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUF5QjtRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUF5QjtRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQXlCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7O0FBeEtNLGlCQUFFLEdBQUcsMkJBQTJCLENBQUM7QUFnTTFDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQU87SUFrR2xCOzs7T0FHRztJQUNILFlBQVksTUFBMkM7UUFDckQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTVHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBa0I7UUFDcEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUM3QyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixJQUFJLEdBQUcsQ0FBQztRQUNuRSxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7UUFDbkQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztRQUNuRCxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQixFQUNsQixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN6RCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDbkQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDOUMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsU0FBa0IsRUFBRSxPQUFxQjtRQUN0RSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxTQUFTLENBQUMsa0JBQWtCLEVBQUU7WUFDaEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUF1QkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUEwQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBeUI7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUEwQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUEwQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2hDLENBQUM7SUFDSixDQUFDOztBQXBNTSxVQUFFLEdBQUcsb0JBQW9CLENBQUM7QUFnT25DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGdCQUFnQjtJQTBHM0I7OztPQUdHO0lBQ0gsWUFBWSxNQUFvRDtRQUM5RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQjtZQUNqRCxDQUFDLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDdEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXJIRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLGdCQUFnQixDQUFDLDJCQUEyQixDQUMxQyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUEyQjtRQUM3QyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDOUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUM7UUFDbEUsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxTQUFTLENBQUM7UUFDekUsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBMkIsRUFDM0IsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNsRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztvQkFDM0QsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGtCQUFrQixFQUM1QixxQkFBcUIsQ0FBQywyQkFBMkIsQ0FDbEQsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBMkIsRUFDM0IsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksU0FBUyxDQUFDLGtCQUFrQixFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxTQUFTLENBQUMsa0JBQWtCLEVBQUU7WUFDaEMsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxrQkFBeUIsRUFDbkMscUJBQXFCLENBQUMsdUJBQXVCLENBQzlDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBdUJELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBMkI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQXlCO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQXdDO1FBQzdELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBeUI7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3ZDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtnQkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BDLENBQUMsQ0FBQyxTQUFTO1lBQ2IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdkMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2dCQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxJQUFJO1lBQ1IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQXpNTSxtQkFBRSxHQUFHLDZCQUE2QixDQUFDO0FBbU81Qzs7R0FFRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBMEh6Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWtEO1FBQzVELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVztZQUNuQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNyQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBcklEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQywyQkFBMkIsQ0FDeEMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBeUI7UUFDM0MsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNuRCxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUM7UUFDbkQsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztRQUNqRCxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO0lBQzdELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF5QixFQUN6QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2xELE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FDckIsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxPQUFPLEVBQ2pCLE9BQU8sQ0FBQywyQkFBMkIsQ0FDcEMsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxNQUFNLEVBQ2hCLE1BQU0sQ0FBQywyQkFBMkIsQ0FDbkMsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7b0JBQzFDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxXQUFXLEVBQ3JCLFdBQVcsQ0FBQywyQkFBMkIsQ0FDeEMsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBeUIsRUFDekIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLE9BQWMsRUFDeEIsT0FBTyxDQUFDLHVCQUF1QixDQUNoQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxNQUFhLEVBQ3ZCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FDL0IsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsV0FBa0IsRUFDNUIsV0FBVyxDQUFDLHVCQUF1QixDQUNwQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBdUJELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBeUI7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBMkI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBeUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBOEI7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdkMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDM0QsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDeEQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDeEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN2QyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQzs7QUF2Tk0saUJBQUUsR0FBRywyQkFBMkIsQ0FBQztBQWlQMUM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBTztJQTBFbEI7OztPQUdHO0lBQ0gsWUFBWSxNQUEyQztRQUNyRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1QyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFqRkQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWtCO1FBQ3BDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUM7UUFDdkQsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztRQUNuRCxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQixFQUNsQixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNuRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQWtCLEVBQUUsT0FBcUI7UUFDdEUsSUFBSSxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxTQUFTLENBQUMsY0FBYyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFpQkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBeUI7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDcEMsQ0FBQztJQUNKLENBQUM7O0FBakpNLFVBQUUsR0FBRyxvQkFBb0IsQ0FBQztBQXVLbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sTUFBTTtJQXVGakI7OztPQUdHO0lBQ0gsWUFBWSxNQUEwQztRQUNwRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQWhHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBaUI7UUFDbkMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUMvQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO1FBQy9DLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7UUFDbkQsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN2QyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUFDLFNBQWlCLEVBQUUsT0FBcUI7UUFDekUsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDL0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNqRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQWlCLEVBQUUsT0FBcUI7UUFDckUsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBcUJELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBeUI7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBeUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDOztBQWhMTSxTQUFFLEdBQUcsbUJBQW1CLENBQUM7QUEwTWxDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFdBQVc7SUE2RHRCOzs7T0FHRztJQUNILFlBQVksTUFBK0M7UUFDekQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWxFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxXQUFXLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDM0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBc0I7UUFDeEMsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBc0IsRUFDdEIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXNCLEVBQ3RCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBYUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUF5QjtRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBbEhNLGNBQUUsR0FBRyx3QkFBd0IsQ0FBQztBQW9JdkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8scUJBQXFCO0lBd0doQzs7O09BR0c7SUFDSCxZQUFZLE1BQXlEO1FBQ25FLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBbEhEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDN0MscUJBQXFCLENBQUMsMkJBQTJCLENBQy9DLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWdDO1FBQ2xELFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDckMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN2QyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ25DLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN2QyxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFnQyxFQUNoQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNyQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWdDLEVBQ2hDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDbkIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNuQixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDbkIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxTQUFTLENBQUMsY0FBYyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUF1QkQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUF5QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUF5QjtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUF5QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUF5QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBeUI7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3BDLENBQUM7SUFDSixDQUFDOztBQTFNTSx3QkFBRSxHQUFHLGtDQUFrQyxDQUFDO0FBc09qRDs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBNkR2Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWdEO1FBQzFELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFsRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXVCO1FBQ3pDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXVCLEVBQ3ZCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUF1QixFQUN2QixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQWFELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsS0FBeUI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ1osQ0FBQztJQUNKLENBQUM7O0FBbEhNLGVBQUUsR0FBRyx5QkFBeUIsQ0FBQztBQW9JeEM7O0dBRUc7QUFDSCxNQUFNLE9BQU8scUJBQXFCO0lBaUZoQzs7O09BR0c7SUFDSCxZQUFZLE1BQXlEO1FBQ25FLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBdkZEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDN0MscUJBQXFCLENBQUMsMkJBQTJCLENBQy9DLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWdDO1FBQ2xELFNBQVMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDbEMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBZ0MsRUFDaEMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osTUFBTSxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUN0QyxPQUFPLENBQUMsV0FBVyxDQUNqQixtQkFBbUIsRUFDbkIsR0FBRyxDQUFDLDJCQUEyQixDQUNoQyxDQUFDO29CQUNGLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUNsRSxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQscUJBQXFCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFnQyxFQUNoQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxJQUFXLEVBQ3JCLEdBQUcsQ0FBQyx1QkFBdUIsQ0FDNUIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQWVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsS0FBeUI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBd0I7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9DLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUQsQ0FBQztJQUNKLENBQUM7O0FBL0lNLHdCQUFFLEdBQUcsa0NBQWtDLENBQUM7QUFtS2pEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLEdBQUc7SUErRGQ7OztPQUdHO0lBQ0gsWUFBWSxNQUF1QztRQUNqRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQXJFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBYztRQUNoQyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQUMsU0FBYyxFQUFFLE9BQXFCO1FBQ3RFLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxTQUFjLEVBQUUsT0FBcUI7UUFDbEUsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBZUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUF5QjtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7SUFDSixDQUFDOztBQTdITSxNQUFFLEdBQUcsZ0JBQWdCLENBQUM7QUFpSi9COztHQUVHO0FBQ0gsTUFBTSxPQUFPLDRCQUE0QjtJQTJFdkM7OztPQUdHO0lBQ0gsWUFDRSxNQUFnRTtRQUVoRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQy9DLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FDbEMsQ0FBQztRQUNGLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBcEZEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDRCQUE0QixFQUFFLENBQUM7UUFDcEQsNEJBQTRCLENBQUMsMkJBQTJCLENBQ3RELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXVDO1FBQ3pELFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXVDLEVBQ3ZDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osTUFBTSxtQkFBbUIsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7b0JBQ3hELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLG1CQUFtQixFQUNuQixxQkFBcUIsQ0FBQywyQkFBMkIsQ0FDbEQsQ0FBQztvQkFDRixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3hELG1CQUFtQixDQUNwQixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXVDLEVBQ3ZDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN6RCxPQUFPLENBQUMsb0JBQW9CLENBQzFCLENBQUMsRUFDRCxTQUFTLENBQUMsV0FBa0IsRUFDNUIscUJBQXFCLENBQUMsdUJBQXVCLENBQzlDLENBQUM7U0FDSDtJQUNILENBQUM7SUFpQkQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUEwQztRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsNEJBQTRCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxRSxDQUFDO0lBQ0osQ0FBQzs7QUFwSU0sK0JBQUUsR0FBRyx5Q0FBeUMsQ0FBQztBQXNKeEQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sMkJBQTJCO0lBa0V0Qzs7O09BR0c7SUFDSCxZQUFZLE1BQStEO1FBQ3pFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RELDJCQUEyQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBdkVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDJCQUEyQixFQUFFLENBQUM7UUFDbkQsMkJBQTJCLENBQUMsMkJBQTJCLENBQ3JELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXNDO1FBQ3hELFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXNDLEVBQ3RDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUN4RCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELDJCQUEyQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBc0MsRUFDdEMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQWFELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBMkI7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQzlDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUM5QyxDQUFDO0lBQ0osQ0FBQzs7QUF2SE0sOEJBQUUsR0FBRyx3Q0FBd0MsQ0FBQztBQXlJdkQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sNkJBQTZCO0lBeUZ4Qzs7O09BR0c7SUFDSCxZQUNFLE1BQWlFO1FBRWpFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCw2QkFBNkIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQWxHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSw2QkFBNkIsRUFBRSxDQUFDO1FBQ3JELDZCQUE2QixDQUFDLDJCQUEyQixDQUN2RCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF3QztRQUMxRCxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFDckQsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBd0MsRUFDeEMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLEdBQUcsQ0FBQywyQkFBMkIsQ0FDaEMsQ0FBQztvQkFDRixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDbEUsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELDZCQUE2QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0MsRUFDeEMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0MsT0FBTyxDQUFDLG9CQUFvQixDQUMxQixDQUFDLEVBQ0QsU0FBUyxDQUFDLElBQVcsRUFDckIsR0FBRyxDQUFDLHVCQUF1QixDQUM1QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBbUJELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsS0FBeUI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQ2QsS0FBNkQ7UUFFN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBd0I7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLDZCQUE2QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsWUFBWSxFQUNWLDZCQUE2QixDQUFDLFlBQVksQ0FDeEMsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTO2dCQUMzRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FDdEI7WUFDSCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUQsQ0FBQztJQUNKLENBQUM7O0FBektNLGdDQUFFLEdBQUcsMENBQTBDLENBQUM7QUEyS3pELFdBQWMsNkJBQTZCO0lBa0J6QyxJQUFZLFlBSVg7SUFKRCxXQUFZLFlBQVk7UUFDdEIsNkRBQWUsQ0FBQTtRQUNmLDZEQUFlLENBQUE7UUFDZixxREFBVyxDQUFBO0lBQ2IsQ0FBQyxFQUpXLFlBQVksR0FBWiwwQ0FBWSxLQUFaLDBDQUFZLFFBSXZCO0FBQ0gsQ0FBQyxFQXZCYSw2QkFBNkIsS0FBN0IsNkJBQTZCLFFBdUIxQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDZCQUE2QjtJQWlGeEM7OztPQUdHO0lBQ0gsWUFDRSxNQUFpRTtRQUVqRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCw2QkFBNkIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXpGRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSw2QkFBNkIsRUFBRSxDQUFDO1FBQ3JELDZCQUE2QixDQUFDLDJCQUEyQixDQUN2RCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF3QztRQUMxRCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXdDLEVBQ3hDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3hDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLEdBQUcsQ0FBQywyQkFBMkIsQ0FDaEMsQ0FBQztvQkFDRixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDbEUsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELDZCQUE2QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0MsRUFDeEMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQyxPQUFPLENBQUMsb0JBQW9CLENBQzFCLENBQUMsRUFDRCxTQUFTLENBQUMsSUFBVyxFQUNyQixHQUFHLENBQUMsdUJBQXVCLENBQzVCLENBQUM7U0FDSDtJQUNILENBQUM7SUFpQkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUF5QjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF3QjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsNkJBQTZCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9DLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVELENBQUM7SUFDSixDQUFDOztBQWpKTSxnQ0FBRSxHQUFHLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9ucyxcbiAgdWludDhBcnJheVRvQmFzZTY0XG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIsIEJ5dGVTb3VyY2UgfSBmcm9tICdnb29nbGUtcHJvdG9idWYnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDAgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuZXhwb3J0IGVudW0gUGNtIHtcbiAgUENNXzE2ID0gMCxcbiAgUENNXzI0ID0gMSxcbiAgUENNXzMyID0gMixcbiAgUENNX1M4ID0gMyxcbiAgUENNX1U4ID0gNCxcbiAgRkxPQVQgPSA1LFxuICBET1VCTEUgPSA2XG59XG5leHBvcnQgZW51bSBBdWRpb0Zvcm1hdCB7XG4gIHdhdiA9IDAsXG4gIGZsYWMgPSAxLFxuICBjYWYgPSAyLFxuICBtcDMgPSAzLFxuICBhYWMgPSA0LFxuICBvZ2cgPSA1LFxuICB3bWEgPSA2XG59XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuU3ludGhlc2l6ZVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFN5bnRoZXNpemVSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5TeW50aGVzaXplUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN5bnRoZXNpemVSZXF1ZXN0KCk7XG4gICAgU3ludGhlc2l6ZVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTeW50aGVzaXplUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNvbmZpZyA9IF9pbnN0YW5jZS5jb25maWcgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3ludGhlc2l6ZVJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWcgPSBuZXcgUmVxdWVzdENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnLFxuICAgICAgICAgICAgUmVxdWVzdENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU3ludGhlc2l6ZVJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTeW50aGVzaXplUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuY29uZmlnIGFzIGFueSxcbiAgICAgICAgUmVxdWVzdENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9jb25maWc/OiBSZXF1ZXN0Q29uZmlnO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU3ludGhlc2l6ZVJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3ludGhlc2l6ZVJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0O1xuICAgIHRoaXMuY29uZmlnID0gX3ZhbHVlLmNvbmZpZyA/IG5ldyBSZXF1ZXN0Q29uZmlnKF92YWx1ZS5jb25maWcpIDogdW5kZWZpbmVkO1xuICAgIFN5bnRoZXNpemVSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBSZXF1ZXN0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsdWU6IFJlcXVlc3RDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTeW50aGVzaXplUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTeW50aGVzaXplUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3ludGhlc2l6ZVJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTeW50aGVzaXplUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU3ludGhlc2l6ZVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgY29uZmlnPzogUmVxdWVzdENvbmZpZy5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTeW50aGVzaXplUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICBjb25maWc/OiBSZXF1ZXN0Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuQmF0Y2hTeW50aGVzaXplUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgQmF0Y2hTeW50aGVzaXplUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuQmF0Y2hTeW50aGVzaXplUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QoKTtcbiAgICBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQmF0Y2hTeW50aGVzaXplUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5iYXRjaFJlcXVlc3QgPSBfaW5zdGFuY2UuYmF0Y2hSZXF1ZXN0IHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQmF0Y2hTeW50aGVzaXplUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFN5bnRoZXNpemVSZXF1ZXN0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBTeW50aGVzaXplUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuYmF0Y2hSZXF1ZXN0ID0gX2luc3RhbmNlLmJhdGNoUmVxdWVzdCB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmF0Y2hTeW50aGVzaXplUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYmF0Y2hSZXF1ZXN0ICYmIF9pbnN0YW5jZS5iYXRjaFJlcXVlc3QubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuYmF0Y2hSZXF1ZXN0IGFzIGFueSxcbiAgICAgICAgU3ludGhlc2l6ZVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYmF0Y2hSZXF1ZXN0PzogU3ludGhlc2l6ZVJlcXVlc3RbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QmF0Y2hTeW50aGVzaXplUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5iYXRjaFJlcXVlc3QgPSAoX3ZhbHVlLmJhdGNoUmVxdWVzdCB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgU3ludGhlc2l6ZVJlcXVlc3QobSlcbiAgICApO1xuICAgIEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBiYXRjaFJlcXVlc3QoKTogU3ludGhlc2l6ZVJlcXVlc3RbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JhdGNoUmVxdWVzdDtcbiAgfVxuICBzZXQgYmF0Y2hSZXF1ZXN0KHZhbHVlOiBTeW50aGVzaXplUmVxdWVzdFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmF0Y2hSZXF1ZXN0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQmF0Y2hTeW50aGVzaXplUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hSZXF1ZXN0OiAodGhpcy5iYXRjaFJlcXVlc3QgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hSZXF1ZXN0OiAodGhpcy5iYXRjaFJlcXVlc3QgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJhdGNoU3ludGhlc2l6ZVJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEJhdGNoU3ludGhlc2l6ZVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGJhdGNoUmVxdWVzdD86IFN5bnRoZXNpemVSZXF1ZXN0LkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQmF0Y2hTeW50aGVzaXplUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgYmF0Y2hSZXF1ZXN0PzogU3ludGhlc2l6ZVJlcXVlc3QuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXRjaFN5bnRoZXNpemVSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuQmF0Y2hTeW50aGVzaXplUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCYXRjaFN5bnRoZXNpemVSZXNwb25zZSgpO1xuICAgIEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQmF0Y2hTeW50aGVzaXplUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuYmF0Y2hSZXNwb25zZSA9IF9pbnN0YW5jZS5iYXRjaFJlc3BvbnNlIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQmF0Y2hTeW50aGVzaXplUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBTeW50aGVzaXplUmVzcG9uc2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFN5bnRoZXNpemVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuYmF0Y2hSZXNwb25zZSA9IF9pbnN0YW5jZS5iYXRjaFJlc3BvbnNlIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCYXRjaFN5bnRoZXNpemVSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmJhdGNoUmVzcG9uc2UgJiYgX2luc3RhbmNlLmJhdGNoUmVzcG9uc2UubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuYmF0Y2hSZXNwb25zZSBhcyBhbnksXG4gICAgICAgIFN5bnRoZXNpemVSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9iYXRjaFJlc3BvbnNlPzogU3ludGhlc2l6ZVJlc3BvbnNlW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBCYXRjaFN5bnRoZXNpemVSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxCYXRjaFN5bnRoZXNpemVSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5iYXRjaFJlc3BvbnNlID0gKF92YWx1ZS5iYXRjaFJlc3BvbnNlIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBTeW50aGVzaXplUmVzcG9uc2UobSlcbiAgICApO1xuICAgIEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYmF0Y2hSZXNwb25zZSgpOiBTeW50aGVzaXplUmVzcG9uc2VbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JhdGNoUmVzcG9uc2U7XG4gIH1cbiAgc2V0IGJhdGNoUmVzcG9uc2UodmFsdWU6IFN5bnRoZXNpemVSZXNwb25zZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmF0Y2hSZXNwb25zZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hSZXNwb25zZTogKHRoaXMuYmF0Y2hSZXNwb25zZSB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hSZXNwb25zZTogKHRoaXMuYmF0Y2hSZXNwb25zZSB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQmF0Y2hTeW50aGVzaXplUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBiYXRjaFJlc3BvbnNlPzogU3ludGhlc2l6ZVJlc3BvbnNlLkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQmF0Y2hTeW50aGVzaXplUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGJhdGNoUmVzcG9uc2U/OiBTeW50aGVzaXplUmVzcG9uc2UuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlJlcXVlc3RDb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3RDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlJlcXVlc3RDb25maWcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBSZXF1ZXN0Q29uZmlnKCk7XG4gICAgUmVxdWVzdENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFJlcXVlc3RDb25maWcpIHtcbiAgICBfaW5zdGFuY2UudDJzUGlwZWxpbmVJZCA9IF9pbnN0YW5jZS50MnNQaXBlbGluZUlkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUmVxdWVzdENvbmZpZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudDJzUGlwZWxpbmVJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxlbmd0aFNjYWxlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5ub2lzZVNjYWxlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5zYW1wbGVSYXRlID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5wY20gPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuYXVkaW9Gb3JtYXQgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UudXNlQ2FjaGUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSZXF1ZXN0Q29uZmlnLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUmVxdWVzdENvbmZpZyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50MnNQaXBlbGluZUlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50MnNQaXBlbGluZUlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sZW5ndGhTY2FsZSB8fCBfaW5zdGFuY2UubGVuZ3RoU2NhbGUgPT09IDApIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgyLCBfaW5zdGFuY2UubGVuZ3RoU2NhbGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vaXNlU2NhbGUgfHwgX2luc3RhbmNlLm5vaXNlU2NhbGUgPT09IDApIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgzLCBfaW5zdGFuY2Uubm9pc2VTY2FsZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2FtcGxlUmF0ZSB8fCBfaW5zdGFuY2Uuc2FtcGxlUmF0ZSA9PT0gMCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDQsIF9pbnN0YW5jZS5zYW1wbGVSYXRlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wY20gfHwgX2luc3RhbmNlLnBjbSA9PT0gMCkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNSwgX2luc3RhbmNlLnBjbSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYXVkaW9Gb3JtYXQgfHwgX2luc3RhbmNlLmF1ZGlvRm9ybWF0ID09PSAwKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg2LCBfaW5zdGFuY2UuYXVkaW9Gb3JtYXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZUNhY2hlIHx8IF9pbnN0YW5jZS51c2VDYWNoZSA9PT0gZmFsc2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDcsIF9pbnN0YW5jZS51c2VDYWNoZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdDJzUGlwZWxpbmVJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGVuZ3RoU2NhbGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX25vaXNlU2NhbGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX3NhbXBsZVJhdGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX3BjbT86IFBjbTtcbiAgcHJpdmF0ZSBfYXVkaW9Gb3JtYXQ/OiBBdWRpb0Zvcm1hdDtcbiAgcHJpdmF0ZSBfdXNlQ2FjaGU/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX29uZW9mTGVuZ3RoU2NhbGU6IFJlcXVlc3RDb25maWcuT25lb2ZMZW5ndGhTY2FsZUNhc2UgPVxuICAgIFJlcXVlc3RDb25maWcuT25lb2ZMZW5ndGhTY2FsZUNhc2Uubm9uZTtcbiAgcHJpdmF0ZSBfb25lb2ZOb2lzZVNjYWxlOiBSZXF1ZXN0Q29uZmlnLk9uZW9mTm9pc2VTY2FsZUNhc2UgPVxuICAgIFJlcXVlc3RDb25maWcuT25lb2ZOb2lzZVNjYWxlQ2FzZS5ub25lO1xuICBwcml2YXRlIF9vbmVvZlNhbXBsZVJhdGU6IFJlcXVlc3RDb25maWcuT25lb2ZTYW1wbGVSYXRlQ2FzZSA9XG4gICAgUmVxdWVzdENvbmZpZy5PbmVvZlNhbXBsZVJhdGVDYXNlLm5vbmU7XG4gIHByaXZhdGUgX29uZW9mUGNtOiBSZXF1ZXN0Q29uZmlnLk9uZW9mUGNtQ2FzZSA9XG4gICAgUmVxdWVzdENvbmZpZy5PbmVvZlBjbUNhc2Uubm9uZTtcbiAgcHJpdmF0ZSBfb25lb2ZBdWRpb0Zvcm1hdDogUmVxdWVzdENvbmZpZy5PbmVvZkF1ZGlvRm9ybWF0Q2FzZSA9XG4gICAgUmVxdWVzdENvbmZpZy5PbmVvZkF1ZGlvRm9ybWF0Q2FzZS5ub25lO1xuICBwcml2YXRlIF9vbmVvZlVzZUNhY2hlOiBSZXF1ZXN0Q29uZmlnLk9uZW9mVXNlQ2FjaGVDYXNlID1cbiAgICBSZXF1ZXN0Q29uZmlnLk9uZW9mVXNlQ2FjaGVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBSZXF1ZXN0Q29uZmlnIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFJlcXVlc3RDb25maWcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudDJzUGlwZWxpbmVJZCA9IF92YWx1ZS50MnNQaXBlbGluZUlkO1xuICAgIHRoaXMubGVuZ3RoU2NhbGUgPSBfdmFsdWUubGVuZ3RoU2NhbGU7XG4gICAgdGhpcy5ub2lzZVNjYWxlID0gX3ZhbHVlLm5vaXNlU2NhbGU7XG4gICAgdGhpcy5zYW1wbGVSYXRlID0gX3ZhbHVlLnNhbXBsZVJhdGU7XG4gICAgdGhpcy5wY20gPSBfdmFsdWUucGNtO1xuICAgIHRoaXMuYXVkaW9Gb3JtYXQgPSBfdmFsdWUuYXVkaW9Gb3JtYXQ7XG4gICAgdGhpcy51c2VDYWNoZSA9IF92YWx1ZS51c2VDYWNoZTtcbiAgICBSZXF1ZXN0Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdDJzUGlwZWxpbmVJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90MnNQaXBlbGluZUlkO1xuICB9XG4gIHNldCB0MnNQaXBlbGluZUlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90MnNQaXBlbGluZUlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxlbmd0aFNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aFNjYWxlO1xuICB9XG4gIHNldCBsZW5ndGhTY2FsZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX29uZW9mTGVuZ3RoU2NhbGUgPSBSZXF1ZXN0Q29uZmlnLk9uZW9mTGVuZ3RoU2NhbGVDYXNlLmxlbmd0aFNjYWxlO1xuICAgIH1cbiAgICB0aGlzLl9sZW5ndGhTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub2lzZVNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vaXNlU2NhbGU7XG4gIH1cbiAgc2V0IG5vaXNlU2NhbGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZk5vaXNlU2NhbGUgPSBSZXF1ZXN0Q29uZmlnLk9uZW9mTm9pc2VTY2FsZUNhc2Uubm9pc2VTY2FsZTtcbiAgICB9XG4gICAgdGhpcy5fbm9pc2VTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzYW1wbGVSYXRlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsZVJhdGU7XG4gIH1cbiAgc2V0IHNhbXBsZVJhdGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZlNhbXBsZVJhdGUgPSBSZXF1ZXN0Q29uZmlnLk9uZW9mU2FtcGxlUmF0ZUNhc2Uuc2FtcGxlUmF0ZTtcbiAgICB9XG4gICAgdGhpcy5fc2FtcGxlUmF0ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwY20oKTogUGNtIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGNtO1xuICB9XG4gIHNldCBwY20odmFsdWU6IFBjbSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZlBjbSA9IFJlcXVlc3RDb25maWcuT25lb2ZQY21DYXNlLnBjbTtcbiAgICB9XG4gICAgdGhpcy5fcGNtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvRm9ybWF0KCk6IEF1ZGlvRm9ybWF0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9Gb3JtYXQ7XG4gIH1cbiAgc2V0IGF1ZGlvRm9ybWF0KHZhbHVlOiBBdWRpb0Zvcm1hdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZkF1ZGlvRm9ybWF0ID0gUmVxdWVzdENvbmZpZy5PbmVvZkF1ZGlvRm9ybWF0Q2FzZS5hdWRpb0Zvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5fYXVkaW9Gb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlQ2FjaGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUNhY2hlO1xuICB9XG4gIHNldCB1c2VDYWNoZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZlVzZUNhY2hlID0gUmVxdWVzdENvbmZpZy5PbmVvZlVzZUNhY2hlQ2FzZS51c2VDYWNoZTtcbiAgICB9XG4gICAgdGhpcy5fdXNlQ2FjaGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb25lb2ZMZW5ndGhTY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25lb2ZMZW5ndGhTY2FsZTtcbiAgfVxuICBnZXQgb25lb2ZOb2lzZVNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9vbmVvZk5vaXNlU2NhbGU7XG4gIH1cbiAgZ2V0IG9uZW9mU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25lb2ZTYW1wbGVSYXRlO1xuICB9XG4gIGdldCBvbmVvZlBjbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25lb2ZQY207XG4gIH1cbiAgZ2V0IG9uZW9mQXVkaW9Gb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mQXVkaW9Gb3JtYXQ7XG4gIH1cbiAgZ2V0IG9uZW9mVXNlQ2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mVXNlQ2FjaGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUmVxdWVzdENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBSZXF1ZXN0Q29uZmlnLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdDJzUGlwZWxpbmVJZDogdGhpcy50MnNQaXBlbGluZUlkLFxuICAgICAgbGVuZ3RoU2NhbGU6IHRoaXMubGVuZ3RoU2NhbGUsXG4gICAgICBub2lzZVNjYWxlOiB0aGlzLm5vaXNlU2NhbGUsXG4gICAgICBzYW1wbGVSYXRlOiB0aGlzLnNhbXBsZVJhdGUsXG4gICAgICBwY206IHRoaXMucGNtLFxuICAgICAgYXVkaW9Gb3JtYXQ6IHRoaXMuYXVkaW9Gb3JtYXQsXG4gICAgICB1c2VDYWNoZTogdGhpcy51c2VDYWNoZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFJlcXVlc3RDb25maWcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0MnNQaXBlbGluZUlkOiB0aGlzLnQyc1BpcGVsaW5lSWQsXG4gICAgICBsZW5ndGhTY2FsZTpcbiAgICAgICAgdGhpcy5sZW5ndGhTY2FsZSA9PT0gbnVsbCB8fCB0aGlzLmxlbmd0aFNjYWxlID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHRoaXMubGVuZ3RoU2NhbGUsXG4gICAgICBub2lzZVNjYWxlOlxuICAgICAgICB0aGlzLm5vaXNlU2NhbGUgPT09IG51bGwgfHwgdGhpcy5ub2lzZVNjYWxlID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHRoaXMubm9pc2VTY2FsZSxcbiAgICAgIHNhbXBsZVJhdGU6XG4gICAgICAgIHRoaXMuc2FtcGxlUmF0ZSA9PT0gbnVsbCB8fCB0aGlzLnNhbXBsZVJhdGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogdGhpcy5zYW1wbGVSYXRlLFxuICAgICAgcGNtOlxuICAgICAgICB0aGlzLnBjbSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiBQY21bdGhpcy5wY20gPT09IG51bGwgfHwgdGhpcy5wY20gPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnBjbV0sXG4gICAgICBhdWRpb0Zvcm1hdDpcbiAgICAgICAgdGhpcy5hdWRpb0Zvcm1hdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiBBdWRpb0Zvcm1hdFtcbiAgICAgICAgICAgICAgdGhpcy5hdWRpb0Zvcm1hdCA9PT0gbnVsbCB8fCB0aGlzLmF1ZGlvRm9ybWF0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICA6IHRoaXMuYXVkaW9Gb3JtYXRcbiAgICAgICAgICAgIF0sXG4gICAgICB1c2VDYWNoZTogdGhpcy51c2VDYWNoZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUmVxdWVzdENvbmZpZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUmVxdWVzdENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdDJzUGlwZWxpbmVJZD86IHN0cmluZztcbiAgICBsZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgICBub2lzZVNjYWxlPzogbnVtYmVyO1xuICAgIHNhbXBsZVJhdGU/OiBudW1iZXI7XG4gICAgcGNtPzogUGNtO1xuICAgIGF1ZGlvRm9ybWF0PzogQXVkaW9Gb3JtYXQ7XG4gICAgdXNlQ2FjaGU/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFJlcXVlc3RDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHQyc1BpcGVsaW5lSWQ/OiBzdHJpbmc7XG4gICAgbGVuZ3RoU2NhbGU/OiBudW1iZXIgfCBudWxsO1xuICAgIG5vaXNlU2NhbGU/OiBudW1iZXIgfCBudWxsO1xuICAgIHNhbXBsZVJhdGU/OiBudW1iZXIgfCBudWxsO1xuICAgIHBjbT86IHN0cmluZyB8IG51bGw7XG4gICAgYXVkaW9Gb3JtYXQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIHVzZUNhY2hlPzogYm9vbGVhbjtcbiAgfVxuICBleHBvcnQgZW51bSBPbmVvZkxlbmd0aFNjYWxlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgbGVuZ3RoU2NhbGUgPSAxXG4gIH1cbiAgZXhwb3J0IGVudW0gT25lb2ZOb2lzZVNjYWxlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgbm9pc2VTY2FsZSA9IDFcbiAgfVxuICBleHBvcnQgZW51bSBPbmVvZlNhbXBsZVJhdGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBzYW1wbGVSYXRlID0gMVxuICB9XG4gIGV4cG9ydCBlbnVtIE9uZW9mUGNtQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgcGNtID0gMVxuICB9XG4gIGV4cG9ydCBlbnVtIE9uZW9mQXVkaW9Gb3JtYXRDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBhdWRpb0Zvcm1hdCA9IDFcbiAgfVxuICBleHBvcnQgZW51bSBPbmVvZlVzZUNhY2hlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgdXNlQ2FjaGUgPSAxXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlN5bnRoZXNpemVSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgU3ludGhlc2l6ZVJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5TeW50aGVzaXplUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTeW50aGVzaXplUmVzcG9uc2UoKTtcbiAgICBTeW50aGVzaXplUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTeW50aGVzaXplUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuYXVkaW9VdWlkID0gX2luc3RhbmNlLmF1ZGlvVXVpZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuYXVkaW8gPSBfaW5zdGFuY2UuYXVkaW8gfHwgbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICBfaW5zdGFuY2UuZ2VuZXJhdGlvblRpbWUgPSBfaW5zdGFuY2UuZ2VuZXJhdGlvblRpbWUgfHwgMDtcbiAgICBfaW5zdGFuY2UuYXVkaW9MZW5ndGggPSBfaW5zdGFuY2UuYXVkaW9MZW5ndGggfHwgMDtcbiAgICBfaW5zdGFuY2UudGV4dCA9IF9pbnN0YW5jZS50ZXh0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jb25maWcgPSBfaW5zdGFuY2UuY29uZmlnIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uubm9ybWFsaXplZFRleHQgPSBfaW5zdGFuY2Uubm9ybWFsaXplZFRleHQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTeW50aGVzaXplUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmF1ZGlvVXVpZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmF1ZGlvID0gX3JlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5nZW5lcmF0aW9uVGltZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuYXVkaW9MZW5ndGggPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWcgPSBuZXcgUmVxdWVzdENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnLFxuICAgICAgICAgICAgUmVxdWVzdENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLm5vcm1hbGl6ZWRUZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTeW50aGVzaXplUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTeW50aGVzaXplUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYXVkaW9VdWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5hdWRpb1V1aWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmF1ZGlvICYmIF9pbnN0YW5jZS5hdWRpby5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCeXRlcygyLCBfaW5zdGFuY2UuYXVkaW8pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmdlbmVyYXRpb25UaW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLmdlbmVyYXRpb25UaW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hdWRpb0xlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS5hdWRpb0xlbmd0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg1LCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLmNvbmZpZyBhcyBhbnksXG4gICAgICAgIFJlcXVlc3RDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm9ybWFsaXplZFRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNywgX2luc3RhbmNlLm5vcm1hbGl6ZWRUZXh0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdWRpb1V1aWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1ZGlvPzogVWludDhBcnJheTtcbiAgcHJpdmF0ZSBfZ2VuZXJhdGlvblRpbWU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2F1ZGlvTGVuZ3RoPzogbnVtYmVyO1xuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9jb25maWc/OiBSZXF1ZXN0Q29uZmlnO1xuICBwcml2YXRlIF9ub3JtYWxpemVkVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFN5bnRoZXNpemVSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTeW50aGVzaXplUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYXVkaW9VdWlkID0gX3ZhbHVlLmF1ZGlvVXVpZDtcbiAgICB0aGlzLmF1ZGlvID0gX3ZhbHVlLmF1ZGlvO1xuICAgIHRoaXMuZ2VuZXJhdGlvblRpbWUgPSBfdmFsdWUuZ2VuZXJhdGlvblRpbWU7XG4gICAgdGhpcy5hdWRpb0xlbmd0aCA9IF92YWx1ZS5hdWRpb0xlbmd0aDtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dDtcbiAgICB0aGlzLmNvbmZpZyA9IF92YWx1ZS5jb25maWcgPyBuZXcgUmVxdWVzdENvbmZpZyhfdmFsdWUuY29uZmlnKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5vcm1hbGl6ZWRUZXh0ID0gX3ZhbHVlLm5vcm1hbGl6ZWRUZXh0O1xuICAgIFN5bnRoZXNpemVSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGF1ZGlvVXVpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb1V1aWQ7XG4gIH1cbiAgc2V0IGF1ZGlvVXVpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXVkaW9VdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvKCk6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdWRpbztcbiAgfVxuICBzZXQgYXVkaW8odmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hdWRpbyA9IHZhbHVlO1xuICB9XG4gIGdldCBnZW5lcmF0aW9uVGltZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0aW9uVGltZTtcbiAgfVxuICBzZXQgZ2VuZXJhdGlvblRpbWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2dlbmVyYXRpb25UaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvTGVuZ3RoKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvTGVuZ3RoO1xuICB9XG4gIHNldCBhdWRpb0xlbmd0aCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXVkaW9MZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBSZXF1ZXN0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsdWU6IFJlcXVlc3RDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9ybWFsaXplZFRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZFRleHQ7XG4gIH1cbiAgc2V0IG5vcm1hbGl6ZWRUZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub3JtYWxpemVkVGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN5bnRoZXNpemVSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTeW50aGVzaXplUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhdWRpb1V1aWQ6IHRoaXMuYXVkaW9VdWlkLFxuICAgICAgYXVkaW86IHRoaXMuYXVkaW8gPyB0aGlzLmF1ZGlvLnN1YmFycmF5KDApIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIGdlbmVyYXRpb25UaW1lOiB0aGlzLmdlbmVyYXRpb25UaW1lLFxuICAgICAgYXVkaW9MZW5ndGg6IHRoaXMuYXVkaW9MZW5ndGgsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG5vcm1hbGl6ZWRUZXh0OiB0aGlzLm5vcm1hbGl6ZWRUZXh0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3ludGhlc2l6ZVJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9VdWlkOiB0aGlzLmF1ZGlvVXVpZCxcbiAgICAgIGF1ZGlvOiB0aGlzLmF1ZGlvID8gdWludDhBcnJheVRvQmFzZTY0KHRoaXMuYXVkaW8pIDogJycsXG4gICAgICBnZW5lcmF0aW9uVGltZTogdGhpcy5nZW5lcmF0aW9uVGltZSxcbiAgICAgIGF1ZGlvTGVuZ3RoOiB0aGlzLmF1ZGlvTGVuZ3RoLFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG5vcm1hbGl6ZWRUZXh0OiB0aGlzLm5vcm1hbGl6ZWRUZXh0XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTeW50aGVzaXplUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN5bnRoZXNpemVSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYXVkaW9VdWlkPzogc3RyaW5nO1xuICAgIGF1ZGlvPzogVWludDhBcnJheTtcbiAgICBnZW5lcmF0aW9uVGltZT86IG51bWJlcjtcbiAgICBhdWRpb0xlbmd0aD86IG51bWJlcjtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIGNvbmZpZz86IFJlcXVlc3RDb25maWcuQXNPYmplY3Q7XG4gICAgbm9ybWFsaXplZFRleHQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3ludGhlc2l6ZVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhdWRpb1V1aWQ/OiBzdHJpbmc7XG4gICAgYXVkaW8/OiBzdHJpbmc7XG4gICAgZ2VuZXJhdGlvblRpbWU/OiBudW1iZXI7XG4gICAgYXVkaW9MZW5ndGg/OiBudW1iZXI7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICBjb25maWc/OiBSZXF1ZXN0Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBub3JtYWxpemVkVGV4dD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuVDJTR2V0U2VydmljZUluZm9SZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFQyU0dldFNlcnZpY2VJbmZvUmVzcG9uc2UoKTtcbiAgICBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS52ZXJzaW9uID0gX2luc3RhbmNlLnZlcnNpb24gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS52ZXJzaW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS52ZXJzaW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS52ZXJzaW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF92ZXJzaW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSBfdmFsdWUudmVyc2lvbjtcbiAgICBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdmVyc2lvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG4gIHNldCB2ZXJzaW9uKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVDJTR2V0U2VydmljZUluZm9SZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdmVyc2lvbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB2ZXJzaW9uPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5MaXN0VDJzUGlwZWxpbmVzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RUMnNQaXBlbGluZXNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QoKTtcbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW107XG4gICAgX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW107XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgKF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5sYW5ndWFnZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyAmJiBfaW5zdGFuY2Uuc3BlYWtlclNleGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIF9pbnN0YW5jZS5waXBlbGluZU93bmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJOYW1lcyAmJiBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDQsIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRvbWFpbnMgJiYgX2luc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNSwgX2luc3RhbmNlLmRvbWFpbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcGlwZWxpbmVPd25lcnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfc3BlYWtlck5hbWVzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2RvbWFpbnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9IChfdmFsdWUubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuc3BlYWtlclNleGVzID0gKF92YWx1ZS5zcGVha2VyU2V4ZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5waXBlbGluZU93bmVycyA9IChfdmFsdWUucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5zcGVha2VyTmFtZXMgPSAoX3ZhbHVlLnNwZWFrZXJOYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmRvbWFpbnMgPSAoX3ZhbHVlLmRvbWFpbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlYWtlclNleGVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlclNleGVzO1xuICB9XG4gIHNldCBzcGVha2VyU2V4ZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlYWtlclNleGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lT3duZXJzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVPd25lcnM7XG4gIH1cbiAgc2V0IHBpcGVsaW5lT3duZXJzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BpcGVsaW5lT3duZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWFrZXJOYW1lcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWFrZXJOYW1lcztcbiAgfVxuICBzZXQgc3BlYWtlck5hbWVzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWFrZXJOYW1lcyA9IHZhbHVlO1xuICB9XG4gIGdldCBkb21haW5zKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWlucztcbiAgfVxuICBzZXQgZG9tYWlucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kb21haW5zID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJTZXhlczogKHRoaXMuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc3BlYWtlck5hbWVzOiAodGhpcy5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJTZXhlczogKHRoaXMuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc3BlYWtlck5hbWVzOiAodGhpcy5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlcz86IHN0cmluZ1tdO1xuICAgIHNwZWFrZXJTZXhlcz86IHN0cmluZ1tdO1xuICAgIHBpcGVsaW5lT3duZXJzPzogc3RyaW5nW107XG4gICAgc3BlYWtlck5hbWVzPzogc3RyaW5nW107XG4gICAgZG9tYWlucz86IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZXM/OiBzdHJpbmdbXTtcbiAgICBzcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICAgIHNwZWFrZXJOYW1lcz86IHN0cmluZ1tdO1xuICAgIGRvbWFpbnM/OiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RUMnNQaXBlbGluZXNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSgpO1xuICAgIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5waXBlbGluZXMgPSBfaW5zdGFuY2UucGlwZWxpbmVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgVGV4dDJTcGVlY2hDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFRleHQyU3BlZWNoQ29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5waXBlbGluZXMgPSBfaW5zdGFuY2UucGlwZWxpbmVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmVzICYmIF9pbnN0YW5jZS5waXBlbGluZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UucGlwZWxpbmVzIGFzIGFueSxcbiAgICAgICAgVGV4dDJTcGVlY2hDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGlwZWxpbmVzPzogVGV4dDJTcGVlY2hDb25maWdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGlwZWxpbmVzID0gKF92YWx1ZS5waXBlbGluZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFRleHQyU3BlZWNoQ29uZmlnKG0pXG4gICAgKTtcbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwaXBlbGluZXMoKTogVGV4dDJTcGVlY2hDb25maWdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lcztcbiAgfVxuICBzZXQgcGlwZWxpbmVzKHZhbHVlOiBUZXh0MlNwZWVjaENvbmZpZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RUMnNQaXBlbGluZXNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBpcGVsaW5lczogKHRoaXMucGlwZWxpbmVzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVzOiAodGhpcy5waXBlbGluZXMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGlwZWxpbmVzPzogVGV4dDJTcGVlY2hDb25maWcuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBpcGVsaW5lcz86IFRleHQyU3BlZWNoQ29uZmlnLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5MaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QoKTtcbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW107XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyAmJiBfaW5zdGFuY2Uuc3BlYWtlclNleGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIF9pbnN0YW5jZS5waXBlbGluZU93bmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJOYW1lcyAmJiBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRvbWFpbnMgJiYgX2luc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgX2luc3RhbmNlLmRvbWFpbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NwZWFrZXJTZXhlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zcGVha2VyTmFtZXM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfZG9tYWlucz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3BlYWtlclNleGVzID0gKF92YWx1ZS5zcGVha2VyU2V4ZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5waXBlbGluZU93bmVycyA9IChfdmFsdWUucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5zcGVha2VyTmFtZXMgPSAoX3ZhbHVlLnNwZWFrZXJOYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmRvbWFpbnMgPSAoX3ZhbHVlLmRvbWFpbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzcGVha2VyU2V4ZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVha2VyU2V4ZXM7XG4gIH1cbiAgc2V0IHNwZWFrZXJTZXhlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVha2VyU2V4ZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmVPd25lcnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZU93bmVycztcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlYWtlck5hbWVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlck5hbWVzO1xuICB9XG4gIHNldCBzcGVha2VyTmFtZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlYWtlck5hbWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRvbWFpbnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5zO1xuICB9XG4gIHNldCBkb21haW5zKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RvbWFpbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwZWFrZXJTZXhlczogKHRoaXMuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc3BlYWtlck5hbWVzOiAodGhpcy5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVha2VyU2V4ZXM6ICh0aGlzLnNwZWFrZXJTZXhlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJOYW1lczogKHRoaXMuc3BlYWtlck5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgZG9tYWluczogKHRoaXMuZG9tYWlucyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICAgIHNwZWFrZXJOYW1lcz86IHN0cmluZ1tdO1xuICAgIGRvbWFpbnM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3BlYWtlclNleGVzPzogc3RyaW5nW107XG4gICAgcGlwZWxpbmVPd25lcnM/OiBzdHJpbmdbXTtcbiAgICBzcGVha2VyTmFtZXM/OiBzdHJpbmdbXTtcbiAgICBkb21haW5zPzogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkxpc3RUMnNMYW5ndWFnZXNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgTGlzdFQyc0xhbmd1YWdlc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5MaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UoKTtcbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VzID0gX2luc3RhbmNlLmxhbmd1YWdlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VzICYmIF9pbnN0YW5jZS5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFQyc0xhbmd1YWdlc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9IChfdmFsdWUubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlczogKHRoaXMubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VzPzogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFQyc0xhbmd1YWdlc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZXM/OiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTGlzdFQyc0RvbWFpbnNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0VDJzRG9tYWluc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RUMnNEb21haW5zUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RUMnNEb21haW5zUmVxdWVzdCgpO1xuICAgIExpc3RUMnNEb21haW5zUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RUMnNEb21haW5zUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgPSBfaW5zdGFuY2Uuc3BlYWtlclNleGVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5waXBlbGluZU93bmVycyA9IF9pbnN0YW5jZS5waXBlbGluZU93bmVycyB8fCBbXTtcbiAgICBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzID0gX2luc3RhbmNlLnNwZWFrZXJOYW1lcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VzID0gX2luc3RhbmNlLmxhbmd1YWdlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNEb21haW5zUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sYW5ndWFnZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFQyc0RvbWFpbnNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFQyc0RvbWFpbnNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyAmJiBfaW5zdGFuY2Uuc3BlYWtlclNleGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIF9pbnN0YW5jZS5waXBlbGluZU93bmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJOYW1lcyAmJiBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDQsIF9pbnN0YW5jZS5sYW5ndWFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NwZWFrZXJTZXhlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zcGVha2VyTmFtZXM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0VDJzRG9tYWluc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFQyc0RvbWFpbnNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNwZWFrZXJTZXhlcyA9IChfdmFsdWUuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucGlwZWxpbmVPd25lcnMgPSAoX3ZhbHVlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuc3BlYWtlck5hbWVzID0gKF92YWx1ZS5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5sYW5ndWFnZXMgPSAoX3ZhbHVlLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0VDJzRG9tYWluc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzcGVha2VyU2V4ZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVha2VyU2V4ZXM7XG4gIH1cbiAgc2V0IHNwZWFrZXJTZXhlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVha2VyU2V4ZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmVPd25lcnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZU93bmVycztcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlYWtlck5hbWVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlck5hbWVzO1xuICB9XG4gIHNldCBzcGVha2VyTmFtZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlYWtlck5hbWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RUMnNEb21haW5zUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0VDJzRG9tYWluc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVha2VyU2V4ZXM6ICh0aGlzLnNwZWFrZXJTZXhlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJOYW1lczogKHRoaXMuc3BlYWtlck5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbGFuZ3VhZ2VzOiAodGhpcy5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0VDJzRG9tYWluc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVha2VyU2V4ZXM6ICh0aGlzLnNwZWFrZXJTZXhlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJOYW1lczogKHRoaXMuc3BlYWtlck5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbGFuZ3VhZ2VzOiAodGhpcy5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RUMnNEb21haW5zUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFQyc0RvbWFpbnNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICAgIHNwZWFrZXJOYW1lcz86IHN0cmluZ1tdO1xuICAgIGxhbmd1YWdlcz86IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNEb21haW5zUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3BlYWtlclNleGVzPzogc3RyaW5nW107XG4gICAgcGlwZWxpbmVPd25lcnM/OiBzdHJpbmdbXTtcbiAgICBzcGVha2VyTmFtZXM/OiBzdHJpbmdbXTtcbiAgICBsYW5ndWFnZXM/OiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTGlzdFQyc0RvbWFpbnNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgTGlzdFQyc0RvbWFpbnNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuTGlzdFQyc0RvbWFpbnNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RUMnNEb21haW5zUmVzcG9uc2UoKTtcbiAgICBMaXN0VDJzRG9tYWluc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdFQyc0RvbWFpbnNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzRG9tYWluc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuZG9tYWlucyA9IF9pbnN0YW5jZS5kb21haW5zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFQyc0RvbWFpbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNEb21haW5zUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZG9tYWlucyAmJiBfaW5zdGFuY2UuZG9tYWlucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZG9tYWlucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZG9tYWlucz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFQyc0RvbWFpbnNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0VDJzRG9tYWluc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmRvbWFpbnMgPSAoX3ZhbHVlLmRvbWFpbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFQyc0RvbWFpbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGRvbWFpbnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5zO1xuICB9XG4gIHNldCBkb21haW5zKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RvbWFpbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0VDJzRG9tYWluc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RUMnNEb21haW5zUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFQyc0RvbWFpbnNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbnM6ICh0aGlzLmRvbWFpbnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RUMnNEb21haW5zUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNEb21haW5zUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGRvbWFpbnM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0VDJzRG9tYWluc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBkb21haW5zPzogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlQyc1BpcGVsaW5lSWRcbiAqL1xuZXhwb3J0IGNsYXNzIFQyc1BpcGVsaW5lSWQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlQyc1BpcGVsaW5lSWQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUMnNQaXBlbGluZUlkKCk7XG4gICAgVDJzUGlwZWxpbmVJZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFQyc1BpcGVsaW5lSWQpIHtcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUMnNQaXBlbGluZUlkLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVDJzUGlwZWxpbmVJZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFQyc1BpcGVsaW5lSWQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFQyc1BpcGVsaW5lSWQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VDJzUGlwZWxpbmVJZC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICBUMnNQaXBlbGluZUlkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFQyc1BpcGVsaW5lSWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVDJzUGlwZWxpbmVJZC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVDJzUGlwZWxpbmVJZC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUMnNQaXBlbGluZUlkIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUMnNQaXBlbGluZUlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUMnNQaXBlbGluZUlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpZD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuVGV4dDJTcGVlY2hDb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHQyU3BlZWNoQ29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5UZXh0MlNwZWVjaENvbmZpZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRleHQyU3BlZWNoQ29uZmlnKCk7XG4gICAgVGV4dDJTcGVlY2hDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUZXh0MlNwZWVjaENvbmZpZykge1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBfaW5zdGFuY2UuZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfaW5zdGFuY2UuYWN0aXZlIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5pbmZlcmVuY2UgPSBfaW5zdGFuY2UuaW5mZXJlbmNlIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucG9zdHByb2Nlc3NpbmcgPSBfaW5zdGFuY2UucG9zdHByb2Nlc3NpbmcgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVGV4dDJTcGVlY2hDb25maWcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBuZXcgVDJTRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgVDJTRGVzY3JpcHRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuaW5mZXJlbmNlID0gbmV3IFQyU0luZmVyZW5jZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuaW5mZXJlbmNlLFxuICAgICAgICAgICAgVDJTSW5mZXJlbmNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IG5ldyBUMlNOb3JtYWxpemF0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uLFxuICAgICAgICAgICAgVDJTTm9ybWFsaXphdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnBvc3Rwcm9jZXNzaW5nID0gbmV3IFBvc3Rwcm9jZXNzaW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wb3N0cHJvY2Vzc2luZyxcbiAgICAgICAgICAgIFBvc3Rwcm9jZXNzaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUZXh0MlNwZWVjaENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFRleHQyU3BlZWNoQ29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVzY3JpcHRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gYXMgYW55LFxuICAgICAgICBUMlNEZXNjcmlwdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY3RpdmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMsIF9pbnN0YW5jZS5hY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmluZmVyZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5pbmZlcmVuY2UgYXMgYW55LFxuICAgICAgICBUMlNJbmZlcmVuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm9ybWFsaXphdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uIGFzIGFueSxcbiAgICAgICAgVDJTTm9ybWFsaXphdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb3N0cHJvY2Vzc2luZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5wb3N0cHJvY2Vzc2luZyBhcyBhbnksXG4gICAgICAgIFBvc3Rwcm9jZXNzaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IFQyU0Rlc2NyaXB0aW9uO1xuICBwcml2YXRlIF9hY3RpdmU/OiBib29sZWFuO1xuICBwcml2YXRlIF9pbmZlcmVuY2U/OiBUMlNJbmZlcmVuY2U7XG4gIHByaXZhdGUgX25vcm1hbGl6YXRpb24/OiBUMlNOb3JtYWxpemF0aW9uO1xuICBwcml2YXRlIF9wb3N0cHJvY2Vzc2luZz86IFBvc3Rwcm9jZXNzaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVGV4dDJTcGVlY2hDb25maWcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGV4dDJTcGVlY2hDb25maWcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IF92YWx1ZS5kZXNjcmlwdGlvblxuICAgICAgPyBuZXcgVDJTRGVzY3JpcHRpb24oX3ZhbHVlLmRlc2NyaXB0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmUgPSBfdmFsdWUuYWN0aXZlO1xuICAgIHRoaXMuaW5mZXJlbmNlID0gX3ZhbHVlLmluZmVyZW5jZVxuICAgICAgPyBuZXcgVDJTSW5mZXJlbmNlKF92YWx1ZS5pbmZlcmVuY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5vcm1hbGl6YXRpb24gPSBfdmFsdWUubm9ybWFsaXphdGlvblxuICAgICAgPyBuZXcgVDJTTm9ybWFsaXphdGlvbihfdmFsdWUubm9ybWFsaXphdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9zdHByb2Nlc3NpbmcgPSBfdmFsdWUucG9zdHByb2Nlc3NpbmdcbiAgICAgID8gbmV3IFBvc3Rwcm9jZXNzaW5nKF92YWx1ZS5wb3N0cHJvY2Vzc2luZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFRleHQyU3BlZWNoQ29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbigpOiBUMlNEZXNjcmlwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogVDJTRGVzY3JpcHRpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGluZmVyZW5jZSgpOiBUMlNJbmZlcmVuY2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbmZlcmVuY2U7XG4gIH1cbiAgc2V0IGluZmVyZW5jZSh2YWx1ZTogVDJTSW5mZXJlbmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW5mZXJlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vcm1hbGl6YXRpb24oKTogVDJTTm9ybWFsaXphdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6YXRpb247XG4gIH1cbiAgc2V0IG5vcm1hbGl6YXRpb24odmFsdWU6IFQyU05vcm1hbGl6YXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub3JtYWxpemF0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3Rwcm9jZXNzaW5nKCk6IFBvc3Rwcm9jZXNzaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdHByb2Nlc3Npbmc7XG4gIH1cbiAgc2V0IHBvc3Rwcm9jZXNzaW5nKHZhbHVlOiBQb3N0cHJvY2Vzc2luZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Bvc3Rwcm9jZXNzaW5nID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVGV4dDJTcGVlY2hDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVGV4dDJTcGVlY2hDb25maWcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uID8gdGhpcy5kZXNjcmlwdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIGluZmVyZW5jZTogdGhpcy5pbmZlcmVuY2UgPyB0aGlzLmluZmVyZW5jZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbm9ybWFsaXphdGlvbjogdGhpcy5ub3JtYWxpemF0aW9uXG4gICAgICAgID8gdGhpcy5ub3JtYWxpemF0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwb3N0cHJvY2Vzc2luZzogdGhpcy5wb3N0cHJvY2Vzc2luZ1xuICAgICAgICA/IHRoaXMucG9zdHByb2Nlc3NpbmcudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRleHQyU3BlZWNoQ29uZmlnLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgICA/IHRoaXMuZGVzY3JpcHRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIGluZmVyZW5jZTogdGhpcy5pbmZlcmVuY2UgPyB0aGlzLmluZmVyZW5jZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBub3JtYWxpemF0aW9uOiB0aGlzLm5vcm1hbGl6YXRpb25cbiAgICAgICAgPyB0aGlzLm5vcm1hbGl6YXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9zdHByb2Nlc3Npbmc6IHRoaXMucG9zdHByb2Nlc3NpbmdcbiAgICAgICAgPyB0aGlzLnBvc3Rwcm9jZXNzaW5nLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVGV4dDJTcGVlY2hDb25maWcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRleHQyU3BlZWNoQ29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpZD86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IFQyU0Rlc2NyaXB0aW9uLkFzT2JqZWN0O1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgaW5mZXJlbmNlPzogVDJTSW5mZXJlbmNlLkFzT2JqZWN0O1xuICAgIG5vcm1hbGl6YXRpb24/OiBUMlNOb3JtYWxpemF0aW9uLkFzT2JqZWN0O1xuICAgIHBvc3Rwcm9jZXNzaW5nPzogUG9zdHByb2Nlc3NpbmcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVGV4dDJTcGVlY2hDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogVDJTRGVzY3JpcHRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgaW5mZXJlbmNlPzogVDJTSW5mZXJlbmNlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBub3JtYWxpemF0aW9uPzogVDJTTm9ybWFsaXphdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcG9zdHByb2Nlc3Npbmc/OiBQb3N0cHJvY2Vzc2luZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlQyU0Rlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUMlNEZXNjcmlwdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuVDJTRGVzY3JpcHRpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUMlNEZXNjcmlwdGlvbigpO1xuICAgIFQyU0Rlc2NyaXB0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVDJTRGVzY3JpcHRpb24pIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfaW5zdGFuY2UubGFuZ3VhZ2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNwZWFrZXJTZXggPSBfaW5zdGFuY2Uuc3BlYWtlclNleCB8fCAnJztcbiAgICBfaW5zdGFuY2UucGlwZWxpbmVPd25lciA9IF9pbnN0YW5jZS5waXBlbGluZU93bmVyIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jb21tZW50cyA9IF9pbnN0YW5jZS5jb21tZW50cyB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3BlYWtlck5hbWUgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRvbWFpbiA9IF9pbnN0YW5jZS5kb21haW4gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUMlNEZXNjcmlwdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVha2VyU2V4ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucGlwZWxpbmVPd25lciA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbW1lbnRzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlYWtlck5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5kb21haW4gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFQyU0Rlc2NyaXB0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVDJTRGVzY3JpcHRpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zcGVha2VyU2V4KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5zcGVha2VyU2V4KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZU93bmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5waXBlbGluZU93bmVyKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb21tZW50cykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuY29tbWVudHMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJOYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5zcGVha2VyTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZG9tYWluKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5kb21haW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVha2VyU2V4Pzogc3RyaW5nO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVyPzogc3RyaW5nO1xuICBwcml2YXRlIF9jb21tZW50cz86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlYWtlck5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RvbWFpbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFQyU0Rlc2NyaXB0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFQyU0Rlc2NyaXB0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlID0gX3ZhbHVlLmxhbmd1YWdlO1xuICAgIHRoaXMuc3BlYWtlclNleCA9IF92YWx1ZS5zcGVha2VyU2V4O1xuICAgIHRoaXMucGlwZWxpbmVPd25lciA9IF92YWx1ZS5waXBlbGluZU93bmVyO1xuICAgIHRoaXMuY29tbWVudHMgPSBfdmFsdWUuY29tbWVudHM7XG4gICAgdGhpcy5zcGVha2VyTmFtZSA9IF92YWx1ZS5zcGVha2VyTmFtZTtcbiAgICB0aGlzLmRvbWFpbiA9IF92YWx1ZS5kb21haW47XG4gICAgVDJTRGVzY3JpcHRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWFrZXJTZXgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlclNleDtcbiAgfVxuICBzZXQgc3BlYWtlclNleCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlYWtlclNleCA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZU93bmVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lT3duZXI7XG4gIH1cbiAgc2V0IHBpcGVsaW5lT3duZXIodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BpcGVsaW5lT3duZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29tbWVudHMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbWVudHM7XG4gIH1cbiAgc2V0IGNvbW1lbnRzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb21tZW50cyA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVha2VyTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVha2VyTmFtZTtcbiAgfVxuICBzZXQgc3BlYWtlck5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWFrZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRvbWFpbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kb21haW47XG4gIH1cbiAgc2V0IGRvbWFpbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZG9tYWluID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVDJTRGVzY3JpcHRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVDJTRGVzY3JpcHRpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHNwZWFrZXJTZXg6IHRoaXMuc3BlYWtlclNleCxcbiAgICAgIHBpcGVsaW5lT3duZXI6IHRoaXMucGlwZWxpbmVPd25lcixcbiAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgc3BlYWtlck5hbWU6IHRoaXMuc3BlYWtlck5hbWUsXG4gICAgICBkb21haW46IHRoaXMuZG9tYWluXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVDJTRGVzY3JpcHRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHNwZWFrZXJTZXg6IHRoaXMuc3BlYWtlclNleCxcbiAgICAgIHBpcGVsaW5lT3duZXI6IHRoaXMucGlwZWxpbmVPd25lcixcbiAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgc3BlYWtlck5hbWU6IHRoaXMuc3BlYWtlck5hbWUsXG4gICAgICBkb21haW46IHRoaXMuZG9tYWluXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUMlNEZXNjcmlwdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVDJTRGVzY3JpcHRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIHNwZWFrZXJTZXg/OiBzdHJpbmc7XG4gICAgcGlwZWxpbmVPd25lcj86IHN0cmluZztcbiAgICBjb21tZW50cz86IHN0cmluZztcbiAgICBzcGVha2VyTmFtZT86IHN0cmluZztcbiAgICBkb21haW4/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVDJTRGVzY3JpcHRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIHNwZWFrZXJTZXg/OiBzdHJpbmc7XG4gICAgcGlwZWxpbmVPd25lcj86IHN0cmluZztcbiAgICBjb21tZW50cz86IHN0cmluZztcbiAgICBzcGVha2VyTmFtZT86IHN0cmluZztcbiAgICBkb21haW4/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlQyU0luZmVyZW5jZVxuICovXG5leHBvcnQgY2xhc3MgVDJTSW5mZXJlbmNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5UMlNJbmZlcmVuY2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUMlNJbmZlcmVuY2UoKTtcbiAgICBUMlNJbmZlcmVuY2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUMlNJbmZlcmVuY2UpIHtcbiAgICBfaW5zdGFuY2UudHlwZSA9IF9pbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jb21wb3NpdGVJbmZlcmVuY2UgPSBfaW5zdGFuY2UuY29tcG9zaXRlSW5mZXJlbmNlIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuY2FjaGluZyA9IF9pbnN0YW5jZS5jYWNoaW5nIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFQyU0luZmVyZW5jZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudHlwZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbXBvc2l0ZUluZmVyZW5jZSA9IG5ldyBDb21wb3NpdGVJbmZlcmVuY2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbXBvc2l0ZUluZmVyZW5jZSxcbiAgICAgICAgICAgIENvbXBvc2l0ZUluZmVyZW5jZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmNhY2hpbmcgPSBuZXcgQ2FjaGluZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FjaGluZyxcbiAgICAgICAgICAgIENhY2hpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFQyU0luZmVyZW5jZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFQyU0luZmVyZW5jZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50eXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb21wb3NpdGVJbmZlcmVuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuY29tcG9zaXRlSW5mZXJlbmNlIGFzIGFueSxcbiAgICAgICAgQ29tcG9zaXRlSW5mZXJlbmNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhY2hpbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UuY2FjaGluZyBhcyBhbnksXG4gICAgICAgIENhY2hpbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tcG9zaXRlSW5mZXJlbmNlPzogQ29tcG9zaXRlSW5mZXJlbmNlO1xuICBwcml2YXRlIF9jYWNoaW5nPzogQ2FjaGluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFQyU0luZmVyZW5jZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUMlNJbmZlcmVuY2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHlwZSA9IF92YWx1ZS50eXBlO1xuICAgIHRoaXMuY29tcG9zaXRlSW5mZXJlbmNlID0gX3ZhbHVlLmNvbXBvc2l0ZUluZmVyZW5jZVxuICAgICAgPyBuZXcgQ29tcG9zaXRlSW5mZXJlbmNlKF92YWx1ZS5jb21wb3NpdGVJbmZlcmVuY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhY2hpbmcgPSBfdmFsdWUuY2FjaGluZyA/IG5ldyBDYWNoaW5nKF92YWx1ZS5jYWNoaW5nKSA6IHVuZGVmaW5lZDtcbiAgICBUMlNJbmZlcmVuY2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29tcG9zaXRlSW5mZXJlbmNlKCk6IENvbXBvc2l0ZUluZmVyZW5jZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvc2l0ZUluZmVyZW5jZTtcbiAgfVxuICBzZXQgY29tcG9zaXRlSW5mZXJlbmNlKHZhbHVlOiBDb21wb3NpdGVJbmZlcmVuY2UgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb21wb3NpdGVJbmZlcmVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FjaGluZygpOiBDYWNoaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGluZztcbiAgfVxuICBzZXQgY2FjaGluZyh2YWx1ZTogQ2FjaGluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NhY2hpbmcgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUMlNJbmZlcmVuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVDJTSW5mZXJlbmNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgY29tcG9zaXRlSW5mZXJlbmNlOiB0aGlzLmNvbXBvc2l0ZUluZmVyZW5jZVxuICAgICAgICA/IHRoaXMuY29tcG9zaXRlSW5mZXJlbmNlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjYWNoaW5nOiB0aGlzLmNhY2hpbmcgPyB0aGlzLmNhY2hpbmcudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFQyU0luZmVyZW5jZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGNvbXBvc2l0ZUluZmVyZW5jZTogdGhpcy5jb21wb3NpdGVJbmZlcmVuY2VcbiAgICAgICAgPyB0aGlzLmNvbXBvc2l0ZUluZmVyZW5jZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjYWNoaW5nOiB0aGlzLmNhY2hpbmcgPyB0aGlzLmNhY2hpbmcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUMlNJbmZlcmVuY2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFQyU0luZmVyZW5jZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBjb21wb3NpdGVJbmZlcmVuY2U/OiBDb21wb3NpdGVJbmZlcmVuY2UuQXNPYmplY3Q7XG4gICAgY2FjaGluZz86IENhY2hpbmcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVDJTSW5mZXJlbmNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIGNvbXBvc2l0ZUluZmVyZW5jZT86IENvbXBvc2l0ZUluZmVyZW5jZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FjaGluZz86IENhY2hpbmcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5Db21wb3NpdGVJbmZlcmVuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUluZmVyZW5jZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuQ29tcG9zaXRlSW5mZXJlbmNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ29tcG9zaXRlSW5mZXJlbmNlKCk7XG4gICAgQ29tcG9zaXRlSW5mZXJlbmNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ29tcG9zaXRlSW5mZXJlbmNlKSB7XG4gICAgX2luc3RhbmNlLnRleHQybWVsID0gX2luc3RhbmNlLnRleHQybWVsIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubWVsMmF1ZGlvID0gX2luc3RhbmNlLm1lbDJhdWRpbyB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDb21wb3NpdGVJbmZlcmVuY2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQybWVsID0gbmV3IFRleHQyTWVsKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50ZXh0Mm1lbCxcbiAgICAgICAgICAgIFRleHQyTWVsLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVsMmF1ZGlvID0gbmV3IE1lbDJBdWRpbygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWVsMmF1ZGlvLFxuICAgICAgICAgICAgTWVsMkF1ZGlvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDb21wb3NpdGVJbmZlcmVuY2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDb21wb3NpdGVJbmZlcmVuY2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudGV4dDJtZWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudGV4dDJtZWwgYXMgYW55LFxuICAgICAgICBUZXh0Mk1lbC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZWwyYXVkaW8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubWVsMmF1ZGlvIGFzIGFueSxcbiAgICAgICAgTWVsMkF1ZGlvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHQybWVsPzogVGV4dDJNZWw7XG4gIHByaXZhdGUgX21lbDJhdWRpbz86IE1lbDJBdWRpbztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENvbXBvc2l0ZUluZmVyZW5jZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDb21wb3NpdGVJbmZlcmVuY2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGV4dDJtZWwgPSBfdmFsdWUudGV4dDJtZWwgPyBuZXcgVGV4dDJNZWwoX3ZhbHVlLnRleHQybWVsKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lbDJhdWRpbyA9IF92YWx1ZS5tZWwyYXVkaW9cbiAgICAgID8gbmV3IE1lbDJBdWRpbyhfdmFsdWUubWVsMmF1ZGlvKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQ29tcG9zaXRlSW5mZXJlbmNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdGV4dDJtZWwoKTogVGV4dDJNZWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0Mm1lbDtcbiAgfVxuICBzZXQgdGV4dDJtZWwodmFsdWU6IFRleHQyTWVsIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGV4dDJtZWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVsMmF1ZGlvKCk6IE1lbDJBdWRpbyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lbDJhdWRpbztcbiAgfVxuICBzZXQgbWVsMmF1ZGlvKHZhbHVlOiBNZWwyQXVkaW8gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZWwyYXVkaW8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDb21wb3NpdGVJbmZlcmVuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ29tcG9zaXRlSW5mZXJlbmNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDJtZWw6IHRoaXMudGV4dDJtZWwgPyB0aGlzLnRleHQybWVsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZWwyYXVkaW86IHRoaXMubWVsMmF1ZGlvID8gdGhpcy5tZWwyYXVkaW8udG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENvbXBvc2l0ZUluZmVyZW5jZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQybWVsOiB0aGlzLnRleHQybWVsID8gdGhpcy50ZXh0Mm1lbC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtZWwyYXVkaW86IHRoaXMubWVsMmF1ZGlvID8gdGhpcy5tZWwyYXVkaW8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDb21wb3NpdGVJbmZlcmVuY2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENvbXBvc2l0ZUluZmVyZW5jZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdGV4dDJtZWw/OiBUZXh0Mk1lbC5Bc09iamVjdDtcbiAgICBtZWwyYXVkaW8/OiBNZWwyQXVkaW8uQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ29tcG9zaXRlSW5mZXJlbmNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0ZXh0Mm1lbD86IFRleHQyTWVsLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtZWwyYXVkaW8/OiBNZWwyQXVkaW8uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5UZXh0Mk1lbFxuICovXG5leHBvcnQgY2xhc3MgVGV4dDJNZWwgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlRleHQyTWVsJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGV4dDJNZWwoKTtcbiAgICBUZXh0Mk1lbC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFRleHQyTWVsKSB7XG4gICAgX2luc3RhbmNlLnR5cGUgPSBfaW5zdGFuY2UudHlwZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZ2xvd1R0cyA9IF9pbnN0YW5jZS5nbG93VHRzIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZ2xvd1R0c1RyaXRvbiA9IF9pbnN0YW5jZS5nbG93VHRzVHJpdG9uIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRleHQyTWVsLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50eXBlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZ2xvd1R0cyA9IG5ldyBHbG93VFRTKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5nbG93VHRzLFxuICAgICAgICAgICAgR2xvd1RUUy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmdsb3dUdHNUcml0b24gPSBuZXcgR2xvd1RUU1RyaXRvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZ2xvd1R0c1RyaXRvbixcbiAgICAgICAgICAgIEdsb3dUVFNUcml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRleHQyTWVsLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogVGV4dDJNZWwsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UudHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ2xvd1R0cykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5nbG93VHRzIGFzIGFueSxcbiAgICAgICAgR2xvd1RUUy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5nbG93VHRzVHJpdG9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmdsb3dUdHNUcml0b24gYXMgYW55LFxuICAgICAgICBHbG93VFRTVHJpdG9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2dsb3dUdHM/OiBHbG93VFRTO1xuICBwcml2YXRlIF9nbG93VHRzVHJpdG9uPzogR2xvd1RUU1RyaXRvbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFRleHQyTWVsIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRleHQyTWVsLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnR5cGUgPSBfdmFsdWUudHlwZTtcbiAgICB0aGlzLmdsb3dUdHMgPSBfdmFsdWUuZ2xvd1R0cyA/IG5ldyBHbG93VFRTKF92YWx1ZS5nbG93VHRzKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdsb3dUdHNUcml0b24gPSBfdmFsdWUuZ2xvd1R0c1RyaXRvblxuICAgICAgPyBuZXcgR2xvd1RUU1RyaXRvbihfdmFsdWUuZ2xvd1R0c1RyaXRvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFRleHQyTWVsLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdsb3dUdHMoKTogR2xvd1RUUyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb3dUdHM7XG4gIH1cbiAgc2V0IGdsb3dUdHModmFsdWU6IEdsb3dUVFMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nbG93VHRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdsb3dUdHNUcml0b24oKTogR2xvd1RUU1RyaXRvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb3dUdHNUcml0b247XG4gIH1cbiAgc2V0IGdsb3dUdHNUcml0b24odmFsdWU6IEdsb3dUVFNUcml0b24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nbG93VHRzVHJpdG9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVGV4dDJNZWwuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVGV4dDJNZWwuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBnbG93VHRzOiB0aGlzLmdsb3dUdHMgPyB0aGlzLmdsb3dUdHMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGdsb3dUdHNUcml0b246IHRoaXMuZ2xvd1R0c1RyaXRvblxuICAgICAgICA/IHRoaXMuZ2xvd1R0c1RyaXRvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVGV4dDJNZWwuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBnbG93VHRzOiB0aGlzLmdsb3dUdHMgPyB0aGlzLmdsb3dUdHMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZ2xvd1R0c1RyaXRvbjogdGhpcy5nbG93VHRzVHJpdG9uXG4gICAgICAgID8gdGhpcy5nbG93VHRzVHJpdG9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVGV4dDJNZWwge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRleHQyTWVsXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIGdsb3dUdHM/OiBHbG93VFRTLkFzT2JqZWN0O1xuICAgIGdsb3dUdHNUcml0b24/OiBHbG93VFRTVHJpdG9uLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRleHQyTWVsXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIGdsb3dUdHM/OiBHbG93VFRTLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBnbG93VHRzVHJpdG9uPzogR2xvd1RUU1RyaXRvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkdsb3dUVFNcbiAqL1xuZXhwb3J0IGNsYXNzIEdsb3dUVFMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkdsb3dUVFMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHbG93VFRTKCk7XG4gICAgR2xvd1RUUy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdsb3dUVFMpIHtcbiAgICBfaW5zdGFuY2UuYmF0Y2hTaXplID0gX2luc3RhbmNlLmJhdGNoU2l6ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnVzZUdwdSA9IF9pbnN0YW5jZS51c2VHcHUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmxlbmd0aFNjYWxlID0gX2luc3RhbmNlLmxlbmd0aFNjYWxlIHx8IDA7XG4gICAgX2luc3RhbmNlLm5vaXNlU2NhbGUgPSBfaW5zdGFuY2Uubm9pc2VTY2FsZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5wYXRoID0gX2luc3RhbmNlLnBhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLmNsZWFuZXJzID0gX2luc3RhbmNlLmNsZWFuZXJzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGggPSBfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2xvd1RUUyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYmF0Y2hTaXplID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VHcHUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubGVuZ3RoU2NhbGUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm5vaXNlU2NhbGUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnBhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIChfaW5zdGFuY2UuY2xlYW5lcnMgPSBfaW5zdGFuY2UuY2xlYW5lcnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHbG93VFRTLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogR2xvd1RUUywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5iYXRjaFNpemUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygxLCBfaW5zdGFuY2UuYmF0Y2hTaXplKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VHcHUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS51c2VHcHUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxlbmd0aFNjYWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLmxlbmd0aFNjYWxlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub2lzZVNjYWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNCwgX2luc3RhbmNlLm5vaXNlU2NhbGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNsZWFuZXJzICYmIF9pbnN0YW5jZS5jbGVhbmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg2LCBfaW5zdGFuY2UuY2xlYW5lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmFtQ29uZmlnUGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg3LCBfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9iYXRjaFNpemU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZUdwdT86IGJvb2xlYW47XG4gIHByaXZhdGUgX2xlbmd0aFNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9ub2lzZVNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF9jbGVhbmVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9wYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBHbG93VFRTIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdsb3dUVFMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYmF0Y2hTaXplID0gX3ZhbHVlLmJhdGNoU2l6ZTtcbiAgICB0aGlzLnVzZUdwdSA9IF92YWx1ZS51c2VHcHU7XG4gICAgdGhpcy5sZW5ndGhTY2FsZSA9IF92YWx1ZS5sZW5ndGhTY2FsZTtcbiAgICB0aGlzLm5vaXNlU2NhbGUgPSBfdmFsdWUubm9pc2VTY2FsZTtcbiAgICB0aGlzLnBhdGggPSBfdmFsdWUucGF0aDtcbiAgICB0aGlzLmNsZWFuZXJzID0gKF92YWx1ZS5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnBhcmFtQ29uZmlnUGF0aCA9IF92YWx1ZS5wYXJhbUNvbmZpZ1BhdGg7XG4gICAgR2xvd1RUUy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGJhdGNoU2l6ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFNpemU7XG4gIH1cbiAgc2V0IGJhdGNoU2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZUdwdSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlR3B1O1xuICB9XG4gIHNldCB1c2VHcHUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VHcHUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGVuZ3RoU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoU2NhbGU7XG4gIH1cbiAgc2V0IGxlbmd0aFNjYWxlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sZW5ndGhTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub2lzZVNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vaXNlU2NhbGU7XG4gIH1cbiAgc2V0IG5vaXNlU2NhbGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vaXNlU2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG4gIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNsZWFuZXJzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYW5lcnM7XG4gIH1cbiAgc2V0IGNsZWFuZXJzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsZWFuZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmFtQ29uZmlnUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbUNvbmZpZ1BhdGg7XG4gIH1cbiAgc2V0IHBhcmFtQ29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyYW1Db25maWdQYXRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2xvd1RUUy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHbG93VFRTLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHUsXG4gICAgICBsZW5ndGhTY2FsZTogdGhpcy5sZW5ndGhTY2FsZSxcbiAgICAgIG5vaXNlU2NhbGU6IHRoaXMubm9pc2VTY2FsZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGNsZWFuZXJzOiAodGhpcy5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBhcmFtQ29uZmlnUGF0aDogdGhpcy5wYXJhbUNvbmZpZ1BhdGhcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHbG93VFRTLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHUsXG4gICAgICBsZW5ndGhTY2FsZTogdGhpcy5sZW5ndGhTY2FsZSxcbiAgICAgIG5vaXNlU2NhbGU6IHRoaXMubm9pc2VTY2FsZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGNsZWFuZXJzOiAodGhpcy5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBhcmFtQ29uZmlnUGF0aDogdGhpcy5wYXJhbUNvbmZpZ1BhdGhcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdsb3dUVFMge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdsb3dUVFNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGJhdGNoU2l6ZT86IHN0cmluZztcbiAgICB1c2VHcHU/OiBib29sZWFuO1xuICAgIGxlbmd0aFNjYWxlPzogbnVtYmVyO1xuICAgIG5vaXNlU2NhbGU/OiBudW1iZXI7XG4gICAgcGF0aD86IHN0cmluZztcbiAgICBjbGVhbmVycz86IHN0cmluZ1tdO1xuICAgIHBhcmFtQ29uZmlnUGF0aD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHbG93VFRTXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBiYXRjaFNpemU/OiBzdHJpbmc7XG4gICAgdXNlR3B1PzogYm9vbGVhbjtcbiAgICBsZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgICBub2lzZVNjYWxlPzogbnVtYmVyO1xuICAgIHBhdGg/OiBzdHJpbmc7XG4gICAgY2xlYW5lcnM/OiBzdHJpbmdbXTtcbiAgICBwYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkdsb3dUVFNUcml0b25cbiAqL1xuZXhwb3J0IGNsYXNzIEdsb3dUVFNUcml0b24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkdsb3dUVFNUcml0b24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHbG93VFRTVHJpdG9uKCk7XG4gICAgR2xvd1RUU1RyaXRvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdsb3dUVFNUcml0b24pIHtcbiAgICBfaW5zdGFuY2UuYmF0Y2hTaXplID0gX2luc3RhbmNlLmJhdGNoU2l6ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmxlbmd0aFNjYWxlID0gX2luc3RhbmNlLmxlbmd0aFNjYWxlIHx8IDA7XG4gICAgX2luc3RhbmNlLm5vaXNlU2NhbGUgPSBfaW5zdGFuY2Uubm9pc2VTY2FsZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5jbGVhbmVycyA9IF9pbnN0YW5jZS5jbGVhbmVycyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubWF4VGV4dExlbmd0aCA9IF9pbnN0YW5jZS5tYXhUZXh0TGVuZ3RoIHx8ICcwJztcbiAgICBfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoID0gX2luc3RhbmNlLnBhcmFtQ29uZmlnUGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdsb3dUVFNUcml0b24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmJhdGNoU2l6ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubGVuZ3RoU2NhbGUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm5vaXNlU2NhbGUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5jbGVhbmVycyA9IF9pbnN0YW5jZS5jbGVhbmVycyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5tYXhUZXh0TGVuZ3RoID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdsb3dUVFNUcml0b24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHbG93VFRTVHJpdG9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmJhdGNoU2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIF9pbnN0YW5jZS5iYXRjaFNpemUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxlbmd0aFNjYWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLmxlbmd0aFNjYWxlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub2lzZVNjYWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLm5vaXNlU2NhbGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNsZWFuZXJzICYmIF9pbnN0YW5jZS5jbGVhbmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg0LCBfaW5zdGFuY2UuY2xlYW5lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1heFRleHRMZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg1LCBfaW5zdGFuY2UubWF4VGV4dExlbmd0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg3LCBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9iYXRjaFNpemU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xlbmd0aFNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9ub2lzZVNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9jbGVhbmVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9tYXhUZXh0TGVuZ3RoPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdsb3dUVFNUcml0b24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2xvd1RUU1RyaXRvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5iYXRjaFNpemUgPSBfdmFsdWUuYmF0Y2hTaXplO1xuICAgIHRoaXMubGVuZ3RoU2NhbGUgPSBfdmFsdWUubGVuZ3RoU2NhbGU7XG4gICAgdGhpcy5ub2lzZVNjYWxlID0gX3ZhbHVlLm5vaXNlU2NhbGU7XG4gICAgdGhpcy5jbGVhbmVycyA9IChfdmFsdWUuY2xlYW5lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5tYXhUZXh0TGVuZ3RoID0gX3ZhbHVlLm1heFRleHRMZW5ndGg7XG4gICAgdGhpcy5wYXJhbUNvbmZpZ1BhdGggPSBfdmFsdWUucGFyYW1Db25maWdQYXRoO1xuICAgIHRoaXMudHJpdG9uTW9kZWxOYW1lID0gX3ZhbHVlLnRyaXRvbk1vZGVsTmFtZTtcbiAgICBHbG93VFRTVHJpdG9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYmF0Y2hTaXplKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JhdGNoU2l6ZTtcbiAgfVxuICBzZXQgYmF0Y2hTaXplKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9iYXRjaFNpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGVuZ3RoU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoU2NhbGU7XG4gIH1cbiAgc2V0IGxlbmd0aFNjYWxlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sZW5ndGhTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub2lzZVNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vaXNlU2NhbGU7XG4gIH1cbiAgc2V0IG5vaXNlU2NhbGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vaXNlU2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2xlYW5lcnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGVhbmVycztcbiAgfVxuICBzZXQgY2xlYW5lcnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xlYW5lcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF4VGV4dExlbmd0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXhUZXh0TGVuZ3RoO1xuICB9XG4gIHNldCBtYXhUZXh0TGVuZ3RoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXhUZXh0TGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmFtQ29uZmlnUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbUNvbmZpZ1BhdGg7XG4gIH1cbiAgc2V0IHBhcmFtQ29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyYW1Db25maWdQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbE5hbWU7XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2xvd1RUU1RyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHbG93VFRTVHJpdG9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIGxlbmd0aFNjYWxlOiB0aGlzLmxlbmd0aFNjYWxlLFxuICAgICAgbm9pc2VTY2FsZTogdGhpcy5ub2lzZVNjYWxlLFxuICAgICAgY2xlYW5lcnM6ICh0aGlzLmNsZWFuZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4VGV4dExlbmd0aDogdGhpcy5tYXhUZXh0TGVuZ3RoLFxuICAgICAgcGFyYW1Db25maWdQYXRoOiB0aGlzLnBhcmFtQ29uZmlnUGF0aCxcbiAgICAgIHRyaXRvbk1vZGVsTmFtZTogdGhpcy50cml0b25Nb2RlbE5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHbG93VFRTVHJpdG9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIGxlbmd0aFNjYWxlOiB0aGlzLmxlbmd0aFNjYWxlLFxuICAgICAgbm9pc2VTY2FsZTogdGhpcy5ub2lzZVNjYWxlLFxuICAgICAgY2xlYW5lcnM6ICh0aGlzLmNsZWFuZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4VGV4dExlbmd0aDogdGhpcy5tYXhUZXh0TGVuZ3RoLFxuICAgICAgcGFyYW1Db25maWdQYXRoOiB0aGlzLnBhcmFtQ29uZmlnUGF0aCxcbiAgICAgIHRyaXRvbk1vZGVsTmFtZTogdGhpcy50cml0b25Nb2RlbE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdsb3dUVFNUcml0b24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdsb3dUVFNUcml0b25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGJhdGNoU2l6ZT86IHN0cmluZztcbiAgICBsZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgICBub2lzZVNjYWxlPzogbnVtYmVyO1xuICAgIGNsZWFuZXJzPzogc3RyaW5nW107XG4gICAgbWF4VGV4dExlbmd0aD86IHN0cmluZztcbiAgICBwYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gICAgdHJpdG9uTW9kZWxOYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdsb3dUVFNUcml0b25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGJhdGNoU2l6ZT86IHN0cmluZztcbiAgICBsZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgICBub2lzZVNjYWxlPzogbnVtYmVyO1xuICAgIGNsZWFuZXJzPzogc3RyaW5nW107XG4gICAgbWF4VGV4dExlbmd0aD86IHN0cmluZztcbiAgICBwYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gICAgdHJpdG9uTW9kZWxOYW1lPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5NZWwyQXVkaW9cbiAqL1xuZXhwb3J0IGNsYXNzIE1lbDJBdWRpbyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuTWVsMkF1ZGlvJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVsMkF1ZGlvKCk7XG4gICAgTWVsMkF1ZGlvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVsMkF1ZGlvKSB7XG4gICAgX2luc3RhbmNlLnR5cGUgPSBfaW5zdGFuY2UudHlwZSB8fCAnJztcbiAgICBfaW5zdGFuY2UubWJNZWxnYW5Ucml0b24gPSBfaW5zdGFuY2UubWJNZWxnYW5Ucml0b24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5oaWZpR2FuID0gX2luc3RhbmNlLmhpZmlHYW4gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5oaWZpR2FuVHJpdG9uID0gX2luc3RhbmNlLmhpZmlHYW5Ucml0b24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVsMkF1ZGlvLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50eXBlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWJNZWxnYW5Ucml0b24gPSBuZXcgTWJNZWxnYW5Ucml0b24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1iTWVsZ2FuVHJpdG9uLFxuICAgICAgICAgICAgTWJNZWxnYW5Ucml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5oaWZpR2FuID0gbmV3IEhpRmlHYW4oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmhpZmlHYW4sXG4gICAgICAgICAgICBIaUZpR2FuLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuaGlmaUdhblRyaXRvbiA9IG5ldyBIaUZpR2FuVHJpdG9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5oaWZpR2FuVHJpdG9uLFxuICAgICAgICAgICAgSGlGaUdhblRyaXRvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVsMkF1ZGlvLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogTWVsMkF1ZGlvLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1iTWVsZ2FuVHJpdG9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1iTWVsZ2FuVHJpdG9uIGFzIGFueSxcbiAgICAgICAgTWJNZWxnYW5Ucml0b24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaGlmaUdhbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5oaWZpR2FuIGFzIGFueSxcbiAgICAgICAgSGlGaUdhbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5oaWZpR2FuVHJpdG9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmhpZmlHYW5Ucml0b24gYXMgYW55LFxuICAgICAgICBIaUZpR2FuVHJpdG9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX21iTWVsZ2FuVHJpdG9uPzogTWJNZWxnYW5Ucml0b247XG4gIHByaXZhdGUgX2hpZmlHYW4/OiBIaUZpR2FuO1xuICBwcml2YXRlIF9oaWZpR2FuVHJpdG9uPzogSGlGaUdhblRyaXRvbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1lbDJBdWRpbyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZWwyQXVkaW8uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHlwZSA9IF92YWx1ZS50eXBlO1xuICAgIHRoaXMubWJNZWxnYW5Ucml0b24gPSBfdmFsdWUubWJNZWxnYW5Ucml0b25cbiAgICAgID8gbmV3IE1iTWVsZ2FuVHJpdG9uKF92YWx1ZS5tYk1lbGdhblRyaXRvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlmaUdhbiA9IF92YWx1ZS5oaWZpR2FuID8gbmV3IEhpRmlHYW4oX3ZhbHVlLmhpZmlHYW4pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlmaUdhblRyaXRvbiA9IF92YWx1ZS5oaWZpR2FuVHJpdG9uXG4gICAgICA/IG5ldyBIaUZpR2FuVHJpdG9uKF92YWx1ZS5oaWZpR2FuVHJpdG9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgTWVsMkF1ZGlvLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1iTWVsZ2FuVHJpdG9uKCk6IE1iTWVsZ2FuVHJpdG9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWJNZWxnYW5Ucml0b247XG4gIH1cbiAgc2V0IG1iTWVsZ2FuVHJpdG9uKHZhbHVlOiBNYk1lbGdhblRyaXRvbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21iTWVsZ2FuVHJpdG9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGhpZmlHYW4oKTogSGlGaUdhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZmlHYW47XG4gIH1cbiAgc2V0IGhpZmlHYW4odmFsdWU6IEhpRmlHYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9oaWZpR2FuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGhpZmlHYW5Ucml0b24oKTogSGlGaUdhblRyaXRvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZmlHYW5Ucml0b247XG4gIH1cbiAgc2V0IGhpZmlHYW5Ucml0b24odmFsdWU6IEhpRmlHYW5Ucml0b24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9oaWZpR2FuVHJpdG9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVsMkF1ZGlvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lbDJBdWRpby5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG1iTWVsZ2FuVHJpdG9uOiB0aGlzLm1iTWVsZ2FuVHJpdG9uXG4gICAgICAgID8gdGhpcy5tYk1lbGdhblRyaXRvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgaGlmaUdhbjogdGhpcy5oaWZpR2FuID8gdGhpcy5oaWZpR2FuLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBoaWZpR2FuVHJpdG9uOiB0aGlzLmhpZmlHYW5Ucml0b25cbiAgICAgICAgPyB0aGlzLmhpZmlHYW5Ucml0b24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lbDJBdWRpby5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG1iTWVsZ2FuVHJpdG9uOiB0aGlzLm1iTWVsZ2FuVHJpdG9uXG4gICAgICAgID8gdGhpcy5tYk1lbGdhblRyaXRvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBoaWZpR2FuOiB0aGlzLmhpZmlHYW4gPyB0aGlzLmhpZmlHYW4udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgaGlmaUdhblRyaXRvbjogdGhpcy5oaWZpR2FuVHJpdG9uXG4gICAgICAgID8gdGhpcy5oaWZpR2FuVHJpdG9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVsMkF1ZGlvIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZWwyQXVkaW9cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgbWJNZWxnYW5Ucml0b24/OiBNYk1lbGdhblRyaXRvbi5Bc09iamVjdDtcbiAgICBoaWZpR2FuPzogSGlGaUdhbi5Bc09iamVjdDtcbiAgICBoaWZpR2FuVHJpdG9uPzogSGlGaUdhblRyaXRvbi5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNZWwyQXVkaW9cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgbWJNZWxnYW5Ucml0b24/OiBNYk1lbGdhblRyaXRvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaGlmaUdhbj86IEhpRmlHYW4uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGhpZmlHYW5Ucml0b24/OiBIaUZpR2FuVHJpdG9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuSGlGaUdhblxuICovXG5leHBvcnQgY2xhc3MgSGlGaUdhbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuSGlGaUdhbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEhpRmlHYW4oKTtcbiAgICBIaUZpR2FuLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogSGlGaUdhbikge1xuICAgIF9pbnN0YW5jZS51c2VHcHUgPSBfaW5zdGFuY2UudXNlR3B1IHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5iYXRjaFNpemUgPSBfaW5zdGFuY2UuYmF0Y2hTaXplIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuY29uZmlnUGF0aCA9IF9pbnN0YW5jZS5jb25maWdQYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5tb2RlbFBhdGggPSBfaW5zdGFuY2UubW9kZWxQYXRoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogSGlGaUdhbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudXNlR3B1ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmJhdGNoU2l6ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGVsUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSGlGaUdhbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IEhpRmlHYW4sIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UudXNlR3B1KSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxLCBfaW5zdGFuY2UudXNlR3B1KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5iYXRjaFNpemUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UuYmF0Y2hTaXplKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWdQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5jb25maWdQYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RlbFBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLm1vZGVsUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXNlR3B1PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYmF0Y2hTaXplPzogc3RyaW5nO1xuICBwcml2YXRlIF9jb25maWdQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlbFBhdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBIaUZpR2FuIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEhpRmlHYW4uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudXNlR3B1ID0gX3ZhbHVlLnVzZUdwdTtcbiAgICB0aGlzLmJhdGNoU2l6ZSA9IF92YWx1ZS5iYXRjaFNpemU7XG4gICAgdGhpcy5jb25maWdQYXRoID0gX3ZhbHVlLmNvbmZpZ1BhdGg7XG4gICAgdGhpcy5tb2RlbFBhdGggPSBfdmFsdWUubW9kZWxQYXRoO1xuICAgIEhpRmlHYW4ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1c2VHcHUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUdwdTtcbiAgfVxuICBzZXQgdXNlR3B1KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXNlR3B1ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJhdGNoU2l6ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFNpemU7XG4gIH1cbiAgc2V0IGJhdGNoU2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnUGF0aDtcbiAgfVxuICBzZXQgY29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlbFBhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxQYXRoO1xuICB9XG4gIHNldCBtb2RlbFBhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21vZGVsUGF0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEhpRmlHYW4uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogSGlGaUdhbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHUsXG4gICAgICBiYXRjaFNpemU6IHRoaXMuYmF0Y2hTaXplLFxuICAgICAgY29uZmlnUGF0aDogdGhpcy5jb25maWdQYXRoLFxuICAgICAgbW9kZWxQYXRoOiB0aGlzLm1vZGVsUGF0aFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEhpRmlHYW4uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VHcHU6IHRoaXMudXNlR3B1LFxuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIGNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aCxcbiAgICAgIG1vZGVsUGF0aDogdGhpcy5tb2RlbFBhdGhcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEhpRmlHYW4ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEhpRmlHYW5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHVzZUdwdT86IGJvb2xlYW47XG4gICAgYmF0Y2hTaXplPzogc3RyaW5nO1xuICAgIGNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gICAgbW9kZWxQYXRoPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEhpRmlHYW5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHVzZUdwdT86IGJvb2xlYW47XG4gICAgYmF0Y2hTaXplPzogc3RyaW5nO1xuICAgIGNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gICAgbW9kZWxQYXRoPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5IaUZpR2FuVHJpdG9uXG4gKi9cbmV4cG9ydCBjbGFzcyBIaUZpR2FuVHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5IaUZpR2FuVHJpdG9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSGlGaUdhblRyaXRvbigpO1xuICAgIEhpRmlHYW5Ucml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBIaUZpR2FuVHJpdG9uKSB7XG4gICAgX2luc3RhbmNlLmNvbmZpZ1BhdGggPSBfaW5zdGFuY2UuY29uZmlnUGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEhpRmlHYW5Ucml0b24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZ1BhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEhpRmlHYW5Ucml0b24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBIaUZpR2FuVHJpdG9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZ1BhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmNvbmZpZ1BhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25maWdQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Nb2RlbE5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBIaUZpR2FuVHJpdG9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEhpRmlHYW5Ucml0b24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IF92YWx1ZS5jb25maWdQYXRoO1xuICAgIHRoaXMudHJpdG9uTW9kZWxOYW1lID0gX3ZhbHVlLnRyaXRvbk1vZGVsTmFtZTtcbiAgICBIaUZpR2FuVHJpdG9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY29uZmlnUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdQYXRoO1xuICB9XG4gIHNldCBjb25maWdQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWdQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbE5hbWU7XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSGlGaUdhblRyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBIaUZpR2FuVHJpdG9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnUGF0aDogdGhpcy5jb25maWdQYXRoLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEhpRmlHYW5Ucml0b24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdQYXRoOiB0aGlzLmNvbmZpZ1BhdGgsXG4gICAgICB0cml0b25Nb2RlbE5hbWU6IHRoaXMudHJpdG9uTW9kZWxOYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBIaUZpR2FuVHJpdG9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBIaUZpR2FuVHJpdG9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjb25maWdQYXRoPzogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBIaUZpR2FuVHJpdG9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjb25maWdQYXRoPzogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTWJNZWxnYW5Ucml0b25cbiAqL1xuZXhwb3J0IGNsYXNzIE1iTWVsZ2FuVHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5NYk1lbGdhblRyaXRvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1iTWVsZ2FuVHJpdG9uKCk7XG4gICAgTWJNZWxnYW5Ucml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNYk1lbGdhblRyaXRvbikge1xuICAgIF9pbnN0YW5jZS5jb25maWdQYXRoID0gX2luc3RhbmNlLmNvbmZpZ1BhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLnN0YXRzUGF0aCA9IF9pbnN0YW5jZS5zdGF0c1BhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSA9IF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyaXRvblVybCA9IF9pbnN0YW5jZS50cml0b25VcmwgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNYk1lbGdhblRyaXRvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnN0YXRzUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnRyaXRvblVybCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWJNZWxnYW5Ucml0b24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBNYk1lbGdhblRyaXRvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWdQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5jb25maWdQYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGF0c1BhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnN0YXRzUGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvblVybCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UudHJpdG9uVXJsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25maWdQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF9zdGF0c1BhdGg/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uVXJsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWJNZWxnYW5Ucml0b24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWJNZWxnYW5Ucml0b24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IF92YWx1ZS5jb25maWdQYXRoO1xuICAgIHRoaXMuc3RhdHNQYXRoID0gX3ZhbHVlLnN0YXRzUGF0aDtcbiAgICB0aGlzLnRyaXRvbk1vZGVsTmFtZSA9IF92YWx1ZS50cml0b25Nb2RlbE5hbWU7XG4gICAgdGhpcy50cml0b25VcmwgPSBfdmFsdWUudHJpdG9uVXJsO1xuICAgIE1iTWVsZ2FuVHJpdG9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY29uZmlnUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdQYXRoO1xuICB9XG4gIHNldCBjb25maWdQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWdQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0YXRzUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGF0c1BhdGg7XG4gIH1cbiAgc2V0IHN0YXRzUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RhdHNQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbE5hbWU7XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvblVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Vcmw7XG4gIH1cbiAgc2V0IHRyaXRvblVybCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJpdG9uVXJsID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWJNZWxnYW5Ucml0b24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTWJNZWxnYW5Ucml0b24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdQYXRoOiB0aGlzLmNvbmZpZ1BhdGgsXG4gICAgICBzdGF0c1BhdGg6IHRoaXMuc3RhdHNQYXRoLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZSxcbiAgICAgIHRyaXRvblVybDogdGhpcy50cml0b25VcmxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNYk1lbGdhblRyaXRvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aCxcbiAgICAgIHN0YXRzUGF0aDogdGhpcy5zdGF0c1BhdGgsXG4gICAgICB0cml0b25Nb2RlbE5hbWU6IHRoaXMudHJpdG9uTW9kZWxOYW1lLFxuICAgICAgdHJpdG9uVXJsOiB0aGlzLnRyaXRvblVybFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWJNZWxnYW5Ucml0b24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1iTWVsZ2FuVHJpdG9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjb25maWdQYXRoPzogc3RyaW5nO1xuICAgIHN0YXRzUGF0aD86IHN0cmluZztcbiAgICB0cml0b25Nb2RlbE5hbWU/OiBzdHJpbmc7XG4gICAgdHJpdG9uVXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1iTWVsZ2FuVHJpdG9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjb25maWdQYXRoPzogc3RyaW5nO1xuICAgIHN0YXRzUGF0aD86IHN0cmluZztcbiAgICB0cml0b25Nb2RlbE5hbWU/OiBzdHJpbmc7XG4gICAgdHJpdG9uVXJsPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5DYWNoaW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWNoaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5DYWNoaW5nJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2FjaGluZygpO1xuICAgIENhY2hpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDYWNoaW5nKSB7XG4gICAgX2luc3RhbmNlLmFjdGl2ZSA9IF9pbnN0YW5jZS5hY3RpdmUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLm1lbW9yeUNhY2hlTWF4U2l6ZSA9IF9pbnN0YW5jZS5tZW1vcnlDYWNoZU1heFNpemUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUgPSBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlIHx8ICcwJztcbiAgICBfaW5zdGFuY2UubG9hZENhY2hlID0gX2luc3RhbmNlLmxvYWRDYWNoZSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2Uuc2F2ZUNhY2hlID0gX2luc3RhbmNlLnNhdmVDYWNoZSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuY2FjaGVTYXZlRGlyID0gX2luc3RhbmNlLmNhY2hlU2F2ZURpciB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENhY2hpbmcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmFjdGl2ZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5tZW1vcnlDYWNoZU1heFNpemUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UubG9hZENhY2hlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnNhdmVDYWNoZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWNoZVNhdmVEaXIgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENhY2hpbmcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBDYWNoaW5nLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLmFjdGl2ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLmFjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVtb3J5Q2FjaGVNYXhTaXplKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLm1lbW9yeUNhY2hlTWF4U2l6ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9hZENhY2hlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg0LCBfaW5zdGFuY2UubG9hZENhY2hlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zYXZlQ2FjaGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDUsIF9pbnN0YW5jZS5zYXZlQ2FjaGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhY2hlU2F2ZURpcikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg2LCBfaW5zdGFuY2UuY2FjaGVTYXZlRGlyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmU/OiBib29sZWFuO1xuICBwcml2YXRlIF9tZW1vcnlDYWNoZU1heFNpemU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NhbXBsaW5nUmF0ZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9hZENhY2hlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc2F2ZUNhY2hlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2FjaGVTYXZlRGlyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2FjaGluZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDYWNoaW5nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFjdGl2ZSA9IF92YWx1ZS5hY3RpdmU7XG4gICAgdGhpcy5tZW1vcnlDYWNoZU1heFNpemUgPSBfdmFsdWUubWVtb3J5Q2FjaGVNYXhTaXplO1xuICAgIHRoaXMuc2FtcGxpbmdSYXRlID0gX3ZhbHVlLnNhbXBsaW5nUmF0ZTtcbiAgICB0aGlzLmxvYWRDYWNoZSA9IF92YWx1ZS5sb2FkQ2FjaGU7XG4gICAgdGhpcy5zYXZlQ2FjaGUgPSBfdmFsdWUuc2F2ZUNhY2hlO1xuICAgIHRoaXMuY2FjaGVTYXZlRGlyID0gX3ZhbHVlLmNhY2hlU2F2ZURpcjtcbiAgICBDYWNoaW5nLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtZW1vcnlDYWNoZU1heFNpemUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVtb3J5Q2FjaGVNYXhTaXplO1xuICB9XG4gIHNldCBtZW1vcnlDYWNoZU1heFNpemUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lbW9yeUNhY2hlTWF4U2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzYW1wbGluZ1JhdGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxpbmdSYXRlO1xuICB9XG4gIHNldCBzYW1wbGluZ1JhdGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NhbXBsaW5nUmF0ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2FkQ2FjaGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRDYWNoZTtcbiAgfVxuICBzZXQgbG9hZENhY2hlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbG9hZENhY2hlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNhdmVDYWNoZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2F2ZUNhY2hlO1xuICB9XG4gIHNldCBzYXZlQ2FjaGUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zYXZlQ2FjaGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FjaGVTYXZlRGlyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlU2F2ZURpcjtcbiAgfVxuICBzZXQgY2FjaGVTYXZlRGlyKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jYWNoZVNhdmVEaXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDYWNoaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENhY2hpbmcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgICAgbWVtb3J5Q2FjaGVNYXhTaXplOiB0aGlzLm1lbW9yeUNhY2hlTWF4U2l6ZSxcbiAgICAgIHNhbXBsaW5nUmF0ZTogdGhpcy5zYW1wbGluZ1JhdGUsXG4gICAgICBsb2FkQ2FjaGU6IHRoaXMubG9hZENhY2hlLFxuICAgICAgc2F2ZUNhY2hlOiB0aGlzLnNhdmVDYWNoZSxcbiAgICAgIGNhY2hlU2F2ZURpcjogdGhpcy5jYWNoZVNhdmVEaXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDYWNoaW5nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIG1lbW9yeUNhY2hlTWF4U2l6ZTogdGhpcy5tZW1vcnlDYWNoZU1heFNpemUsXG4gICAgICBzYW1wbGluZ1JhdGU6IHRoaXMuc2FtcGxpbmdSYXRlLFxuICAgICAgbG9hZENhY2hlOiB0aGlzLmxvYWRDYWNoZSxcbiAgICAgIHNhdmVDYWNoZTogdGhpcy5zYXZlQ2FjaGUsXG4gICAgICBjYWNoZVNhdmVEaXI6IHRoaXMuY2FjaGVTYXZlRGlyXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDYWNoaW5nIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDYWNoaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIG1lbW9yeUNhY2hlTWF4U2l6ZT86IHN0cmluZztcbiAgICBzYW1wbGluZ1JhdGU/OiBzdHJpbmc7XG4gICAgbG9hZENhY2hlPzogYm9vbGVhbjtcbiAgICBzYXZlQ2FjaGU/OiBib29sZWFuO1xuICAgIGNhY2hlU2F2ZURpcj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDYWNoaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIG1lbW9yeUNhY2hlTWF4U2l6ZT86IHN0cmluZztcbiAgICBzYW1wbGluZ1JhdGU/OiBzdHJpbmc7XG4gICAgbG9hZENhY2hlPzogYm9vbGVhbjtcbiAgICBzYXZlQ2FjaGU/OiBib29sZWFuO1xuICAgIGNhY2hlU2F2ZURpcj86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuVDJTTm9ybWFsaXphdGlvblxuICovXG5leHBvcnQgY2xhc3MgVDJTTm9ybWFsaXphdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuVDJTTm9ybWFsaXphdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFQyU05vcm1hbGl6YXRpb24oKTtcbiAgICBUMlNOb3JtYWxpemF0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVDJTTm9ybWFsaXphdGlvbikge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZSA9IF9pbnN0YW5jZS5sYW5ndWFnZSB8fCAnJztcbiAgICBfaW5zdGFuY2UucGlwZWxpbmUgPSBfaW5zdGFuY2UucGlwZWxpbmUgfHwgW107XG4gICAgX2luc3RhbmNlLmN1c3RvbVBob25lbWl6ZXJJZCA9IF9pbnN0YW5jZS5jdXN0b21QaG9uZW1pemVySWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmN1c3RvbUxlbmd0aFNjYWxlcyA9IF9pbnN0YW5jZS5jdXN0b21MZW5ndGhTY2FsZXMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5hcnBhYmV0TWFwcHBpbmcgPSBfaW5zdGFuY2UuYXJwYWJldE1hcHBwaW5nIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVDJTTm9ybWFsaXphdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UucGlwZWxpbmUgPSBfaW5zdGFuY2UucGlwZWxpbmUgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuY3VzdG9tUGhvbmVtaXplcklkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY3VzdG9tTGVuZ3RoU2NhbGVzID0gbmV3IFQyU0N1c3RvbUxlbmd0aFNjYWxlcygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY3VzdG9tTGVuZ3RoU2NhbGVzLFxuICAgICAgICAgICAgVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXJwYWJldE1hcHBwaW5nID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUMlNOb3JtYWxpemF0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVDJTTm9ybWFsaXphdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lICYmIF9pbnN0YW5jZS5waXBlbGluZS5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmN1c3RvbVBob25lbWl6ZXJJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UuY3VzdG9tUGhvbmVtaXplcklkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jdXN0b21MZW5ndGhTY2FsZXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuY3VzdG9tTGVuZ3RoU2NhbGVzIGFzIGFueSxcbiAgICAgICAgVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFycGFiZXRNYXBwcGluZykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg1LCBfaW5zdGFuY2UuYXJwYWJldE1hcHBwaW5nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGlwZWxpbmU/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfY3VzdG9tUGhvbmVtaXplcklkPzogc3RyaW5nO1xuICBwcml2YXRlIF9jdXN0b21MZW5ndGhTY2FsZXM/OiBUMlNDdXN0b21MZW5ndGhTY2FsZXM7XG4gIHByaXZhdGUgX2FycGFiZXRNYXBwcGluZz86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFQyU05vcm1hbGl6YXRpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VDJTTm9ybWFsaXphdGlvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZSA9IF92YWx1ZS5sYW5ndWFnZTtcbiAgICB0aGlzLnBpcGVsaW5lID0gKF92YWx1ZS5waXBlbGluZSB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmN1c3RvbVBob25lbWl6ZXJJZCA9IF92YWx1ZS5jdXN0b21QaG9uZW1pemVySWQ7XG4gICAgdGhpcy5jdXN0b21MZW5ndGhTY2FsZXMgPSBfdmFsdWUuY3VzdG9tTGVuZ3RoU2NhbGVzXG4gICAgICA/IG5ldyBUMlNDdXN0b21MZW5ndGhTY2FsZXMoX3ZhbHVlLmN1c3RvbUxlbmd0aFNjYWxlcylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYXJwYWJldE1hcHBwaW5nID0gX3ZhbHVlLmFycGFiZXRNYXBwcGluZztcbiAgICBUMlNOb3JtYWxpemF0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cbiAgc2V0IGxhbmd1YWdlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZSgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lO1xuICB9XG4gIHNldCBwaXBlbGluZSh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjdXN0b21QaG9uZW1pemVySWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tUGhvbmVtaXplcklkO1xuICB9XG4gIHNldCBjdXN0b21QaG9uZW1pemVySWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2N1c3RvbVBob25lbWl6ZXJJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBjdXN0b21MZW5ndGhTY2FsZXMoKTogVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tTGVuZ3RoU2NhbGVzO1xuICB9XG4gIHNldCBjdXN0b21MZW5ndGhTY2FsZXModmFsdWU6IFQyU0N1c3RvbUxlbmd0aFNjYWxlcyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2N1c3RvbUxlbmd0aFNjYWxlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBhcnBhYmV0TWFwcHBpbmcoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYXJwYWJldE1hcHBwaW5nO1xuICB9XG4gIHNldCBhcnBhYmV0TWFwcHBpbmcodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FycGFiZXRNYXBwcGluZyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFQyU05vcm1hbGl6YXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVDJTTm9ybWFsaXphdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgcGlwZWxpbmU6ICh0aGlzLnBpcGVsaW5lIHx8IFtdKS5zbGljZSgpLFxuICAgICAgY3VzdG9tUGhvbmVtaXplcklkOiB0aGlzLmN1c3RvbVBob25lbWl6ZXJJZCxcbiAgICAgIGN1c3RvbUxlbmd0aFNjYWxlczogdGhpcy5jdXN0b21MZW5ndGhTY2FsZXNcbiAgICAgICAgPyB0aGlzLmN1c3RvbUxlbmd0aFNjYWxlcy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYXJwYWJldE1hcHBwaW5nOiB0aGlzLmFycGFiZXRNYXBwcGluZ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFQyU05vcm1hbGl6YXRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHBpcGVsaW5lOiAodGhpcy5waXBlbGluZSB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGN1c3RvbVBob25lbWl6ZXJJZDogdGhpcy5jdXN0b21QaG9uZW1pemVySWQsXG4gICAgICBjdXN0b21MZW5ndGhTY2FsZXM6IHRoaXMuY3VzdG9tTGVuZ3RoU2NhbGVzXG4gICAgICAgID8gdGhpcy5jdXN0b21MZW5ndGhTY2FsZXMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgYXJwYWJldE1hcHBwaW5nOiB0aGlzLmFycGFiZXRNYXBwcGluZ1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVDJTTm9ybWFsaXphdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVDJTTm9ybWFsaXphdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG4gICAgcGlwZWxpbmU/OiBzdHJpbmdbXTtcbiAgICBjdXN0b21QaG9uZW1pemVySWQ/OiBzdHJpbmc7XG4gICAgY3VzdG9tTGVuZ3RoU2NhbGVzPzogVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzLkFzT2JqZWN0O1xuICAgIGFycGFiZXRNYXBwcGluZz86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUMlNOb3JtYWxpemF0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZT86IHN0cmluZztcbiAgICBwaXBlbGluZT86IHN0cmluZ1tdO1xuICAgIGN1c3RvbVBob25lbWl6ZXJJZD86IHN0cmluZztcbiAgICBjdXN0b21MZW5ndGhTY2FsZXM/OiBUMlNDdXN0b21MZW5ndGhTY2FsZXMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGFycGFiZXRNYXBwcGluZz86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuUG9zdHByb2Nlc3NpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc3Rwcm9jZXNzaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5Qb3N0cHJvY2Vzc2luZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBvc3Rwcm9jZXNzaW5nKCk7XG4gICAgUG9zdHByb2Nlc3NpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQb3N0cHJvY2Vzc2luZykge1xuICAgIF9pbnN0YW5jZS5zaWxlbmNlU2VjcyA9IF9pbnN0YW5jZS5zaWxlbmNlU2VjcyB8fCAwO1xuICAgIF9pbnN0YW5jZS5waXBlbGluZSA9IF9pbnN0YW5jZS5waXBlbGluZSB8fCBbXTtcbiAgICBfaW5zdGFuY2UubG9nbW1zZSA9IF9pbnN0YW5jZS5sb2dtbXNlIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uud2llbmVyID0gX2luc3RhbmNlLndpZW5lciB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmFwb2RpemF0aW9uID0gX2luc3RhbmNlLmFwb2RpemF0aW9uIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFBvc3Rwcm9jZXNzaW5nLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zaWxlbmNlU2VjcyA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lID0gX2luc3RhbmNlLnBpcGVsaW5lIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmxvZ21tc2UgPSBuZXcgTG9nbW5zZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubG9nbW1zZSxcbiAgICAgICAgICAgIExvZ21uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS53aWVuZXIgPSBuZXcgV2llbmVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS53aWVuZXIsXG4gICAgICAgICAgICBXaWVuZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5hcG9kaXphdGlvbiA9IG5ldyBBcG9kaXphdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYXBvZGl6YXRpb24sXG4gICAgICAgICAgICBBcG9kaXphdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUG9zdHByb2Nlc3NpbmcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQb3N0cHJvY2Vzc2luZyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zaWxlbmNlU2Vjcykge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDEsIF9pbnN0YW5jZS5zaWxlbmNlU2Vjcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmUgJiYgX2luc3RhbmNlLnBpcGVsaW5lLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIF9pbnN0YW5jZS5waXBlbGluZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9nbW1zZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5sb2dtbXNlIGFzIGFueSxcbiAgICAgICAgTG9nbW5zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53aWVuZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2Uud2llbmVyIGFzIGFueSxcbiAgICAgICAgV2llbmVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFwb2RpemF0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLmFwb2RpemF0aW9uIGFzIGFueSxcbiAgICAgICAgQXBvZGl6YXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2lsZW5jZVNlY3M/OiBudW1iZXI7XG4gIHByaXZhdGUgX3BpcGVsaW5lPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2xvZ21tc2U/OiBMb2dtbnNlO1xuICBwcml2YXRlIF93aWVuZXI/OiBXaWVuZXI7XG4gIHByaXZhdGUgX2Fwb2RpemF0aW9uPzogQXBvZGl6YXRpb247XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQb3N0cHJvY2Vzc2luZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQb3N0cHJvY2Vzc2luZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zaWxlbmNlU2VjcyA9IF92YWx1ZS5zaWxlbmNlU2VjcztcbiAgICB0aGlzLnBpcGVsaW5lID0gKF92YWx1ZS5waXBlbGluZSB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmxvZ21tc2UgPSBfdmFsdWUubG9nbW1zZSA/IG5ldyBMb2dtbnNlKF92YWx1ZS5sb2dtbXNlKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndpZW5lciA9IF92YWx1ZS53aWVuZXIgPyBuZXcgV2llbmVyKF92YWx1ZS53aWVuZXIpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYXBvZGl6YXRpb24gPSBfdmFsdWUuYXBvZGl6YXRpb25cbiAgICAgID8gbmV3IEFwb2RpemF0aW9uKF92YWx1ZS5hcG9kaXphdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFBvc3Rwcm9jZXNzaW5nLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2lsZW5jZVNlY3MoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2lsZW5jZVNlY3M7XG4gIH1cbiAgc2V0IHNpbGVuY2VTZWNzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zaWxlbmNlU2VjcyA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZSgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lO1xuICB9XG4gIHNldCBwaXBlbGluZSh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2dtbXNlKCk6IExvZ21uc2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sb2dtbXNlO1xuICB9XG4gIHNldCBsb2dtbXNlKHZhbHVlOiBMb2dtbnNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbG9nbW1zZSA9IHZhbHVlO1xuICB9XG4gIGdldCB3aWVuZXIoKTogV2llbmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2llbmVyO1xuICB9XG4gIHNldCB3aWVuZXIodmFsdWU6IFdpZW5lciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dpZW5lciA9IHZhbHVlO1xuICB9XG4gIGdldCBhcG9kaXphdGlvbigpOiBBcG9kaXphdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Fwb2RpemF0aW9uO1xuICB9XG4gIHNldCBhcG9kaXphdGlvbih2YWx1ZTogQXBvZGl6YXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hcG9kaXphdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBvc3Rwcm9jZXNzaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFBvc3Rwcm9jZXNzaW5nLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2lsZW5jZVNlY3M6IHRoaXMuc2lsZW5jZVNlY3MsXG4gICAgICBwaXBlbGluZTogKHRoaXMucGlwZWxpbmUgfHwgW10pLnNsaWNlKCksXG4gICAgICBsb2dtbXNlOiB0aGlzLmxvZ21tc2UgPyB0aGlzLmxvZ21tc2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHdpZW5lcjogdGhpcy53aWVuZXIgPyB0aGlzLndpZW5lci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYXBvZGl6YXRpb246IHRoaXMuYXBvZGl6YXRpb24gPyB0aGlzLmFwb2RpemF0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQb3N0cHJvY2Vzc2luZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpbGVuY2VTZWNzOiB0aGlzLnNpbGVuY2VTZWNzLFxuICAgICAgcGlwZWxpbmU6ICh0aGlzLnBpcGVsaW5lIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbG9nbW1zZTogdGhpcy5sb2dtbXNlID8gdGhpcy5sb2dtbXNlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHdpZW5lcjogdGhpcy53aWVuZXIgPyB0aGlzLndpZW5lci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBhcG9kaXphdGlvbjogdGhpcy5hcG9kaXphdGlvblxuICAgICAgICA/IHRoaXMuYXBvZGl6YXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQb3N0cHJvY2Vzc2luZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUG9zdHByb2Nlc3NpbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNpbGVuY2VTZWNzPzogbnVtYmVyO1xuICAgIHBpcGVsaW5lPzogc3RyaW5nW107XG4gICAgbG9nbW1zZT86IExvZ21uc2UuQXNPYmplY3Q7XG4gICAgd2llbmVyPzogV2llbmVyLkFzT2JqZWN0O1xuICAgIGFwb2RpemF0aW9uPzogQXBvZGl6YXRpb24uQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUG9zdHByb2Nlc3NpbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHNpbGVuY2VTZWNzPzogbnVtYmVyO1xuICAgIHBpcGVsaW5lPzogc3RyaW5nW107XG4gICAgbG9nbW1zZT86IExvZ21uc2UuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHdpZW5lcj86IFdpZW5lci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYXBvZGl6YXRpb24/OiBBcG9kaXphdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkxvZ21uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExvZ21uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxvZ21uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMb2dtbnNlKCk7XG4gICAgTG9nbW5zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExvZ21uc2UpIHtcbiAgICBfaW5zdGFuY2UuaW5pdGlhbE5vaXNlID0gX2luc3RhbmNlLmluaXRpYWxOb2lzZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLndpbmRvd1NpemUgPSBfaW5zdGFuY2Uud2luZG93U2l6ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLm5vaXNlVGhyZXNob2xkID0gX2luc3RhbmNlLm5vaXNlVGhyZXNob2xkIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMb2dtbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pbml0aWFsTm9pc2UgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLndpbmRvd1NpemUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm5vaXNlVGhyZXNob2xkID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExvZ21uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBMb2dtbnNlLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLmluaXRpYWxOb2lzZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIF9pbnN0YW5jZS5pbml0aWFsTm9pc2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLndpbmRvd1NpemUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2Uud2luZG93U2l6ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm9pc2VUaHJlc2hvbGQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgzLCBfaW5zdGFuY2Uubm9pc2VUaHJlc2hvbGQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luaXRpYWxOb2lzZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfd2luZG93U2l6ZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbm9pc2VUaHJlc2hvbGQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMb2dtbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExvZ21uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaW5pdGlhbE5vaXNlID0gX3ZhbHVlLmluaXRpYWxOb2lzZTtcbiAgICB0aGlzLndpbmRvd1NpemUgPSBfdmFsdWUud2luZG93U2l6ZTtcbiAgICB0aGlzLm5vaXNlVGhyZXNob2xkID0gX3ZhbHVlLm5vaXNlVGhyZXNob2xkO1xuICAgIExvZ21uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpbml0aWFsTm9pc2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbE5vaXNlO1xuICB9XG4gIHNldCBpbml0aWFsTm9pc2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2luaXRpYWxOb2lzZSA9IHZhbHVlO1xuICB9XG4gIGdldCB3aW5kb3dTaXplKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbmRvd1NpemU7XG4gIH1cbiAgc2V0IHdpbmRvd1NpemUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dpbmRvd1NpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9pc2VUaHJlc2hvbGQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9pc2VUaHJlc2hvbGQ7XG4gIH1cbiAgc2V0IG5vaXNlVGhyZXNob2xkKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub2lzZVRocmVzaG9sZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExvZ21uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTG9nbW5zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWxOb2lzZTogdGhpcy5pbml0aWFsTm9pc2UsXG4gICAgICB3aW5kb3dTaXplOiB0aGlzLndpbmRvd1NpemUsXG4gICAgICBub2lzZVRocmVzaG9sZDogdGhpcy5ub2lzZVRocmVzaG9sZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExvZ21uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0aWFsTm9pc2U6IHRoaXMuaW5pdGlhbE5vaXNlLFxuICAgICAgd2luZG93U2l6ZTogdGhpcy53aW5kb3dTaXplLFxuICAgICAgbm9pc2VUaHJlc2hvbGQ6IHRoaXMubm9pc2VUaHJlc2hvbGRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExvZ21uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExvZ21uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGluaXRpYWxOb2lzZT86IHN0cmluZztcbiAgICB3aW5kb3dTaXplPzogc3RyaW5nO1xuICAgIG5vaXNlVGhyZXNob2xkPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExvZ21uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGluaXRpYWxOb2lzZT86IHN0cmluZztcbiAgICB3aW5kb3dTaXplPzogc3RyaW5nO1xuICAgIG5vaXNlVGhyZXNob2xkPzogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5XaWVuZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFdpZW5lciBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuV2llbmVyJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgV2llbmVyKCk7XG4gICAgV2llbmVyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogV2llbmVyKSB7XG4gICAgX2luc3RhbmNlLmZyYW1lTGVuID0gX2luc3RhbmNlLmZyYW1lTGVuIHx8ICcwJztcbiAgICBfaW5zdGFuY2UubHBjT3JkZXIgPSBfaW5zdGFuY2UubHBjT3JkZXIgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5pdGVyYXRpb25zID0gX2luc3RhbmNlLml0ZXJhdGlvbnMgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5hbHBoYSA9IF9pbnN0YW5jZS5hbHBoYSB8fCAwO1xuICAgIF9pbnN0YW5jZS50aHJlc2ggPSBfaW5zdGFuY2UudGhyZXNoIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoX2luc3RhbmNlOiBXaWVuZXIsIF9yZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmZyYW1lTGVuID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5scGNPcmRlciA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuaXRlcmF0aW9ucyA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuYWxwaGEgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnRocmVzaCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBXaWVuZXIucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBXaWVuZXIsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UuZnJhbWVMZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygxLCBfaW5zdGFuY2UuZnJhbWVMZW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxwY09yZGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLmxwY09yZGVyKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pdGVyYXRpb25zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgX2luc3RhbmNlLml0ZXJhdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFscGhhKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNCwgX2luc3RhbmNlLmFscGhhKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aHJlc2gpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg1LCBfaW5zdGFuY2UudGhyZXNoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9mcmFtZUxlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfbHBjT3JkZXI/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2l0ZXJhdGlvbnM/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FscGhhPzogbnVtYmVyO1xuICBwcml2YXRlIF90aHJlc2g/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBXaWVuZXIgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V2llbmVyLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmZyYW1lTGVuID0gX3ZhbHVlLmZyYW1lTGVuO1xuICAgIHRoaXMubHBjT3JkZXIgPSBfdmFsdWUubHBjT3JkZXI7XG4gICAgdGhpcy5pdGVyYXRpb25zID0gX3ZhbHVlLml0ZXJhdGlvbnM7XG4gICAgdGhpcy5hbHBoYSA9IF92YWx1ZS5hbHBoYTtcbiAgICB0aGlzLnRocmVzaCA9IF92YWx1ZS50aHJlc2g7XG4gICAgV2llbmVyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZnJhbWVMZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhbWVMZW47XG4gIH1cbiAgc2V0IGZyYW1lTGVuKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mcmFtZUxlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBscGNPcmRlcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9scGNPcmRlcjtcbiAgfVxuICBzZXQgbHBjT3JkZXIodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xwY09yZGVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGl0ZXJhdGlvbnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXRlcmF0aW9ucztcbiAgfVxuICBzZXQgaXRlcmF0aW9ucyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXRlcmF0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBhbHBoYSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbHBoYTtcbiAgfVxuICBzZXQgYWxwaGEodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FscGhhID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRocmVzaCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2g7XG4gIH1cbiAgc2V0IHRocmVzaCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGhyZXNoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV2llbmVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFdpZW5lci5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZyYW1lTGVuOiB0aGlzLmZyYW1lTGVuLFxuICAgICAgbHBjT3JkZXI6IHRoaXMubHBjT3JkZXIsXG4gICAgICBpdGVyYXRpb25zOiB0aGlzLml0ZXJhdGlvbnMsXG4gICAgICBhbHBoYTogdGhpcy5hbHBoYSxcbiAgICAgIHRocmVzaDogdGhpcy50aHJlc2hcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBXaWVuZXIuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBmcmFtZUxlbjogdGhpcy5mcmFtZUxlbixcbiAgICAgIGxwY09yZGVyOiB0aGlzLmxwY09yZGVyLFxuICAgICAgaXRlcmF0aW9uczogdGhpcy5pdGVyYXRpb25zLFxuICAgICAgYWxwaGE6IHRoaXMuYWxwaGEsXG4gICAgICB0aHJlc2g6IHRoaXMudGhyZXNoXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBXaWVuZXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFdpZW5lclxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZnJhbWVMZW4/OiBzdHJpbmc7XG4gICAgbHBjT3JkZXI/OiBzdHJpbmc7XG4gICAgaXRlcmF0aW9ucz86IHN0cmluZztcbiAgICBhbHBoYT86IG51bWJlcjtcbiAgICB0aHJlc2g/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgV2llbmVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBmcmFtZUxlbj86IHN0cmluZztcbiAgICBscGNPcmRlcj86IHN0cmluZztcbiAgICBpdGVyYXRpb25zPzogc3RyaW5nO1xuICAgIGFscGhhPzogbnVtYmVyO1xuICAgIHRocmVzaD86IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuQXBvZGl6YXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFwb2RpemF0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5BcG9kaXphdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFwb2RpemF0aW9uKCk7XG4gICAgQXBvZGl6YXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBcG9kaXphdGlvbikge1xuICAgIF9pbnN0YW5jZS5hcG9kaXphdGlvblNlY3MgPSBfaW5zdGFuY2UuYXBvZGl6YXRpb25TZWNzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBcG9kaXphdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXBvZGl6YXRpb25TZWNzID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFwb2RpemF0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQXBvZGl6YXRpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYXBvZGl6YXRpb25TZWNzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMSwgX2luc3RhbmNlLmFwb2RpemF0aW9uU2Vjcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBvZGl6YXRpb25TZWNzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQXBvZGl6YXRpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QXBvZGl6YXRpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYXBvZGl6YXRpb25TZWNzID0gX3ZhbHVlLmFwb2RpemF0aW9uU2VjcztcbiAgICBBcG9kaXphdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFwb2RpemF0aW9uU2VjcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hcG9kaXphdGlvblNlY3M7XG4gIH1cbiAgc2V0IGFwb2RpemF0aW9uU2Vjcyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXBvZGl6YXRpb25TZWNzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQXBvZGl6YXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQXBvZGl6YXRpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhcG9kaXphdGlvblNlY3M6IHRoaXMuYXBvZGl6YXRpb25TZWNzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQXBvZGl6YXRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBhcG9kaXphdGlvblNlY3M6IHRoaXMuYXBvZGl6YXRpb25TZWNzXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBcG9kaXphdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQXBvZGl6YXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGFwb2RpemF0aW9uU2Vjcz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBcG9kaXphdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgYXBvZGl6YXRpb25TZWNzPzogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5UMlNDdXN0b21MZW5ndGhTY2FsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFQyU0N1c3RvbUxlbmd0aFNjYWxlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzKCk7XG4gICAgVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzKSB7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAwO1xuICAgIF9pbnN0YW5jZS5lbWFpbCA9IF9pbnN0YW5jZS5lbWFpbCB8fCAwO1xuICAgIF9pbnN0YW5jZS51cmwgPSBfaW5zdGFuY2UudXJsIHx8IDA7XG4gICAgX2luc3RhbmNlLnBob25lID0gX2luc3RhbmNlLnBob25lIHx8IDA7XG4gICAgX2luc3RhbmNlLnNwZWxsID0gX2luc3RhbmNlLnNwZWxsIHx8IDA7XG4gICAgX2luc3RhbmNlLnNwZWxsV2l0aE5hbWVzID0gX2luc3RhbmNlLnNwZWxsV2l0aE5hbWVzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUMlNDdXN0b21MZW5ndGhTY2FsZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmVtYWlsID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS51cmwgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnBob25lID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVsbCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlbGxXaXRoTmFtZXMgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgxLCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW1haWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgyLCBfaW5zdGFuY2UuZW1haWwpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVybCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDMsIF9pbnN0YW5jZS51cmwpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBob25lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNCwgX2luc3RhbmNlLnBob25lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zcGVsbCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDUsIF9pbnN0YW5jZS5zcGVsbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlbGxXaXRoTmFtZXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg2LCBfaW5zdGFuY2Uuc3BlbGxXaXRoTmFtZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX2VtYWlsPzogbnVtYmVyO1xuICBwcml2YXRlIF91cmw/OiBudW1iZXI7XG4gIHByaXZhdGUgX3Bob25lPzogbnVtYmVyO1xuICBwcml2YXRlIF9zcGVsbD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3BlbGxXaXRoTmFtZXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUMlNDdXN0b21MZW5ndGhTY2FsZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VDJTQ3VzdG9tTGVuZ3RoU2NhbGVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dDtcbiAgICB0aGlzLmVtYWlsID0gX3ZhbHVlLmVtYWlsO1xuICAgIHRoaXMudXJsID0gX3ZhbHVlLnVybDtcbiAgICB0aGlzLnBob25lID0gX3ZhbHVlLnBob25lO1xuICAgIHRoaXMuc3BlbGwgPSBfdmFsdWUuc3BlbGw7XG4gICAgdGhpcy5zcGVsbFdpdGhOYW1lcyA9IF92YWx1ZS5zcGVsbFdpdGhOYW1lcztcbiAgICBUMlNDdXN0b21MZW5ndGhTY2FsZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0ZXh0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW1haWwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWw7XG4gIH1cbiAgc2V0IGVtYWlsKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbWFpbCA9IHZhbHVlO1xuICB9XG4gIGdldCB1cmwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXJsO1xuICB9XG4gIHNldCB1cmwodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VybCA9IHZhbHVlO1xuICB9XG4gIGdldCBwaG9uZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waG9uZTtcbiAgfVxuICBzZXQgcGhvbmUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Bob25lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWxsKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWxsO1xuICB9XG4gIHNldCBzcGVsbCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlbGwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlbGxXaXRoTmFtZXMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlbGxXaXRoTmFtZXM7XG4gIH1cbiAgc2V0IHNwZWxsV2l0aE5hbWVzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVsbFdpdGhOYW1lcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFQyU0N1c3RvbUxlbmd0aFNjYWxlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUMlNDdXN0b21MZW5ndGhTY2FsZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICBwaG9uZTogdGhpcy5waG9uZSxcbiAgICAgIHNwZWxsOiB0aGlzLnNwZWxsLFxuICAgICAgc3BlbGxXaXRoTmFtZXM6IHRoaXMuc3BlbGxXaXRoTmFtZXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUMlNDdXN0b21MZW5ndGhTY2FsZXMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICBwaG9uZTogdGhpcy5waG9uZSxcbiAgICAgIHNwZWxsOiB0aGlzLnNwZWxsLFxuICAgICAgc3BlbGxXaXRoTmFtZXM6IHRoaXMuc3BlbGxXaXRoTmFtZXNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFQyU0N1c3RvbUxlbmd0aFNjYWxlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVDJTQ3VzdG9tTGVuZ3RoU2NhbGVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0ZXh0PzogbnVtYmVyO1xuICAgIGVtYWlsPzogbnVtYmVyO1xuICAgIHVybD86IG51bWJlcjtcbiAgICBwaG9uZT86IG51bWJlcjtcbiAgICBzcGVsbD86IG51bWJlcjtcbiAgICBzcGVsbFdpdGhOYW1lcz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUMlNDdXN0b21MZW5ndGhTY2FsZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRleHQ/OiBudW1iZXI7XG4gICAgZW1haWw/OiBudW1iZXI7XG4gICAgdXJsPzogbnVtYmVyO1xuICAgIHBob25lPzogbnVtYmVyO1xuICAgIHNwZWxsPzogbnVtYmVyO1xuICAgIHNwZWxsV2l0aE5hbWVzPzogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5QaG9uZW1pemVySWRcbiAqL1xuZXhwb3J0IGNsYXNzIFBob25lbWl6ZXJJZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuUGhvbmVtaXplcklkJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUGhvbmVtaXplcklkKCk7XG4gICAgUGhvbmVtaXplcklkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUGhvbmVtaXplcklkKSB7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUGhvbmVtaXplcklkLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUGhvbmVtaXplcklkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUGhvbmVtaXplcklkLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQaG9uZW1pemVySWQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UGhvbmVtaXplcklkLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlkID0gX3ZhbHVlLmlkO1xuICAgIFBob25lbWl6ZXJJZC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQaG9uZW1pemVySWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUGhvbmVtaXplcklkLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQaG9uZW1pemVySWQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUGhvbmVtaXplcklkIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQaG9uZW1pemVySWRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFBob25lbWl6ZXJJZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkN1c3RvbVBob25lbWl6ZXJQcm90b1xuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tUGhvbmVtaXplclByb3RvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5DdXN0b21QaG9uZW1pemVyUHJvdG8nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDdXN0b21QaG9uZW1pemVyUHJvdG8oKTtcbiAgICBDdXN0b21QaG9uZW1pemVyUHJvdG8uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDdXN0b21QaG9uZW1pemVyUHJvdG8pIHtcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLm1hcHMgPSBfaW5zdGFuY2UubWFwcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEN1c3RvbVBob25lbWl6ZXJQcm90byxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICBNYXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLm1hcHMgPSBfaW5zdGFuY2UubWFwcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEN1c3RvbVBob25lbWl6ZXJQcm90by5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEN1c3RvbVBob25lbWl6ZXJQcm90byxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1hcHMgJiYgX2luc3RhbmNlLm1hcHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubWFwcyBhcyBhbnksXG4gICAgICAgIE1hcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFwcz86IE1hcFtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3VzdG9tUGhvbmVtaXplclByb3RvIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEN1c3RvbVBob25lbWl6ZXJQcm90by5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICB0aGlzLm1hcHMgPSAoX3ZhbHVlLm1hcHMgfHwgW10pLm1hcChtID0+IG5ldyBNYXAobSkpO1xuICAgIEN1c3RvbVBob25lbWl6ZXJQcm90by5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWFwcygpOiBNYXBbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcHM7XG4gIH1cbiAgc2V0IG1hcHModmFsdWU6IE1hcFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWFwcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEN1c3RvbVBob25lbWl6ZXJQcm90by5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDdXN0b21QaG9uZW1pemVyUHJvdG8uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG1hcHM6ICh0aGlzLm1hcHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDdXN0b21QaG9uZW1pemVyUHJvdG8uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG1hcHM6ICh0aGlzLm1hcHMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDdXN0b21QaG9uZW1pemVyUHJvdG8ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEN1c3RvbVBob25lbWl6ZXJQcm90b1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbWFwcz86IE1hcC5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEN1c3RvbVBob25lbWl6ZXJQcm90b1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbWFwcz86IE1hcC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTWFwXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXAgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLk1hcCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1hcCgpO1xuICAgIE1hcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE1hcCkge1xuICAgIF9pbnN0YW5jZS53b3JkID0gX2luc3RhbmNlLndvcmQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBob25lbWVHcm91cHMgPSBfaW5zdGFuY2UucGhvbmVtZUdyb3VwcyB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IE1hcCwgX3JlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uud29yZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnBob25lbWVHcm91cHMgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1hcC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IE1hcCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS53b3JkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS53b3JkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waG9uZW1lR3JvdXBzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5waG9uZW1lR3JvdXBzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF93b3JkPzogc3RyaW5nO1xuICBwcml2YXRlIF9waG9uZW1lR3JvdXBzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWFwIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1hcC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy53b3JkID0gX3ZhbHVlLndvcmQ7XG4gICAgdGhpcy5waG9uZW1lR3JvdXBzID0gX3ZhbHVlLnBob25lbWVHcm91cHM7XG4gICAgTWFwLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgd29yZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3JkO1xuICB9XG4gIHNldCB3b3JkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93b3JkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBob25lbWVHcm91cHMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGhvbmVtZUdyb3VwcztcbiAgfVxuICBzZXQgcGhvbmVtZUdyb3Vwcyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGhvbmVtZUdyb3VwcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1hcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNYXAuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBwaG9uZW1lR3JvdXBzOiB0aGlzLnBob25lbWVHcm91cHNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNYXAuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBwaG9uZW1lR3JvdXBzOiB0aGlzLnBob25lbWVHcm91cHNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1hcCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWFwXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB3b3JkPzogc3RyaW5nO1xuICAgIHBob25lbWVHcm91cHM/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTWFwXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB3b3JkPzogc3RyaW5nO1xuICAgIHBob25lbWVHcm91cHM/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkxpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0Q3VzdG9tUGhvbmVtaXplclJlc3BvbnNlKCk7XG4gICAgTGlzdEN1c3RvbVBob25lbWl6ZXJSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UucGhvbmVtaXplcnMgPSBfaW5zdGFuY2UucGhvbmVtaXplcnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0Q3VzdG9tUGhvbmVtaXplclJlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgQ3VzdG9tUGhvbmVtaXplclByb3RvKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBDdXN0b21QaG9uZW1pemVyUHJvdG8uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnBob25lbWl6ZXJzID0gX2luc3RhbmNlLnBob25lbWl6ZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0Q3VzdG9tUGhvbmVtaXplclJlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdEN1c3RvbVBob25lbWl6ZXJSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5waG9uZW1pemVycyAmJiBfaW5zdGFuY2UucGhvbmVtaXplcnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UucGhvbmVtaXplcnMgYXMgYW55LFxuICAgICAgICBDdXN0b21QaG9uZW1pemVyUHJvdG8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGhvbmVtaXplcnM/OiBDdXN0b21QaG9uZW1pemVyUHJvdG9bXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdEN1c3RvbVBob25lbWl6ZXJSZXNwb25zZS5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGhvbmVtaXplcnMgPSAoX3ZhbHVlLnBob25lbWl6ZXJzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBDdXN0b21QaG9uZW1pemVyUHJvdG8obSlcbiAgICApO1xuICAgIExpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwaG9uZW1pemVycygpOiBDdXN0b21QaG9uZW1pemVyUHJvdG9bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bob25lbWl6ZXJzO1xuICB9XG4gIHNldCBwaG9uZW1pemVycyh2YWx1ZTogQ3VzdG9tUGhvbmVtaXplclByb3RvW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waG9uZW1pemVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdEN1c3RvbVBob25lbWl6ZXJSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBob25lbWl6ZXJzOiAodGhpcy5waG9uZW1pemVycyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwaG9uZW1pemVyczogKHRoaXMucGhvbmVtaXplcnMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0Q3VzdG9tUGhvbmVtaXplclJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Q3VzdG9tUGhvbmVtaXplclJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwaG9uZW1pemVycz86IEN1c3RvbVBob25lbWl6ZXJQcm90by5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RDdXN0b21QaG9uZW1pemVyUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBob25lbWl6ZXJzPzogQ3VzdG9tUGhvbmVtaXplclByb3RvLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5MaXN0Q3VzdG9tUGhvbmVtaXplclJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RDdXN0b21QaG9uZW1pemVyUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuTGlzdEN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdEN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0KCk7XG4gICAgTGlzdEN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdEN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lSWRzID0gX2luc3RhbmNlLnBpcGVsaW5lSWRzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdEN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UucGlwZWxpbmVJZHMgPSBfaW5zdGFuY2UucGlwZWxpbmVJZHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0Q3VzdG9tUGhvbmVtaXplclJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0Q3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmVJZHMgJiYgX2luc3RhbmNlLnBpcGVsaW5lSWRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5waXBlbGluZUlkcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGlwZWxpbmVJZHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RDdXN0b21QaG9uZW1pemVyUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0Q3VzdG9tUGhvbmVtaXplclJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGlwZWxpbmVJZHMgPSAoX3ZhbHVlLnBpcGVsaW5lSWRzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lSWRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVJZHM7XG4gIH1cbiAgc2V0IHBpcGVsaW5lSWRzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BpcGVsaW5lSWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdEN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBpcGVsaW5lSWRzOiAodGhpcy5waXBlbGluZUlkcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBpcGVsaW5lSWRzOiAodGhpcy5waXBlbGluZUlkcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdEN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Q3VzdG9tUGhvbmVtaXplclJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBpcGVsaW5lSWRzPzogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdEN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwaXBlbGluZUlkcz86IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5VcGRhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlVwZGF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QoKTtcbiAgICBVcGRhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFVwZGF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS51cGRhdGVNZXRob2QgPSBfaW5zdGFuY2UudXBkYXRlTWV0aG9kIHx8IDA7XG4gICAgX2luc3RhbmNlLm1hcHMgPSBfaW5zdGFuY2UubWFwcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFVwZGF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnVwZGF0ZU1ldGhvZCA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjMsXG4gICAgICAgICAgICBNYXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLm1hcHMgPSBfaW5zdGFuY2UubWFwcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVwZGF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51cGRhdGVNZXRob2QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS51cGRhdGVNZXRob2QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1hcHMgJiYgX2luc3RhbmNlLm1hcHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UubWFwcyBhcyBhbnksXG4gICAgICAgIE1hcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdXBkYXRlTWV0aG9kPzogVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QuVXBkYXRlTWV0aG9kO1xuICBwcml2YXRlIF9tYXBzPzogTWFwW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBVcGRhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVcGRhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy51cGRhdGVNZXRob2QgPSBfdmFsdWUudXBkYXRlTWV0aG9kO1xuICAgIHRoaXMubWFwcyA9IChfdmFsdWUubWFwcyB8fCBbXSkubWFwKG0gPT4gbmV3IE1hcChtKSk7XG4gICAgVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVwZGF0ZU1ldGhvZCgpOiBVcGRhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5VcGRhdGVNZXRob2QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVNZXRob2Q7XG4gIH1cbiAgc2V0IHVwZGF0ZU1ldGhvZChcbiAgICB2YWx1ZTogVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QuVXBkYXRlTWV0aG9kIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3VwZGF0ZU1ldGhvZCA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXBzKCk6IE1hcFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwcztcbiAgfVxuICBzZXQgbWFwcyh2YWx1ZTogTWFwW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXBzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHVwZGF0ZU1ldGhvZDogdGhpcy51cGRhdGVNZXRob2QsXG4gICAgICBtYXBzOiAodGhpcy5tYXBzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHVwZGF0ZU1ldGhvZDpcbiAgICAgICAgVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QuVXBkYXRlTWV0aG9kW1xuICAgICAgICAgIHRoaXMudXBkYXRlTWV0aG9kID09PSBudWxsIHx8IHRoaXMudXBkYXRlTWV0aG9kID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnVwZGF0ZU1ldGhvZFxuICAgICAgICBdLFxuICAgICAgbWFwczogKHRoaXMubWFwcyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSlcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFVwZGF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBVcGRhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgdXBkYXRlTWV0aG9kPzogVXBkYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QuVXBkYXRlTWV0aG9kO1xuICAgIG1hcHM/OiBNYXAuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBVcGRhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgdXBkYXRlTWV0aG9kPzogc3RyaW5nO1xuICAgIG1hcHM/OiBNYXAuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVXBkYXRlTWV0aG9kIHtcbiAgICBleHRlbmRfaGFyZCA9IDAsXG4gICAgZXh0ZW5kX3NvZnQgPSAxLFxuICAgIHJlcGxhY2UgPSAyXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkNyZWF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDcmVhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdCgpO1xuICAgIENyZWF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucHJlZml4ID0gX2luc3RhbmNlLnByZWZpeCB8fCAnJztcbiAgICBfaW5zdGFuY2UubWFwcyA9IF9pbnN0YW5jZS5tYXBzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnByZWZpeCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBNYXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIE1hcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UubWFwcyA9IF9pbnN0YW5jZS5tYXBzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDcmVhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wcmVmaXgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnByZWZpeCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWFwcyAmJiBfaW5zdGFuY2UubWFwcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5tYXBzIGFzIGFueSxcbiAgICAgICAgTWFwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3ByZWZpeD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFwcz86IE1hcFtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnByZWZpeCA9IF92YWx1ZS5wcmVmaXg7XG4gICAgdGhpcy5tYXBzID0gKF92YWx1ZS5tYXBzIHx8IFtdKS5tYXAobSA9PiBuZXcgTWFwKG0pKTtcbiAgICBDcmVhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHByZWZpeCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cbiAgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1hcHMoKTogTWFwW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXBzO1xuICB9XG4gIHNldCBtYXBzKHZhbHVlOiBNYXBbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21hcHMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDcmVhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDcmVhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogdGhpcy5wcmVmaXgsXG4gICAgICBtYXBzOiAodGhpcy5tYXBzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ3JlYXRlQ3VzdG9tUGhvbmVtaXplclJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IHRoaXMucHJlZml4LFxuICAgICAgbWFwczogKHRoaXMubWFwcyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSlcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENyZWF0ZUN1c3RvbVBob25lbWl6ZXJSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDcmVhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcHJlZml4Pzogc3RyaW5nO1xuICAgIG1hcHM/OiBNYXAuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDcmVhdGVDdXN0b21QaG9uZW1pemVyUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcHJlZml4Pzogc3RyaW5nO1xuICAgIG1hcHM/OiBNYXAuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cbiJdfQ==
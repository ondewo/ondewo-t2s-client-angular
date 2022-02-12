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
        this._lengthScale = RequestConfig.LengthScaleCase.none;
        this._noiseScale = RequestConfig.NoiseScaleCase.none;
        this._sampleRate = RequestConfig.SampleRateCase.none;
        this._pcm = RequestConfig.PcmCase.none;
        this._audioFormat = RequestConfig.AudioFormatCase.none;
        this._useCache = RequestConfig.UseCacheCase.none;
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
            this._lengthScale = RequestConfig.LengthScaleCase.lengthScale;
        }
        this._lengthScale = value;
    }
    get noiseScale() {
        return this._noiseScale;
    }
    set noiseScale(value) {
        if (value !== undefined && value !== null) {
            this._noiseScale = RequestConfig.NoiseScaleCase.noiseScale;
        }
        this._noiseScale = value;
    }
    get sampleRate() {
        return this._sampleRate;
    }
    set sampleRate(value) {
        if (value !== undefined && value !== null) {
            this._sampleRate = RequestConfig.SampleRateCase.sampleRate;
        }
        this._sampleRate = value;
    }
    get pcm() {
        return this._pcm;
    }
    set pcm(value) {
        if (value !== undefined && value !== null) {
            this._pcm = RequestConfig.PcmCase.pcm;
        }
        this._pcm = value;
    }
    get audioFormat() {
        return this._audioFormat;
    }
    set audioFormat(value) {
        if (value !== undefined && value !== null) {
            this._audioFormat = RequestConfig.AudioFormatCase.audioFormat;
        }
        this._audioFormat = value;
    }
    get useCache() {
        return this._useCache;
    }
    set useCache(value) {
        if (value !== undefined && value !== null) {
            this._useCache = RequestConfig.UseCacheCase.useCache;
        }
        this._useCache = value;
    }
    get lengthScale() {
        return this._lengthScale;
    }
    get noiseScale() {
        return this._noiseScale;
    }
    get sampleRate() {
        return this._sampleRate;
    }
    get pcm() {
        return this._pcm;
    }
    get audioFormat() {
        return this._audioFormat;
    }
    get useCache() {
        return this._useCache;
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
    let LengthScaleCase;
    (function (LengthScaleCase) {
        LengthScaleCase[LengthScaleCase["none"] = 0] = "none";
        LengthScaleCase[LengthScaleCase["lengthScale"] = 1] = "lengthScale";
    })(LengthScaleCase = RequestConfig.LengthScaleCase || (RequestConfig.LengthScaleCase = {}));
    let NoiseScaleCase;
    (function (NoiseScaleCase) {
        NoiseScaleCase[NoiseScaleCase["none"] = 0] = "none";
        NoiseScaleCase[NoiseScaleCase["noiseScale"] = 1] = "noiseScale";
    })(NoiseScaleCase = RequestConfig.NoiseScaleCase || (RequestConfig.NoiseScaleCase = {}));
    let SampleRateCase;
    (function (SampleRateCase) {
        SampleRateCase[SampleRateCase["none"] = 0] = "none";
        SampleRateCase[SampleRateCase["sampleRate"] = 1] = "sampleRate";
    })(SampleRateCase = RequestConfig.SampleRateCase || (RequestConfig.SampleRateCase = {}));
    let PcmCase;
    (function (PcmCase) {
        PcmCase[PcmCase["none"] = 0] = "none";
        PcmCase[PcmCase["pcm"] = 1] = "pcm";
    })(PcmCase = RequestConfig.PcmCase || (RequestConfig.PcmCase = {}));
    let AudioFormatCase;
    (function (AudioFormatCase) {
        AudioFormatCase[AudioFormatCase["none"] = 0] = "none";
        AudioFormatCase[AudioFormatCase["audioFormat"] = 1] = "audioFormat";
    })(AudioFormatCase = RequestConfig.AudioFormatCase || (RequestConfig.AudioFormatCase = {}));
    let UseCacheCase;
    (function (UseCacheCase) {
        UseCacheCase[UseCacheCase["none"] = 0] = "none";
        UseCacheCase[UseCacheCase["useCache"] = 1] = "useCache";
    })(UseCacheCase = RequestConfig.UseCacheCase || (RequestConfig.UseCacheCase = {}));
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
            audioUuid: this.audioUuid,
            audio: this.audio ? uint8ArrayToBase64(this.audio) : '',
            generationTime: this.generationTime,
            audioLength: this.audioLength,
            text: this.text,
            config: this.config ? this.config.toProtobufJSON(options) : null
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
        this.tritonUrl = _value.tritonUrl;
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
        _instance.tritonUrl = _instance.tritonUrl || '';
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
                    _instance.tritonUrl = _reader.readString();
                    break;
                case 8:
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
        if (_instance.tritonUrl) {
            _writer.writeString(7, _instance.tritonUrl);
        }
        if (_instance.tritonModelName) {
            _writer.writeString(8, _instance.tritonModelName);
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
    get tritonUrl() {
        return this._tritonUrl;
    }
    set tritonUrl(value) {
        this._tritonUrl = value;
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
            tritonUrl: this.tritonUrl,
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
            tritonUrl: this.tritonUrl,
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
        this.tritonUrl = _value.tritonUrl;
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
                    _instance.tritonModelName = _reader.readString();
                    break;
                case 3:
                    _instance.tritonUrl = _reader.readString();
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
        if (_instance.tritonUrl) {
            _writer.writeString(3, _instance.tritonUrl);
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
        HiFiGanTriton.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            configPath: this.configPath,
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
            tritonModelName: this.tritonModelName,
            tritonUrl: this.tritonUrl
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
            customPhonemizerId: this.customPhonemizerId
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
            customPhonemizerId: this.customPhonemizerId
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC10by1zcGVlY2gucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL3Qycy90ZXh0LXRvLXNwZWVjaC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBSUwsa0JBQWtCLEVBQ25CLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxNQUFNLENBQU4sSUFBWSxHQVFYO0FBUkQsV0FBWSxHQUFHO0lBQ2IsaUNBQVUsQ0FBQTtJQUNWLGlDQUFVLENBQUE7SUFDVixpQ0FBVSxDQUFBO0lBQ1YsaUNBQVUsQ0FBQTtJQUNWLGlDQUFVLENBQUE7SUFDViwrQkFBUyxDQUFBO0lBQ1QsaUNBQVUsQ0FBQTtBQUNaLENBQUMsRUFSVyxHQUFHLEtBQUgsR0FBRyxRQVFkO0FBQ0QsTUFBTSxDQUFOLElBQVksV0FRWDtBQVJELFdBQVksV0FBVztJQUNyQiwyQ0FBTyxDQUFBO0lBQ1AsNkNBQVEsQ0FBQTtJQUNSLDJDQUFPLENBQUE7SUFDUCwyQ0FBTyxDQUFBO0lBQ1AsMkNBQU8sQ0FBQTtJQUNQLDJDQUFPLENBQUE7SUFDUCwyQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQVJXLFdBQVcsS0FBWCxXQUFXLFFBUXRCO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8saUJBQWlCO0lBZ0Y1Qjs7O09BR0c7SUFDSCxZQUFZLE1BQXFEO1FBQy9ELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUks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RTtZQUM3QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBYUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUF5QjtRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBbEhNLGNBQUUsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnMsXG4gIHVpbnQ4QXJyYXlUb0Jhc2U2NFxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAwIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmV4cG9ydCBlbnVtIFBjbSB7XG4gIFBDTV8xNiA9IDAsXG4gIFBDTV8yNCA9IDEsXG4gIFBDTV8zMiA9IDIsXG4gIFBDTV9TOCA9IDMsXG4gIFBDTV9VOCA9IDQsXG4gIEZMT0FUID0gNSxcbiAgRE9VQkxFID0gNlxufVxuZXhwb3J0IGVudW0gQXVkaW9Gb3JtYXQge1xuICB3YXYgPSAwLFxuICBmbGFjID0gMSxcbiAgY2FmID0gMixcbiAgbXAzID0gMyxcbiAgYWFjID0gNCxcbiAgb2dnID0gNSxcbiAgd21hID0gNlxufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlN5bnRoZXNpemVSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBTeW50aGVzaXplUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuU3ludGhlc2l6ZVJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTeW50aGVzaXplUmVxdWVzdCgpO1xuICAgIFN5bnRoZXNpemVSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU3ludGhlc2l6ZVJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UudGV4dCA9IF9pbnN0YW5jZS50ZXh0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jb25maWcgPSBfaW5zdGFuY2UuY29uZmlnIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFN5bnRoZXNpemVSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnID0gbmV3IFJlcXVlc3RDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyxcbiAgICAgICAgICAgIFJlcXVlc3RDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN5bnRoZXNpemVSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU3ludGhlc2l6ZVJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmNvbmZpZyBhcyBhbnksXG4gICAgICAgIFJlcXVlc3RDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29uZmlnPzogUmVxdWVzdENvbmZpZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFN5bnRoZXNpemVSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN5bnRoZXNpemVSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dDtcbiAgICB0aGlzLmNvbmZpZyA9IF92YWx1ZS5jb25maWcgPyBuZXcgUmVxdWVzdENvbmZpZyhfdmFsdWUuY29uZmlnKSA6IHVuZGVmaW5lZDtcbiAgICBTeW50aGVzaXplUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBjb25maWcoKTogUmVxdWVzdENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbHVlOiBSZXF1ZXN0Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3ludGhlc2l6ZVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU3ludGhlc2l6ZVJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFN5bnRoZXNpemVSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3ludGhlc2l6ZVJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN5bnRoZXNpemVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIGNvbmZpZz86IFJlcXVlc3RDb25maWcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3ludGhlc2l6ZVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgY29uZmlnPzogUmVxdWVzdENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkJhdGNoU3ludGhlc2l6ZVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkJhdGNoU3ludGhlc2l6ZVJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0KCk7XG4gICAgQmF0Y2hTeW50aGVzaXplUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuYmF0Y2hSZXF1ZXN0ID0gX2luc3RhbmNlLmJhdGNoUmVxdWVzdCB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBTeW50aGVzaXplUmVxdWVzdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgU3ludGhlc2l6ZVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmJhdGNoUmVxdWVzdCA9IF9pbnN0YW5jZS5iYXRjaFJlcXVlc3QgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmJhdGNoUmVxdWVzdCAmJiBfaW5zdGFuY2UuYmF0Y2hSZXF1ZXN0Lmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmJhdGNoUmVxdWVzdCBhcyBhbnksXG4gICAgICAgIFN5bnRoZXNpemVSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2JhdGNoUmVxdWVzdD86IFN5bnRoZXNpemVSZXF1ZXN0W107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJhdGNoU3ludGhlc2l6ZVJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYmF0Y2hSZXF1ZXN0ID0gKF92YWx1ZS5iYXRjaFJlcXVlc3QgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFN5bnRoZXNpemVSZXF1ZXN0KG0pXG4gICAgKTtcbiAgICBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYmF0Y2hSZXF1ZXN0KCk6IFN5bnRoZXNpemVSZXF1ZXN0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFJlcXVlc3Q7XG4gIH1cbiAgc2V0IGJhdGNoUmVxdWVzdCh2YWx1ZTogU3ludGhlc2l6ZVJlcXVlc3RbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JhdGNoUmVxdWVzdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEJhdGNoU3ludGhlc2l6ZVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQmF0Y2hTeW50aGVzaXplUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhdGNoUmVxdWVzdDogKHRoaXMuYmF0Y2hSZXF1ZXN0IHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQmF0Y2hTeW50aGVzaXplUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhdGNoUmVxdWVzdDogKHRoaXMuYmF0Y2hSZXF1ZXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBCYXRjaFN5bnRoZXNpemVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBiYXRjaFJlcXVlc3Q/OiBTeW50aGVzaXplUmVxdWVzdC5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEJhdGNoU3ludGhlc2l6ZVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGJhdGNoUmVxdWVzdD86IFN5bnRoZXNpemVSZXF1ZXN0LkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5CYXRjaFN5bnRoZXNpemVSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgQmF0Y2hTeW50aGVzaXplUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQmF0Y2hTeW50aGVzaXplUmVzcG9uc2UoKTtcbiAgICBCYXRjaFN5bnRoZXNpemVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmJhdGNoUmVzcG9uc2UgPSBfaW5zdGFuY2UuYmF0Y2hSZXNwb25zZSB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgU3ludGhlc2l6ZVJlc3BvbnNlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBTeW50aGVzaXplUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmJhdGNoUmVzcG9uc2UgPSBfaW5zdGFuY2UuYmF0Y2hSZXNwb25zZSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmF0Y2hTeW50aGVzaXplUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBCYXRjaFN5bnRoZXNpemVSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5iYXRjaFJlc3BvbnNlICYmIF9pbnN0YW5jZS5iYXRjaFJlc3BvbnNlLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmJhdGNoUmVzcG9uc2UgYXMgYW55LFxuICAgICAgICBTeW50aGVzaXplUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYmF0Y2hSZXNwb25zZT86IFN5bnRoZXNpemVSZXNwb25zZVtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQmF0Y2hTeW50aGVzaXplUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QmF0Y2hTeW50aGVzaXplUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYmF0Y2hSZXNwb25zZSA9IChfdmFsdWUuYmF0Y2hSZXNwb25zZSB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgU3ludGhlc2l6ZVJlc3BvbnNlKG0pXG4gICAgKTtcbiAgICBCYXRjaFN5bnRoZXNpemVSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGJhdGNoUmVzcG9uc2UoKTogU3ludGhlc2l6ZVJlc3BvbnNlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFJlc3BvbnNlO1xuICB9XG4gIHNldCBiYXRjaFJlc3BvbnNlKHZhbHVlOiBTeW50aGVzaXplUmVzcG9uc2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JhdGNoUmVzcG9uc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBCYXRjaFN5bnRoZXNpemVSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBCYXRjaFN5bnRoZXNpemVSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhdGNoUmVzcG9uc2U6ICh0aGlzLmJhdGNoUmVzcG9uc2UgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBCYXRjaFN5bnRoZXNpemVSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhdGNoUmVzcG9uc2U6ICh0aGlzLmJhdGNoUmVzcG9uc2UgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBCYXRjaFN5bnRoZXNpemVSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYmF0Y2hSZXNwb25zZT86IFN5bnRoZXNpemVSZXNwb25zZS5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEJhdGNoU3ludGhlc2l6ZVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBiYXRjaFJlc3BvbnNlPzogU3ludGhlc2l6ZVJlc3BvbnNlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5SZXF1ZXN0Q29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5SZXF1ZXN0Q29uZmlnJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUmVxdWVzdENvbmZpZygpO1xuICAgIFJlcXVlc3RDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBSZXF1ZXN0Q29uZmlnKSB7XG4gICAgX2luc3RhbmNlLnQyc1BpcGVsaW5lSWQgPSBfaW5zdGFuY2UudDJzUGlwZWxpbmVJZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFJlcXVlc3RDb25maWcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnQyc1BpcGVsaW5lSWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5sZW5ndGhTY2FsZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uubm9pc2VTY2FsZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2FtcGxlUmF0ZSA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UucGNtID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmF1ZGlvRm9ybWF0ID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZUNhY2hlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmVxdWVzdENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFJlcXVlc3RDb25maWcsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudDJzUGlwZWxpbmVJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudDJzUGlwZWxpbmVJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGVuZ3RoU2NhbGUgfHwgX2luc3RhbmNlLmxlbmd0aFNjYWxlID09PSAwKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLmxlbmd0aFNjYWxlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub2lzZVNjYWxlIHx8IF9pbnN0YW5jZS5ub2lzZVNjYWxlID09PSAwKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLm5vaXNlU2NhbGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNhbXBsZVJhdGUgfHwgX2luc3RhbmNlLnNhbXBsZVJhdGUgPT09IDApIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig0LCBfaW5zdGFuY2Uuc2FtcGxlUmF0ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGNtIHx8IF9pbnN0YW5jZS5wY20gPT09IDApIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDUsIF9pbnN0YW5jZS5wY20pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmF1ZGlvRm9ybWF0IHx8IF9pbnN0YW5jZS5hdWRpb0Zvcm1hdCA9PT0gMCkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNiwgX2luc3RhbmNlLmF1ZGlvRm9ybWF0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VDYWNoZSB8fCBfaW5zdGFuY2UudXNlQ2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg3LCBfaW5zdGFuY2UudXNlQ2FjaGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Qyc1BpcGVsaW5lSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xlbmd0aFNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9ub2lzZVNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9zYW1wbGVSYXRlPzogbnVtYmVyO1xuICBwcml2YXRlIF9wY20/OiBQY207XG4gIHByaXZhdGUgX2F1ZGlvRm9ybWF0PzogQXVkaW9Gb3JtYXQ7XG4gIHByaXZhdGUgX3VzZUNhY2hlPzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9sZW5ndGhTY2FsZTogUmVxdWVzdENvbmZpZy5MZW5ndGhTY2FsZUNhc2UgPVxuICAgIFJlcXVlc3RDb25maWcuTGVuZ3RoU2NhbGVDYXNlLm5vbmU7XG4gIHByaXZhdGUgX25vaXNlU2NhbGU6IFJlcXVlc3RDb25maWcuTm9pc2VTY2FsZUNhc2UgPVxuICAgIFJlcXVlc3RDb25maWcuTm9pc2VTY2FsZUNhc2Uubm9uZTtcbiAgcHJpdmF0ZSBfc2FtcGxlUmF0ZTogUmVxdWVzdENvbmZpZy5TYW1wbGVSYXRlQ2FzZSA9XG4gICAgUmVxdWVzdENvbmZpZy5TYW1wbGVSYXRlQ2FzZS5ub25lO1xuICBwcml2YXRlIF9wY206IFJlcXVlc3RDb25maWcuUGNtQ2FzZSA9IFJlcXVlc3RDb25maWcuUGNtQ2FzZS5ub25lO1xuICBwcml2YXRlIF9hdWRpb0Zvcm1hdDogUmVxdWVzdENvbmZpZy5BdWRpb0Zvcm1hdENhc2UgPVxuICAgIFJlcXVlc3RDb25maWcuQXVkaW9Gb3JtYXRDYXNlLm5vbmU7XG4gIHByaXZhdGUgX3VzZUNhY2hlOiBSZXF1ZXN0Q29uZmlnLlVzZUNhY2hlQ2FzZSA9XG4gICAgUmVxdWVzdENvbmZpZy5Vc2VDYWNoZUNhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFJlcXVlc3RDb25maWcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UmVxdWVzdENvbmZpZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50MnNQaXBlbGluZUlkID0gX3ZhbHVlLnQyc1BpcGVsaW5lSWQ7XG4gICAgdGhpcy5sZW5ndGhTY2FsZSA9IF92YWx1ZS5sZW5ndGhTY2FsZTtcbiAgICB0aGlzLm5vaXNlU2NhbGUgPSBfdmFsdWUubm9pc2VTY2FsZTtcbiAgICB0aGlzLnNhbXBsZVJhdGUgPSBfdmFsdWUuc2FtcGxlUmF0ZTtcbiAgICB0aGlzLnBjbSA9IF92YWx1ZS5wY207XG4gICAgdGhpcy5hdWRpb0Zvcm1hdCA9IF92YWx1ZS5hdWRpb0Zvcm1hdDtcbiAgICB0aGlzLnVzZUNhY2hlID0gX3ZhbHVlLnVzZUNhY2hlO1xuICAgIFJlcXVlc3RDb25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0MnNQaXBlbGluZUlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Qyc1BpcGVsaW5lSWQ7XG4gIH1cbiAgc2V0IHQyc1BpcGVsaW5lSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Qyc1BpcGVsaW5lSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGVuZ3RoU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoU2NhbGU7XG4gIH1cbiAgc2V0IGxlbmd0aFNjYWxlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbGVuZ3RoU2NhbGUgPSBSZXF1ZXN0Q29uZmlnLkxlbmd0aFNjYWxlQ2FzZS5sZW5ndGhTY2FsZTtcbiAgICB9XG4gICAgdGhpcy5fbGVuZ3RoU2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9pc2VTY2FsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub2lzZVNjYWxlO1xuICB9XG4gIHNldCBub2lzZVNjYWxlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbm9pc2VTY2FsZSA9IFJlcXVlc3RDb25maWcuTm9pc2VTY2FsZUNhc2Uubm9pc2VTY2FsZTtcbiAgICB9XG4gICAgdGhpcy5fbm9pc2VTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzYW1wbGVSYXRlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsZVJhdGU7XG4gIH1cbiAgc2V0IHNhbXBsZVJhdGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zYW1wbGVSYXRlID0gUmVxdWVzdENvbmZpZy5TYW1wbGVSYXRlQ2FzZS5zYW1wbGVSYXRlO1xuICAgIH1cbiAgICB0aGlzLl9zYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBjbSgpOiBQY20gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wY207XG4gIH1cbiAgc2V0IHBjbSh2YWx1ZTogUGNtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BjbSA9IFJlcXVlc3RDb25maWcuUGNtQ2FzZS5wY207XG4gICAgfVxuICAgIHRoaXMuX3BjbSA9IHZhbHVlO1xuICB9XG4gIGdldCBhdWRpb0Zvcm1hdCgpOiBBdWRpb0Zvcm1hdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvRm9ybWF0O1xuICB9XG4gIHNldCBhdWRpb0Zvcm1hdCh2YWx1ZTogQXVkaW9Gb3JtYXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fYXVkaW9Gb3JtYXQgPSBSZXF1ZXN0Q29uZmlnLkF1ZGlvRm9ybWF0Q2FzZS5hdWRpb0Zvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5fYXVkaW9Gb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlQ2FjaGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUNhY2hlO1xuICB9XG4gIHNldCB1c2VDYWNoZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl91c2VDYWNoZSA9IFJlcXVlc3RDb25maWcuVXNlQ2FjaGVDYXNlLnVzZUNhY2hlO1xuICAgIH1cbiAgICB0aGlzLl91c2VDYWNoZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsZW5ndGhTY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoU2NhbGU7XG4gIH1cbiAgZ2V0IG5vaXNlU2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vaXNlU2NhbGU7XG4gIH1cbiAgZ2V0IHNhbXBsZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsZVJhdGU7XG4gIH1cbiAgZ2V0IHBjbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGNtO1xuICB9XG4gIGdldCBhdWRpb0Zvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9Gb3JtYXQ7XG4gIH1cbiAgZ2V0IHVzZUNhY2hlKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VDYWNoZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBSZXF1ZXN0Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFJlcXVlc3RDb25maWcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0MnNQaXBlbGluZUlkOiB0aGlzLnQyc1BpcGVsaW5lSWQsXG4gICAgICBsZW5ndGhTY2FsZTogdGhpcy5sZW5ndGhTY2FsZSxcbiAgICAgIG5vaXNlU2NhbGU6IHRoaXMubm9pc2VTY2FsZSxcbiAgICAgIHNhbXBsZVJhdGU6IHRoaXMuc2FtcGxlUmF0ZSxcbiAgICAgIHBjbTogdGhpcy5wY20sXG4gICAgICBhdWRpb0Zvcm1hdDogdGhpcy5hdWRpb0Zvcm1hdCxcbiAgICAgIHVzZUNhY2hlOiB0aGlzLnVzZUNhY2hlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUmVxdWVzdENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHQyc1BpcGVsaW5lSWQ6IHRoaXMudDJzUGlwZWxpbmVJZCxcbiAgICAgIGxlbmd0aFNjYWxlOlxuICAgICAgICB0aGlzLmxlbmd0aFNjYWxlID09PSBudWxsIHx8IHRoaXMubGVuZ3RoU2NhbGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogdGhpcy5sZW5ndGhTY2FsZSxcbiAgICAgIG5vaXNlU2NhbGU6XG4gICAgICAgIHRoaXMubm9pc2VTY2FsZSA9PT0gbnVsbCB8fCB0aGlzLm5vaXNlU2NhbGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogdGhpcy5ub2lzZVNjYWxlLFxuICAgICAgc2FtcGxlUmF0ZTpcbiAgICAgICAgdGhpcy5zYW1wbGVSYXRlID09PSBudWxsIHx8IHRoaXMuc2FtcGxlUmF0ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0aGlzLnNhbXBsZVJhdGUsXG4gICAgICBwY206XG4gICAgICAgIHRoaXMucGNtID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IFBjbVt0aGlzLnBjbSA9PT0gbnVsbCB8fCB0aGlzLnBjbSA9PT0gdW5kZWZpbmVkID8gMCA6IHRoaXMucGNtXSxcbiAgICAgIGF1ZGlvRm9ybWF0OlxuICAgICAgICB0aGlzLmF1ZGlvRm9ybWF0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IEF1ZGlvRm9ybWF0W1xuICAgICAgICAgICAgICB0aGlzLmF1ZGlvRm9ybWF0ID09PSBudWxsIHx8IHRoaXMuYXVkaW9Gb3JtYXQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgIDogdGhpcy5hdWRpb0Zvcm1hdFxuICAgICAgICAgICAgXSxcbiAgICAgIHVzZUNhY2hlOiB0aGlzLnVzZUNhY2hlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBSZXF1ZXN0Q29uZmlnIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBSZXF1ZXN0Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0MnNQaXBlbGluZUlkPzogc3RyaW5nO1xuICAgIGxlbmd0aFNjYWxlPzogbnVtYmVyO1xuICAgIG5vaXNlU2NhbGU/OiBudW1iZXI7XG4gICAgc2FtcGxlUmF0ZT86IG51bWJlcjtcbiAgICBwY20/OiBQY207XG4gICAgYXVkaW9Gb3JtYXQ/OiBBdWRpb0Zvcm1hdDtcbiAgICB1c2VDYWNoZT86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUmVxdWVzdENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdDJzUGlwZWxpbmVJZD86IHN0cmluZztcbiAgICBsZW5ndGhTY2FsZT86IG51bWJlciB8IG51bGw7XG4gICAgbm9pc2VTY2FsZT86IG51bWJlciB8IG51bGw7XG4gICAgc2FtcGxlUmF0ZT86IG51bWJlciB8IG51bGw7XG4gICAgcGNtPzogc3RyaW5nIHwgbnVsbDtcbiAgICBhdWRpb0Zvcm1hdD86IHN0cmluZyB8IG51bGw7XG4gICAgdXNlQ2FjaGU/OiBib29sZWFuO1xuICB9XG4gIGV4cG9ydCBlbnVtIExlbmd0aFNjYWxlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgbGVuZ3RoU2NhbGUgPSAxXG4gIH1cbiAgZXhwb3J0IGVudW0gTm9pc2VTY2FsZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIG5vaXNlU2NhbGUgPSAxXG4gIH1cbiAgZXhwb3J0IGVudW0gU2FtcGxlUmF0ZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHNhbXBsZVJhdGUgPSAxXG4gIH1cbiAgZXhwb3J0IGVudW0gUGNtQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgcGNtID0gMVxuICB9XG4gIGV4cG9ydCBlbnVtIEF1ZGlvRm9ybWF0Q2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgYXVkaW9Gb3JtYXQgPSAxXG4gIH1cbiAgZXhwb3J0IGVudW0gVXNlQ2FjaGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICB1c2VDYWNoZSA9IDFcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuU3ludGhlc2l6ZVJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBTeW50aGVzaXplUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlN5bnRoZXNpemVSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN5bnRoZXNpemVSZXNwb25zZSgpO1xuICAgIFN5bnRoZXNpemVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFN5bnRoZXNpemVSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5hdWRpb1V1aWQgPSBfaW5zdGFuY2UuYXVkaW9VdWlkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5hdWRpbyA9IF9pbnN0YW5jZS5hdWRpbyB8fCBuZXcgVWludDhBcnJheSgpO1xuICAgIF9pbnN0YW5jZS5nZW5lcmF0aW9uVGltZSA9IF9pbnN0YW5jZS5nZW5lcmF0aW9uVGltZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5hdWRpb0xlbmd0aCA9IF9pbnN0YW5jZS5hdWRpb0xlbmd0aCB8fCAwO1xuICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNvbmZpZyA9IF9pbnN0YW5jZS5jb25maWcgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3ludGhlc2l6ZVJlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5hdWRpb1V1aWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5hdWRpbyA9IF9yZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZ2VuZXJhdGlvblRpbWUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmF1ZGlvTGVuZ3RoID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnID0gbmV3IFJlcXVlc3RDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyxcbiAgICAgICAgICAgIFJlcXVlc3RDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN5bnRoZXNpemVSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFN5bnRoZXNpemVSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5hdWRpb1V1aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmF1ZGlvVXVpZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYXVkaW8gJiYgX2luc3RhbmNlLmF1ZGlvLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUJ5dGVzKDIsIF9pbnN0YW5jZS5hdWRpbyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ2VuZXJhdGlvblRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgzLCBfaW5zdGFuY2UuZ2VuZXJhdGlvblRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmF1ZGlvTGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNCwgX2luc3RhbmNlLmF1ZGlvTGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UuY29uZmlnIGFzIGFueSxcbiAgICAgICAgUmVxdWVzdENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdWRpb1V1aWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1ZGlvPzogVWludDhBcnJheTtcbiAgcHJpdmF0ZSBfZ2VuZXJhdGlvblRpbWU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2F1ZGlvTGVuZ3RoPzogbnVtYmVyO1xuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9jb25maWc/OiBSZXF1ZXN0Q29uZmlnO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU3ludGhlc2l6ZVJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN5bnRoZXNpemVSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5hdWRpb1V1aWQgPSBfdmFsdWUuYXVkaW9VdWlkO1xuICAgIHRoaXMuYXVkaW8gPSBfdmFsdWUuYXVkaW87XG4gICAgdGhpcy5nZW5lcmF0aW9uVGltZSA9IF92YWx1ZS5nZW5lcmF0aW9uVGltZTtcbiAgICB0aGlzLmF1ZGlvTGVuZ3RoID0gX3ZhbHVlLmF1ZGlvTGVuZ3RoO1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0O1xuICAgIHRoaXMuY29uZmlnID0gX3ZhbHVlLmNvbmZpZyA/IG5ldyBSZXF1ZXN0Q29uZmlnKF92YWx1ZS5jb25maWcpIDogdW5kZWZpbmVkO1xuICAgIFN5bnRoZXNpemVSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGF1ZGlvVXVpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb1V1aWQ7XG4gIH1cbiAgc2V0IGF1ZGlvVXVpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXVkaW9VdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvKCk6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdWRpbztcbiAgfVxuICBzZXQgYXVkaW8odmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hdWRpbyA9IHZhbHVlO1xuICB9XG4gIGdldCBnZW5lcmF0aW9uVGltZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0aW9uVGltZTtcbiAgfVxuICBzZXQgZ2VuZXJhdGlvblRpbWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2dlbmVyYXRpb25UaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvTGVuZ3RoKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvTGVuZ3RoO1xuICB9XG4gIHNldCBhdWRpb0xlbmd0aCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXVkaW9MZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBSZXF1ZXN0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsdWU6IFJlcXVlc3RDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTeW50aGVzaXplUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU3ludGhlc2l6ZVJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9VdWlkOiB0aGlzLmF1ZGlvVXVpZCxcbiAgICAgIGF1ZGlvOiB0aGlzLmF1ZGlvID8gdGhpcy5hdWRpby5zdWJhcnJheSgwKSA6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBnZW5lcmF0aW9uVGltZTogdGhpcy5nZW5lcmF0aW9uVGltZSxcbiAgICAgIGF1ZGlvTGVuZ3RoOiB0aGlzLmF1ZGlvTGVuZ3RoLFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTeW50aGVzaXplUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBhdWRpb1V1aWQ6IHRoaXMuYXVkaW9VdWlkLFxuICAgICAgYXVkaW86IHRoaXMuYXVkaW8gPyB1aW50OEFycmF5VG9CYXNlNjQodGhpcy5hdWRpbykgOiAnJyxcbiAgICAgIGdlbmVyYXRpb25UaW1lOiB0aGlzLmdlbmVyYXRpb25UaW1lLFxuICAgICAgYXVkaW9MZW5ndGg6IHRoaXMuYXVkaW9MZW5ndGgsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTeW50aGVzaXplUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN5bnRoZXNpemVSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYXVkaW9VdWlkPzogc3RyaW5nO1xuICAgIGF1ZGlvPzogVWludDhBcnJheTtcbiAgICBnZW5lcmF0aW9uVGltZT86IG51bWJlcjtcbiAgICBhdWRpb0xlbmd0aD86IG51bWJlcjtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIGNvbmZpZz86IFJlcXVlc3RDb25maWcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3ludGhlc2l6ZVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhdWRpb1V1aWQ/OiBzdHJpbmc7XG4gICAgYXVkaW8/OiBzdHJpbmc7XG4gICAgZ2VuZXJhdGlvblRpbWU/OiBudW1iZXI7XG4gICAgYXVkaW9MZW5ndGg/OiBudW1iZXI7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICBjb25maWc/OiBSZXF1ZXN0Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuVDJTR2V0U2VydmljZUluZm9SZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFQyU0dldFNlcnZpY2VJbmZvUmVzcG9uc2UoKTtcbiAgICBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS52ZXJzaW9uID0gX2luc3RhbmNlLnZlcnNpb24gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS52ZXJzaW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS52ZXJzaW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS52ZXJzaW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF92ZXJzaW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSBfdmFsdWUudmVyc2lvbjtcbiAgICBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdmVyc2lvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG4gIHNldCB2ZXJzaW9uKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVDJTR2V0U2VydmljZUluZm9SZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVDJTR2V0U2VydmljZUluZm9SZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdmVyc2lvbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUMlNHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB2ZXJzaW9uPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5MaXN0VDJzUGlwZWxpbmVzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RUMnNQaXBlbGluZXNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QoKTtcbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW107XG4gICAgX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW107XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgKF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5sYW5ndWFnZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyAmJiBfaW5zdGFuY2Uuc3BlYWtlclNleGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIF9pbnN0YW5jZS5waXBlbGluZU93bmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJOYW1lcyAmJiBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDQsIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRvbWFpbnMgJiYgX2luc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNSwgX2luc3RhbmNlLmRvbWFpbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcGlwZWxpbmVPd25lcnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfc3BlYWtlck5hbWVzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2RvbWFpbnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9IChfdmFsdWUubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuc3BlYWtlclNleGVzID0gKF92YWx1ZS5zcGVha2VyU2V4ZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5waXBlbGluZU93bmVycyA9IChfdmFsdWUucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5zcGVha2VyTmFtZXMgPSAoX3ZhbHVlLnNwZWFrZXJOYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmRvbWFpbnMgPSAoX3ZhbHVlLmRvbWFpbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlYWtlclNleGVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlclNleGVzO1xuICB9XG4gIHNldCBzcGVha2VyU2V4ZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlYWtlclNleGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lT3duZXJzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVPd25lcnM7XG4gIH1cbiAgc2V0IHBpcGVsaW5lT3duZXJzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BpcGVsaW5lT3duZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWFrZXJOYW1lcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWFrZXJOYW1lcztcbiAgfVxuICBzZXQgc3BlYWtlck5hbWVzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWFrZXJOYW1lcyA9IHZhbHVlO1xuICB9XG4gIGdldCBkb21haW5zKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWlucztcbiAgfVxuICBzZXQgZG9tYWlucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kb21haW5zID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJTZXhlczogKHRoaXMuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc3BlYWtlck5hbWVzOiAodGhpcy5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJTZXhlczogKHRoaXMuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc3BlYWtlck5hbWVzOiAodGhpcy5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlcz86IHN0cmluZ1tdO1xuICAgIHNwZWFrZXJTZXhlcz86IHN0cmluZ1tdO1xuICAgIHBpcGVsaW5lT3duZXJzPzogc3RyaW5nW107XG4gICAgc3BlYWtlck5hbWVzPzogc3RyaW5nW107XG4gICAgZG9tYWlucz86IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZXM/OiBzdHJpbmdbXTtcbiAgICBzcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICAgIHNwZWFrZXJOYW1lcz86IHN0cmluZ1tdO1xuICAgIGRvbWFpbnM/OiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RUMnNQaXBlbGluZXNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSgpO1xuICAgIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5waXBlbGluZXMgPSBfaW5zdGFuY2UucGlwZWxpbmVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgVGV4dDJTcGVlY2hDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFRleHQyU3BlZWNoQ29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5waXBlbGluZXMgPSBfaW5zdGFuY2UucGlwZWxpbmVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmVzICYmIF9pbnN0YW5jZS5waXBlbGluZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UucGlwZWxpbmVzIGFzIGFueSxcbiAgICAgICAgVGV4dDJTcGVlY2hDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGlwZWxpbmVzPzogVGV4dDJTcGVlY2hDb25maWdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGlwZWxpbmVzID0gKF92YWx1ZS5waXBlbGluZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFRleHQyU3BlZWNoQ29uZmlnKG0pXG4gICAgKTtcbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwaXBlbGluZXMoKTogVGV4dDJTcGVlY2hDb25maWdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lcztcbiAgfVxuICBzZXQgcGlwZWxpbmVzKHZhbHVlOiBUZXh0MlNwZWVjaENvbmZpZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RUMnNQaXBlbGluZXNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBpcGVsaW5lczogKHRoaXMucGlwZWxpbmVzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVzOiAodGhpcy5waXBlbGluZXMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGlwZWxpbmVzPzogVGV4dDJTcGVlY2hDb25maWcuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBpcGVsaW5lcz86IFRleHQyU3BlZWNoQ29uZmlnLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5MaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QoKTtcbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW107XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyAmJiBfaW5zdGFuY2Uuc3BlYWtlclNleGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIF9pbnN0YW5jZS5waXBlbGluZU93bmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJOYW1lcyAmJiBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRvbWFpbnMgJiYgX2luc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgX2luc3RhbmNlLmRvbWFpbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NwZWFrZXJTZXhlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zcGVha2VyTmFtZXM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfZG9tYWlucz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3BlYWtlclNleGVzID0gKF92YWx1ZS5zcGVha2VyU2V4ZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5waXBlbGluZU93bmVycyA9IChfdmFsdWUucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5zcGVha2VyTmFtZXMgPSAoX3ZhbHVlLnNwZWFrZXJOYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmRvbWFpbnMgPSAoX3ZhbHVlLmRvbWFpbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzcGVha2VyU2V4ZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVha2VyU2V4ZXM7XG4gIH1cbiAgc2V0IHNwZWFrZXJTZXhlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVha2VyU2V4ZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmVPd25lcnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZU93bmVycztcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlYWtlck5hbWVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlck5hbWVzO1xuICB9XG4gIHNldCBzcGVha2VyTmFtZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlYWtlck5hbWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRvbWFpbnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5zO1xuICB9XG4gIHNldCBkb21haW5zKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RvbWFpbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwZWFrZXJTZXhlczogKHRoaXMuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc3BlYWtlck5hbWVzOiAodGhpcy5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVha2VyU2V4ZXM6ICh0aGlzLnNwZWFrZXJTZXhlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJOYW1lczogKHRoaXMuc3BlYWtlck5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgZG9tYWluczogKHRoaXMuZG9tYWlucyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFQyc0xhbmd1YWdlc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNMYW5ndWFnZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICAgIHNwZWFrZXJOYW1lcz86IHN0cmluZ1tdO1xuICAgIGRvbWFpbnM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0VDJzTGFuZ3VhZ2VzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3BlYWtlclNleGVzPzogc3RyaW5nW107XG4gICAgcGlwZWxpbmVPd25lcnM/OiBzdHJpbmdbXTtcbiAgICBzcGVha2VyTmFtZXM/OiBzdHJpbmdbXTtcbiAgICBkb21haW5zPzogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkxpc3RUMnNMYW5ndWFnZXNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgTGlzdFQyc0xhbmd1YWdlc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5MaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UoKTtcbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VzID0gX2luc3RhbmNlLmxhbmd1YWdlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VzICYmIF9pbnN0YW5jZS5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFQyc0xhbmd1YWdlc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9IChfdmFsdWUubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlczogKHRoaXMubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0VDJzTGFuZ3VhZ2VzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNMYW5ndWFnZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VzPzogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFQyc0xhbmd1YWdlc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZXM/OiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTGlzdFQyc0RvbWFpbnNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0VDJzRG9tYWluc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkxpc3RUMnNEb21haW5zUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RUMnNEb21haW5zUmVxdWVzdCgpO1xuICAgIExpc3RUMnNEb21haW5zUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RUMnNEb21haW5zUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgPSBfaW5zdGFuY2Uuc3BlYWtlclNleGVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5waXBlbGluZU93bmVycyA9IF9pbnN0YW5jZS5waXBlbGluZU93bmVycyB8fCBbXTtcbiAgICBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzID0gX2luc3RhbmNlLnNwZWFrZXJOYW1lcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VzID0gX2luc3RhbmNlLmxhbmd1YWdlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNEb21haW5zUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyA9IF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zcGVha2VyTmFtZXMgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sYW5ndWFnZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFQyc0RvbWFpbnNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFQyc0RvbWFpbnNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJTZXhlcyAmJiBfaW5zdGFuY2Uuc3BlYWtlclNleGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5zcGVha2VyU2V4ZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIF9pbnN0YW5jZS5waXBlbGluZU93bmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJOYW1lcyAmJiBfaW5zdGFuY2Uuc3BlYWtlck5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5zcGVha2VyTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDQsIF9pbnN0YW5jZS5sYW5ndWFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NwZWFrZXJTZXhlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zcGVha2VyTmFtZXM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0VDJzRG9tYWluc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFQyc0RvbWFpbnNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNwZWFrZXJTZXhlcyA9IChfdmFsdWUuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucGlwZWxpbmVPd25lcnMgPSAoX3ZhbHVlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuc3BlYWtlck5hbWVzID0gKF92YWx1ZS5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5sYW5ndWFnZXMgPSAoX3ZhbHVlLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0VDJzRG9tYWluc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzcGVha2VyU2V4ZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVha2VyU2V4ZXM7XG4gIH1cbiAgc2V0IHNwZWFrZXJTZXhlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVha2VyU2V4ZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmVPd25lcnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZU93bmVycztcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlYWtlck5hbWVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlck5hbWVzO1xuICB9XG4gIHNldCBzcGVha2VyTmFtZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlYWtlck5hbWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RUMnNEb21haW5zUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0VDJzRG9tYWluc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVha2VyU2V4ZXM6ICh0aGlzLnNwZWFrZXJTZXhlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJOYW1lczogKHRoaXMuc3BlYWtlck5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbGFuZ3VhZ2VzOiAodGhpcy5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0VDJzRG9tYWluc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVha2VyU2V4ZXM6ICh0aGlzLnNwZWFrZXJTZXhlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJOYW1lczogKHRoaXMuc3BlYWtlck5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbGFuZ3VhZ2VzOiAodGhpcy5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RUMnNEb21haW5zUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFQyc0RvbWFpbnNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVycz86IHN0cmluZ1tdO1xuICAgIHNwZWFrZXJOYW1lcz86IHN0cmluZ1tdO1xuICAgIGxhbmd1YWdlcz86IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNEb21haW5zUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3BlYWtlclNleGVzPzogc3RyaW5nW107XG4gICAgcGlwZWxpbmVPd25lcnM/OiBzdHJpbmdbXTtcbiAgICBzcGVha2VyTmFtZXM/OiBzdHJpbmdbXTtcbiAgICBsYW5ndWFnZXM/OiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTGlzdFQyc0RvbWFpbnNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgTGlzdFQyc0RvbWFpbnNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuTGlzdFQyc0RvbWFpbnNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RUMnNEb21haW5zUmVzcG9uc2UoKTtcbiAgICBMaXN0VDJzRG9tYWluc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdFQyc0RvbWFpbnNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0VDJzRG9tYWluc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuZG9tYWlucyA9IF9pbnN0YW5jZS5kb21haW5zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFQyc0RvbWFpbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RUMnNEb21haW5zUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZG9tYWlucyAmJiBfaW5zdGFuY2UuZG9tYWlucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZG9tYWlucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZG9tYWlucz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFQyc0RvbWFpbnNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0VDJzRG9tYWluc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmRvbWFpbnMgPSAoX3ZhbHVlLmRvbWFpbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFQyc0RvbWFpbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGRvbWFpbnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5zO1xuICB9XG4gIHNldCBkb21haW5zKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RvbWFpbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0VDJzRG9tYWluc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RUMnNEb21haW5zUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFQyc0RvbWFpbnNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbnM6ICh0aGlzLmRvbWFpbnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RUMnNEb21haW5zUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RUMnNEb21haW5zUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGRvbWFpbnM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0VDJzRG9tYWluc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBkb21haW5zPzogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlQyc1BpcGVsaW5lSWRcbiAqL1xuZXhwb3J0IGNsYXNzIFQyc1BpcGVsaW5lSWQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlQyc1BpcGVsaW5lSWQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUMnNQaXBlbGluZUlkKCk7XG4gICAgVDJzUGlwZWxpbmVJZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFQyc1BpcGVsaW5lSWQpIHtcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUMnNQaXBlbGluZUlkLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVDJzUGlwZWxpbmVJZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFQyc1BpcGVsaW5lSWQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFQyc1BpcGVsaW5lSWQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VDJzUGlwZWxpbmVJZC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICBUMnNQaXBlbGluZUlkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFQyc1BpcGVsaW5lSWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVDJzUGlwZWxpbmVJZC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVDJzUGlwZWxpbmVJZC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUMnNQaXBlbGluZUlkIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUMnNQaXBlbGluZUlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUMnNQaXBlbGluZUlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpZD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuVGV4dDJTcGVlY2hDb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHQyU3BlZWNoQ29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5UZXh0MlNwZWVjaENvbmZpZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRleHQyU3BlZWNoQ29uZmlnKCk7XG4gICAgVGV4dDJTcGVlY2hDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUZXh0MlNwZWVjaENvbmZpZykge1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBfaW5zdGFuY2UuZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfaW5zdGFuY2UuYWN0aXZlIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5pbmZlcmVuY2UgPSBfaW5zdGFuY2UuaW5mZXJlbmNlIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucG9zdHByb2Nlc3NpbmcgPSBfaW5zdGFuY2UucG9zdHByb2Nlc3NpbmcgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVGV4dDJTcGVlY2hDb25maWcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBuZXcgVDJTRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgVDJTRGVzY3JpcHRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuaW5mZXJlbmNlID0gbmV3IFQyU0luZmVyZW5jZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuaW5mZXJlbmNlLFxuICAgICAgICAgICAgVDJTSW5mZXJlbmNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IG5ldyBUMlNOb3JtYWxpemF0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uLFxuICAgICAgICAgICAgVDJTTm9ybWFsaXphdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnBvc3Rwcm9jZXNzaW5nID0gbmV3IFBvc3Rwcm9jZXNzaW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wb3N0cHJvY2Vzc2luZyxcbiAgICAgICAgICAgIFBvc3Rwcm9jZXNzaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUZXh0MlNwZWVjaENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFRleHQyU3BlZWNoQ29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVzY3JpcHRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gYXMgYW55LFxuICAgICAgICBUMlNEZXNjcmlwdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY3RpdmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMsIF9pbnN0YW5jZS5hY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmluZmVyZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5pbmZlcmVuY2UgYXMgYW55LFxuICAgICAgICBUMlNJbmZlcmVuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm9ybWFsaXphdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uIGFzIGFueSxcbiAgICAgICAgVDJTTm9ybWFsaXphdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb3N0cHJvY2Vzc2luZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5wb3N0cHJvY2Vzc2luZyBhcyBhbnksXG4gICAgICAgIFBvc3Rwcm9jZXNzaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IFQyU0Rlc2NyaXB0aW9uO1xuICBwcml2YXRlIF9hY3RpdmU/OiBib29sZWFuO1xuICBwcml2YXRlIF9pbmZlcmVuY2U/OiBUMlNJbmZlcmVuY2U7XG4gIHByaXZhdGUgX25vcm1hbGl6YXRpb24/OiBUMlNOb3JtYWxpemF0aW9uO1xuICBwcml2YXRlIF9wb3N0cHJvY2Vzc2luZz86IFBvc3Rwcm9jZXNzaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVGV4dDJTcGVlY2hDb25maWcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGV4dDJTcGVlY2hDb25maWcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IF92YWx1ZS5kZXNjcmlwdGlvblxuICAgICAgPyBuZXcgVDJTRGVzY3JpcHRpb24oX3ZhbHVlLmRlc2NyaXB0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmUgPSBfdmFsdWUuYWN0aXZlO1xuICAgIHRoaXMuaW5mZXJlbmNlID0gX3ZhbHVlLmluZmVyZW5jZVxuICAgICAgPyBuZXcgVDJTSW5mZXJlbmNlKF92YWx1ZS5pbmZlcmVuY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5vcm1hbGl6YXRpb24gPSBfdmFsdWUubm9ybWFsaXphdGlvblxuICAgICAgPyBuZXcgVDJTTm9ybWFsaXphdGlvbihfdmFsdWUubm9ybWFsaXphdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9zdHByb2Nlc3NpbmcgPSBfdmFsdWUucG9zdHByb2Nlc3NpbmdcbiAgICAgID8gbmV3IFBvc3Rwcm9jZXNzaW5nKF92YWx1ZS5wb3N0cHJvY2Vzc2luZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFRleHQyU3BlZWNoQ29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbigpOiBUMlNEZXNjcmlwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogVDJTRGVzY3JpcHRpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGluZmVyZW5jZSgpOiBUMlNJbmZlcmVuY2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbmZlcmVuY2U7XG4gIH1cbiAgc2V0IGluZmVyZW5jZSh2YWx1ZTogVDJTSW5mZXJlbmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW5mZXJlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vcm1hbGl6YXRpb24oKTogVDJTTm9ybWFsaXphdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6YXRpb247XG4gIH1cbiAgc2V0IG5vcm1hbGl6YXRpb24odmFsdWU6IFQyU05vcm1hbGl6YXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub3JtYWxpemF0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3Rwcm9jZXNzaW5nKCk6IFBvc3Rwcm9jZXNzaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdHByb2Nlc3Npbmc7XG4gIH1cbiAgc2V0IHBvc3Rwcm9jZXNzaW5nKHZhbHVlOiBQb3N0cHJvY2Vzc2luZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Bvc3Rwcm9jZXNzaW5nID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVGV4dDJTcGVlY2hDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVGV4dDJTcGVlY2hDb25maWcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uID8gdGhpcy5kZXNjcmlwdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIGluZmVyZW5jZTogdGhpcy5pbmZlcmVuY2UgPyB0aGlzLmluZmVyZW5jZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbm9ybWFsaXphdGlvbjogdGhpcy5ub3JtYWxpemF0aW9uXG4gICAgICAgID8gdGhpcy5ub3JtYWxpemF0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwb3N0cHJvY2Vzc2luZzogdGhpcy5wb3N0cHJvY2Vzc2luZ1xuICAgICAgICA/IHRoaXMucG9zdHByb2Nlc3NpbmcudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRleHQyU3BlZWNoQ29uZmlnLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgICA/IHRoaXMuZGVzY3JpcHRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIGluZmVyZW5jZTogdGhpcy5pbmZlcmVuY2UgPyB0aGlzLmluZmVyZW5jZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBub3JtYWxpemF0aW9uOiB0aGlzLm5vcm1hbGl6YXRpb25cbiAgICAgICAgPyB0aGlzLm5vcm1hbGl6YXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9zdHByb2Nlc3Npbmc6IHRoaXMucG9zdHByb2Nlc3NpbmdcbiAgICAgICAgPyB0aGlzLnBvc3Rwcm9jZXNzaW5nLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVGV4dDJTcGVlY2hDb25maWcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRleHQyU3BlZWNoQ29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpZD86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IFQyU0Rlc2NyaXB0aW9uLkFzT2JqZWN0O1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgaW5mZXJlbmNlPzogVDJTSW5mZXJlbmNlLkFzT2JqZWN0O1xuICAgIG5vcm1hbGl6YXRpb24/OiBUMlNOb3JtYWxpemF0aW9uLkFzT2JqZWN0O1xuICAgIHBvc3Rwcm9jZXNzaW5nPzogUG9zdHByb2Nlc3NpbmcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVGV4dDJTcGVlY2hDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogVDJTRGVzY3JpcHRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgaW5mZXJlbmNlPzogVDJTSW5mZXJlbmNlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBub3JtYWxpemF0aW9uPzogVDJTTm9ybWFsaXphdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcG9zdHByb2Nlc3Npbmc/OiBQb3N0cHJvY2Vzc2luZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlQyU0Rlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUMlNEZXNjcmlwdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuVDJTRGVzY3JpcHRpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUMlNEZXNjcmlwdGlvbigpO1xuICAgIFQyU0Rlc2NyaXB0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVDJTRGVzY3JpcHRpb24pIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfaW5zdGFuY2UubGFuZ3VhZ2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNwZWFrZXJTZXggPSBfaW5zdGFuY2Uuc3BlYWtlclNleCB8fCAnJztcbiAgICBfaW5zdGFuY2UucGlwZWxpbmVPd25lciA9IF9pbnN0YW5jZS5waXBlbGluZU93bmVyIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jb21tZW50cyA9IF9pbnN0YW5jZS5jb21tZW50cyB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3BlYWtlck5hbWUgPSBfaW5zdGFuY2Uuc3BlYWtlck5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRvbWFpbiA9IF9pbnN0YW5jZS5kb21haW4gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUMlNEZXNjcmlwdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVha2VyU2V4ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucGlwZWxpbmVPd25lciA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbW1lbnRzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlYWtlck5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5kb21haW4gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFQyU0Rlc2NyaXB0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVDJTRGVzY3JpcHRpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zcGVha2VyU2V4KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5zcGVha2VyU2V4KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZU93bmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5waXBlbGluZU93bmVyKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb21tZW50cykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuY29tbWVudHMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWFrZXJOYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5zcGVha2VyTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZG9tYWluKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5kb21haW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVha2VyU2V4Pzogc3RyaW5nO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVyPzogc3RyaW5nO1xuICBwcml2YXRlIF9jb21tZW50cz86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlYWtlck5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RvbWFpbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFQyU0Rlc2NyaXB0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFQyU0Rlc2NyaXB0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlID0gX3ZhbHVlLmxhbmd1YWdlO1xuICAgIHRoaXMuc3BlYWtlclNleCA9IF92YWx1ZS5zcGVha2VyU2V4O1xuICAgIHRoaXMucGlwZWxpbmVPd25lciA9IF92YWx1ZS5waXBlbGluZU93bmVyO1xuICAgIHRoaXMuY29tbWVudHMgPSBfdmFsdWUuY29tbWVudHM7XG4gICAgdGhpcy5zcGVha2VyTmFtZSA9IF92YWx1ZS5zcGVha2VyTmFtZTtcbiAgICB0aGlzLmRvbWFpbiA9IF92YWx1ZS5kb21haW47XG4gICAgVDJTRGVzY3JpcHRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWFrZXJTZXgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlclNleDtcbiAgfVxuICBzZXQgc3BlYWtlclNleCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlYWtlclNleCA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZU93bmVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lT3duZXI7XG4gIH1cbiAgc2V0IHBpcGVsaW5lT3duZXIodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BpcGVsaW5lT3duZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29tbWVudHMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbWVudHM7XG4gIH1cbiAgc2V0IGNvbW1lbnRzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb21tZW50cyA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVha2VyTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVha2VyTmFtZTtcbiAgfVxuICBzZXQgc3BlYWtlck5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWFrZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRvbWFpbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kb21haW47XG4gIH1cbiAgc2V0IGRvbWFpbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZG9tYWluID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVDJTRGVzY3JpcHRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVDJTRGVzY3JpcHRpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHNwZWFrZXJTZXg6IHRoaXMuc3BlYWtlclNleCxcbiAgICAgIHBpcGVsaW5lT3duZXI6IHRoaXMucGlwZWxpbmVPd25lcixcbiAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgc3BlYWtlck5hbWU6IHRoaXMuc3BlYWtlck5hbWUsXG4gICAgICBkb21haW46IHRoaXMuZG9tYWluXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVDJTRGVzY3JpcHRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHNwZWFrZXJTZXg6IHRoaXMuc3BlYWtlclNleCxcbiAgICAgIHBpcGVsaW5lT3duZXI6IHRoaXMucGlwZWxpbmVPd25lcixcbiAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgc3BlYWtlck5hbWU6IHRoaXMuc3BlYWtlck5hbWUsXG4gICAgICBkb21haW46IHRoaXMuZG9tYWluXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUMlNEZXNjcmlwdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVDJTRGVzY3JpcHRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIHNwZWFrZXJTZXg/OiBzdHJpbmc7XG4gICAgcGlwZWxpbmVPd25lcj86IHN0cmluZztcbiAgICBjb21tZW50cz86IHN0cmluZztcbiAgICBzcGVha2VyTmFtZT86IHN0cmluZztcbiAgICBkb21haW4/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVDJTRGVzY3JpcHRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIHNwZWFrZXJTZXg/OiBzdHJpbmc7XG4gICAgcGlwZWxpbmVPd25lcj86IHN0cmluZztcbiAgICBjb21tZW50cz86IHN0cmluZztcbiAgICBzcGVha2VyTmFtZT86IHN0cmluZztcbiAgICBkb21haW4/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlQyU0luZmVyZW5jZVxuICovXG5leHBvcnQgY2xhc3MgVDJTSW5mZXJlbmNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5UMlNJbmZlcmVuY2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUMlNJbmZlcmVuY2UoKTtcbiAgICBUMlNJbmZlcmVuY2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUMlNJbmZlcmVuY2UpIHtcbiAgICBfaW5zdGFuY2UudHlwZSA9IF9pbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jb21wb3NpdGVJbmZlcmVuY2UgPSBfaW5zdGFuY2UuY29tcG9zaXRlSW5mZXJlbmNlIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuY2FjaGluZyA9IF9pbnN0YW5jZS5jYWNoaW5nIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFQyU0luZmVyZW5jZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudHlwZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbXBvc2l0ZUluZmVyZW5jZSA9IG5ldyBDb21wb3NpdGVJbmZlcmVuY2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbXBvc2l0ZUluZmVyZW5jZSxcbiAgICAgICAgICAgIENvbXBvc2l0ZUluZmVyZW5jZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmNhY2hpbmcgPSBuZXcgQ2FjaGluZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FjaGluZyxcbiAgICAgICAgICAgIENhY2hpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFQyU0luZmVyZW5jZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFQyU0luZmVyZW5jZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50eXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb21wb3NpdGVJbmZlcmVuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuY29tcG9zaXRlSW5mZXJlbmNlIGFzIGFueSxcbiAgICAgICAgQ29tcG9zaXRlSW5mZXJlbmNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhY2hpbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UuY2FjaGluZyBhcyBhbnksXG4gICAgICAgIENhY2hpbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tcG9zaXRlSW5mZXJlbmNlPzogQ29tcG9zaXRlSW5mZXJlbmNlO1xuICBwcml2YXRlIF9jYWNoaW5nPzogQ2FjaGluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFQyU0luZmVyZW5jZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUMlNJbmZlcmVuY2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHlwZSA9IF92YWx1ZS50eXBlO1xuICAgIHRoaXMuY29tcG9zaXRlSW5mZXJlbmNlID0gX3ZhbHVlLmNvbXBvc2l0ZUluZmVyZW5jZVxuICAgICAgPyBuZXcgQ29tcG9zaXRlSW5mZXJlbmNlKF92YWx1ZS5jb21wb3NpdGVJbmZlcmVuY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhY2hpbmcgPSBfdmFsdWUuY2FjaGluZyA/IG5ldyBDYWNoaW5nKF92YWx1ZS5jYWNoaW5nKSA6IHVuZGVmaW5lZDtcbiAgICBUMlNJbmZlcmVuY2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29tcG9zaXRlSW5mZXJlbmNlKCk6IENvbXBvc2l0ZUluZmVyZW5jZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvc2l0ZUluZmVyZW5jZTtcbiAgfVxuICBzZXQgY29tcG9zaXRlSW5mZXJlbmNlKHZhbHVlOiBDb21wb3NpdGVJbmZlcmVuY2UgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb21wb3NpdGVJbmZlcmVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FjaGluZygpOiBDYWNoaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGluZztcbiAgfVxuICBzZXQgY2FjaGluZyh2YWx1ZTogQ2FjaGluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NhY2hpbmcgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUMlNJbmZlcmVuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVDJTSW5mZXJlbmNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgY29tcG9zaXRlSW5mZXJlbmNlOiB0aGlzLmNvbXBvc2l0ZUluZmVyZW5jZVxuICAgICAgICA/IHRoaXMuY29tcG9zaXRlSW5mZXJlbmNlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjYWNoaW5nOiB0aGlzLmNhY2hpbmcgPyB0aGlzLmNhY2hpbmcudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFQyU0luZmVyZW5jZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGNvbXBvc2l0ZUluZmVyZW5jZTogdGhpcy5jb21wb3NpdGVJbmZlcmVuY2VcbiAgICAgICAgPyB0aGlzLmNvbXBvc2l0ZUluZmVyZW5jZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjYWNoaW5nOiB0aGlzLmNhY2hpbmcgPyB0aGlzLmNhY2hpbmcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUMlNJbmZlcmVuY2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFQyU0luZmVyZW5jZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBjb21wb3NpdGVJbmZlcmVuY2U/OiBDb21wb3NpdGVJbmZlcmVuY2UuQXNPYmplY3Q7XG4gICAgY2FjaGluZz86IENhY2hpbmcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVDJTSW5mZXJlbmNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIGNvbXBvc2l0ZUluZmVyZW5jZT86IENvbXBvc2l0ZUluZmVyZW5jZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FjaGluZz86IENhY2hpbmcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5Db21wb3NpdGVJbmZlcmVuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUluZmVyZW5jZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuQ29tcG9zaXRlSW5mZXJlbmNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ29tcG9zaXRlSW5mZXJlbmNlKCk7XG4gICAgQ29tcG9zaXRlSW5mZXJlbmNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ29tcG9zaXRlSW5mZXJlbmNlKSB7XG4gICAgX2luc3RhbmNlLnRleHQybWVsID0gX2luc3RhbmNlLnRleHQybWVsIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubWVsMmF1ZGlvID0gX2luc3RhbmNlLm1lbDJhdWRpbyB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDb21wb3NpdGVJbmZlcmVuY2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQybWVsID0gbmV3IFRleHQyTWVsKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50ZXh0Mm1lbCxcbiAgICAgICAgICAgIFRleHQyTWVsLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVsMmF1ZGlvID0gbmV3IE1lbDJBdWRpbygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWVsMmF1ZGlvLFxuICAgICAgICAgICAgTWVsMkF1ZGlvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDb21wb3NpdGVJbmZlcmVuY2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDb21wb3NpdGVJbmZlcmVuY2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudGV4dDJtZWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudGV4dDJtZWwgYXMgYW55LFxuICAgICAgICBUZXh0Mk1lbC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZWwyYXVkaW8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubWVsMmF1ZGlvIGFzIGFueSxcbiAgICAgICAgTWVsMkF1ZGlvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHQybWVsPzogVGV4dDJNZWw7XG4gIHByaXZhdGUgX21lbDJhdWRpbz86IE1lbDJBdWRpbztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENvbXBvc2l0ZUluZmVyZW5jZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDb21wb3NpdGVJbmZlcmVuY2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGV4dDJtZWwgPSBfdmFsdWUudGV4dDJtZWwgPyBuZXcgVGV4dDJNZWwoX3ZhbHVlLnRleHQybWVsKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lbDJhdWRpbyA9IF92YWx1ZS5tZWwyYXVkaW9cbiAgICAgID8gbmV3IE1lbDJBdWRpbyhfdmFsdWUubWVsMmF1ZGlvKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQ29tcG9zaXRlSW5mZXJlbmNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdGV4dDJtZWwoKTogVGV4dDJNZWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0Mm1lbDtcbiAgfVxuICBzZXQgdGV4dDJtZWwodmFsdWU6IFRleHQyTWVsIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGV4dDJtZWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVsMmF1ZGlvKCk6IE1lbDJBdWRpbyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lbDJhdWRpbztcbiAgfVxuICBzZXQgbWVsMmF1ZGlvKHZhbHVlOiBNZWwyQXVkaW8gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZWwyYXVkaW8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDb21wb3NpdGVJbmZlcmVuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ29tcG9zaXRlSW5mZXJlbmNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDJtZWw6IHRoaXMudGV4dDJtZWwgPyB0aGlzLnRleHQybWVsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZWwyYXVkaW86IHRoaXMubWVsMmF1ZGlvID8gdGhpcy5tZWwyYXVkaW8udG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENvbXBvc2l0ZUluZmVyZW5jZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQybWVsOiB0aGlzLnRleHQybWVsID8gdGhpcy50ZXh0Mm1lbC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtZWwyYXVkaW86IHRoaXMubWVsMmF1ZGlvID8gdGhpcy5tZWwyYXVkaW8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDb21wb3NpdGVJbmZlcmVuY2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENvbXBvc2l0ZUluZmVyZW5jZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdGV4dDJtZWw/OiBUZXh0Mk1lbC5Bc09iamVjdDtcbiAgICBtZWwyYXVkaW8/OiBNZWwyQXVkaW8uQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ29tcG9zaXRlSW5mZXJlbmNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0ZXh0Mm1lbD86IFRleHQyTWVsLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtZWwyYXVkaW8/OiBNZWwyQXVkaW8uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5UZXh0Mk1lbFxuICovXG5leHBvcnQgY2xhc3MgVGV4dDJNZWwgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlRleHQyTWVsJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGV4dDJNZWwoKTtcbiAgICBUZXh0Mk1lbC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFRleHQyTWVsKSB7XG4gICAgX2luc3RhbmNlLnR5cGUgPSBfaW5zdGFuY2UudHlwZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZ2xvd1R0cyA9IF9pbnN0YW5jZS5nbG93VHRzIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZ2xvd1R0c1RyaXRvbiA9IF9pbnN0YW5jZS5nbG93VHRzVHJpdG9uIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRleHQyTWVsLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50eXBlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZ2xvd1R0cyA9IG5ldyBHbG93VFRTKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5nbG93VHRzLFxuICAgICAgICAgICAgR2xvd1RUUy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmdsb3dUdHNUcml0b24gPSBuZXcgR2xvd1RUU1RyaXRvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZ2xvd1R0c1RyaXRvbixcbiAgICAgICAgICAgIEdsb3dUVFNUcml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRleHQyTWVsLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogVGV4dDJNZWwsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UudHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ2xvd1R0cykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5nbG93VHRzIGFzIGFueSxcbiAgICAgICAgR2xvd1RUUy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5nbG93VHRzVHJpdG9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmdsb3dUdHNUcml0b24gYXMgYW55LFxuICAgICAgICBHbG93VFRTVHJpdG9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2dsb3dUdHM/OiBHbG93VFRTO1xuICBwcml2YXRlIF9nbG93VHRzVHJpdG9uPzogR2xvd1RUU1RyaXRvbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFRleHQyTWVsIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRleHQyTWVsLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnR5cGUgPSBfdmFsdWUudHlwZTtcbiAgICB0aGlzLmdsb3dUdHMgPSBfdmFsdWUuZ2xvd1R0cyA/IG5ldyBHbG93VFRTKF92YWx1ZS5nbG93VHRzKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdsb3dUdHNUcml0b24gPSBfdmFsdWUuZ2xvd1R0c1RyaXRvblxuICAgICAgPyBuZXcgR2xvd1RUU1RyaXRvbihfdmFsdWUuZ2xvd1R0c1RyaXRvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFRleHQyTWVsLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdsb3dUdHMoKTogR2xvd1RUUyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb3dUdHM7XG4gIH1cbiAgc2V0IGdsb3dUdHModmFsdWU6IEdsb3dUVFMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nbG93VHRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdsb3dUdHNUcml0b24oKTogR2xvd1RUU1RyaXRvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb3dUdHNUcml0b247XG4gIH1cbiAgc2V0IGdsb3dUdHNUcml0b24odmFsdWU6IEdsb3dUVFNUcml0b24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nbG93VHRzVHJpdG9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVGV4dDJNZWwuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVGV4dDJNZWwuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBnbG93VHRzOiB0aGlzLmdsb3dUdHMgPyB0aGlzLmdsb3dUdHMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGdsb3dUdHNUcml0b246IHRoaXMuZ2xvd1R0c1RyaXRvblxuICAgICAgICA/IHRoaXMuZ2xvd1R0c1RyaXRvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVGV4dDJNZWwuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBnbG93VHRzOiB0aGlzLmdsb3dUdHMgPyB0aGlzLmdsb3dUdHMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZ2xvd1R0c1RyaXRvbjogdGhpcy5nbG93VHRzVHJpdG9uXG4gICAgICAgID8gdGhpcy5nbG93VHRzVHJpdG9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVGV4dDJNZWwge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRleHQyTWVsXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIGdsb3dUdHM/OiBHbG93VFRTLkFzT2JqZWN0O1xuICAgIGdsb3dUdHNUcml0b24/OiBHbG93VFRTVHJpdG9uLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRleHQyTWVsXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIGdsb3dUdHM/OiBHbG93VFRTLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBnbG93VHRzVHJpdG9uPzogR2xvd1RUU1RyaXRvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkdsb3dUVFNcbiAqL1xuZXhwb3J0IGNsYXNzIEdsb3dUVFMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkdsb3dUVFMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHbG93VFRTKCk7XG4gICAgR2xvd1RUUy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdsb3dUVFMpIHtcbiAgICBfaW5zdGFuY2UuYmF0Y2hTaXplID0gX2luc3RhbmNlLmJhdGNoU2l6ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnVzZUdwdSA9IF9pbnN0YW5jZS51c2VHcHUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmxlbmd0aFNjYWxlID0gX2luc3RhbmNlLmxlbmd0aFNjYWxlIHx8IDA7XG4gICAgX2luc3RhbmNlLm5vaXNlU2NhbGUgPSBfaW5zdGFuY2Uubm9pc2VTY2FsZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5wYXRoID0gX2luc3RhbmNlLnBhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLmNsZWFuZXJzID0gX2luc3RhbmNlLmNsZWFuZXJzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGggPSBfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2xvd1RUUyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYmF0Y2hTaXplID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VHcHUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubGVuZ3RoU2NhbGUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm5vaXNlU2NhbGUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnBhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIChfaW5zdGFuY2UuY2xlYW5lcnMgPSBfaW5zdGFuY2UuY2xlYW5lcnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHbG93VFRTLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogR2xvd1RUUywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5iYXRjaFNpemUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygxLCBfaW5zdGFuY2UuYmF0Y2hTaXplKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VHcHUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS51c2VHcHUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxlbmd0aFNjYWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLmxlbmd0aFNjYWxlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub2lzZVNjYWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNCwgX2luc3RhbmNlLm5vaXNlU2NhbGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNsZWFuZXJzICYmIF9pbnN0YW5jZS5jbGVhbmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg2LCBfaW5zdGFuY2UuY2xlYW5lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmFtQ29uZmlnUGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg3LCBfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9iYXRjaFNpemU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZUdwdT86IGJvb2xlYW47XG4gIHByaXZhdGUgX2xlbmd0aFNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9ub2lzZVNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF9jbGVhbmVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9wYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBHbG93VFRTIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdsb3dUVFMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYmF0Y2hTaXplID0gX3ZhbHVlLmJhdGNoU2l6ZTtcbiAgICB0aGlzLnVzZUdwdSA9IF92YWx1ZS51c2VHcHU7XG4gICAgdGhpcy5sZW5ndGhTY2FsZSA9IF92YWx1ZS5sZW5ndGhTY2FsZTtcbiAgICB0aGlzLm5vaXNlU2NhbGUgPSBfdmFsdWUubm9pc2VTY2FsZTtcbiAgICB0aGlzLnBhdGggPSBfdmFsdWUucGF0aDtcbiAgICB0aGlzLmNsZWFuZXJzID0gKF92YWx1ZS5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnBhcmFtQ29uZmlnUGF0aCA9IF92YWx1ZS5wYXJhbUNvbmZpZ1BhdGg7XG4gICAgR2xvd1RUUy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGJhdGNoU2l6ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFNpemU7XG4gIH1cbiAgc2V0IGJhdGNoU2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZUdwdSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlR3B1O1xuICB9XG4gIHNldCB1c2VHcHUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VHcHUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGVuZ3RoU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoU2NhbGU7XG4gIH1cbiAgc2V0IGxlbmd0aFNjYWxlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sZW5ndGhTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub2lzZVNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vaXNlU2NhbGU7XG4gIH1cbiAgc2V0IG5vaXNlU2NhbGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vaXNlU2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG4gIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNsZWFuZXJzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYW5lcnM7XG4gIH1cbiAgc2V0IGNsZWFuZXJzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsZWFuZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmFtQ29uZmlnUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbUNvbmZpZ1BhdGg7XG4gIH1cbiAgc2V0IHBhcmFtQ29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyYW1Db25maWdQYXRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2xvd1RUUy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHbG93VFRTLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHUsXG4gICAgICBsZW5ndGhTY2FsZTogdGhpcy5sZW5ndGhTY2FsZSxcbiAgICAgIG5vaXNlU2NhbGU6IHRoaXMubm9pc2VTY2FsZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGNsZWFuZXJzOiAodGhpcy5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBhcmFtQ29uZmlnUGF0aDogdGhpcy5wYXJhbUNvbmZpZ1BhdGhcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHbG93VFRTLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHUsXG4gICAgICBsZW5ndGhTY2FsZTogdGhpcy5sZW5ndGhTY2FsZSxcbiAgICAgIG5vaXNlU2NhbGU6IHRoaXMubm9pc2VTY2FsZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGNsZWFuZXJzOiAodGhpcy5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBhcmFtQ29uZmlnUGF0aDogdGhpcy5wYXJhbUNvbmZpZ1BhdGhcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdsb3dUVFMge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdsb3dUVFNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGJhdGNoU2l6ZT86IHN0cmluZztcbiAgICB1c2VHcHU/OiBib29sZWFuO1xuICAgIGxlbmd0aFNjYWxlPzogbnVtYmVyO1xuICAgIG5vaXNlU2NhbGU/OiBudW1iZXI7XG4gICAgcGF0aD86IHN0cmluZztcbiAgICBjbGVhbmVycz86IHN0cmluZ1tdO1xuICAgIHBhcmFtQ29uZmlnUGF0aD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHbG93VFRTXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBiYXRjaFNpemU/OiBzdHJpbmc7XG4gICAgdXNlR3B1PzogYm9vbGVhbjtcbiAgICBsZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgICBub2lzZVNjYWxlPzogbnVtYmVyO1xuICAgIHBhdGg/OiBzdHJpbmc7XG4gICAgY2xlYW5lcnM/OiBzdHJpbmdbXTtcbiAgICBwYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkdsb3dUVFNUcml0b25cbiAqL1xuZXhwb3J0IGNsYXNzIEdsb3dUVFNUcml0b24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkdsb3dUVFNUcml0b24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHbG93VFRTVHJpdG9uKCk7XG4gICAgR2xvd1RUU1RyaXRvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdsb3dUVFNUcml0b24pIHtcbiAgICBfaW5zdGFuY2UuYmF0Y2hTaXplID0gX2luc3RhbmNlLmJhdGNoU2l6ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmxlbmd0aFNjYWxlID0gX2luc3RhbmNlLmxlbmd0aFNjYWxlIHx8IDA7XG4gICAgX2luc3RhbmNlLm5vaXNlU2NhbGUgPSBfaW5zdGFuY2Uubm9pc2VTY2FsZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5jbGVhbmVycyA9IF9pbnN0YW5jZS5jbGVhbmVycyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubWF4VGV4dExlbmd0aCA9IF9pbnN0YW5jZS5tYXhUZXh0TGVuZ3RoIHx8ICcwJztcbiAgICBfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoID0gX2luc3RhbmNlLnBhcmFtQ29uZmlnUGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uVXJsID0gX2luc3RhbmNlLnRyaXRvblVybCB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdsb3dUVFNUcml0b24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmJhdGNoU2l6ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubGVuZ3RoU2NhbGUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm5vaXNlU2NhbGUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5jbGVhbmVycyA9IF9pbnN0YW5jZS5jbGVhbmVycyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5tYXhUZXh0TGVuZ3RoID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25VcmwgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdsb3dUVFNUcml0b24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHbG93VFRTVHJpdG9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmJhdGNoU2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIF9pbnN0YW5jZS5iYXRjaFNpemUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxlbmd0aFNjYWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLmxlbmd0aFNjYWxlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub2lzZVNjYWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLm5vaXNlU2NhbGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNsZWFuZXJzICYmIF9pbnN0YW5jZS5jbGVhbmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg0LCBfaW5zdGFuY2UuY2xlYW5lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1heFRleHRMZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg1LCBfaW5zdGFuY2UubWF4VGV4dExlbmd0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFyYW1Db25maWdQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvblVybCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg3LCBfaW5zdGFuY2UudHJpdG9uVXJsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOCwgX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYmF0Y2hTaXplPzogc3RyaW5nO1xuICBwcml2YXRlIF9sZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbm9pc2VTY2FsZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfY2xlYW5lcnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbWF4VGV4dExlbmd0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1Db25maWdQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Vcmw/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdsb3dUVFNUcml0b24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2xvd1RUU1RyaXRvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5iYXRjaFNpemUgPSBfdmFsdWUuYmF0Y2hTaXplO1xuICAgIHRoaXMubGVuZ3RoU2NhbGUgPSBfdmFsdWUubGVuZ3RoU2NhbGU7XG4gICAgdGhpcy5ub2lzZVNjYWxlID0gX3ZhbHVlLm5vaXNlU2NhbGU7XG4gICAgdGhpcy5jbGVhbmVycyA9IChfdmFsdWUuY2xlYW5lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5tYXhUZXh0TGVuZ3RoID0gX3ZhbHVlLm1heFRleHRMZW5ndGg7XG4gICAgdGhpcy5wYXJhbUNvbmZpZ1BhdGggPSBfdmFsdWUucGFyYW1Db25maWdQYXRoO1xuICAgIHRoaXMudHJpdG9uVXJsID0gX3ZhbHVlLnRyaXRvblVybDtcbiAgICB0aGlzLnRyaXRvbk1vZGVsTmFtZSA9IF92YWx1ZS50cml0b25Nb2RlbE5hbWU7XG4gICAgR2xvd1RUU1RyaXRvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGJhdGNoU2l6ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFNpemU7XG4gIH1cbiAgc2V0IGJhdGNoU2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxlbmd0aFNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aFNjYWxlO1xuICB9XG4gIHNldCBsZW5ndGhTY2FsZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGVuZ3RoU2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9pc2VTY2FsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub2lzZVNjYWxlO1xuICB9XG4gIHNldCBub2lzZVNjYWxlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub2lzZVNjYWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNsZWFuZXJzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYW5lcnM7XG4gIH1cbiAgc2V0IGNsZWFuZXJzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsZWFuZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1heFRleHRMZW5ndGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4VGV4dExlbmd0aDtcbiAgfVxuICBzZXQgbWF4VGV4dExlbmd0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWF4VGV4dExlbmd0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJhbUNvbmZpZ1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1Db25maWdQYXRoO1xuICB9XG4gIHNldCBwYXJhbUNvbmZpZ1BhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmFtQ29uZmlnUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25VcmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uVXJsO1xuICB9XG4gIHNldCB0cml0b25VcmwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyaXRvblVybCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25Nb2RlbE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uTW9kZWxOYW1lO1xuICB9XG4gIHNldCB0cml0b25Nb2RlbE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyaXRvbk1vZGVsTmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdsb3dUVFNUcml0b24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2xvd1RUU1RyaXRvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhdGNoU2l6ZTogdGhpcy5iYXRjaFNpemUsXG4gICAgICBsZW5ndGhTY2FsZTogdGhpcy5sZW5ndGhTY2FsZSxcbiAgICAgIG5vaXNlU2NhbGU6IHRoaXMubm9pc2VTY2FsZSxcbiAgICAgIGNsZWFuZXJzOiAodGhpcy5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIG1heFRleHRMZW5ndGg6IHRoaXMubWF4VGV4dExlbmd0aCxcbiAgICAgIHBhcmFtQ29uZmlnUGF0aDogdGhpcy5wYXJhbUNvbmZpZ1BhdGgsXG4gICAgICB0cml0b25Vcmw6IHRoaXMudHJpdG9uVXJsLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdsb3dUVFNUcml0b24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaFNpemU6IHRoaXMuYmF0Y2hTaXplLFxuICAgICAgbGVuZ3RoU2NhbGU6IHRoaXMubGVuZ3RoU2NhbGUsXG4gICAgICBub2lzZVNjYWxlOiB0aGlzLm5vaXNlU2NhbGUsXG4gICAgICBjbGVhbmVyczogKHRoaXMuY2xlYW5lcnMgfHwgW10pLnNsaWNlKCksXG4gICAgICBtYXhUZXh0TGVuZ3RoOiB0aGlzLm1heFRleHRMZW5ndGgsXG4gICAgICBwYXJhbUNvbmZpZ1BhdGg6IHRoaXMucGFyYW1Db25maWdQYXRoLFxuICAgICAgdHJpdG9uVXJsOiB0aGlzLnRyaXRvblVybCxcbiAgICAgIHRyaXRvbk1vZGVsTmFtZTogdGhpcy50cml0b25Nb2RlbE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdsb3dUVFNUcml0b24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdsb3dUVFNUcml0b25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGJhdGNoU2l6ZT86IHN0cmluZztcbiAgICBsZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgICBub2lzZVNjYWxlPzogbnVtYmVyO1xuICAgIGNsZWFuZXJzPzogc3RyaW5nW107XG4gICAgbWF4VGV4dExlbmd0aD86IHN0cmluZztcbiAgICBwYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gICAgdHJpdG9uVXJsPzogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHbG93VFRTVHJpdG9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBiYXRjaFNpemU/OiBzdHJpbmc7XG4gICAgbGVuZ3RoU2NhbGU/OiBudW1iZXI7XG4gICAgbm9pc2VTY2FsZT86IG51bWJlcjtcbiAgICBjbGVhbmVycz86IHN0cmluZ1tdO1xuICAgIG1heFRleHRMZW5ndGg/OiBzdHJpbmc7XG4gICAgcGFyYW1Db25maWdQYXRoPzogc3RyaW5nO1xuICAgIHRyaXRvblVybD86IHN0cmluZztcbiAgICB0cml0b25Nb2RlbE5hbWU/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLk1lbDJBdWRpb1xuICovXG5leHBvcnQgY2xhc3MgTWVsMkF1ZGlvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5NZWwyQXVkaW8nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZWwyQXVkaW8oKTtcbiAgICBNZWwyQXVkaW8uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNZWwyQXVkaW8pIHtcbiAgICBfaW5zdGFuY2UudHlwZSA9IF9pbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5tYk1lbGdhblRyaXRvbiA9IF9pbnN0YW5jZS5tYk1lbGdhblRyaXRvbiB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmhpZmlHYW4gPSBfaW5zdGFuY2UuaGlmaUdhbiB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmhpZmlHYW5Ucml0b24gPSBfaW5zdGFuY2UuaGlmaUdhblRyaXRvbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNZWwyQXVkaW8sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnR5cGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5tYk1lbGdhblRyaXRvbiA9IG5ldyBNYk1lbGdhblRyaXRvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWJNZWxnYW5Ucml0b24sXG4gICAgICAgICAgICBNYk1lbGdhblRyaXRvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmhpZmlHYW4gPSBuZXcgSGlGaUdhbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuaGlmaUdhbixcbiAgICAgICAgICAgIEhpRmlHYW4uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5oaWZpR2FuVHJpdG9uID0gbmV3IEhpRmlHYW5Ucml0b24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmhpZmlHYW5Ucml0b24sXG4gICAgICAgICAgICBIaUZpR2FuVHJpdG9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZWwyQXVkaW8ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBNZWwyQXVkaW8sIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UudHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWJNZWxnYW5Ucml0b24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubWJNZWxnYW5Ucml0b24gYXMgYW55LFxuICAgICAgICBNYk1lbGdhblRyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5oaWZpR2FuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmhpZmlHYW4gYXMgYW55LFxuICAgICAgICBIaUZpR2FuLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmhpZmlHYW5Ucml0b24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuaGlmaUdhblRyaXRvbiBhcyBhbnksXG4gICAgICAgIEhpRmlHYW5Ucml0b24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbWJNZWxnYW5Ucml0b24/OiBNYk1lbGdhblRyaXRvbjtcbiAgcHJpdmF0ZSBfaGlmaUdhbj86IEhpRmlHYW47XG4gIHByaXZhdGUgX2hpZmlHYW5Ucml0b24/OiBIaUZpR2FuVHJpdG9uO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWVsMkF1ZGlvIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1lbDJBdWRpby5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50eXBlID0gX3ZhbHVlLnR5cGU7XG4gICAgdGhpcy5tYk1lbGdhblRyaXRvbiA9IF92YWx1ZS5tYk1lbGdhblRyaXRvblxuICAgICAgPyBuZXcgTWJNZWxnYW5Ucml0b24oX3ZhbHVlLm1iTWVsZ2FuVHJpdG9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5oaWZpR2FuID0gX3ZhbHVlLmhpZmlHYW4gPyBuZXcgSGlGaUdhbihfdmFsdWUuaGlmaUdhbikgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5oaWZpR2FuVHJpdG9uID0gX3ZhbHVlLmhpZmlHYW5Ucml0b25cbiAgICAgID8gbmV3IEhpRmlHYW5Ucml0b24oX3ZhbHVlLmhpZmlHYW5Ucml0b24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBNZWwyQXVkaW8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWJNZWxnYW5Ucml0b24oKTogTWJNZWxnYW5Ucml0b24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYk1lbGdhblRyaXRvbjtcbiAgfVxuICBzZXQgbWJNZWxnYW5Ucml0b24odmFsdWU6IE1iTWVsZ2FuVHJpdG9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWJNZWxnYW5Ucml0b24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgaGlmaUdhbigpOiBIaUZpR2FuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faGlmaUdhbjtcbiAgfVxuICBzZXQgaGlmaUdhbih2YWx1ZTogSGlGaUdhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2hpZmlHYW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgaGlmaUdhblRyaXRvbigpOiBIaUZpR2FuVHJpdG9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faGlmaUdhblRyaXRvbjtcbiAgfVxuICBzZXQgaGlmaUdhblRyaXRvbih2YWx1ZTogSGlGaUdhblRyaXRvbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2hpZmlHYW5Ucml0b24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNZWwyQXVkaW8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTWVsMkF1ZGlvLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbWJNZWxnYW5Ucml0b246IHRoaXMubWJNZWxnYW5Ucml0b25cbiAgICAgICAgPyB0aGlzLm1iTWVsZ2FuVHJpdG9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBoaWZpR2FuOiB0aGlzLmhpZmlHYW4gPyB0aGlzLmhpZmlHYW4udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGhpZmlHYW5Ucml0b246IHRoaXMuaGlmaUdhblRyaXRvblxuICAgICAgICA/IHRoaXMuaGlmaUdhblRyaXRvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTWVsMkF1ZGlvLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbWJNZWxnYW5Ucml0b246IHRoaXMubWJNZWxnYW5Ucml0b25cbiAgICAgICAgPyB0aGlzLm1iTWVsZ2FuVHJpdG9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGhpZmlHYW46IHRoaXMuaGlmaUdhbiA/IHRoaXMuaGlmaUdhbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBoaWZpR2FuVHJpdG9uOiB0aGlzLmhpZmlHYW5Ucml0b25cbiAgICAgICAgPyB0aGlzLmhpZmlHYW5Ucml0b24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZWwyQXVkaW8ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1lbDJBdWRpb1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBtYk1lbGdhblRyaXRvbj86IE1iTWVsZ2FuVHJpdG9uLkFzT2JqZWN0O1xuICAgIGhpZmlHYW4/OiBIaUZpR2FuLkFzT2JqZWN0O1xuICAgIGhpZmlHYW5Ucml0b24/OiBIaUZpR2FuVHJpdG9uLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lbDJBdWRpb1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBtYk1lbGdhblRyaXRvbj86IE1iTWVsZ2FuVHJpdG9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBoaWZpR2FuPzogSGlGaUdhbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaGlmaUdhblRyaXRvbj86IEhpRmlHYW5Ucml0b24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5IaUZpR2FuXG4gKi9cbmV4cG9ydCBjbGFzcyBIaUZpR2FuIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5IaUZpR2FuJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSGlGaUdhbigpO1xuICAgIEhpRmlHYW4uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBIaUZpR2FuKSB7XG4gICAgX2luc3RhbmNlLnVzZUdwdSA9IF9pbnN0YW5jZS51c2VHcHUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmJhdGNoU2l6ZSA9IF9pbnN0YW5jZS5iYXRjaFNpemUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5jb25maWdQYXRoID0gX2luc3RhbmNlLmNvbmZpZ1BhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLm1vZGVsUGF0aCA9IF9pbnN0YW5jZS5tb2RlbFBhdGggfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBIaUZpR2FuLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VHcHUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuYmF0Y2hTaXplID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWdQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UubW9kZWxQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBIaUZpR2FuLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogSGlGaUdhbiwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51c2VHcHUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS51c2VHcHUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJhdGNoU2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5iYXRjaFNpemUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZ1BhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmNvbmZpZ1BhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1vZGVsUGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UubW9kZWxQYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91c2VHcHU/OiBib29sZWFuO1xuICBwcml2YXRlIF9iYXRjaFNpemU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gIHByaXZhdGUgX21vZGVsUGF0aD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEhpRmlHYW4gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SGlGaUdhbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy51c2VHcHUgPSBfdmFsdWUudXNlR3B1O1xuICAgIHRoaXMuYmF0Y2hTaXplID0gX3ZhbHVlLmJhdGNoU2l6ZTtcbiAgICB0aGlzLmNvbmZpZ1BhdGggPSBfdmFsdWUuY29uZmlnUGF0aDtcbiAgICB0aGlzLm1vZGVsUGF0aCA9IF92YWx1ZS5tb2RlbFBhdGg7XG4gICAgSGlGaUdhbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVzZUdwdSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlR3B1O1xuICB9XG4gIHNldCB1c2VHcHUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VHcHUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYmF0Y2hTaXplKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JhdGNoU2l6ZTtcbiAgfVxuICBzZXQgYmF0Y2hTaXplKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9iYXRjaFNpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29uZmlnUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdQYXRoO1xuICB9XG4gIHNldCBjb25maWdQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWdQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGVsUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFBhdGg7XG4gIH1cbiAgc2V0IG1vZGVsUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbW9kZWxQYXRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSGlGaUdhbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBIaUZpR2FuLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlR3B1OiB0aGlzLnVzZUdwdSxcbiAgICAgIGJhdGNoU2l6ZTogdGhpcy5iYXRjaFNpemUsXG4gICAgICBjb25maWdQYXRoOiB0aGlzLmNvbmZpZ1BhdGgsXG4gICAgICBtb2RlbFBhdGg6IHRoaXMubW9kZWxQYXRoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogSGlGaUdhbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHUsXG4gICAgICBiYXRjaFNpemU6IHRoaXMuYmF0Y2hTaXplLFxuICAgICAgY29uZmlnUGF0aDogdGhpcy5jb25maWdQYXRoLFxuICAgICAgbW9kZWxQYXRoOiB0aGlzLm1vZGVsUGF0aFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSGlGaUdhbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSGlGaUdhblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdXNlR3B1PzogYm9vbGVhbjtcbiAgICBiYXRjaFNpemU/OiBzdHJpbmc7XG4gICAgY29uZmlnUGF0aD86IHN0cmluZztcbiAgICBtb2RlbFBhdGg/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSGlGaUdhblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdXNlR3B1PzogYm9vbGVhbjtcbiAgICBiYXRjaFNpemU/OiBzdHJpbmc7XG4gICAgY29uZmlnUGF0aD86IHN0cmluZztcbiAgICBtb2RlbFBhdGg/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLkhpRmlHYW5Ucml0b25cbiAqL1xuZXhwb3J0IGNsYXNzIEhpRmlHYW5Ucml0b24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkhpRmlHYW5Ucml0b24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIaUZpR2FuVHJpdG9uKCk7XG4gICAgSGlGaUdhblRyaXRvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEhpRmlHYW5Ucml0b24pIHtcbiAgICBfaW5zdGFuY2UuY29uZmlnUGF0aCA9IF9pbnN0YW5jZS5jb25maWdQYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cml0b25VcmwgPSBfaW5zdGFuY2UudHJpdG9uVXJsIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogSGlGaUdhblRyaXRvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRyaXRvblVybCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSGlGaUdhblRyaXRvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEhpRmlHYW5Ucml0b24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnUGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuY29uZmlnUGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvblVybCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UudHJpdG9uVXJsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25maWdQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Nb2RlbE5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvblVybD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEhpRmlHYW5Ucml0b24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SGlGaUdhblRyaXRvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5jb25maWdQYXRoID0gX3ZhbHVlLmNvbmZpZ1BhdGg7XG4gICAgdGhpcy50cml0b25Nb2RlbE5hbWUgPSBfdmFsdWUudHJpdG9uTW9kZWxOYW1lO1xuICAgIHRoaXMudHJpdG9uVXJsID0gX3ZhbHVlLnRyaXRvblVybDtcbiAgICBIaUZpR2FuVHJpdG9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY29uZmlnUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdQYXRoO1xuICB9XG4gIHNldCBjb25maWdQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWdQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbE5hbWU7XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvblVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Vcmw7XG4gIH1cbiAgc2V0IHRyaXRvblVybCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJpdG9uVXJsID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSGlGaUdhblRyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBIaUZpR2FuVHJpdG9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnUGF0aDogdGhpcy5jb25maWdQYXRoLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZSxcbiAgICAgIHRyaXRvblVybDogdGhpcy50cml0b25VcmxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBIaUZpR2FuVHJpdG9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnUGF0aDogdGhpcy5jb25maWdQYXRoLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZSxcbiAgICAgIHRyaXRvblVybDogdGhpcy50cml0b25VcmxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEhpRmlHYW5Ucml0b24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEhpRmlHYW5Ucml0b25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gICAgdHJpdG9uTW9kZWxOYW1lPzogc3RyaW5nO1xuICAgIHRyaXRvblVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBIaUZpR2FuVHJpdG9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjb25maWdQYXRoPzogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcbiAgICB0cml0b25Vcmw/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLk1iTWVsZ2FuVHJpdG9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNYk1lbGdhblRyaXRvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuTWJNZWxnYW5Ucml0b24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNYk1lbGdhblRyaXRvbigpO1xuICAgIE1iTWVsZ2FuVHJpdG9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWJNZWxnYW5Ucml0b24pIHtcbiAgICBfaW5zdGFuY2UuY29uZmlnUGF0aCA9IF9pbnN0YW5jZS5jb25maWdQYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zdGF0c1BhdGggPSBfaW5zdGFuY2Uuc3RhdHNQYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cml0b25VcmwgPSBfaW5zdGFuY2UudHJpdG9uVXJsIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWJNZWxnYW5Ucml0b24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZ1BhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGF0c1BhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25VcmwgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1iTWVsZ2FuVHJpdG9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTWJNZWxnYW5Ucml0b24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnUGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuY29uZmlnUGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RhdHNQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5zdGF0c1BhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cml0b25VcmwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnRyaXRvblVybCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnUGF0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RhdHNQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Nb2RlbE5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvblVybD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1iTWVsZ2FuVHJpdG9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1iTWVsZ2FuVHJpdG9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNvbmZpZ1BhdGggPSBfdmFsdWUuY29uZmlnUGF0aDtcbiAgICB0aGlzLnN0YXRzUGF0aCA9IF92YWx1ZS5zdGF0c1BhdGg7XG4gICAgdGhpcy50cml0b25Nb2RlbE5hbWUgPSBfdmFsdWUudHJpdG9uTW9kZWxOYW1lO1xuICAgIHRoaXMudHJpdG9uVXJsID0gX3ZhbHVlLnRyaXRvblVybDtcbiAgICBNYk1lbGdhblRyaXRvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnUGF0aDtcbiAgfVxuICBzZXQgY29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGF0c1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHNQYXRoO1xuICB9XG4gIHNldCBzdGF0c1BhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0YXRzUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25Nb2RlbE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uTW9kZWxOYW1lO1xuICB9XG4gIHNldCB0cml0b25Nb2RlbE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyaXRvbk1vZGVsTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25VcmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uVXJsO1xuICB9XG4gIHNldCB0cml0b25VcmwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyaXRvblVybCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1iTWVsZ2FuVHJpdG9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1iTWVsZ2FuVHJpdG9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnUGF0aDogdGhpcy5jb25maWdQYXRoLFxuICAgICAgc3RhdHNQYXRoOiB0aGlzLnN0YXRzUGF0aCxcbiAgICAgIHRyaXRvbk1vZGVsTmFtZTogdGhpcy50cml0b25Nb2RlbE5hbWUsXG4gICAgICB0cml0b25Vcmw6IHRoaXMudHJpdG9uVXJsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTWJNZWxnYW5Ucml0b24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdQYXRoOiB0aGlzLmNvbmZpZ1BhdGgsXG4gICAgICBzdGF0c1BhdGg6IHRoaXMuc3RhdHNQYXRoLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZSxcbiAgICAgIHRyaXRvblVybDogdGhpcy50cml0b25VcmxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1iTWVsZ2FuVHJpdG9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNYk1lbGdhblRyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgY29uZmlnUGF0aD86IHN0cmluZztcbiAgICBzdGF0c1BhdGg/OiBzdHJpbmc7XG4gICAgdHJpdG9uTW9kZWxOYW1lPzogc3RyaW5nO1xuICAgIHRyaXRvblVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNYk1lbGdhblRyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY29uZmlnUGF0aD86IHN0cmluZztcbiAgICBzdGF0c1BhdGg/OiBzdHJpbmc7XG4gICAgdHJpdG9uTW9kZWxOYW1lPzogc3RyaW5nO1xuICAgIHRyaXRvblVybD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuQ2FjaGluZ1xuICovXG5leHBvcnQgY2xhc3MgQ2FjaGluZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuQ2FjaGluZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENhY2hpbmcoKTtcbiAgICBDYWNoaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2FjaGluZykge1xuICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfaW5zdGFuY2UuYWN0aXZlIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5tZW1vcnlDYWNoZU1heFNpemUgPSBfaW5zdGFuY2UubWVtb3J5Q2FjaGVNYXhTaXplIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlID0gX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmxvYWRDYWNoZSA9IF9pbnN0YW5jZS5sb2FkQ2FjaGUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnNhdmVDYWNoZSA9IF9pbnN0YW5jZS5zYXZlQ2FjaGUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmNhY2hlU2F2ZURpciA9IF9pbnN0YW5jZS5jYWNoZVNhdmVEaXIgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDYWNoaW5nLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVtb3J5Q2FjaGVNYXhTaXplID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmxvYWRDYWNoZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zYXZlQ2FjaGUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FjaGVTYXZlRGlyID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDYWNoaW5nLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogQ2FjaGluZywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5hY3RpdmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5hY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lbW9yeUNhY2hlTWF4U2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5tZW1vcnlDYWNoZU1heFNpemUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvYWRDYWNoZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLmxvYWRDYWNoZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2F2ZUNhY2hlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg1LCBfaW5zdGFuY2Uuc2F2ZUNhY2hlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWNoZVNhdmVEaXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNiwgX2luc3RhbmNlLmNhY2hlU2F2ZURpcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbWVtb3J5Q2FjaGVNYXhTaXplPzogc3RyaW5nO1xuICBwcml2YXRlIF9zYW1wbGluZ1JhdGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvYWRDYWNoZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3NhdmVDYWNoZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX2NhY2hlU2F2ZURpcj86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENhY2hpbmcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2FjaGluZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5hY3RpdmUgPSBfdmFsdWUuYWN0aXZlO1xuICAgIHRoaXMubWVtb3J5Q2FjaGVNYXhTaXplID0gX3ZhbHVlLm1lbW9yeUNhY2hlTWF4U2l6ZTtcbiAgICB0aGlzLnNhbXBsaW5nUmF0ZSA9IF92YWx1ZS5zYW1wbGluZ1JhdGU7XG4gICAgdGhpcy5sb2FkQ2FjaGUgPSBfdmFsdWUubG9hZENhY2hlO1xuICAgIHRoaXMuc2F2ZUNhY2hlID0gX3ZhbHVlLnNhdmVDYWNoZTtcbiAgICB0aGlzLmNhY2hlU2F2ZURpciA9IF92YWx1ZS5jYWNoZVNhdmVEaXI7XG4gICAgQ2FjaGluZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVtb3J5Q2FjaGVNYXhTaXplKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lbW9yeUNhY2hlTWF4U2l6ZTtcbiAgfVxuICBzZXQgbWVtb3J5Q2FjaGVNYXhTaXplKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZW1vcnlDYWNoZU1heFNpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2FtcGxpbmdSYXRlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsaW5nUmF0ZTtcbiAgfVxuICBzZXQgc2FtcGxpbmdSYXRlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zYW1wbGluZ1JhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9hZENhY2hlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQ2FjaGU7XG4gIH1cbiAgc2V0IGxvYWRDYWNoZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xvYWRDYWNoZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzYXZlQ2FjaGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NhdmVDYWNoZTtcbiAgfVxuICBzZXQgc2F2ZUNhY2hlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2F2ZUNhY2hlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhY2hlU2F2ZURpcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZVNhdmVEaXI7XG4gIH1cbiAgc2V0IGNhY2hlU2F2ZURpcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2FjaGVTYXZlRGlyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2FjaGluZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDYWNoaW5nLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIG1lbW9yeUNhY2hlTWF4U2l6ZTogdGhpcy5tZW1vcnlDYWNoZU1heFNpemUsXG4gICAgICBzYW1wbGluZ1JhdGU6IHRoaXMuc2FtcGxpbmdSYXRlLFxuICAgICAgbG9hZENhY2hlOiB0aGlzLmxvYWRDYWNoZSxcbiAgICAgIHNhdmVDYWNoZTogdGhpcy5zYXZlQ2FjaGUsXG4gICAgICBjYWNoZVNhdmVEaXI6IHRoaXMuY2FjaGVTYXZlRGlyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2FjaGluZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmUsXG4gICAgICBtZW1vcnlDYWNoZU1heFNpemU6IHRoaXMubWVtb3J5Q2FjaGVNYXhTaXplLFxuICAgICAgc2FtcGxpbmdSYXRlOiB0aGlzLnNhbXBsaW5nUmF0ZSxcbiAgICAgIGxvYWRDYWNoZTogdGhpcy5sb2FkQ2FjaGUsXG4gICAgICBzYXZlQ2FjaGU6IHRoaXMuc2F2ZUNhY2hlLFxuICAgICAgY2FjaGVTYXZlRGlyOiB0aGlzLmNhY2hlU2F2ZURpclxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2FjaGluZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2FjaGluZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBtZW1vcnlDYWNoZU1heFNpemU/OiBzdHJpbmc7XG4gICAgc2FtcGxpbmdSYXRlPzogc3RyaW5nO1xuICAgIGxvYWRDYWNoZT86IGJvb2xlYW47XG4gICAgc2F2ZUNhY2hlPzogYm9vbGVhbjtcbiAgICBjYWNoZVNhdmVEaXI/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2FjaGluZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBtZW1vcnlDYWNoZU1heFNpemU/OiBzdHJpbmc7XG4gICAgc2FtcGxpbmdSYXRlPzogc3RyaW5nO1xuICAgIGxvYWRDYWNoZT86IGJvb2xlYW47XG4gICAgc2F2ZUNhY2hlPzogYm9vbGVhbjtcbiAgICBjYWNoZVNhdmVEaXI/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLlQyU05vcm1hbGl6YXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFQyU05vcm1hbGl6YXRpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlQyU05vcm1hbGl6YXRpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUMlNOb3JtYWxpemF0aW9uKCk7XG4gICAgVDJTTm9ybWFsaXphdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFQyU05vcm1hbGl6YXRpb24pIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfaW5zdGFuY2UubGFuZ3VhZ2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lID0gX2luc3RhbmNlLnBpcGVsaW5lIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5jdXN0b21QaG9uZW1pemVySWQgPSBfaW5zdGFuY2UuY3VzdG9tUGhvbmVtaXplcklkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVDJTTm9ybWFsaXphdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UucGlwZWxpbmUgPSBfaW5zdGFuY2UucGlwZWxpbmUgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuY3VzdG9tUGhvbmVtaXplcklkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUMlNOb3JtYWxpemF0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVDJTTm9ybWFsaXphdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lICYmIF9pbnN0YW5jZS5waXBlbGluZS5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmN1c3RvbVBob25lbWl6ZXJJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UuY3VzdG9tUGhvbmVtaXplcklkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGlwZWxpbmU/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfY3VzdG9tUGhvbmVtaXplcklkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVDJTTm9ybWFsaXphdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUMlNOb3JtYWxpemF0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlID0gX3ZhbHVlLmxhbmd1YWdlO1xuICAgIHRoaXMucGlwZWxpbmUgPSAoX3ZhbHVlLnBpcGVsaW5lIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuY3VzdG9tUGhvbmVtaXplcklkID0gX3ZhbHVlLmN1c3RvbVBob25lbWl6ZXJJZDtcbiAgICBUMlNOb3JtYWxpemF0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cbiAgc2V0IGxhbmd1YWdlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZSgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lO1xuICB9XG4gIHNldCBwaXBlbGluZSh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjdXN0b21QaG9uZW1pemVySWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tUGhvbmVtaXplcklkO1xuICB9XG4gIHNldCBjdXN0b21QaG9uZW1pemVySWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2N1c3RvbVBob25lbWl6ZXJJZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFQyU05vcm1hbGl6YXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVDJTTm9ybWFsaXphdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgcGlwZWxpbmU6ICh0aGlzLnBpcGVsaW5lIHx8IFtdKS5zbGljZSgpLFxuICAgICAgY3VzdG9tUGhvbmVtaXplcklkOiB0aGlzLmN1c3RvbVBob25lbWl6ZXJJZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFQyU05vcm1hbGl6YXRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHBpcGVsaW5lOiAodGhpcy5waXBlbGluZSB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGN1c3RvbVBob25lbWl6ZXJJZDogdGhpcy5jdXN0b21QaG9uZW1pemVySWRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFQyU05vcm1hbGl6YXRpb24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFQyU05vcm1hbGl6YXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIHBpcGVsaW5lPzogc3RyaW5nW107XG4gICAgY3VzdG9tUGhvbmVtaXplcklkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFQyU05vcm1hbGl6YXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIHBpcGVsaW5lPzogc3RyaW5nW107XG4gICAgY3VzdG9tUGhvbmVtaXplcklkPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5Qb3N0cHJvY2Vzc2luZ1xuICovXG5leHBvcnQgY2xhc3MgUG9zdHByb2Nlc3NpbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLlBvc3Rwcm9jZXNzaW5nJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUG9zdHByb2Nlc3NpbmcoKTtcbiAgICBQb3N0cHJvY2Vzc2luZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBvc3Rwcm9jZXNzaW5nKSB7XG4gICAgX2luc3RhbmNlLnNpbGVuY2VTZWNzID0gX2luc3RhbmNlLnNpbGVuY2VTZWNzIHx8IDA7XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lID0gX2luc3RhbmNlLnBpcGVsaW5lIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5sb2dtbXNlID0gX2luc3RhbmNlLmxvZ21tc2UgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53aWVuZXIgPSBfaW5zdGFuY2Uud2llbmVyIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuYXBvZGl6YXRpb24gPSBfaW5zdGFuY2UuYXBvZGl6YXRpb24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUG9zdHByb2Nlc3NpbmcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNpbGVuY2VTZWNzID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UucGlwZWxpbmUgPSBfaW5zdGFuY2UucGlwZWxpbmUgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubG9nbW1zZSA9IG5ldyBMb2dtbnNlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sb2dtbXNlLFxuICAgICAgICAgICAgTG9nbW5zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLndpZW5lciA9IG5ldyBXaWVuZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLndpZW5lcixcbiAgICAgICAgICAgIFdpZW5lci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmFwb2RpemF0aW9uID0gbmV3IEFwb2RpemF0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5hcG9kaXphdGlvbixcbiAgICAgICAgICAgIEFwb2RpemF0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQb3N0cHJvY2Vzc2luZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFBvc3Rwcm9jZXNzaW5nLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNpbGVuY2VTZWNzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMSwgX2luc3RhbmNlLnNpbGVuY2VTZWNzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZSAmJiBfaW5zdGFuY2UucGlwZWxpbmUubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgX2luc3RhbmNlLnBpcGVsaW5lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2dtbXNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmxvZ21tc2UgYXMgYW55LFxuICAgICAgICBMb2dtbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLndpZW5lcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS53aWVuZXIgYXMgYW55LFxuICAgICAgICBXaWVuZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYXBvZGl6YXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UuYXBvZGl6YXRpb24gYXMgYW55LFxuICAgICAgICBBcG9kaXphdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zaWxlbmNlU2Vjcz86IG51bWJlcjtcbiAgcHJpdmF0ZSBfcGlwZWxpbmU/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbG9nbW1zZT86IExvZ21uc2U7XG4gIHByaXZhdGUgX3dpZW5lcj86IFdpZW5lcjtcbiAgcHJpdmF0ZSBfYXBvZGl6YXRpb24/OiBBcG9kaXphdGlvbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBvc3Rwcm9jZXNzaW5nIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBvc3Rwcm9jZXNzaW5nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNpbGVuY2VTZWNzID0gX3ZhbHVlLnNpbGVuY2VTZWNzO1xuICAgIHRoaXMucGlwZWxpbmUgPSAoX3ZhbHVlLnBpcGVsaW5lIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubG9nbW1zZSA9IF92YWx1ZS5sb2dtbXNlID8gbmV3IExvZ21uc2UoX3ZhbHVlLmxvZ21tc2UpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMud2llbmVyID0gX3ZhbHVlLndpZW5lciA/IG5ldyBXaWVuZXIoX3ZhbHVlLndpZW5lcikgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hcG9kaXphdGlvbiA9IF92YWx1ZS5hcG9kaXphdGlvblxuICAgICAgPyBuZXcgQXBvZGl6YXRpb24oX3ZhbHVlLmFwb2RpemF0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgUG9zdHByb2Nlc3NpbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzaWxlbmNlU2VjcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaWxlbmNlU2VjcztcbiAgfVxuICBzZXQgc2lsZW5jZVNlY3ModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NpbGVuY2VTZWNzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmU7XG4gIH1cbiAgc2V0IHBpcGVsaW5lKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BpcGVsaW5lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvZ21tc2UoKTogTG9nbW5zZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ21tc2U7XG4gIH1cbiAgc2V0IGxvZ21tc2UodmFsdWU6IExvZ21uc2UgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sb2dtbXNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdpZW5lcigpOiBXaWVuZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93aWVuZXI7XG4gIH1cbiAgc2V0IHdpZW5lcih2YWx1ZTogV2llbmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd2llbmVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFwb2RpemF0aW9uKCk6IEFwb2RpemF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYXBvZGl6YXRpb247XG4gIH1cbiAgc2V0IGFwb2RpemF0aW9uKHZhbHVlOiBBcG9kaXphdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Fwb2RpemF0aW9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUG9zdHByb2Nlc3Npbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUG9zdHByb2Nlc3NpbmcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzaWxlbmNlU2VjczogdGhpcy5zaWxlbmNlU2VjcyxcbiAgICAgIHBpcGVsaW5lOiAodGhpcy5waXBlbGluZSB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGxvZ21tc2U6IHRoaXMubG9nbW1zZSA/IHRoaXMubG9nbW1zZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgd2llbmVyOiB0aGlzLndpZW5lciA/IHRoaXMud2llbmVyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBhcG9kaXphdGlvbjogdGhpcy5hcG9kaXphdGlvbiA/IHRoaXMuYXBvZGl6YXRpb24udG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBvc3Rwcm9jZXNzaW5nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2lsZW5jZVNlY3M6IHRoaXMuc2lsZW5jZVNlY3MsXG4gICAgICBwaXBlbGluZTogKHRoaXMucGlwZWxpbmUgfHwgW10pLnNsaWNlKCksXG4gICAgICBsb2dtbXNlOiB0aGlzLmxvZ21tc2UgPyB0aGlzLmxvZ21tc2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgd2llbmVyOiB0aGlzLndpZW5lciA/IHRoaXMud2llbmVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGFwb2RpemF0aW9uOiB0aGlzLmFwb2RpemF0aW9uXG4gICAgICAgID8gdGhpcy5hcG9kaXphdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBvc3Rwcm9jZXNzaW5nIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQb3N0cHJvY2Vzc2luZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2lsZW5jZVNlY3M/OiBudW1iZXI7XG4gICAgcGlwZWxpbmU/OiBzdHJpbmdbXTtcbiAgICBsb2dtbXNlPzogTG9nbW5zZS5Bc09iamVjdDtcbiAgICB3aWVuZXI/OiBXaWVuZXIuQXNPYmplY3Q7XG4gICAgYXBvZGl6YXRpb24/OiBBcG9kaXphdGlvbi5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQb3N0cHJvY2Vzc2luZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc2lsZW5jZVNlY3M/OiBudW1iZXI7XG4gICAgcGlwZWxpbmU/OiBzdHJpbmdbXTtcbiAgICBsb2dtbXNlPzogTG9nbW5zZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgd2llbmVyPzogV2llbmVyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBhcG9kaXphdGlvbj86IEFwb2RpemF0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by50MnMuTG9nbW5zZVxuICovXG5leHBvcnQgY2xhc3MgTG9nbW5zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by50MnMuTG9nbW5zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExvZ21uc2UoKTtcbiAgICBMb2dtbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTG9nbW5zZSkge1xuICAgIF9pbnN0YW5jZS5pbml0aWFsTm9pc2UgPSBfaW5zdGFuY2UuaW5pdGlhbE5vaXNlIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uud2luZG93U2l6ZSA9IF9pbnN0YW5jZS53aW5kb3dTaXplIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uubm9pc2VUaHJlc2hvbGQgPSBfaW5zdGFuY2Uubm9pc2VUaHJlc2hvbGQgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExvZ21uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmluaXRpYWxOb2lzZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uud2luZG93U2l6ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uubm9pc2VUaHJlc2hvbGQgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTG9nbW5zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IExvZ21uc2UsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UuaW5pdGlhbE5vaXNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMSwgX2luc3RhbmNlLmluaXRpYWxOb2lzZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud2luZG93U2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS53aW5kb3dTaXplKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub2lzZVRocmVzaG9sZCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDMsIF9pbnN0YW5jZS5ub2lzZVRocmVzaG9sZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbE5vaXNlPzogc3RyaW5nO1xuICBwcml2YXRlIF93aW5kb3dTaXplPzogc3RyaW5nO1xuICBwcml2YXRlIF9ub2lzZVRocmVzaG9sZD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExvZ21uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TG9nbW5zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pbml0aWFsTm9pc2UgPSBfdmFsdWUuaW5pdGlhbE5vaXNlO1xuICAgIHRoaXMud2luZG93U2l6ZSA9IF92YWx1ZS53aW5kb3dTaXplO1xuICAgIHRoaXMubm9pc2VUaHJlc2hvbGQgPSBfdmFsdWUubm9pc2VUaHJlc2hvbGQ7XG4gICAgTG9nbW5zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGluaXRpYWxOb2lzZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsTm9pc2U7XG4gIH1cbiAgc2V0IGluaXRpYWxOb2lzZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW5pdGlhbE5vaXNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdpbmRvd1NpemUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2luZG93U2l6ZTtcbiAgfVxuICBzZXQgd2luZG93U2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd2luZG93U2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub2lzZVRocmVzaG9sZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub2lzZVRocmVzaG9sZDtcbiAgfVxuICBzZXQgbm9pc2VUaHJlc2hvbGQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vaXNlVGhyZXNob2xkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTG9nbW5zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMb2dtbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdGlhbE5vaXNlOiB0aGlzLmluaXRpYWxOb2lzZSxcbiAgICAgIHdpbmRvd1NpemU6IHRoaXMud2luZG93U2l6ZSxcbiAgICAgIG5vaXNlVGhyZXNob2xkOiB0aGlzLm5vaXNlVGhyZXNob2xkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTG9nbW5zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWxOb2lzZTogdGhpcy5pbml0aWFsTm9pc2UsXG4gICAgICB3aW5kb3dTaXplOiB0aGlzLndpbmRvd1NpemUsXG4gICAgICBub2lzZVRocmVzaG9sZDogdGhpcy5ub2lzZVRocmVzaG9sZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTG9nbW5zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTG9nbW5zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaW5pdGlhbE5vaXNlPzogc3RyaW5nO1xuICAgIHdpbmRvd1NpemU/OiBzdHJpbmc7XG4gICAgbm9pc2VUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTG9nbW5zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaW5pdGlhbE5vaXNlPzogc3RyaW5nO1xuICAgIHdpbmRvd1NpemU/OiBzdHJpbmc7XG4gICAgbm9pc2VUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28udDJzLldpZW5lclxuICovXG5leHBvcnQgY2xhc3MgV2llbmVyIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnQycy5XaWVuZXInO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXaWVuZXIoKTtcbiAgICBXaWVuZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBXaWVuZXIpIHtcbiAgICBfaW5zdGFuY2UuZnJhbWVMZW4gPSBfaW5zdGFuY2UuZnJhbWVMZW4gfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5scGNPcmRlciA9IF9pbnN0YW5jZS5scGNPcmRlciB8fCAnMCc7XG4gICAgX2luc3RhbmNlLml0ZXJhdGlvbnMgPSBfaW5zdGFuY2UuaXRlcmF0aW9ucyB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmFscGhhID0gX2luc3RhbmNlLmFscGhhIHx8IDA7XG4gICAgX2luc3RhbmNlLnRocmVzaCA9IF9pbnN0YW5jZS50aHJlc2ggfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IFdpZW5lciwgX3JlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJhbWVMZW4gPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxwY09yZGVyID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5pdGVyYXRpb25zID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5hbHBoYSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UudGhyZXNoID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdpZW5lci5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFdpZW5lciwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5mcmFtZUxlbikge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIF9pbnN0YW5jZS5mcmFtZUxlbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubHBjT3JkZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UubHBjT3JkZXIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLml0ZXJhdGlvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygzLCBfaW5zdGFuY2UuaXRlcmF0aW9ucyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWxwaGEpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg0LCBfaW5zdGFuY2UuYWxwaGEpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRocmVzaCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDUsIF9pbnN0YW5jZS50aHJlc2gpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZyYW1lTGVuPzogc3RyaW5nO1xuICBwcml2YXRlIF9scGNPcmRlcj86IHN0cmluZztcbiAgcHJpdmF0ZSBfaXRlcmF0aW9ucz86IHN0cmluZztcbiAgcHJpdmF0ZSBfYWxwaGE/OiBudW1iZXI7XG4gIHByaXZhdGUgX3RocmVzaD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFdpZW5lciB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxXaWVuZXIuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZnJhbWVMZW4gPSBfdmFsdWUuZnJhbWVMZW47XG4gICAgdGhpcy5scGNPcmRlciA9IF92YWx1ZS5scGNPcmRlcjtcbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBfdmFsdWUuaXRlcmF0aW9ucztcbiAgICB0aGlzLmFscGhhID0gX3ZhbHVlLmFscGhhO1xuICAgIHRoaXMudGhyZXNoID0gX3ZhbHVlLnRocmVzaDtcbiAgICBXaWVuZXIucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBmcmFtZUxlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mcmFtZUxlbjtcbiAgfVxuICBzZXQgZnJhbWVMZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZyYW1lTGVuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxwY09yZGVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xwY09yZGVyO1xuICB9XG4gIHNldCBscGNPcmRlcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbHBjT3JkZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaXRlcmF0aW9ucygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pdGVyYXRpb25zO1xuICB9XG4gIHNldCBpdGVyYXRpb25zKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pdGVyYXRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFscGhhKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FscGhhO1xuICB9XG4gIHNldCBhbHBoYSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWxwaGEgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGhyZXNoKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaDtcbiAgfVxuICBzZXQgdGhyZXNoKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aHJlc2ggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBXaWVuZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogV2llbmVyLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZnJhbWVMZW46IHRoaXMuZnJhbWVMZW4sXG4gICAgICBscGNPcmRlcjogdGhpcy5scGNPcmRlcixcbiAgICAgIGl0ZXJhdGlvbnM6IHRoaXMuaXRlcmF0aW9ucyxcbiAgICAgIGFscGhhOiB0aGlzLmFscGhhLFxuICAgICAgdGhyZXNoOiB0aGlzLnRocmVzaFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFdpZW5lci5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZyYW1lTGVuOiB0aGlzLmZyYW1lTGVuLFxuICAgICAgbHBjT3JkZXI6IHRoaXMubHBjT3JkZXIsXG4gICAgICBpdGVyYXRpb25zOiB0aGlzLml0ZXJhdGlvbnMsXG4gICAgICBhbHBoYTogdGhpcy5hbHBoYSxcbiAgICAgIHRocmVzaDogdGhpcy50aHJlc2hcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFdpZW5lciB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgV2llbmVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBmcmFtZUxlbj86IHN0cmluZztcbiAgICBscGNPcmRlcj86IHN0cmluZztcbiAgICBpdGVyYXRpb25zPzogc3RyaW5nO1xuICAgIGFscGhhPzogbnVtYmVyO1xuICAgIHRocmVzaD86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBXaWVuZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGZyYW1lTGVuPzogc3RyaW5nO1xuICAgIGxwY09yZGVyPzogc3RyaW5nO1xuICAgIGl0ZXJhdGlvbnM/OiBzdHJpbmc7XG4gICAgYWxwaGE/OiBudW1iZXI7XG4gICAgdGhyZXNoPzogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnQycy5BcG9kaXphdGlvblxuICovXG5leHBvcnQgY2xhc3MgQXBvZGl6YXRpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28udDJzLkFwb2RpemF0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQXBvZGl6YXRpb24oKTtcbiAgICBBcG9kaXphdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFwb2RpemF0aW9uKSB7XG4gICAgX2luc3RhbmNlLmFwb2RpemF0aW9uU2VjcyA9IF9pbnN0YW5jZS5hcG9kaXphdGlvblNlY3MgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFwb2RpemF0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5hcG9kaXphdGlvblNlY3MgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQXBvZGl6YXRpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBcG9kaXphdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5hcG9kaXphdGlvblNlY3MpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgxLCBfaW5zdGFuY2UuYXBvZGl6YXRpb25TZWNzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcG9kaXphdGlvblNlY3M/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBBcG9kaXphdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBcG9kaXphdGlvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5hcG9kaXphdGlvblNlY3MgPSBfdmFsdWUuYXBvZGl6YXRpb25TZWNzO1xuICAgIEFwb2RpemF0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYXBvZGl6YXRpb25TZWNzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Fwb2RpemF0aW9uU2VjcztcbiAgfVxuICBzZXQgYXBvZGl6YXRpb25TZWNzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hcG9kaXphdGlvblNlY3MgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBcG9kaXphdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBcG9kaXphdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwb2RpemF0aW9uU2VjczogdGhpcy5hcG9kaXphdGlvblNlY3NcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBcG9kaXphdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwb2RpemF0aW9uU2VjczogdGhpcy5hcG9kaXphdGlvblNlY3NcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFwb2RpemF0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBcG9kaXphdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYXBvZGl6YXRpb25TZWNzPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEFwb2RpemF0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhcG9kaXphdGlvblNlY3M/OiBudW1iZXI7XG4gIH1cbn1cbiJdfQ==
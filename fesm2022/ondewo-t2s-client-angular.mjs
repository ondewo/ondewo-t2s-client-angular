import { uint8ArrayToBase64, GrpcMetadata, GrpcCallType } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
import { InjectionToken, Optional, Inject, Injectable } from '@angular/core';
import * as i1 from '@ngx-grpc/core';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY } from '@ngx-grpc/core';

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
var Pcm;
(function (Pcm) {
    Pcm[Pcm["PCM_16"] = 0] = "PCM_16";
    Pcm[Pcm["PCM_24"] = 1] = "PCM_24";
    Pcm[Pcm["PCM_32"] = 2] = "PCM_32";
    Pcm[Pcm["PCM_S8"] = 3] = "PCM_S8";
    Pcm[Pcm["PCM_U8"] = 4] = "PCM_U8";
    Pcm[Pcm["FLOAT"] = 5] = "FLOAT";
    Pcm[Pcm["DOUBLE"] = 6] = "DOUBLE";
})(Pcm || (Pcm = {}));
var AudioFormat;
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
class SynthesizeRequest {
    static id = 'ondewo.t2s.SynthesizeRequest';
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
    _text;
    _config;
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
/**
 * Message implementation for ondewo.t2s.BatchSynthesizeRequest
 */
class BatchSynthesizeRequest {
    static id = 'ondewo.t2s.BatchSynthesizeRequest';
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
    _batchRequest;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchSynthesizeRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.batchRequest = (_value.batchRequest || []).map(m => new SynthesizeRequest(m));
        BatchSynthesizeRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.StreamingSynthesizeRequest
 */
class StreamingSynthesizeRequest {
    static id = 'ondewo.t2s.StreamingSynthesizeRequest';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StreamingSynthesizeRequest();
        StreamingSynthesizeRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        StreamingSynthesizeRequest.refineValues(_instance);
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
    _text;
    _config;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingSynthesizeRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.text = _value.text;
        this.config = _value.config ? new RequestConfig(_value.config) : undefined;
        StreamingSynthesizeRequest.refineValues(this);
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
        StreamingSynthesizeRequest.serializeBinaryToWriter(this, writer);
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
/**
 * Message implementation for ondewo.t2s.BatchSynthesizeResponse
 */
class BatchSynthesizeResponse {
    static id = 'ondewo.t2s.BatchSynthesizeResponse';
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
    _batchResponse;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchSynthesizeResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.batchResponse = (_value.batchResponse || []).map(m => new SynthesizeResponse(m));
        BatchSynthesizeResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.RequestConfig
 */
class RequestConfig {
    static id = 'ondewo.t2s.RequestConfig';
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
                case 9:
                    _instance.t2sServiceConfig = new googleProtobuf001.Struct();
                    _reader.readMessage(_instance.t2sServiceConfig, googleProtobuf001.Struct.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.t2sCloudProviderConfig = new T2sCloudProviderConfig();
                    _reader.readMessage(_instance.t2sCloudProviderConfig, T2sCloudProviderConfig.deserializeBinaryFromReader);
                    break;
                case 11:
                    _instance.t2sNormalization = new T2SNormalization();
                    _reader.readMessage(_instance.t2sNormalization, T2SNormalization.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.wordToPhonemeMapping = new googleProtobuf001.Struct();
                    _reader.readMessage(_instance.wordToPhonemeMapping, googleProtobuf001.Struct.deserializeBinaryFromReader);
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
        if (_instance.t2sServiceConfig) {
            _writer.writeMessage(9, _instance.t2sServiceConfig, googleProtobuf001.Struct.serializeBinaryToWriter);
        }
        if (_instance.t2sCloudProviderConfig) {
            _writer.writeMessage(10, _instance.t2sCloudProviderConfig, T2sCloudProviderConfig.serializeBinaryToWriter);
        }
        if (_instance.t2sNormalization) {
            _writer.writeMessage(11, _instance.t2sNormalization, T2SNormalization.serializeBinaryToWriter);
        }
        if (_instance.wordToPhonemeMapping) {
            _writer.writeMessage(12, _instance.wordToPhonemeMapping, googleProtobuf001.Struct.serializeBinaryToWriter);
        }
    }
    _t2sPipelineId;
    _lengthScale;
    _noiseScale;
    _sampleRate;
    _pcm;
    _audioFormat;
    _useCache;
    _t2sServiceConfig;
    _t2sCloudProviderConfig;
    _t2sNormalization;
    _wordToPhonemeMapping;
    _oneofLengthScale = RequestConfig.OneofLengthScaleCase.none;
    _oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.none;
    _oneofSampleRate = RequestConfig.OneofSampleRateCase.none;
    _oneofPcm = RequestConfig.OneofPcmCase.none;
    _oneofAudioFormat = RequestConfig.OneofAudioFormatCase.none;
    _oneofUseCache = RequestConfig.OneofUseCacheCase.none;
    _oneofT2sNormalization = RequestConfig.OneofT2sNormalizationCase.none;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RequestConfig to deeply clone from
     */
    constructor(_value) {
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
    get t2sServiceConfig() {
        return this._t2sServiceConfig;
    }
    set t2sServiceConfig(value) {
        this._t2sServiceConfig = value;
    }
    get t2sCloudProviderConfig() {
        return this._t2sCloudProviderConfig;
    }
    set t2sCloudProviderConfig(value) {
        this._t2sCloudProviderConfig = value;
    }
    get t2sNormalization() {
        return this._t2sNormalization;
    }
    set t2sNormalization(value) {
        if (value !== undefined && value !== null) {
            this._oneofT2sNormalization =
                RequestConfig.OneofT2sNormalizationCase.t2sNormalization;
        }
        this._t2sNormalization = value;
    }
    get wordToPhonemeMapping() {
        return this._wordToPhonemeMapping;
    }
    set wordToPhonemeMapping(value) {
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
    toObject() {
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
    let OneofT2sNormalizationCase;
    (function (OneofT2sNormalizationCase) {
        OneofT2sNormalizationCase[OneofT2sNormalizationCase["none"] = 0] = "none";
        OneofT2sNormalizationCase[OneofT2sNormalizationCase["t2sNormalization"] = 1] = "t2sNormalization";
    })(OneofT2sNormalizationCase = RequestConfig.OneofT2sNormalizationCase || (RequestConfig.OneofT2sNormalizationCase = {}));
})(RequestConfig || (RequestConfig = {}));
/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfig
 */
class T2sCloudProviderConfig {
    static id = 'ondewo.t2s.T2sCloudProviderConfig';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sCloudProviderConfig();
        T2sCloudProviderConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.t2sCloudProviderConfigElevenlabs = new T2sCloudProviderConfigElevenLabs();
                    _reader.readMessage(_instance.t2sCloudProviderConfigElevenlabs, T2sCloudProviderConfigElevenLabs.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.t2sCloudProviderConfigGoogle = new T2sCloudProviderConfigGoogle();
                    _reader.readMessage(_instance.t2sCloudProviderConfigGoogle, T2sCloudProviderConfigGoogle.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.t2sCloudProviderConfigMicrosoft = new T2sCloudProviderConfigMicrosoft();
                    _reader.readMessage(_instance.t2sCloudProviderConfigMicrosoft, T2sCloudProviderConfigMicrosoft.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.t2sCloudProviderConfigElevenlabs) {
            _writer.writeMessage(1, _instance.t2sCloudProviderConfigElevenlabs, T2sCloudProviderConfigElevenLabs.serializeBinaryToWriter);
        }
        if (_instance.t2sCloudProviderConfigGoogle) {
            _writer.writeMessage(2, _instance.t2sCloudProviderConfigGoogle, T2sCloudProviderConfigGoogle.serializeBinaryToWriter);
        }
        if (_instance.t2sCloudProviderConfigMicrosoft) {
            _writer.writeMessage(3, _instance.t2sCloudProviderConfigMicrosoft, T2sCloudProviderConfigMicrosoft.serializeBinaryToWriter);
        }
    }
    _t2sCloudProviderConfigElevenlabs;
    _t2sCloudProviderConfigGoogle;
    _t2sCloudProviderConfigMicrosoft;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudProviderConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.t2sCloudProviderConfigElevenlabs = _value.t2sCloudProviderConfigElevenlabs
            ? new T2sCloudProviderConfigElevenLabs(_value.t2sCloudProviderConfigElevenlabs)
            : undefined;
        this.t2sCloudProviderConfigGoogle = _value.t2sCloudProviderConfigGoogle
            ? new T2sCloudProviderConfigGoogle(_value.t2sCloudProviderConfigGoogle)
            : undefined;
        this.t2sCloudProviderConfigMicrosoft = _value.t2sCloudProviderConfigMicrosoft
            ? new T2sCloudProviderConfigMicrosoft(_value.t2sCloudProviderConfigMicrosoft)
            : undefined;
        T2sCloudProviderConfig.refineValues(this);
    }
    get t2sCloudProviderConfigElevenlabs() {
        return this._t2sCloudProviderConfigElevenlabs;
    }
    set t2sCloudProviderConfigElevenlabs(value) {
        this._t2sCloudProviderConfigElevenlabs = value;
    }
    get t2sCloudProviderConfigGoogle() {
        return this._t2sCloudProviderConfigGoogle;
    }
    set t2sCloudProviderConfigGoogle(value) {
        this._t2sCloudProviderConfigGoogle = value;
    }
    get t2sCloudProviderConfigMicrosoft() {
        return this._t2sCloudProviderConfigMicrosoft;
    }
    set t2sCloudProviderConfigMicrosoft(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfigElevenLabs
 */
class T2sCloudProviderConfigElevenLabs {
    static id = 'ondewo.t2s.T2sCloudProviderConfigElevenLabs';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sCloudProviderConfigElevenLabs();
        T2sCloudProviderConfigElevenLabs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    _stability;
    _similarityBoost;
    _style;
    _useSpeakerBoost;
    _applyTextNormalization;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudProviderConfigElevenLabs to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.stability = _value.stability;
        this.similarityBoost = _value.similarityBoost;
        this.style = _value.style;
        this.useSpeakerBoost = _value.useSpeakerBoost;
        this.applyTextNormalization = _value.applyTextNormalization;
        T2sCloudProviderConfigElevenLabs.refineValues(this);
    }
    get stability() {
        return this._stability;
    }
    set stability(value) {
        this._stability = value;
    }
    get similarityBoost() {
        return this._similarityBoost;
    }
    set similarityBoost(value) {
        this._similarityBoost = value;
    }
    get style() {
        return this._style;
    }
    set style(value) {
        this._style = value;
    }
    get useSpeakerBoost() {
        return this._useSpeakerBoost;
    }
    set useSpeakerBoost(value) {
        this._useSpeakerBoost = value;
    }
    get applyTextNormalization() {
        return this._applyTextNormalization;
    }
    set applyTextNormalization(value) {
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
    toObject() {
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
    options) {
        return {
            stability: this.stability,
            similarityBoost: this.similarityBoost,
            style: this.style,
            useSpeakerBoost: this.useSpeakerBoost,
            applyTextNormalization: this.applyTextNormalization
        };
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfigMicrosoft
 */
class T2sCloudProviderConfigMicrosoft {
    static id = 'ondewo.t2s.T2sCloudProviderConfigMicrosoft';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sCloudProviderConfigMicrosoft();
        T2sCloudProviderConfigMicrosoft.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.useDefaultSpeaker = _instance.useDefaultSpeaker || false;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.useDefaultSpeaker) {
            _writer.writeBool(1, _instance.useDefaultSpeaker);
        }
    }
    _useDefaultSpeaker;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudProviderConfigMicrosoft to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.useDefaultSpeaker = _value.useDefaultSpeaker;
        T2sCloudProviderConfigMicrosoft.refineValues(this);
    }
    get useDefaultSpeaker() {
        return this._useDefaultSpeaker;
    }
    set useDefaultSpeaker(value) {
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
    toObject() {
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
    options) {
        return {
            useDefaultSpeaker: this.useDefaultSpeaker
        };
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudProviderConfigGoogle
 */
class T2sCloudProviderConfigGoogle {
    static id = 'ondewo.t2s.T2sCloudProviderConfigGoogle';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sCloudProviderConfigGoogle();
        T2sCloudProviderConfigGoogle.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.speakingRate = _instance.speakingRate || 0;
        _instance.volumeGainDb = _instance.volumeGainDb || 0;
        _instance.pitch = _instance.pitch || 0;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    _speakingRate;
    _volumeGainDb;
    _pitch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudProviderConfigGoogle to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.speakingRate = _value.speakingRate;
        this.volumeGainDb = _value.volumeGainDb;
        this.pitch = _value.pitch;
        T2sCloudProviderConfigGoogle.refineValues(this);
    }
    get speakingRate() {
        return this._speakingRate;
    }
    set speakingRate(value) {
        this._speakingRate = value;
    }
    get volumeGainDb() {
        return this._volumeGainDb;
    }
    set volumeGainDb(value) {
        this._volumeGainDb = value;
    }
    get pitch() {
        return this._pitch;
    }
    set pitch(value) {
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
    toObject() {
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
    options) {
        return {
            speakingRate: this.speakingRate,
            volumeGainDb: this.volumeGainDb,
            pitch: this.pitch
        };
    }
}
/**
 * Message implementation for ondewo.t2s.SynthesizeResponse
 */
class SynthesizeResponse {
    static id = 'ondewo.t2s.SynthesizeResponse';
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
        _instance.sampleRate = _instance.sampleRate || 0;
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
        if (_instance.sampleRate) {
            _writer.writeFloat(8, _instance.sampleRate);
        }
    }
    _audioUuid;
    _audio;
    _generationTime;
    _audioLength;
    _text;
    _config;
    _normalizedText;
    _sampleRate;
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
        this.sampleRate = _value.sampleRate;
        SynthesizeResponse.refineValues(this);
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
    get sampleRate() {
        return this._sampleRate;
    }
    set sampleRate(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.StreamingSynthesizeResponse
 */
class StreamingSynthesizeResponse {
    static id = 'ondewo.t2s.StreamingSynthesizeResponse';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StreamingSynthesizeResponse();
        StreamingSynthesizeResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        _instance.sampleRate = _instance.sampleRate || 0;
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
        if (_instance.sampleRate) {
            _writer.writeFloat(8, _instance.sampleRate);
        }
    }
    _audioUuid;
    _audio;
    _generationTime;
    _audioLength;
    _text;
    _config;
    _normalizedText;
    _sampleRate;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingSynthesizeResponse to deeply clone from
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
        this.sampleRate = _value.sampleRate;
        StreamingSynthesizeResponse.refineValues(this);
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
    get sampleRate() {
        return this._sampleRate;
    }
    set sampleRate(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.NormalizeTextRequest
 */
class NormalizeTextRequest {
    static id = 'ondewo.t2s.NormalizeTextRequest';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new NormalizeTextRequest();
        NormalizeTextRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.t2sPipelineId = _instance.t2sPipelineId || '';
        _instance.text = _instance.text || '';
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.t2sPipelineId) {
            _writer.writeString(1, _instance.t2sPipelineId);
        }
        if (_instance.text) {
            _writer.writeString(2, _instance.text);
        }
    }
    _t2sPipelineId;
    _text;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NormalizeTextRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.t2sPipelineId = _value.t2sPipelineId;
        this.text = _value.text;
        NormalizeTextRequest.refineValues(this);
    }
    get t2sPipelineId() {
        return this._t2sPipelineId;
    }
    set t2sPipelineId(value) {
        this._t2sPipelineId = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
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
    toObject() {
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
    options) {
        return {
            t2sPipelineId: this.t2sPipelineId,
            text: this.text
        };
    }
}
/**
 * Message implementation for ondewo.t2s.NormalizeTextResponse
 */
class NormalizeTextResponse {
    static id = 'ondewo.t2s.NormalizeTextResponse';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new NormalizeTextResponse();
        NormalizeTextResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.normalizedText) {
            _writer.writeString(1, _instance.normalizedText);
        }
    }
    _normalizedText;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NormalizeTextResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.normalizedText = _value.normalizedText;
        NormalizeTextResponse.refineValues(this);
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
        NormalizeTextResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
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
    options) {
        return {
            normalizedText: this.normalizedText
        };
    }
}
/**
 * Message implementation for ondewo.t2s.T2SGetServiceInfoResponse
 */
class T2SGetServiceInfoResponse {
    static id = 'ondewo.t2s.T2SGetServiceInfoResponse';
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
    _version;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SGetServiceInfoResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.version = _value.version;
        T2SGetServiceInfoResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.ListT2sPipelinesRequest
 */
class ListT2sPipelinesRequest {
    static id = 'ondewo.t2s.ListT2sPipelinesRequest';
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
    _languages;
    _speakerSexes;
    _pipelineOwners;
    _speakerNames;
    _domains;
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
/**
 * Message implementation for ondewo.t2s.ListT2sPipelinesResponse
 */
class ListT2sPipelinesResponse {
    static id = 'ondewo.t2s.ListT2sPipelinesResponse';
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
    _pipelines;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sPipelinesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pipelines = (_value.pipelines || []).map(m => new Text2SpeechConfig(m));
        ListT2sPipelinesResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.ListT2sLanguagesRequest
 */
class ListT2sLanguagesRequest {
    static id = 'ondewo.t2s.ListT2sLanguagesRequest';
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
    _speakerSexes;
    _pipelineOwners;
    _speakerNames;
    _domains;
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
/**
 * Message implementation for ondewo.t2s.ListT2sLanguagesResponse
 */
class ListT2sLanguagesResponse {
    static id = 'ondewo.t2s.ListT2sLanguagesResponse';
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
    _languages;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sLanguagesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languages = (_value.languages || []).slice();
        ListT2sLanguagesResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.ListT2sDomainsRequest
 */
class ListT2sDomainsRequest {
    static id = 'ondewo.t2s.ListT2sDomainsRequest';
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
    _speakerSexes;
    _pipelineOwners;
    _speakerNames;
    _languages;
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
/**
 * Message implementation for ondewo.t2s.ListT2sDomainsResponse
 */
class ListT2sDomainsResponse {
    static id = 'ondewo.t2s.ListT2sDomainsResponse';
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
    _domains;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sDomainsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.domains = (_value.domains || []).slice();
        ListT2sDomainsResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.ListT2sNormalizationPipelinesRequest
 */
class ListT2sNormalizationPipelinesRequest {
    static id = 'ondewo.t2s.ListT2sNormalizationPipelinesRequest';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListT2sNormalizationPipelinesRequest();
        ListT2sNormalizationPipelinesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.language = _instance.language || '';
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.language) {
            _writer.writeString(1, _instance.language);
        }
    }
    _language;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sNormalizationPipelinesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        ListT2sNormalizationPipelinesRequest.refineValues(this);
    }
    get language() {
        return this._language;
    }
    set language(value) {
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
    toObject() {
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
    options) {
        return {
            language: this.language
        };
    }
}
/**
 * Message implementation for ondewo.t2s.ListT2sNormalizationPipelinesResponse
 */
class ListT2sNormalizationPipelinesResponse {
    static id = 'ondewo.t2s.ListT2sNormalizationPipelinesResponse';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListT2sNormalizationPipelinesResponse();
        ListT2sNormalizationPipelinesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.t2sNormalizationPipelines =
            _instance.t2sNormalizationPipelines || [];
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
                    (_instance.t2sNormalizationPipelines =
                        _instance.t2sNormalizationPipelines || []).push(_reader.readString());
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.t2sNormalizationPipelines &&
            _instance.t2sNormalizationPipelines.length) {
            _writer.writeRepeatedString(1, _instance.t2sNormalizationPipelines);
        }
    }
    _t2sNormalizationPipelines;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListT2sNormalizationPipelinesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.t2sNormalizationPipelines = (_value.t2sNormalizationPipelines || []).slice();
        ListT2sNormalizationPipelinesResponse.refineValues(this);
    }
    get t2sNormalizationPipelines() {
        return this._t2sNormalizationPipelines;
    }
    set t2sNormalizationPipelines(value) {
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
    toObject() {
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
    options) {
        return {
            t2sNormalizationPipelines: (this.t2sNormalizationPipelines || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.t2s.T2sPipelineId
 */
class T2sPipelineId {
    static id = 'ondewo.t2s.T2sPipelineId';
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
    _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sPipelineId to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        T2sPipelineId.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.Text2SpeechConfig
 */
class Text2SpeechConfig {
    static id = 'ondewo.t2s.Text2SpeechConfig';
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
    _id;
    _description;
    _active;
    _inference;
    _normalization;
    _postprocessing;
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
/**
 * Message implementation for ondewo.t2s.T2SDescription
 */
class T2SDescription {
    static id = 'ondewo.t2s.T2SDescription';
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
    _language;
    _speakerSex;
    _pipelineOwner;
    _comments;
    _speakerName;
    _domain;
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
/**
 * Message implementation for ondewo.t2s.T2SInference
 */
class T2SInference {
    static id = 'ondewo.t2s.T2SInference';
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
        _instance.singleInference = _instance.singleInference || undefined;
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
                    _instance.singleInference = new SingleInference();
                    _reader.readMessage(_instance.singleInference, SingleInference.deserializeBinaryFromReader);
                    break;
                case 4:
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
        if (_instance.singleInference) {
            _writer.writeMessage(3, _instance.singleInference, SingleInference.serializeBinaryToWriter);
        }
        if (_instance.caching) {
            _writer.writeMessage(4, _instance.caching, Caching.serializeBinaryToWriter);
        }
    }
    _type;
    _compositeInference;
    _singleInference;
    _caching;
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
        this.singleInference = _value.singleInference
            ? new SingleInference(_value.singleInference)
            : undefined;
        this.caching = _value.caching ? new Caching(_value.caching) : undefined;
        T2SInference.refineValues(this);
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
    get singleInference() {
        return this._singleInference;
    }
    set singleInference(value) {
        this._singleInference = value;
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.CompositeInference
 */
class CompositeInference {
    static id = 'ondewo.t2s.CompositeInference';
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
    _text2mel;
    _mel2audio;
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
/**
 * Message implementation for ondewo.t2s.SingleInference
 */
class SingleInference {
    static id = 'ondewo.t2s.SingleInference';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SingleInference();
        SingleInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.text2audio = _instance.text2audio || undefined;
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
                    _instance.text2audio = new Text2Audio();
                    _reader.readMessage(_instance.text2audio, Text2Audio.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.text2audio) {
            _writer.writeMessage(1, _instance.text2audio, Text2Audio.serializeBinaryToWriter);
        }
    }
    _text2audio;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SingleInference to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.text2audio = _value.text2audio
            ? new Text2Audio(_value.text2audio)
            : undefined;
        SingleInference.refineValues(this);
    }
    get text2audio() {
        return this._text2audio;
    }
    set text2audio(value) {
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
    toObject() {
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
    options) {
        return {
            text2audio: this.text2audio
                ? this.text2audio.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.t2s.Text2Mel
 */
class Text2Mel {
    static id = 'ondewo.t2s.Text2Mel';
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
    _type;
    _glowTts;
    _glowTtsTriton;
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
/**
 * Message implementation for ondewo.t2s.Text2Audio
 */
class Text2Audio {
    static id = 'ondewo.t2s.Text2Audio';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Text2Audio();
        Text2Audio.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    _reader.readMessage(_instance.vitsTriton, VitsTriton.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.t2sCloudServiceElevenlabs = new T2sCloudServiceElevenLabs();
                    _reader.readMessage(_instance.t2sCloudServiceElevenlabs, T2sCloudServiceElevenLabs.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.t2sCloudServiceAmazon = new T2sCloudServiceAmazon();
                    _reader.readMessage(_instance.t2sCloudServiceAmazon, T2sCloudServiceAmazon.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.t2sCloudServiceGoogle = new T2sCloudServiceGoogle();
                    _reader.readMessage(_instance.t2sCloudServiceGoogle, T2sCloudServiceGoogle.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.t2sCloudServiceMicrosoft = new T2sCloudServiceMicrosoft();
                    _reader.readMessage(_instance.t2sCloudServiceMicrosoft, T2sCloudServiceMicrosoft.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.type) {
            _writer.writeString(1, _instance.type);
        }
        if (_instance.vits) {
            _writer.writeMessage(2, _instance.vits, Vits.serializeBinaryToWriter);
        }
        if (_instance.vitsTriton) {
            _writer.writeMessage(3, _instance.vitsTriton, VitsTriton.serializeBinaryToWriter);
        }
        if (_instance.t2sCloudServiceElevenlabs) {
            _writer.writeMessage(4, _instance.t2sCloudServiceElevenlabs, T2sCloudServiceElevenLabs.serializeBinaryToWriter);
        }
        if (_instance.t2sCloudServiceAmazon) {
            _writer.writeMessage(5, _instance.t2sCloudServiceAmazon, T2sCloudServiceAmazon.serializeBinaryToWriter);
        }
        if (_instance.t2sCloudServiceGoogle) {
            _writer.writeMessage(6, _instance.t2sCloudServiceGoogle, T2sCloudServiceGoogle.serializeBinaryToWriter);
        }
        if (_instance.t2sCloudServiceMicrosoft) {
            _writer.writeMessage(7, _instance.t2sCloudServiceMicrosoft, T2sCloudServiceMicrosoft.serializeBinaryToWriter);
        }
    }
    _type;
    _vits;
    _vitsTriton;
    _t2sCloudServiceElevenlabs;
    _t2sCloudServiceAmazon;
    _t2sCloudServiceGoogle;
    _t2sCloudServiceMicrosoft;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text2Audio to deeply clone from
     */
    constructor(_value) {
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
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get vits() {
        return this._vits;
    }
    set vits(value) {
        this._vits = value;
    }
    get vitsTriton() {
        return this._vitsTriton;
    }
    set vitsTriton(value) {
        this._vitsTriton = value;
    }
    get t2sCloudServiceElevenlabs() {
        return this._t2sCloudServiceElevenlabs;
    }
    set t2sCloudServiceElevenlabs(value) {
        this._t2sCloudServiceElevenlabs = value;
    }
    get t2sCloudServiceAmazon() {
        return this._t2sCloudServiceAmazon;
    }
    set t2sCloudServiceAmazon(value) {
        this._t2sCloudServiceAmazon = value;
    }
    get t2sCloudServiceGoogle() {
        return this._t2sCloudServiceGoogle;
    }
    set t2sCloudServiceGoogle(value) {
        this._t2sCloudServiceGoogle = value;
    }
    get t2sCloudServiceMicrosoft() {
        return this._t2sCloudServiceMicrosoft;
    }
    set t2sCloudServiceMicrosoft(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.GlowTTS
 */
class GlowTTS {
    static id = 'ondewo.t2s.GlowTTS';
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
    _batchSize;
    _useGpu;
    _lengthScale;
    _noiseScale;
    _path;
    _cleaners;
    _paramConfigPath;
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
/**
 * Message implementation for ondewo.t2s.GlowTTSTriton
 */
class GlowTTSTriton {
    static id = 'ondewo.t2s.GlowTTSTriton';
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
        _instance.tritonServerHost = _instance.tritonServerHost || '';
        _instance.tritonServerPort = _instance.tritonServerPort || '0';
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
        if (_instance.tritonServerHost) {
            _writer.writeString(8, _instance.tritonServerHost);
        }
        if (_instance.tritonServerPort) {
            _writer.writeInt64String(9, _instance.tritonServerPort);
        }
    }
    _batchSize;
    _lengthScale;
    _noiseScale;
    _cleaners;
    _maxTextLength;
    _paramConfigPath;
    _tritonModelName;
    _tritonServerHost;
    _tritonServerPort;
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
        this.tritonServerHost = _value.tritonServerHost;
        this.tritonServerPort = _value.tritonServerPort;
        GlowTTSTriton.refineValues(this);
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
    get tritonServerHost() {
        return this._tritonServerHost;
    }
    set tritonServerHost(value) {
        this._tritonServerHost = value;
    }
    get tritonServerPort() {
        return this._tritonServerPort;
    }
    set tritonServerPort(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.Vits
 */
class Vits {
    static id = 'ondewo.t2s.Vits';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Vits();
        Vits.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        Vits.refineValues(_instance);
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
    _batchSize;
    _useGpu;
    _lengthScale;
    _noiseScale;
    _path;
    _cleaners;
    _paramConfigPath;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Vits to deeply clone from
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
        Vits.refineValues(this);
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
        Vits.serializeBinaryToWriter(this, writer);
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
/**
 * Message implementation for ondewo.t2s.VitsTriton
 */
class VitsTriton {
    static id = 'ondewo.t2s.VitsTriton';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VitsTriton();
        VitsTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        _instance.tritonServerHost = _instance.tritonServerHost || '';
        _instance.tritonServerPort = _instance.tritonServerPort || '0';
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
        if (_instance.tritonServerHost) {
            _writer.writeString(8, _instance.tritonServerHost);
        }
        if (_instance.tritonServerPort) {
            _writer.writeInt64String(9, _instance.tritonServerPort);
        }
    }
    _batchSize;
    _lengthScale;
    _noiseScale;
    _cleaners;
    _maxTextLength;
    _paramConfigPath;
    _tritonModelName;
    _tritonServerHost;
    _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VitsTriton to deeply clone from
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
        this.tritonServerHost = _value.tritonServerHost;
        this.tritonServerPort = _value.tritonServerPort;
        VitsTriton.refineValues(this);
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
    get tritonServerHost() {
        return this._tritonServerHost;
    }
    set tritonServerHost(value) {
        this._tritonServerHost = value;
    }
    get tritonServerPort() {
        return this._tritonServerPort;
    }
    set tritonServerPort(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.T2sCloudServiceElevenLabs
 */
class T2sCloudServiceElevenLabs {
    static id = 'ondewo.t2s.T2sCloudServiceElevenLabs';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sCloudServiceElevenLabs();
        T2sCloudServiceElevenLabs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
                    _reader.readMessage(_instance.voiceSettings, VoiceSettings.deserializeBinaryFromReader);
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
    static serializeBinaryToWriter(_instance, _writer) {
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
            _writer.writeMessage(4, _instance.voiceSettings, VoiceSettings.serializeBinaryToWriter);
        }
        if (_instance.applyTextNormalization) {
            _writer.writeString(5, _instance.applyTextNormalization);
        }
    }
    _languageCode;
    _modelId;
    _voiceId;
    _voiceSettings;
    _applyTextNormalization;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudServiceElevenLabs to deeply clone from
     */
    constructor(_value) {
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
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get modelId() {
        return this._modelId;
    }
    set modelId(value) {
        this._modelId = value;
    }
    get voiceId() {
        return this._voiceId;
    }
    set voiceId(value) {
        this._voiceId = value;
    }
    get voiceSettings() {
        return this._voiceSettings;
    }
    set voiceSettings(value) {
        this._voiceSettings = value;
    }
    get applyTextNormalization() {
        return this._applyTextNormalization;
    }
    set applyTextNormalization(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.VoiceSettings
 */
class VoiceSettings {
    static id = 'ondewo.t2s.VoiceSettings';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VoiceSettings();
        VoiceSettings.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    _stability;
    _similarityBoost;
    _style;
    _useSpeakerBoost;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoiceSettings to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.stability = _value.stability;
        this.similarityBoost = _value.similarityBoost;
        this.style = _value.style;
        this.useSpeakerBoost = _value.useSpeakerBoost;
        VoiceSettings.refineValues(this);
    }
    get stability() {
        return this._stability;
    }
    set stability(value) {
        this._stability = value;
    }
    get similarityBoost() {
        return this._similarityBoost;
    }
    set similarityBoost(value) {
        this._similarityBoost = value;
    }
    get style() {
        return this._style;
    }
    set style(value) {
        this._style = value;
    }
    get useSpeakerBoost() {
        return this._useSpeakerBoost;
    }
    set useSpeakerBoost(value) {
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
    toObject() {
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
    options) {
        return {
            stability: this.stability,
            similarityBoost: this.similarityBoost,
            style: this.style,
            useSpeakerBoost: this.useSpeakerBoost
        };
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudServiceAmazon
 */
class T2sCloudServiceAmazon {
    static id = 'ondewo.t2s.T2sCloudServiceAmazon';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sCloudServiceAmazon();
        T2sCloudServiceAmazon.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.voiceId = _instance.voiceId || '';
        _instance.modelId = _instance.modelId || '';
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.voiceId) {
            _writer.writeString(1, _instance.voiceId);
        }
        if (_instance.modelId) {
            _writer.writeString(2, _instance.modelId);
        }
    }
    _voiceId;
    _modelId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudServiceAmazon to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.voiceId = _value.voiceId;
        this.modelId = _value.modelId;
        T2sCloudServiceAmazon.refineValues(this);
    }
    get voiceId() {
        return this._voiceId;
    }
    set voiceId(value) {
        this._voiceId = value;
    }
    get modelId() {
        return this._modelId;
    }
    set modelId(value) {
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
    toObject() {
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
    options) {
        return {
            voiceId: this.voiceId,
            modelId: this.modelId
        };
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudServiceGoogle
 */
class T2sCloudServiceGoogle {
    static id = 'ondewo.t2s.T2sCloudServiceGoogle';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sCloudServiceGoogle();
        T2sCloudServiceGoogle.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    _voiceId;
    _speakingRate;
    _volumeGainDb;
    _pitch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudServiceGoogle to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.voiceId = _value.voiceId;
        this.speakingRate = _value.speakingRate;
        this.volumeGainDb = _value.volumeGainDb;
        this.pitch = _value.pitch;
        T2sCloudServiceGoogle.refineValues(this);
    }
    get voiceId() {
        return this._voiceId;
    }
    set voiceId(value) {
        this._voiceId = value;
    }
    get speakingRate() {
        return this._speakingRate;
    }
    set speakingRate(value) {
        this._speakingRate = value;
    }
    get volumeGainDb() {
        return this._volumeGainDb;
    }
    set volumeGainDb(value) {
        this._volumeGainDb = value;
    }
    get pitch() {
        return this._pitch;
    }
    set pitch(value) {
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
    toObject() {
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
    options) {
        return {
            voiceId: this.voiceId,
            speakingRate: this.speakingRate,
            volumeGainDb: this.volumeGainDb,
            pitch: this.pitch
        };
    }
}
/**
 * Message implementation for ondewo.t2s.T2sCloudServiceMicrosoft
 */
class T2sCloudServiceMicrosoft {
    static id = 'ondewo.t2s.T2sCloudServiceMicrosoft';
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new T2sCloudServiceMicrosoft();
        T2sCloudServiceMicrosoft.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.voiceId = _instance.voiceId || '';
        _instance.useDefaultSpeaker = _instance.useDefaultSpeaker || false;
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
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.voiceId) {
            _writer.writeString(1, _instance.voiceId);
        }
        if (_instance.useDefaultSpeaker) {
            _writer.writeBool(2, _instance.useDefaultSpeaker);
        }
    }
    _voiceId;
    _useDefaultSpeaker;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCloudServiceMicrosoft to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.voiceId = _value.voiceId;
        this.useDefaultSpeaker = _value.useDefaultSpeaker;
        T2sCloudServiceMicrosoft.refineValues(this);
    }
    get voiceId() {
        return this._voiceId;
    }
    set voiceId(value) {
        this._voiceId = value;
    }
    get useDefaultSpeaker() {
        return this._useDefaultSpeaker;
    }
    set useDefaultSpeaker(value) {
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
    toObject() {
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
    options) {
        return {
            voiceId: this.voiceId,
            useDefaultSpeaker: this.useDefaultSpeaker
        };
    }
}
/**
 * Message implementation for ondewo.t2s.Mel2Audio
 */
class Mel2Audio {
    static id = 'ondewo.t2s.Mel2Audio';
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
    _type;
    _mbMelganTriton;
    _hifiGan;
    _hifiGanTriton;
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
/**
 * Message implementation for ondewo.t2s.HiFiGan
 */
class HiFiGan {
    static id = 'ondewo.t2s.HiFiGan';
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
    _useGpu;
    _batchSize;
    _configPath;
    _modelPath;
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
/**
 * Message implementation for ondewo.t2s.HiFiGanTriton
 */
class HiFiGanTriton {
    static id = 'ondewo.t2s.HiFiGanTriton';
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
        _instance.tritonServerHost = _instance.tritonServerHost || '';
        _instance.tritonServerPort = _instance.tritonServerPort || '0';
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
    static serializeBinaryToWriter(_instance, _writer) {
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
    _configPath;
    _tritonModelName;
    _tritonServerHost;
    _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HiFiGanTriton to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.configPath = _value.configPath;
        this.tritonModelName = _value.tritonModelName;
        this.tritonServerHost = _value.tritonServerHost;
        this.tritonServerPort = _value.tritonServerPort;
        HiFiGanTriton.refineValues(this);
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
    get tritonServerHost() {
        return this._tritonServerHost;
    }
    set tritonServerHost(value) {
        this._tritonServerHost = value;
    }
    get tritonServerPort() {
        return this._tritonServerPort;
    }
    set tritonServerPort(value) {
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
    toObject() {
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
    options) {
        return {
            configPath: this.configPath,
            tritonModelName: this.tritonModelName,
            tritonServerHost: this.tritonServerHost,
            tritonServerPort: this.tritonServerPort
        };
    }
}
/**
 * Message implementation for ondewo.t2s.MbMelganTriton
 */
class MbMelganTriton {
    static id = 'ondewo.t2s.MbMelganTriton';
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
        _instance.tritonServerHost = _instance.tritonServerHost || '';
        _instance.tritonServerPort = _instance.tritonServerPort || '0';
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
        if (_instance.tritonServerHost) {
            _writer.writeString(4, _instance.tritonServerHost);
        }
        if (_instance.tritonServerPort) {
            _writer.writeInt64String(5, _instance.tritonServerPort);
        }
    }
    _configPath;
    _statsPath;
    _tritonModelName;
    _tritonServerHost;
    _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MbMelganTriton to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.configPath = _value.configPath;
        this.statsPath = _value.statsPath;
        this.tritonModelName = _value.tritonModelName;
        this.tritonServerHost = _value.tritonServerHost;
        this.tritonServerPort = _value.tritonServerPort;
        MbMelganTriton.refineValues(this);
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
    get tritonServerHost() {
        return this._tritonServerHost;
    }
    set tritonServerHost(value) {
        this._tritonServerHost = value;
    }
    get tritonServerPort() {
        return this._tritonServerPort;
    }
    set tritonServerPort(value) {
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
    toObject() {
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
    options) {
        return {
            configPath: this.configPath,
            statsPath: this.statsPath,
            tritonModelName: this.tritonModelName,
            tritonServerHost: this.tritonServerHost,
            tritonServerPort: this.tritonServerPort
        };
    }
}
/**
 * Message implementation for ondewo.t2s.Caching
 */
class Caching {
    static id = 'ondewo.t2s.Caching';
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
    _active;
    _memoryCacheMaxSize;
    _samplingRate;
    _loadCache;
    _saveCache;
    _cacheSaveDir;
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
/**
 * Message implementation for ondewo.t2s.T2SNormalization
 */
class T2SNormalization {
    static id = 'ondewo.t2s.T2SNormalization';
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
    _language;
    _pipeline;
    _customPhonemizerId;
    _customLengthScales;
    _arpabetMapping;
    _numericMapping;
    _callsignsMapping;
    _phonemeCorrectionMapping;
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
        this.arpabetMapping = _value.arpabetMapping;
        this.numericMapping = _value.numericMapping;
        this.callsignsMapping = _value.callsignsMapping;
        this.phonemeCorrectionMapping = _value.phonemeCorrectionMapping;
        T2SNormalization.refineValues(this);
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
    get arpabetMapping() {
        return this._arpabetMapping;
    }
    set arpabetMapping(value) {
        this._arpabetMapping = value;
    }
    get numericMapping() {
        return this._numericMapping;
    }
    set numericMapping(value) {
        this._numericMapping = value;
    }
    get callsignsMapping() {
        return this._callsignsMapping;
    }
    set callsignsMapping(value) {
        this._callsignsMapping = value;
    }
    get phonemeCorrectionMapping() {
        return this._phonemeCorrectionMapping;
    }
    set phonemeCorrectionMapping(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.Postprocessing
 */
class Postprocessing {
    static id = 'ondewo.t2s.Postprocessing';
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
    _silenceSecs;
    _pipeline;
    _logmmse;
    _wiener;
    _apodization;
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
/**
 * Message implementation for ondewo.t2s.Logmnse
 */
class Logmnse {
    static id = 'ondewo.t2s.Logmnse';
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
    _initialNoise;
    _windowSize;
    _noiseThreshold;
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
/**
 * Message implementation for ondewo.t2s.Wiener
 */
class Wiener {
    static id = 'ondewo.t2s.Wiener';
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
    _frameLen;
    _lpcOrder;
    _iterations;
    _alpha;
    _thresh;
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
/**
 * Message implementation for ondewo.t2s.Apodization
 */
class Apodization {
    static id = 'ondewo.t2s.Apodization';
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
    _apodizationSecs;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Apodization to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.apodizationSecs = _value.apodizationSecs;
        Apodization.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.T2SCustomLengthScales
 */
class T2SCustomLengthScales {
    static id = 'ondewo.t2s.T2SCustomLengthScales';
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
        _instance.callsignLong = _instance.callsignLong || 0;
        _instance.callsignShort = _instance.callsignShort || 0;
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
        if (_instance.callsignLong) {
            _writer.writeFloat(7, _instance.callsignLong);
        }
        if (_instance.callsignShort) {
            _writer.writeFloat(8, _instance.callsignShort);
        }
    }
    _text;
    _email;
    _url;
    _phone;
    _spell;
    _spellWithNames;
    _callsignLong;
    _callsignShort;
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
        this.callsignLong = _value.callsignLong;
        this.callsignShort = _value.callsignShort;
        T2SCustomLengthScales.refineValues(this);
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
    get callsignLong() {
        return this._callsignLong;
    }
    set callsignLong(value) {
        this._callsignLong = value;
    }
    get callsignShort() {
        return this._callsignShort;
    }
    set callsignShort(value) {
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
    toObject() {
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
    options) {
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
/**
 * Message implementation for ondewo.t2s.PhonemizerId
 */
class PhonemizerId {
    static id = 'ondewo.t2s.PhonemizerId';
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
    _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PhonemizerId to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        PhonemizerId.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.CustomPhonemizerProto
 */
class CustomPhonemizerProto {
    static id = 'ondewo.t2s.CustomPhonemizerProto';
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
    _id;
    _maps;
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
/**
 * Message implementation for ondewo.t2s.Map
 */
class Map {
    static id = 'ondewo.t2s.Map';
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
    _word;
    _phonemeGroups;
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
/**
 * Message implementation for ondewo.t2s.ListCustomPhonemizerResponse
 */
class ListCustomPhonemizerResponse {
    static id = 'ondewo.t2s.ListCustomPhonemizerResponse';
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
    _phonemizers;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCustomPhonemizerResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.phonemizers = (_value.phonemizers || []).map(m => new CustomPhonemizerProto(m));
        ListCustomPhonemizerResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.ListCustomPhonemizerRequest
 */
class ListCustomPhonemizerRequest {
    static id = 'ondewo.t2s.ListCustomPhonemizerRequest';
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
    _pipelineIds;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCustomPhonemizerRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pipelineIds = (_value.pipelineIds || []).slice();
        ListCustomPhonemizerRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.t2s.UpdateCustomPhonemizerRequest
 */
class UpdateCustomPhonemizerRequest {
    static id = 'ondewo.t2s.UpdateCustomPhonemizerRequest';
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
    _id;
    _updateMethod;
    _maps;
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
class CreateCustomPhonemizerRequest {
    static id = 'ondewo.t2s.CreateCustomPhonemizerRequest';
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
    _prefix;
    _maps;
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

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
/**
 * Specific GrpcClientSettings for Text2Speech.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_TEXT2_SPEECH_CLIENT_SETTINGS = new InjectionToken('GRPC_TEXT2_SPEECH_CLIENT_SETTINGS');

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
/**
 * Service client implementation for ondewo.t2s.Text2Speech
 */
class Text2SpeechClient {
    handler;
    client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw = {
        /**
         * Unary call: /ondewo.t2s.Text2Speech/Synthesize
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SynthesizeResponse>>
         */
        synthesize: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/Synthesize',
                requestData,
                requestMetadata,
                requestClass: SynthesizeRequest,
                responseClass: SynthesizeResponse
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/BatchSynthesize
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchSynthesizeResponse>>
         */
        batchSynthesize: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/BatchSynthesize',
                requestData,
                requestMetadata,
                requestClass: BatchSynthesizeRequest,
                responseClass: BatchSynthesizeResponse
            });
        },
        /**
         * Bidirectional streaming: /ondewo.t2s.Text2Speech/StreamingSynthesize
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StreamingSynthesizeResponse>>
         */
        streamingSynthesize: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.bidiStream,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/StreamingSynthesize',
                requestData,
                requestMetadata,
                requestClass: StreamingSynthesizeRequest,
                responseClass: StreamingSynthesizeResponse
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/NormalizeText
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.NormalizeTextResponse>>
         */
        normalizeText: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/NormalizeText',
                requestData,
                requestMetadata,
                requestClass: NormalizeTextRequest,
                responseClass: NormalizeTextResponse
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/GetT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
         */
        getT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/GetT2sPipeline',
                requestData,
                requestMetadata,
                requestClass: T2sPipelineId,
                responseClass: Text2SpeechConfig
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/CreateT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.T2sPipelineId>>
         */
        createT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
                requestData,
                requestMetadata,
                requestClass: Text2SpeechConfig,
                responseClass: T2sPipelineId
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/DeleteT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        deleteT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
                requestData,
                requestMetadata,
                requestClass: T2sPipelineId,
                responseClass: googleProtobuf001.Empty
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/UpdateT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        updateT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
                requestData,
                requestMetadata,
                requestClass: Text2SpeechConfig,
                responseClass: googleProtobuf001.Empty
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListT2sPipelines
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
         */
        listT2sPipelines: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/ListT2sPipelines',
                requestData,
                requestMetadata,
                requestClass: ListT2sPipelinesRequest,
                responseClass: ListT2sPipelinesResponse
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListT2sLanguages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListT2sLanguagesResponse>>
         */
        listT2sLanguages: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/ListT2sLanguages',
                requestData,
                requestMetadata,
                requestClass: ListT2sLanguagesRequest,
                responseClass: ListT2sLanguagesResponse
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListT2sDomains
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListT2sDomainsResponse>>
         */
        listT2sDomains: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/ListT2sDomains',
                requestData,
                requestMetadata,
                requestClass: ListT2sDomainsRequest,
                responseClass: ListT2sDomainsResponse
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListT2sNormalizationPipelinesResponse>>
         */
        listT2sNormalizationPipelines: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines',
                requestData,
                requestMetadata,
                requestClass: ListT2sNormalizationPipelinesRequest,
                responseClass: ListT2sNormalizationPipelinesResponse
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/GetServiceInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.T2SGetServiceInfoResponse>>
         */
        getServiceInfo: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/GetServiceInfo',
                requestData,
                requestMetadata,
                requestClass: googleProtobuf001.Empty,
                responseClass: T2SGetServiceInfoResponse
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/GetCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
         */
        getCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/GetCustomPhonemizer',
                requestData,
                requestMetadata,
                requestClass: PhonemizerId,
                responseClass: CustomPhonemizerProto
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/CreateCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PhonemizerId>>
         */
        createCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/CreateCustomPhonemizer',
                requestData,
                requestMetadata,
                requestClass: CreateCustomPhonemizerRequest,
                responseClass: PhonemizerId
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/DeleteCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        deleteCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/DeleteCustomPhonemizer',
                requestData,
                requestMetadata,
                requestClass: PhonemizerId,
                responseClass: googleProtobuf001.Empty
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/UpdateCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
         */
        updateCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/UpdateCustomPhonemizer',
                requestData,
                requestMetadata,
                requestClass: UpdateCustomPhonemizerRequest,
                responseClass: CustomPhonemizerProto
            });
        },
        /**
         * Unary call: /ondewo.t2s.Text2Speech/ListCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>
         */
        listCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/ListCustomPhonemizer',
                requestData,
                requestMetadata,
                requestClass: ListCustomPhonemizerRequest,
                responseClass: ListCustomPhonemizerResponse
            });
        }
    };
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.t2s.Text2Speech', settings);
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/Synthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SynthesizeResponse>
     */
    synthesize(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .synthesize(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/BatchSynthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchSynthesizeResponse>
     */
    batchSynthesize(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchSynthesize(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Bidirectional streaming @/ondewo.t2s.Text2Speech/StreamingSynthesize
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StreamingSynthesizeResponse>
     */
    streamingSynthesize(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .streamingSynthesize(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/NormalizeText
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.NormalizeTextResponse>
     */
    normalizeText(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .normalizeText(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/GetT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Text2SpeechConfig>
     */
    getT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getT2sPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/CreateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.T2sPipelineId>
     */
    createT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createT2sPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/DeleteT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteT2sPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/UpdateT2sPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    updateT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateT2sPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/ListT2sPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sPipelinesResponse>
     */
    listT2sPipelines(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listT2sPipelines(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/ListT2sLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sLanguagesResponse>
     */
    listT2sLanguages(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listT2sLanguages(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/ListT2sDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sDomainsResponse>
     */
    listT2sDomains(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listT2sDomains(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListT2sNormalizationPipelinesResponse>
     */
    listT2sNormalizationPipelines(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listT2sNormalizationPipelines(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/GetServiceInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.T2SGetServiceInfoResponse>
     */
    getServiceInfo(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getServiceInfo(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.t2s.Text2Speech/GetCustomPhonemizer
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
     * Unary call @/ondewo.t2s.Text2Speech/CreateCustomPhonemizer
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
     * Unary call @/ondewo.t2s.Text2Speech/DeleteCustomPhonemizer
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
     * Unary call @/ondewo.t2s.Text2Speech/UpdateCustomPhonemizer
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
     * Unary call @/ondewo.t2s.Text2Speech/ListCustomPhonemizer
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: Text2SpeechClient, deps: [{ token: GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: Text2SpeechClient, providedIn: 'any' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: Text2SpeechClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_TEXT2_SPEECH_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Apodization, AudioFormat, BatchSynthesizeRequest, BatchSynthesizeResponse, Caching, CompositeInference, CreateCustomPhonemizerRequest, CustomPhonemizerProto, GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, GlowTTS, GlowTTSTriton, HiFiGan, HiFiGanTriton, ListCustomPhonemizerRequest, ListCustomPhonemizerResponse, ListT2sDomainsRequest, ListT2sDomainsResponse, ListT2sLanguagesRequest, ListT2sLanguagesResponse, ListT2sNormalizationPipelinesRequest, ListT2sNormalizationPipelinesResponse, ListT2sPipelinesRequest, ListT2sPipelinesResponse, Logmnse, Map, MbMelganTriton, Mel2Audio, NormalizeTextRequest, NormalizeTextResponse, Pcm, PhonemizerId, Postprocessing, RequestConfig, SingleInference, StreamingSynthesizeRequest, StreamingSynthesizeResponse, SynthesizeRequest, SynthesizeResponse, T2SCustomLengthScales, T2SDescription, T2SGetServiceInfoResponse, T2SInference, T2SNormalization, T2sCloudProviderConfig, T2sCloudProviderConfigElevenLabs, T2sCloudProviderConfigGoogle, T2sCloudProviderConfigMicrosoft, T2sCloudServiceAmazon, T2sCloudServiceElevenLabs, T2sCloudServiceGoogle, T2sCloudServiceMicrosoft, T2sPipelineId, Text2Audio, Text2Mel, Text2SpeechClient, Text2SpeechConfig, UpdateCustomPhonemizerRequest, Vits, VitsTriton, VoiceSettings, Wiener };
//# sourceMappingURL=ondewo-t2s-client-angular.mjs.map

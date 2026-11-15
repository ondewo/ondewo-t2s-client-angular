import { GrpcCallType, GrpcMetadata, uint8ArrayToBase64 } from "@ngx-grpc/common";
import { BinaryReader, BinaryWriter } from "google-protobuf";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";
import * as i0 from "@angular/core";
import { Inject, Injectable, InjectionToken, Optional, inject, makeEnvironmentProviders } from "@angular/core";
import * as i1$1 from "@ngx-grpc/core";
import { GRPC_CLIENT_FACTORY, GRPC_INTERCEPTORS, takeMessages, throwStatusErrors } from "@ngx-grpc/core";
import * as i1 from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, firstValueFrom, from, isObservable, switchMap } from "rxjs";
var Pcm;
(function(Pcm) {
	Pcm[Pcm["PCM_16"] = 0] = "PCM_16";
	Pcm[Pcm["PCM_24"] = 1] = "PCM_24";
	Pcm[Pcm["PCM_32"] = 2] = "PCM_32";
	Pcm[Pcm["PCM_S8"] = 3] = "PCM_S8";
	Pcm[Pcm["PCM_U8"] = 4] = "PCM_U8";
	Pcm[Pcm["FLOAT"] = 5] = "FLOAT";
	Pcm[Pcm["DOUBLE"] = 6] = "DOUBLE";
})(Pcm || (Pcm = {}));
var AudioFormat;
(function(AudioFormat) {
	AudioFormat[AudioFormat["wav"] = 0] = "wav";
	AudioFormat[AudioFormat["flac"] = 1] = "flac";
	AudioFormat[AudioFormat["caf"] = 2] = "caf";
	AudioFormat[AudioFormat["mp3"] = 3] = "mp3";
	AudioFormat[AudioFormat["aac"] = 4] = "aac";
	AudioFormat[AudioFormat["ogg"] = 5] = "ogg";
	AudioFormat[AudioFormat["wma"] = 6] = "wma";
})(AudioFormat || (AudioFormat = {}));
var SynthesizeRequest = class SynthesizeRequest {
	static id = "ondewo.t2s.SynthesizeRequest";
	static deserializeBinary(bytes) {
		const instance = new SynthesizeRequest();
		SynthesizeRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.text = _instance.text || "";
		_instance.config = _instance.config || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.text = _reader.readString();
					break;
				case 2:
					_instance.config = new RequestConfig();
					_reader.readMessage(_instance.config, RequestConfig.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		SynthesizeRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.text) _writer.writeString(1, _instance.text);
		if (_instance.config) _writer.writeMessage(2, _instance.config, RequestConfig.serializeBinaryToWriter);
	}
	_text;
	_config;
	constructor(_value) {
		_value = _value || {};
		this.text = _value.text;
		this.config = _value.config ? new RequestConfig(_value.config) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		SynthesizeRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			text: this.text,
			config: this.config ? this.config.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			text: this.text,
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
};
var BatchSynthesizeRequest = class BatchSynthesizeRequest {
	static id = "ondewo.t2s.BatchSynthesizeRequest";
	static deserializeBinary(bytes) {
		const instance = new BatchSynthesizeRequest();
		BatchSynthesizeRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.batchRequest = _instance.batchRequest || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new SynthesizeRequest();
					_reader.readMessage(messageInitializer1, SynthesizeRequest.deserializeBinaryFromReader);
					(_instance.batchRequest = _instance.batchRequest || []).push(messageInitializer1);
					break;
				default: _reader.skipField();
			}
		}
		BatchSynthesizeRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.batchRequest && _instance.batchRequest.length) _writer.writeRepeatedMessage(1, _instance.batchRequest, SynthesizeRequest.serializeBinaryToWriter);
	}
	_batchRequest;
	constructor(_value) {
		_value = _value || {};
		this.batchRequest = (_value.batchRequest || []).map((m) => new SynthesizeRequest(m));
		BatchSynthesizeRequest.refineValues(this);
	}
	get batchRequest() {
		return this._batchRequest;
	}
	set batchRequest(value) {
		this._batchRequest = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		BatchSynthesizeRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { batchRequest: (this.batchRequest || []).map((m) => m.toObject()) };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { batchRequest: (this.batchRequest || []).map((m) => m.toProtobufJSON(options)) };
	}
};
var StreamingSynthesizeRequest = class StreamingSynthesizeRequest {
	static id = "ondewo.t2s.StreamingSynthesizeRequest";
	static deserializeBinary(bytes) {
		const instance = new StreamingSynthesizeRequest();
		StreamingSynthesizeRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.text = _instance.text || "";
		_instance.config = _instance.config || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.text = _reader.readString();
					break;
				case 2:
					_instance.config = new RequestConfig();
					_reader.readMessage(_instance.config, RequestConfig.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		StreamingSynthesizeRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.text) _writer.writeString(1, _instance.text);
		if (_instance.config) _writer.writeMessage(2, _instance.config, RequestConfig.serializeBinaryToWriter);
	}
	_text;
	_config;
	constructor(_value) {
		_value = _value || {};
		this.text = _value.text;
		this.config = _value.config ? new RequestConfig(_value.config) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingSynthesizeRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			text: this.text,
			config: this.config ? this.config.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			text: this.text,
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
};
var BatchSynthesizeResponse = class BatchSynthesizeResponse {
	static id = "ondewo.t2s.BatchSynthesizeResponse";
	static deserializeBinary(bytes) {
		const instance = new BatchSynthesizeResponse();
		BatchSynthesizeResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.batchResponse = _instance.batchResponse || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new SynthesizeResponse();
					_reader.readMessage(messageInitializer1, SynthesizeResponse.deserializeBinaryFromReader);
					(_instance.batchResponse = _instance.batchResponse || []).push(messageInitializer1);
					break;
				default: _reader.skipField();
			}
		}
		BatchSynthesizeResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.batchResponse && _instance.batchResponse.length) _writer.writeRepeatedMessage(1, _instance.batchResponse, SynthesizeResponse.serializeBinaryToWriter);
	}
	_batchResponse;
	constructor(_value) {
		_value = _value || {};
		this.batchResponse = (_value.batchResponse || []).map((m) => new SynthesizeResponse(m));
		BatchSynthesizeResponse.refineValues(this);
	}
	get batchResponse() {
		return this._batchResponse;
	}
	set batchResponse(value) {
		this._batchResponse = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		BatchSynthesizeResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { batchResponse: (this.batchResponse || []).map((m) => m.toObject()) };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { batchResponse: (this.batchResponse || []).map((m) => m.toProtobufJSON(options)) };
	}
};
var RequestConfig = class RequestConfig {
	static id = "ondewo.t2s.RequestConfig";
	static deserializeBinary(bytes) {
		const instance = new RequestConfig();
		RequestConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.t2sPipelineId = _instance.t2sPipelineId || "";
		_instance.t2sServiceConfig = _instance.t2sServiceConfig || void 0;
		_instance.t2sCloudProviderConfig = _instance.t2sCloudProviderConfig || void 0;
		_instance.wordToPhonemeMapping = _instance.wordToPhonemeMapping || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				case 13:
					_instance.instruction = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		RequestConfig.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.t2sPipelineId) _writer.writeString(1, _instance.t2sPipelineId);
		if (_instance.lengthScale || _instance.lengthScale === 0) _writer.writeFloat(2, _instance.lengthScale);
		if (_instance.noiseScale || _instance.noiseScale === 0) _writer.writeFloat(3, _instance.noiseScale);
		if (_instance.sampleRate || _instance.sampleRate === 0) _writer.writeInt32(4, _instance.sampleRate);
		if (_instance.pcm || _instance.pcm === 0) _writer.writeEnum(5, _instance.pcm);
		if (_instance.audioFormat || _instance.audioFormat === 0) _writer.writeEnum(6, _instance.audioFormat);
		if (_instance.useCache || _instance.useCache === false) _writer.writeBool(7, _instance.useCache);
		if (_instance.t2sServiceConfig) _writer.writeMessage(9, _instance.t2sServiceConfig, googleProtobuf001.Struct.serializeBinaryToWriter);
		if (_instance.t2sCloudProviderConfig) _writer.writeMessage(10, _instance.t2sCloudProviderConfig, T2sCloudProviderConfig.serializeBinaryToWriter);
		if (_instance.t2sNormalization) _writer.writeMessage(11, _instance.t2sNormalization, T2SNormalization.serializeBinaryToWriter);
		if (_instance.wordToPhonemeMapping) _writer.writeMessage(12, _instance.wordToPhonemeMapping, googleProtobuf001.Struct.serializeBinaryToWriter);
		if (_instance.instruction !== void 0 && _instance.instruction !== null) _writer.writeString(13, _instance.instruction);
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
	_instruction;
	_oneofLengthScale = RequestConfig.OneofLengthScaleCase.none;
	_oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.none;
	_oneofSampleRate = RequestConfig.OneofSampleRateCase.none;
	_oneofPcm = RequestConfig.OneofPcmCase.none;
	_oneofAudioFormat = RequestConfig.OneofAudioFormatCase.none;
	_oneofUseCache = RequestConfig.OneofUseCacheCase.none;
	_oneofT2sNormalization = RequestConfig.OneofT2sNormalizationCase.none;
	constructor(_value) {
		_value = _value || {};
		this.t2sPipelineId = _value.t2sPipelineId;
		this.lengthScale = _value.lengthScale;
		this.noiseScale = _value.noiseScale;
		this.sampleRate = _value.sampleRate;
		this.pcm = _value.pcm;
		this.audioFormat = _value.audioFormat;
		this.useCache = _value.useCache;
		this.t2sServiceConfig = _value.t2sServiceConfig ? new googleProtobuf001.Struct(_value.t2sServiceConfig) : void 0;
		this.t2sCloudProviderConfig = _value.t2sCloudProviderConfig ? new T2sCloudProviderConfig(_value.t2sCloudProviderConfig) : void 0;
		this.t2sNormalization = _value.t2sNormalization ? new T2SNormalization(_value.t2sNormalization) : void 0;
		this.wordToPhonemeMapping = _value.wordToPhonemeMapping ? new googleProtobuf001.Struct(_value.wordToPhonemeMapping) : void 0;
		this.instruction = _value.instruction;
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
		if (value !== void 0 && value !== null) this._oneofLengthScale = RequestConfig.OneofLengthScaleCase.lengthScale;
		this._lengthScale = value;
	}
	get noiseScale() {
		return this._noiseScale;
	}
	set noiseScale(value) {
		if (value !== void 0 && value !== null) this._oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.noiseScale;
		this._noiseScale = value;
	}
	get sampleRate() {
		return this._sampleRate;
	}
	set sampleRate(value) {
		if (value !== void 0 && value !== null) this._oneofSampleRate = RequestConfig.OneofSampleRateCase.sampleRate;
		this._sampleRate = value;
	}
	get pcm() {
		return this._pcm;
	}
	set pcm(value) {
		if (value !== void 0 && value !== null) this._oneofPcm = RequestConfig.OneofPcmCase.pcm;
		this._pcm = value;
	}
	get audioFormat() {
		return this._audioFormat;
	}
	set audioFormat(value) {
		if (value !== void 0 && value !== null) this._oneofAudioFormat = RequestConfig.OneofAudioFormatCase.audioFormat;
		this._audioFormat = value;
	}
	get useCache() {
		return this._useCache;
	}
	set useCache(value) {
		if (value !== void 0 && value !== null) this._oneofUseCache = RequestConfig.OneofUseCacheCase.useCache;
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
		if (value !== void 0 && value !== null) this._oneofT2sNormalization = RequestConfig.OneofT2sNormalizationCase.t2sNormalization;
		this._t2sNormalization = value;
	}
	get wordToPhonemeMapping() {
		return this._wordToPhonemeMapping;
	}
	set wordToPhonemeMapping(value) {
		this._wordToPhonemeMapping = value;
	}
	get instruction() {
		return this._instruction;
	}
	set instruction(value) {
		this._instruction = value;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		RequestConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			t2sPipelineId: this.t2sPipelineId,
			lengthScale: this.lengthScale,
			noiseScale: this.noiseScale,
			sampleRate: this.sampleRate,
			pcm: this.pcm,
			audioFormat: this.audioFormat,
			useCache: this.useCache,
			t2sServiceConfig: this.t2sServiceConfig ? this.t2sServiceConfig.toObject() : void 0,
			t2sCloudProviderConfig: this.t2sCloudProviderConfig ? this.t2sCloudProviderConfig.toObject() : void 0,
			t2sNormalization: this.t2sNormalization ? this.t2sNormalization.toObject() : void 0,
			wordToPhonemeMapping: this.wordToPhonemeMapping ? this.wordToPhonemeMapping.toObject() : void 0,
			instruction: this.instruction
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			t2sPipelineId: this.t2sPipelineId,
			lengthScale: this.lengthScale === null || this.lengthScale === void 0 ? null : this.lengthScale,
			noiseScale: this.noiseScale === null || this.noiseScale === void 0 ? null : this.noiseScale,
			sampleRate: this.sampleRate === null || this.sampleRate === void 0 ? null : this.sampleRate,
			pcm: this.pcm === void 0 ? null : Pcm[this.pcm === null || this.pcm === void 0 ? 0 : this.pcm],
			audioFormat: this.audioFormat === void 0 ? null : AudioFormat[this.audioFormat === null || this.audioFormat === void 0 ? 0 : this.audioFormat],
			useCache: this.useCache,
			t2sServiceConfig: this.t2sServiceConfig ? this.t2sServiceConfig.toProtobufJSON(options) : null,
			t2sCloudProviderConfig: this.t2sCloudProviderConfig ? this.t2sCloudProviderConfig.toProtobufJSON(options) : null,
			t2sNormalization: this.t2sNormalization ? this.t2sNormalization.toProtobufJSON(options) : null,
			wordToPhonemeMapping: this.wordToPhonemeMapping ? this.wordToPhonemeMapping.toProtobufJSON(options) : null,
			instruction: this.instruction
		};
	}
};
(function(RequestConfig) {
	(function(OneofLengthScaleCase) {
		OneofLengthScaleCase[OneofLengthScaleCase["none"] = 0] = "none";
		OneofLengthScaleCase[OneofLengthScaleCase["lengthScale"] = 1] = "lengthScale";
	})(RequestConfig.OneofLengthScaleCase || (RequestConfig.OneofLengthScaleCase = {}));
	(function(OneofNoiseScaleCase) {
		OneofNoiseScaleCase[OneofNoiseScaleCase["none"] = 0] = "none";
		OneofNoiseScaleCase[OneofNoiseScaleCase["noiseScale"] = 1] = "noiseScale";
	})(RequestConfig.OneofNoiseScaleCase || (RequestConfig.OneofNoiseScaleCase = {}));
	(function(OneofSampleRateCase) {
		OneofSampleRateCase[OneofSampleRateCase["none"] = 0] = "none";
		OneofSampleRateCase[OneofSampleRateCase["sampleRate"] = 1] = "sampleRate";
	})(RequestConfig.OneofSampleRateCase || (RequestConfig.OneofSampleRateCase = {}));
	(function(OneofPcmCase) {
		OneofPcmCase[OneofPcmCase["none"] = 0] = "none";
		OneofPcmCase[OneofPcmCase["pcm"] = 1] = "pcm";
	})(RequestConfig.OneofPcmCase || (RequestConfig.OneofPcmCase = {}));
	(function(OneofAudioFormatCase) {
		OneofAudioFormatCase[OneofAudioFormatCase["none"] = 0] = "none";
		OneofAudioFormatCase[OneofAudioFormatCase["audioFormat"] = 1] = "audioFormat";
	})(RequestConfig.OneofAudioFormatCase || (RequestConfig.OneofAudioFormatCase = {}));
	(function(OneofUseCacheCase) {
		OneofUseCacheCase[OneofUseCacheCase["none"] = 0] = "none";
		OneofUseCacheCase[OneofUseCacheCase["useCache"] = 1] = "useCache";
	})(RequestConfig.OneofUseCacheCase || (RequestConfig.OneofUseCacheCase = {}));
	(function(OneofT2sNormalizationCase) {
		OneofT2sNormalizationCase[OneofT2sNormalizationCase["none"] = 0] = "none";
		OneofT2sNormalizationCase[OneofT2sNormalizationCase["t2sNormalization"] = 1] = "t2sNormalization";
	})(RequestConfig.OneofT2sNormalizationCase || (RequestConfig.OneofT2sNormalizationCase = {}));
})(RequestConfig || (RequestConfig = {}));
var T2sCloudProviderConfig = class T2sCloudProviderConfig {
	static id = "ondewo.t2s.T2sCloudProviderConfig";
	static deserializeBinary(bytes) {
		const instance = new T2sCloudProviderConfig();
		T2sCloudProviderConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.t2sCloudProviderConfigElevenlabs = _instance.t2sCloudProviderConfigElevenlabs || void 0;
		_instance.t2sCloudProviderConfigGoogle = _instance.t2sCloudProviderConfigGoogle || void 0;
		_instance.t2sCloudProviderConfigMicrosoft = _instance.t2sCloudProviderConfigMicrosoft || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		T2sCloudProviderConfig.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.t2sCloudProviderConfigElevenlabs) _writer.writeMessage(1, _instance.t2sCloudProviderConfigElevenlabs, T2sCloudProviderConfigElevenLabs.serializeBinaryToWriter);
		if (_instance.t2sCloudProviderConfigGoogle) _writer.writeMessage(2, _instance.t2sCloudProviderConfigGoogle, T2sCloudProviderConfigGoogle.serializeBinaryToWriter);
		if (_instance.t2sCloudProviderConfigMicrosoft) _writer.writeMessage(3, _instance.t2sCloudProviderConfigMicrosoft, T2sCloudProviderConfigMicrosoft.serializeBinaryToWriter);
	}
	_t2sCloudProviderConfigElevenlabs;
	_t2sCloudProviderConfigGoogle;
	_t2sCloudProviderConfigMicrosoft;
	constructor(_value) {
		_value = _value || {};
		this.t2sCloudProviderConfigElevenlabs = _value.t2sCloudProviderConfigElevenlabs ? new T2sCloudProviderConfigElevenLabs(_value.t2sCloudProviderConfigElevenlabs) : void 0;
		this.t2sCloudProviderConfigGoogle = _value.t2sCloudProviderConfigGoogle ? new T2sCloudProviderConfigGoogle(_value.t2sCloudProviderConfigGoogle) : void 0;
		this.t2sCloudProviderConfigMicrosoft = _value.t2sCloudProviderConfigMicrosoft ? new T2sCloudProviderConfigMicrosoft(_value.t2sCloudProviderConfigMicrosoft) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sCloudProviderConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			t2sCloudProviderConfigElevenlabs: this.t2sCloudProviderConfigElevenlabs ? this.t2sCloudProviderConfigElevenlabs.toObject() : void 0,
			t2sCloudProviderConfigGoogle: this.t2sCloudProviderConfigGoogle ? this.t2sCloudProviderConfigGoogle.toObject() : void 0,
			t2sCloudProviderConfigMicrosoft: this.t2sCloudProviderConfigMicrosoft ? this.t2sCloudProviderConfigMicrosoft.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			t2sCloudProviderConfigElevenlabs: this.t2sCloudProviderConfigElevenlabs ? this.t2sCloudProviderConfigElevenlabs.toProtobufJSON(options) : null,
			t2sCloudProviderConfigGoogle: this.t2sCloudProviderConfigGoogle ? this.t2sCloudProviderConfigGoogle.toProtobufJSON(options) : null,
			t2sCloudProviderConfigMicrosoft: this.t2sCloudProviderConfigMicrosoft ? this.t2sCloudProviderConfigMicrosoft.toProtobufJSON(options) : null
		};
	}
};
var T2sCloudProviderConfigElevenLabs = class T2sCloudProviderConfigElevenLabs {
	static id = "ondewo.t2s.T2sCloudProviderConfigElevenLabs";
	static deserializeBinary(bytes) {
		const instance = new T2sCloudProviderConfigElevenLabs();
		T2sCloudProviderConfigElevenLabs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.stability = _instance.stability || 0;
		_instance.similarityBoost = _instance.similarityBoost || 0;
		_instance.style = _instance.style || 0;
		_instance.useSpeakerBoost = _instance.useSpeakerBoost || false;
		_instance.applyTextNormalization = _instance.applyTextNormalization || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		T2sCloudProviderConfigElevenLabs.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.stability) _writer.writeFloat(1, _instance.stability);
		if (_instance.similarityBoost) _writer.writeFloat(2, _instance.similarityBoost);
		if (_instance.style) _writer.writeFloat(3, _instance.style);
		if (_instance.useSpeakerBoost) _writer.writeBool(4, _instance.useSpeakerBoost);
		if (_instance.applyTextNormalization) _writer.writeString(5, _instance.applyTextNormalization);
	}
	_stability;
	_similarityBoost;
	_style;
	_useSpeakerBoost;
	_applyTextNormalization;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sCloudProviderConfigElevenLabs.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			stability: this.stability,
			similarityBoost: this.similarityBoost,
			style: this.style,
			useSpeakerBoost: this.useSpeakerBoost,
			applyTextNormalization: this.applyTextNormalization
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			stability: this.stability,
			similarityBoost: this.similarityBoost,
			style: this.style,
			useSpeakerBoost: this.useSpeakerBoost,
			applyTextNormalization: this.applyTextNormalization
		};
	}
};
var T2sCloudProviderConfigMicrosoft = class T2sCloudProviderConfigMicrosoft {
	static id = "ondewo.t2s.T2sCloudProviderConfigMicrosoft";
	static deserializeBinary(bytes) {
		const instance = new T2sCloudProviderConfigMicrosoft();
		T2sCloudProviderConfigMicrosoft.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.useDefaultSpeaker = _instance.useDefaultSpeaker || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.useDefaultSpeaker = _reader.readBool();
					break;
				default: _reader.skipField();
			}
		}
		T2sCloudProviderConfigMicrosoft.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.useDefaultSpeaker) _writer.writeBool(1, _instance.useDefaultSpeaker);
	}
	_useDefaultSpeaker;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sCloudProviderConfigMicrosoft.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { useDefaultSpeaker: this.useDefaultSpeaker };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { useDefaultSpeaker: this.useDefaultSpeaker };
	}
};
var T2sCloudProviderConfigGoogle = class T2sCloudProviderConfigGoogle {
	static id = "ondewo.t2s.T2sCloudProviderConfigGoogle";
	static deserializeBinary(bytes) {
		const instance = new T2sCloudProviderConfigGoogle();
		T2sCloudProviderConfigGoogle.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.speakingRate = _instance.speakingRate || 0;
		_instance.volumeGainDb = _instance.volumeGainDb || 0;
		_instance.pitch = _instance.pitch || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		T2sCloudProviderConfigGoogle.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.speakingRate) _writer.writeFloat(1, _instance.speakingRate);
		if (_instance.volumeGainDb) _writer.writeFloat(2, _instance.volumeGainDb);
		if (_instance.pitch) _writer.writeFloat(3, _instance.pitch);
	}
	_speakingRate;
	_volumeGainDb;
	_pitch;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sCloudProviderConfigGoogle.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			speakingRate: this.speakingRate,
			volumeGainDb: this.volumeGainDb,
			pitch: this.pitch
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			speakingRate: this.speakingRate,
			volumeGainDb: this.volumeGainDb,
			pitch: this.pitch
		};
	}
};
var SynthesizeResponse = class SynthesizeResponse {
	static id = "ondewo.t2s.SynthesizeResponse";
	static deserializeBinary(bytes) {
		const instance = new SynthesizeResponse();
		SynthesizeResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.audioUuid = _instance.audioUuid || "";
		_instance.audio = _instance.audio || /* @__PURE__ */ new Uint8Array();
		_instance.generationTime = _instance.generationTime || 0;
		_instance.audioLength = _instance.audioLength || 0;
		_instance.text = _instance.text || "";
		_instance.config = _instance.config || void 0;
		_instance.normalizedText = _instance.normalizedText || "";
		_instance.sampleRate = _instance.sampleRate || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
					_reader.readMessage(_instance.config, RequestConfig.deserializeBinaryFromReader);
					break;
				case 7:
					_instance.normalizedText = _reader.readString();
					break;
				case 8:
					_instance.sampleRate = _reader.readFloat();
					break;
				default: _reader.skipField();
			}
		}
		SynthesizeResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.audioUuid) _writer.writeString(1, _instance.audioUuid);
		if (_instance.audio && _instance.audio.length) _writer.writeBytes(2, _instance.audio);
		if (_instance.generationTime) _writer.writeFloat(3, _instance.generationTime);
		if (_instance.audioLength) _writer.writeFloat(4, _instance.audioLength);
		if (_instance.text) _writer.writeString(5, _instance.text);
		if (_instance.config) _writer.writeMessage(6, _instance.config, RequestConfig.serializeBinaryToWriter);
		if (_instance.normalizedText) _writer.writeString(7, _instance.normalizedText);
		if (_instance.sampleRate) _writer.writeFloat(8, _instance.sampleRate);
	}
	_audioUuid;
	_audio;
	_generationTime;
	_audioLength;
	_text;
	_config;
	_normalizedText;
	_sampleRate;
	constructor(_value) {
		_value = _value || {};
		this.audioUuid = _value.audioUuid;
		this.audio = _value.audio;
		this.generationTime = _value.generationTime;
		this.audioLength = _value.audioLength;
		this.text = _value.text;
		this.config = _value.config ? new RequestConfig(_value.config) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		SynthesizeResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			audioUuid: this.audioUuid,
			audio: this.audio ? this.audio.subarray(0) : /* @__PURE__ */ new Uint8Array(),
			generationTime: this.generationTime,
			audioLength: this.audioLength,
			text: this.text,
			config: this.config ? this.config.toObject() : void 0,
			normalizedText: this.normalizedText,
			sampleRate: this.sampleRate
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			audioUuid: this.audioUuid,
			audio: this.audio ? uint8ArrayToBase64(this.audio) : "",
			generationTime: this.generationTime,
			audioLength: this.audioLength,
			text: this.text,
			config: this.config ? this.config.toProtobufJSON(options) : null,
			normalizedText: this.normalizedText,
			sampleRate: this.sampleRate
		};
	}
};
var StreamingSynthesizeResponse = class StreamingSynthesizeResponse {
	static id = "ondewo.t2s.StreamingSynthesizeResponse";
	static deserializeBinary(bytes) {
		const instance = new StreamingSynthesizeResponse();
		StreamingSynthesizeResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.audioUuid = _instance.audioUuid || "";
		_instance.audio = _instance.audio || /* @__PURE__ */ new Uint8Array();
		_instance.generationTime = _instance.generationTime || 0;
		_instance.audioLength = _instance.audioLength || 0;
		_instance.text = _instance.text || "";
		_instance.config = _instance.config || void 0;
		_instance.normalizedText = _instance.normalizedText || "";
		_instance.sampleRate = _instance.sampleRate || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
					_reader.readMessage(_instance.config, RequestConfig.deserializeBinaryFromReader);
					break;
				case 7:
					_instance.normalizedText = _reader.readString();
					break;
				case 8:
					_instance.sampleRate = _reader.readFloat();
					break;
				default: _reader.skipField();
			}
		}
		StreamingSynthesizeResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.audioUuid) _writer.writeString(1, _instance.audioUuid);
		if (_instance.audio && _instance.audio.length) _writer.writeBytes(2, _instance.audio);
		if (_instance.generationTime) _writer.writeFloat(3, _instance.generationTime);
		if (_instance.audioLength) _writer.writeFloat(4, _instance.audioLength);
		if (_instance.text) _writer.writeString(5, _instance.text);
		if (_instance.config) _writer.writeMessage(6, _instance.config, RequestConfig.serializeBinaryToWriter);
		if (_instance.normalizedText) _writer.writeString(7, _instance.normalizedText);
		if (_instance.sampleRate) _writer.writeFloat(8, _instance.sampleRate);
	}
	_audioUuid;
	_audio;
	_generationTime;
	_audioLength;
	_text;
	_config;
	_normalizedText;
	_sampleRate;
	constructor(_value) {
		_value = _value || {};
		this.audioUuid = _value.audioUuid;
		this.audio = _value.audio;
		this.generationTime = _value.generationTime;
		this.audioLength = _value.audioLength;
		this.text = _value.text;
		this.config = _value.config ? new RequestConfig(_value.config) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingSynthesizeResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			audioUuid: this.audioUuid,
			audio: this.audio ? this.audio.subarray(0) : /* @__PURE__ */ new Uint8Array(),
			generationTime: this.generationTime,
			audioLength: this.audioLength,
			text: this.text,
			config: this.config ? this.config.toObject() : void 0,
			normalizedText: this.normalizedText,
			sampleRate: this.sampleRate
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			audioUuid: this.audioUuid,
			audio: this.audio ? uint8ArrayToBase64(this.audio) : "",
			generationTime: this.generationTime,
			audioLength: this.audioLength,
			text: this.text,
			config: this.config ? this.config.toProtobufJSON(options) : null,
			normalizedText: this.normalizedText,
			sampleRate: this.sampleRate
		};
	}
};
var NormalizeTextRequest = class NormalizeTextRequest {
	static id = "ondewo.t2s.NormalizeTextRequest";
	static deserializeBinary(bytes) {
		const instance = new NormalizeTextRequest();
		NormalizeTextRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.t2sPipelineId = _instance.t2sPipelineId || "";
		_instance.text = _instance.text || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.t2sPipelineId = _reader.readString();
					break;
				case 2:
					_instance.text = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		NormalizeTextRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.t2sPipelineId) _writer.writeString(1, _instance.t2sPipelineId);
		if (_instance.text) _writer.writeString(2, _instance.text);
	}
	_t2sPipelineId;
	_text;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		NormalizeTextRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			t2sPipelineId: this.t2sPipelineId,
			text: this.text
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			t2sPipelineId: this.t2sPipelineId,
			text: this.text
		};
	}
};
var NormalizeTextResponse = class NormalizeTextResponse {
	static id = "ondewo.t2s.NormalizeTextResponse";
	static deserializeBinary(bytes) {
		const instance = new NormalizeTextResponse();
		NormalizeTextResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.normalizedText = _instance.normalizedText || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.normalizedText = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		NormalizeTextResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.normalizedText) _writer.writeString(1, _instance.normalizedText);
	}
	_normalizedText;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		NormalizeTextResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { normalizedText: this.normalizedText };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { normalizedText: this.normalizedText };
	}
};
var T2SGetServiceInfoResponse = class T2SGetServiceInfoResponse {
	static id = "ondewo.t2s.T2SGetServiceInfoResponse";
	static deserializeBinary(bytes) {
		const instance = new T2SGetServiceInfoResponse();
		T2SGetServiceInfoResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.version = _instance.version || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.version = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		T2SGetServiceInfoResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.version) _writer.writeString(1, _instance.version);
	}
	_version;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2SGetServiceInfoResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { version: this.version };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { version: this.version };
	}
};
var ListT2sPipelinesRequest = class ListT2sPipelinesRequest {
	static id = "ondewo.t2s.ListT2sPipelinesRequest";
	static deserializeBinary(bytes) {
		const instance = new ListT2sPipelinesRequest();
		ListT2sPipelinesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languages = _instance.languages || [];
		_instance.speakerSexes = _instance.speakerSexes || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
		_instance.speakerNames = _instance.speakerNames || [];
		_instance.domains = _instance.domains || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		ListT2sPipelinesRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languages && _instance.languages.length) _writer.writeRepeatedString(1, _instance.languages);
		if (_instance.speakerSexes && _instance.speakerSexes.length) _writer.writeRepeatedString(2, _instance.speakerSexes);
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) _writer.writeRepeatedString(3, _instance.pipelineOwners);
		if (_instance.speakerNames && _instance.speakerNames.length) _writer.writeRepeatedString(4, _instance.speakerNames);
		if (_instance.domains && _instance.domains.length) _writer.writeRepeatedString(5, _instance.domains);
	}
	_languages;
	_speakerSexes;
	_pipelineOwners;
	_speakerNames;
	_domains;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListT2sPipelinesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			languages: (this.languages || []).slice(),
			speakerSexes: (this.speakerSexes || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			speakerNames: (this.speakerNames || []).slice(),
			domains: (this.domains || []).slice()
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			languages: (this.languages || []).slice(),
			speakerSexes: (this.speakerSexes || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			speakerNames: (this.speakerNames || []).slice(),
			domains: (this.domains || []).slice()
		};
	}
};
var ListT2sPipelinesResponse = class ListT2sPipelinesResponse {
	static id = "ondewo.t2s.ListT2sPipelinesResponse";
	static deserializeBinary(bytes) {
		const instance = new ListT2sPipelinesResponse();
		ListT2sPipelinesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.pipelines = _instance.pipelines || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new Text2SpeechConfig();
					_reader.readMessage(messageInitializer1, Text2SpeechConfig.deserializeBinaryFromReader);
					(_instance.pipelines = _instance.pipelines || []).push(messageInitializer1);
					break;
				default: _reader.skipField();
			}
		}
		ListT2sPipelinesResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pipelines && _instance.pipelines.length) _writer.writeRepeatedMessage(1, _instance.pipelines, Text2SpeechConfig.serializeBinaryToWriter);
	}
	_pipelines;
	constructor(_value) {
		_value = _value || {};
		this.pipelines = (_value.pipelines || []).map((m) => new Text2SpeechConfig(m));
		ListT2sPipelinesResponse.refineValues(this);
	}
	get pipelines() {
		return this._pipelines;
	}
	set pipelines(value) {
		this._pipelines = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		ListT2sPipelinesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { pipelines: (this.pipelines || []).map((m) => m.toObject()) };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { pipelines: (this.pipelines || []).map((m) => m.toProtobufJSON(options)) };
	}
};
var ListT2sLanguagesRequest = class ListT2sLanguagesRequest {
	static id = "ondewo.t2s.ListT2sLanguagesRequest";
	static deserializeBinary(bytes) {
		const instance = new ListT2sLanguagesRequest();
		ListT2sLanguagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.speakerSexes = _instance.speakerSexes || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
		_instance.speakerNames = _instance.speakerNames || [];
		_instance.domains = _instance.domains || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		ListT2sLanguagesRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.speakerSexes && _instance.speakerSexes.length) _writer.writeRepeatedString(1, _instance.speakerSexes);
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) _writer.writeRepeatedString(2, _instance.pipelineOwners);
		if (_instance.speakerNames && _instance.speakerNames.length) _writer.writeRepeatedString(3, _instance.speakerNames);
		if (_instance.domains && _instance.domains.length) _writer.writeRepeatedString(4, _instance.domains);
	}
	_speakerSexes;
	_pipelineOwners;
	_speakerNames;
	_domains;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListT2sLanguagesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			speakerSexes: (this.speakerSexes || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			speakerNames: (this.speakerNames || []).slice(),
			domains: (this.domains || []).slice()
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			speakerSexes: (this.speakerSexes || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			speakerNames: (this.speakerNames || []).slice(),
			domains: (this.domains || []).slice()
		};
	}
};
var ListT2sLanguagesResponse = class ListT2sLanguagesResponse {
	static id = "ondewo.t2s.ListT2sLanguagesResponse";
	static deserializeBinary(bytes) {
		const instance = new ListT2sLanguagesResponse();
		ListT2sLanguagesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languages = _instance.languages || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.languages = _instance.languages || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListT2sLanguagesResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languages && _instance.languages.length) _writer.writeRepeatedString(1, _instance.languages);
	}
	_languages;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListT2sLanguagesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { languages: (this.languages || []).slice() };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { languages: (this.languages || []).slice() };
	}
};
var ListT2sDomainsRequest = class ListT2sDomainsRequest {
	static id = "ondewo.t2s.ListT2sDomainsRequest";
	static deserializeBinary(bytes) {
		const instance = new ListT2sDomainsRequest();
		ListT2sDomainsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.speakerSexes = _instance.speakerSexes || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
		_instance.speakerNames = _instance.speakerNames || [];
		_instance.languages = _instance.languages || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		ListT2sDomainsRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.speakerSexes && _instance.speakerSexes.length) _writer.writeRepeatedString(1, _instance.speakerSexes);
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) _writer.writeRepeatedString(2, _instance.pipelineOwners);
		if (_instance.speakerNames && _instance.speakerNames.length) _writer.writeRepeatedString(3, _instance.speakerNames);
		if (_instance.languages && _instance.languages.length) _writer.writeRepeatedString(4, _instance.languages);
	}
	_speakerSexes;
	_pipelineOwners;
	_speakerNames;
	_languages;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListT2sDomainsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			speakerSexes: (this.speakerSexes || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			speakerNames: (this.speakerNames || []).slice(),
			languages: (this.languages || []).slice()
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			speakerSexes: (this.speakerSexes || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			speakerNames: (this.speakerNames || []).slice(),
			languages: (this.languages || []).slice()
		};
	}
};
var ListT2sDomainsResponse = class ListT2sDomainsResponse {
	static id = "ondewo.t2s.ListT2sDomainsResponse";
	static deserializeBinary(bytes) {
		const instance = new ListT2sDomainsResponse();
		ListT2sDomainsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.domains = _instance.domains || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.domains = _instance.domains || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListT2sDomainsResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.domains && _instance.domains.length) _writer.writeRepeatedString(1, _instance.domains);
	}
	_domains;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListT2sDomainsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { domains: (this.domains || []).slice() };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { domains: (this.domains || []).slice() };
	}
};
var ListT2sNormalizationPipelinesRequest = class ListT2sNormalizationPipelinesRequest {
	static id = "ondewo.t2s.ListT2sNormalizationPipelinesRequest";
	static deserializeBinary(bytes) {
		const instance = new ListT2sNormalizationPipelinesRequest();
		ListT2sNormalizationPipelinesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.language = _instance.language || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.language = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		ListT2sNormalizationPipelinesRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) _writer.writeString(1, _instance.language);
	}
	_language;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListT2sNormalizationPipelinesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { language: this.language };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { language: this.language };
	}
};
var ListT2sNormalizationPipelinesResponse = class ListT2sNormalizationPipelinesResponse {
	static id = "ondewo.t2s.ListT2sNormalizationPipelinesResponse";
	static deserializeBinary(bytes) {
		const instance = new ListT2sNormalizationPipelinesResponse();
		ListT2sNormalizationPipelinesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.t2sNormalizationPipelines = _instance.t2sNormalizationPipelines || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.t2sNormalizationPipelines = _instance.t2sNormalizationPipelines || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListT2sNormalizationPipelinesResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.t2sNormalizationPipelines && _instance.t2sNormalizationPipelines.length) _writer.writeRepeatedString(1, _instance.t2sNormalizationPipelines);
	}
	_t2sNormalizationPipelines;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListT2sNormalizationPipelinesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { t2sNormalizationPipelines: (this.t2sNormalizationPipelines || []).slice() };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { t2sNormalizationPipelines: (this.t2sNormalizationPipelines || []).slice() };
	}
};
var T2sPipelineId = class T2sPipelineId {
	static id = "ondewo.t2s.T2sPipelineId";
	static deserializeBinary(bytes) {
		const instance = new T2sPipelineId();
		T2sPipelineId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.id = _instance.id || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.id = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		T2sPipelineId.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) _writer.writeString(1, _instance.id);
	}
	_id;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sPipelineId.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { id: this.id };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { id: this.id };
	}
};
var Text2SpeechConfig = class Text2SpeechConfig {
	static id = "ondewo.t2s.Text2SpeechConfig";
	static deserializeBinary(bytes) {
		const instance = new Text2SpeechConfig();
		Text2SpeechConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.id = _instance.id || "";
		_instance.description = _instance.description || void 0;
		_instance.active = _instance.active || false;
		_instance.inference = _instance.inference || void 0;
		_instance.normalization = _instance.normalization || void 0;
		_instance.postprocessing = _instance.postprocessing || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Text2SpeechConfig.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) _writer.writeString(1, _instance.id);
		if (_instance.description) _writer.writeMessage(2, _instance.description, T2SDescription.serializeBinaryToWriter);
		if (_instance.active) _writer.writeBool(3, _instance.active);
		if (_instance.inference) _writer.writeMessage(4, _instance.inference, T2SInference.serializeBinaryToWriter);
		if (_instance.normalization) _writer.writeMessage(5, _instance.normalization, T2SNormalization.serializeBinaryToWriter);
		if (_instance.postprocessing) _writer.writeMessage(6, _instance.postprocessing, Postprocessing.serializeBinaryToWriter);
	}
	_id;
	_description;
	_active;
	_inference;
	_normalization;
	_postprocessing;
	constructor(_value) {
		_value = _value || {};
		this.id = _value.id;
		this.description = _value.description ? new T2SDescription(_value.description) : void 0;
		this.active = _value.active;
		this.inference = _value.inference ? new T2SInference(_value.inference) : void 0;
		this.normalization = _value.normalization ? new T2SNormalization(_value.normalization) : void 0;
		this.postprocessing = _value.postprocessing ? new Postprocessing(_value.postprocessing) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Text2SpeechConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			id: this.id,
			description: this.description ? this.description.toObject() : void 0,
			active: this.active,
			inference: this.inference ? this.inference.toObject() : void 0,
			normalization: this.normalization ? this.normalization.toObject() : void 0,
			postprocessing: this.postprocessing ? this.postprocessing.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			id: this.id,
			description: this.description ? this.description.toProtobufJSON(options) : null,
			active: this.active,
			inference: this.inference ? this.inference.toProtobufJSON(options) : null,
			normalization: this.normalization ? this.normalization.toProtobufJSON(options) : null,
			postprocessing: this.postprocessing ? this.postprocessing.toProtobufJSON(options) : null
		};
	}
};
var T2SDescription = class T2SDescription {
	static id = "ondewo.t2s.T2SDescription";
	static deserializeBinary(bytes) {
		const instance = new T2SDescription();
		T2SDescription.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.language = _instance.language || "";
		_instance.speakerSex = _instance.speakerSex || "";
		_instance.pipelineOwner = _instance.pipelineOwner || "";
		_instance.comments = _instance.comments || "";
		_instance.speakerName = _instance.speakerName || "";
		_instance.domain = _instance.domain || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		T2SDescription.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) _writer.writeString(1, _instance.language);
		if (_instance.speakerSex) _writer.writeString(2, _instance.speakerSex);
		if (_instance.pipelineOwner) _writer.writeString(3, _instance.pipelineOwner);
		if (_instance.comments) _writer.writeString(4, _instance.comments);
		if (_instance.speakerName) _writer.writeString(5, _instance.speakerName);
		if (_instance.domain) _writer.writeString(6, _instance.domain);
	}
	_language;
	_speakerSex;
	_pipelineOwner;
	_comments;
	_speakerName;
	_domain;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2SDescription.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			language: this.language,
			speakerSex: this.speakerSex,
			pipelineOwner: this.pipelineOwner,
			comments: this.comments,
			speakerName: this.speakerName,
			domain: this.domain
		};
	}
};
var T2SInference = class T2SInference {
	static id = "ondewo.t2s.T2SInference";
	static deserializeBinary(bytes) {
		const instance = new T2SInference();
		T2SInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.type = _instance.type || "";
		_instance.compositeInference = _instance.compositeInference || void 0;
		_instance.singleInference = _instance.singleInference || void 0;
		_instance.caching = _instance.caching || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		T2SInference.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.type) _writer.writeString(1, _instance.type);
		if (_instance.compositeInference) _writer.writeMessage(2, _instance.compositeInference, CompositeInference.serializeBinaryToWriter);
		if (_instance.singleInference) _writer.writeMessage(3, _instance.singleInference, SingleInference.serializeBinaryToWriter);
		if (_instance.caching) _writer.writeMessage(4, _instance.caching, Caching.serializeBinaryToWriter);
	}
	_type;
	_compositeInference;
	_singleInference;
	_caching;
	constructor(_value) {
		_value = _value || {};
		this.type = _value.type;
		this.compositeInference = _value.compositeInference ? new CompositeInference(_value.compositeInference) : void 0;
		this.singleInference = _value.singleInference ? new SingleInference(_value.singleInference) : void 0;
		this.caching = _value.caching ? new Caching(_value.caching) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2SInference.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			type: this.type,
			compositeInference: this.compositeInference ? this.compositeInference.toObject() : void 0,
			singleInference: this.singleInference ? this.singleInference.toObject() : void 0,
			caching: this.caching ? this.caching.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			type: this.type,
			compositeInference: this.compositeInference ? this.compositeInference.toProtobufJSON(options) : null,
			singleInference: this.singleInference ? this.singleInference.toProtobufJSON(options) : null,
			caching: this.caching ? this.caching.toProtobufJSON(options) : null
		};
	}
};
var CompositeInference = class CompositeInference {
	static id = "ondewo.t2s.CompositeInference";
	static deserializeBinary(bytes) {
		const instance = new CompositeInference();
		CompositeInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.text2mel = _instance.text2mel || void 0;
		_instance.mel2audio = _instance.mel2audio || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.text2mel = new Text2Mel();
					_reader.readMessage(_instance.text2mel, Text2Mel.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.mel2audio = new Mel2Audio();
					_reader.readMessage(_instance.mel2audio, Mel2Audio.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		CompositeInference.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.text2mel) _writer.writeMessage(1, _instance.text2mel, Text2Mel.serializeBinaryToWriter);
		if (_instance.mel2audio) _writer.writeMessage(2, _instance.mel2audio, Mel2Audio.serializeBinaryToWriter);
	}
	_text2mel;
	_mel2audio;
	constructor(_value) {
		_value = _value || {};
		this.text2mel = _value.text2mel ? new Text2Mel(_value.text2mel) : void 0;
		this.mel2audio = _value.mel2audio ? new Mel2Audio(_value.mel2audio) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		CompositeInference.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			text2mel: this.text2mel ? this.text2mel.toObject() : void 0,
			mel2audio: this.mel2audio ? this.mel2audio.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			text2mel: this.text2mel ? this.text2mel.toProtobufJSON(options) : null,
			mel2audio: this.mel2audio ? this.mel2audio.toProtobufJSON(options) : null
		};
	}
};
var SingleInference = class SingleInference {
	static id = "ondewo.t2s.SingleInference";
	static deserializeBinary(bytes) {
		const instance = new SingleInference();
		SingleInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.text2audio = _instance.text2audio || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.text2audio = new Text2Audio();
					_reader.readMessage(_instance.text2audio, Text2Audio.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		SingleInference.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.text2audio) _writer.writeMessage(1, _instance.text2audio, Text2Audio.serializeBinaryToWriter);
	}
	_text2audio;
	constructor(_value) {
		_value = _value || {};
		this.text2audio = _value.text2audio ? new Text2Audio(_value.text2audio) : void 0;
		SingleInference.refineValues(this);
	}
	get text2audio() {
		return this._text2audio;
	}
	set text2audio(value) {
		this._text2audio = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		SingleInference.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { text2audio: this.text2audio ? this.text2audio.toObject() : void 0 };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { text2audio: this.text2audio ? this.text2audio.toProtobufJSON(options) : null };
	}
};
var Text2Mel = class Text2Mel {
	static id = "ondewo.t2s.Text2Mel";
	static deserializeBinary(bytes) {
		const instance = new Text2Mel();
		Text2Mel.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.type = _instance.type || "";
		_instance.glowTts = _instance.glowTts || void 0;
		_instance.glowTtsTriton = _instance.glowTtsTriton || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Text2Mel.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.type) _writer.writeString(1, _instance.type);
		if (_instance.glowTts) _writer.writeMessage(2, _instance.glowTts, GlowTTS.serializeBinaryToWriter);
		if (_instance.glowTtsTriton) _writer.writeMessage(3, _instance.glowTtsTriton, GlowTTSTriton.serializeBinaryToWriter);
	}
	_type;
	_glowTts;
	_glowTtsTriton;
	constructor(_value) {
		_value = _value || {};
		this.type = _value.type;
		this.glowTts = _value.glowTts ? new GlowTTS(_value.glowTts) : void 0;
		this.glowTtsTriton = _value.glowTtsTriton ? new GlowTTSTriton(_value.glowTtsTriton) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Text2Mel.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			type: this.type,
			glowTts: this.glowTts ? this.glowTts.toObject() : void 0,
			glowTtsTriton: this.glowTtsTriton ? this.glowTtsTriton.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			type: this.type,
			glowTts: this.glowTts ? this.glowTts.toProtobufJSON(options) : null,
			glowTtsTriton: this.glowTtsTriton ? this.glowTtsTriton.toProtobufJSON(options) : null
		};
	}
};
var Text2Audio = class Text2Audio {
	static id = "ondewo.t2s.Text2Audio";
	static deserializeBinary(bytes) {
		const instance = new Text2Audio();
		Text2Audio.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.type = _instance.type || "";
		_instance.vits = _instance.vits || void 0;
		_instance.vitsTriton = _instance.vitsTriton || void 0;
		_instance.t2sCloudServiceElevenlabs = _instance.t2sCloudServiceElevenlabs || void 0;
		_instance.t2sCloudServiceAmazon = _instance.t2sCloudServiceAmazon || void 0;
		_instance.t2sCloudServiceGoogle = _instance.t2sCloudServiceGoogle || void 0;
		_instance.t2sCloudServiceMicrosoft = _instance.t2sCloudServiceMicrosoft || void 0;
		_instance.qwen3TtsCustomVoice = _instance.qwen3TtsCustomVoice || void 0;
		_instance.qwen3TtsBase = _instance.qwen3TtsBase || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				case 8:
					_instance.qwen3TtsCustomVoice = new Qwen3TtsCustomVoice();
					_reader.readMessage(_instance.qwen3TtsCustomVoice, Qwen3TtsCustomVoice.deserializeBinaryFromReader);
					break;
				case 9:
					_instance.qwen3TtsBase = new Qwen3TtsBase();
					_reader.readMessage(_instance.qwen3TtsBase, Qwen3TtsBase.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		Text2Audio.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.type) _writer.writeString(1, _instance.type);
		if (_instance.vits) _writer.writeMessage(2, _instance.vits, Vits.serializeBinaryToWriter);
		if (_instance.vitsTriton) _writer.writeMessage(3, _instance.vitsTriton, VitsTriton.serializeBinaryToWriter);
		if (_instance.t2sCloudServiceElevenlabs) _writer.writeMessage(4, _instance.t2sCloudServiceElevenlabs, T2sCloudServiceElevenLabs.serializeBinaryToWriter);
		if (_instance.t2sCloudServiceAmazon) _writer.writeMessage(5, _instance.t2sCloudServiceAmazon, T2sCloudServiceAmazon.serializeBinaryToWriter);
		if (_instance.t2sCloudServiceGoogle) _writer.writeMessage(6, _instance.t2sCloudServiceGoogle, T2sCloudServiceGoogle.serializeBinaryToWriter);
		if (_instance.t2sCloudServiceMicrosoft) _writer.writeMessage(7, _instance.t2sCloudServiceMicrosoft, T2sCloudServiceMicrosoft.serializeBinaryToWriter);
		if (_instance.qwen3TtsCustomVoice) _writer.writeMessage(8, _instance.qwen3TtsCustomVoice, Qwen3TtsCustomVoice.serializeBinaryToWriter);
		if (_instance.qwen3TtsBase) _writer.writeMessage(9, _instance.qwen3TtsBase, Qwen3TtsBase.serializeBinaryToWriter);
	}
	_type;
	_vits;
	_vitsTriton;
	_t2sCloudServiceElevenlabs;
	_t2sCloudServiceAmazon;
	_t2sCloudServiceGoogle;
	_t2sCloudServiceMicrosoft;
	_qwen3TtsCustomVoice;
	_qwen3TtsBase;
	constructor(_value) {
		_value = _value || {};
		this.type = _value.type;
		this.vits = _value.vits ? new Vits(_value.vits) : void 0;
		this.vitsTriton = _value.vitsTriton ? new VitsTriton(_value.vitsTriton) : void 0;
		this.t2sCloudServiceElevenlabs = _value.t2sCloudServiceElevenlabs ? new T2sCloudServiceElevenLabs(_value.t2sCloudServiceElevenlabs) : void 0;
		this.t2sCloudServiceAmazon = _value.t2sCloudServiceAmazon ? new T2sCloudServiceAmazon(_value.t2sCloudServiceAmazon) : void 0;
		this.t2sCloudServiceGoogle = _value.t2sCloudServiceGoogle ? new T2sCloudServiceGoogle(_value.t2sCloudServiceGoogle) : void 0;
		this.t2sCloudServiceMicrosoft = _value.t2sCloudServiceMicrosoft ? new T2sCloudServiceMicrosoft(_value.t2sCloudServiceMicrosoft) : void 0;
		this.qwen3TtsCustomVoice = _value.qwen3TtsCustomVoice ? new Qwen3TtsCustomVoice(_value.qwen3TtsCustomVoice) : void 0;
		this.qwen3TtsBase = _value.qwen3TtsBase ? new Qwen3TtsBase(_value.qwen3TtsBase) : void 0;
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
	get qwen3TtsCustomVoice() {
		return this._qwen3TtsCustomVoice;
	}
	set qwen3TtsCustomVoice(value) {
		this._qwen3TtsCustomVoice = value;
	}
	get qwen3TtsBase() {
		return this._qwen3TtsBase;
	}
	set qwen3TtsBase(value) {
		this._qwen3TtsBase = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		Text2Audio.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			type: this.type,
			vits: this.vits ? this.vits.toObject() : void 0,
			vitsTriton: this.vitsTriton ? this.vitsTriton.toObject() : void 0,
			t2sCloudServiceElevenlabs: this.t2sCloudServiceElevenlabs ? this.t2sCloudServiceElevenlabs.toObject() : void 0,
			t2sCloudServiceAmazon: this.t2sCloudServiceAmazon ? this.t2sCloudServiceAmazon.toObject() : void 0,
			t2sCloudServiceGoogle: this.t2sCloudServiceGoogle ? this.t2sCloudServiceGoogle.toObject() : void 0,
			t2sCloudServiceMicrosoft: this.t2sCloudServiceMicrosoft ? this.t2sCloudServiceMicrosoft.toObject() : void 0,
			qwen3TtsCustomVoice: this.qwen3TtsCustomVoice ? this.qwen3TtsCustomVoice.toObject() : void 0,
			qwen3TtsBase: this.qwen3TtsBase ? this.qwen3TtsBase.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			type: this.type,
			vits: this.vits ? this.vits.toProtobufJSON(options) : null,
			vitsTriton: this.vitsTriton ? this.vitsTriton.toProtobufJSON(options) : null,
			t2sCloudServiceElevenlabs: this.t2sCloudServiceElevenlabs ? this.t2sCloudServiceElevenlabs.toProtobufJSON(options) : null,
			t2sCloudServiceAmazon: this.t2sCloudServiceAmazon ? this.t2sCloudServiceAmazon.toProtobufJSON(options) : null,
			t2sCloudServiceGoogle: this.t2sCloudServiceGoogle ? this.t2sCloudServiceGoogle.toProtobufJSON(options) : null,
			t2sCloudServiceMicrosoft: this.t2sCloudServiceMicrosoft ? this.t2sCloudServiceMicrosoft.toProtobufJSON(options) : null,
			qwen3TtsCustomVoice: this.qwen3TtsCustomVoice ? this.qwen3TtsCustomVoice.toProtobufJSON(options) : null,
			qwen3TtsBase: this.qwen3TtsBase ? this.qwen3TtsBase.toProtobufJSON(options) : null
		};
	}
};
var GlowTTS = class GlowTTS {
	static id = "ondewo.t2s.GlowTTS";
	static deserializeBinary(bytes) {
		const instance = new GlowTTS();
		GlowTTS.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.batchSize = _instance.batchSize || "0";
		_instance.useGpu = _instance.useGpu || false;
		_instance.lengthScale = _instance.lengthScale || 0;
		_instance.noiseScale = _instance.noiseScale || 0;
		_instance.path = _instance.path || "";
		_instance.cleaners = _instance.cleaners || [];
		_instance.paramConfigPath = _instance.paramConfigPath || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
					(_instance.cleaners = _instance.cleaners || []).push(_reader.readString());
					break;
				case 7:
					_instance.paramConfigPath = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		GlowTTS.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.batchSize) _writer.writeInt64String(1, _instance.batchSize);
		if (_instance.useGpu) _writer.writeBool(2, _instance.useGpu);
		if (_instance.lengthScale) _writer.writeFloat(3, _instance.lengthScale);
		if (_instance.noiseScale) _writer.writeFloat(4, _instance.noiseScale);
		if (_instance.path) _writer.writeString(5, _instance.path);
		if (_instance.cleaners && _instance.cleaners.length) _writer.writeRepeatedString(6, _instance.cleaners);
		if (_instance.paramConfigPath) _writer.writeString(7, _instance.paramConfigPath);
	}
	_batchSize;
	_useGpu;
	_lengthScale;
	_noiseScale;
	_path;
	_cleaners;
	_paramConfigPath;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		GlowTTS.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var GlowTTSTriton = class GlowTTSTriton {
	static id = "ondewo.t2s.GlowTTSTriton";
	static deserializeBinary(bytes) {
		const instance = new GlowTTSTriton();
		GlowTTSTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.batchSize = _instance.batchSize || "0";
		_instance.lengthScale = _instance.lengthScale || 0;
		_instance.noiseScale = _instance.noiseScale || 0;
		_instance.cleaners = _instance.cleaners || [];
		_instance.maxTextLength = _instance.maxTextLength || "0";
		_instance.paramConfigPath = _instance.paramConfigPath || "";
		_instance.tritonModelName = _instance.tritonModelName || "";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		GlowTTSTriton.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.batchSize) _writer.writeInt64String(1, _instance.batchSize);
		if (_instance.lengthScale) _writer.writeFloat(2, _instance.lengthScale);
		if (_instance.noiseScale) _writer.writeFloat(3, _instance.noiseScale);
		if (_instance.cleaners && _instance.cleaners.length) _writer.writeRepeatedString(4, _instance.cleaners);
		if (_instance.maxTextLength) _writer.writeInt64String(5, _instance.maxTextLength);
		if (_instance.paramConfigPath) _writer.writeString(6, _instance.paramConfigPath);
		if (_instance.tritonModelName) _writer.writeString(7, _instance.tritonModelName);
		if (_instance.tritonServerHost) _writer.writeString(8, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(9, _instance.tritonServerPort);
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
	serializeBinary() {
		const writer = new BinaryWriter();
		GlowTTSTriton.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var Vits = class Vits {
	static id = "ondewo.t2s.Vits";
	static deserializeBinary(bytes) {
		const instance = new Vits();
		Vits.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.batchSize = _instance.batchSize || "0";
		_instance.useGpu = _instance.useGpu || false;
		_instance.lengthScale = _instance.lengthScale || 0;
		_instance.noiseScale = _instance.noiseScale || 0;
		_instance.path = _instance.path || "";
		_instance.cleaners = _instance.cleaners || [];
		_instance.paramConfigPath = _instance.paramConfigPath || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
					(_instance.cleaners = _instance.cleaners || []).push(_reader.readString());
					break;
				case 7:
					_instance.paramConfigPath = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		Vits.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.batchSize) _writer.writeInt64String(1, _instance.batchSize);
		if (_instance.useGpu) _writer.writeBool(2, _instance.useGpu);
		if (_instance.lengthScale) _writer.writeFloat(3, _instance.lengthScale);
		if (_instance.noiseScale) _writer.writeFloat(4, _instance.noiseScale);
		if (_instance.path) _writer.writeString(5, _instance.path);
		if (_instance.cleaners && _instance.cleaners.length) _writer.writeRepeatedString(6, _instance.cleaners);
		if (_instance.paramConfigPath) _writer.writeString(7, _instance.paramConfigPath);
	}
	_batchSize;
	_useGpu;
	_lengthScale;
	_noiseScale;
	_path;
	_cleaners;
	_paramConfigPath;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Vits.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var VitsTriton = class VitsTriton {
	static id = "ondewo.t2s.VitsTriton";
	static deserializeBinary(bytes) {
		const instance = new VitsTriton();
		VitsTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.batchSize = _instance.batchSize || "0";
		_instance.lengthScale = _instance.lengthScale || 0;
		_instance.noiseScale = _instance.noiseScale || 0;
		_instance.cleaners = _instance.cleaners || [];
		_instance.maxTextLength = _instance.maxTextLength || "0";
		_instance.paramConfigPath = _instance.paramConfigPath || "";
		_instance.tritonModelName = _instance.tritonModelName || "";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		VitsTriton.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.batchSize) _writer.writeInt64String(1, _instance.batchSize);
		if (_instance.lengthScale) _writer.writeFloat(2, _instance.lengthScale);
		if (_instance.noiseScale) _writer.writeFloat(3, _instance.noiseScale);
		if (_instance.cleaners && _instance.cleaners.length) _writer.writeRepeatedString(4, _instance.cleaners);
		if (_instance.maxTextLength) _writer.writeInt64String(5, _instance.maxTextLength);
		if (_instance.paramConfigPath) _writer.writeString(6, _instance.paramConfigPath);
		if (_instance.tritonModelName) _writer.writeString(7, _instance.tritonModelName);
		if (_instance.tritonServerHost) _writer.writeString(8, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(9, _instance.tritonServerPort);
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
	serializeBinary() {
		const writer = new BinaryWriter();
		VitsTriton.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var T2sCloudServiceElevenLabs = class T2sCloudServiceElevenLabs {
	static id = "ondewo.t2s.T2sCloudServiceElevenLabs";
	static deserializeBinary(bytes) {
		const instance = new T2sCloudServiceElevenLabs();
		T2sCloudServiceElevenLabs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languageCode = _instance.languageCode || "";
		_instance.modelId = _instance.modelId || "";
		_instance.voiceId = _instance.voiceId || "";
		_instance.voiceSettings = _instance.voiceSettings || void 0;
		_instance.applyTextNormalization = _instance.applyTextNormalization || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
					_reader.readMessage(_instance.voiceSettings, VoiceSettings.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.applyTextNormalization = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		T2sCloudServiceElevenLabs.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageCode) _writer.writeString(1, _instance.languageCode);
		if (_instance.modelId) _writer.writeString(2, _instance.modelId);
		if (_instance.voiceId) _writer.writeString(3, _instance.voiceId);
		if (_instance.voiceSettings) _writer.writeMessage(4, _instance.voiceSettings, VoiceSettings.serializeBinaryToWriter);
		if (_instance.applyTextNormalization) _writer.writeString(5, _instance.applyTextNormalization);
	}
	_languageCode;
	_modelId;
	_voiceId;
	_voiceSettings;
	_applyTextNormalization;
	constructor(_value) {
		_value = _value || {};
		this.languageCode = _value.languageCode;
		this.modelId = _value.modelId;
		this.voiceId = _value.voiceId;
		this.voiceSettings = _value.voiceSettings ? new VoiceSettings(_value.voiceSettings) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sCloudServiceElevenLabs.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			languageCode: this.languageCode,
			modelId: this.modelId,
			voiceId: this.voiceId,
			voiceSettings: this.voiceSettings ? this.voiceSettings.toObject() : void 0,
			applyTextNormalization: this.applyTextNormalization
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			languageCode: this.languageCode,
			modelId: this.modelId,
			voiceId: this.voiceId,
			voiceSettings: this.voiceSettings ? this.voiceSettings.toProtobufJSON(options) : null,
			applyTextNormalization: this.applyTextNormalization
		};
	}
};
var VoiceSettings = class VoiceSettings {
	static id = "ondewo.t2s.VoiceSettings";
	static deserializeBinary(bytes) {
		const instance = new VoiceSettings();
		VoiceSettings.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.stability = _instance.stability || 0;
		_instance.similarityBoost = _instance.similarityBoost || 0;
		_instance.style = _instance.style || 0;
		_instance.useSpeakerBoost = _instance.useSpeakerBoost || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		VoiceSettings.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.stability) _writer.writeFloat(1, _instance.stability);
		if (_instance.similarityBoost) _writer.writeFloat(2, _instance.similarityBoost);
		if (_instance.style) _writer.writeFloat(3, _instance.style);
		if (_instance.useSpeakerBoost) _writer.writeBool(4, _instance.useSpeakerBoost);
	}
	_stability;
	_similarityBoost;
	_style;
	_useSpeakerBoost;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		VoiceSettings.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			stability: this.stability,
			similarityBoost: this.similarityBoost,
			style: this.style,
			useSpeakerBoost: this.useSpeakerBoost
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			stability: this.stability,
			similarityBoost: this.similarityBoost,
			style: this.style,
			useSpeakerBoost: this.useSpeakerBoost
		};
	}
};
var T2sCloudServiceAmazon = class T2sCloudServiceAmazon {
	static id = "ondewo.t2s.T2sCloudServiceAmazon";
	static deserializeBinary(bytes) {
		const instance = new T2sCloudServiceAmazon();
		T2sCloudServiceAmazon.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.voiceId = _instance.voiceId || "";
		_instance.modelId = _instance.modelId || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.voiceId = _reader.readString();
					break;
				case 2:
					_instance.modelId = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		T2sCloudServiceAmazon.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.voiceId) _writer.writeString(1, _instance.voiceId);
		if (_instance.modelId) _writer.writeString(2, _instance.modelId);
	}
	_voiceId;
	_modelId;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sCloudServiceAmazon.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			voiceId: this.voiceId,
			modelId: this.modelId
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			voiceId: this.voiceId,
			modelId: this.modelId
		};
	}
};
var T2sCloudServiceGoogle = class T2sCloudServiceGoogle {
	static id = "ondewo.t2s.T2sCloudServiceGoogle";
	static deserializeBinary(bytes) {
		const instance = new T2sCloudServiceGoogle();
		T2sCloudServiceGoogle.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.voiceId = _instance.voiceId || "";
		_instance.speakingRate = _instance.speakingRate || 0;
		_instance.volumeGainDb = _instance.volumeGainDb || 0;
		_instance.pitch = _instance.pitch || 0;
		_instance.speakerLanguage = _instance.speakerLanguage || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				case 5:
					_instance.speakerLanguage = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		T2sCloudServiceGoogle.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.voiceId) _writer.writeString(1, _instance.voiceId);
		if (_instance.speakingRate) _writer.writeFloat(2, _instance.speakingRate);
		if (_instance.volumeGainDb) _writer.writeFloat(3, _instance.volumeGainDb);
		if (_instance.pitch) _writer.writeFloat(4, _instance.pitch);
		if (_instance.speakerLanguage) _writer.writeString(5, _instance.speakerLanguage);
	}
	_voiceId;
	_speakingRate;
	_volumeGainDb;
	_pitch;
	_speakerLanguage;
	constructor(_value) {
		_value = _value || {};
		this.voiceId = _value.voiceId;
		this.speakingRate = _value.speakingRate;
		this.volumeGainDb = _value.volumeGainDb;
		this.pitch = _value.pitch;
		this.speakerLanguage = _value.speakerLanguage;
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
	get speakerLanguage() {
		return this._speakerLanguage;
	}
	set speakerLanguage(value) {
		this._speakerLanguage = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sCloudServiceGoogle.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			voiceId: this.voiceId,
			speakingRate: this.speakingRate,
			volumeGainDb: this.volumeGainDb,
			pitch: this.pitch,
			speakerLanguage: this.speakerLanguage
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			voiceId: this.voiceId,
			speakingRate: this.speakingRate,
			volumeGainDb: this.volumeGainDb,
			pitch: this.pitch,
			speakerLanguage: this.speakerLanguage
		};
	}
};
var T2sCloudServiceMicrosoft = class T2sCloudServiceMicrosoft {
	static id = "ondewo.t2s.T2sCloudServiceMicrosoft";
	static deserializeBinary(bytes) {
		const instance = new T2sCloudServiceMicrosoft();
		T2sCloudServiceMicrosoft.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.voiceId = _instance.voiceId || "";
		_instance.useDefaultSpeaker = _instance.useDefaultSpeaker || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.voiceId = _reader.readString();
					break;
				case 2:
					_instance.useDefaultSpeaker = _reader.readBool();
					break;
				default: _reader.skipField();
			}
		}
		T2sCloudServiceMicrosoft.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.voiceId) _writer.writeString(1, _instance.voiceId);
		if (_instance.useDefaultSpeaker) _writer.writeBool(2, _instance.useDefaultSpeaker);
	}
	_voiceId;
	_useDefaultSpeaker;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2sCloudServiceMicrosoft.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			voiceId: this.voiceId,
			useDefaultSpeaker: this.useDefaultSpeaker
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			voiceId: this.voiceId,
			useDefaultSpeaker: this.useDefaultSpeaker
		};
	}
};
var Qwen3TtsCustomVoice = class Qwen3TtsCustomVoice {
	static id = "ondewo.t2s.Qwen3TtsCustomVoice";
	static deserializeBinary(bytes) {
		const instance = new Qwen3TtsCustomVoice();
		Qwen3TtsCustomVoice.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.voiceId = _instance.voiceId || "";
		_instance.modelName = _instance.modelName || "";
		_instance.language = _instance.language || "";
		_instance.qwen3TtsServerHost = _instance.qwen3TtsServerHost || "";
		_instance.qwen3TtsServerPort = _instance.qwen3TtsServerPort || "0";
		_instance.qwen3TtsServerHeader = _instance.qwen3TtsServerHeader || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.voiceId = _reader.readString();
					break;
				case 2:
					_instance.modelName = _reader.readString();
					break;
				case 3:
					_instance.language = _reader.readString();
					break;
				case 4:
					_instance.qwen3TtsServerHost = _reader.readString();
					break;
				case 5:
					_instance.qwen3TtsServerPort = _reader.readInt64String();
					break;
				case 6:
					_instance.qwen3TtsServerHeader = new googleProtobuf001.Struct();
					_reader.readMessage(_instance.qwen3TtsServerHeader, googleProtobuf001.Struct.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		Qwen3TtsCustomVoice.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.voiceId) _writer.writeString(1, _instance.voiceId);
		if (_instance.modelName) _writer.writeString(2, _instance.modelName);
		if (_instance.language) _writer.writeString(3, _instance.language);
		if (_instance.qwen3TtsServerHost) _writer.writeString(4, _instance.qwen3TtsServerHost);
		if (_instance.qwen3TtsServerPort) _writer.writeInt64String(5, _instance.qwen3TtsServerPort);
		if (_instance.qwen3TtsServerHeader) _writer.writeMessage(6, _instance.qwen3TtsServerHeader, googleProtobuf001.Struct.serializeBinaryToWriter);
	}
	_voiceId;
	_modelName;
	_language;
	_qwen3TtsServerHost;
	_qwen3TtsServerPort;
	_qwen3TtsServerHeader;
	constructor(_value) {
		_value = _value || {};
		this.voiceId = _value.voiceId;
		this.modelName = _value.modelName;
		this.language = _value.language;
		this.qwen3TtsServerHost = _value.qwen3TtsServerHost;
		this.qwen3TtsServerPort = _value.qwen3TtsServerPort;
		this.qwen3TtsServerHeader = _value.qwen3TtsServerHeader ? new googleProtobuf001.Struct(_value.qwen3TtsServerHeader) : void 0;
		Qwen3TtsCustomVoice.refineValues(this);
	}
	get voiceId() {
		return this._voiceId;
	}
	set voiceId(value) {
		this._voiceId = value;
	}
	get modelName() {
		return this._modelName;
	}
	set modelName(value) {
		this._modelName = value;
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	get qwen3TtsServerHost() {
		return this._qwen3TtsServerHost;
	}
	set qwen3TtsServerHost(value) {
		this._qwen3TtsServerHost = value;
	}
	get qwen3TtsServerPort() {
		return this._qwen3TtsServerPort;
	}
	set qwen3TtsServerPort(value) {
		this._qwen3TtsServerPort = value;
	}
	get qwen3TtsServerHeader() {
		return this._qwen3TtsServerHeader;
	}
	set qwen3TtsServerHeader(value) {
		this._qwen3TtsServerHeader = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		Qwen3TtsCustomVoice.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			voiceId: this.voiceId,
			modelName: this.modelName,
			language: this.language,
			qwen3TtsServerHost: this.qwen3TtsServerHost,
			qwen3TtsServerPort: this.qwen3TtsServerPort,
			qwen3TtsServerHeader: this.qwen3TtsServerHeader ? this.qwen3TtsServerHeader.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			voiceId: this.voiceId,
			modelName: this.modelName,
			language: this.language,
			qwen3TtsServerHost: this.qwen3TtsServerHost,
			qwen3TtsServerPort: this.qwen3TtsServerPort,
			qwen3TtsServerHeader: this.qwen3TtsServerHeader ? this.qwen3TtsServerHeader.toProtobufJSON(options) : null
		};
	}
};
var Qwen3TtsBase = class Qwen3TtsBase {
	static id = "ondewo.t2s.Qwen3TtsBase";
	static deserializeBinary(bytes) {
		const instance = new Qwen3TtsBase();
		Qwen3TtsBase.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.modelName = _instance.modelName || "";
		_instance.language = _instance.language || "";
		_instance.embeddingPath = _instance.embeddingPath || "";
		_instance.qwen3TtsServerHost = _instance.qwen3TtsServerHost || "";
		_instance.qwen3TtsServerPort = _instance.qwen3TtsServerPort || "0";
		_instance.qwen3TtsServerHeader = _instance.qwen3TtsServerHeader || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.modelName = _reader.readString();
					break;
				case 2:
					_instance.language = _reader.readString();
					break;
				case 3:
					_instance.embeddingPath = _reader.readString();
					break;
				case 4:
					_instance.qwen3TtsServerHost = _reader.readString();
					break;
				case 5:
					_instance.qwen3TtsServerPort = _reader.readInt64String();
					break;
				case 6:
					_instance.qwen3TtsServerHeader = new googleProtobuf001.Struct();
					_reader.readMessage(_instance.qwen3TtsServerHeader, googleProtobuf001.Struct.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		Qwen3TtsBase.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelName) _writer.writeString(1, _instance.modelName);
		if (_instance.language) _writer.writeString(2, _instance.language);
		if (_instance.embeddingPath) _writer.writeString(3, _instance.embeddingPath);
		if (_instance.qwen3TtsServerHost) _writer.writeString(4, _instance.qwen3TtsServerHost);
		if (_instance.qwen3TtsServerPort) _writer.writeInt64String(5, _instance.qwen3TtsServerPort);
		if (_instance.qwen3TtsServerHeader) _writer.writeMessage(6, _instance.qwen3TtsServerHeader, googleProtobuf001.Struct.serializeBinaryToWriter);
	}
	_modelName;
	_language;
	_embeddingPath;
	_qwen3TtsServerHost;
	_qwen3TtsServerPort;
	_qwen3TtsServerHeader;
	constructor(_value) {
		_value = _value || {};
		this.modelName = _value.modelName;
		this.language = _value.language;
		this.embeddingPath = _value.embeddingPath;
		this.qwen3TtsServerHost = _value.qwen3TtsServerHost;
		this.qwen3TtsServerPort = _value.qwen3TtsServerPort;
		this.qwen3TtsServerHeader = _value.qwen3TtsServerHeader ? new googleProtobuf001.Struct(_value.qwen3TtsServerHeader) : void 0;
		Qwen3TtsBase.refineValues(this);
	}
	get modelName() {
		return this._modelName;
	}
	set modelName(value) {
		this._modelName = value;
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	get embeddingPath() {
		return this._embeddingPath;
	}
	set embeddingPath(value) {
		this._embeddingPath = value;
	}
	get qwen3TtsServerHost() {
		return this._qwen3TtsServerHost;
	}
	set qwen3TtsServerHost(value) {
		this._qwen3TtsServerHost = value;
	}
	get qwen3TtsServerPort() {
		return this._qwen3TtsServerPort;
	}
	set qwen3TtsServerPort(value) {
		this._qwen3TtsServerPort = value;
	}
	get qwen3TtsServerHeader() {
		return this._qwen3TtsServerHeader;
	}
	set qwen3TtsServerHeader(value) {
		this._qwen3TtsServerHeader = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		Qwen3TtsBase.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			modelName: this.modelName,
			language: this.language,
			embeddingPath: this.embeddingPath,
			qwen3TtsServerHost: this.qwen3TtsServerHost,
			qwen3TtsServerPort: this.qwen3TtsServerPort,
			qwen3TtsServerHeader: this.qwen3TtsServerHeader ? this.qwen3TtsServerHeader.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			modelName: this.modelName,
			language: this.language,
			embeddingPath: this.embeddingPath,
			qwen3TtsServerHost: this.qwen3TtsServerHost,
			qwen3TtsServerPort: this.qwen3TtsServerPort,
			qwen3TtsServerHeader: this.qwen3TtsServerHeader ? this.qwen3TtsServerHeader.toProtobufJSON(options) : null
		};
	}
};
var Mel2Audio = class Mel2Audio {
	static id = "ondewo.t2s.Mel2Audio";
	static deserializeBinary(bytes) {
		const instance = new Mel2Audio();
		Mel2Audio.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.type = _instance.type || "";
		_instance.mbMelganTriton = _instance.mbMelganTriton || void 0;
		_instance.hifiGan = _instance.hifiGan || void 0;
		_instance.hifiGanTriton = _instance.hifiGanTriton || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Mel2Audio.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.type) _writer.writeString(1, _instance.type);
		if (_instance.mbMelganTriton) _writer.writeMessage(2, _instance.mbMelganTriton, MbMelganTriton.serializeBinaryToWriter);
		if (_instance.hifiGan) _writer.writeMessage(3, _instance.hifiGan, HiFiGan.serializeBinaryToWriter);
		if (_instance.hifiGanTriton) _writer.writeMessage(4, _instance.hifiGanTriton, HiFiGanTriton.serializeBinaryToWriter);
	}
	_type;
	_mbMelganTriton;
	_hifiGan;
	_hifiGanTriton;
	constructor(_value) {
		_value = _value || {};
		this.type = _value.type;
		this.mbMelganTriton = _value.mbMelganTriton ? new MbMelganTriton(_value.mbMelganTriton) : void 0;
		this.hifiGan = _value.hifiGan ? new HiFiGan(_value.hifiGan) : void 0;
		this.hifiGanTriton = _value.hifiGanTriton ? new HiFiGanTriton(_value.hifiGanTriton) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Mel2Audio.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			type: this.type,
			mbMelganTriton: this.mbMelganTriton ? this.mbMelganTriton.toObject() : void 0,
			hifiGan: this.hifiGan ? this.hifiGan.toObject() : void 0,
			hifiGanTriton: this.hifiGanTriton ? this.hifiGanTriton.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			type: this.type,
			mbMelganTriton: this.mbMelganTriton ? this.mbMelganTriton.toProtobufJSON(options) : null,
			hifiGan: this.hifiGan ? this.hifiGan.toProtobufJSON(options) : null,
			hifiGanTriton: this.hifiGanTriton ? this.hifiGanTriton.toProtobufJSON(options) : null
		};
	}
};
var HiFiGan = class HiFiGan {
	static id = "ondewo.t2s.HiFiGan";
	static deserializeBinary(bytes) {
		const instance = new HiFiGan();
		HiFiGan.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.useGpu = _instance.useGpu || false;
		_instance.batchSize = _instance.batchSize || "0";
		_instance.configPath = _instance.configPath || "";
		_instance.modelPath = _instance.modelPath || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		HiFiGan.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.useGpu) _writer.writeBool(1, _instance.useGpu);
		if (_instance.batchSize) _writer.writeInt64String(2, _instance.batchSize);
		if (_instance.configPath) _writer.writeString(3, _instance.configPath);
		if (_instance.modelPath) _writer.writeString(4, _instance.modelPath);
	}
	_useGpu;
	_batchSize;
	_configPath;
	_modelPath;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		HiFiGan.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			useGpu: this.useGpu,
			batchSize: this.batchSize,
			configPath: this.configPath,
			modelPath: this.modelPath
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			useGpu: this.useGpu,
			batchSize: this.batchSize,
			configPath: this.configPath,
			modelPath: this.modelPath
		};
	}
};
var HiFiGanTriton = class HiFiGanTriton {
	static id = "ondewo.t2s.HiFiGanTriton";
	static deserializeBinary(bytes) {
		const instance = new HiFiGanTriton();
		HiFiGanTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.configPath = _instance.configPath || "";
		_instance.tritonModelName = _instance.tritonModelName || "";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		HiFiGanTriton.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.configPath) _writer.writeString(1, _instance.configPath);
		if (_instance.tritonModelName) _writer.writeString(2, _instance.tritonModelName);
		if (_instance.tritonServerHost) _writer.writeString(3, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(4, _instance.tritonServerPort);
	}
	_configPath;
	_tritonModelName;
	_tritonServerHost;
	_tritonServerPort;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		HiFiGanTriton.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			configPath: this.configPath,
			tritonModelName: this.tritonModelName,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			configPath: this.configPath,
			tritonModelName: this.tritonModelName,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
};
var MbMelganTriton = class MbMelganTriton {
	static id = "ondewo.t2s.MbMelganTriton";
	static deserializeBinary(bytes) {
		const instance = new MbMelganTriton();
		MbMelganTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.configPath = _instance.configPath || "";
		_instance.statsPath = _instance.statsPath || "";
		_instance.tritonModelName = _instance.tritonModelName || "";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		MbMelganTriton.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.configPath) _writer.writeString(1, _instance.configPath);
		if (_instance.statsPath) _writer.writeString(2, _instance.statsPath);
		if (_instance.tritonModelName) _writer.writeString(3, _instance.tritonModelName);
		if (_instance.tritonServerHost) _writer.writeString(4, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(5, _instance.tritonServerPort);
	}
	_configPath;
	_statsPath;
	_tritonModelName;
	_tritonServerHost;
	_tritonServerPort;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		MbMelganTriton.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			configPath: this.configPath,
			statsPath: this.statsPath,
			tritonModelName: this.tritonModelName,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			configPath: this.configPath,
			statsPath: this.statsPath,
			tritonModelName: this.tritonModelName,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
};
var Caching = class Caching {
	static id = "ondewo.t2s.Caching";
	static deserializeBinary(bytes) {
		const instance = new Caching();
		Caching.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.active = _instance.active || false;
		_instance.memoryCacheMaxSize = _instance.memoryCacheMaxSize || "0";
		_instance.samplingRate = _instance.samplingRate || "0";
		_instance.loadCache = _instance.loadCache || false;
		_instance.saveCache = _instance.saveCache || false;
		_instance.cacheSaveDir = _instance.cacheSaveDir || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		Caching.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active) _writer.writeBool(1, _instance.active);
		if (_instance.memoryCacheMaxSize) _writer.writeInt64String(2, _instance.memoryCacheMaxSize);
		if (_instance.samplingRate) _writer.writeInt64String(3, _instance.samplingRate);
		if (_instance.loadCache) _writer.writeBool(4, _instance.loadCache);
		if (_instance.saveCache) _writer.writeBool(5, _instance.saveCache);
		if (_instance.cacheSaveDir) _writer.writeString(6, _instance.cacheSaveDir);
	}
	_active;
	_memoryCacheMaxSize;
	_samplingRate;
	_loadCache;
	_saveCache;
	_cacheSaveDir;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Caching.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			memoryCacheMaxSize: this.memoryCacheMaxSize,
			samplingRate: this.samplingRate,
			loadCache: this.loadCache,
			saveCache: this.saveCache,
			cacheSaveDir: this.cacheSaveDir
		};
	}
};
var T2SNormalization = class T2SNormalization {
	static id = "ondewo.t2s.T2SNormalization";
	static deserializeBinary(bytes) {
		const instance = new T2SNormalization();
		T2SNormalization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.language = _instance.language || "";
		_instance.pipeline = _instance.pipeline || [];
		_instance.customPhonemizerId = _instance.customPhonemizerId || "";
		_instance.customLengthScales = _instance.customLengthScales || void 0;
		_instance.arpabetMapping = _instance.arpabetMapping || "";
		_instance.numericMapping = _instance.numericMapping || "";
		_instance.callsignsMapping = _instance.callsignsMapping || "";
		_instance.phonemeCorrectionMapping = _instance.phonemeCorrectionMapping || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		T2SNormalization.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) _writer.writeString(1, _instance.language);
		if (_instance.pipeline && _instance.pipeline.length) _writer.writeRepeatedString(2, _instance.pipeline);
		if (_instance.customPhonemizerId) _writer.writeString(3, _instance.customPhonemizerId);
		if (_instance.customLengthScales) _writer.writeMessage(4, _instance.customLengthScales, T2SCustomLengthScales.serializeBinaryToWriter);
		if (_instance.arpabetMapping) _writer.writeString(5, _instance.arpabetMapping);
		if (_instance.numericMapping) _writer.writeString(6, _instance.numericMapping);
		if (_instance.callsignsMapping) _writer.writeString(7, _instance.callsignsMapping);
		if (_instance.phonemeCorrectionMapping) _writer.writeString(8, _instance.phonemeCorrectionMapping);
	}
	_language;
	_pipeline;
	_customPhonemizerId;
	_customLengthScales;
	_arpabetMapping;
	_numericMapping;
	_callsignsMapping;
	_phonemeCorrectionMapping;
	constructor(_value) {
		_value = _value || {};
		this.language = _value.language;
		this.pipeline = (_value.pipeline || []).slice();
		this.customPhonemizerId = _value.customPhonemizerId;
		this.customLengthScales = _value.customLengthScales ? new T2SCustomLengthScales(_value.customLengthScales) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2SNormalization.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			language: this.language,
			pipeline: (this.pipeline || []).slice(),
			customPhonemizerId: this.customPhonemizerId,
			customLengthScales: this.customLengthScales ? this.customLengthScales.toObject() : void 0,
			arpabetMapping: this.arpabetMapping,
			numericMapping: this.numericMapping,
			callsignsMapping: this.callsignsMapping,
			phonemeCorrectionMapping: this.phonemeCorrectionMapping
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			language: this.language,
			pipeline: (this.pipeline || []).slice(),
			customPhonemizerId: this.customPhonemizerId,
			customLengthScales: this.customLengthScales ? this.customLengthScales.toProtobufJSON(options) : null,
			arpabetMapping: this.arpabetMapping,
			numericMapping: this.numericMapping,
			callsignsMapping: this.callsignsMapping,
			phonemeCorrectionMapping: this.phonemeCorrectionMapping
		};
	}
};
var Postprocessing = class Postprocessing {
	static id = "ondewo.t2s.Postprocessing";
	static deserializeBinary(bytes) {
		const instance = new Postprocessing();
		Postprocessing.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.silenceSecs = _instance.silenceSecs || 0;
		_instance.pipeline = _instance.pipeline || [];
		_instance.logmmse = _instance.logmmse || void 0;
		_instance.wiener = _instance.wiener || void 0;
		_instance.apodization = _instance.apodization || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Postprocessing.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.silenceSecs) _writer.writeFloat(1, _instance.silenceSecs);
		if (_instance.pipeline && _instance.pipeline.length) _writer.writeRepeatedString(2, _instance.pipeline);
		if (_instance.logmmse) _writer.writeMessage(3, _instance.logmmse, Logmnse.serializeBinaryToWriter);
		if (_instance.wiener) _writer.writeMessage(4, _instance.wiener, Wiener.serializeBinaryToWriter);
		if (_instance.apodization) _writer.writeMessage(5, _instance.apodization, Apodization.serializeBinaryToWriter);
	}
	_silenceSecs;
	_pipeline;
	_logmmse;
	_wiener;
	_apodization;
	constructor(_value) {
		_value = _value || {};
		this.silenceSecs = _value.silenceSecs;
		this.pipeline = (_value.pipeline || []).slice();
		this.logmmse = _value.logmmse ? new Logmnse(_value.logmmse) : void 0;
		this.wiener = _value.wiener ? new Wiener(_value.wiener) : void 0;
		this.apodization = _value.apodization ? new Apodization(_value.apodization) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Postprocessing.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			silenceSecs: this.silenceSecs,
			pipeline: (this.pipeline || []).slice(),
			logmmse: this.logmmse ? this.logmmse.toObject() : void 0,
			wiener: this.wiener ? this.wiener.toObject() : void 0,
			apodization: this.apodization ? this.apodization.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			silenceSecs: this.silenceSecs,
			pipeline: (this.pipeline || []).slice(),
			logmmse: this.logmmse ? this.logmmse.toProtobufJSON(options) : null,
			wiener: this.wiener ? this.wiener.toProtobufJSON(options) : null,
			apodization: this.apodization ? this.apodization.toProtobufJSON(options) : null
		};
	}
};
var Logmnse = class Logmnse {
	static id = "ondewo.t2s.Logmnse";
	static deserializeBinary(bytes) {
		const instance = new Logmnse();
		Logmnse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.initialNoise = _instance.initialNoise || "0";
		_instance.windowSize = _instance.windowSize || "0";
		_instance.noiseThreshold = _instance.noiseThreshold || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		Logmnse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.initialNoise) _writer.writeInt64String(1, _instance.initialNoise);
		if (_instance.windowSize) _writer.writeInt64String(2, _instance.windowSize);
		if (_instance.noiseThreshold) _writer.writeFloat(3, _instance.noiseThreshold);
	}
	_initialNoise;
	_windowSize;
	_noiseThreshold;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Logmnse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			initialNoise: this.initialNoise,
			windowSize: this.windowSize,
			noiseThreshold: this.noiseThreshold
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			initialNoise: this.initialNoise,
			windowSize: this.windowSize,
			noiseThreshold: this.noiseThreshold
		};
	}
};
var Wiener = class Wiener {
	static id = "ondewo.t2s.Wiener";
	static deserializeBinary(bytes) {
		const instance = new Wiener();
		Wiener.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.frameLen = _instance.frameLen || "0";
		_instance.lpcOrder = _instance.lpcOrder || "0";
		_instance.iterations = _instance.iterations || "0";
		_instance.alpha = _instance.alpha || 0;
		_instance.thresh = _instance.thresh || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		Wiener.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.frameLen) _writer.writeInt64String(1, _instance.frameLen);
		if (_instance.lpcOrder) _writer.writeInt64String(2, _instance.lpcOrder);
		if (_instance.iterations) _writer.writeInt64String(3, _instance.iterations);
		if (_instance.alpha) _writer.writeFloat(4, _instance.alpha);
		if (_instance.thresh) _writer.writeFloat(5, _instance.thresh);
	}
	_frameLen;
	_lpcOrder;
	_iterations;
	_alpha;
	_thresh;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Wiener.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			frameLen: this.frameLen,
			lpcOrder: this.lpcOrder,
			iterations: this.iterations,
			alpha: this.alpha,
			thresh: this.thresh
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			frameLen: this.frameLen,
			lpcOrder: this.lpcOrder,
			iterations: this.iterations,
			alpha: this.alpha,
			thresh: this.thresh
		};
	}
};
var Apodization = class Apodization {
	static id = "ondewo.t2s.Apodization";
	static deserializeBinary(bytes) {
		const instance = new Apodization();
		Apodization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.apodizationSecs = _instance.apodizationSecs || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.apodizationSecs = _reader.readFloat();
					break;
				default: _reader.skipField();
			}
		}
		Apodization.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.apodizationSecs) _writer.writeFloat(1, _instance.apodizationSecs);
	}
	_apodizationSecs;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Apodization.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { apodizationSecs: this.apodizationSecs };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { apodizationSecs: this.apodizationSecs };
	}
};
var T2SCustomLengthScales = class T2SCustomLengthScales {
	static id = "ondewo.t2s.T2SCustomLengthScales";
	static deserializeBinary(bytes) {
		const instance = new T2SCustomLengthScales();
		T2SCustomLengthScales.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
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
	static deserializeBinaryFromReader(_instance, _reader) {
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
				default: _reader.skipField();
			}
		}
		T2SCustomLengthScales.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.text) _writer.writeFloat(1, _instance.text);
		if (_instance.email) _writer.writeFloat(2, _instance.email);
		if (_instance.url) _writer.writeFloat(3, _instance.url);
		if (_instance.phone) _writer.writeFloat(4, _instance.phone);
		if (_instance.spell) _writer.writeFloat(5, _instance.spell);
		if (_instance.spellWithNames) _writer.writeFloat(6, _instance.spellWithNames);
		if (_instance.callsignLong) _writer.writeFloat(7, _instance.callsignLong);
		if (_instance.callsignShort) _writer.writeFloat(8, _instance.callsignShort);
	}
	_text;
	_email;
	_url;
	_phone;
	_spell;
	_spellWithNames;
	_callsignLong;
	_callsignShort;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		T2SCustomLengthScales.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var PhonemizerId = class PhonemizerId {
	static id = "ondewo.t2s.PhonemizerId";
	static deserializeBinary(bytes) {
		const instance = new PhonemizerId();
		PhonemizerId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.id = _instance.id || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.id = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		PhonemizerId.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) _writer.writeString(1, _instance.id);
	}
	_id;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		PhonemizerId.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { id: this.id };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { id: this.id };
	}
};
var CustomPhonemizerProto = class CustomPhonemizerProto {
	static id = "ondewo.t2s.CustomPhonemizerProto";
	static deserializeBinary(bytes) {
		const instance = new CustomPhonemizerProto();
		CustomPhonemizerProto.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.id = _instance.id || "";
		_instance.maps = _instance.maps || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.id = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new Map();
					_reader.readMessage(messageInitializer2, Map.deserializeBinaryFromReader);
					(_instance.maps = _instance.maps || []).push(messageInitializer2);
					break;
				default: _reader.skipField();
			}
		}
		CustomPhonemizerProto.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) _writer.writeString(1, _instance.id);
		if (_instance.maps && _instance.maps.length) _writer.writeRepeatedMessage(2, _instance.maps, Map.serializeBinaryToWriter);
	}
	_id;
	_maps;
	constructor(_value) {
		_value = _value || {};
		this.id = _value.id;
		this.maps = (_value.maps || []).map((m) => new Map(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		CustomPhonemizerProto.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			id: this.id,
			maps: (this.maps || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			id: this.id,
			maps: (this.maps || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
var Map = class Map {
	static id = "ondewo.t2s.Map";
	static deserializeBinary(bytes) {
		const instance = new Map();
		Map.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.word = _instance.word || "";
		_instance.phonemeGroups = _instance.phonemeGroups || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.word = _reader.readString();
					break;
				case 2:
					_instance.phonemeGroups = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		Map.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.word) _writer.writeString(1, _instance.word);
		if (_instance.phonemeGroups) _writer.writeString(2, _instance.phonemeGroups);
	}
	_word;
	_phonemeGroups;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Map.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			word: this.word,
			phonemeGroups: this.phonemeGroups
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			word: this.word,
			phonemeGroups: this.phonemeGroups
		};
	}
};
var ListCustomPhonemizerResponse = class ListCustomPhonemizerResponse {
	static id = "ondewo.t2s.ListCustomPhonemizerResponse";
	static deserializeBinary(bytes) {
		const instance = new ListCustomPhonemizerResponse();
		ListCustomPhonemizerResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.phonemizers = _instance.phonemizers || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new CustomPhonemizerProto();
					_reader.readMessage(messageInitializer1, CustomPhonemizerProto.deserializeBinaryFromReader);
					(_instance.phonemizers = _instance.phonemizers || []).push(messageInitializer1);
					break;
				default: _reader.skipField();
			}
		}
		ListCustomPhonemizerResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.phonemizers && _instance.phonemizers.length) _writer.writeRepeatedMessage(1, _instance.phonemizers, CustomPhonemizerProto.serializeBinaryToWriter);
	}
	_phonemizers;
	constructor(_value) {
		_value = _value || {};
		this.phonemizers = (_value.phonemizers || []).map((m) => new CustomPhonemizerProto(m));
		ListCustomPhonemizerResponse.refineValues(this);
	}
	get phonemizers() {
		return this._phonemizers;
	}
	set phonemizers(value) {
		this._phonemizers = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		ListCustomPhonemizerResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { phonemizers: (this.phonemizers || []).map((m) => m.toObject()) };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { phonemizers: (this.phonemizers || []).map((m) => m.toProtobufJSON(options)) };
	}
};
var ListCustomPhonemizerRequest = class ListCustomPhonemizerRequest {
	static id = "ondewo.t2s.ListCustomPhonemizerRequest";
	static deserializeBinary(bytes) {
		const instance = new ListCustomPhonemizerRequest();
		ListCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.pipelineIds = _instance.pipelineIds || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.pipelineIds = _instance.pipelineIds || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListCustomPhonemizerRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pipelineIds && _instance.pipelineIds.length) _writer.writeRepeatedString(1, _instance.pipelineIds);
	}
	_pipelineIds;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { pipelineIds: (this.pipelineIds || []).slice() };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { pipelineIds: (this.pipelineIds || []).slice() };
	}
};
var UpdateCustomPhonemizerRequest = class UpdateCustomPhonemizerRequest {
	static id = "ondewo.t2s.UpdateCustomPhonemizerRequest";
	static deserializeBinary(bytes) {
		const instance = new UpdateCustomPhonemizerRequest();
		UpdateCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.id = _instance.id || "";
		_instance.updateMethod = _instance.updateMethod || 0;
		_instance.maps = _instance.maps || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
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
					_reader.readMessage(messageInitializer3, Map.deserializeBinaryFromReader);
					(_instance.maps = _instance.maps || []).push(messageInitializer3);
					break;
				default: _reader.skipField();
			}
		}
		UpdateCustomPhonemizerRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) _writer.writeString(1, _instance.id);
		if (_instance.updateMethod) _writer.writeEnum(2, _instance.updateMethod);
		if (_instance.maps && _instance.maps.length) _writer.writeRepeatedMessage(3, _instance.maps, Map.serializeBinaryToWriter);
	}
	_id;
	_updateMethod;
	_maps;
	constructor(_value) {
		_value = _value || {};
		this.id = _value.id;
		this.updateMethod = _value.updateMethod;
		this.maps = (_value.maps || []).map((m) => new Map(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		UpdateCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			id: this.id,
			updateMethod: this.updateMethod,
			maps: (this.maps || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			id: this.id,
			updateMethod: UpdateCustomPhonemizerRequest.UpdateMethod[this.updateMethod === null || this.updateMethod === void 0 ? 0 : this.updateMethod],
			maps: (this.maps || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
(function(UpdateCustomPhonemizerRequest) {
	(function(UpdateMethod) {
		UpdateMethod[UpdateMethod["extend_hard"] = 0] = "extend_hard";
		UpdateMethod[UpdateMethod["extend_soft"] = 1] = "extend_soft";
		UpdateMethod[UpdateMethod["replace"] = 2] = "replace";
	})(UpdateCustomPhonemizerRequest.UpdateMethod || (UpdateCustomPhonemizerRequest.UpdateMethod = {}));
})(UpdateCustomPhonemizerRequest || (UpdateCustomPhonemizerRequest = {}));
var CreateCustomPhonemizerRequest = class CreateCustomPhonemizerRequest {
	static id = "ondewo.t2s.CreateCustomPhonemizerRequest";
	static deserializeBinary(bytes) {
		const instance = new CreateCustomPhonemizerRequest();
		CreateCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.prefix = _instance.prefix || "";
		_instance.maps = _instance.maps || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.prefix = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new Map();
					_reader.readMessage(messageInitializer2, Map.deserializeBinaryFromReader);
					(_instance.maps = _instance.maps || []).push(messageInitializer2);
					break;
				default: _reader.skipField();
			}
		}
		CreateCustomPhonemizerRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.prefix) _writer.writeString(1, _instance.prefix);
		if (_instance.maps && _instance.maps.length) _writer.writeRepeatedMessage(2, _instance.maps, Map.serializeBinaryToWriter);
	}
	_prefix;
	_maps;
	constructor(_value) {
		_value = _value || {};
		this.prefix = _value.prefix;
		this.maps = (_value.maps || []).map((m) => new Map(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		CreateCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			prefix: this.prefix,
			maps: (this.maps || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			prefix: this.prefix,
			maps: (this.maps || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
var VoiceCloningRequest = class VoiceCloningRequest {
	static id = "ondewo.t2s.VoiceCloningRequest";
	static deserializeBinary(bytes) {
		const instance = new VoiceCloningRequest();
		VoiceCloningRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.sampleAudio = _instance.sampleAudio || /* @__PURE__ */ new Uint8Array();
		_instance.transcription = _instance.transcription || "";
		_instance.speakerName = _instance.speakerName || "";
		_instance.speakerLanguage = _instance.speakerLanguage || "";
		_instance.modelName = _instance.modelName || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sampleAudio = _reader.readBytes();
					break;
				case 2:
					_instance.transcription = _reader.readString();
					break;
				case 3:
					_instance.speakerName = _reader.readString();
					break;
				case 4:
					_instance.speakerLanguage = _reader.readString();
					break;
				case 5:
					_instance.modelName = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		VoiceCloningRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sampleAudio && _instance.sampleAudio.length) _writer.writeBytes(1, _instance.sampleAudio);
		if (_instance.transcription) _writer.writeString(2, _instance.transcription);
		if (_instance.speakerName) _writer.writeString(3, _instance.speakerName);
		if (_instance.speakerLanguage) _writer.writeString(4, _instance.speakerLanguage);
		if (_instance.modelName) _writer.writeString(5, _instance.modelName);
	}
	_sampleAudio;
	_transcription;
	_speakerName;
	_speakerLanguage;
	_modelName;
	constructor(_value) {
		_value = _value || {};
		this.sampleAudio = _value.sampleAudio;
		this.transcription = _value.transcription;
		this.speakerName = _value.speakerName;
		this.speakerLanguage = _value.speakerLanguage;
		this.modelName = _value.modelName;
		VoiceCloningRequest.refineValues(this);
	}
	get sampleAudio() {
		return this._sampleAudio;
	}
	set sampleAudio(value) {
		this._sampleAudio = value;
	}
	get transcription() {
		return this._transcription;
	}
	set transcription(value) {
		this._transcription = value;
	}
	get speakerName() {
		return this._speakerName;
	}
	set speakerName(value) {
		this._speakerName = value;
	}
	get speakerLanguage() {
		return this._speakerLanguage;
	}
	set speakerLanguage(value) {
		this._speakerLanguage = value;
	}
	get modelName() {
		return this._modelName;
	}
	set modelName(value) {
		this._modelName = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		VoiceCloningRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			sampleAudio: this.sampleAudio ? this.sampleAudio.subarray(0) : /* @__PURE__ */ new Uint8Array(),
			transcription: this.transcription,
			speakerName: this.speakerName,
			speakerLanguage: this.speakerLanguage,
			modelName: this.modelName
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			sampleAudio: this.sampleAudio ? uint8ArrayToBase64(this.sampleAudio) : "",
			transcription: this.transcription,
			speakerName: this.speakerName,
			speakerLanguage: this.speakerLanguage,
			modelName: this.modelName
		};
	}
};
const GRPC_TEXT2_SPEECH_CLIENT_SETTINGS = new InjectionToken("GRPC_TEXT2_SPEECH_CLIENT_SETTINGS");
var Text2SpeechClient = class Text2SpeechClient {
	handler;
	client;
	$raw = {
		synthesize: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/Synthesize",
				requestData,
				requestMetadata,
				requestClass: SynthesizeRequest,
				responseClass: SynthesizeResponse
			});
		},
		batchSynthesize: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/BatchSynthesize",
				requestData,
				requestMetadata,
				requestClass: BatchSynthesizeRequest,
				responseClass: BatchSynthesizeResponse
			});
		},
		normalizeText: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/NormalizeText",
				requestData,
				requestMetadata,
				requestClass: NormalizeTextRequest,
				responseClass: NormalizeTextResponse
			});
		},
		getT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/GetT2sPipeline",
				requestData,
				requestMetadata,
				requestClass: T2sPipelineId,
				responseClass: Text2SpeechConfig
			});
		},
		createT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/CreateT2sPipeline",
				requestData,
				requestMetadata,
				requestClass: Text2SpeechConfig,
				responseClass: T2sPipelineId
			});
		},
		deleteT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/DeleteT2sPipeline",
				requestData,
				requestMetadata,
				requestClass: T2sPipelineId,
				responseClass: googleProtobuf001.Empty
			});
		},
		updateT2sPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/UpdateT2sPipeline",
				requestData,
				requestMetadata,
				requestClass: Text2SpeechConfig,
				responseClass: googleProtobuf001.Empty
			});
		},
		listT2sPipelines: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/ListT2sPipelines",
				requestData,
				requestMetadata,
				requestClass: ListT2sPipelinesRequest,
				responseClass: ListT2sPipelinesResponse
			});
		},
		listT2sLanguages: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/ListT2sLanguages",
				requestData,
				requestMetadata,
				requestClass: ListT2sLanguagesRequest,
				responseClass: ListT2sLanguagesResponse
			});
		},
		listT2sDomains: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/ListT2sDomains",
				requestData,
				requestMetadata,
				requestClass: ListT2sDomainsRequest,
				responseClass: ListT2sDomainsResponse
			});
		},
		listT2sNormalizationPipelines: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/ListT2sNormalizationPipelines",
				requestData,
				requestMetadata,
				requestClass: ListT2sNormalizationPipelinesRequest,
				responseClass: ListT2sNormalizationPipelinesResponse
			});
		},
		getServiceInfo: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/GetServiceInfo",
				requestData,
				requestMetadata,
				requestClass: googleProtobuf001.Empty,
				responseClass: T2SGetServiceInfoResponse
			});
		},
		getCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/GetCustomPhonemizer",
				requestData,
				requestMetadata,
				requestClass: PhonemizerId,
				responseClass: CustomPhonemizerProto
			});
		},
		createCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/CreateCustomPhonemizer",
				requestData,
				requestMetadata,
				requestClass: CreateCustomPhonemizerRequest,
				responseClass: PhonemizerId
			});
		},
		deleteCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/DeleteCustomPhonemizer",
				requestData,
				requestMetadata,
				requestClass: PhonemizerId,
				responseClass: googleProtobuf001.Empty
			});
		},
		updateCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/UpdateCustomPhonemizer",
				requestData,
				requestMetadata,
				requestClass: UpdateCustomPhonemizerRequest,
				responseClass: CustomPhonemizerProto
			});
		},
		listCustomPhonemizer: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/ListCustomPhonemizer",
				requestData,
				requestMetadata,
				requestClass: ListCustomPhonemizerRequest,
				responseClass: ListCustomPhonemizerResponse
			});
		},
		voiceCloning: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: "/ondewo.t2s.Text2Speech/VoiceCloning",
				requestData,
				requestMetadata,
				requestClass: VoiceCloningRequest,
				responseClass: googleProtobuf001.Empty
			});
		}
	};
	constructor(settings, clientFactory, handler) {
		this.handler = handler;
		this.client = clientFactory.createClient("ondewo.t2s.Text2Speech", settings);
	}
	synthesize(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.synthesize(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	batchSynthesize(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchSynthesize(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	normalizeText(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.normalizeText(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getT2sPipeline(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	createT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createT2sPipeline(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	deleteT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteT2sPipeline(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	updateT2sPipeline(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateT2sPipeline(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listT2sPipelines(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listT2sPipelines(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listT2sLanguages(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listT2sLanguages(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listT2sDomains(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listT2sDomains(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listT2sNormalizationPipelines(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listT2sNormalizationPipelines(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getServiceInfo(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getServiceInfo(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getCustomPhonemizer(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	createCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createCustomPhonemizer(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	deleteCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteCustomPhonemizer(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	updateCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateCustomPhonemizer(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listCustomPhonemizer(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listCustomPhonemizer(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	voiceCloning(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.voiceCloning(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.6",
		ngImport: i0,
		type: Text2SpeechClient,
		deps: [
			{
				token: GRPC_TEXT2_SPEECH_CLIENT_SETTINGS,
				optional: true
			},
			{ token: GRPC_CLIENT_FACTORY },
			{ token: i1$1.GrpcHandler }
		],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.6",
		ngImport: i0,
		type: Text2SpeechClient,
		providedIn: "any"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.6",
	ngImport: i0,
	type: Text2SpeechClient,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "any" }]
	}],
	ctorParameters: () => [
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [GRPC_TEXT2_SPEECH_CLIENT_SETTINGS]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [GRPC_CLIENT_FACTORY]
			}]
		},
		{ type: i1$1.GrpcHandler }
	]
});
const TOKEN_PROVIDER = new InjectionToken("ONDEWO_T2S_TOKEN_PROVIDER");
const REFRESH_SKEW_IN_S = 30;
const MIN_REFRESH_DELAY_IN_S = 1;
const KEYCLOAK_TOKEN_PROVIDER_CONFIG = new InjectionToken("ONDEWO_T2S_KEYCLOAK_TOKEN_PROVIDER_CONFIG");
var KeycloakAuthenticationError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "KeycloakAuthenticationError";
	}
};
var KeycloakTokenProvider = class KeycloakTokenProvider {
	http;
	tokenEndpoint;
	clientId;
	verifySsl;
	offlineToken;
	username;
	password;
	tokenExpirationInS;
	accessToken = "";
	refreshToken = "";
	timer = null;
	stopped = false;
	deadlineInMs = null;
	bootstrapPromise = null;
	constructor(http, config) {
		this.http = http;
		this.validateConfig(config);
		const base = config.keycloakUrl.replace(/\/+$/, "");
		this.tokenEndpoint = `${base}/realms/${encodeURIComponent(config.realm)}/protocol/openid-connect/token`;
		this.clientId = config.clientId;
		this.verifySsl = config.keycloakVerifySsl ?? true;
		this.offlineToken = config.offlineToken ?? "";
		this.username = config.username ?? "";
		this.password = config.password ?? "";
		this.tokenExpirationInS = config.tokenExpirationInS;
	}
	getToken() {
		if (this.bootstrapPromise === null) this.bootstrapPromise = this.bootstrap();
		if (this.accessToken.length > 0) return this.accessToken;
		return this.bootstrapPromise;
	}
	get keycloakVerifySsl() {
		return this.verifySsl;
	}
	ngOnDestroy() {
		this.stopped = true;
		if (this.timer !== null) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	}
	async bootstrap() {
		let params;
		if (this.offlineToken.length > 0) params = {
			grant_type: "refresh_token",
			client_id: this.clientId,
			refresh_token: this.offlineToken
		};
		else params = {
			grant_type: "password",
			client_id: this.clientId,
			username: this.username,
			password: this.password,
			scope: "offline_access"
		};
		const response = await this.postTokenRequest(params);
		this.storeTokens(response);
		if (this.refreshToken.length === 0) throw new KeycloakAuthenticationError("Keycloak token response did not contain a refresh_token; the SDK client must have directAccessGrants + the offline_access scope");
		if (this.tokenExpirationInS !== void 0) this.deadlineInMs = Date.now() + this.tokenExpirationInS * 1e3;
		this.scheduleRefresh(response.expires_in);
		return this.accessToken;
	}
	async refresh() {
		if (this.stopped) return;
		if (this.deadlineInMs !== null && Date.now() >= this.deadlineInMs) {
			this.ngOnDestroy();
			return;
		}
		const response = await this.postTokenRequest({
			grant_type: "refresh_token",
			client_id: this.clientId,
			refresh_token: this.refreshToken
		});
		this.storeTokens(response);
		this.scheduleRefresh(response.expires_in);
	}
	scheduleRefresh(expiresInRaw) {
		if (this.stopped) return;
		let expiresInS = MIN_REFRESH_DELAY_IN_S;
		if (typeof expiresInRaw === "number" && expiresInRaw > 0) expiresInS = expiresInRaw;
		let delayInS = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);
		if (this.deadlineInMs !== null) {
			const remainingInMs = this.deadlineInMs - Date.now();
			if (remainingInMs <= 0) {
				this.ngOnDestroy();
				return;
			}
			delayInS = Math.min(delayInS, remainingInMs / 1e3);
		}
		this.timer = setTimeout(() => {
			this.refresh().catch(() => {});
		}, delayInS * 1e3);
	}
	async postTokenRequest(params) {
		const body = new URLSearchParams(params).toString();
		let response;
		try {
			response = await firstValueFrom(this.http.post(this.tokenEndpoint, body, { headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json"
			} }));
		} catch (caught) {
			let status = 0;
			if (caught instanceof HttpErrorResponse) status = caught.status;
			throw new KeycloakAuthenticationError(`Keycloak token endpoint request failed with HTTP ${status}`);
		}
		if (typeof response.access_token !== "string" || response.access_token.length === 0) throw new KeycloakAuthenticationError("Keycloak token response did not contain an access_token");
		return response;
	}
	storeTokens(response) {
		this.accessToken = response.access_token;
		if (typeof response.refresh_token === "string" && response.refresh_token.length > 0) this.refreshToken = response.refresh_token;
	}
	validateConfig(config) {
		for (const key of [
			"keycloakUrl",
			"realm",
			"clientId"
		]) if (config[key].length === 0) throw new KeycloakAuthenticationError(`KeycloakTokenProviderConfig.${key} is required and must be non-empty`);
		const hasOfflineToken = (config.offlineToken ?? "").length > 0;
		const hasPassword = (config.username ?? "").length > 0 && (config.password ?? "").length > 0;
		if (!hasOfflineToken && !hasPassword) throw new KeycloakAuthenticationError("KeycloakTokenProviderConfig requires either an offlineToken or a username + password");
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.6",
		ngImport: i0,
		type: KeycloakTokenProvider,
		deps: [{ token: i1.HttpClient }, { token: KEYCLOAK_TOKEN_PROVIDER_CONFIG }],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.6",
		ngImport: i0,
		type: KeycloakTokenProvider,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.6",
	ngImport: i0,
	type: KeycloakTokenProvider,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => [{ type: i1.HttpClient }, {
		type: void 0,
		decorators: [{
			type: Inject,
			args: [KEYCLOAK_TOKEN_PROVIDER_CONFIG]
		}]
	}]
});
const AUTHORIZATION_HEADER = "Authorization";
const BEARER_PREFIX = "Bearer ";
function resolveToken(result) {
	let source;
	if (isObservable(result)) source = result;
	else source = from(Promise.resolve(result));
	return new Observable((subscriber) => {
		const subscription = source.subscribe({
			next: (token) => subscriber.next(normalizeToken(token)),
			error: (caughtError) => subscriber.error(caughtError),
			complete: () => subscriber.complete()
		});
		return () => subscription.unsubscribe();
	});
}
function buildBearerValue(token) {
	if (token === null) return null;
	return `${BEARER_PREFIX}${token}`;
}
function resolveBearerValue(result) {
	return new Observable((subscriber) => {
		const subscription = resolveToken(result).subscribe({
			next: (token) => subscriber.next(buildBearerValue(token)),
			error: (caughtError) => subscriber.error(caughtError),
			complete: () => subscriber.complete()
		});
		return () => subscription.unsubscribe();
	});
}
function normalizeToken(token) {
	if (token === null || token === void 0) return null;
	const trimmed = token.trim();
	if (trimmed.length === 0) return null;
	return trimmed;
}
function authHttpInterceptor(req, next) {
	if (req.headers.has("Authorization")) return next(req);
	return resolveBearerValue(inject(TOKEN_PROVIDER).getToken()).pipe(switchMap((bearerValue) => {
		if (bearerValue === null) return next(req);
		return next(req.clone({ setHeaders: { [AUTHORIZATION_HEADER]: bearerValue } }));
	}));
}
var AuthGrpcInterceptor = class AuthGrpcInterceptor {
	tokenProvider;
	constructor(tokenProvider) {
		this.tokenProvider = tokenProvider;
	}
	intercept(request, next) {
		if (request.requestMetadata.has("Authorization")) return next.handle(request);
		return resolveBearerValue(this.tokenProvider.getToken()).pipe(switchMap((bearerValue) => {
			if (bearerValue !== null) request.requestMetadata.set(AUTHORIZATION_HEADER, bearerValue);
			return next.handle(request);
		}));
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.6",
		ngImport: i0,
		type: AuthGrpcInterceptor,
		deps: [{ token: TOKEN_PROVIDER }],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.6",
		ngImport: i0,
		type: AuthGrpcInterceptor
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.6",
	ngImport: i0,
	type: AuthGrpcInterceptor,
	decorators: [{ type: Injectable }],
	ctorParameters: () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [TOKEN_PROVIDER]
		}]
	}]
});
function provideOndewoT2sAuth(tokenProvider) {
	return makeEnvironmentProviders([
		tokenProvider,
		{
			provide: TOKEN_PROVIDER,
			useExisting: tokenProvider
		},
		{
			provide: GRPC_INTERCEPTORS,
			useClass: AuthGrpcInterceptor,
			multi: true
		}
	]);
}
const BROWSER_UNSUPPORTED_TLS_FIELDS = [
	"grpcCert",
	"grpcClientCert",
	"grpcClientKey",
	"grpc_cert",
	"grpc_client_cert",
	"grpc_client_key"
];
var GrpcWebEndpointError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "GrpcWebEndpointError";
	}
};
const SCHEME_PATTERN = /^[a-z][a-z0-9+.-]*:\/\//i;
const BARE_IPV6_PATTERN = /^(?=(?:[^:]*:){2})[0-9a-f:.]+$/i;
function buildGrpcWebHost(config) {
	const fields = config;
	for (const field of BROWSER_UNSUPPORTED_TLS_FIELDS) {
		const value = fields[field];
		if (value !== void 0 && value !== null && value !== "") throw new GrpcWebEndpointError(`GrpcWebEndpointConfig.${field} is not supported by a browser gRPC-web client: the browser owns the TLS handshake, trusts its own certificate store and presents a client certificate only from the browser/OS store. Remove the field (never ship a private key to a browser); see the README section 'TLS, mutual TLS and certificates'.`);
	}
	const host = config.host;
	if (typeof host !== "string" || host.trim() === "") throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must be a non-empty string");
	const secure = config.useSecureChannel !== false;
	if (SCHEME_PATTERN.test(host)) {
		if (config.port !== void 0) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.port must be omitted when GrpcWebEndpointConfig.host is a URL; put the port in the URL");
		let url;
		try {
			url = new URL(host);
		} catch {
			throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host is not a valid URL");
		}
		if (url.protocol !== "https:" && url.protocol !== "http:") throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must use the http:// or https:// scheme");
		if (url.protocol === "http:") {
			if (secure) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host uses http:// but useSecureChannel is true; use an https:// URL or set useSecureChannel: false");
			warnInsecure(url.host);
		}
		return host;
	}
	let bareHost = host;
	if (!host.startsWith("[") && host.includes(":")) {
		if (!BARE_IPV6_PATTERN.test(host)) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must not contain a port; set GrpcWebEndpointConfig.port instead");
		bareHost = `[${host}]`;
	}
	let authority = bareHost;
	if (config.port !== void 0) {
		const port = Number(config.port);
		if (String(config.port).trim() === "" || !Number.isInteger(port) || port < 1 || port > 65535) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.port must be an integer between 1 and 65535");
		authority = `${bareHost}:${port}`;
	}
	if (secure) return `https://${authority}`;
	warnInsecure(authority);
	return `http://${authority}`;
}
function warnInsecure(authority) {
	console.warn(`ONDEWO gRPC-web: insecure http:// endpoint ${authority}; requests and bearer tokens are sent unencrypted. Use useSecureChannel: true (https://) outside local development.`);
}
export { AUTHORIZATION_HEADER, Apodization, AudioFormat, AuthGrpcInterceptor, BEARER_PREFIX, BROWSER_UNSUPPORTED_TLS_FIELDS, BatchSynthesizeRequest, BatchSynthesizeResponse, Caching, CompositeInference, CreateCustomPhonemizerRequest, CustomPhonemizerProto, GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, GlowTTS, GlowTTSTriton, GrpcWebEndpointError, HiFiGan, HiFiGanTriton, KEYCLOAK_TOKEN_PROVIDER_CONFIG, KeycloakAuthenticationError, KeycloakTokenProvider, ListCustomPhonemizerRequest, ListCustomPhonemizerResponse, ListT2sDomainsRequest, ListT2sDomainsResponse, ListT2sLanguagesRequest, ListT2sLanguagesResponse, ListT2sNormalizationPipelinesRequest, ListT2sNormalizationPipelinesResponse, ListT2sPipelinesRequest, ListT2sPipelinesResponse, Logmnse, Map, MbMelganTriton, Mel2Audio, NormalizeTextRequest, NormalizeTextResponse, Pcm, PhonemizerId, Postprocessing, Qwen3TtsBase, Qwen3TtsCustomVoice, RequestConfig, SingleInference, StreamingSynthesizeRequest, StreamingSynthesizeResponse, SynthesizeRequest, SynthesizeResponse, T2SCustomLengthScales, T2SDescription, T2SGetServiceInfoResponse, T2SInference, T2SNormalization, T2sCloudProviderConfig, T2sCloudProviderConfigElevenLabs, T2sCloudProviderConfigGoogle, T2sCloudProviderConfigMicrosoft, T2sCloudServiceAmazon, T2sCloudServiceElevenLabs, T2sCloudServiceGoogle, T2sCloudServiceMicrosoft, T2sPipelineId, TOKEN_PROVIDER, Text2Audio, Text2Mel, Text2SpeechClient, Text2SpeechConfig, UpdateCustomPhonemizerRequest, Vits, VitsTriton, VoiceCloningRequest, VoiceSettings, Wiener, authHttpInterceptor, buildBearerValue, buildGrpcWebHost, provideOndewoT2sAuth, resolveBearerValue, resolveToken };

//# sourceMappingURL=ondewo-t2s-client-angular.mjs.map
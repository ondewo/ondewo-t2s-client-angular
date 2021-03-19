import { BinaryWriter, BinaryReader } from 'google-protobuf';
import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import * as i2 from '@ngx-grpc/core';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY, GrpcHandler } from '@ngx-grpc/core';

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
class SynthesizeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param SynthesizeRequest value
     */
    constructor(value) {
        value = value || {};
        this.t2sPipelineId = value.t2sPipelineId;
        this.text = value.text;
        this.lengthScale = value.lengthScale;
        this.noiseScale = value.noiseScale;
        this.sampleRate = value.sampleRate;
        this.pcm = value.pcm;
        this.audioFormat = value.audioFormat;
        SynthesizeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SynthesizeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SynthesizeRequest();
        SynthesizeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.t2sPipelineId = instance.t2sPipelineId || '';
        instance.text = instance.text || '';
        instance.lengthScale = instance.lengthScale || 0;
        instance.noiseScale = instance.noiseScale || 0;
        instance.sampleRate = instance.sampleRate || 0;
        instance.pcm = instance.pcm || 0;
        instance.audioFormat = instance.audioFormat || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.t2sPipelineId = reader.readString();
                    break;
                case 2:
                    instance.text = reader.readString();
                    break;
                case 3:
                    instance.lengthScale = reader.readFloat();
                    break;
                case 4:
                    instance.noiseScale = reader.readFloat();
                    break;
                case 5:
                    instance.sampleRate = reader.readInt32();
                    break;
                case 6:
                    instance.pcm = reader.readEnum();
                    break;
                case 7:
                    instance.audioFormat = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        SynthesizeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.t2sPipelineId) {
            writer.writeString(1, instance.t2sPipelineId);
        }
        if (instance.text) {
            writer.writeString(2, instance.text);
        }
        if (instance.lengthScale) {
            writer.writeFloat(3, instance.lengthScale);
        }
        if (instance.noiseScale) {
            writer.writeFloat(4, instance.noiseScale);
        }
        if (instance.sampleRate) {
            writer.writeInt32(5, instance.sampleRate);
        }
        if (instance.pcm) {
            writer.writeEnum(6, instance.pcm);
        }
        if (instance.audioFormat) {
            writer.writeEnum(7, instance.audioFormat);
        }
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
    get sampleRate() {
        return this._sampleRate;
    }
    set sampleRate(value) {
        this._sampleRate = value;
    }
    get pcm() {
        return this._pcm;
    }
    set pcm(value) {
        this._pcm = value;
    }
    get audioFormat() {
        return this._audioFormat;
    }
    set audioFormat(value) {
        this._audioFormat = value;
    }
    toObject() {
        return {
            t2sPipelineId: this.t2sPipelineId,
            text: this.text,
            lengthScale: this.lengthScale,
            noiseScale: this.noiseScale,
            sampleRate: this.sampleRate,
            pcm: this.pcm,
            audioFormat: this.audioFormat
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (SynthesizeRequest) {
    let Pcm;
    (function (Pcm) {
        Pcm[Pcm["pcm16"] = 0] = "pcm16";
        Pcm[Pcm["pcm24"] = 1] = "pcm24";
        Pcm[Pcm["pcm32"] = 2] = "pcm32";
        Pcm[Pcm["pcmS8"] = 3] = "pcmS8";
        Pcm[Pcm["pcmU8"] = 4] = "pcmU8";
        Pcm[Pcm["float"] = 5] = "float";
        Pcm[Pcm["double"] = 6] = "double";
    })(Pcm = SynthesizeRequest.Pcm || (SynthesizeRequest.Pcm = {}));
})(SynthesizeRequest || (SynthesizeRequest = {}));
class SynthesizeResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param SynthesizeResponse value
     */
    constructor(value) {
        value = value || {};
        this.audio = value.audio;
        this.generationTime = value.generationTime;
        this.audioLength = value.audioLength;
        this.t2sPipelineId = value.t2sPipelineId;
        this.audioFormat = value.audioFormat;
        this.text = value.text;
        this.sampleRate = value.sampleRate;
        SynthesizeResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SynthesizeResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SynthesizeResponse();
        SynthesizeResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.audio = instance.audio || new Uint8Array();
        instance.generationTime = instance.generationTime || 0;
        instance.audioLength = instance.audioLength || 0;
        instance.t2sPipelineId = instance.t2sPipelineId || '';
        instance.audioFormat = instance.audioFormat || 0;
        instance.text = instance.text || '';
        instance.sampleRate = instance.sampleRate || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.audio = reader.readBytes();
                    break;
                case 2:
                    instance.generationTime = reader.readFloat();
                    break;
                case 3:
                    instance.audioLength = reader.readFloat();
                    break;
                case 4:
                    instance.t2sPipelineId = reader.readString();
                    break;
                case 5:
                    instance.audioFormat = reader.readEnum();
                    break;
                case 6:
                    instance.text = reader.readString();
                    break;
                case 7:
                    instance.sampleRate = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        SynthesizeResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.audio && instance.audio.length) {
            writer.writeBytes(1, instance.audio);
        }
        if (instance.generationTime) {
            writer.writeFloat(2, instance.generationTime);
        }
        if (instance.audioLength) {
            writer.writeFloat(3, instance.audioLength);
        }
        if (instance.t2sPipelineId) {
            writer.writeString(4, instance.t2sPipelineId);
        }
        if (instance.audioFormat) {
            writer.writeEnum(5, instance.audioFormat);
        }
        if (instance.text) {
            writer.writeString(6, instance.text);
        }
        if (instance.sampleRate) {
            writer.writeInt32(7, instance.sampleRate);
        }
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
    get t2sPipelineId() {
        return this._t2sPipelineId;
    }
    set t2sPipelineId(value) {
        this._t2sPipelineId = value;
    }
    get audioFormat() {
        return this._audioFormat;
    }
    set audioFormat(value) {
        this._audioFormat = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get sampleRate() {
        return this._sampleRate;
    }
    set sampleRate(value) {
        this._sampleRate = value;
    }
    toObject() {
        return {
            audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
            generationTime: this.generationTime,
            audioLength: this.audioLength,
            t2sPipelineId: this.t2sPipelineId,
            audioFormat: this.audioFormat,
            text: this.text,
            sampleRate: this.sampleRate
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListT2sPipelinesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListT2sPipelinesRequest value
     */
    constructor(value) {
        value = value || {};
        this.languages = (value.languages || []).slice();
        this.speakerSexes = (value.speakerSexes || []).slice();
        this.pipelineOwners = (value.pipelineOwners || []).slice();
        this.speakerNames = (value.speakerNames || []).slice();
        this.domains = (value.domains || []).slice();
        ListT2sPipelinesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListT2sPipelinesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListT2sPipelinesRequest();
        ListT2sPipelinesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languages = instance.languages || [];
        instance.speakerSexes = instance.speakerSexes || [];
        instance.pipelineOwners = instance.pipelineOwners || [];
        instance.speakerNames = instance.speakerNames || [];
        instance.domains = instance.domains || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.languages = instance.languages || []).push(reader.readString());
                    break;
                case 2:
                    (instance.speakerSexes = instance.speakerSexes || []).push(reader.readString());
                    break;
                case 3:
                    (instance.pipelineOwners = instance.pipelineOwners || []).push(reader.readString());
                    break;
                case 4:
                    (instance.speakerNames = instance.speakerNames || []).push(reader.readString());
                    break;
                case 5:
                    (instance.domains = instance.domains || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ListT2sPipelinesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languages && instance.languages.length) {
            writer.writeRepeatedString(1, instance.languages);
        }
        if (instance.speakerSexes && instance.speakerSexes.length) {
            writer.writeRepeatedString(2, instance.speakerSexes);
        }
        if (instance.pipelineOwners && instance.pipelineOwners.length) {
            writer.writeRepeatedString(3, instance.pipelineOwners);
        }
        if (instance.speakerNames && instance.speakerNames.length) {
            writer.writeRepeatedString(4, instance.speakerNames);
        }
        if (instance.domains && instance.domains.length) {
            writer.writeRepeatedString(5, instance.domains);
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
}
class ListT2sPipelinesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListT2sPipelinesResponse value
     */
    constructor(value) {
        value = value || {};
        this.pipelines = (value.pipelines || []).map(m => new Text2SpeechConfig(m));
        ListT2sPipelinesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListT2sPipelinesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListT2sPipelinesResponse();
        ListT2sPipelinesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pipelines = instance.pipelines || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Text2SpeechConfig();
                    reader.readMessage(messageInitializer1, Text2SpeechConfig.fromBinaryReader);
                    (instance.pipelines = instance.pipelines || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListT2sPipelinesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pipelines && instance.pipelines.length) {
            writer.writeRepeatedMessage(1, instance.pipelines, Text2SpeechConfig.toBinaryWriter);
        }
    }
    get pipelines() {
        return this._pipelines;
    }
    set pipelines(value) {
        this._pipelines = value;
    }
    toObject() {
        return {
            pipelines: (this.pipelines || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class T2sPipelineId {
    /**
     * Creates an object and applies default Protobuf values
     * @param T2sPipelineId value
     */
    constructor(value) {
        value = value || {};
        this.id = value.id;
        T2sPipelineId.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        T2sPipelineId.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new T2sPipelineId();
        T2sPipelineId.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.id = instance.id || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.id = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        T2sPipelineId.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.id) {
            writer.writeString(1, instance.id);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    toObject() {
        return {
            id: this.id
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Text2SpeechConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param Text2SpeechConfig value
     */
    constructor(value) {
        value = value || {};
        this.id = value.id;
        this.description = value.description
            ? new Description(value.description)
            : undefined;
        this.active = value.active;
        this.inference = value.inference
            ? new Inference(value.inference)
            : undefined;
        this.normalization = value.normalization
            ? new Normalization(value.normalization)
            : undefined;
        this.postprocessing = value.postprocessing
            ? new Postprocessing(value.postprocessing)
            : undefined;
        Text2SpeechConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Text2SpeechConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Text2SpeechConfig();
        Text2SpeechConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.id = instance.id || '';
        instance.description = instance.description || undefined;
        instance.active = instance.active || false;
        instance.inference = instance.inference || undefined;
        instance.normalization = instance.normalization || undefined;
        instance.postprocessing = instance.postprocessing || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.id = reader.readString();
                    break;
                case 2:
                    instance.description = new Description();
                    reader.readMessage(instance.description, Description.fromBinaryReader);
                    break;
                case 3:
                    instance.active = reader.readBool();
                    break;
                case 4:
                    instance.inference = new Inference();
                    reader.readMessage(instance.inference, Inference.fromBinaryReader);
                    break;
                case 5:
                    instance.normalization = new Normalization();
                    reader.readMessage(instance.normalization, Normalization.fromBinaryReader);
                    break;
                case 6:
                    instance.postprocessing = new Postprocessing();
                    reader.readMessage(instance.postprocessing, Postprocessing.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Text2SpeechConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.id) {
            writer.writeString(1, instance.id);
        }
        if (instance.description) {
            writer.writeMessage(2, instance.description, Description.toBinaryWriter);
        }
        if (instance.active) {
            writer.writeBool(3, instance.active);
        }
        if (instance.inference) {
            writer.writeMessage(4, instance.inference, Inference.toBinaryWriter);
        }
        if (instance.normalization) {
            writer.writeMessage(5, instance.normalization, Normalization.toBinaryWriter);
        }
        if (instance.postprocessing) {
            writer.writeMessage(6, instance.postprocessing, Postprocessing.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
class Description {
    /**
     * Creates an object and applies default Protobuf values
     * @param Description value
     */
    constructor(value) {
        value = value || {};
        this.language = value.language;
        this.speakerSex = value.speakerSex;
        this.pipelineOwner = value.pipelineOwner;
        this.comments = value.comments;
        this.speakerName = value.speakerName;
        this.domain = value.domain;
        Description.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Description.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Description();
        Description.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.language = instance.language || '';
        instance.speakerSex = instance.speakerSex || '';
        instance.pipelineOwner = instance.pipelineOwner || '';
        instance.comments = instance.comments || '';
        instance.speakerName = instance.speakerName || '';
        instance.domain = instance.domain || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.language = reader.readString();
                    break;
                case 2:
                    instance.speakerSex = reader.readString();
                    break;
                case 3:
                    instance.pipelineOwner = reader.readString();
                    break;
                case 4:
                    instance.comments = reader.readString();
                    break;
                case 5:
                    instance.speakerName = reader.readString();
                    break;
                case 6:
                    instance.domain = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        Description.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.language) {
            writer.writeString(1, instance.language);
        }
        if (instance.speakerSex) {
            writer.writeString(2, instance.speakerSex);
        }
        if (instance.pipelineOwner) {
            writer.writeString(3, instance.pipelineOwner);
        }
        if (instance.comments) {
            writer.writeString(4, instance.comments);
        }
        if (instance.speakerName) {
            writer.writeString(5, instance.speakerName);
        }
        if (instance.domain) {
            writer.writeString(6, instance.domain);
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
}
class Inference {
    /**
     * Creates an object and applies default Protobuf values
     * @param Inference value
     */
    constructor(value) {
        value = value || {};
        this.type = value.type;
        this.compositeInference = value.compositeInference
            ? new CompositeInference(value.compositeInference)
            : undefined;
        this.caching = value.caching ? new Caching(value.caching) : undefined;
        Inference.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Inference.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Inference();
        Inference.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.type = instance.type || '';
        instance.compositeInference = instance.compositeInference || undefined;
        instance.caching = instance.caching || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.type = reader.readString();
                    break;
                case 2:
                    instance.compositeInference = new CompositeInference();
                    reader.readMessage(instance.compositeInference, CompositeInference.fromBinaryReader);
                    break;
                case 3:
                    instance.caching = new Caching();
                    reader.readMessage(instance.caching, Caching.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Inference.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.type) {
            writer.writeString(1, instance.type);
        }
        if (instance.compositeInference) {
            writer.writeMessage(2, instance.compositeInference, CompositeInference.toBinaryWriter);
        }
        if (instance.caching) {
            writer.writeMessage(3, instance.caching, Caching.toBinaryWriter);
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
    toObject() {
        return {
            type: this.type,
            compositeInference: this.compositeInference
                ? this.compositeInference.toObject()
                : undefined,
            caching: this.caching ? this.caching.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CompositeInference {
    /**
     * Creates an object and applies default Protobuf values
     * @param CompositeInference value
     */
    constructor(value) {
        value = value || {};
        this.text2mel = value.text2mel ? new Text2Mel(value.text2mel) : undefined;
        this.mel2audio = value.mel2audio
            ? new Mel2Audio(value.mel2audio)
            : undefined;
        CompositeInference.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CompositeInference.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CompositeInference();
        CompositeInference.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.text2mel = instance.text2mel || undefined;
        instance.mel2audio = instance.mel2audio || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.text2mel = new Text2Mel();
                    reader.readMessage(instance.text2mel, Text2Mel.fromBinaryReader);
                    break;
                case 2:
                    instance.mel2audio = new Mel2Audio();
                    reader.readMessage(instance.mel2audio, Mel2Audio.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        CompositeInference.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.text2mel) {
            writer.writeMessage(1, instance.text2mel, Text2Mel.toBinaryWriter);
        }
        if (instance.mel2audio) {
            writer.writeMessage(2, instance.mel2audio, Mel2Audio.toBinaryWriter);
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
    toObject() {
        return {
            text2mel: this.text2mel ? this.text2mel.toObject() : undefined,
            mel2audio: this.mel2audio ? this.mel2audio.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Text2Mel {
    /**
     * Creates an object and applies default Protobuf values
     * @param Text2Mel value
     */
    constructor(value) {
        value = value || {};
        this.type = value.type;
        this.glowTts = value.glowTts ? new GlowTTS(value.glowTts) : undefined;
        this.glowTtsTriton = value.glowTtsTriton
            ? new GlowTTSTriton(value.glowTtsTriton)
            : undefined;
        Text2Mel.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Text2Mel.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Text2Mel();
        Text2Mel.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.type = instance.type || '';
        instance.glowTts = instance.glowTts || undefined;
        instance.glowTtsTriton = instance.glowTtsTriton || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.type = reader.readString();
                    break;
                case 3:
                    instance.glowTts = new GlowTTS();
                    reader.readMessage(instance.glowTts, GlowTTS.fromBinaryReader);
                    break;
                case 4:
                    instance.glowTtsTriton = new GlowTTSTriton();
                    reader.readMessage(instance.glowTtsTriton, GlowTTSTriton.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Text2Mel.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.type) {
            writer.writeString(1, instance.type);
        }
        if (instance.glowTts) {
            writer.writeMessage(3, instance.glowTts, GlowTTS.toBinaryWriter);
        }
        if (instance.glowTtsTriton) {
            writer.writeMessage(4, instance.glowTtsTriton, GlowTTSTriton.toBinaryWriter);
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
    toObject() {
        return {
            type: this.type,
            glowTts: this.glowTts ? this.glowTts.toObject() : undefined,
            glowTtsTriton: this.glowTtsTriton
                ? this.glowTtsTriton.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class GlowTTS {
    /**
     * Creates an object and applies default Protobuf values
     * @param GlowTTS value
     */
    constructor(value) {
        value = value || {};
        this.batchSize = value.batchSize;
        this.useGpu = value.useGpu;
        this.lengthScale = value.lengthScale;
        this.noiseScale = value.noiseScale;
        this.path = value.path;
        this.cleaners = (value.cleaners || []).slice();
        this.paramConfigPath = value.paramConfigPath;
        GlowTTS.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GlowTTS.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GlowTTS();
        GlowTTS.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.batchSize = instance.batchSize || '0';
        instance.useGpu = instance.useGpu || false;
        instance.lengthScale = instance.lengthScale || 0;
        instance.noiseScale = instance.noiseScale || 0;
        instance.path = instance.path || '';
        instance.cleaners = instance.cleaners || [];
        instance.paramConfigPath = instance.paramConfigPath || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.batchSize = reader.readInt64String();
                    break;
                case 2:
                    instance.useGpu = reader.readBool();
                    break;
                case 3:
                    instance.lengthScale = reader.readFloat();
                    break;
                case 4:
                    instance.noiseScale = reader.readFloat();
                    break;
                case 5:
                    instance.path = reader.readString();
                    break;
                case 6:
                    (instance.cleaners = instance.cleaners || []).push(reader.readString());
                    break;
                case 7:
                    instance.paramConfigPath = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GlowTTS.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.batchSize) {
            writer.writeInt64String(1, instance.batchSize);
        }
        if (instance.useGpu) {
            writer.writeBool(2, instance.useGpu);
        }
        if (instance.lengthScale) {
            writer.writeFloat(3, instance.lengthScale);
        }
        if (instance.noiseScale) {
            writer.writeFloat(4, instance.noiseScale);
        }
        if (instance.path) {
            writer.writeString(5, instance.path);
        }
        if (instance.cleaners && instance.cleaners.length) {
            writer.writeRepeatedString(6, instance.cleaners);
        }
        if (instance.paramConfigPath) {
            writer.writeString(7, instance.paramConfigPath);
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
}
class GlowTTSTriton {
    /**
     * Creates an object and applies default Protobuf values
     * @param GlowTTSTriton value
     */
    constructor(value) {
        value = value || {};
        this.batchSize = value.batchSize;
        this.lengthScale = value.lengthScale;
        this.noiseScale = value.noiseScale;
        this.cleaners = (value.cleaners || []).slice();
        this.maxTextLength = value.maxTextLength;
        this.paramConfigPath = value.paramConfigPath;
        this.tritonUrl = value.tritonUrl;
        this.tritonModelName = value.tritonModelName;
        GlowTTSTriton.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GlowTTSTriton.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GlowTTSTriton();
        GlowTTSTriton.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.batchSize = instance.batchSize || '0';
        instance.lengthScale = instance.lengthScale || 0;
        instance.noiseScale = instance.noiseScale || 0;
        instance.cleaners = instance.cleaners || [];
        instance.maxTextLength = instance.maxTextLength || '0';
        instance.paramConfigPath = instance.paramConfigPath || '';
        instance.tritonUrl = instance.tritonUrl || '';
        instance.tritonModelName = instance.tritonModelName || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.batchSize = reader.readInt64String();
                    break;
                case 2:
                    instance.lengthScale = reader.readFloat();
                    break;
                case 3:
                    instance.noiseScale = reader.readFloat();
                    break;
                case 4:
                    (instance.cleaners = instance.cleaners || []).push(reader.readString());
                    break;
                case 5:
                    instance.maxTextLength = reader.readInt64String();
                    break;
                case 6:
                    instance.paramConfigPath = reader.readString();
                    break;
                case 7:
                    instance.tritonUrl = reader.readString();
                    break;
                case 8:
                    instance.tritonModelName = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GlowTTSTriton.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.batchSize) {
            writer.writeInt64String(1, instance.batchSize);
        }
        if (instance.lengthScale) {
            writer.writeFloat(2, instance.lengthScale);
        }
        if (instance.noiseScale) {
            writer.writeFloat(3, instance.noiseScale);
        }
        if (instance.cleaners && instance.cleaners.length) {
            writer.writeRepeatedString(4, instance.cleaners);
        }
        if (instance.maxTextLength) {
            writer.writeInt64String(5, instance.maxTextLength);
        }
        if (instance.paramConfigPath) {
            writer.writeString(6, instance.paramConfigPath);
        }
        if (instance.tritonUrl) {
            writer.writeString(7, instance.tritonUrl);
        }
        if (instance.tritonModelName) {
            writer.writeString(8, instance.tritonModelName);
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
    toJSON() {
        return this.toObject();
    }
}
class Mel2Audio {
    /**
     * Creates an object and applies default Protobuf values
     * @param Mel2Audio value
     */
    constructor(value) {
        value = value || {};
        this.type = value.type;
        this.mbMelganTriton = value.mbMelganTriton
            ? new MbMelganTriton(value.mbMelganTriton)
            : undefined;
        this.hifiGan = value.hifiGan ? new HiFiGan(value.hifiGan) : undefined;
        this.hifiGanTriton = value.hifiGanTriton
            ? new HiFiGanTriton(value.hifiGanTriton)
            : undefined;
        Mel2Audio.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Mel2Audio.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Mel2Audio();
        Mel2Audio.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.type = instance.type || '';
        instance.mbMelganTriton = instance.mbMelganTriton || undefined;
        instance.hifiGan = instance.hifiGan || undefined;
        instance.hifiGanTriton = instance.hifiGanTriton || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.type = reader.readString();
                    break;
                case 2:
                    instance.mbMelganTriton = new MbMelganTriton();
                    reader.readMessage(instance.mbMelganTriton, MbMelganTriton.fromBinaryReader);
                    break;
                case 3:
                    instance.hifiGan = new HiFiGan();
                    reader.readMessage(instance.hifiGan, HiFiGan.fromBinaryReader);
                    break;
                case 4:
                    instance.hifiGanTriton = new HiFiGanTriton();
                    reader.readMessage(instance.hifiGanTriton, HiFiGanTriton.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Mel2Audio.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.type) {
            writer.writeString(1, instance.type);
        }
        if (instance.mbMelganTriton) {
            writer.writeMessage(2, instance.mbMelganTriton, MbMelganTriton.toBinaryWriter);
        }
        if (instance.hifiGan) {
            writer.writeMessage(3, instance.hifiGan, HiFiGan.toBinaryWriter);
        }
        if (instance.hifiGanTriton) {
            writer.writeMessage(4, instance.hifiGanTriton, HiFiGanTriton.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
class HiFiGan {
    /**
     * Creates an object and applies default Protobuf values
     * @param HiFiGan value
     */
    constructor(value) {
        value = value || {};
        this.useGpu = value.useGpu;
        this.batchSize = value.batchSize;
        this.configPath = value.configPath;
        this.modelPath = value.modelPath;
        HiFiGan.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        HiFiGan.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new HiFiGan();
        HiFiGan.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.useGpu = instance.useGpu || false;
        instance.batchSize = instance.batchSize || '0';
        instance.configPath = instance.configPath || '';
        instance.modelPath = instance.modelPath || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.useGpu = reader.readBool();
                    break;
                case 2:
                    instance.batchSize = reader.readInt64String();
                    break;
                case 3:
                    instance.configPath = reader.readString();
                    break;
                case 4:
                    instance.modelPath = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        HiFiGan.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.useGpu) {
            writer.writeBool(1, instance.useGpu);
        }
        if (instance.batchSize) {
            writer.writeInt64String(2, instance.batchSize);
        }
        if (instance.configPath) {
            writer.writeString(3, instance.configPath);
        }
        if (instance.modelPath) {
            writer.writeString(4, instance.modelPath);
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
}
class HiFiGanTriton {
    /**
     * Creates an object and applies default Protobuf values
     * @param HiFiGanTriton value
     */
    constructor(value) {
        value = value || {};
        this.configPath = value.configPath;
        this.tritonModelName = value.tritonModelName;
        this.tritonUrl = value.tritonUrl;
        HiFiGanTriton.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        HiFiGanTriton.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new HiFiGanTriton();
        HiFiGanTriton.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.configPath = instance.configPath || '';
        instance.tritonModelName = instance.tritonModelName || '';
        instance.tritonUrl = instance.tritonUrl || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.configPath = reader.readString();
                    break;
                case 2:
                    instance.tritonModelName = reader.readString();
                    break;
                case 3:
                    instance.tritonUrl = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        HiFiGanTriton.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.configPath) {
            writer.writeString(1, instance.configPath);
        }
        if (instance.tritonModelName) {
            writer.writeString(2, instance.tritonModelName);
        }
        if (instance.tritonUrl) {
            writer.writeString(3, instance.tritonUrl);
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
    toObject() {
        return {
            configPath: this.configPath,
            tritonModelName: this.tritonModelName,
            tritonUrl: this.tritonUrl
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class MbMelganTriton {
    /**
     * Creates an object and applies default Protobuf values
     * @param MbMelganTriton value
     */
    constructor(value) {
        value = value || {};
        this.configPath = value.configPath;
        this.statsPath = value.statsPath;
        this.tritonModelName = value.tritonModelName;
        this.tritonUrl = value.tritonUrl;
        MbMelganTriton.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        MbMelganTriton.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new MbMelganTriton();
        MbMelganTriton.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.configPath = instance.configPath || '';
        instance.statsPath = instance.statsPath || '';
        instance.tritonModelName = instance.tritonModelName || '';
        instance.tritonUrl = instance.tritonUrl || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.configPath = reader.readString();
                    break;
                case 2:
                    instance.statsPath = reader.readString();
                    break;
                case 3:
                    instance.tritonModelName = reader.readString();
                    break;
                case 4:
                    instance.tritonUrl = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        MbMelganTriton.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.configPath) {
            writer.writeString(1, instance.configPath);
        }
        if (instance.statsPath) {
            writer.writeString(2, instance.statsPath);
        }
        if (instance.tritonModelName) {
            writer.writeString(3, instance.tritonModelName);
        }
        if (instance.tritonUrl) {
            writer.writeString(4, instance.tritonUrl);
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
    toObject() {
        return {
            configPath: this.configPath,
            statsPath: this.statsPath,
            tritonModelName: this.tritonModelName,
            tritonUrl: this.tritonUrl
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Caching {
    /**
     * Creates an object and applies default Protobuf values
     * @param Caching value
     */
    constructor(value) {
        value = value || {};
        this.active = value.active;
        this.memoryCacheMaxSize = value.memoryCacheMaxSize;
        this.samplingRate = value.samplingRate;
        this.loadCache = value.loadCache;
        this.saveCache = value.saveCache;
        this.cacheSaveDir = value.cacheSaveDir;
        Caching.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Caching.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Caching();
        Caching.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.active = instance.active || false;
        instance.memoryCacheMaxSize = instance.memoryCacheMaxSize || '0';
        instance.samplingRate = instance.samplingRate || '0';
        instance.loadCache = instance.loadCache || false;
        instance.saveCache = instance.saveCache || false;
        instance.cacheSaveDir = instance.cacheSaveDir || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.active = reader.readBool();
                    break;
                case 2:
                    instance.memoryCacheMaxSize = reader.readInt64String();
                    break;
                case 3:
                    instance.samplingRate = reader.readInt64String();
                    break;
                case 4:
                    instance.loadCache = reader.readBool();
                    break;
                case 5:
                    instance.saveCache = reader.readBool();
                    break;
                case 6:
                    instance.cacheSaveDir = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        Caching.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.active) {
            writer.writeBool(1, instance.active);
        }
        if (instance.memoryCacheMaxSize) {
            writer.writeInt64String(2, instance.memoryCacheMaxSize);
        }
        if (instance.samplingRate) {
            writer.writeInt64String(3, instance.samplingRate);
        }
        if (instance.loadCache) {
            writer.writeBool(4, instance.loadCache);
        }
        if (instance.saveCache) {
            writer.writeBool(5, instance.saveCache);
        }
        if (instance.cacheSaveDir) {
            writer.writeString(6, instance.cacheSaveDir);
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
}
class Normalization {
    /**
     * Creates an object and applies default Protobuf values
     * @param Normalization value
     */
    constructor(value) {
        value = value || {};
        this.language = value.language;
        this.pipeline = (value.pipeline || []).slice();
        Normalization.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Normalization.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Normalization();
        Normalization.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.language = instance.language || '';
        instance.pipeline = instance.pipeline || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.language = reader.readString();
                    break;
                case 2:
                    (instance.pipeline = instance.pipeline || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        Normalization.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.language) {
            writer.writeString(1, instance.language);
        }
        if (instance.pipeline && instance.pipeline.length) {
            writer.writeRepeatedString(2, instance.pipeline);
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
    toObject() {
        return {
            language: this.language,
            pipeline: (this.pipeline || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Postprocessing {
    /**
     * Creates an object and applies default Protobuf values
     * @param Postprocessing value
     */
    constructor(value) {
        value = value || {};
        this.silenceSecs = value.silenceSecs;
        this.pipeline = (value.pipeline || []).slice();
        this.logmmse = value.logmmse ? new Logmnse(value.logmmse) : undefined;
        this.wiener = value.wiener ? new Wiener(value.wiener) : undefined;
        this.apodization = value.apodization
            ? new Apodization(value.apodization)
            : undefined;
        Postprocessing.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Postprocessing.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Postprocessing();
        Postprocessing.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.silenceSecs = instance.silenceSecs || 0;
        instance.pipeline = instance.pipeline || [];
        instance.logmmse = instance.logmmse || undefined;
        instance.wiener = instance.wiener || undefined;
        instance.apodization = instance.apodization || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.silenceSecs = reader.readFloat();
                    break;
                case 2:
                    (instance.pipeline = instance.pipeline || []).push(reader.readString());
                    break;
                case 3:
                    instance.logmmse = new Logmnse();
                    reader.readMessage(instance.logmmse, Logmnse.fromBinaryReader);
                    break;
                case 4:
                    instance.wiener = new Wiener();
                    reader.readMessage(instance.wiener, Wiener.fromBinaryReader);
                    break;
                case 5:
                    instance.apodization = new Apodization();
                    reader.readMessage(instance.apodization, Apodization.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Postprocessing.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.silenceSecs) {
            writer.writeFloat(1, instance.silenceSecs);
        }
        if (instance.pipeline && instance.pipeline.length) {
            writer.writeRepeatedString(2, instance.pipeline);
        }
        if (instance.logmmse) {
            writer.writeMessage(3, instance.logmmse, Logmnse.toBinaryWriter);
        }
        if (instance.wiener) {
            writer.writeMessage(4, instance.wiener, Wiener.toBinaryWriter);
        }
        if (instance.apodization) {
            writer.writeMessage(5, instance.apodization, Apodization.toBinaryWriter);
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
    toObject() {
        return {
            silenceSecs: this.silenceSecs,
            pipeline: (this.pipeline || []).slice(),
            logmmse: this.logmmse ? this.logmmse.toObject() : undefined,
            wiener: this.wiener ? this.wiener.toObject() : undefined,
            apodization: this.apodization ? this.apodization.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Logmnse {
    /**
     * Creates an object and applies default Protobuf values
     * @param Logmnse value
     */
    constructor(value) {
        value = value || {};
        this.initialNoise = value.initialNoise;
        this.windowSize = value.windowSize;
        this.noiseThreshold = value.noiseThreshold;
        Logmnse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Logmnse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Logmnse();
        Logmnse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.initialNoise = instance.initialNoise || '0';
        instance.windowSize = instance.windowSize || '0';
        instance.noiseThreshold = instance.noiseThreshold || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.initialNoise = reader.readInt64String();
                    break;
                case 2:
                    instance.windowSize = reader.readInt64String();
                    break;
                case 3:
                    instance.noiseThreshold = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        Logmnse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.initialNoise) {
            writer.writeInt64String(1, instance.initialNoise);
        }
        if (instance.windowSize) {
            writer.writeInt64String(2, instance.windowSize);
        }
        if (instance.noiseThreshold) {
            writer.writeFloat(3, instance.noiseThreshold);
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
}
class Wiener {
    /**
     * Creates an object and applies default Protobuf values
     * @param Wiener value
     */
    constructor(value) {
        value = value || {};
        this.frameLen = value.frameLen;
        this.lpcOrder = value.lpcOrder;
        this.iterations = value.iterations;
        this.alpha = value.alpha;
        this.thresh = value.thresh;
        Wiener.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Wiener.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Wiener();
        Wiener.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.frameLen = instance.frameLen || '0';
        instance.lpcOrder = instance.lpcOrder || '0';
        instance.iterations = instance.iterations || '0';
        instance.alpha = instance.alpha || 0;
        instance.thresh = instance.thresh || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.frameLen = reader.readInt64String();
                    break;
                case 2:
                    instance.lpcOrder = reader.readInt64String();
                    break;
                case 3:
                    instance.iterations = reader.readInt64String();
                    break;
                case 4:
                    instance.alpha = reader.readFloat();
                    break;
                case 5:
                    instance.thresh = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        Wiener.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.frameLen) {
            writer.writeInt64String(1, instance.frameLen);
        }
        if (instance.lpcOrder) {
            writer.writeInt64String(2, instance.lpcOrder);
        }
        if (instance.iterations) {
            writer.writeInt64String(3, instance.iterations);
        }
        if (instance.alpha) {
            writer.writeFloat(4, instance.alpha);
        }
        if (instance.thresh) {
            writer.writeFloat(5, instance.thresh);
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
}
class Apodization {
    /**
     * Creates an object and applies default Protobuf values
     * @param Apodization value
     */
    constructor(value) {
        value = value || {};
        this.apodizationSecs = value.apodizationSecs;
        Apodization.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Apodization.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Apodization();
        Apodization.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.apodizationSecs = instance.apodizationSecs || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.apodizationSecs = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        Apodization.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.apodizationSecs) {
            writer.writeFloat(1, instance.apodizationSecs);
        }
    }
    get apodizationSecs() {
        return this._apodizationSecs;
    }
    set apodizationSecs(value) {
        this._apodizationSecs = value;
    }
    toObject() {
        return {
            apodizationSecs: this.apodizationSecs
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class Empty {
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Empty.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Empty();
        Empty.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default:
                    reader.skipField();
            }
        }
        Empty.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) { }
    /**
     * Creates an object and applies default Protobuf values
     * @param Empty value
     */
    constructor(value) {
        value = value || {};
        Empty.refineValues(this);
    }
    toObject() {
        return {};
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_TEXT2_SPEECH_CLIENT_SETTINGS = new InjectionToken('GRPC_TEXT2_SPEECH_CLIENT_SETTINGS');

/* tslint:disable */
class Text2SpeechClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.t2s.Text2Speech', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.SynthesizeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SynthesizeResponse>
     */
    synthesize(requestData, requestMetadata = {}) {
        return this.synthesize$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.SynthesizeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SynthesizeResponse>>
     */
    synthesize$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.t2s.Text2Speech/Synthesize',
            requestData,
            requestMetadata,
            requestClass: SynthesizeRequest,
            responseClass: SynthesizeResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.T2sPipelineId request
     * @param Metadata metadata
     * @return Observable<thisProto.Text2SpeechConfig>
     */
    getT2sPipeline(requestData, requestMetadata = {}) {
        return this.getT2sPipeline$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.T2sPipelineId request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
     */
    getT2sPipeline$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.t2s.Text2Speech/GetT2sPipeline',
            requestData,
            requestMetadata,
            requestClass: T2sPipelineId,
            responseClass: Text2SpeechConfig
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.Text2SpeechConfig request
     * @param Metadata metadata
     * @return Observable<thisProto.T2sPipelineId>
     */
    createT2sPipeline(requestData, requestMetadata = {}) {
        return this.createT2sPipeline$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.Text2SpeechConfig request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.T2sPipelineId>>
     */
    createT2sPipeline$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
            requestData,
            requestMetadata,
            requestClass: Text2SpeechConfig,
            responseClass: T2sPipelineId
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.T2sPipelineId request
     * @param Metadata metadata
     * @return Observable<googleProtobuf000.Empty>
     */
    deleteT2sPipeline(requestData, requestMetadata = {}) {
        return this.deleteT2sPipeline$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.T2sPipelineId request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteT2sPipeline$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
            requestData,
            requestMetadata,
            requestClass: T2sPipelineId,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.Text2SpeechConfig request
     * @param Metadata metadata
     * @return Observable<googleProtobuf000.Empty>
     */
    updateT2sPipeline(requestData, requestMetadata = {}) {
        return this.updateT2sPipeline$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.Text2SpeechConfig request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateT2sPipeline$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
            requestData,
            requestMetadata,
            requestClass: Text2SpeechConfig,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListT2sPipelinesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListT2sPipelinesResponse>
     */
    listT2sPipelines(requestData, requestMetadata = {}) {
        return this.listT2sPipelines$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListT2sPipelinesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
     */
    listT2sPipelines$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.t2s.Text2Speech/ListT2sPipelines',
            requestData,
            requestMetadata,
            requestClass: ListT2sPipelinesRequest,
            responseClass: ListT2sPipelinesResponse
        });
    }
}
Text2SpeechClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function Text2SpeechClient_Factory() { return new Text2SpeechClient(i0.ɵɵinject(GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: Text2SpeechClient, providedIn: "root" });
Text2SpeechClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
Text2SpeechClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_TEXT2_SPEECH_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/**
 * Generated bundle index. Do not edit.
 */

export { Apodization, AudioFormat, Caching, CompositeInference, Description, Empty, GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, GlowTTS, GlowTTSTriton, HiFiGan, HiFiGanTriton, Inference, ListT2sPipelinesRequest, ListT2sPipelinesResponse, Logmnse, MbMelganTriton, Mel2Audio, Normalization, Postprocessing, SynthesizeRequest, SynthesizeResponse, T2sPipelineId, Text2Mel, Text2SpeechClient, Text2SpeechConfig, Wiener };
//# sourceMappingURL=ondewo-t2s-client-angular.js.map

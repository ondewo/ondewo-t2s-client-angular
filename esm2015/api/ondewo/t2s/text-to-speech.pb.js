import { BinaryReader, BinaryWriter } from 'google-protobuf';
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
export class SynthesizeRequest {
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
export class SynthesizeResponse {
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
export class ListT2sPipelinesRequest {
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
export class ListT2sPipelinesResponse {
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
export class T2sPipelineId {
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
export class Text2SpeechConfig {
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
export class Description {
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
export class Inference {
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
export class CompositeInference {
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
export class Text2Mel {
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
export class GlowTTS {
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
export class GlowTTSTriton {
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
export class Mel2Audio {
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
export class HiFiGan {
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
export class HiFiGanTriton {
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
export class MbMelganTriton {
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
export class Caching {
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
export class Normalization {
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
export class Postprocessing {
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
export class Logmnse {
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
export class Wiener {
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
export class Apodization {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC10by1zcGVlY2gucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL3Qycy90ZXh0LXRvLXNwZWVjaC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBRXpFLE1BQU0sQ0FBTixJQUFZLFdBUVg7QUFSRCxXQUFZLFdBQVc7SUFDckIsMkNBQU8sQ0FBQTtJQUNQLDZDQUFRLENBQUE7SUFDUiwyQ0FBTyxDQUFBO0lBQ1AsMkNBQU8sQ0FBQTtJQUNQLDJDQUFPLENBQUE7SUFDUCwyQ0FBTyxDQUFBO0lBQ1AsMkNBQU8sQ0FBQTtBQUNULENBQUMsRUFSVyxXQUFXLEtBQVgsV0FBVyxRQVF0QjtBQUNELE1BQU0sT0FBTyxpQkFBaUI7SUF5RjVCOzs7T0FHRztJQUNILFlBQVksS0FBMkM7UUFDckQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBdEdELE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBMkI7UUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUEyQjtRQUM3QyxRQUFRLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDcEMsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNqRCxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDL0MsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNqQyxRQUFRLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBMkIsRUFBRSxNQUFvQjtRQUN2RSxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUUvQixRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUM3QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQTJCLEVBQUUsTUFBb0I7UUFDckUsSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtZQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDeEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUN2QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUF5QkQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUF5QjtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUF5QjtRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUF3QztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUE4QjtRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzlCLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUNELFdBQWMsaUJBQWlCO0lBQzdCLElBQVksR0FRWDtJQVJELFdBQVksR0FBRztRQUNiLCtCQUFTLENBQUE7UUFDVCwrQkFBUyxDQUFBO1FBQ1QsK0JBQVMsQ0FBQTtRQUNULCtCQUFTLENBQUE7UUFDVCwrQkFBUyxDQUFBO1FBQ1QsK0JBQVMsQ0FBQTtRQUNULGlDQUFVLENBQUE7SUFDWixDQUFDLEVBUlcsR0FBRyxHQUFILHFCQUFHLEtBQUgscUJBQUcsUUFRZDtBQUNILENBQUMsRUFWYSxpQkFBaUIsS0FBakIsaUJBQWlCLFFBVTlCO0FBQ0QsTUFBTSxPQUFPLGtCQUFrQjtJQXlGN0I7OztPQUdHO0lBQ0gsWUFBWSxLQUE0QztRQUN0RCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF0R0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUE0QjtRQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQTRCO1FBQzlDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3BELFFBQVEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNqRCxRQUFRLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDakQsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNwQyxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBNEIsRUFBRSxNQUFvQjtRQUN4RSxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUUvQixRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUM3QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQTRCLEVBQUUsTUFBb0I7UUFDdEUsSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUMzQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDeEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUN4QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUF5QkQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUE2QjtRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBeUI7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBeUI7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBeUI7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBOEI7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBeUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRTtZQUM3RCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyx1QkFBdUI7SUF1RmxDOzs7T0FHRztJQUNILFlBQVksS0FBaUQ7UUFDM0QsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0MsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFsR0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFpQztRQUMvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBQy9DLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWlDO1FBQ25ELFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDOUMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUNwRCxRQUFRLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7UUFDcEQsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUNyQixRQUFpQyxFQUNqQyxNQUFvQjtRQUVwQixPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUUvQixRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDO29CQUNKLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbEQsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUNwQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUNwQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDNUQsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUNwQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUNwQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFDdEUsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELHVCQUF1QixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FDbkIsUUFBaUMsRUFDakMsTUFBb0I7UUFFcEIsSUFBSSxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxRQUFRLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3pELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxRQUFRLENBQUMsY0FBYyxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQzdELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxRQUFRLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3pELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQy9DLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQXFCRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQTJCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQTJCO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUEyQjtRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUEyQjtRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUEyQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN6QyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUMvQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuRCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUMvQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sd0JBQXdCO0lBNkRuQzs7O09BR0c7SUFDSCxZQUFZLEtBQWtEO1FBQzVELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXBFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWtDO1FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFpQjtRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7UUFDaEQsd0JBQXdCLENBQUMsZ0JBQWdCLENBQ3ZDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWtDO1FBQ3BELFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDckIsUUFBa0MsRUFDbEMsTUFBb0I7UUFFcEIsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFL0IsUUFBUSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQztvQkFDSixNQUFNLG1CQUFtQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztvQkFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FDaEIsbUJBQW1CLEVBQ25CLGlCQUFpQixDQUFDLGdCQUFnQixDQUNuQyxDQUFDO29CQUNGLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbEQsbUJBQW1CLENBQ3BCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELHdCQUF3QixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FDbkIsUUFBa0MsRUFDbEMsTUFBb0I7UUFFcEIsSUFBSSxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxvQkFBb0IsQ0FDekIsQ0FBQyxFQUNELFFBQVEsQ0FBQyxTQUFnQixFQUN6QixpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7U0FDSDtJQUNILENBQUM7SUFhRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQXNDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxhQUFhO0lBeUN4Qjs7O09BR0c7SUFDSCxZQUFZLEtBQXVDO1FBQ2pELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNuQixhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFoREQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUF1QjtRQUNyQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQXVCO1FBQ3pDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUF1QixFQUFFLE1BQW9CO1FBQ25FLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRS9CLFFBQVEsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCO1NBQ0Y7UUFFRCxhQUFhLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQXVCLEVBQUUsTUFBb0I7UUFDakUsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQWFELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsS0FBeUI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGlCQUFpQjtJQThHNUI7OztPQUdHO0lBQ0gsWUFBWSxLQUEyQztRQUNyRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVztZQUNsQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUNwQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVM7WUFDOUIsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWE7WUFDdEMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWM7WUFDeEMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBbElELE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBMkI7UUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUEyQjtRQUM3QyxRQUFRLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUM7UUFDekQsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUMzQyxRQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUM7UUFDN0QsUUFBUSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQTJCLEVBQUUsTUFBb0I7UUFDdkUsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFL0IsUUFBUSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO29CQUN6QyxNQUFNLENBQUMsV0FBVyxDQUNoQixRQUFRLENBQUMsV0FBVyxFQUNwQixXQUFXLENBQUMsZ0JBQWdCLENBQzdCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDckMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNuRSxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxXQUFXLENBQ2hCLFFBQVEsQ0FBQyxhQUFhLEVBQ3RCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDL0IsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7b0JBQy9DLE1BQU0sQ0FBQyxXQUFXLENBQ2hCLFFBQVEsQ0FBQyxjQUFjLEVBQ3ZCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FDaEMsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQTJCLEVBQUUsTUFBb0I7UUFDckUsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQ2pCLENBQUMsRUFDRCxRQUFRLENBQUMsV0FBa0IsRUFDM0IsV0FBVyxDQUFDLGNBQWMsQ0FDM0IsQ0FBQztTQUNIO1FBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixNQUFNLENBQUMsWUFBWSxDQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFDLFNBQWdCLEVBQ3pCLFNBQVMsQ0FBQyxjQUFjLENBQ3pCLENBQUM7U0FDSDtRQUNELElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUMxQixNQUFNLENBQUMsWUFBWSxDQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFDLGFBQW9CLEVBQzdCLGFBQWEsQ0FBQyxjQUFjLENBQzdCLENBQUM7U0FDSDtRQUNELElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUMzQixNQUFNLENBQUMsWUFBWSxDQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFDLGNBQXFCLEVBQzlCLGNBQWMsQ0FBQyxjQUFjLENBQzlCLENBQUM7U0FDSDtJQUNILENBQUM7SUErQkQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxLQUF5QjtRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUE4QjtRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUEwQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUE0QjtRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFnQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBaUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDdkUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2pFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUMvQixDQUFDLENBQUMsU0FBUztZQUNiLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxDQUFDLENBQUMsU0FBUztTQUNkLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxXQUFXO0lBaUZ0Qjs7O09BR0c7SUFDSCxZQUFZLEtBQXFDO1FBQy9DLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTdGRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQXFCO1FBQ25DLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBcUI7UUFDdkMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM1QyxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDdEQsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM1QyxRQUFRLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFxQixFQUFFLE1BQW9CO1FBQ2pFLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRS9CLFFBQVEsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3hDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3hDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBcUIsRUFBRSxNQUFvQjtRQUMvRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUMxQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBdUJELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBeUI7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBeUI7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBeUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLFNBQVM7SUFrRXBCOzs7T0FHRztJQUNILFlBQVksS0FBbUM7UUFDN0MsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCO1lBQ2hELENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUNsRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUE3RUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFtQjtRQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDakMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQW1CO1FBQ3JDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDcEMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxTQUFTLENBQUM7UUFDdkUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQW1CLEVBQUUsTUFBb0I7UUFDL0QsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFL0IsUUFBUSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLFdBQVcsQ0FDaEIsUUFBUSxDQUFDLGtCQUFrQixFQUMzQixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDcEMsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDL0QsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBbUIsRUFBRSxNQUFvQjtRQUM3RCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7WUFDL0IsTUFBTSxDQUFDLFlBQVksQ0FDakIsQ0FBQyxFQUNELFFBQVEsQ0FBQyxrQkFBeUIsRUFDbEMsa0JBQWtCLENBQUMsY0FBYyxDQUNsQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE9BQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDekU7SUFDSCxDQUFDO0lBbUJELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBeUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQXFDO1FBQzFELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2Ysa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtnQkFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BDLENBQUMsQ0FBQyxTQUFTO1lBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDNUQsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGtCQUFrQjtJQXVEN0I7OztPQUdHO0lBQ0gsWUFBWSxLQUE0QztRQUN0RCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVM7WUFDOUIsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBakVELE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBNEI7UUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUMxQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUE0QjtRQUM5QyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDO1FBQ25ELFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7SUFDdkQsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUE0QixFQUFFLE1BQW9CO1FBQ3hFLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRS9CLFFBQVEsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO29CQUNuQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2pFLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDckMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNuRSxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQTRCLEVBQUUsTUFBb0I7UUFDdEUsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFlLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQ2pCLENBQUMsRUFDRCxRQUFRLENBQUMsU0FBZ0IsRUFDekIsU0FBUyxDQUFDLGNBQWMsQ0FDekIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQWlCRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQTJCO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQTRCO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzlELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ2xFLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxRQUFRO0lBa0VuQjs7O09BR0c7SUFDSCxZQUFZLEtBQWtDO1FBQzVDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWE7WUFDdEMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQTdFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWtCO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBa0I7UUFDcEMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNwQyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUM7SUFDL0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFrQixFQUFFLE1BQW9CO1FBQzlELE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRS9CLFFBQVEsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztvQkFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUMvRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxXQUFXLENBQ2hCLFFBQVEsQ0FBQyxhQUFhLEVBQ3RCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDL0IsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFrQixFQUFFLE1BQW9CO1FBQzVELElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtZQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE9BQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDekU7UUFDRCxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDMUIsTUFBTSxDQUFDLFlBQVksQ0FDakIsQ0FBQyxFQUNELFFBQVEsQ0FBQyxhQUFvQixFQUM3QixhQUFhLENBQUMsY0FBYyxDQUM3QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBbUJELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBeUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBZ0M7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDM0QsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLENBQUMsQ0FBQyxTQUFTO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLE9BQU87SUEyRmxCOzs7T0FHRztJQUNILFlBQVksS0FBaUM7UUFDM0MsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDN0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBeEdELE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBaUI7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFpQjtRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFpQjtRQUNuQyxRQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDM0MsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNqRCxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDcEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM1QyxRQUFRLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBaUIsRUFBRSxNQUFvQjtRQUM3RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUUvQixRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUM5QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoRCxNQUFNLENBQUMsVUFBVSxFQUFFLENBQ3BCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCO1NBQ0Y7UUFFRCxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQWlCLEVBQUUsTUFBb0I7UUFDM0QsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksUUFBUSxDQUFDLGVBQWUsRUFBRTtZQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBeUJELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBeUI7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBMEI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBeUI7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBeUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBMkI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBeUI7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxhQUFhO0lBbUd4Qjs7O09BR0c7SUFDSCxZQUFZLEtBQXVDO1FBQ2pELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM3QyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFqSEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUF1QjtRQUNyQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQXVCO1FBQ3pDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7UUFDL0MsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNqRCxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDNUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQztRQUN2RCxRQUFRLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDOUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQXVCLEVBQUUsTUFBb0I7UUFDbkUsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFL0IsUUFBUSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDOUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hELE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FDcEIsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDbEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDL0MsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBdUIsRUFBRSxNQUFvQjtRQUNqRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDeEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUMxQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksUUFBUSxDQUFDLGVBQWUsRUFBRTtZQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUEyQkQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUF5QjtRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUF5QjtRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUEyQjtRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUF5QjtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUF5QjtRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQXlCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQXlCO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdkMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxTQUFTO0lBa0ZwQjs7O09BR0c7SUFDSCxZQUFZLEtBQW1DO1FBQzdDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjO1lBQ3hDLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWE7WUFDdEMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWhHRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQW1CO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNqQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBbUI7UUFDckMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNwQyxRQUFRLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDO1FBQy9ELFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUM7UUFDakQsUUFBUSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQW1CLEVBQUUsTUFBb0I7UUFDL0QsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFL0IsUUFBUSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUMvQyxNQUFNLENBQUMsV0FBVyxDQUNoQixRQUFRLENBQUMsY0FBYyxFQUN2QixjQUFjLENBQUMsZ0JBQWdCLENBQ2hDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNqQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQy9ELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztvQkFDN0MsTUFBTSxDQUFDLFdBQVcsQ0FDaEIsUUFBUSxDQUFDLGFBQWEsRUFDdEIsYUFBYSxDQUFDLGdCQUFnQixDQUMvQixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCO1NBQ0Y7UUFFRCxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQW1CLEVBQUUsTUFBb0I7UUFDN0QsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUMzQixNQUFNLENBQUMsWUFBWSxDQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFDLGNBQXFCLEVBQzlCLGNBQWMsQ0FBQyxjQUFjLENBQzlCLENBQUM7U0FDSDtRQUNELElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsT0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUMxQixNQUFNLENBQUMsWUFBWSxDQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFDLGFBQW9CLEVBQzdCLGFBQWEsQ0FBQyxjQUFjLENBQzdCLENBQUM7U0FDSDtJQUNILENBQUM7SUF1QkQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBaUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBZ0M7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLENBQUMsQ0FBQyxTQUFTO1lBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDM0QsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLENBQUMsQ0FBQyxTQUFTO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLE9BQU87SUFpRWxCOzs7T0FHRztJQUNILFlBQVksS0FBaUM7UUFDM0MsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTNFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWlCO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBaUI7UUFDbkMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUMzQyxRQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDaEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQWlCLEVBQUUsTUFBb0I7UUFDN0QsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFL0IsUUFBUSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzlDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDekMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBaUIsRUFBRSxNQUFvQjtRQUMzRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBbUJELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBMEI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBeUI7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBeUI7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxhQUFhO0lBeUR4Qjs7O09BR0c7SUFDSCxZQUFZLEtBQXVDO1FBQ2pELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWxFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQXVCO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNyQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBdUI7UUFDekMsUUFBUSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUNoRCxRQUFRLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUF1QixFQUFFLE1BQW9CO1FBQ25FLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRS9CLFFBQVEsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDekMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBdUIsRUFBRSxNQUFvQjtRQUNqRSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBaUJELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBeUI7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUF5QjtRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sY0FBYztJQWlFekI7OztPQUdHO0lBQ0gsWUFBWSxLQUF3QztRQUNsRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBM0VELE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBd0I7UUFDdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxjQUFjLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFpQjtRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUF3QjtRQUMxQyxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDOUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUMxRCxRQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBd0IsRUFBRSxNQUFvQjtRQUNwRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUUvQixRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsY0FBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUF3QixFQUFFLE1BQW9CO1FBQ2xFLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUN2QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBbUJELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBeUI7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBeUI7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUF5QjtRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLE9BQU87SUFpRmxCOzs7T0FHRztJQUNILFlBQVksS0FBaUM7UUFDM0MsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTdGRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWlCO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBaUI7UUFDbkMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUMzQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixJQUFJLEdBQUcsQ0FBQztRQUNqRSxRQUFRLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7UUFDakQsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztRQUNqRCxRQUFRLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBaUIsRUFBRSxNQUFvQjtRQUM3RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUUvQixRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN2RCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN2QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBaUIsRUFBRSxNQUFvQjtRQUMzRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7WUFDL0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksUUFBUSxDQUFDLFlBQVksRUFBRTtZQUN6QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUF1QkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUEwQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBeUI7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUEwQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUEwQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGFBQWE7SUFtRHhCOzs7T0FHRztJQUNILFlBQVksS0FBdUM7UUFDakQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTNERCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQXVCO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNyQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBdUI7UUFDekMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM1QyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBdUIsRUFBRSxNQUFvQjtRQUNuRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUUvQixRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hELE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FDcEIsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUF1QixFQUFFLE1BQW9CO1FBQ2pFLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUNyQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDakQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBZUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUF5QjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUEyQjtRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGNBQWM7SUFxRnpCOzs7T0FHRztJQUNILFlBQVksS0FBd0M7UUFDbEQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXO1lBQ2xDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFsR0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUF3QjtRQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDdEMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQXdCO1FBQzFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDakQsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM1QyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUM7UUFDL0MsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQXdCLEVBQUUsTUFBb0I7UUFDcEUsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFL0IsUUFBUSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoRCxNQUFNLENBQUMsVUFBVSxFQUFFLENBQ3BCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNqQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQy9ELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztvQkFDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM3RCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7b0JBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQ2hCLFFBQVEsQ0FBQyxXQUFXLEVBQ3BCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FDN0IsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsY0FBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUF3QixFQUFFLE1BQW9CO1FBQ2xFLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDakQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE9BQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDekU7UUFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQWEsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDeEIsTUFBTSxDQUFDLFlBQVksQ0FDakIsQ0FBQyxFQUNELFFBQVEsQ0FBQyxXQUFrQixFQUMzQixXQUFXLENBQUMsY0FBYyxDQUMzQixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBdUJELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBeUI7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBMkI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBeUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBOEI7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3ZDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzNELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ3hELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ3hFLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxPQUFPO0lBeURsQjs7O09BR0c7SUFDSCxZQUFZLEtBQWlDO1FBQzNDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWxFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWlCO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBaUI7UUFDbkMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQztRQUNyRCxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFpQixFQUFFLE1BQW9CO1FBQzdELE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRS9CLFFBQVEsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBaUIsRUFBRSxNQUFvQjtRQUMzRCxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDekIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDM0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQWlCRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQXlCO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQXlCO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUF5QjtRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sTUFBTTtJQXlFakI7OztPQUdHO0lBQ0gsWUFBWSxLQUFnQztRQUMxQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXBGRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWdCO1FBQzlCLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDM0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBZ0I7UUFDbEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUM3QyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7UUFDakQsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNyQyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBZ0IsRUFBRSxNQUFvQjtRQUM1RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUUvQixRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUM3QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDckMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBZ0IsRUFBRSxNQUFvQjtRQUMxRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFxQkQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUF5QjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUF5QjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUF5QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUF5QjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxXQUFXO0lBeUN0Qjs7O09BR0c7SUFDSCxZQUFZLEtBQXFDO1FBQy9DLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUM3QyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFoREQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFxQjtRQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDbkMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQXFCO1FBQ3ZDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFxQixFQUFFLE1BQW9CO1FBQ2pFLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRS9CLFFBQVEsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzlDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCO1NBQ0Y7UUFFRCxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQXFCLEVBQUUsTUFBb0I7UUFDL0QsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFhRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQXlCO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgR3JwY01lc3NhZ2UsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5leHBvcnQgZW51bSBBdWRpb0Zvcm1hdCB7XG4gIHdhdiA9IDAsXG4gIGZsYWMgPSAxLFxuICBjYWYgPSAyLFxuICBtcDMgPSAzLFxuICBhYWMgPSA0LFxuICBvZ2cgPSA1LFxuICB3bWEgPSA2XG59XG5leHBvcnQgY2xhc3MgU3ludGhlc2l6ZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU3ludGhlc2l6ZVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3ludGhlc2l6ZVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3ludGhlc2l6ZVJlcXVlc3QoKTtcbiAgICBTeW50aGVzaXplUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogU3ludGhlc2l6ZVJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS50MnNQaXBlbGluZUlkID0gaW5zdGFuY2UudDJzUGlwZWxpbmVJZCB8fCAnJztcbiAgICBpbnN0YW5jZS50ZXh0ID0gaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgICBpbnN0YW5jZS5sZW5ndGhTY2FsZSA9IGluc3RhbmNlLmxlbmd0aFNjYWxlIHx8IDA7XG4gICAgaW5zdGFuY2Uubm9pc2VTY2FsZSA9IGluc3RhbmNlLm5vaXNlU2NhbGUgfHwgMDtcbiAgICBpbnN0YW5jZS5zYW1wbGVSYXRlID0gaW5zdGFuY2Uuc2FtcGxlUmF0ZSB8fCAwO1xuICAgIGluc3RhbmNlLnBjbSA9IGluc3RhbmNlLnBjbSB8fCAwO1xuICAgIGluc3RhbmNlLmF1ZGlvRm9ybWF0ID0gaW5zdGFuY2UuYXVkaW9Gb3JtYXQgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTeW50aGVzaXplUmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnQyc1BpcGVsaW5lSWQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudGV4dCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5sZW5ndGhTY2FsZSA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLm5vaXNlU2NhbGUgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5zYW1wbGVSYXRlID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UucGNtID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5hdWRpb0Zvcm1hdCA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTeW50aGVzaXplUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTeW50aGVzaXplUmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudDJzUGlwZWxpbmVJZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnQyc1BpcGVsaW5lSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudGV4dCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGVuZ3RoU2NhbGUpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDMsIGluc3RhbmNlLmxlbmd0aFNjYWxlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5vaXNlU2NhbGUpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDQsIGluc3RhbmNlLm5vaXNlU2NhbGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2FtcGxlUmF0ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoNSwgaW5zdGFuY2Uuc2FtcGxlUmF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wY20pIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oNiwgaW5zdGFuY2UucGNtKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmF1ZGlvRm9ybWF0KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDcsIGluc3RhbmNlLmF1ZGlvRm9ybWF0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90MnNQaXBlbGluZUlkPzogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9sZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbm9pc2VTY2FsZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2FtcGxlUmF0ZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfcGNtPzogU3ludGhlc2l6ZVJlcXVlc3QuUGNtO1xuICBwcml2YXRlIF9hdWRpb0Zvcm1hdD86IEF1ZGlvRm9ybWF0O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU3ludGhlc2l6ZVJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTeW50aGVzaXplUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudDJzUGlwZWxpbmVJZCA9IHZhbHVlLnQyc1BpcGVsaW5lSWQ7XG4gICAgdGhpcy50ZXh0ID0gdmFsdWUudGV4dDtcbiAgICB0aGlzLmxlbmd0aFNjYWxlID0gdmFsdWUubGVuZ3RoU2NhbGU7XG4gICAgdGhpcy5ub2lzZVNjYWxlID0gdmFsdWUubm9pc2VTY2FsZTtcbiAgICB0aGlzLnNhbXBsZVJhdGUgPSB2YWx1ZS5zYW1wbGVSYXRlO1xuICAgIHRoaXMucGNtID0gdmFsdWUucGNtO1xuICAgIHRoaXMuYXVkaW9Gb3JtYXQgPSB2YWx1ZS5hdWRpb0Zvcm1hdDtcbiAgICBTeW50aGVzaXplUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHQyc1BpcGVsaW5lSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdDJzUGlwZWxpbmVJZDtcbiAgfVxuICBzZXQgdDJzUGlwZWxpbmVJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdDJzUGlwZWxpbmVJZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGVuZ3RoU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoU2NhbGU7XG4gIH1cbiAgc2V0IGxlbmd0aFNjYWxlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sZW5ndGhTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub2lzZVNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vaXNlU2NhbGU7XG4gIH1cbiAgc2V0IG5vaXNlU2NhbGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vaXNlU2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2FtcGxlUmF0ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zYW1wbGVSYXRlO1xuICB9XG4gIHNldCBzYW1wbGVSYXRlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBjbSgpOiBTeW50aGVzaXplUmVxdWVzdC5QY20gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wY207XG4gIH1cbiAgc2V0IHBjbSh2YWx1ZTogU3ludGhlc2l6ZVJlcXVlc3QuUGNtIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGNtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvRm9ybWF0KCk6IEF1ZGlvRm9ybWF0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9Gb3JtYXQ7XG4gIH1cbiAgc2V0IGF1ZGlvRm9ybWF0KHZhbHVlOiBBdWRpb0Zvcm1hdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2F1ZGlvRm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHQyc1BpcGVsaW5lSWQ6IHRoaXMudDJzUGlwZWxpbmVJZCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGxlbmd0aFNjYWxlOiB0aGlzLmxlbmd0aFNjYWxlLFxuICAgICAgbm9pc2VTY2FsZTogdGhpcy5ub2lzZVNjYWxlLFxuICAgICAgc2FtcGxlUmF0ZTogdGhpcy5zYW1wbGVSYXRlLFxuICAgICAgcGNtOiB0aGlzLnBjbSxcbiAgICAgIGF1ZGlvRm9ybWF0OiB0aGlzLmF1ZGlvRm9ybWF0XG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTeW50aGVzaXplUmVxdWVzdCB7XG4gIGV4cG9ydCBlbnVtIFBjbSB7XG4gICAgcGNtMTYgPSAwLFxuICAgIHBjbTI0ID0gMSxcbiAgICBwY20zMiA9IDIsXG4gICAgcGNtUzggPSAzLFxuICAgIHBjbVU4ID0gNCxcbiAgICBmbG9hdCA9IDUsXG4gICAgZG91YmxlID0gNlxuICB9XG59XG5leHBvcnQgY2xhc3MgU3ludGhlc2l6ZVJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFN5bnRoZXNpemVSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTeW50aGVzaXplUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3ludGhlc2l6ZVJlc3BvbnNlKCk7XG4gICAgU3ludGhlc2l6ZVJlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTeW50aGVzaXplUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5hdWRpbyA9IGluc3RhbmNlLmF1ZGlvIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gICAgaW5zdGFuY2UuZ2VuZXJhdGlvblRpbWUgPSBpbnN0YW5jZS5nZW5lcmF0aW9uVGltZSB8fCAwO1xuICAgIGluc3RhbmNlLmF1ZGlvTGVuZ3RoID0gaW5zdGFuY2UuYXVkaW9MZW5ndGggfHwgMDtcbiAgICBpbnN0YW5jZS50MnNQaXBlbGluZUlkID0gaW5zdGFuY2UudDJzUGlwZWxpbmVJZCB8fCAnJztcbiAgICBpbnN0YW5jZS5hdWRpb0Zvcm1hdCA9IGluc3RhbmNlLmF1ZGlvRm9ybWF0IHx8IDA7XG4gICAgaW5zdGFuY2UudGV4dCA9IGluc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2FtcGxlUmF0ZSA9IGluc3RhbmNlLnNhbXBsZVJhdGUgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTeW50aGVzaXplUmVzcG9uc2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5hdWRpbyA9IHJlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmdlbmVyYXRpb25UaW1lID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuYXVkaW9MZW5ndGggPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS50MnNQaXBlbGluZUlkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLmF1ZGlvRm9ybWF0ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS50ZXh0ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGluc3RhbmNlLnNhbXBsZVJhdGUgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN5bnRoZXNpemVSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTeW50aGVzaXplUmVzcG9uc2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmF1ZGlvICYmIGluc3RhbmNlLmF1ZGlvLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlQnl0ZXMoMSwgaW5zdGFuY2UuYXVkaW8pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZ2VuZXJhdGlvblRpbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDIsIGluc3RhbmNlLmdlbmVyYXRpb25UaW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmF1ZGlvTGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgzLCBpbnN0YW5jZS5hdWRpb0xlbmd0aCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50MnNQaXBlbGluZUlkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNCwgaW5zdGFuY2UudDJzUGlwZWxpbmVJZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5hdWRpb0Zvcm1hdCkge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSg1LCBpbnN0YW5jZS5hdWRpb0Zvcm1hdCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50ZXh0KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNiwgaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zYW1wbGVSYXRlKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMig3LCBpbnN0YW5jZS5zYW1wbGVSYXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdWRpbz86IFVpbnQ4QXJyYXk7XG4gIHByaXZhdGUgX2dlbmVyYXRpb25UaW1lPzogbnVtYmVyO1xuICBwcml2YXRlIF9hdWRpb0xlbmd0aD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdDJzUGlwZWxpbmVJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfYXVkaW9Gb3JtYXQ/OiBBdWRpb0Zvcm1hdDtcbiAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2FtcGxlUmF0ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFN5bnRoZXNpemVSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN5bnRoZXNpemVSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYXVkaW8gPSB2YWx1ZS5hdWRpbztcbiAgICB0aGlzLmdlbmVyYXRpb25UaW1lID0gdmFsdWUuZ2VuZXJhdGlvblRpbWU7XG4gICAgdGhpcy5hdWRpb0xlbmd0aCA9IHZhbHVlLmF1ZGlvTGVuZ3RoO1xuICAgIHRoaXMudDJzUGlwZWxpbmVJZCA9IHZhbHVlLnQyc1BpcGVsaW5lSWQ7XG4gICAgdGhpcy5hdWRpb0Zvcm1hdCA9IHZhbHVlLmF1ZGlvRm9ybWF0O1xuICAgIHRoaXMudGV4dCA9IHZhbHVlLnRleHQ7XG4gICAgdGhpcy5zYW1wbGVSYXRlID0gdmFsdWUuc2FtcGxlUmF0ZTtcbiAgICBTeW50aGVzaXplUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhdWRpbygpOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW87XG4gIH1cbiAgc2V0IGF1ZGlvKHZhbHVlOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXVkaW8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZ2VuZXJhdGlvblRpbWUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGlvblRpbWU7XG4gIH1cbiAgc2V0IGdlbmVyYXRpb25UaW1lKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nZW5lcmF0aW9uVGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBhdWRpb0xlbmd0aCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0xlbmd0aDtcbiAgfVxuICBzZXQgYXVkaW9MZW5ndGgodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2F1ZGlvTGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHQyc1BpcGVsaW5lSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdDJzUGlwZWxpbmVJZDtcbiAgfVxuICBzZXQgdDJzUGlwZWxpbmVJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdDJzUGlwZWxpbmVJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBhdWRpb0Zvcm1hdCgpOiBBdWRpb0Zvcm1hdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvRm9ybWF0O1xuICB9XG4gIHNldCBhdWRpb0Zvcm1hdCh2YWx1ZTogQXVkaW9Gb3JtYXQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hdWRpb0Zvcm1hdCA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2FtcGxlUmF0ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zYW1wbGVSYXRlO1xuICB9XG4gIHNldCBzYW1wbGVSYXRlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1ZGlvOiB0aGlzLmF1ZGlvID8gdGhpcy5hdWRpby5zdWJhcnJheSgwKSA6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBnZW5lcmF0aW9uVGltZTogdGhpcy5nZW5lcmF0aW9uVGltZSxcbiAgICAgIGF1ZGlvTGVuZ3RoOiB0aGlzLmF1ZGlvTGVuZ3RoLFxuICAgICAgdDJzUGlwZWxpbmVJZDogdGhpcy50MnNQaXBlbGluZUlkLFxuICAgICAgYXVkaW9Gb3JtYXQ6IHRoaXMuYXVkaW9Gb3JtYXQsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBzYW1wbGVSYXRlOiB0aGlzLnNhbXBsZVJhdGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN5bnRoZXNpemVSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0KCk7XG4gICAgTGlzdFQyc1BpcGVsaW5lc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VzID0gaW5zdGFuY2UubGFuZ3VhZ2VzIHx8IFtdO1xuICAgIGluc3RhbmNlLnNwZWFrZXJTZXhlcyA9IGluc3RhbmNlLnNwZWFrZXJTZXhlcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5waXBlbGluZU93bmVycyA9IGluc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdO1xuICAgIGluc3RhbmNlLnNwZWFrZXJOYW1lcyA9IGluc3RhbmNlLnNwZWFrZXJOYW1lcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5kb21haW5zID0gaW5zdGFuY2UuZG9tYWlucyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5sYW5ndWFnZXMgPSBpbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChpbnN0YW5jZS5zcGVha2VyU2V4ZXMgPSBpbnN0YW5jZS5zcGVha2VyU2V4ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIChpbnN0YW5jZS5waXBlbGluZU93bmVycyA9IGluc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAoaW5zdGFuY2Uuc3BlYWtlck5hbWVzID0gaW5zdGFuY2Uuc3BlYWtlck5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAoaW5zdGFuY2UuZG9tYWlucyA9IGluc3RhbmNlLmRvbWFpbnMgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZXMgJiYgaW5zdGFuY2UubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgaW5zdGFuY2UubGFuZ3VhZ2VzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNwZWFrZXJTZXhlcyAmJiBpbnN0YW5jZS5zcGVha2VyU2V4ZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBpbnN0YW5jZS5zcGVha2VyU2V4ZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgJiYgaW5zdGFuY2UucGlwZWxpbmVPd25lcnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBpbnN0YW5jZS5waXBlbGluZU93bmVycyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zcGVha2VyTmFtZXMgJiYgaW5zdGFuY2Uuc3BlYWtlck5hbWVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgaW5zdGFuY2Uuc3BlYWtlck5hbWVzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRvbWFpbnMgJiYgaW5zdGFuY2UuZG9tYWlucy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDUsIGluc3RhbmNlLmRvbWFpbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zcGVha2VyU2V4ZXM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcGlwZWxpbmVPd25lcnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfc3BlYWtlck5hbWVzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2RvbWFpbnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFQyc1BpcGVsaW5lc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9ICh2YWx1ZS5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5zcGVha2VyU2V4ZXMgPSAodmFsdWUuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucGlwZWxpbmVPd25lcnMgPSAodmFsdWUucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5zcGVha2VyTmFtZXMgPSAodmFsdWUuc3BlYWtlck5hbWVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuZG9tYWlucyA9ICh2YWx1ZS5kb21haW5zIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RUMnNQaXBlbGluZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VzO1xuICB9XG4gIHNldCBsYW5ndWFnZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWFrZXJTZXhlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWFrZXJTZXhlcztcbiAgfVxuICBzZXQgc3BlYWtlclNleGVzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWFrZXJTZXhlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZU93bmVycygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lT3duZXJzO1xuICB9XG4gIHNldCBwaXBlbGluZU93bmVycyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZU93bmVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVha2VyTmFtZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVha2VyTmFtZXM7XG4gIH1cbiAgc2V0IHNwZWFrZXJOYW1lcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVha2VyTmFtZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZG9tYWlucygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbnM7XG4gIH1cbiAgc2V0IGRvbWFpbnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZG9tYWlucyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNwZWFrZXJTZXhlczogKHRoaXMuc3BlYWtlclNleGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc3BlYWtlck5hbWVzOiAodGhpcy5zcGVha2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0VDJzUGlwZWxpbmVzUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSgpO1xuICAgIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UucGlwZWxpbmVzID0gaW5zdGFuY2UucGlwZWxpbmVzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgVGV4dDJTcGVlY2hDb25maWcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgVGV4dDJTcGVlY2hDb25maWcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnBpcGVsaW5lcyA9IGluc3RhbmNlLnBpcGVsaW5lcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VDJzUGlwZWxpbmVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5waXBlbGluZXMgJiYgaW5zdGFuY2UucGlwZWxpbmVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5waXBlbGluZXMgYXMgYW55LFxuICAgICAgICBUZXh0MlNwZWVjaENvbmZpZy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9waXBlbGluZXM/OiBUZXh0MlNwZWVjaENvbmZpZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFQyc1BpcGVsaW5lc1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5waXBlbGluZXMgPSAodmFsdWUucGlwZWxpbmVzIHx8IFtdKS5tYXAobSA9PiBuZXcgVGV4dDJTcGVlY2hDb25maWcobSkpO1xuICAgIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lcygpOiBUZXh0MlNwZWVjaENvbmZpZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVzO1xuICB9XG4gIHNldCBwaXBlbGluZXModmFsdWU6IFRleHQyU3BlZWNoQ29uZmlnW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZXMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVzOiAodGhpcy5waXBlbGluZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RUMnNQaXBlbGluZXNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIFQyc1BpcGVsaW5lSWQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogVDJzUGlwZWxpbmVJZCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUMnNQaXBlbGluZUlkLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFQyc1BpcGVsaW5lSWQoKTtcbiAgICBUMnNQaXBlbGluZUlkLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBUMnNQaXBlbGluZUlkKSB7XG4gICAgaW5zdGFuY2UuaWQgPSBpbnN0YW5jZS5pZCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBUMnNQaXBlbGluZUlkLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaWQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUMnNQaXBlbGluZUlkLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFQyc1BpcGVsaW5lSWQsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmlkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gVDJzUGlwZWxpbmVJZCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFQyc1BpcGVsaW5lSWQ+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlkID0gdmFsdWUuaWQ7XG4gICAgVDJzUGlwZWxpbmVJZC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFQyc1BpcGVsaW5lSWQge31cbmV4cG9ydCBjbGFzcyBUZXh0MlNwZWVjaENvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBUZXh0MlNwZWVjaENvbmZpZykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUZXh0MlNwZWVjaENvbmZpZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZXh0MlNwZWVjaENvbmZpZygpO1xuICAgIFRleHQyU3BlZWNoQ29uZmlnLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBUZXh0MlNwZWVjaENvbmZpZykge1xuICAgIGluc3RhbmNlLmlkID0gaW5zdGFuY2UuaWQgfHwgJyc7XG4gICAgaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBpbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuYWN0aXZlID0gaW5zdGFuY2UuYWN0aXZlIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmluZmVyZW5jZSA9IGluc3RhbmNlLmluZmVyZW5jZSB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IGluc3RhbmNlLm5vcm1hbGl6YXRpb24gfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnBvc3Rwcm9jZXNzaW5nID0gaW5zdGFuY2UucG9zdHByb2Nlc3NpbmcgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFRleHQyU3BlZWNoQ29uZmlnLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaWQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBuZXcgRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIERlc2NyaXB0aW9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuYWN0aXZlID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5pbmZlcmVuY2UgPSBuZXcgSW5mZXJlbmNlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLmluZmVyZW5jZSwgSW5mZXJlbmNlLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IG5ldyBOb3JtYWxpemF0aW9uKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2Uubm9ybWFsaXphdGlvbixcbiAgICAgICAgICAgIE5vcm1hbGl6YXRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS5wb3N0cHJvY2Vzc2luZyA9IG5ldyBQb3N0cHJvY2Vzc2luZygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnBvc3Rwcm9jZXNzaW5nLFxuICAgICAgICAgICAgUG9zdHByb2Nlc3NpbmcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRleHQyU3BlZWNoQ29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFRleHQyU3BlZWNoQ29uZmlnLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5pZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRlc2NyaXB0aW9uKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5kZXNjcmlwdGlvbiBhcyBhbnksXG4gICAgICAgIERlc2NyaXB0aW9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWN0aXZlKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDMsIGluc3RhbmNlLmFjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbmZlcmVuY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLmluZmVyZW5jZSBhcyBhbnksXG4gICAgICAgIEluZmVyZW5jZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5vcm1hbGl6YXRpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIGluc3RhbmNlLm5vcm1hbGl6YXRpb24gYXMgYW55LFxuICAgICAgICBOb3JtYWxpemF0aW9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucG9zdHByb2Nlc3NpbmcpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIGluc3RhbmNlLnBvc3Rwcm9jZXNzaW5nIGFzIGFueSxcbiAgICAgICAgUG9zdHByb2Nlc3NpbmcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogRGVzY3JpcHRpb247XG4gIHByaXZhdGUgX2FjdGl2ZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX2luZmVyZW5jZT86IEluZmVyZW5jZTtcbiAgcHJpdmF0ZSBfbm9ybWFsaXphdGlvbj86IE5vcm1hbGl6YXRpb247XG4gIHByaXZhdGUgX3Bvc3Rwcm9jZXNzaW5nPzogUG9zdHByb2Nlc3Npbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBUZXh0MlNwZWVjaENvbmZpZyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRleHQyU3BlZWNoQ29uZmlnPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IHZhbHVlLmlkO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZS5kZXNjcmlwdGlvblxuICAgICAgPyBuZXcgRGVzY3JpcHRpb24odmFsdWUuZGVzY3JpcHRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZSA9IHZhbHVlLmFjdGl2ZTtcbiAgICB0aGlzLmluZmVyZW5jZSA9IHZhbHVlLmluZmVyZW5jZVxuICAgICAgPyBuZXcgSW5mZXJlbmNlKHZhbHVlLmluZmVyZW5jZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubm9ybWFsaXphdGlvbiA9IHZhbHVlLm5vcm1hbGl6YXRpb25cbiAgICAgID8gbmV3IE5vcm1hbGl6YXRpb24odmFsdWUubm9ybWFsaXphdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9zdHByb2Nlc3NpbmcgPSB2YWx1ZS5wb3N0cHJvY2Vzc2luZ1xuICAgICAgPyBuZXcgUG9zdHByb2Nlc3NpbmcodmFsdWUucG9zdHByb2Nlc3NpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBUZXh0MlNwZWVjaENvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVzY3JpcHRpb24oKTogRGVzY3JpcHRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IERlc2NyaXB0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpbmZlcmVuY2UoKTogSW5mZXJlbmNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW5mZXJlbmNlO1xuICB9XG4gIHNldCBpbmZlcmVuY2UodmFsdWU6IEluZmVyZW5jZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2luZmVyZW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub3JtYWxpemF0aW9uKCk6IE5vcm1hbGl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemF0aW9uO1xuICB9XG4gIHNldCBub3JtYWxpemF0aW9uKHZhbHVlOiBOb3JtYWxpemF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbm9ybWFsaXphdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBwb3N0cHJvY2Vzc2luZygpOiBQb3N0cHJvY2Vzc2luZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3Rwcm9jZXNzaW5nO1xuICB9XG4gIHNldCBwb3N0cHJvY2Vzc2luZyh2YWx1ZTogUG9zdHByb2Nlc3NpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wb3N0cHJvY2Vzc2luZyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uID8gdGhpcy5kZXNjcmlwdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIGluZmVyZW5jZTogdGhpcy5pbmZlcmVuY2UgPyB0aGlzLmluZmVyZW5jZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbm9ybWFsaXphdGlvbjogdGhpcy5ub3JtYWxpemF0aW9uXG4gICAgICAgID8gdGhpcy5ub3JtYWxpemF0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwb3N0cHJvY2Vzc2luZzogdGhpcy5wb3N0cHJvY2Vzc2luZ1xuICAgICAgICA/IHRoaXMucG9zdHByb2Nlc3NpbmcudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVGV4dDJTcGVlY2hDb25maWcge31cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZXNjcmlwdGlvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEZXNjcmlwdGlvbigpO1xuICAgIERlc2NyaXB0aW9uLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBEZXNjcmlwdGlvbikge1xuICAgIGluc3RhbmNlLmxhbmd1YWdlID0gaW5zdGFuY2UubGFuZ3VhZ2UgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3BlYWtlclNleCA9IGluc3RhbmNlLnNwZWFrZXJTZXggfHwgJyc7XG4gICAgaW5zdGFuY2UucGlwZWxpbmVPd25lciA9IGluc3RhbmNlLnBpcGVsaW5lT3duZXIgfHwgJyc7XG4gICAgaW5zdGFuY2UuY29tbWVudHMgPSBpbnN0YW5jZS5jb21tZW50cyB8fCAnJztcbiAgICBpbnN0YW5jZS5zcGVha2VyTmFtZSA9IGluc3RhbmNlLnNwZWFrZXJOYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLmRvbWFpbiA9IGluc3RhbmNlLmRvbWFpbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBEZXNjcmlwdGlvbiwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNwZWFrZXJTZXggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UucGlwZWxpbmVPd25lciA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5jb21tZW50cyA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5zcGVha2VyTmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS5kb21haW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZXNjcmlwdGlvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBEZXNjcmlwdGlvbiwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2UpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5sYW5ndWFnZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zcGVha2VyU2V4KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2Uuc3BlYWtlclNleCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5waXBlbGluZU93bmVyKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UucGlwZWxpbmVPd25lcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jb21tZW50cykge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDQsIGluc3RhbmNlLmNvbW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNwZWFrZXJOYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNSwgaW5zdGFuY2Uuc3BlYWtlck5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZG9tYWluKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNiwgaW5zdGFuY2UuZG9tYWluKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlYWtlclNleD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGlwZWxpbmVPd25lcj86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tbWVudHM/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NwZWFrZXJOYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9kb21haW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBEZXNjcmlwdGlvbiB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERlc2NyaXB0aW9uPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZSA9IHZhbHVlLmxhbmd1YWdlO1xuICAgIHRoaXMuc3BlYWtlclNleCA9IHZhbHVlLnNwZWFrZXJTZXg7XG4gICAgdGhpcy5waXBlbGluZU93bmVyID0gdmFsdWUucGlwZWxpbmVPd25lcjtcbiAgICB0aGlzLmNvbW1lbnRzID0gdmFsdWUuY29tbWVudHM7XG4gICAgdGhpcy5zcGVha2VyTmFtZSA9IHZhbHVlLnNwZWFrZXJOYW1lO1xuICAgIHRoaXMuZG9tYWluID0gdmFsdWUuZG9tYWluO1xuICAgIERlc2NyaXB0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cbiAgc2V0IGxhbmd1YWdlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVha2VyU2V4KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWFrZXJTZXg7XG4gIH1cbiAgc2V0IHNwZWFrZXJTZXgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWFrZXJTZXggPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmVPd25lcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZU93bmVyO1xuICB9XG4gIHNldCBwaXBlbGluZU93bmVyKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZU93bmVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbW1lbnRzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1lbnRzO1xuICB9XG4gIHNldCBjb21tZW50cyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29tbWVudHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlYWtlck5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYWtlck5hbWU7XG4gIH1cbiAgc2V0IHNwZWFrZXJOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVha2VyTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkb21haW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluO1xuICB9XG4gIHNldCBkb21haW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RvbWFpbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHNwZWFrZXJTZXg6IHRoaXMuc3BlYWtlclNleCxcbiAgICAgIHBpcGVsaW5lT3duZXI6IHRoaXMucGlwZWxpbmVPd25lcixcbiAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgc3BlYWtlck5hbWU6IHRoaXMuc3BlYWtlck5hbWUsXG4gICAgICBkb21haW46IHRoaXMuZG9tYWluXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZXNjcmlwdGlvbiB7fVxuZXhwb3J0IGNsYXNzIEluZmVyZW5jZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBJbmZlcmVuY2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSW5mZXJlbmNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEluZmVyZW5jZSgpO1xuICAgIEluZmVyZW5jZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogSW5mZXJlbmNlKSB7XG4gICAgaW5zdGFuY2UudHlwZSA9IGluc3RhbmNlLnR5cGUgfHwgJyc7XG4gICAgaW5zdGFuY2UuY29tcG9zaXRlSW5mZXJlbmNlID0gaW5zdGFuY2UuY29tcG9zaXRlSW5mZXJlbmNlIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5jYWNoaW5nID0gaW5zdGFuY2UuY2FjaGluZyB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogSW5mZXJlbmNlLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UudHlwZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5jb21wb3NpdGVJbmZlcmVuY2UgPSBuZXcgQ29tcG9zaXRlSW5mZXJlbmNlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9zaXRlSW5mZXJlbmNlLFxuICAgICAgICAgICAgQ29tcG9zaXRlSW5mZXJlbmNlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuY2FjaGluZyA9IG5ldyBDYWNoaW5nKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLmNhY2hpbmcsIENhY2hpbmcuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEluZmVyZW5jZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBJbmZlcmVuY2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNvbXBvc2l0ZUluZmVyZW5jZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UuY29tcG9zaXRlSW5mZXJlbmNlIGFzIGFueSxcbiAgICAgICAgQ29tcG9zaXRlSW5mZXJlbmNlLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuY2FjaGluZykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZSgzLCBpbnN0YW5jZS5jYWNoaW5nIGFzIGFueSwgQ2FjaGluZy50b0JpbmFyeVdyaXRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tcG9zaXRlSW5mZXJlbmNlPzogQ29tcG9zaXRlSW5mZXJlbmNlO1xuICBwcml2YXRlIF9jYWNoaW5nPzogQ2FjaGluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEluZmVyZW5jZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEluZmVyZW5jZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgdGhpcy5jb21wb3NpdGVJbmZlcmVuY2UgPSB2YWx1ZS5jb21wb3NpdGVJbmZlcmVuY2VcbiAgICAgID8gbmV3IENvbXBvc2l0ZUluZmVyZW5jZSh2YWx1ZS5jb21wb3NpdGVJbmZlcmVuY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhY2hpbmcgPSB2YWx1ZS5jYWNoaW5nID8gbmV3IENhY2hpbmcodmFsdWUuY2FjaGluZykgOiB1bmRlZmluZWQ7XG4gICAgSW5mZXJlbmNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbXBvc2l0ZUluZmVyZW5jZSgpOiBDb21wb3NpdGVJbmZlcmVuY2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb21wb3NpdGVJbmZlcmVuY2U7XG4gIH1cbiAgc2V0IGNvbXBvc2l0ZUluZmVyZW5jZSh2YWx1ZTogQ29tcG9zaXRlSW5mZXJlbmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29tcG9zaXRlSW5mZXJlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhY2hpbmcoKTogQ2FjaGluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hpbmc7XG4gIH1cbiAgc2V0IGNhY2hpbmcodmFsdWU6IENhY2hpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jYWNoaW5nID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGNvbXBvc2l0ZUluZmVyZW5jZTogdGhpcy5jb21wb3NpdGVJbmZlcmVuY2VcbiAgICAgICAgPyB0aGlzLmNvbXBvc2l0ZUluZmVyZW5jZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgY2FjaGluZzogdGhpcy5jYWNoaW5nID8gdGhpcy5jYWNoaW5nLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEluZmVyZW5jZSB7fVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUluZmVyZW5jZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBDb21wb3NpdGVJbmZlcmVuY2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ29tcG9zaXRlSW5mZXJlbmNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENvbXBvc2l0ZUluZmVyZW5jZSgpO1xuICAgIENvbXBvc2l0ZUluZmVyZW5jZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ29tcG9zaXRlSW5mZXJlbmNlKSB7XG4gICAgaW5zdGFuY2UudGV4dDJtZWwgPSBpbnN0YW5jZS50ZXh0Mm1lbCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UubWVsMmF1ZGlvID0gaW5zdGFuY2UubWVsMmF1ZGlvIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBDb21wb3NpdGVJbmZlcmVuY2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS50ZXh0Mm1lbCA9IG5ldyBUZXh0Mk1lbCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS50ZXh0Mm1lbCwgVGV4dDJNZWwuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5tZWwyYXVkaW8gPSBuZXcgTWVsMkF1ZGlvKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLm1lbDJhdWRpbywgTWVsMkF1ZGlvLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDb21wb3NpdGVJbmZlcmVuY2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQ29tcG9zaXRlSW5mZXJlbmNlLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS50ZXh0Mm1lbCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZSgxLCBpbnN0YW5jZS50ZXh0Mm1lbCBhcyBhbnksIFRleHQyTWVsLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1lbDJhdWRpbykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UubWVsMmF1ZGlvIGFzIGFueSxcbiAgICAgICAgTWVsMkF1ZGlvLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHQybWVsPzogVGV4dDJNZWw7XG4gIHByaXZhdGUgX21lbDJhdWRpbz86IE1lbDJBdWRpbztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIENvbXBvc2l0ZUluZmVyZW5jZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENvbXBvc2l0ZUluZmVyZW5jZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGV4dDJtZWwgPSB2YWx1ZS50ZXh0Mm1lbCA/IG5ldyBUZXh0Mk1lbCh2YWx1ZS50ZXh0Mm1lbCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZWwyYXVkaW8gPSB2YWx1ZS5tZWwyYXVkaW9cbiAgICAgID8gbmV3IE1lbDJBdWRpbyh2YWx1ZS5tZWwyYXVkaW8pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBDb21wb3NpdGVJbmZlcmVuY2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0ZXh0Mm1lbCgpOiBUZXh0Mk1lbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQybWVsO1xuICB9XG4gIHNldCB0ZXh0Mm1lbCh2YWx1ZTogVGV4dDJNZWwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0Mm1lbCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZWwyYXVkaW8oKTogTWVsMkF1ZGlvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVsMmF1ZGlvO1xuICB9XG4gIHNldCBtZWwyYXVkaW8odmFsdWU6IE1lbDJBdWRpbyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lbDJhdWRpbyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0Mm1lbDogdGhpcy50ZXh0Mm1lbCA/IHRoaXMudGV4dDJtZWwudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1lbDJhdWRpbzogdGhpcy5tZWwyYXVkaW8gPyB0aGlzLm1lbDJhdWRpby50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDb21wb3NpdGVJbmZlcmVuY2Uge31cbmV4cG9ydCBjbGFzcyBUZXh0Mk1lbCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBUZXh0Mk1lbCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUZXh0Mk1lbC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZXh0Mk1lbCgpO1xuICAgIFRleHQyTWVsLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBUZXh0Mk1lbCkge1xuICAgIGluc3RhbmNlLnR5cGUgPSBpbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIGluc3RhbmNlLmdsb3dUdHMgPSBpbnN0YW5jZS5nbG93VHRzIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5nbG93VHRzVHJpdG9uID0gaW5zdGFuY2UuZ2xvd1R0c1RyaXRvbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogVGV4dDJNZWwsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS50eXBlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmdsb3dUdHMgPSBuZXcgR2xvd1RUUygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5nbG93VHRzLCBHbG93VFRTLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UuZ2xvd1R0c1RyaXRvbiA9IG5ldyBHbG93VFRTVHJpdG9uKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuZ2xvd1R0c1RyaXRvbixcbiAgICAgICAgICAgIEdsb3dUVFNUcml0b24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRleHQyTWVsLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFRleHQyTWVsLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS50eXBlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudHlwZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5nbG93VHRzKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDMsIGluc3RhbmNlLmdsb3dUdHMgYXMgYW55LCBHbG93VFRTLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmdsb3dUdHNUcml0b24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLmdsb3dUdHNUcml0b24gYXMgYW55LFxuICAgICAgICBHbG93VFRTVHJpdG9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2dsb3dUdHM/OiBHbG93VFRTO1xuICBwcml2YXRlIF9nbG93VHRzVHJpdG9uPzogR2xvd1RUU1RyaXRvbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFRleHQyTWVsIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGV4dDJNZWw+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xuICAgIHRoaXMuZ2xvd1R0cyA9IHZhbHVlLmdsb3dUdHMgPyBuZXcgR2xvd1RUUyh2YWx1ZS5nbG93VHRzKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdsb3dUdHNUcml0b24gPSB2YWx1ZS5nbG93VHRzVHJpdG9uXG4gICAgICA/IG5ldyBHbG93VFRTVHJpdG9uKHZhbHVlLmdsb3dUdHNUcml0b24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBUZXh0Mk1lbC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBnbG93VHRzKCk6IEdsb3dUVFMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nbG93VHRzO1xuICB9XG4gIHNldCBnbG93VHRzKHZhbHVlOiBHbG93VFRTIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZ2xvd1R0cyA9IHZhbHVlO1xuICB9XG4gIGdldCBnbG93VHRzVHJpdG9uKCk6IEdsb3dUVFNUcml0b24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nbG93VHRzVHJpdG9uO1xuICB9XG4gIHNldCBnbG93VHRzVHJpdG9uKHZhbHVlOiBHbG93VFRTVHJpdG9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZ2xvd1R0c1RyaXRvbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBnbG93VHRzOiB0aGlzLmdsb3dUdHMgPyB0aGlzLmdsb3dUdHMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGdsb3dUdHNUcml0b246IHRoaXMuZ2xvd1R0c1RyaXRvblxuICAgICAgICA/IHRoaXMuZ2xvd1R0c1RyaXRvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUZXh0Mk1lbCB7fVxuZXhwb3J0IGNsYXNzIEdsb3dUVFMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2xvd1RUUykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHbG93VFRTLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdsb3dUVFMoKTtcbiAgICBHbG93VFRTLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHbG93VFRTKSB7XG4gICAgaW5zdGFuY2UuYmF0Y2hTaXplID0gaW5zdGFuY2UuYmF0Y2hTaXplIHx8ICcwJztcbiAgICBpbnN0YW5jZS51c2VHcHUgPSBpbnN0YW5jZS51c2VHcHUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UubGVuZ3RoU2NhbGUgPSBpbnN0YW5jZS5sZW5ndGhTY2FsZSB8fCAwO1xuICAgIGluc3RhbmNlLm5vaXNlU2NhbGUgPSBpbnN0YW5jZS5ub2lzZVNjYWxlIHx8IDA7XG4gICAgaW5zdGFuY2UucGF0aCA9IGluc3RhbmNlLnBhdGggfHwgJyc7XG4gICAgaW5zdGFuY2UuY2xlYW5lcnMgPSBpbnN0YW5jZS5jbGVhbmVycyB8fCBbXTtcbiAgICBpbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGggPSBpbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGggfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogR2xvd1RUUywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmJhdGNoU2l6ZSA9IHJlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnVzZUdwdSA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UubGVuZ3RoU2NhbGUgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5ub2lzZVNjYWxlID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UucGF0aCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAoaW5zdGFuY2UuY2xlYW5lcnMgPSBpbnN0YW5jZS5jbGVhbmVycyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIHJlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UucGFyYW1Db25maWdQYXRoID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2xvd1RUUy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBHbG93VFRTLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5iYXRjaFNpemUpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIGluc3RhbmNlLmJhdGNoU2l6ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51c2VHcHUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMiwgaW5zdGFuY2UudXNlR3B1KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxlbmd0aFNjYWxlKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgzLCBpbnN0YW5jZS5sZW5ndGhTY2FsZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5ub2lzZVNjYWxlKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg0LCBpbnN0YW5jZS5ub2lzZVNjYWxlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhdGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS5wYXRoKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNsZWFuZXJzICYmIGluc3RhbmNlLmNsZWFuZXJzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNiwgaW5zdGFuY2UuY2xlYW5lcnMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFyYW1Db25maWdQYXRoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNywgaW5zdGFuY2UucGFyYW1Db25maWdQYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9iYXRjaFNpemU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZUdwdT86IGJvb2xlYW47XG4gIHByaXZhdGUgX2xlbmd0aFNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9ub2lzZVNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF9jbGVhbmVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9wYXJhbUNvbmZpZ1BhdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHbG93VFRTIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2xvd1RUUz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYmF0Y2hTaXplID0gdmFsdWUuYmF0Y2hTaXplO1xuICAgIHRoaXMudXNlR3B1ID0gdmFsdWUudXNlR3B1O1xuICAgIHRoaXMubGVuZ3RoU2NhbGUgPSB2YWx1ZS5sZW5ndGhTY2FsZTtcbiAgICB0aGlzLm5vaXNlU2NhbGUgPSB2YWx1ZS5ub2lzZVNjYWxlO1xuICAgIHRoaXMucGF0aCA9IHZhbHVlLnBhdGg7XG4gICAgdGhpcy5jbGVhbmVycyA9ICh2YWx1ZS5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnBhcmFtQ29uZmlnUGF0aCA9IHZhbHVlLnBhcmFtQ29uZmlnUGF0aDtcbiAgICBHbG93VFRTLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYmF0Y2hTaXplKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JhdGNoU2l6ZTtcbiAgfVxuICBzZXQgYmF0Y2hTaXplKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9iYXRjaFNpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlR3B1KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91c2VHcHU7XG4gIH1cbiAgc2V0IHVzZUdwdSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZUdwdSA9IHZhbHVlO1xuICB9XG4gIGdldCBsZW5ndGhTY2FsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGhTY2FsZTtcbiAgfVxuICBzZXQgbGVuZ3RoU2NhbGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xlbmd0aFNjYWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vaXNlU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9pc2VTY2FsZTtcbiAgfVxuICBzZXQgbm9pc2VTY2FsZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbm9pc2VTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbiAgc2V0IHBhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2xlYW5lcnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGVhbmVycztcbiAgfVxuICBzZXQgY2xlYW5lcnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xlYW5lcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFyYW1Db25maWdQYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtQ29uZmlnUGF0aDtcbiAgfVxuICBzZXQgcGFyYW1Db25maWdQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJhbUNvbmZpZ1BhdGggPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHUsXG4gICAgICBsZW5ndGhTY2FsZTogdGhpcy5sZW5ndGhTY2FsZSxcbiAgICAgIG5vaXNlU2NhbGU6IHRoaXMubm9pc2VTY2FsZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGNsZWFuZXJzOiAodGhpcy5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBhcmFtQ29uZmlnUGF0aDogdGhpcy5wYXJhbUNvbmZpZ1BhdGhcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdsb3dUVFMge31cbmV4cG9ydCBjbGFzcyBHbG93VFRTVHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEdsb3dUVFNUcml0b24pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2xvd1RUU1RyaXRvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHbG93VFRTVHJpdG9uKCk7XG4gICAgR2xvd1RUU1RyaXRvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2xvd1RUU1RyaXRvbikge1xuICAgIGluc3RhbmNlLmJhdGNoU2l6ZSA9IGluc3RhbmNlLmJhdGNoU2l6ZSB8fCAnMCc7XG4gICAgaW5zdGFuY2UubGVuZ3RoU2NhbGUgPSBpbnN0YW5jZS5sZW5ndGhTY2FsZSB8fCAwO1xuICAgIGluc3RhbmNlLm5vaXNlU2NhbGUgPSBpbnN0YW5jZS5ub2lzZVNjYWxlIHx8IDA7XG4gICAgaW5zdGFuY2UuY2xlYW5lcnMgPSBpbnN0YW5jZS5jbGVhbmVycyB8fCBbXTtcbiAgICBpbnN0YW5jZS5tYXhUZXh0TGVuZ3RoID0gaW5zdGFuY2UubWF4VGV4dExlbmd0aCB8fCAnMCc7XG4gICAgaW5zdGFuY2UucGFyYW1Db25maWdQYXRoID0gaW5zdGFuY2UucGFyYW1Db25maWdQYXRoIHx8ICcnO1xuICAgIGluc3RhbmNlLnRyaXRvblVybCA9IGluc3RhbmNlLnRyaXRvblVybCB8fCAnJztcbiAgICBpbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSBpbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogR2xvd1RUU1RyaXRvbiwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmJhdGNoU2l6ZSA9IHJlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmxlbmd0aFNjYWxlID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uubm9pc2VTY2FsZSA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIChpbnN0YW5jZS5jbGVhbmVycyA9IGluc3RhbmNlLmNsZWFuZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5tYXhUZXh0TGVuZ3RoID0gcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UucGFyYW1Db25maWdQYXRoID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGluc3RhbmNlLnRyaXRvblVybCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBpbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHbG93VFRTVHJpdG9uLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEdsb3dUVFNUcml0b24sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmJhdGNoU2l6ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMSwgaW5zdGFuY2UuYmF0Y2hTaXplKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxlbmd0aFNjYWxlKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgyLCBpbnN0YW5jZS5sZW5ndGhTY2FsZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5ub2lzZVNjYWxlKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgzLCBpbnN0YW5jZS5ub2lzZVNjYWxlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNsZWFuZXJzICYmIGluc3RhbmNlLmNsZWFuZXJzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgaW5zdGFuY2UuY2xlYW5lcnMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWF4VGV4dExlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNSwgaW5zdGFuY2UubWF4VGV4dExlbmd0aCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg2LCBpbnN0YW5jZS5wYXJhbUNvbmZpZ1BhdGgpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJpdG9uVXJsKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNywgaW5zdGFuY2UudHJpdG9uVXJsKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDgsIGluc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYmF0Y2hTaXplPzogc3RyaW5nO1xuICBwcml2YXRlIF9sZW5ndGhTY2FsZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbm9pc2VTY2FsZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfY2xlYW5lcnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbWF4VGV4dExlbmd0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1Db25maWdQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Vcmw/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEdsb3dUVFNUcml0b24gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHbG93VFRTVHJpdG9uPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5iYXRjaFNpemUgPSB2YWx1ZS5iYXRjaFNpemU7XG4gICAgdGhpcy5sZW5ndGhTY2FsZSA9IHZhbHVlLmxlbmd0aFNjYWxlO1xuICAgIHRoaXMubm9pc2VTY2FsZSA9IHZhbHVlLm5vaXNlU2NhbGU7XG4gICAgdGhpcy5jbGVhbmVycyA9ICh2YWx1ZS5jbGVhbmVycyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm1heFRleHRMZW5ndGggPSB2YWx1ZS5tYXhUZXh0TGVuZ3RoO1xuICAgIHRoaXMucGFyYW1Db25maWdQYXRoID0gdmFsdWUucGFyYW1Db25maWdQYXRoO1xuICAgIHRoaXMudHJpdG9uVXJsID0gdmFsdWUudHJpdG9uVXJsO1xuICAgIHRoaXMudHJpdG9uTW9kZWxOYW1lID0gdmFsdWUudHJpdG9uTW9kZWxOYW1lO1xuICAgIEdsb3dUVFNUcml0b24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBiYXRjaFNpemUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYmF0Y2hTaXplO1xuICB9XG4gIHNldCBiYXRjaFNpemUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JhdGNoU2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsZW5ndGhTY2FsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGhTY2FsZTtcbiAgfVxuICBzZXQgbGVuZ3RoU2NhbGUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xlbmd0aFNjYWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vaXNlU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9pc2VTY2FsZTtcbiAgfVxuICBzZXQgbm9pc2VTY2FsZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbm9pc2VTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjbGVhbmVycygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NsZWFuZXJzO1xuICB9XG4gIHNldCBjbGVhbmVycyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGVhbmVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXhUZXh0TGVuZ3RoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21heFRleHRMZW5ndGg7XG4gIH1cbiAgc2V0IG1heFRleHRMZW5ndGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21heFRleHRMZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFyYW1Db25maWdQYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtQ29uZmlnUGF0aDtcbiAgfVxuICBzZXQgcGFyYW1Db25maWdQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJhbUNvbmZpZ1BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJpdG9uVXJsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaXRvblVybDtcbiAgfVxuICBzZXQgdHJpdG9uVXJsKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cml0b25VcmwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJpdG9uTW9kZWxOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaXRvbk1vZGVsTmFtZTtcbiAgfVxuICBzZXQgdHJpdG9uTW9kZWxOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cml0b25Nb2RlbE5hbWUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIGxlbmd0aFNjYWxlOiB0aGlzLmxlbmd0aFNjYWxlLFxuICAgICAgbm9pc2VTY2FsZTogdGhpcy5ub2lzZVNjYWxlLFxuICAgICAgY2xlYW5lcnM6ICh0aGlzLmNsZWFuZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4VGV4dExlbmd0aDogdGhpcy5tYXhUZXh0TGVuZ3RoLFxuICAgICAgcGFyYW1Db25maWdQYXRoOiB0aGlzLnBhcmFtQ29uZmlnUGF0aCxcbiAgICAgIHRyaXRvblVybDogdGhpcy50cml0b25VcmwsXG4gICAgICB0cml0b25Nb2RlbE5hbWU6IHRoaXMudHJpdG9uTW9kZWxOYW1lXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHbG93VFRTVHJpdG9uIHt9XG5leHBvcnQgY2xhc3MgTWVsMkF1ZGlvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IE1lbDJBdWRpbykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNZWwyQXVkaW8udG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVsMkF1ZGlvKCk7XG4gICAgTWVsMkF1ZGlvLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBNZWwyQXVkaW8pIHtcbiAgICBpbnN0YW5jZS50eXBlID0gaW5zdGFuY2UudHlwZSB8fCAnJztcbiAgICBpbnN0YW5jZS5tYk1lbGdhblRyaXRvbiA9IGluc3RhbmNlLm1iTWVsZ2FuVHJpdG9uIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5oaWZpR2FuID0gaW5zdGFuY2UuaGlmaUdhbiB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuaGlmaUdhblRyaXRvbiA9IGluc3RhbmNlLmhpZmlHYW5Ucml0b24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IE1lbDJBdWRpbywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnR5cGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubWJNZWxnYW5Ucml0b24gPSBuZXcgTWJNZWxnYW5Ucml0b24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5tYk1lbGdhblRyaXRvbixcbiAgICAgICAgICAgIE1iTWVsZ2FuVHJpdG9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuaGlmaUdhbiA9IG5ldyBIaUZpR2FuKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLmhpZmlHYW4sIEhpRmlHYW4uZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5oaWZpR2FuVHJpdG9uID0gbmV3IEhpRmlHYW5Ucml0b24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5oaWZpR2FuVHJpdG9uLFxuICAgICAgICAgICAgSGlGaUdhblRyaXRvbi5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVsMkF1ZGlvLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IE1lbDJBdWRpbywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudHlwZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWJNZWxnYW5Ucml0b24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLm1iTWVsZ2FuVHJpdG9uIGFzIGFueSxcbiAgICAgICAgTWJNZWxnYW5Ucml0b24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5oaWZpR2FuKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDMsIGluc3RhbmNlLmhpZmlHYW4gYXMgYW55LCBIaUZpR2FuLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmhpZmlHYW5Ucml0b24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLmhpZmlHYW5Ucml0b24gYXMgYW55LFxuICAgICAgICBIaUZpR2FuVHJpdG9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX21iTWVsZ2FuVHJpdG9uPzogTWJNZWxnYW5Ucml0b247XG4gIHByaXZhdGUgX2hpZmlHYW4/OiBIaUZpR2FuO1xuICBwcml2YXRlIF9oaWZpR2FuVHJpdG9uPzogSGlGaUdhblRyaXRvbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIE1lbDJBdWRpbyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1lbDJBdWRpbz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgdGhpcy5tYk1lbGdhblRyaXRvbiA9IHZhbHVlLm1iTWVsZ2FuVHJpdG9uXG4gICAgICA/IG5ldyBNYk1lbGdhblRyaXRvbih2YWx1ZS5tYk1lbGdhblRyaXRvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlmaUdhbiA9IHZhbHVlLmhpZmlHYW4gPyBuZXcgSGlGaUdhbih2YWx1ZS5oaWZpR2FuKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpZmlHYW5Ucml0b24gPSB2YWx1ZS5oaWZpR2FuVHJpdG9uXG4gICAgICA/IG5ldyBIaUZpR2FuVHJpdG9uKHZhbHVlLmhpZmlHYW5Ucml0b24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBNZWwyQXVkaW8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWJNZWxnYW5Ucml0b24oKTogTWJNZWxnYW5Ucml0b24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYk1lbGdhblRyaXRvbjtcbiAgfVxuICBzZXQgbWJNZWxnYW5Ucml0b24odmFsdWU6IE1iTWVsZ2FuVHJpdG9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWJNZWxnYW5Ucml0b24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgaGlmaUdhbigpOiBIaUZpR2FuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faGlmaUdhbjtcbiAgfVxuICBzZXQgaGlmaUdhbih2YWx1ZTogSGlGaUdhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2hpZmlHYW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgaGlmaUdhblRyaXRvbigpOiBIaUZpR2FuVHJpdG9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faGlmaUdhblRyaXRvbjtcbiAgfVxuICBzZXQgaGlmaUdhblRyaXRvbih2YWx1ZTogSGlGaUdhblRyaXRvbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2hpZmlHYW5Ucml0b24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbWJNZWxnYW5Ucml0b246IHRoaXMubWJNZWxnYW5Ucml0b25cbiAgICAgICAgPyB0aGlzLm1iTWVsZ2FuVHJpdG9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBoaWZpR2FuOiB0aGlzLmhpZmlHYW4gPyB0aGlzLmhpZmlHYW4udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGhpZmlHYW5Ucml0b246IHRoaXMuaGlmaUdhblRyaXRvblxuICAgICAgICA/IHRoaXMuaGlmaUdhblRyaXRvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZWwyQXVkaW8ge31cbmV4cG9ydCBjbGFzcyBIaUZpR2FuIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEhpRmlHYW4pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSGlGaUdhbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIaUZpR2FuKCk7XG4gICAgSGlGaUdhbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogSGlGaUdhbikge1xuICAgIGluc3RhbmNlLnVzZUdwdSA9IGluc3RhbmNlLnVzZUdwdSB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5iYXRjaFNpemUgPSBpbnN0YW5jZS5iYXRjaFNpemUgfHwgJzAnO1xuICAgIGluc3RhbmNlLmNvbmZpZ1BhdGggPSBpbnN0YW5jZS5jb25maWdQYXRoIHx8ICcnO1xuICAgIGluc3RhbmNlLm1vZGVsUGF0aCA9IGluc3RhbmNlLm1vZGVsUGF0aCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBIaUZpR2FuLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UudXNlR3B1ID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5iYXRjaFNpemUgPSByZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5jb25maWdQYXRoID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLm1vZGVsUGF0aCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEhpRmlHYW4ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogSGlGaUdhbiwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudXNlR3B1KSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDEsIGluc3RhbmNlLnVzZUdwdSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5iYXRjaFNpemUpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIGluc3RhbmNlLmJhdGNoU2l6ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jb25maWdQYXRoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UuY29uZmlnUGF0aCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5tb2RlbFBhdGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5tb2RlbFBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VzZUdwdT86IGJvb2xlYW47XG4gIHByaXZhdGUgX2JhdGNoU2l6ZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29uZmlnUGF0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbW9kZWxQYXRoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gSGlGaUdhbiB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEhpRmlHYW4+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZUdwdSA9IHZhbHVlLnVzZUdwdTtcbiAgICB0aGlzLmJhdGNoU2l6ZSA9IHZhbHVlLmJhdGNoU2l6ZTtcbiAgICB0aGlzLmNvbmZpZ1BhdGggPSB2YWx1ZS5jb25maWdQYXRoO1xuICAgIHRoaXMubW9kZWxQYXRoID0gdmFsdWUubW9kZWxQYXRoO1xuICAgIEhpRmlHYW4ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1c2VHcHUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUdwdTtcbiAgfVxuICBzZXQgdXNlR3B1KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXNlR3B1ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJhdGNoU2l6ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFNpemU7XG4gIH1cbiAgc2V0IGJhdGNoU2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnUGF0aDtcbiAgfVxuICBzZXQgY29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlbFBhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxQYXRoO1xuICB9XG4gIHNldCBtb2RlbFBhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21vZGVsUGF0aCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VHcHU6IHRoaXMudXNlR3B1LFxuICAgICAgYmF0Y2hTaXplOiB0aGlzLmJhdGNoU2l6ZSxcbiAgICAgIGNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aCxcbiAgICAgIG1vZGVsUGF0aDogdGhpcy5tb2RlbFBhdGhcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEhpRmlHYW4ge31cbmV4cG9ydCBjbGFzcyBIaUZpR2FuVHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEhpRmlHYW5Ucml0b24pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSGlGaUdhblRyaXRvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIaUZpR2FuVHJpdG9uKCk7XG4gICAgSGlGaUdhblRyaXRvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogSGlGaUdhblRyaXRvbikge1xuICAgIGluc3RhbmNlLmNvbmZpZ1BhdGggPSBpbnN0YW5jZS5jb25maWdQYXRoIHx8ICcnO1xuICAgIGluc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSA9IGluc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS50cml0b25VcmwgPSBpbnN0YW5jZS50cml0b25VcmwgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogSGlGaUdhblRyaXRvbiwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmNvbmZpZ1BhdGggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnRyaXRvblVybCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEhpRmlHYW5Ucml0b24ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogSGlGaUdhblRyaXRvbiwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuY29uZmlnUGF0aCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmNvbmZpZ1BhdGgpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnRyaXRvblVybCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLnRyaXRvblVybCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnUGF0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uTW9kZWxOYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Vcmw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBIaUZpR2FuVHJpdG9uIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SGlGaUdhblRyaXRvbj4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IHZhbHVlLmNvbmZpZ1BhdGg7XG4gICAgdGhpcy50cml0b25Nb2RlbE5hbWUgPSB2YWx1ZS50cml0b25Nb2RlbE5hbWU7XG4gICAgdGhpcy50cml0b25VcmwgPSB2YWx1ZS50cml0b25Vcmw7XG4gICAgSGlGaUdhblRyaXRvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnUGF0aDtcbiAgfVxuICBzZXQgY29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25Nb2RlbE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uTW9kZWxOYW1lO1xuICB9XG4gIHNldCB0cml0b25Nb2RlbE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyaXRvbk1vZGVsTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25VcmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uVXJsO1xuICB9XG4gIHNldCB0cml0b25VcmwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyaXRvblVybCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdQYXRoOiB0aGlzLmNvbmZpZ1BhdGgsXG4gICAgICB0cml0b25Nb2RlbE5hbWU6IHRoaXMudHJpdG9uTW9kZWxOYW1lLFxuICAgICAgdHJpdG9uVXJsOiB0aGlzLnRyaXRvblVybFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSGlGaUdhblRyaXRvbiB7fVxuZXhwb3J0IGNsYXNzIE1iTWVsZ2FuVHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IE1iTWVsZ2FuVHJpdG9uKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1iTWVsZ2FuVHJpdG9uLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1iTWVsZ2FuVHJpdG9uKCk7XG4gICAgTWJNZWxnYW5Ucml0b24uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IE1iTWVsZ2FuVHJpdG9uKSB7XG4gICAgaW5zdGFuY2UuY29uZmlnUGF0aCA9IGluc3RhbmNlLmNvbmZpZ1BhdGggfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3RhdHNQYXRoID0gaW5zdGFuY2Uuc3RhdHNQYXRoIHx8ICcnO1xuICAgIGluc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSA9IGluc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS50cml0b25VcmwgPSBpbnN0YW5jZS50cml0b25VcmwgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTWJNZWxnYW5Ucml0b24sIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5jb25maWdQYXRoID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnN0YXRzUGF0aCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UudHJpdG9uVXJsID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWJNZWxnYW5Ucml0b24ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTWJNZWxnYW5Ucml0b24sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmNvbmZpZ1BhdGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5jb25maWdQYXRoKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnN0YXRzUGF0aCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnN0YXRzUGF0aCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50cml0b25Nb2RlbE5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS50cml0b25Nb2RlbE5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJpdG9uVXJsKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNCwgaW5zdGFuY2UudHJpdG9uVXJsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25maWdQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF9zdGF0c1BhdGg/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvbk1vZGVsTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uVXJsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTWJNZWxnYW5Ucml0b24gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNYk1lbGdhblRyaXRvbj4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IHZhbHVlLmNvbmZpZ1BhdGg7XG4gICAgdGhpcy5zdGF0c1BhdGggPSB2YWx1ZS5zdGF0c1BhdGg7XG4gICAgdGhpcy50cml0b25Nb2RlbE5hbWUgPSB2YWx1ZS50cml0b25Nb2RlbE5hbWU7XG4gICAgdGhpcy50cml0b25VcmwgPSB2YWx1ZS50cml0b25Vcmw7XG4gICAgTWJNZWxnYW5Ucml0b24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjb25maWdQYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ1BhdGg7XG4gIH1cbiAgc2V0IGNvbmZpZ1BhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbmZpZ1BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RhdHNQYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRzUGF0aDtcbiAgfVxuICBzZXQgc3RhdHNQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdGF0c1BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJpdG9uTW9kZWxOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaXRvbk1vZGVsTmFtZTtcbiAgfVxuICBzZXQgdHJpdG9uTW9kZWxOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cml0b25Nb2RlbE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJpdG9uVXJsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaXRvblVybDtcbiAgfVxuICBzZXQgdHJpdG9uVXJsKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cml0b25VcmwgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnUGF0aDogdGhpcy5jb25maWdQYXRoLFxuICAgICAgc3RhdHNQYXRoOiB0aGlzLnN0YXRzUGF0aCxcbiAgICAgIHRyaXRvbk1vZGVsTmFtZTogdGhpcy50cml0b25Nb2RlbE5hbWUsXG4gICAgICB0cml0b25Vcmw6IHRoaXMudHJpdG9uVXJsXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNYk1lbGdhblRyaXRvbiB7fVxuZXhwb3J0IGNsYXNzIENhY2hpbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQ2FjaGluZykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDYWNoaW5nLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENhY2hpbmcoKTtcbiAgICBDYWNoaW5nLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBDYWNoaW5nKSB7XG4gICAgaW5zdGFuY2UuYWN0aXZlID0gaW5zdGFuY2UuYWN0aXZlIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLm1lbW9yeUNhY2hlTWF4U2l6ZSA9IGluc3RhbmNlLm1lbW9yeUNhY2hlTWF4U2l6ZSB8fCAnMCc7XG4gICAgaW5zdGFuY2Uuc2FtcGxpbmdSYXRlID0gaW5zdGFuY2Uuc2FtcGxpbmdSYXRlIHx8ICcwJztcbiAgICBpbnN0YW5jZS5sb2FkQ2FjaGUgPSBpbnN0YW5jZS5sb2FkQ2FjaGUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2Uuc2F2ZUNhY2hlID0gaW5zdGFuY2Uuc2F2ZUNhY2hlIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmNhY2hlU2F2ZURpciA9IGluc3RhbmNlLmNhY2hlU2F2ZURpciB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBDYWNoaW5nLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuYWN0aXZlID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5tZW1vcnlDYWNoZU1heFNpemUgPSByZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5zYW1wbGluZ1JhdGUgPSByZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5sb2FkQ2FjaGUgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLnNhdmVDYWNoZSA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UuY2FjaGVTYXZlRGlyID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2FjaGluZy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBDYWNoaW5nLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5hY3RpdmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMSwgaW5zdGFuY2UuYWN0aXZlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1lbW9yeUNhY2hlTWF4U2l6ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgaW5zdGFuY2UubWVtb3J5Q2FjaGVNYXhTaXplKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNhbXBsaW5nUmF0ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgaW5zdGFuY2Uuc2FtcGxpbmdSYXRlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxvYWRDYWNoZSkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg0LCBpbnN0YW5jZS5sb2FkQ2FjaGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2F2ZUNhY2hlKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDUsIGluc3RhbmNlLnNhdmVDYWNoZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jYWNoZVNhdmVEaXIpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg2LCBpbnN0YW5jZS5jYWNoZVNhdmVEaXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2ZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX21lbW9yeUNhY2hlTWF4U2l6ZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2FtcGxpbmdSYXRlPzogc3RyaW5nO1xuICBwcml2YXRlIF9sb2FkQ2FjaGU/OiBib29sZWFuO1xuICBwcml2YXRlIF9zYXZlQ2FjaGU/OiBib29sZWFuO1xuICBwcml2YXRlIF9jYWNoZVNhdmVEaXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBDYWNoaW5nIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2FjaGluZz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWN0aXZlID0gdmFsdWUuYWN0aXZlO1xuICAgIHRoaXMubWVtb3J5Q2FjaGVNYXhTaXplID0gdmFsdWUubWVtb3J5Q2FjaGVNYXhTaXplO1xuICAgIHRoaXMuc2FtcGxpbmdSYXRlID0gdmFsdWUuc2FtcGxpbmdSYXRlO1xuICAgIHRoaXMubG9hZENhY2hlID0gdmFsdWUubG9hZENhY2hlO1xuICAgIHRoaXMuc2F2ZUNhY2hlID0gdmFsdWUuc2F2ZUNhY2hlO1xuICAgIHRoaXMuY2FjaGVTYXZlRGlyID0gdmFsdWUuY2FjaGVTYXZlRGlyO1xuICAgIENhY2hpbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lbW9yeUNhY2hlTWF4U2l6ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZW1vcnlDYWNoZU1heFNpemU7XG4gIH1cbiAgc2V0IG1lbW9yeUNhY2hlTWF4U2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVtb3J5Q2FjaGVNYXhTaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNhbXBsaW5nUmF0ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zYW1wbGluZ1JhdGU7XG4gIH1cbiAgc2V0IHNhbXBsaW5nUmF0ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2FtcGxpbmdSYXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvYWRDYWNoZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZENhY2hlO1xuICB9XG4gIHNldCBsb2FkQ2FjaGUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sb2FkQ2FjaGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2F2ZUNhY2hlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zYXZlQ2FjaGU7XG4gIH1cbiAgc2V0IHNhdmVDYWNoZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NhdmVDYWNoZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWNoZVNhdmVEaXIoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVTYXZlRGlyO1xuICB9XG4gIHNldCBjYWNoZVNhdmVEaXIodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NhY2hlU2F2ZURpciA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgICAgbWVtb3J5Q2FjaGVNYXhTaXplOiB0aGlzLm1lbW9yeUNhY2hlTWF4U2l6ZSxcbiAgICAgIHNhbXBsaW5nUmF0ZTogdGhpcy5zYW1wbGluZ1JhdGUsXG4gICAgICBsb2FkQ2FjaGU6IHRoaXMubG9hZENhY2hlLFxuICAgICAgc2F2ZUNhY2hlOiB0aGlzLnNhdmVDYWNoZSxcbiAgICAgIGNhY2hlU2F2ZURpcjogdGhpcy5jYWNoZVNhdmVEaXJcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENhY2hpbmcge31cbmV4cG9ydCBjbGFzcyBOb3JtYWxpemF0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IE5vcm1hbGl6YXRpb24pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTm9ybWFsaXphdGlvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBOb3JtYWxpemF0aW9uKCk7XG4gICAgTm9ybWFsaXphdGlvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTm9ybWFsaXphdGlvbikge1xuICAgIGluc3RhbmNlLmxhbmd1YWdlID0gaW5zdGFuY2UubGFuZ3VhZ2UgfHwgJyc7XG4gICAgaW5zdGFuY2UucGlwZWxpbmUgPSBpbnN0YW5jZS5waXBlbGluZSB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBOb3JtYWxpemF0aW9uLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubGFuZ3VhZ2UgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgKGluc3RhbmNlLnBpcGVsaW5lID0gaW5zdGFuY2UucGlwZWxpbmUgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTm9ybWFsaXphdGlvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBOb3JtYWxpemF0aW9uLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBpcGVsaW5lICYmIGluc3RhbmNlLnBpcGVsaW5lLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2UucGlwZWxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlPzogc3RyaW5nO1xuICBwcml2YXRlIF9waXBlbGluZT86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTm9ybWFsaXphdGlvbiB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE5vcm1hbGl6YXRpb24+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlID0gdmFsdWUubGFuZ3VhZ2U7XG4gICAgdGhpcy5waXBlbGluZSA9ICh2YWx1ZS5waXBlbGluZSB8fCBbXSkuc2xpY2UoKTtcbiAgICBOb3JtYWxpemF0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cbiAgc2V0IGxhbmd1YWdlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZSgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lO1xuICB9XG4gIHNldCBwaXBlbGluZSh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHBpcGVsaW5lOiAodGhpcy5waXBlbGluZSB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTm9ybWFsaXphdGlvbiB7fVxuZXhwb3J0IGNsYXNzIFBvc3Rwcm9jZXNzaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFBvc3Rwcm9jZXNzaW5nKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBvc3Rwcm9jZXNzaW5nLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBvc3Rwcm9jZXNzaW5nKCk7XG4gICAgUG9zdHByb2Nlc3NpbmcuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFBvc3Rwcm9jZXNzaW5nKSB7XG4gICAgaW5zdGFuY2Uuc2lsZW5jZVNlY3MgPSBpbnN0YW5jZS5zaWxlbmNlU2VjcyB8fCAwO1xuICAgIGluc3RhbmNlLnBpcGVsaW5lID0gaW5zdGFuY2UucGlwZWxpbmUgfHwgW107XG4gICAgaW5zdGFuY2UubG9nbW1zZSA9IGluc3RhbmNlLmxvZ21tc2UgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLndpZW5lciA9IGluc3RhbmNlLndpZW5lciB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuYXBvZGl6YXRpb24gPSBpbnN0YW5jZS5hcG9kaXphdGlvbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUG9zdHByb2Nlc3NpbmcsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5zaWxlbmNlU2VjcyA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChpbnN0YW5jZS5waXBlbGluZSA9IGluc3RhbmNlLnBpcGVsaW5lIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5sb2dtbXNlID0gbmV3IExvZ21uc2UoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UubG9nbW1zZSwgTG9nbW5zZS5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLndpZW5lciA9IG5ldyBXaWVuZXIoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2Uud2llbmVyLCBXaWVuZXIuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5hcG9kaXphdGlvbiA9IG5ldyBBcG9kaXphdGlvbigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmFwb2RpemF0aW9uLFxuICAgICAgICAgICAgQXBvZGl6YXRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBvc3Rwcm9jZXNzaW5nLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFBvc3Rwcm9jZXNzaW5nLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5zaWxlbmNlU2Vjcykge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoMSwgaW5zdGFuY2Uuc2lsZW5jZVNlY3MpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGlwZWxpbmUgJiYgaW5zdGFuY2UucGlwZWxpbmUubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBpbnN0YW5jZS5waXBlbGluZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sb2dtbXNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDMsIGluc3RhbmNlLmxvZ21tc2UgYXMgYW55LCBMb2dtbnNlLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLndpZW5lcikge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZSg0LCBpbnN0YW5jZS53aWVuZXIgYXMgYW55LCBXaWVuZXIudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYXBvZGl6YXRpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIGluc3RhbmNlLmFwb2RpemF0aW9uIGFzIGFueSxcbiAgICAgICAgQXBvZGl6YXRpb24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2lsZW5jZVNlY3M/OiBudW1iZXI7XG4gIHByaXZhdGUgX3BpcGVsaW5lPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2xvZ21tc2U/OiBMb2dtbnNlO1xuICBwcml2YXRlIF93aWVuZXI/OiBXaWVuZXI7XG4gIHByaXZhdGUgX2Fwb2RpemF0aW9uPzogQXBvZGl6YXRpb247XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBQb3N0cHJvY2Vzc2luZyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBvc3Rwcm9jZXNzaW5nPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zaWxlbmNlU2VjcyA9IHZhbHVlLnNpbGVuY2VTZWNzO1xuICAgIHRoaXMucGlwZWxpbmUgPSAodmFsdWUucGlwZWxpbmUgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5sb2dtbXNlID0gdmFsdWUubG9nbW1zZSA/IG5ldyBMb2dtbnNlKHZhbHVlLmxvZ21tc2UpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMud2llbmVyID0gdmFsdWUud2llbmVyID8gbmV3IFdpZW5lcih2YWx1ZS53aWVuZXIpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYXBvZGl6YXRpb24gPSB2YWx1ZS5hcG9kaXphdGlvblxuICAgICAgPyBuZXcgQXBvZGl6YXRpb24odmFsdWUuYXBvZGl6YXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBQb3N0cHJvY2Vzc2luZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNpbGVuY2VTZWNzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbGVuY2VTZWNzO1xuICB9XG4gIHNldCBzaWxlbmNlU2Vjcyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2lsZW5jZVNlY3MgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmUoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZTtcbiAgfVxuICBzZXQgcGlwZWxpbmUodmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9nbW1zZSgpOiBMb2dtbnNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nbW1zZTtcbiAgfVxuICBzZXQgbG9nbW1zZSh2YWx1ZTogTG9nbW5zZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xvZ21tc2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2llbmVyKCk6IFdpZW5lciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZW5lcjtcbiAgfVxuICBzZXQgd2llbmVyKHZhbHVlOiBXaWVuZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93aWVuZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYXBvZGl6YXRpb24oKTogQXBvZGl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hcG9kaXphdGlvbjtcbiAgfVxuICBzZXQgYXBvZGl6YXRpb24odmFsdWU6IEFwb2RpemF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXBvZGl6YXRpb24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2lsZW5jZVNlY3M6IHRoaXMuc2lsZW5jZVNlY3MsXG4gICAgICBwaXBlbGluZTogKHRoaXMucGlwZWxpbmUgfHwgW10pLnNsaWNlKCksXG4gICAgICBsb2dtbXNlOiB0aGlzLmxvZ21tc2UgPyB0aGlzLmxvZ21tc2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHdpZW5lcjogdGhpcy53aWVuZXIgPyB0aGlzLndpZW5lci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYXBvZGl6YXRpb246IHRoaXMuYXBvZGl6YXRpb24gPyB0aGlzLmFwb2RpemF0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBvc3Rwcm9jZXNzaW5nIHt9XG5leHBvcnQgY2xhc3MgTG9nbW5zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMb2dtbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExvZ21uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTG9nbW5zZSgpO1xuICAgIExvZ21uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExvZ21uc2UpIHtcbiAgICBpbnN0YW5jZS5pbml0aWFsTm9pc2UgPSBpbnN0YW5jZS5pbml0aWFsTm9pc2UgfHwgJzAnO1xuICAgIGluc3RhbmNlLndpbmRvd1NpemUgPSBpbnN0YW5jZS53aW5kb3dTaXplIHx8ICcwJztcbiAgICBpbnN0YW5jZS5ub2lzZVRocmVzaG9sZCA9IGluc3RhbmNlLm5vaXNlVGhyZXNob2xkIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTG9nbW5zZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmluaXRpYWxOb2lzZSA9IHJlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLndpbmRvd1NpemUgPSByZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5ub2lzZVRocmVzaG9sZCA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTG9nbW5zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMb2dtbnNlLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5pbml0aWFsTm9pc2UpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIGluc3RhbmNlLmluaXRpYWxOb2lzZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS53aW5kb3dTaXplKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBpbnN0YW5jZS53aW5kb3dTaXplKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5vaXNlVGhyZXNob2xkKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgzLCBpbnN0YW5jZS5ub2lzZVRocmVzaG9sZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbE5vaXNlPzogc3RyaW5nO1xuICBwcml2YXRlIF93aW5kb3dTaXplPzogc3RyaW5nO1xuICBwcml2YXRlIF9ub2lzZVRocmVzaG9sZD86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExvZ21uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMb2dtbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5pbml0aWFsTm9pc2UgPSB2YWx1ZS5pbml0aWFsTm9pc2U7XG4gICAgdGhpcy53aW5kb3dTaXplID0gdmFsdWUud2luZG93U2l6ZTtcbiAgICB0aGlzLm5vaXNlVGhyZXNob2xkID0gdmFsdWUubm9pc2VUaHJlc2hvbGQ7XG4gICAgTG9nbW5zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGluaXRpYWxOb2lzZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsTm9pc2U7XG4gIH1cbiAgc2V0IGluaXRpYWxOb2lzZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW5pdGlhbE5vaXNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdpbmRvd1NpemUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2luZG93U2l6ZTtcbiAgfVxuICBzZXQgd2luZG93U2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd2luZG93U2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub2lzZVRocmVzaG9sZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub2lzZVRocmVzaG9sZDtcbiAgfVxuICBzZXQgbm9pc2VUaHJlc2hvbGQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vaXNlVGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWxOb2lzZTogdGhpcy5pbml0aWFsTm9pc2UsXG4gICAgICB3aW5kb3dTaXplOiB0aGlzLndpbmRvd1NpemUsXG4gICAgICBub2lzZVRocmVzaG9sZDogdGhpcy5ub2lzZVRocmVzaG9sZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTG9nbW5zZSB7fVxuZXhwb3J0IGNsYXNzIFdpZW5lciBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBXaWVuZXIpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV2llbmVyLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFdpZW5lcigpO1xuICAgIFdpZW5lci5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogV2llbmVyKSB7XG4gICAgaW5zdGFuY2UuZnJhbWVMZW4gPSBpbnN0YW5jZS5mcmFtZUxlbiB8fCAnMCc7XG4gICAgaW5zdGFuY2UubHBjT3JkZXIgPSBpbnN0YW5jZS5scGNPcmRlciB8fCAnMCc7XG4gICAgaW5zdGFuY2UuaXRlcmF0aW9ucyA9IGluc3RhbmNlLml0ZXJhdGlvbnMgfHwgJzAnO1xuICAgIGluc3RhbmNlLmFscGhhID0gaW5zdGFuY2UuYWxwaGEgfHwgMDtcbiAgICBpbnN0YW5jZS50aHJlc2ggPSBpbnN0YW5jZS50aHJlc2ggfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBXaWVuZXIsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5mcmFtZUxlbiA9IHJlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmxwY09yZGVyID0gcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuaXRlcmF0aW9ucyA9IHJlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLmFscGhhID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UudGhyZXNoID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBXaWVuZXIucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogV2llbmVyLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5mcmFtZUxlbikge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMSwgaW5zdGFuY2UuZnJhbWVMZW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubHBjT3JkZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIGluc3RhbmNlLmxwY09yZGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLml0ZXJhdGlvbnMpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIGluc3RhbmNlLml0ZXJhdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWxwaGEpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDQsIGluc3RhbmNlLmFscGhhKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnRocmVzaCkge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoNSwgaW5zdGFuY2UudGhyZXNoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9mcmFtZUxlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfbHBjT3JkZXI/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2l0ZXJhdGlvbnM/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FscGhhPzogbnVtYmVyO1xuICBwcml2YXRlIF90aHJlc2g/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBXaWVuZXIgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxXaWVuZXI+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmZyYW1lTGVuID0gdmFsdWUuZnJhbWVMZW47XG4gICAgdGhpcy5scGNPcmRlciA9IHZhbHVlLmxwY09yZGVyO1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IHZhbHVlLml0ZXJhdGlvbnM7XG4gICAgdGhpcy5hbHBoYSA9IHZhbHVlLmFscGhhO1xuICAgIHRoaXMudGhyZXNoID0gdmFsdWUudGhyZXNoO1xuICAgIFdpZW5lci5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGZyYW1lTGVuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyYW1lTGVuO1xuICB9XG4gIHNldCBmcmFtZUxlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnJhbWVMZW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbHBjT3JkZXIoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbHBjT3JkZXI7XG4gIH1cbiAgc2V0IGxwY09yZGVyKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9scGNPcmRlciA9IHZhbHVlO1xuICB9XG4gIGdldCBpdGVyYXRpb25zKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZXJhdGlvbnM7XG4gIH1cbiAgc2V0IGl0ZXJhdGlvbnModmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2l0ZXJhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWxwaGEoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWxwaGE7XG4gIH1cbiAgc2V0IGFscGhhKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbHBoYSA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlc2goKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZXNoO1xuICB9XG4gIHNldCB0aHJlc2godmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RocmVzaCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBmcmFtZUxlbjogdGhpcy5mcmFtZUxlbixcbiAgICAgIGxwY09yZGVyOiB0aGlzLmxwY09yZGVyLFxuICAgICAgaXRlcmF0aW9uczogdGhpcy5pdGVyYXRpb25zLFxuICAgICAgYWxwaGE6IHRoaXMuYWxwaGEsXG4gICAgICB0aHJlc2g6IHRoaXMudGhyZXNoXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBXaWVuZXIge31cbmV4cG9ydCBjbGFzcyBBcG9kaXphdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBBcG9kaXphdGlvbikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBcG9kaXphdGlvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBcG9kaXphdGlvbigpO1xuICAgIEFwb2RpemF0aW9uLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBBcG9kaXphdGlvbikge1xuICAgIGluc3RhbmNlLmFwb2RpemF0aW9uU2VjcyA9IGluc3RhbmNlLmFwb2RpemF0aW9uU2VjcyB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEFwb2RpemF0aW9uLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuYXBvZGl6YXRpb25TZWNzID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBcG9kaXphdGlvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBBcG9kaXphdGlvbiwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuYXBvZGl6YXRpb25TZWNzKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgxLCBpbnN0YW5jZS5hcG9kaXphdGlvblNlY3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Fwb2RpemF0aW9uU2Vjcz86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEFwb2RpemF0aW9uIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QXBvZGl6YXRpb24+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFwb2RpemF0aW9uU2VjcyA9IHZhbHVlLmFwb2RpemF0aW9uU2VjcztcbiAgICBBcG9kaXphdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFwb2RpemF0aW9uU2VjcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hcG9kaXphdGlvblNlY3M7XG4gIH1cbiAgc2V0IGFwb2RpemF0aW9uU2Vjcyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXBvZGl6YXRpb25TZWNzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwb2RpemF0aW9uU2VjczogdGhpcy5hcG9kaXphdGlvblNlY3NcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFwb2RpemF0aW9uIHt9XG4iXX0=
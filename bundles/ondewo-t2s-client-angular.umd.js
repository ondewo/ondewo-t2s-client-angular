(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('google-protobuf'), require('@angular/core'), require('@ngx-grpc/common'), require('@ngx-grpc/core')) :
    typeof define === 'function' && define.amd ? define('@ondewo/t2s-client-angular', ['exports', 'google-protobuf', '@angular/core', '@ngx-grpc/common', '@ngx-grpc/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ondewo = global.ondewo || {}, global.ondewo['t2s-client-angular'] = {}), global.googleProtobuf, global.ng.core, global.common, global.i2));
}(this, (function (exports, googleProtobuf, i0, common, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    exports.AudioFormat = void 0;
    (function (AudioFormat) {
        AudioFormat[AudioFormat["wav"] = 0] = "wav";
        AudioFormat[AudioFormat["flac"] = 1] = "flac";
        AudioFormat[AudioFormat["caf"] = 2] = "caf";
        AudioFormat[AudioFormat["mp3"] = 3] = "mp3";
        AudioFormat[AudioFormat["aac"] = 4] = "aac";
        AudioFormat[AudioFormat["ogg"] = 5] = "ogg";
        AudioFormat[AudioFormat["wma"] = 6] = "wma";
    })(exports.AudioFormat || (exports.AudioFormat = {}));
    exports.SynthesizeRequest = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param SynthesizeRequest value
         */
        function SynthesizeRequest(value) {
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
        SynthesizeRequest.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            SynthesizeRequest.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        SynthesizeRequest.fromBinary = function (bytes) {
            var instance = new SynthesizeRequest();
            SynthesizeRequest.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        SynthesizeRequest.refineValues = function (instance) {
            instance.t2sPipelineId = instance.t2sPipelineId || '';
            instance.text = instance.text || '';
            instance.lengthScale = instance.lengthScale || 0;
            instance.noiseScale = instance.noiseScale || 0;
            instance.sampleRate = instance.sampleRate || 0;
            instance.pcm = instance.pcm || 0;
            instance.audioFormat = instance.audioFormat || 0;
        };
        SynthesizeRequest.fromBinaryReader = function (instance, reader) {
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
        };
        SynthesizeRequest.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(SynthesizeRequest.prototype, "t2sPipelineId", {
            get: function () {
                return this._t2sPipelineId;
            },
            set: function (value) {
                this._t2sPipelineId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeRequest.prototype, "text", {
            get: function () {
                return this._text;
            },
            set: function (value) {
                this._text = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeRequest.prototype, "lengthScale", {
            get: function () {
                return this._lengthScale;
            },
            set: function (value) {
                this._lengthScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeRequest.prototype, "noiseScale", {
            get: function () {
                return this._noiseScale;
            },
            set: function (value) {
                this._noiseScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeRequest.prototype, "sampleRate", {
            get: function () {
                return this._sampleRate;
            },
            set: function (value) {
                this._sampleRate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeRequest.prototype, "pcm", {
            get: function () {
                return this._pcm;
            },
            set: function (value) {
                this._pcm = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeRequest.prototype, "audioFormat", {
            get: function () {
                return this._audioFormat;
            },
            set: function (value) {
                this._audioFormat = value;
            },
            enumerable: false,
            configurable: true
        });
        SynthesizeRequest.prototype.toObject = function () {
            return {
                t2sPipelineId: this.t2sPipelineId,
                text: this.text,
                lengthScale: this.lengthScale,
                noiseScale: this.noiseScale,
                sampleRate: this.sampleRate,
                pcm: this.pcm,
                audioFormat: this.audioFormat
            };
        };
        SynthesizeRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        return SynthesizeRequest;
    }());
    (function (SynthesizeRequest) {
        var Pcm;
        (function (Pcm) {
            Pcm[Pcm["pcm16"] = 0] = "pcm16";
            Pcm[Pcm["pcm24"] = 1] = "pcm24";
            Pcm[Pcm["pcm32"] = 2] = "pcm32";
            Pcm[Pcm["pcmS8"] = 3] = "pcmS8";
            Pcm[Pcm["pcmU8"] = 4] = "pcmU8";
            Pcm[Pcm["float"] = 5] = "float";
            Pcm[Pcm["double"] = 6] = "double";
        })(Pcm = SynthesizeRequest.Pcm || (SynthesizeRequest.Pcm = {}));
    })(exports.SynthesizeRequest || (exports.SynthesizeRequest = {}));
    var SynthesizeResponse = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param SynthesizeResponse value
         */
        function SynthesizeResponse(value) {
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
        SynthesizeResponse.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            SynthesizeResponse.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        SynthesizeResponse.fromBinary = function (bytes) {
            var instance = new SynthesizeResponse();
            SynthesizeResponse.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        SynthesizeResponse.refineValues = function (instance) {
            instance.audio = instance.audio || new Uint8Array();
            instance.generationTime = instance.generationTime || 0;
            instance.audioLength = instance.audioLength || 0;
            instance.t2sPipelineId = instance.t2sPipelineId || '';
            instance.audioFormat = instance.audioFormat || 0;
            instance.text = instance.text || '';
            instance.sampleRate = instance.sampleRate || 0;
        };
        SynthesizeResponse.fromBinaryReader = function (instance, reader) {
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
        };
        SynthesizeResponse.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(SynthesizeResponse.prototype, "audio", {
            get: function () {
                return this._audio;
            },
            set: function (value) {
                this._audio = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeResponse.prototype, "generationTime", {
            get: function () {
                return this._generationTime;
            },
            set: function (value) {
                this._generationTime = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeResponse.prototype, "audioLength", {
            get: function () {
                return this._audioLength;
            },
            set: function (value) {
                this._audioLength = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeResponse.prototype, "t2sPipelineId", {
            get: function () {
                return this._t2sPipelineId;
            },
            set: function (value) {
                this._t2sPipelineId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeResponse.prototype, "audioFormat", {
            get: function () {
                return this._audioFormat;
            },
            set: function (value) {
                this._audioFormat = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeResponse.prototype, "text", {
            get: function () {
                return this._text;
            },
            set: function (value) {
                this._text = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SynthesizeResponse.prototype, "sampleRate", {
            get: function () {
                return this._sampleRate;
            },
            set: function (value) {
                this._sampleRate = value;
            },
            enumerable: false,
            configurable: true
        });
        SynthesizeResponse.prototype.toObject = function () {
            return {
                audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
                generationTime: this.generationTime,
                audioLength: this.audioLength,
                t2sPipelineId: this.t2sPipelineId,
                audioFormat: this.audioFormat,
                text: this.text,
                sampleRate: this.sampleRate
            };
        };
        SynthesizeResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        return SynthesizeResponse;
    }());
    var ListT2sPipelinesRequest = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param ListT2sPipelinesRequest value
         */
        function ListT2sPipelinesRequest(value) {
            value = value || {};
            this.languages = (value.languages || []).slice();
            this.speakerSexes = (value.speakerSexes || []).slice();
            this.pipelineOwners = (value.pipelineOwners || []).slice();
            this.speakerNames = (value.speakerNames || []).slice();
            this.domains = (value.domains || []).slice();
            ListT2sPipelinesRequest.refineValues(this);
        }
        ListT2sPipelinesRequest.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            ListT2sPipelinesRequest.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        ListT2sPipelinesRequest.fromBinary = function (bytes) {
            var instance = new ListT2sPipelinesRequest();
            ListT2sPipelinesRequest.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        ListT2sPipelinesRequest.refineValues = function (instance) {
            instance.languages = instance.languages || [];
            instance.speakerSexes = instance.speakerSexes || [];
            instance.pipelineOwners = instance.pipelineOwners || [];
            instance.speakerNames = instance.speakerNames || [];
            instance.domains = instance.domains || [];
        };
        ListT2sPipelinesRequest.fromBinaryReader = function (instance, reader) {
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
        };
        ListT2sPipelinesRequest.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(ListT2sPipelinesRequest.prototype, "languages", {
            get: function () {
                return this._languages;
            },
            set: function (value) {
                this._languages = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sPipelinesRequest.prototype, "speakerSexes", {
            get: function () {
                return this._speakerSexes;
            },
            set: function (value) {
                this._speakerSexes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sPipelinesRequest.prototype, "pipelineOwners", {
            get: function () {
                return this._pipelineOwners;
            },
            set: function (value) {
                this._pipelineOwners = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sPipelinesRequest.prototype, "speakerNames", {
            get: function () {
                return this._speakerNames;
            },
            set: function (value) {
                this._speakerNames = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sPipelinesRequest.prototype, "domains", {
            get: function () {
                return this._domains;
            },
            set: function (value) {
                this._domains = value;
            },
            enumerable: false,
            configurable: true
        });
        ListT2sPipelinesRequest.prototype.toObject = function () {
            return {
                languages: (this.languages || []).slice(),
                speakerSexes: (this.speakerSexes || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                speakerNames: (this.speakerNames || []).slice(),
                domains: (this.domains || []).slice()
            };
        };
        ListT2sPipelinesRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        return ListT2sPipelinesRequest;
    }());
    var ListT2sPipelinesResponse = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param ListT2sPipelinesResponse value
         */
        function ListT2sPipelinesResponse(value) {
            value = value || {};
            this.pipelines = (value.pipelines || []).map(function (m) { return new Text2SpeechConfig(m); });
            ListT2sPipelinesResponse.refineValues(this);
        }
        ListT2sPipelinesResponse.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            ListT2sPipelinesResponse.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        ListT2sPipelinesResponse.fromBinary = function (bytes) {
            var instance = new ListT2sPipelinesResponse();
            ListT2sPipelinesResponse.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        ListT2sPipelinesResponse.refineValues = function (instance) {
            instance.pipelines = instance.pipelines || [];
        };
        ListT2sPipelinesResponse.fromBinaryReader = function (instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new Text2SpeechConfig();
                        reader.readMessage(messageInitializer1, Text2SpeechConfig.fromBinaryReader);
                        (instance.pipelines = instance.pipelines || []).push(messageInitializer1);
                        break;
                    default:
                        reader.skipField();
                }
            }
            ListT2sPipelinesResponse.refineValues(instance);
        };
        ListT2sPipelinesResponse.toBinaryWriter = function (instance, writer) {
            if (instance.pipelines && instance.pipelines.length) {
                writer.writeRepeatedMessage(1, instance.pipelines, Text2SpeechConfig.toBinaryWriter);
            }
        };
        Object.defineProperty(ListT2sPipelinesResponse.prototype, "pipelines", {
            get: function () {
                return this._pipelines;
            },
            set: function (value) {
                this._pipelines = value;
            },
            enumerable: false,
            configurable: true
        });
        ListT2sPipelinesResponse.prototype.toObject = function () {
            return {
                pipelines: (this.pipelines || []).map(function (m) { return m.toObject(); })
            };
        };
        ListT2sPipelinesResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        return ListT2sPipelinesResponse;
    }());
    var T2sPipelineId = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param T2sPipelineId value
         */
        function T2sPipelineId(value) {
            value = value || {};
            this.id = value.id;
            T2sPipelineId.refineValues(this);
        }
        T2sPipelineId.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            T2sPipelineId.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        T2sPipelineId.fromBinary = function (bytes) {
            var instance = new T2sPipelineId();
            T2sPipelineId.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        T2sPipelineId.refineValues = function (instance) {
            instance.id = instance.id || '';
        };
        T2sPipelineId.fromBinaryReader = function (instance, reader) {
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
        };
        T2sPipelineId.toBinaryWriter = function (instance, writer) {
            if (instance.id) {
                writer.writeString(1, instance.id);
            }
        };
        Object.defineProperty(T2sPipelineId.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        T2sPipelineId.prototype.toObject = function () {
            return {
                id: this.id
            };
        };
        T2sPipelineId.prototype.toJSON = function () {
            return this.toObject();
        };
        return T2sPipelineId;
    }());
    var Text2SpeechConfig = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Text2SpeechConfig value
         */
        function Text2SpeechConfig(value) {
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
        Text2SpeechConfig.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Text2SpeechConfig.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Text2SpeechConfig.fromBinary = function (bytes) {
            var instance = new Text2SpeechConfig();
            Text2SpeechConfig.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Text2SpeechConfig.refineValues = function (instance) {
            instance.id = instance.id || '';
            instance.description = instance.description || undefined;
            instance.active = instance.active || false;
            instance.inference = instance.inference || undefined;
            instance.normalization = instance.normalization || undefined;
            instance.postprocessing = instance.postprocessing || undefined;
        };
        Text2SpeechConfig.fromBinaryReader = function (instance, reader) {
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
        };
        Text2SpeechConfig.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(Text2SpeechConfig.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text2SpeechConfig.prototype, "description", {
            get: function () {
                return this._description;
            },
            set: function (value) {
                this._description = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text2SpeechConfig.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (value) {
                this._active = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text2SpeechConfig.prototype, "inference", {
            get: function () {
                return this._inference;
            },
            set: function (value) {
                this._inference = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text2SpeechConfig.prototype, "normalization", {
            get: function () {
                return this._normalization;
            },
            set: function (value) {
                this._normalization = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text2SpeechConfig.prototype, "postprocessing", {
            get: function () {
                return this._postprocessing;
            },
            set: function (value) {
                this._postprocessing = value;
            },
            enumerable: false,
            configurable: true
        });
        Text2SpeechConfig.prototype.toObject = function () {
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
        };
        Text2SpeechConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        return Text2SpeechConfig;
    }());
    var Description = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Description value
         */
        function Description(value) {
            value = value || {};
            this.language = value.language;
            this.speakerSex = value.speakerSex;
            this.pipelineOwner = value.pipelineOwner;
            this.comments = value.comments;
            this.speakerName = value.speakerName;
            this.domain = value.domain;
            Description.refineValues(this);
        }
        Description.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Description.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Description.fromBinary = function (bytes) {
            var instance = new Description();
            Description.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Description.refineValues = function (instance) {
            instance.language = instance.language || '';
            instance.speakerSex = instance.speakerSex || '';
            instance.pipelineOwner = instance.pipelineOwner || '';
            instance.comments = instance.comments || '';
            instance.speakerName = instance.speakerName || '';
            instance.domain = instance.domain || '';
        };
        Description.fromBinaryReader = function (instance, reader) {
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
        };
        Description.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(Description.prototype, "language", {
            get: function () {
                return this._language;
            },
            set: function (value) {
                this._language = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Description.prototype, "speakerSex", {
            get: function () {
                return this._speakerSex;
            },
            set: function (value) {
                this._speakerSex = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Description.prototype, "pipelineOwner", {
            get: function () {
                return this._pipelineOwner;
            },
            set: function (value) {
                this._pipelineOwner = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Description.prototype, "comments", {
            get: function () {
                return this._comments;
            },
            set: function (value) {
                this._comments = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Description.prototype, "speakerName", {
            get: function () {
                return this._speakerName;
            },
            set: function (value) {
                this._speakerName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Description.prototype, "domain", {
            get: function () {
                return this._domain;
            },
            set: function (value) {
                this._domain = value;
            },
            enumerable: false,
            configurable: true
        });
        Description.prototype.toObject = function () {
            return {
                language: this.language,
                speakerSex: this.speakerSex,
                pipelineOwner: this.pipelineOwner,
                comments: this.comments,
                speakerName: this.speakerName,
                domain: this.domain
            };
        };
        Description.prototype.toJSON = function () {
            return this.toObject();
        };
        return Description;
    }());
    var Inference = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Inference value
         */
        function Inference(value) {
            value = value || {};
            this.type = value.type;
            this.compositeInference = value.compositeInference
                ? new CompositeInference(value.compositeInference)
                : undefined;
            this.caching = value.caching ? new Caching(value.caching) : undefined;
            Inference.refineValues(this);
        }
        Inference.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Inference.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Inference.fromBinary = function (bytes) {
            var instance = new Inference();
            Inference.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Inference.refineValues = function (instance) {
            instance.type = instance.type || '';
            instance.compositeInference = instance.compositeInference || undefined;
            instance.caching = instance.caching || undefined;
        };
        Inference.fromBinaryReader = function (instance, reader) {
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
        };
        Inference.toBinaryWriter = function (instance, writer) {
            if (instance.type) {
                writer.writeString(1, instance.type);
            }
            if (instance.compositeInference) {
                writer.writeMessage(2, instance.compositeInference, CompositeInference.toBinaryWriter);
            }
            if (instance.caching) {
                writer.writeMessage(3, instance.caching, Caching.toBinaryWriter);
            }
        };
        Object.defineProperty(Inference.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Inference.prototype, "compositeInference", {
            get: function () {
                return this._compositeInference;
            },
            set: function (value) {
                this._compositeInference = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Inference.prototype, "caching", {
            get: function () {
                return this._caching;
            },
            set: function (value) {
                this._caching = value;
            },
            enumerable: false,
            configurable: true
        });
        Inference.prototype.toObject = function () {
            return {
                type: this.type,
                compositeInference: this.compositeInference
                    ? this.compositeInference.toObject()
                    : undefined,
                caching: this.caching ? this.caching.toObject() : undefined
            };
        };
        Inference.prototype.toJSON = function () {
            return this.toObject();
        };
        return Inference;
    }());
    var CompositeInference = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param CompositeInference value
         */
        function CompositeInference(value) {
            value = value || {};
            this.text2mel = value.text2mel ? new Text2Mel(value.text2mel) : undefined;
            this.mel2audio = value.mel2audio
                ? new Mel2Audio(value.mel2audio)
                : undefined;
            CompositeInference.refineValues(this);
        }
        CompositeInference.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            CompositeInference.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        CompositeInference.fromBinary = function (bytes) {
            var instance = new CompositeInference();
            CompositeInference.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        CompositeInference.refineValues = function (instance) {
            instance.text2mel = instance.text2mel || undefined;
            instance.mel2audio = instance.mel2audio || undefined;
        };
        CompositeInference.fromBinaryReader = function (instance, reader) {
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
        };
        CompositeInference.toBinaryWriter = function (instance, writer) {
            if (instance.text2mel) {
                writer.writeMessage(1, instance.text2mel, Text2Mel.toBinaryWriter);
            }
            if (instance.mel2audio) {
                writer.writeMessage(2, instance.mel2audio, Mel2Audio.toBinaryWriter);
            }
        };
        Object.defineProperty(CompositeInference.prototype, "text2mel", {
            get: function () {
                return this._text2mel;
            },
            set: function (value) {
                this._text2mel = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CompositeInference.prototype, "mel2audio", {
            get: function () {
                return this._mel2audio;
            },
            set: function (value) {
                this._mel2audio = value;
            },
            enumerable: false,
            configurable: true
        });
        CompositeInference.prototype.toObject = function () {
            return {
                text2mel: this.text2mel ? this.text2mel.toObject() : undefined,
                mel2audio: this.mel2audio ? this.mel2audio.toObject() : undefined
            };
        };
        CompositeInference.prototype.toJSON = function () {
            return this.toObject();
        };
        return CompositeInference;
    }());
    var Text2Mel = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Text2Mel value
         */
        function Text2Mel(value) {
            value = value || {};
            this.type = value.type;
            this.glowTts = value.glowTts ? new GlowTTS(value.glowTts) : undefined;
            this.glowTtsTriton = value.glowTtsTriton
                ? new GlowTTSTriton(value.glowTtsTriton)
                : undefined;
            Text2Mel.refineValues(this);
        }
        Text2Mel.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Text2Mel.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Text2Mel.fromBinary = function (bytes) {
            var instance = new Text2Mel();
            Text2Mel.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Text2Mel.refineValues = function (instance) {
            instance.type = instance.type || '';
            instance.glowTts = instance.glowTts || undefined;
            instance.glowTtsTriton = instance.glowTtsTriton || undefined;
        };
        Text2Mel.fromBinaryReader = function (instance, reader) {
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
        };
        Text2Mel.toBinaryWriter = function (instance, writer) {
            if (instance.type) {
                writer.writeString(1, instance.type);
            }
            if (instance.glowTts) {
                writer.writeMessage(3, instance.glowTts, GlowTTS.toBinaryWriter);
            }
            if (instance.glowTtsTriton) {
                writer.writeMessage(4, instance.glowTtsTriton, GlowTTSTriton.toBinaryWriter);
            }
        };
        Object.defineProperty(Text2Mel.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text2Mel.prototype, "glowTts", {
            get: function () {
                return this._glowTts;
            },
            set: function (value) {
                this._glowTts = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Text2Mel.prototype, "glowTtsTriton", {
            get: function () {
                return this._glowTtsTriton;
            },
            set: function (value) {
                this._glowTtsTriton = value;
            },
            enumerable: false,
            configurable: true
        });
        Text2Mel.prototype.toObject = function () {
            return {
                type: this.type,
                glowTts: this.glowTts ? this.glowTts.toObject() : undefined,
                glowTtsTriton: this.glowTtsTriton
                    ? this.glowTtsTriton.toObject()
                    : undefined
            };
        };
        Text2Mel.prototype.toJSON = function () {
            return this.toObject();
        };
        return Text2Mel;
    }());
    var GlowTTS = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param GlowTTS value
         */
        function GlowTTS(value) {
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
        GlowTTS.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            GlowTTS.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        GlowTTS.fromBinary = function (bytes) {
            var instance = new GlowTTS();
            GlowTTS.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        GlowTTS.refineValues = function (instance) {
            instance.batchSize = instance.batchSize || '0';
            instance.useGpu = instance.useGpu || false;
            instance.lengthScale = instance.lengthScale || 0;
            instance.noiseScale = instance.noiseScale || 0;
            instance.path = instance.path || '';
            instance.cleaners = instance.cleaners || [];
            instance.paramConfigPath = instance.paramConfigPath || '';
        };
        GlowTTS.fromBinaryReader = function (instance, reader) {
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
        };
        GlowTTS.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(GlowTTS.prototype, "batchSize", {
            get: function () {
                return this._batchSize;
            },
            set: function (value) {
                this._batchSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTS.prototype, "useGpu", {
            get: function () {
                return this._useGpu;
            },
            set: function (value) {
                this._useGpu = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTS.prototype, "lengthScale", {
            get: function () {
                return this._lengthScale;
            },
            set: function (value) {
                this._lengthScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTS.prototype, "noiseScale", {
            get: function () {
                return this._noiseScale;
            },
            set: function (value) {
                this._noiseScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTS.prototype, "path", {
            get: function () {
                return this._path;
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTS.prototype, "cleaners", {
            get: function () {
                return this._cleaners;
            },
            set: function (value) {
                this._cleaners = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTS.prototype, "paramConfigPath", {
            get: function () {
                return this._paramConfigPath;
            },
            set: function (value) {
                this._paramConfigPath = value;
            },
            enumerable: false,
            configurable: true
        });
        GlowTTS.prototype.toObject = function () {
            return {
                batchSize: this.batchSize,
                useGpu: this.useGpu,
                lengthScale: this.lengthScale,
                noiseScale: this.noiseScale,
                path: this.path,
                cleaners: (this.cleaners || []).slice(),
                paramConfigPath: this.paramConfigPath
            };
        };
        GlowTTS.prototype.toJSON = function () {
            return this.toObject();
        };
        return GlowTTS;
    }());
    var GlowTTSTriton = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param GlowTTSTriton value
         */
        function GlowTTSTriton(value) {
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
        GlowTTSTriton.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            GlowTTSTriton.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        GlowTTSTriton.fromBinary = function (bytes) {
            var instance = new GlowTTSTriton();
            GlowTTSTriton.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        GlowTTSTriton.refineValues = function (instance) {
            instance.batchSize = instance.batchSize || '0';
            instance.lengthScale = instance.lengthScale || 0;
            instance.noiseScale = instance.noiseScale || 0;
            instance.cleaners = instance.cleaners || [];
            instance.maxTextLength = instance.maxTextLength || '0';
            instance.paramConfigPath = instance.paramConfigPath || '';
            instance.tritonUrl = instance.tritonUrl || '';
            instance.tritonModelName = instance.tritonModelName || '';
        };
        GlowTTSTriton.fromBinaryReader = function (instance, reader) {
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
        };
        GlowTTSTriton.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(GlowTTSTriton.prototype, "batchSize", {
            get: function () {
                return this._batchSize;
            },
            set: function (value) {
                this._batchSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTSTriton.prototype, "lengthScale", {
            get: function () {
                return this._lengthScale;
            },
            set: function (value) {
                this._lengthScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTSTriton.prototype, "noiseScale", {
            get: function () {
                return this._noiseScale;
            },
            set: function (value) {
                this._noiseScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTSTriton.prototype, "cleaners", {
            get: function () {
                return this._cleaners;
            },
            set: function (value) {
                this._cleaners = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTSTriton.prototype, "maxTextLength", {
            get: function () {
                return this._maxTextLength;
            },
            set: function (value) {
                this._maxTextLength = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTSTriton.prototype, "paramConfigPath", {
            get: function () {
                return this._paramConfigPath;
            },
            set: function (value) {
                this._paramConfigPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTSTriton.prototype, "tritonUrl", {
            get: function () {
                return this._tritonUrl;
            },
            set: function (value) {
                this._tritonUrl = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GlowTTSTriton.prototype, "tritonModelName", {
            get: function () {
                return this._tritonModelName;
            },
            set: function (value) {
                this._tritonModelName = value;
            },
            enumerable: false,
            configurable: true
        });
        GlowTTSTriton.prototype.toObject = function () {
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
        };
        GlowTTSTriton.prototype.toJSON = function () {
            return this.toObject();
        };
        return GlowTTSTriton;
    }());
    var Mel2Audio = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Mel2Audio value
         */
        function Mel2Audio(value) {
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
        Mel2Audio.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Mel2Audio.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Mel2Audio.fromBinary = function (bytes) {
            var instance = new Mel2Audio();
            Mel2Audio.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Mel2Audio.refineValues = function (instance) {
            instance.type = instance.type || '';
            instance.mbMelganTriton = instance.mbMelganTriton || undefined;
            instance.hifiGan = instance.hifiGan || undefined;
            instance.hifiGanTriton = instance.hifiGanTriton || undefined;
        };
        Mel2Audio.fromBinaryReader = function (instance, reader) {
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
        };
        Mel2Audio.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(Mel2Audio.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Mel2Audio.prototype, "mbMelganTriton", {
            get: function () {
                return this._mbMelganTriton;
            },
            set: function (value) {
                this._mbMelganTriton = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Mel2Audio.prototype, "hifiGan", {
            get: function () {
                return this._hifiGan;
            },
            set: function (value) {
                this._hifiGan = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Mel2Audio.prototype, "hifiGanTriton", {
            get: function () {
                return this._hifiGanTriton;
            },
            set: function (value) {
                this._hifiGanTriton = value;
            },
            enumerable: false,
            configurable: true
        });
        Mel2Audio.prototype.toObject = function () {
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
        };
        Mel2Audio.prototype.toJSON = function () {
            return this.toObject();
        };
        return Mel2Audio;
    }());
    var HiFiGan = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param HiFiGan value
         */
        function HiFiGan(value) {
            value = value || {};
            this.useGpu = value.useGpu;
            this.batchSize = value.batchSize;
            this.configPath = value.configPath;
            this.modelPath = value.modelPath;
            HiFiGan.refineValues(this);
        }
        HiFiGan.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            HiFiGan.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        HiFiGan.fromBinary = function (bytes) {
            var instance = new HiFiGan();
            HiFiGan.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        HiFiGan.refineValues = function (instance) {
            instance.useGpu = instance.useGpu || false;
            instance.batchSize = instance.batchSize || '0';
            instance.configPath = instance.configPath || '';
            instance.modelPath = instance.modelPath || '';
        };
        HiFiGan.fromBinaryReader = function (instance, reader) {
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
        };
        HiFiGan.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(HiFiGan.prototype, "useGpu", {
            get: function () {
                return this._useGpu;
            },
            set: function (value) {
                this._useGpu = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HiFiGan.prototype, "batchSize", {
            get: function () {
                return this._batchSize;
            },
            set: function (value) {
                this._batchSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HiFiGan.prototype, "configPath", {
            get: function () {
                return this._configPath;
            },
            set: function (value) {
                this._configPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HiFiGan.prototype, "modelPath", {
            get: function () {
                return this._modelPath;
            },
            set: function (value) {
                this._modelPath = value;
            },
            enumerable: false,
            configurable: true
        });
        HiFiGan.prototype.toObject = function () {
            return {
                useGpu: this.useGpu,
                batchSize: this.batchSize,
                configPath: this.configPath,
                modelPath: this.modelPath
            };
        };
        HiFiGan.prototype.toJSON = function () {
            return this.toObject();
        };
        return HiFiGan;
    }());
    var HiFiGanTriton = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param HiFiGanTriton value
         */
        function HiFiGanTriton(value) {
            value = value || {};
            this.configPath = value.configPath;
            this.tritonModelName = value.tritonModelName;
            this.tritonUrl = value.tritonUrl;
            HiFiGanTriton.refineValues(this);
        }
        HiFiGanTriton.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            HiFiGanTriton.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        HiFiGanTriton.fromBinary = function (bytes) {
            var instance = new HiFiGanTriton();
            HiFiGanTriton.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        HiFiGanTriton.refineValues = function (instance) {
            instance.configPath = instance.configPath || '';
            instance.tritonModelName = instance.tritonModelName || '';
            instance.tritonUrl = instance.tritonUrl || '';
        };
        HiFiGanTriton.fromBinaryReader = function (instance, reader) {
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
        };
        HiFiGanTriton.toBinaryWriter = function (instance, writer) {
            if (instance.configPath) {
                writer.writeString(1, instance.configPath);
            }
            if (instance.tritonModelName) {
                writer.writeString(2, instance.tritonModelName);
            }
            if (instance.tritonUrl) {
                writer.writeString(3, instance.tritonUrl);
            }
        };
        Object.defineProperty(HiFiGanTriton.prototype, "configPath", {
            get: function () {
                return this._configPath;
            },
            set: function (value) {
                this._configPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HiFiGanTriton.prototype, "tritonModelName", {
            get: function () {
                return this._tritonModelName;
            },
            set: function (value) {
                this._tritonModelName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HiFiGanTriton.prototype, "tritonUrl", {
            get: function () {
                return this._tritonUrl;
            },
            set: function (value) {
                this._tritonUrl = value;
            },
            enumerable: false,
            configurable: true
        });
        HiFiGanTriton.prototype.toObject = function () {
            return {
                configPath: this.configPath,
                tritonModelName: this.tritonModelName,
                tritonUrl: this.tritonUrl
            };
        };
        HiFiGanTriton.prototype.toJSON = function () {
            return this.toObject();
        };
        return HiFiGanTriton;
    }());
    var MbMelganTriton = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param MbMelganTriton value
         */
        function MbMelganTriton(value) {
            value = value || {};
            this.configPath = value.configPath;
            this.statsPath = value.statsPath;
            this.tritonModelName = value.tritonModelName;
            this.tritonUrl = value.tritonUrl;
            MbMelganTriton.refineValues(this);
        }
        MbMelganTriton.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            MbMelganTriton.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        MbMelganTriton.fromBinary = function (bytes) {
            var instance = new MbMelganTriton();
            MbMelganTriton.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        MbMelganTriton.refineValues = function (instance) {
            instance.configPath = instance.configPath || '';
            instance.statsPath = instance.statsPath || '';
            instance.tritonModelName = instance.tritonModelName || '';
            instance.tritonUrl = instance.tritonUrl || '';
        };
        MbMelganTriton.fromBinaryReader = function (instance, reader) {
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
        };
        MbMelganTriton.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(MbMelganTriton.prototype, "configPath", {
            get: function () {
                return this._configPath;
            },
            set: function (value) {
                this._configPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MbMelganTriton.prototype, "statsPath", {
            get: function () {
                return this._statsPath;
            },
            set: function (value) {
                this._statsPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MbMelganTriton.prototype, "tritonModelName", {
            get: function () {
                return this._tritonModelName;
            },
            set: function (value) {
                this._tritonModelName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MbMelganTriton.prototype, "tritonUrl", {
            get: function () {
                return this._tritonUrl;
            },
            set: function (value) {
                this._tritonUrl = value;
            },
            enumerable: false,
            configurable: true
        });
        MbMelganTriton.prototype.toObject = function () {
            return {
                configPath: this.configPath,
                statsPath: this.statsPath,
                tritonModelName: this.tritonModelName,
                tritonUrl: this.tritonUrl
            };
        };
        MbMelganTriton.prototype.toJSON = function () {
            return this.toObject();
        };
        return MbMelganTriton;
    }());
    var Caching = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Caching value
         */
        function Caching(value) {
            value = value || {};
            this.active = value.active;
            this.memoryCacheMaxSize = value.memoryCacheMaxSize;
            this.samplingRate = value.samplingRate;
            this.loadCache = value.loadCache;
            this.saveCache = value.saveCache;
            this.cacheSaveDir = value.cacheSaveDir;
            Caching.refineValues(this);
        }
        Caching.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Caching.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Caching.fromBinary = function (bytes) {
            var instance = new Caching();
            Caching.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Caching.refineValues = function (instance) {
            instance.active = instance.active || false;
            instance.memoryCacheMaxSize = instance.memoryCacheMaxSize || '0';
            instance.samplingRate = instance.samplingRate || '0';
            instance.loadCache = instance.loadCache || false;
            instance.saveCache = instance.saveCache || false;
            instance.cacheSaveDir = instance.cacheSaveDir || '';
        };
        Caching.fromBinaryReader = function (instance, reader) {
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
        };
        Caching.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(Caching.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (value) {
                this._active = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Caching.prototype, "memoryCacheMaxSize", {
            get: function () {
                return this._memoryCacheMaxSize;
            },
            set: function (value) {
                this._memoryCacheMaxSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Caching.prototype, "samplingRate", {
            get: function () {
                return this._samplingRate;
            },
            set: function (value) {
                this._samplingRate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Caching.prototype, "loadCache", {
            get: function () {
                return this._loadCache;
            },
            set: function (value) {
                this._loadCache = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Caching.prototype, "saveCache", {
            get: function () {
                return this._saveCache;
            },
            set: function (value) {
                this._saveCache = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Caching.prototype, "cacheSaveDir", {
            get: function () {
                return this._cacheSaveDir;
            },
            set: function (value) {
                this._cacheSaveDir = value;
            },
            enumerable: false,
            configurable: true
        });
        Caching.prototype.toObject = function () {
            return {
                active: this.active,
                memoryCacheMaxSize: this.memoryCacheMaxSize,
                samplingRate: this.samplingRate,
                loadCache: this.loadCache,
                saveCache: this.saveCache,
                cacheSaveDir: this.cacheSaveDir
            };
        };
        Caching.prototype.toJSON = function () {
            return this.toObject();
        };
        return Caching;
    }());
    var Normalization = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Normalization value
         */
        function Normalization(value) {
            value = value || {};
            this.language = value.language;
            this.pipeline = (value.pipeline || []).slice();
            Normalization.refineValues(this);
        }
        Normalization.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Normalization.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Normalization.fromBinary = function (bytes) {
            var instance = new Normalization();
            Normalization.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Normalization.refineValues = function (instance) {
            instance.language = instance.language || '';
            instance.pipeline = instance.pipeline || [];
        };
        Normalization.fromBinaryReader = function (instance, reader) {
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
        };
        Normalization.toBinaryWriter = function (instance, writer) {
            if (instance.language) {
                writer.writeString(1, instance.language);
            }
            if (instance.pipeline && instance.pipeline.length) {
                writer.writeRepeatedString(2, instance.pipeline);
            }
        };
        Object.defineProperty(Normalization.prototype, "language", {
            get: function () {
                return this._language;
            },
            set: function (value) {
                this._language = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Normalization.prototype, "pipeline", {
            get: function () {
                return this._pipeline;
            },
            set: function (value) {
                this._pipeline = value;
            },
            enumerable: false,
            configurable: true
        });
        Normalization.prototype.toObject = function () {
            return {
                language: this.language,
                pipeline: (this.pipeline || []).slice()
            };
        };
        Normalization.prototype.toJSON = function () {
            return this.toObject();
        };
        return Normalization;
    }());
    var Postprocessing = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Postprocessing value
         */
        function Postprocessing(value) {
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
        Postprocessing.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Postprocessing.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Postprocessing.fromBinary = function (bytes) {
            var instance = new Postprocessing();
            Postprocessing.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Postprocessing.refineValues = function (instance) {
            instance.silenceSecs = instance.silenceSecs || 0;
            instance.pipeline = instance.pipeline || [];
            instance.logmmse = instance.logmmse || undefined;
            instance.wiener = instance.wiener || undefined;
            instance.apodization = instance.apodization || undefined;
        };
        Postprocessing.fromBinaryReader = function (instance, reader) {
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
        };
        Postprocessing.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(Postprocessing.prototype, "silenceSecs", {
            get: function () {
                return this._silenceSecs;
            },
            set: function (value) {
                this._silenceSecs = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Postprocessing.prototype, "pipeline", {
            get: function () {
                return this._pipeline;
            },
            set: function (value) {
                this._pipeline = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Postprocessing.prototype, "logmmse", {
            get: function () {
                return this._logmmse;
            },
            set: function (value) {
                this._logmmse = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Postprocessing.prototype, "wiener", {
            get: function () {
                return this._wiener;
            },
            set: function (value) {
                this._wiener = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Postprocessing.prototype, "apodization", {
            get: function () {
                return this._apodization;
            },
            set: function (value) {
                this._apodization = value;
            },
            enumerable: false,
            configurable: true
        });
        Postprocessing.prototype.toObject = function () {
            return {
                silenceSecs: this.silenceSecs,
                pipeline: (this.pipeline || []).slice(),
                logmmse: this.logmmse ? this.logmmse.toObject() : undefined,
                wiener: this.wiener ? this.wiener.toObject() : undefined,
                apodization: this.apodization ? this.apodization.toObject() : undefined
            };
        };
        Postprocessing.prototype.toJSON = function () {
            return this.toObject();
        };
        return Postprocessing;
    }());
    var Logmnse = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Logmnse value
         */
        function Logmnse(value) {
            value = value || {};
            this.initialNoise = value.initialNoise;
            this.windowSize = value.windowSize;
            this.noiseThreshold = value.noiseThreshold;
            Logmnse.refineValues(this);
        }
        Logmnse.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Logmnse.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Logmnse.fromBinary = function (bytes) {
            var instance = new Logmnse();
            Logmnse.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Logmnse.refineValues = function (instance) {
            instance.initialNoise = instance.initialNoise || '0';
            instance.windowSize = instance.windowSize || '0';
            instance.noiseThreshold = instance.noiseThreshold || 0;
        };
        Logmnse.fromBinaryReader = function (instance, reader) {
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
        };
        Logmnse.toBinaryWriter = function (instance, writer) {
            if (instance.initialNoise) {
                writer.writeInt64String(1, instance.initialNoise);
            }
            if (instance.windowSize) {
                writer.writeInt64String(2, instance.windowSize);
            }
            if (instance.noiseThreshold) {
                writer.writeFloat(3, instance.noiseThreshold);
            }
        };
        Object.defineProperty(Logmnse.prototype, "initialNoise", {
            get: function () {
                return this._initialNoise;
            },
            set: function (value) {
                this._initialNoise = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Logmnse.prototype, "windowSize", {
            get: function () {
                return this._windowSize;
            },
            set: function (value) {
                this._windowSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Logmnse.prototype, "noiseThreshold", {
            get: function () {
                return this._noiseThreshold;
            },
            set: function (value) {
                this._noiseThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        Logmnse.prototype.toObject = function () {
            return {
                initialNoise: this.initialNoise,
                windowSize: this.windowSize,
                noiseThreshold: this.noiseThreshold
            };
        };
        Logmnse.prototype.toJSON = function () {
            return this.toObject();
        };
        return Logmnse;
    }());
    var Wiener = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Wiener value
         */
        function Wiener(value) {
            value = value || {};
            this.frameLen = value.frameLen;
            this.lpcOrder = value.lpcOrder;
            this.iterations = value.iterations;
            this.alpha = value.alpha;
            this.thresh = value.thresh;
            Wiener.refineValues(this);
        }
        Wiener.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Wiener.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Wiener.fromBinary = function (bytes) {
            var instance = new Wiener();
            Wiener.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Wiener.refineValues = function (instance) {
            instance.frameLen = instance.frameLen || '0';
            instance.lpcOrder = instance.lpcOrder || '0';
            instance.iterations = instance.iterations || '0';
            instance.alpha = instance.alpha || 0;
            instance.thresh = instance.thresh || 0;
        };
        Wiener.fromBinaryReader = function (instance, reader) {
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
        };
        Wiener.toBinaryWriter = function (instance, writer) {
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
        };
        Object.defineProperty(Wiener.prototype, "frameLen", {
            get: function () {
                return this._frameLen;
            },
            set: function (value) {
                this._frameLen = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Wiener.prototype, "lpcOrder", {
            get: function () {
                return this._lpcOrder;
            },
            set: function (value) {
                this._lpcOrder = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Wiener.prototype, "iterations", {
            get: function () {
                return this._iterations;
            },
            set: function (value) {
                this._iterations = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Wiener.prototype, "alpha", {
            get: function () {
                return this._alpha;
            },
            set: function (value) {
                this._alpha = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Wiener.prototype, "thresh", {
            get: function () {
                return this._thresh;
            },
            set: function (value) {
                this._thresh = value;
            },
            enumerable: false,
            configurable: true
        });
        Wiener.prototype.toObject = function () {
            return {
                frameLen: this.frameLen,
                lpcOrder: this.lpcOrder,
                iterations: this.iterations,
                alpha: this.alpha,
                thresh: this.thresh
            };
        };
        Wiener.prototype.toJSON = function () {
            return this.toObject();
        };
        return Wiener;
    }());
    var Apodization = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Apodization value
         */
        function Apodization(value) {
            value = value || {};
            this.apodizationSecs = value.apodizationSecs;
            Apodization.refineValues(this);
        }
        Apodization.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Apodization.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Apodization.fromBinary = function (bytes) {
            var instance = new Apodization();
            Apodization.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Apodization.refineValues = function (instance) {
            instance.apodizationSecs = instance.apodizationSecs || 0;
        };
        Apodization.fromBinaryReader = function (instance, reader) {
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
        };
        Apodization.toBinaryWriter = function (instance, writer) {
            if (instance.apodizationSecs) {
                writer.writeFloat(1, instance.apodizationSecs);
            }
        };
        Object.defineProperty(Apodization.prototype, "apodizationSecs", {
            get: function () {
                return this._apodizationSecs;
            },
            set: function (value) {
                this._apodizationSecs = value;
            },
            enumerable: false,
            configurable: true
        });
        Apodization.prototype.toObject = function () {
            return {
                apodizationSecs: this.apodizationSecs
            };
        };
        Apodization.prototype.toJSON = function () {
            return this.toObject();
        };
        return Apodization;
    }());

    var Empty = /** @class */ (function () {
        /**
         * Creates an object and applies default Protobuf values
         * @param Empty value
         */
        function Empty(value) {
            value = value || {};
            Empty.refineValues(this);
        }
        Empty.toBinary = function (instance) {
            var writer = new googleProtobuf.BinaryWriter();
            Empty.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        };
        Empty.fromBinary = function (bytes) {
            var instance = new Empty();
            Empty.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Empty.refineValues = function (instance) { };
        Empty.fromBinaryReader = function (instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default:
                        reader.skipField();
                }
            }
            Empty.refineValues(instance);
        };
        Empty.toBinaryWriter = function (instance, writer) { };
        Empty.prototype.toObject = function () {
            return {};
        };
        Empty.prototype.toJSON = function () {
            return this.toObject();
        };
        return Empty;
    }());

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
    var GRPC_TEXT2_SPEECH_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_TEXT2_SPEECH_CLIENT_SETTINGS');

    /* tslint:disable */
    var Text2SpeechClient = /** @class */ (function () {
        function Text2SpeechClient(settings, clientFactory, handler) {
            this.handler = handler;
            this.client = clientFactory.createClient('ondewo.t2s.Text2Speech', settings);
        }
        /**
         * Unary RPC. Emits messages and throws errors on non-zero status codes
         * @param thisProto.SynthesizeRequest request
         * @param Metadata metadata
         * @return Observable<thisProto.SynthesizeResponse>
         */
        Text2SpeechClient.prototype.synthesize = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.synthesize$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC. Emits data and status events; does not throw errors by design
         * @param thisProto.SynthesizeRequest request
         * @param Metadata metadata
         * @return Observable<GrpcEvent<thisProto.SynthesizeResponse>>
         */
        Text2SpeechClient.prototype.synthesize$eventStream = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.handler.handle({
                type: common.GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/Synthesize',
                requestData: requestData,
                requestMetadata: requestMetadata,
                requestClass: exports.SynthesizeRequest,
                responseClass: SynthesizeResponse
            });
        };
        /**
         * Unary RPC. Emits messages and throws errors on non-zero status codes
         * @param thisProto.T2sPipelineId request
         * @param Metadata metadata
         * @return Observable<thisProto.Text2SpeechConfig>
         */
        Text2SpeechClient.prototype.getT2sPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.getT2sPipeline$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC. Emits data and status events; does not throw errors by design
         * @param thisProto.T2sPipelineId request
         * @param Metadata metadata
         * @return Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
         */
        Text2SpeechClient.prototype.getT2sPipeline$eventStream = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.handler.handle({
                type: common.GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/GetT2sPipeline',
                requestData: requestData,
                requestMetadata: requestMetadata,
                requestClass: T2sPipelineId,
                responseClass: Text2SpeechConfig
            });
        };
        /**
         * Unary RPC. Emits messages and throws errors on non-zero status codes
         * @param thisProto.Text2SpeechConfig request
         * @param Metadata metadata
         * @return Observable<thisProto.T2sPipelineId>
         */
        Text2SpeechClient.prototype.createT2sPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.createT2sPipeline$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC. Emits data and status events; does not throw errors by design
         * @param thisProto.Text2SpeechConfig request
         * @param Metadata metadata
         * @return Observable<GrpcEvent<thisProto.T2sPipelineId>>
         */
        Text2SpeechClient.prototype.createT2sPipeline$eventStream = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.handler.handle({
                type: common.GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
                requestData: requestData,
                requestMetadata: requestMetadata,
                requestClass: Text2SpeechConfig,
                responseClass: T2sPipelineId
            });
        };
        /**
         * Unary RPC. Emits messages and throws errors on non-zero status codes
         * @param thisProto.T2sPipelineId request
         * @param Metadata metadata
         * @return Observable<googleProtobuf000.Empty>
         */
        Text2SpeechClient.prototype.deleteT2sPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.deleteT2sPipeline$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC. Emits data and status events; does not throw errors by design
         * @param thisProto.T2sPipelineId request
         * @param Metadata metadata
         * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        Text2SpeechClient.prototype.deleteT2sPipeline$eventStream = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.handler.handle({
                type: common.GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
                requestData: requestData,
                requestMetadata: requestMetadata,
                requestClass: T2sPipelineId,
                responseClass: Empty
            });
        };
        /**
         * Unary RPC. Emits messages and throws errors on non-zero status codes
         * @param thisProto.Text2SpeechConfig request
         * @param Metadata metadata
         * @return Observable<googleProtobuf000.Empty>
         */
        Text2SpeechClient.prototype.updateT2sPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.updateT2sPipeline$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC. Emits data and status events; does not throw errors by design
         * @param thisProto.Text2SpeechConfig request
         * @param Metadata metadata
         * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
         */
        Text2SpeechClient.prototype.updateT2sPipeline$eventStream = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.handler.handle({
                type: common.GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
                requestData: requestData,
                requestMetadata: requestMetadata,
                requestClass: Text2SpeechConfig,
                responseClass: Empty
            });
        };
        /**
         * Unary RPC. Emits messages and throws errors on non-zero status codes
         * @param thisProto.ListT2sPipelinesRequest request
         * @param Metadata metadata
         * @return Observable<thisProto.ListT2sPipelinesResponse>
         */
        Text2SpeechClient.prototype.listT2sPipelines = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.listT2sPipelines$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC. Emits data and status events; does not throw errors by design
         * @param thisProto.ListT2sPipelinesRequest request
         * @param Metadata metadata
         * @return Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
         */
        Text2SpeechClient.prototype.listT2sPipelines$eventStream = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = {}; }
            return this.handler.handle({
                type: common.GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.t2s.Text2Speech/ListT2sPipelines',
                requestData: requestData,
                requestMetadata: requestMetadata,
                requestClass: ListT2sPipelinesRequest,
                responseClass: ListT2sPipelinesResponse
            });
        };
        return Text2SpeechClient;
    }());
    Text2SpeechClient.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function Text2SpeechClient_Factory() { return new Text2SpeechClient(i0__namespace.ɵɵinject(GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, 8), i0__namespace.ɵɵinject(i2__namespace.GRPC_CLIENT_FACTORY), i0__namespace.ɵɵinject(i2__namespace.GrpcHandler)); }, token: Text2SpeechClient, providedIn: "root" });
    Text2SpeechClient.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    Text2SpeechClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_TEXT2_SPEECH_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Apodization = Apodization;
    exports.Caching = Caching;
    exports.CompositeInference = CompositeInference;
    exports.Description = Description;
    exports.Empty = Empty;
    exports.GRPC_TEXT2_SPEECH_CLIENT_SETTINGS = GRPC_TEXT2_SPEECH_CLIENT_SETTINGS;
    exports.GlowTTS = GlowTTS;
    exports.GlowTTSTriton = GlowTTSTriton;
    exports.HiFiGan = HiFiGan;
    exports.HiFiGanTriton = HiFiGanTriton;
    exports.Inference = Inference;
    exports.ListT2sPipelinesRequest = ListT2sPipelinesRequest;
    exports.ListT2sPipelinesResponse = ListT2sPipelinesResponse;
    exports.Logmnse = Logmnse;
    exports.MbMelganTriton = MbMelganTriton;
    exports.Mel2Audio = Mel2Audio;
    exports.Normalization = Normalization;
    exports.Postprocessing = Postprocessing;
    exports.SynthesizeResponse = SynthesizeResponse;
    exports.T2sPipelineId = T2sPipelineId;
    exports.Text2Mel = Text2Mel;
    exports.Text2SpeechClient = Text2SpeechClient;
    exports.Text2SpeechConfig = Text2SpeechConfig;
    exports.Wiener = Wiener;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ondewo-t2s-client-angular.umd.js.map

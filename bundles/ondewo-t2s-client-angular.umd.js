(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngx-grpc/common'), require('google-protobuf'), require('@angular/core'), require('@ngx-grpc/core'), require('@ngx-grpc/well-known-types')) :
    typeof define === 'function' && define.amd ? define('@ondewo/t2s-client-angular', ['exports', '@ngx-grpc/common', 'google-protobuf', '@angular/core', '@ngx-grpc/core', '@ngx-grpc/well-known-types'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ondewo = global.ondewo || {}, global.ondewo['t2s-client-angular'] = {}), global.common, global.googleProtobuf, global.ng.core, global.i2, global.googleProtobuf000));
}(this, (function (exports, common, googleProtobuf, i0, i2, googleProtobuf000) { 'use strict';

    /* tslint:disable */
    (function (Pcm) {
        Pcm[Pcm["PCM_16"] = 0] = "PCM_16";
        Pcm[Pcm["PCM_24"] = 1] = "PCM_24";
        Pcm[Pcm["PCM_32"] = 2] = "PCM_32";
        Pcm[Pcm["PCM_S8"] = 3] = "PCM_S8";
        Pcm[Pcm["PCM_U8"] = 4] = "PCM_U8";
        Pcm[Pcm["FLOAT"] = 5] = "FLOAT";
        Pcm[Pcm["DOUBLE"] = 6] = "DOUBLE";
    })(exports.Pcm || (exports.Pcm = {}));
    (function (AudioFormat) {
        AudioFormat[AudioFormat["wav"] = 0] = "wav";
        AudioFormat[AudioFormat["flac"] = 1] = "flac";
        AudioFormat[AudioFormat["caf"] = 2] = "caf";
        AudioFormat[AudioFormat["mp3"] = 3] = "mp3";
        AudioFormat[AudioFormat["aac"] = 4] = "aac";
        AudioFormat[AudioFormat["ogg"] = 5] = "ogg";
        AudioFormat[AudioFormat["wma"] = 6] = "wma";
    })(exports.AudioFormat || (exports.AudioFormat = {}));
    /**
     * Message implementation for ondewo.t2s.SynthesizeRequest
     */
    var SynthesizeRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SynthesizeRequest to deeply clone from
         */
        function SynthesizeRequest(_value) {
            _value = _value || {};
            this.text = _value.text;
            this.config = _value.config ? new exports.RequestConfig(_value.config) : undefined;
            SynthesizeRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SynthesizeRequest.deserializeBinary = function (bytes) {
            var instance = new SynthesizeRequest();
            SynthesizeRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SynthesizeRequest.refineValues = function (_instance) {
            _instance.text = _instance.text || '';
            _instance.config = _instance.config || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SynthesizeRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.text = _reader.readString();
                        break;
                    case 2:
                        _instance.config = new exports.RequestConfig();
                        _reader.readMessage(_instance.config, exports.RequestConfig.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            SynthesizeRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SynthesizeRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.text) {
                _writer.writeString(1, _instance.text);
            }
            if (_instance.config) {
                _writer.writeMessage(2, _instance.config, exports.RequestConfig.serializeBinaryToWriter);
            }
        };
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
        Object.defineProperty(SynthesizeRequest.prototype, "config", {
            get: function () {
                return this._config;
            },
            set: function (value) {
                this._config = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SynthesizeRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SynthesizeRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SynthesizeRequest.prototype.toObject = function () {
            return {
                text: this.text,
                config: this.config ? this.config.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SynthesizeRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SynthesizeRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                text: this.text,
                config: this.config ? this.config.toProtobufJSON(options) : null
            };
        };
        return SynthesizeRequest;
    }());
    SynthesizeRequest.id = 'ondewo.t2s.SynthesizeRequest';
    /**
     * Message implementation for ondewo.t2s.BatchSynthesizeRequest
     */
    var BatchSynthesizeRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of BatchSynthesizeRequest to deeply clone from
         */
        function BatchSynthesizeRequest(_value) {
            _value = _value || {};
            this.batchRequest = (_value.batchRequest || []).map(function (m) { return new SynthesizeRequest(m); });
            BatchSynthesizeRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        BatchSynthesizeRequest.deserializeBinary = function (bytes) {
            var instance = new BatchSynthesizeRequest();
            BatchSynthesizeRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        BatchSynthesizeRequest.refineValues = function (_instance) {
            _instance.batchRequest = _instance.batchRequest || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        BatchSynthesizeRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new SynthesizeRequest();
                        _reader.readMessage(messageInitializer1, SynthesizeRequest.deserializeBinaryFromReader);
                        (_instance.batchRequest = _instance.batchRequest || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            BatchSynthesizeRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        BatchSynthesizeRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.batchRequest && _instance.batchRequest.length) {
                _writer.writeRepeatedMessage(1, _instance.batchRequest, SynthesizeRequest.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(BatchSynthesizeRequest.prototype, "batchRequest", {
            get: function () {
                return this._batchRequest;
            },
            set: function (value) {
                this._batchRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        BatchSynthesizeRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            BatchSynthesizeRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        BatchSynthesizeRequest.prototype.toObject = function () {
            return {
                batchRequest: (this.batchRequest || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        BatchSynthesizeRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        BatchSynthesizeRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                batchRequest: (this.batchRequest || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return BatchSynthesizeRequest;
    }());
    BatchSynthesizeRequest.id = 'ondewo.t2s.BatchSynthesizeRequest';
    /**
     * Message implementation for ondewo.t2s.BatchSynthesizeResponse
     */
    var BatchSynthesizeResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of BatchSynthesizeResponse to deeply clone from
         */
        function BatchSynthesizeResponse(_value) {
            _value = _value || {};
            this.batchResponse = (_value.batchResponse || []).map(function (m) { return new SynthesizeResponse(m); });
            BatchSynthesizeResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        BatchSynthesizeResponse.deserializeBinary = function (bytes) {
            var instance = new BatchSynthesizeResponse();
            BatchSynthesizeResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        BatchSynthesizeResponse.refineValues = function (_instance) {
            _instance.batchResponse = _instance.batchResponse || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        BatchSynthesizeResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new SynthesizeResponse();
                        _reader.readMessage(messageInitializer1, SynthesizeResponse.deserializeBinaryFromReader);
                        (_instance.batchResponse = _instance.batchResponse || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            BatchSynthesizeResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        BatchSynthesizeResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.batchResponse && _instance.batchResponse.length) {
                _writer.writeRepeatedMessage(1, _instance.batchResponse, SynthesizeResponse.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(BatchSynthesizeResponse.prototype, "batchResponse", {
            get: function () {
                return this._batchResponse;
            },
            set: function (value) {
                this._batchResponse = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        BatchSynthesizeResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            BatchSynthesizeResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        BatchSynthesizeResponse.prototype.toObject = function () {
            return {
                batchResponse: (this.batchResponse || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        BatchSynthesizeResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        BatchSynthesizeResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                batchResponse: (this.batchResponse || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return BatchSynthesizeResponse;
    }());
    BatchSynthesizeResponse.id = 'ondewo.t2s.BatchSynthesizeResponse';
    /**
     * Message implementation for ondewo.t2s.RequestConfig
     */
    exports.RequestConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RequestConfig to deeply clone from
         */
        function RequestConfig(_value) {
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
        RequestConfig.deserializeBinary = function (bytes) {
            var instance = new RequestConfig();
            RequestConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        RequestConfig.refineValues = function (_instance) {
            _instance.t2sPipelineId = _instance.t2sPipelineId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        RequestConfig.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        RequestConfig.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(RequestConfig.prototype, "t2sPipelineId", {
            get: function () {
                return this._t2sPipelineId;
            },
            set: function (value) {
                this._t2sPipelineId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "lengthScale", {
            get: function () {
                return this._lengthScale;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofLengthScale = RequestConfig.OneofLengthScaleCase.lengthScale;
                }
                this._lengthScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "noiseScale", {
            get: function () {
                return this._noiseScale;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.noiseScale;
                }
                this._noiseScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "sampleRate", {
            get: function () {
                return this._sampleRate;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofSampleRate = RequestConfig.OneofSampleRateCase.sampleRate;
                }
                this._sampleRate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "pcm", {
            get: function () {
                return this._pcm;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofPcm = RequestConfig.OneofPcmCase.pcm;
                }
                this._pcm = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "audioFormat", {
            get: function () {
                return this._audioFormat;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofAudioFormat = RequestConfig.OneofAudioFormatCase.audioFormat;
                }
                this._audioFormat = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "useCache", {
            get: function () {
                return this._useCache;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofUseCache = RequestConfig.OneofUseCacheCase.useCache;
                }
                this._useCache = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofLengthScale", {
            get: function () {
                return this._oneofLengthScale;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofNoiseScale", {
            get: function () {
                return this._oneofNoiseScale;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofSampleRate", {
            get: function () {
                return this._oneofSampleRate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofPcm", {
            get: function () {
                return this._oneofPcm;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofAudioFormat", {
            get: function () {
                return this._oneofAudioFormat;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofUseCache", {
            get: function () {
                return this._oneofUseCache;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        RequestConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            RequestConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        RequestConfig.prototype.toObject = function () {
            return {
                t2sPipelineId: this.t2sPipelineId,
                lengthScale: this.lengthScale,
                noiseScale: this.noiseScale,
                sampleRate: this.sampleRate,
                pcm: this.pcm,
                audioFormat: this.audioFormat,
                useCache: this.useCache
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        RequestConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        RequestConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a, _b, _c, _d, _e;
            return {
                t2sPipelineId: this.t2sPipelineId,
                lengthScale: (_a = this.lengthScale) !== null && _a !== void 0 ? _a : null,
                noiseScale: (_b = this.noiseScale) !== null && _b !== void 0 ? _b : null,
                sampleRate: (_c = this.sampleRate) !== null && _c !== void 0 ? _c : null,
                pcm: this.pcm === undefined ? null : exports.Pcm[(_d = this.pcm) !== null && _d !== void 0 ? _d : 0],
                audioFormat: this.audioFormat === undefined
                    ? null
                    : exports.AudioFormat[(_e = this.audioFormat) !== null && _e !== void 0 ? _e : 0],
                useCache: this.useCache
            };
        };
        return RequestConfig;
    }());
    exports.RequestConfig.id = 'ondewo.t2s.RequestConfig';
    (function (RequestConfig) {
        var OneofLengthScaleCase;
        (function (OneofLengthScaleCase) {
            OneofLengthScaleCase[OneofLengthScaleCase["none"] = 0] = "none";
            OneofLengthScaleCase[OneofLengthScaleCase["lengthScale"] = 1] = "lengthScale";
        })(OneofLengthScaleCase = RequestConfig.OneofLengthScaleCase || (RequestConfig.OneofLengthScaleCase = {}));
        var OneofNoiseScaleCase;
        (function (OneofNoiseScaleCase) {
            OneofNoiseScaleCase[OneofNoiseScaleCase["none"] = 0] = "none";
            OneofNoiseScaleCase[OneofNoiseScaleCase["noiseScale"] = 1] = "noiseScale";
        })(OneofNoiseScaleCase = RequestConfig.OneofNoiseScaleCase || (RequestConfig.OneofNoiseScaleCase = {}));
        var OneofSampleRateCase;
        (function (OneofSampleRateCase) {
            OneofSampleRateCase[OneofSampleRateCase["none"] = 0] = "none";
            OneofSampleRateCase[OneofSampleRateCase["sampleRate"] = 1] = "sampleRate";
        })(OneofSampleRateCase = RequestConfig.OneofSampleRateCase || (RequestConfig.OneofSampleRateCase = {}));
        var OneofPcmCase;
        (function (OneofPcmCase) {
            OneofPcmCase[OneofPcmCase["none"] = 0] = "none";
            OneofPcmCase[OneofPcmCase["pcm"] = 1] = "pcm";
        })(OneofPcmCase = RequestConfig.OneofPcmCase || (RequestConfig.OneofPcmCase = {}));
        var OneofAudioFormatCase;
        (function (OneofAudioFormatCase) {
            OneofAudioFormatCase[OneofAudioFormatCase["none"] = 0] = "none";
            OneofAudioFormatCase[OneofAudioFormatCase["audioFormat"] = 1] = "audioFormat";
        })(OneofAudioFormatCase = RequestConfig.OneofAudioFormatCase || (RequestConfig.OneofAudioFormatCase = {}));
        var OneofUseCacheCase;
        (function (OneofUseCacheCase) {
            OneofUseCacheCase[OneofUseCacheCase["none"] = 0] = "none";
            OneofUseCacheCase[OneofUseCacheCase["useCache"] = 1] = "useCache";
        })(OneofUseCacheCase = RequestConfig.OneofUseCacheCase || (RequestConfig.OneofUseCacheCase = {}));
    })(exports.RequestConfig || (exports.RequestConfig = {}));
    /**
     * Message implementation for ondewo.t2s.SynthesizeResponse
     */
    var SynthesizeResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SynthesizeResponse to deeply clone from
         */
        function SynthesizeResponse(_value) {
            _value = _value || {};
            this.audioUuid = _value.audioUuid;
            this.audio = _value.audio;
            this.generationTime = _value.generationTime;
            this.audioLength = _value.audioLength;
            this.text = _value.text;
            this.config = _value.config ? new exports.RequestConfig(_value.config) : undefined;
            SynthesizeResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SynthesizeResponse.deserializeBinary = function (bytes) {
            var instance = new SynthesizeResponse();
            SynthesizeResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SynthesizeResponse.refineValues = function (_instance) {
            _instance.audioUuid = _instance.audioUuid || '';
            _instance.audio = _instance.audio || new Uint8Array();
            _instance.generationTime = _instance.generationTime || 0;
            _instance.audioLength = _instance.audioLength || 0;
            _instance.text = _instance.text || '';
            _instance.config = _instance.config || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SynthesizeResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        _instance.config = new exports.RequestConfig();
                        _reader.readMessage(_instance.config, exports.RequestConfig.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            SynthesizeResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SynthesizeResponse.serializeBinaryToWriter = function (_instance, _writer) {
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
                _writer.writeMessage(6, _instance.config, exports.RequestConfig.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(SynthesizeResponse.prototype, "audioUuid", {
            get: function () {
                return this._audioUuid;
            },
            set: function (value) {
                this._audioUuid = value;
            },
            enumerable: false,
            configurable: true
        });
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
        Object.defineProperty(SynthesizeResponse.prototype, "config", {
            get: function () {
                return this._config;
            },
            set: function (value) {
                this._config = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SynthesizeResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SynthesizeResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SynthesizeResponse.prototype.toObject = function () {
            return {
                audioUuid: this.audioUuid,
                audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
                generationTime: this.generationTime,
                audioLength: this.audioLength,
                text: this.text,
                config: this.config ? this.config.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SynthesizeResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SynthesizeResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                audioUuid: this.audioUuid,
                audio: this.audio ? common.uint8ArrayToBase64(this.audio) : '',
                generationTime: this.generationTime,
                audioLength: this.audioLength,
                text: this.text,
                config: this.config ? this.config.toProtobufJSON(options) : null
            };
        };
        return SynthesizeResponse;
    }());
    SynthesizeResponse.id = 'ondewo.t2s.SynthesizeResponse';
    /**
     * Message implementation for ondewo.t2s.GetServiceInfoResponse
     */
    var GetServiceInfoResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetServiceInfoResponse to deeply clone from
         */
        function GetServiceInfoResponse(_value) {
            _value = _value || {};
            this.version = _value.version;
            GetServiceInfoResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetServiceInfoResponse.deserializeBinary = function (bytes) {
            var instance = new GetServiceInfoResponse();
            GetServiceInfoResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetServiceInfoResponse.refineValues = function (_instance) {
            _instance.version = _instance.version || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetServiceInfoResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
            GetServiceInfoResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetServiceInfoResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.version) {
                _writer.writeString(1, _instance.version);
            }
        };
        Object.defineProperty(GetServiceInfoResponse.prototype, "version", {
            get: function () {
                return this._version;
            },
            set: function (value) {
                this._version = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetServiceInfoResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetServiceInfoResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetServiceInfoResponse.prototype.toObject = function () {
            return {
                version: this.version
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetServiceInfoResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetServiceInfoResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                version: this.version
            };
        };
        return GetServiceInfoResponse;
    }());
    GetServiceInfoResponse.id = 'ondewo.t2s.GetServiceInfoResponse';
    /**
     * Message implementation for ondewo.t2s.ListT2sPipelinesRequest
     */
    var ListT2sPipelinesRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListT2sPipelinesRequest to deeply clone from
         */
        function ListT2sPipelinesRequest(_value) {
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
        ListT2sPipelinesRequest.deserializeBinary = function (bytes) {
            var instance = new ListT2sPipelinesRequest();
            ListT2sPipelinesRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListT2sPipelinesRequest.refineValues = function (_instance) {
            _instance.languages = _instance.languages || [];
            _instance.speakerSexes = _instance.speakerSexes || [];
            _instance.pipelineOwners = _instance.pipelineOwners || [];
            _instance.speakerNames = _instance.speakerNames || [];
            _instance.domains = _instance.domains || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListT2sPipelinesRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListT2sPipelinesRequest.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListT2sPipelinesRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListT2sPipelinesRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListT2sPipelinesRequest.prototype.toObject = function () {
            return {
                languages: (this.languages || []).slice(),
                speakerSexes: (this.speakerSexes || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                speakerNames: (this.speakerNames || []).slice(),
                domains: (this.domains || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListT2sPipelinesRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListT2sPipelinesRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                languages: (this.languages || []).slice(),
                speakerSexes: (this.speakerSexes || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                speakerNames: (this.speakerNames || []).slice(),
                domains: (this.domains || []).slice()
            };
        };
        return ListT2sPipelinesRequest;
    }());
    ListT2sPipelinesRequest.id = 'ondewo.t2s.ListT2sPipelinesRequest';
    /**
     * Message implementation for ondewo.t2s.ListT2sPipelinesResponse
     */
    var ListT2sPipelinesResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListT2sPipelinesResponse to deeply clone from
         */
        function ListT2sPipelinesResponse(_value) {
            _value = _value || {};
            this.pipelines = (_value.pipelines || []).map(function (m) { return new Text2SpeechConfig(m); });
            ListT2sPipelinesResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListT2sPipelinesResponse.deserializeBinary = function (bytes) {
            var instance = new ListT2sPipelinesResponse();
            ListT2sPipelinesResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListT2sPipelinesResponse.refineValues = function (_instance) {
            _instance.pipelines = _instance.pipelines || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListT2sPipelinesResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new Text2SpeechConfig();
                        _reader.readMessage(messageInitializer1, Text2SpeechConfig.deserializeBinaryFromReader);
                        (_instance.pipelines = _instance.pipelines || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ListT2sPipelinesResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListT2sPipelinesResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.pipelines && _instance.pipelines.length) {
                _writer.writeRepeatedMessage(1, _instance.pipelines, Text2SpeechConfig.serializeBinaryToWriter);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListT2sPipelinesResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListT2sPipelinesResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListT2sPipelinesResponse.prototype.toObject = function () {
            return {
                pipelines: (this.pipelines || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListT2sPipelinesResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListT2sPipelinesResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                pipelines: (this.pipelines || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return ListT2sPipelinesResponse;
    }());
    ListT2sPipelinesResponse.id = 'ondewo.t2s.ListT2sPipelinesResponse';
    /**
     * Message implementation for ondewo.t2s.ListT2sLanguagesRequest
     */
    var ListT2sLanguagesRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListT2sLanguagesRequest to deeply clone from
         */
        function ListT2sLanguagesRequest(_value) {
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
        ListT2sLanguagesRequest.deserializeBinary = function (bytes) {
            var instance = new ListT2sLanguagesRequest();
            ListT2sLanguagesRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListT2sLanguagesRequest.refineValues = function (_instance) {
            _instance.speakerSexes = _instance.speakerSexes || [];
            _instance.pipelineOwners = _instance.pipelineOwners || [];
            _instance.speakerNames = _instance.speakerNames || [];
            _instance.domains = _instance.domains || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListT2sLanguagesRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListT2sLanguagesRequest.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(ListT2sLanguagesRequest.prototype, "speakerSexes", {
            get: function () {
                return this._speakerSexes;
            },
            set: function (value) {
                this._speakerSexes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sLanguagesRequest.prototype, "pipelineOwners", {
            get: function () {
                return this._pipelineOwners;
            },
            set: function (value) {
                this._pipelineOwners = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sLanguagesRequest.prototype, "speakerNames", {
            get: function () {
                return this._speakerNames;
            },
            set: function (value) {
                this._speakerNames = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sLanguagesRequest.prototype, "domains", {
            get: function () {
                return this._domains;
            },
            set: function (value) {
                this._domains = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListT2sLanguagesRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListT2sLanguagesRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListT2sLanguagesRequest.prototype.toObject = function () {
            return {
                speakerSexes: (this.speakerSexes || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                speakerNames: (this.speakerNames || []).slice(),
                domains: (this.domains || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListT2sLanguagesRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListT2sLanguagesRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                speakerSexes: (this.speakerSexes || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                speakerNames: (this.speakerNames || []).slice(),
                domains: (this.domains || []).slice()
            };
        };
        return ListT2sLanguagesRequest;
    }());
    ListT2sLanguagesRequest.id = 'ondewo.t2s.ListT2sLanguagesRequest';
    /**
     * Message implementation for ondewo.t2s.ListT2sLanguagesResponse
     */
    var ListT2sLanguagesResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListT2sLanguagesResponse to deeply clone from
         */
        function ListT2sLanguagesResponse(_value) {
            _value = _value || {};
            this.languages = (_value.languages || []).slice();
            ListT2sLanguagesResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListT2sLanguagesResponse.deserializeBinary = function (bytes) {
            var instance = new ListT2sLanguagesResponse();
            ListT2sLanguagesResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListT2sLanguagesResponse.refineValues = function (_instance) {
            _instance.languages = _instance.languages || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListT2sLanguagesResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListT2sLanguagesResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.languages && _instance.languages.length) {
                _writer.writeRepeatedString(1, _instance.languages);
            }
        };
        Object.defineProperty(ListT2sLanguagesResponse.prototype, "languages", {
            get: function () {
                return this._languages;
            },
            set: function (value) {
                this._languages = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListT2sLanguagesResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListT2sLanguagesResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListT2sLanguagesResponse.prototype.toObject = function () {
            return {
                languages: (this.languages || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListT2sLanguagesResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListT2sLanguagesResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                languages: (this.languages || []).slice()
            };
        };
        return ListT2sLanguagesResponse;
    }());
    ListT2sLanguagesResponse.id = 'ondewo.t2s.ListT2sLanguagesResponse';
    /**
     * Message implementation for ondewo.t2s.ListT2sDomainsRequest
     */
    var ListT2sDomainsRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListT2sDomainsRequest to deeply clone from
         */
        function ListT2sDomainsRequest(_value) {
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
        ListT2sDomainsRequest.deserializeBinary = function (bytes) {
            var instance = new ListT2sDomainsRequest();
            ListT2sDomainsRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListT2sDomainsRequest.refineValues = function (_instance) {
            _instance.speakerSexes = _instance.speakerSexes || [];
            _instance.pipelineOwners = _instance.pipelineOwners || [];
            _instance.speakerNames = _instance.speakerNames || [];
            _instance.languages = _instance.languages || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListT2sDomainsRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListT2sDomainsRequest.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(ListT2sDomainsRequest.prototype, "speakerSexes", {
            get: function () {
                return this._speakerSexes;
            },
            set: function (value) {
                this._speakerSexes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sDomainsRequest.prototype, "pipelineOwners", {
            get: function () {
                return this._pipelineOwners;
            },
            set: function (value) {
                this._pipelineOwners = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sDomainsRequest.prototype, "speakerNames", {
            get: function () {
                return this._speakerNames;
            },
            set: function (value) {
                this._speakerNames = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListT2sDomainsRequest.prototype, "languages", {
            get: function () {
                return this._languages;
            },
            set: function (value) {
                this._languages = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListT2sDomainsRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListT2sDomainsRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListT2sDomainsRequest.prototype.toObject = function () {
            return {
                speakerSexes: (this.speakerSexes || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                speakerNames: (this.speakerNames || []).slice(),
                languages: (this.languages || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListT2sDomainsRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListT2sDomainsRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                speakerSexes: (this.speakerSexes || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                speakerNames: (this.speakerNames || []).slice(),
                languages: (this.languages || []).slice()
            };
        };
        return ListT2sDomainsRequest;
    }());
    ListT2sDomainsRequest.id = 'ondewo.t2s.ListT2sDomainsRequest';
    /**
     * Message implementation for ondewo.t2s.ListT2sDomainsResponse
     */
    var ListT2sDomainsResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListT2sDomainsResponse to deeply clone from
         */
        function ListT2sDomainsResponse(_value) {
            _value = _value || {};
            this.domains = (_value.domains || []).slice();
            ListT2sDomainsResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListT2sDomainsResponse.deserializeBinary = function (bytes) {
            var instance = new ListT2sDomainsResponse();
            ListT2sDomainsResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListT2sDomainsResponse.refineValues = function (_instance) {
            _instance.domains = _instance.domains || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListT2sDomainsResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListT2sDomainsResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.domains && _instance.domains.length) {
                _writer.writeRepeatedString(1, _instance.domains);
            }
        };
        Object.defineProperty(ListT2sDomainsResponse.prototype, "domains", {
            get: function () {
                return this._domains;
            },
            set: function (value) {
                this._domains = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListT2sDomainsResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListT2sDomainsResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListT2sDomainsResponse.prototype.toObject = function () {
            return {
                domains: (this.domains || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListT2sDomainsResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListT2sDomainsResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                domains: (this.domains || []).slice()
            };
        };
        return ListT2sDomainsResponse;
    }());
    ListT2sDomainsResponse.id = 'ondewo.t2s.ListT2sDomainsResponse';
    /**
     * Message implementation for ondewo.t2s.T2sPipelineId
     */
    var T2sPipelineId = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of T2sPipelineId to deeply clone from
         */
        function T2sPipelineId(_value) {
            _value = _value || {};
            this.id = _value.id;
            T2sPipelineId.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        T2sPipelineId.deserializeBinary = function (bytes) {
            var instance = new T2sPipelineId();
            T2sPipelineId.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        T2sPipelineId.refineValues = function (_instance) {
            _instance.id = _instance.id || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        T2sPipelineId.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        T2sPipelineId.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.id) {
                _writer.writeString(1, _instance.id);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        T2sPipelineId.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            T2sPipelineId.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        T2sPipelineId.prototype.toObject = function () {
            return {
                id: this.id
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        T2sPipelineId.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        T2sPipelineId.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                id: this.id
            };
        };
        return T2sPipelineId;
    }());
    T2sPipelineId.id = 'ondewo.t2s.T2sPipelineId';
    /**
     * Message implementation for ondewo.t2s.Text2SpeechConfig
     */
    var Text2SpeechConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Text2SpeechConfig to deeply clone from
         */
        function Text2SpeechConfig(_value) {
            _value = _value || {};
            this.id = _value.id;
            this.description = _value.description
                ? new Description(_value.description)
                : undefined;
            this.active = _value.active;
            this.inference = _value.inference
                ? new Inference(_value.inference)
                : undefined;
            this.normalization = _value.normalization
                ? new Normalization(_value.normalization)
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
        Text2SpeechConfig.deserializeBinary = function (bytes) {
            var instance = new Text2SpeechConfig();
            Text2SpeechConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Text2SpeechConfig.refineValues = function (_instance) {
            _instance.id = _instance.id || '';
            _instance.description = _instance.description || undefined;
            _instance.active = _instance.active || false;
            _instance.inference = _instance.inference || undefined;
            _instance.normalization = _instance.normalization || undefined;
            _instance.postprocessing = _instance.postprocessing || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Text2SpeechConfig.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.id = _reader.readString();
                        break;
                    case 2:
                        _instance.description = new Description();
                        _reader.readMessage(_instance.description, Description.deserializeBinaryFromReader);
                        break;
                    case 3:
                        _instance.active = _reader.readBool();
                        break;
                    case 4:
                        _instance.inference = new Inference();
                        _reader.readMessage(_instance.inference, Inference.deserializeBinaryFromReader);
                        break;
                    case 5:
                        _instance.normalization = new Normalization();
                        _reader.readMessage(_instance.normalization, Normalization.deserializeBinaryFromReader);
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Text2SpeechConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.id) {
                _writer.writeString(1, _instance.id);
            }
            if (_instance.description) {
                _writer.writeMessage(2, _instance.description, Description.serializeBinaryToWriter);
            }
            if (_instance.active) {
                _writer.writeBool(3, _instance.active);
            }
            if (_instance.inference) {
                _writer.writeMessage(4, _instance.inference, Inference.serializeBinaryToWriter);
            }
            if (_instance.normalization) {
                _writer.writeMessage(5, _instance.normalization, Normalization.serializeBinaryToWriter);
            }
            if (_instance.postprocessing) {
                _writer.writeMessage(6, _instance.postprocessing, Postprocessing.serializeBinaryToWriter);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Text2SpeechConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Text2SpeechConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
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
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Text2SpeechConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Text2SpeechConfig.prototype.toProtobufJSON = function (
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
        };
        return Text2SpeechConfig;
    }());
    Text2SpeechConfig.id = 'ondewo.t2s.Text2SpeechConfig';
    /**
     * Message implementation for ondewo.t2s.Description
     */
    var Description = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Description to deeply clone from
         */
        function Description(_value) {
            _value = _value || {};
            this.language = _value.language;
            this.speakerSex = _value.speakerSex;
            this.pipelineOwner = _value.pipelineOwner;
            this.comments = _value.comments;
            this.speakerName = _value.speakerName;
            this.domain = _value.domain;
            Description.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Description.deserializeBinary = function (bytes) {
            var instance = new Description();
            Description.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Description.refineValues = function (_instance) {
            _instance.language = _instance.language || '';
            _instance.speakerSex = _instance.speakerSex || '';
            _instance.pipelineOwner = _instance.pipelineOwner || '';
            _instance.comments = _instance.comments || '';
            _instance.speakerName = _instance.speakerName || '';
            _instance.domain = _instance.domain || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Description.deserializeBinaryFromReader = function (_instance, _reader) {
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
            Description.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Description.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Description.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Description.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
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
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Description.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Description.prototype.toProtobufJSON = function (
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
        };
        return Description;
    }());
    Description.id = 'ondewo.t2s.Description';
    /**
     * Message implementation for ondewo.t2s.Inference
     */
    var Inference = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Inference to deeply clone from
         */
        function Inference(_value) {
            _value = _value || {};
            this.type = _value.type;
            this.compositeInference = _value.compositeInference
                ? new CompositeInference(_value.compositeInference)
                : undefined;
            this.caching = _value.caching ? new Caching(_value.caching) : undefined;
            Inference.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Inference.deserializeBinary = function (bytes) {
            var instance = new Inference();
            Inference.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Inference.refineValues = function (_instance) {
            _instance.type = _instance.type || '';
            _instance.compositeInference = _instance.compositeInference || undefined;
            _instance.caching = _instance.caching || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Inference.deserializeBinaryFromReader = function (_instance, _reader) {
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
            Inference.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Inference.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.type) {
                _writer.writeString(1, _instance.type);
            }
            if (_instance.compositeInference) {
                _writer.writeMessage(2, _instance.compositeInference, CompositeInference.serializeBinaryToWriter);
            }
            if (_instance.caching) {
                _writer.writeMessage(3, _instance.caching, Caching.serializeBinaryToWriter);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Inference.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Inference.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Inference.prototype.toObject = function () {
            return {
                type: this.type,
                compositeInference: this.compositeInference
                    ? this.compositeInference.toObject()
                    : undefined,
                caching: this.caching ? this.caching.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Inference.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Inference.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                type: this.type,
                compositeInference: this.compositeInference
                    ? this.compositeInference.toProtobufJSON(options)
                    : null,
                caching: this.caching ? this.caching.toProtobufJSON(options) : null
            };
        };
        return Inference;
    }());
    Inference.id = 'ondewo.t2s.Inference';
    /**
     * Message implementation for ondewo.t2s.CompositeInference
     */
    var CompositeInference = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CompositeInference to deeply clone from
         */
        function CompositeInference(_value) {
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
        CompositeInference.deserializeBinary = function (bytes) {
            var instance = new CompositeInference();
            CompositeInference.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CompositeInference.refineValues = function (_instance) {
            _instance.text2mel = _instance.text2mel || undefined;
            _instance.mel2audio = _instance.mel2audio || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CompositeInference.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CompositeInference.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.text2mel) {
                _writer.writeMessage(1, _instance.text2mel, Text2Mel.serializeBinaryToWriter);
            }
            if (_instance.mel2audio) {
                _writer.writeMessage(2, _instance.mel2audio, Mel2Audio.serializeBinaryToWriter);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CompositeInference.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CompositeInference.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CompositeInference.prototype.toObject = function () {
            return {
                text2mel: this.text2mel ? this.text2mel.toObject() : undefined,
                mel2audio: this.mel2audio ? this.mel2audio.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CompositeInference.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CompositeInference.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                text2mel: this.text2mel ? this.text2mel.toProtobufJSON(options) : null,
                mel2audio: this.mel2audio ? this.mel2audio.toProtobufJSON(options) : null
            };
        };
        return CompositeInference;
    }());
    CompositeInference.id = 'ondewo.t2s.CompositeInference';
    /**
     * Message implementation for ondewo.t2s.Text2Mel
     */
    var Text2Mel = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Text2Mel to deeply clone from
         */
        function Text2Mel(_value) {
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
        Text2Mel.deserializeBinary = function (bytes) {
            var instance = new Text2Mel();
            Text2Mel.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Text2Mel.refineValues = function (_instance) {
            _instance.type = _instance.type || '';
            _instance.glowTts = _instance.glowTts || undefined;
            _instance.glowTtsTriton = _instance.glowTtsTriton || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Text2Mel.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Text2Mel.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.type) {
                _writer.writeString(1, _instance.type);
            }
            if (_instance.glowTts) {
                _writer.writeMessage(2, _instance.glowTts, GlowTTS.serializeBinaryToWriter);
            }
            if (_instance.glowTtsTriton) {
                _writer.writeMessage(3, _instance.glowTtsTriton, GlowTTSTriton.serializeBinaryToWriter);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Text2Mel.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Text2Mel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Text2Mel.prototype.toObject = function () {
            return {
                type: this.type,
                glowTts: this.glowTts ? this.glowTts.toObject() : undefined,
                glowTtsTriton: this.glowTtsTriton
                    ? this.glowTtsTriton.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Text2Mel.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Text2Mel.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                type: this.type,
                glowTts: this.glowTts ? this.glowTts.toProtobufJSON(options) : null,
                glowTtsTriton: this.glowTtsTriton
                    ? this.glowTtsTriton.toProtobufJSON(options)
                    : null
            };
        };
        return Text2Mel;
    }());
    Text2Mel.id = 'ondewo.t2s.Text2Mel';
    /**
     * Message implementation for ondewo.t2s.GlowTTS
     */
    var GlowTTS = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GlowTTS to deeply clone from
         */
        function GlowTTS(_value) {
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
        GlowTTS.deserializeBinary = function (bytes) {
            var instance = new GlowTTS();
            GlowTTS.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GlowTTS.refineValues = function (_instance) {
            _instance.batchSize = _instance.batchSize || '0';
            _instance.useGpu = _instance.useGpu || false;
            _instance.lengthScale = _instance.lengthScale || 0;
            _instance.noiseScale = _instance.noiseScale || 0;
            _instance.path = _instance.path || '';
            _instance.cleaners = _instance.cleaners || [];
            _instance.paramConfigPath = _instance.paramConfigPath || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GlowTTS.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GlowTTS.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GlowTTS.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GlowTTS.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
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
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GlowTTS.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GlowTTS.prototype.toProtobufJSON = function (
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
        };
        return GlowTTS;
    }());
    GlowTTS.id = 'ondewo.t2s.GlowTTS';
    /**
     * Message implementation for ondewo.t2s.GlowTTSTriton
     */
    var GlowTTSTriton = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GlowTTSTriton to deeply clone from
         */
        function GlowTTSTriton(_value) {
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
        GlowTTSTriton.deserializeBinary = function (bytes) {
            var instance = new GlowTTSTriton();
            GlowTTSTriton.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GlowTTSTriton.refineValues = function (_instance) {
            _instance.batchSize = _instance.batchSize || '0';
            _instance.lengthScale = _instance.lengthScale || 0;
            _instance.noiseScale = _instance.noiseScale || 0;
            _instance.cleaners = _instance.cleaners || [];
            _instance.maxTextLength = _instance.maxTextLength || '0';
            _instance.paramConfigPath = _instance.paramConfigPath || '';
            _instance.tritonUrl = _instance.tritonUrl || '';
            _instance.tritonModelName = _instance.tritonModelName || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GlowTTSTriton.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GlowTTSTriton.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GlowTTSTriton.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GlowTTSTriton.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
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
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GlowTTSTriton.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GlowTTSTriton.prototype.toProtobufJSON = function (
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
        };
        return GlowTTSTriton;
    }());
    GlowTTSTriton.id = 'ondewo.t2s.GlowTTSTriton';
    /**
     * Message implementation for ondewo.t2s.Mel2Audio
     */
    var Mel2Audio = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Mel2Audio to deeply clone from
         */
        function Mel2Audio(_value) {
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
        Mel2Audio.deserializeBinary = function (bytes) {
            var instance = new Mel2Audio();
            Mel2Audio.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Mel2Audio.refineValues = function (_instance) {
            _instance.type = _instance.type || '';
            _instance.mbMelganTriton = _instance.mbMelganTriton || undefined;
            _instance.hifiGan = _instance.hifiGan || undefined;
            _instance.hifiGanTriton = _instance.hifiGanTriton || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Mel2Audio.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Mel2Audio.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Mel2Audio.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Mel2Audio.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
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
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Mel2Audio.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Mel2Audio.prototype.toProtobufJSON = function (
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
        };
        return Mel2Audio;
    }());
    Mel2Audio.id = 'ondewo.t2s.Mel2Audio';
    /**
     * Message implementation for ondewo.t2s.HiFiGan
     */
    var HiFiGan = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of HiFiGan to deeply clone from
         */
        function HiFiGan(_value) {
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
        HiFiGan.deserializeBinary = function (bytes) {
            var instance = new HiFiGan();
            HiFiGan.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        HiFiGan.refineValues = function (_instance) {
            _instance.useGpu = _instance.useGpu || false;
            _instance.batchSize = _instance.batchSize || '0';
            _instance.configPath = _instance.configPath || '';
            _instance.modelPath = _instance.modelPath || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        HiFiGan.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        HiFiGan.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        HiFiGan.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            HiFiGan.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        HiFiGan.prototype.toObject = function () {
            return {
                useGpu: this.useGpu,
                batchSize: this.batchSize,
                configPath: this.configPath,
                modelPath: this.modelPath
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        HiFiGan.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        HiFiGan.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                useGpu: this.useGpu,
                batchSize: this.batchSize,
                configPath: this.configPath,
                modelPath: this.modelPath
            };
        };
        return HiFiGan;
    }());
    HiFiGan.id = 'ondewo.t2s.HiFiGan';
    /**
     * Message implementation for ondewo.t2s.HiFiGanTriton
     */
    var HiFiGanTriton = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of HiFiGanTriton to deeply clone from
         */
        function HiFiGanTriton(_value) {
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
        HiFiGanTriton.deserializeBinary = function (bytes) {
            var instance = new HiFiGanTriton();
            HiFiGanTriton.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        HiFiGanTriton.refineValues = function (_instance) {
            _instance.configPath = _instance.configPath || '';
            _instance.tritonModelName = _instance.tritonModelName || '';
            _instance.tritonUrl = _instance.tritonUrl || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        HiFiGanTriton.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        HiFiGanTriton.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.configPath) {
                _writer.writeString(1, _instance.configPath);
            }
            if (_instance.tritonModelName) {
                _writer.writeString(2, _instance.tritonModelName);
            }
            if (_instance.tritonUrl) {
                _writer.writeString(3, _instance.tritonUrl);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        HiFiGanTriton.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            HiFiGanTriton.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        HiFiGanTriton.prototype.toObject = function () {
            return {
                configPath: this.configPath,
                tritonModelName: this.tritonModelName,
                tritonUrl: this.tritonUrl
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        HiFiGanTriton.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        HiFiGanTriton.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                configPath: this.configPath,
                tritonModelName: this.tritonModelName,
                tritonUrl: this.tritonUrl
            };
        };
        return HiFiGanTriton;
    }());
    HiFiGanTriton.id = 'ondewo.t2s.HiFiGanTriton';
    /**
     * Message implementation for ondewo.t2s.MbMelganTriton
     */
    var MbMelganTriton = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of MbMelganTriton to deeply clone from
         */
        function MbMelganTriton(_value) {
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
        MbMelganTriton.deserializeBinary = function (bytes) {
            var instance = new MbMelganTriton();
            MbMelganTriton.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        MbMelganTriton.refineValues = function (_instance) {
            _instance.configPath = _instance.configPath || '';
            _instance.statsPath = _instance.statsPath || '';
            _instance.tritonModelName = _instance.tritonModelName || '';
            _instance.tritonUrl = _instance.tritonUrl || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        MbMelganTriton.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        MbMelganTriton.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        MbMelganTriton.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            MbMelganTriton.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        MbMelganTriton.prototype.toObject = function () {
            return {
                configPath: this.configPath,
                statsPath: this.statsPath,
                tritonModelName: this.tritonModelName,
                tritonUrl: this.tritonUrl
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        MbMelganTriton.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        MbMelganTriton.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                configPath: this.configPath,
                statsPath: this.statsPath,
                tritonModelName: this.tritonModelName,
                tritonUrl: this.tritonUrl
            };
        };
        return MbMelganTriton;
    }());
    MbMelganTriton.id = 'ondewo.t2s.MbMelganTriton';
    /**
     * Message implementation for ondewo.t2s.Caching
     */
    var Caching = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Caching to deeply clone from
         */
        function Caching(_value) {
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
        Caching.deserializeBinary = function (bytes) {
            var instance = new Caching();
            Caching.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Caching.refineValues = function (_instance) {
            _instance.active = _instance.active || false;
            _instance.memoryCacheMaxSize = _instance.memoryCacheMaxSize || '0';
            _instance.samplingRate = _instance.samplingRate || '0';
            _instance.loadCache = _instance.loadCache || false;
            _instance.saveCache = _instance.saveCache || false;
            _instance.cacheSaveDir = _instance.cacheSaveDir || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Caching.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Caching.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Caching.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Caching.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
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
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Caching.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Caching.prototype.toProtobufJSON = function (
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
        };
        return Caching;
    }());
    Caching.id = 'ondewo.t2s.Caching';
    /**
     * Message implementation for ondewo.t2s.Normalization
     */
    var Normalization = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Normalization to deeply clone from
         */
        function Normalization(_value) {
            _value = _value || {};
            this.language = _value.language;
            this.pipeline = (_value.pipeline || []).slice();
            this.customPhonemizerId = _value.customPhonemizerId;
            Normalization.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Normalization.deserializeBinary = function (bytes) {
            var instance = new Normalization();
            Normalization.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Normalization.refineValues = function (_instance) {
            _instance.language = _instance.language || '';
            _instance.pipeline = _instance.pipeline || [];
            _instance.customPhonemizerId = _instance.customPhonemizerId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Normalization.deserializeBinaryFromReader = function (_instance, _reader) {
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
            Normalization.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Normalization.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.language) {
                _writer.writeString(1, _instance.language);
            }
            if (_instance.pipeline && _instance.pipeline.length) {
                _writer.writeRepeatedString(2, _instance.pipeline);
            }
            if (_instance.customPhonemizerId) {
                _writer.writeString(3, _instance.customPhonemizerId);
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
        Object.defineProperty(Normalization.prototype, "customPhonemizerId", {
            get: function () {
                return this._customPhonemizerId;
            },
            set: function (value) {
                this._customPhonemizerId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Normalization.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Normalization.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Normalization.prototype.toObject = function () {
            return {
                language: this.language,
                pipeline: (this.pipeline || []).slice(),
                customPhonemizerId: this.customPhonemizerId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Normalization.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Normalization.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                language: this.language,
                pipeline: (this.pipeline || []).slice(),
                customPhonemizerId: this.customPhonemizerId
            };
        };
        return Normalization;
    }());
    Normalization.id = 'ondewo.t2s.Normalization';
    /**
     * Message implementation for ondewo.t2s.Postprocessing
     */
    var Postprocessing = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Postprocessing to deeply clone from
         */
        function Postprocessing(_value) {
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
        Postprocessing.deserializeBinary = function (bytes) {
            var instance = new Postprocessing();
            Postprocessing.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Postprocessing.refineValues = function (_instance) {
            _instance.silenceSecs = _instance.silenceSecs || 0;
            _instance.pipeline = _instance.pipeline || [];
            _instance.logmmse = _instance.logmmse || undefined;
            _instance.wiener = _instance.wiener || undefined;
            _instance.apodization = _instance.apodization || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Postprocessing.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Postprocessing.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Postprocessing.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Postprocessing.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Postprocessing.prototype.toObject = function () {
            return {
                silenceSecs: this.silenceSecs,
                pipeline: (this.pipeline || []).slice(),
                logmmse: this.logmmse ? this.logmmse.toObject() : undefined,
                wiener: this.wiener ? this.wiener.toObject() : undefined,
                apodization: this.apodization ? this.apodization.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Postprocessing.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Postprocessing.prototype.toProtobufJSON = function (
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
        };
        return Postprocessing;
    }());
    Postprocessing.id = 'ondewo.t2s.Postprocessing';
    /**
     * Message implementation for ondewo.t2s.Logmnse
     */
    var Logmnse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Logmnse to deeply clone from
         */
        function Logmnse(_value) {
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
        Logmnse.deserializeBinary = function (bytes) {
            var instance = new Logmnse();
            Logmnse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Logmnse.refineValues = function (_instance) {
            _instance.initialNoise = _instance.initialNoise || '0';
            _instance.windowSize = _instance.windowSize || '0';
            _instance.noiseThreshold = _instance.noiseThreshold || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Logmnse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Logmnse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.initialNoise) {
                _writer.writeInt64String(1, _instance.initialNoise);
            }
            if (_instance.windowSize) {
                _writer.writeInt64String(2, _instance.windowSize);
            }
            if (_instance.noiseThreshold) {
                _writer.writeFloat(3, _instance.noiseThreshold);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Logmnse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Logmnse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Logmnse.prototype.toObject = function () {
            return {
                initialNoise: this.initialNoise,
                windowSize: this.windowSize,
                noiseThreshold: this.noiseThreshold
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Logmnse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Logmnse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                initialNoise: this.initialNoise,
                windowSize: this.windowSize,
                noiseThreshold: this.noiseThreshold
            };
        };
        return Logmnse;
    }());
    Logmnse.id = 'ondewo.t2s.Logmnse';
    /**
     * Message implementation for ondewo.t2s.Wiener
     */
    var Wiener = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Wiener to deeply clone from
         */
        function Wiener(_value) {
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
        Wiener.deserializeBinary = function (bytes) {
            var instance = new Wiener();
            Wiener.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Wiener.refineValues = function (_instance) {
            _instance.frameLen = _instance.frameLen || '0';
            _instance.lpcOrder = _instance.lpcOrder || '0';
            _instance.iterations = _instance.iterations || '0';
            _instance.alpha = _instance.alpha || 0;
            _instance.thresh = _instance.thresh || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Wiener.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Wiener.serializeBinaryToWriter = function (_instance, _writer) {
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Wiener.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Wiener.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Wiener.prototype.toObject = function () {
            return {
                frameLen: this.frameLen,
                lpcOrder: this.lpcOrder,
                iterations: this.iterations,
                alpha: this.alpha,
                thresh: this.thresh
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Wiener.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Wiener.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                frameLen: this.frameLen,
                lpcOrder: this.lpcOrder,
                iterations: this.iterations,
                alpha: this.alpha,
                thresh: this.thresh
            };
        };
        return Wiener;
    }());
    Wiener.id = 'ondewo.t2s.Wiener';
    /**
     * Message implementation for ondewo.t2s.Apodization
     */
    var Apodization = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Apodization to deeply clone from
         */
        function Apodization(_value) {
            _value = _value || {};
            this.apodizationSecs = _value.apodizationSecs;
            Apodization.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Apodization.deserializeBinary = function (bytes) {
            var instance = new Apodization();
            Apodization.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Apodization.refineValues = function (_instance) {
            _instance.apodizationSecs = _instance.apodizationSecs || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Apodization.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Apodization.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.apodizationSecs) {
                _writer.writeFloat(1, _instance.apodizationSecs);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Apodization.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Apodization.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Apodization.prototype.toObject = function () {
            return {
                apodizationSecs: this.apodizationSecs
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Apodization.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Apodization.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                apodizationSecs: this.apodizationSecs
            };
        };
        return Apodization;
    }());
    Apodization.id = 'ondewo.t2s.Apodization';

    /**
     * Message implementation for ondewo.t2s.PhonemizerId
     */
    var PhonemizerId = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PhonemizerId to deeply clone from
         */
        function PhonemizerId(_value) {
            _value = _value || {};
            this.id = _value.id;
            PhonemizerId.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        PhonemizerId.deserializeBinary = function (bytes) {
            var instance = new PhonemizerId();
            PhonemizerId.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        PhonemizerId.refineValues = function (_instance) {
            _instance.id = _instance.id || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        PhonemizerId.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        PhonemizerId.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.id) {
                _writer.writeString(1, _instance.id);
            }
        };
        Object.defineProperty(PhonemizerId.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        PhonemizerId.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            PhonemizerId.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        PhonemizerId.prototype.toObject = function () {
            return {
                id: this.id
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        PhonemizerId.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        PhonemizerId.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                id: this.id
            };
        };
        return PhonemizerId;
    }());
    PhonemizerId.id = 'ondewo.t2s.PhonemizerId';
    /**
     * Message implementation for ondewo.t2s.CustomPhonemizerProto
     */
    var CustomPhonemizerProto = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CustomPhonemizerProto to deeply clone from
         */
        function CustomPhonemizerProto(_value) {
            _value = _value || {};
            this.id = _value.id;
            this.maps = (_value.maps || []).map(function (m) { return new Map(m); });
            CustomPhonemizerProto.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        CustomPhonemizerProto.deserializeBinary = function (bytes) {
            var instance = new CustomPhonemizerProto();
            CustomPhonemizerProto.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CustomPhonemizerProto.refineValues = function (_instance) {
            _instance.id = _instance.id || '';
            _instance.maps = _instance.maps || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CustomPhonemizerProto.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.id = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new Map();
                        _reader.readMessage(messageInitializer2, Map.deserializeBinaryFromReader);
                        (_instance.maps = _instance.maps || []).push(messageInitializer2);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            CustomPhonemizerProto.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CustomPhonemizerProto.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.id) {
                _writer.writeString(1, _instance.id);
            }
            if (_instance.maps && _instance.maps.length) {
                _writer.writeRepeatedMessage(2, _instance.maps, Map.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(CustomPhonemizerProto.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomPhonemizerProto.prototype, "maps", {
            get: function () {
                return this._maps;
            },
            set: function (value) {
                this._maps = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CustomPhonemizerProto.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CustomPhonemizerProto.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CustomPhonemizerProto.prototype.toObject = function () {
            return {
                id: this.id,
                maps: (this.maps || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CustomPhonemizerProto.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CustomPhonemizerProto.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                id: this.id,
                maps: (this.maps || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return CustomPhonemizerProto;
    }());
    CustomPhonemizerProto.id = 'ondewo.t2s.CustomPhonemizerProto';
    /**
     * Message implementation for ondewo.t2s.Map
     */
    var Map = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Map to deeply clone from
         */
        function Map(_value) {
            _value = _value || {};
            this.word = _value.word;
            this.phonemeGroups = _value.phonemeGroups;
            Map.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Map.deserializeBinary = function (bytes) {
            var instance = new Map();
            Map.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Map.refineValues = function (_instance) {
            _instance.word = _instance.word || '';
            _instance.phonemeGroups = _instance.phonemeGroups || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Map.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Map.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.word) {
                _writer.writeString(1, _instance.word);
            }
            if (_instance.phonemeGroups) {
                _writer.writeString(2, _instance.phonemeGroups);
            }
        };
        Object.defineProperty(Map.prototype, "word", {
            get: function () {
                return this._word;
            },
            set: function (value) {
                this._word = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Map.prototype, "phonemeGroups", {
            get: function () {
                return this._phonemeGroups;
            },
            set: function (value) {
                this._phonemeGroups = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Map.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Map.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Map.prototype.toObject = function () {
            return {
                word: this.word,
                phonemeGroups: this.phonemeGroups
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Map.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Map.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                word: this.word,
                phonemeGroups: this.phonemeGroups
            };
        };
        return Map;
    }());
    Map.id = 'ondewo.t2s.Map';
    /**
     * Message implementation for ondewo.t2s.ListCustomPhonemizerResponse
     */
    var ListCustomPhonemizerResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListCustomPhonemizerResponse to deeply clone from
         */
        function ListCustomPhonemizerResponse(_value) {
            _value = _value || {};
            this.phonemizers = (_value.phonemizers || []).map(function (m) { return new CustomPhonemizerProto(m); });
            ListCustomPhonemizerResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListCustomPhonemizerResponse.deserializeBinary = function (bytes) {
            var instance = new ListCustomPhonemizerResponse();
            ListCustomPhonemizerResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListCustomPhonemizerResponse.refineValues = function (_instance) {
            _instance.phonemizers = _instance.phonemizers || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListCustomPhonemizerResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new CustomPhonemizerProto();
                        _reader.readMessage(messageInitializer1, CustomPhonemizerProto.deserializeBinaryFromReader);
                        (_instance.phonemizers = _instance.phonemizers || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ListCustomPhonemizerResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListCustomPhonemizerResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.phonemizers && _instance.phonemizers.length) {
                _writer.writeRepeatedMessage(1, _instance.phonemizers, CustomPhonemizerProto.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(ListCustomPhonemizerResponse.prototype, "phonemizers", {
            get: function () {
                return this._phonemizers;
            },
            set: function (value) {
                this._phonemizers = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListCustomPhonemizerResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListCustomPhonemizerResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListCustomPhonemizerResponse.prototype.toObject = function () {
            return {
                phonemizers: (this.phonemizers || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListCustomPhonemizerResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListCustomPhonemizerResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                phonemizers: (this.phonemizers || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return ListCustomPhonemizerResponse;
    }());
    ListCustomPhonemizerResponse.id = 'ondewo.t2s.ListCustomPhonemizerResponse';
    /**
     * Message implementation for ondewo.t2s.ListCustomPhonemizerRequest
     */
    var ListCustomPhonemizerRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListCustomPhonemizerRequest to deeply clone from
         */
        function ListCustomPhonemizerRequest(_value) {
            _value = _value || {};
            this.pipelineIds = (_value.pipelineIds || []).slice();
            ListCustomPhonemizerRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListCustomPhonemizerRequest.deserializeBinary = function (bytes) {
            var instance = new ListCustomPhonemizerRequest();
            ListCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListCustomPhonemizerRequest.refineValues = function (_instance) {
            _instance.pipelineIds = _instance.pipelineIds || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListCustomPhonemizerRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListCustomPhonemizerRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.pipelineIds && _instance.pipelineIds.length) {
                _writer.writeRepeatedString(1, _instance.pipelineIds);
            }
        };
        Object.defineProperty(ListCustomPhonemizerRequest.prototype, "pipelineIds", {
            get: function () {
                return this._pipelineIds;
            },
            set: function (value) {
                this._pipelineIds = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListCustomPhonemizerRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListCustomPhonemizerRequest.prototype.toObject = function () {
            return {
                pipelineIds: (this.pipelineIds || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListCustomPhonemizerRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListCustomPhonemizerRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                pipelineIds: (this.pipelineIds || []).slice()
            };
        };
        return ListCustomPhonemizerRequest;
    }());
    ListCustomPhonemizerRequest.id = 'ondewo.t2s.ListCustomPhonemizerRequest';
    /**
     * Message implementation for ondewo.t2s.UpdateCustomPhonemizerRequest
     */
    exports.UpdateCustomPhonemizerRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UpdateCustomPhonemizerRequest to deeply clone from
         */
        function UpdateCustomPhonemizerRequest(_value) {
            _value = _value || {};
            this.id = _value.id;
            this.updateMethod = _value.updateMethod;
            this.maps = (_value.maps || []).map(function (m) { return new Map(m); });
            UpdateCustomPhonemizerRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        UpdateCustomPhonemizerRequest.deserializeBinary = function (bytes) {
            var instance = new UpdateCustomPhonemizerRequest();
            UpdateCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        UpdateCustomPhonemizerRequest.refineValues = function (_instance) {
            _instance.id = _instance.id || '';
            _instance.updateMethod = _instance.updateMethod || 0;
            _instance.maps = _instance.maps || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        UpdateCustomPhonemizerRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        var messageInitializer3 = new Map();
                        _reader.readMessage(messageInitializer3, Map.deserializeBinaryFromReader);
                        (_instance.maps = _instance.maps || []).push(messageInitializer3);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            UpdateCustomPhonemizerRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        UpdateCustomPhonemizerRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.id) {
                _writer.writeString(1, _instance.id);
            }
            if (_instance.updateMethod) {
                _writer.writeEnum(2, _instance.updateMethod);
            }
            if (_instance.maps && _instance.maps.length) {
                _writer.writeRepeatedMessage(3, _instance.maps, Map.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(UpdateCustomPhonemizerRequest.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UpdateCustomPhonemizerRequest.prototype, "updateMethod", {
            get: function () {
                return this._updateMethod;
            },
            set: function (value) {
                this._updateMethod = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UpdateCustomPhonemizerRequest.prototype, "maps", {
            get: function () {
                return this._maps;
            },
            set: function (value) {
                this._maps = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        UpdateCustomPhonemizerRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            UpdateCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        UpdateCustomPhonemizerRequest.prototype.toObject = function () {
            return {
                id: this.id,
                updateMethod: this.updateMethod,
                maps: (this.maps || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        UpdateCustomPhonemizerRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        UpdateCustomPhonemizerRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a;
            return {
                id: this.id,
                updateMethod: UpdateCustomPhonemizerRequest.UpdateMethod[(_a = this.updateMethod) !== null && _a !== void 0 ? _a : 0],
                maps: (this.maps || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return UpdateCustomPhonemizerRequest;
    }());
    exports.UpdateCustomPhonemizerRequest.id = 'ondewo.t2s.UpdateCustomPhonemizerRequest';
    (function (UpdateCustomPhonemizerRequest) {
        var UpdateMethod;
        (function (UpdateMethod) {
            UpdateMethod[UpdateMethod["extend_hard"] = 0] = "extend_hard";
            UpdateMethod[UpdateMethod["extend_soft"] = 1] = "extend_soft";
            UpdateMethod[UpdateMethod["replace"] = 2] = "replace";
        })(UpdateMethod = UpdateCustomPhonemizerRequest.UpdateMethod || (UpdateCustomPhonemizerRequest.UpdateMethod = {}));
    })(exports.UpdateCustomPhonemizerRequest || (exports.UpdateCustomPhonemizerRequest = {}));
    /**
     * Message implementation for ondewo.t2s.CreateCustomPhonemizerRequest
     */
    var CreateCustomPhonemizerRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CreateCustomPhonemizerRequest to deeply clone from
         */
        function CreateCustomPhonemizerRequest(_value) {
            _value = _value || {};
            this.prefix = _value.prefix;
            this.maps = (_value.maps || []).map(function (m) { return new Map(m); });
            CreateCustomPhonemizerRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        CreateCustomPhonemizerRequest.deserializeBinary = function (bytes) {
            var instance = new CreateCustomPhonemizerRequest();
            CreateCustomPhonemizerRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CreateCustomPhonemizerRequest.refineValues = function (_instance) {
            _instance.prefix = _instance.prefix || '';
            _instance.maps = _instance.maps || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CreateCustomPhonemizerRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.prefix = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new Map();
                        _reader.readMessage(messageInitializer2, Map.deserializeBinaryFromReader);
                        (_instance.maps = _instance.maps || []).push(messageInitializer2);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            CreateCustomPhonemizerRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CreateCustomPhonemizerRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.prefix) {
                _writer.writeString(1, _instance.prefix);
            }
            if (_instance.maps && _instance.maps.length) {
                _writer.writeRepeatedMessage(2, _instance.maps, Map.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(CreateCustomPhonemizerRequest.prototype, "prefix", {
            get: function () {
                return this._prefix;
            },
            set: function (value) {
                this._prefix = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CreateCustomPhonemizerRequest.prototype, "maps", {
            get: function () {
                return this._maps;
            },
            set: function (value) {
                this._maps = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CreateCustomPhonemizerRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CreateCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CreateCustomPhonemizerRequest.prototype.toObject = function () {
            return {
                prefix: this.prefix,
                maps: (this.maps || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CreateCustomPhonemizerRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CreateCustomPhonemizerRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                prefix: this.prefix,
                maps: (this.maps || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return CreateCustomPhonemizerRequest;
    }());
    CreateCustomPhonemizerRequest.id = 'ondewo.t2s.CreateCustomPhonemizerRequest';

    /* tslint:disable */
    /**
     * Specific GrpcClientSettings for Text2Speech.
     * Use it only if your default settings are not set or the service requires other settings.
     */
    var GRPC_TEXT2_SPEECH_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_TEXT2_SPEECH_CLIENT_SETTINGS');

    /* tslint:disable */
    /**
     * Specific GrpcClientSettings for CustomPhonemizers.
     * Use it only if your default settings are not set or the service requires other settings.
     */
    var GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS');

    /* tslint:disable */
    /**
     * Service client implementation for ondewo.t2s.Text2Speech
     */
    var Text2SpeechClient = /** @class */ (function () {
        function Text2SpeechClient(settings, clientFactory, handler) {
            var _this = this;
            this.handler = handler;
            /**
             * Raw RPC implementation for each service client method.
             * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
             * Attention: these methods do not throw errors when non-zero status codes are received.
             */
            this.$raw = {
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/Synthesize
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.SynthesizeResponse>>
                 */
                synthesize: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/Synthesize',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: SynthesizeRequest,
                        responseClass: SynthesizeResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/BatchSynthesize
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.BatchSynthesizeResponse>>
                 */
                batchSynthesize: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/BatchSynthesize',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: BatchSynthesizeRequest,
                        responseClass: BatchSynthesizeResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/GetT2sPipeline
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.Text2SpeechConfig>>
                 */
                getT2sPipeline: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/GetT2sPipeline',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: T2sPipelineId,
                        responseClass: Text2SpeechConfig
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/CreateT2sPipeline
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.T2sPipelineId>>
                 */
                createT2sPipeline: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: Text2SpeechConfig,
                        responseClass: T2sPipelineId
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/DeleteT2sPipeline
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                deleteT2sPipeline: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: T2sPipelineId,
                        responseClass: googleProtobuf000.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/UpdateT2sPipeline
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                updateT2sPipeline: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: Text2SpeechConfig,
                        responseClass: googleProtobuf000.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sPipelines
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.ListT2sPipelinesResponse>>
                 */
                listT2sPipelines: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/ListT2sPipelines',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: ListT2sPipelinesRequest,
                        responseClass: ListT2sPipelinesResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sLanguages
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.ListT2sLanguagesResponse>>
                 */
                listT2sLanguages: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/ListT2sLanguages',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: ListT2sLanguagesRequest,
                        responseClass: ListT2sLanguagesResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sDomains
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.ListT2sDomainsResponse>>
                 */
                listT2sDomains: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.Text2Speech/ListT2sDomains',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: ListT2sDomainsRequest,
                        responseClass: ListT2sDomainsResponse
                    });
                }
            };
            this.client = clientFactory.createClient('ondewo.t2s.Text2Speech', settings);
        }
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/Synthesize
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.SynthesizeResponse>
         */
        Text2SpeechClient.prototype.synthesize = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .synthesize(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/BatchSynthesize
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.BatchSynthesizeResponse>
         */
        Text2SpeechClient.prototype.batchSynthesize = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .batchSynthesize(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/GetT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.Text2SpeechConfig>
         */
        Text2SpeechClient.prototype.getT2sPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getT2sPipeline(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/CreateT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.T2sPipelineId>
         */
        Text2SpeechClient.prototype.createT2sPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .createT2sPipeline(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/DeleteT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        Text2SpeechClient.prototype.deleteT2sPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .deleteT2sPipeline(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/UpdateT2sPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        Text2SpeechClient.prototype.updateT2sPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .updateT2sPipeline(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sPipelines
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ListT2sPipelinesResponse>
         */
        Text2SpeechClient.prototype.listT2sPipelines = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listT2sPipelines(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sLanguages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ListT2sLanguagesResponse>
         */
        Text2SpeechClient.prototype.listT2sLanguages = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listT2sLanguages(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.Text2Speech/ListT2sDomains
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ListT2sDomainsResponse>
         */
        Text2SpeechClient.prototype.listT2sDomains = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listT2sDomains(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        return Text2SpeechClient;
    }());
    Text2SpeechClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function Text2SpeechClient_Factory() { return new Text2SpeechClient(i0.ɵɵinject(GRPC_TEXT2_SPEECH_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: Text2SpeechClient, providedIn: "any" });
    Text2SpeechClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'any' },] }
    ];
    Text2SpeechClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_TEXT2_SPEECH_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /* tslint:disable */
    /**
     * Service client implementation for ondewo.t2s.CustomPhonemizers
     */
    var CustomPhonemizersClient = /** @class */ (function () {
        function CustomPhonemizersClient(settings, clientFactory, handler) {
            var _this = this;
            this.handler = handler;
            /**
             * Raw RPC implementation for each service client method.
             * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
             * Attention: these methods do not throw errors when non-zero status codes are received.
             */
            this.$raw = {
                /**
                 * Unary RPC for /ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
                 */
                getCustomPhonemizer: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: PhonemizerId,
                        responseClass: CustomPhonemizerProto
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.PhonemizerId>>
                 */
                createCustomPhonemizer: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: CreateCustomPhonemizerRequest,
                        responseClass: PhonemizerId
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                deleteCustomPhonemizer: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: PhonemizerId,
                        responseClass: googleProtobuf000.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.CustomPhonemizerProto>>
                 */
                updateCustomPhonemizer: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: exports.UpdateCustomPhonemizerRequest,
                        responseClass: CustomPhonemizerProto
                    });
                },
                /**
                 * Unary RPC for /ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.ListCustomPhonemizerResponse>>
                 */
                listCustomPhonemizer: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: ListCustomPhonemizerRequest,
                        responseClass: ListCustomPhonemizerResponse
                    });
                }
            };
            this.client = clientFactory.createClient('ondewo.t2s.CustomPhonemizers', settings);
        }
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.CustomPhonemizerProto>
         */
        CustomPhonemizersClient.prototype.getCustomPhonemizer = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getCustomPhonemizer(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.PhonemizerId>
         */
        CustomPhonemizersClient.prototype.createCustomPhonemizer = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .createCustomPhonemizer(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        CustomPhonemizersClient.prototype.deleteCustomPhonemizer = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .deleteCustomPhonemizer(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.CustomPhonemizerProto>
         */
        CustomPhonemizersClient.prototype.updateCustomPhonemizer = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .updateCustomPhonemizer(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ListCustomPhonemizerResponse>
         */
        CustomPhonemizersClient.prototype.listCustomPhonemizer = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listCustomPhonemizer(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        return CustomPhonemizersClient;
    }());
    CustomPhonemizersClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomPhonemizersClient_Factory() { return new CustomPhonemizersClient(i0.ɵɵinject(GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: CustomPhonemizersClient, providedIn: "any" });
    CustomPhonemizersClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'any' },] }
    ];
    CustomPhonemizersClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Apodization = Apodization;
    exports.BatchSynthesizeRequest = BatchSynthesizeRequest;
    exports.BatchSynthesizeResponse = BatchSynthesizeResponse;
    exports.Caching = Caching;
    exports.CompositeInference = CompositeInference;
    exports.CreateCustomPhonemizerRequest = CreateCustomPhonemizerRequest;
    exports.CustomPhonemizerProto = CustomPhonemizerProto;
    exports.CustomPhonemizersClient = CustomPhonemizersClient;
    exports.Description = Description;
    exports.GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS = GRPC_CUSTOM_PHONEMIZERS_CLIENT_SETTINGS;
    exports.GRPC_TEXT2_SPEECH_CLIENT_SETTINGS = GRPC_TEXT2_SPEECH_CLIENT_SETTINGS;
    exports.GetServiceInfoResponse = GetServiceInfoResponse;
    exports.GlowTTS = GlowTTS;
    exports.GlowTTSTriton = GlowTTSTriton;
    exports.HiFiGan = HiFiGan;
    exports.HiFiGanTriton = HiFiGanTriton;
    exports.Inference = Inference;
    exports.ListCustomPhonemizerRequest = ListCustomPhonemizerRequest;
    exports.ListCustomPhonemizerResponse = ListCustomPhonemizerResponse;
    exports.ListT2sDomainsRequest = ListT2sDomainsRequest;
    exports.ListT2sDomainsResponse = ListT2sDomainsResponse;
    exports.ListT2sLanguagesRequest = ListT2sLanguagesRequest;
    exports.ListT2sLanguagesResponse = ListT2sLanguagesResponse;
    exports.ListT2sPipelinesRequest = ListT2sPipelinesRequest;
    exports.ListT2sPipelinesResponse = ListT2sPipelinesResponse;
    exports.Logmnse = Logmnse;
    exports.Map = Map;
    exports.MbMelganTriton = MbMelganTriton;
    exports.Mel2Audio = Mel2Audio;
    exports.Normalization = Normalization;
    exports.PhonemizerId = PhonemizerId;
    exports.Postprocessing = Postprocessing;
    exports.SynthesizeRequest = SynthesizeRequest;
    exports.SynthesizeResponse = SynthesizeResponse;
    exports.T2sPipelineId = T2sPipelineId;
    exports.Text2Mel = Text2Mel;
    exports.Text2SpeechClient = Text2SpeechClient;
    exports.Text2SpeechConfig = Text2SpeechConfig;
    exports.Wiener = Wiener;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ondewo-t2s-client-angular.umd.js.map

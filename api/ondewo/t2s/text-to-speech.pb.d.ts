import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum AudioFormat {
    wav = 0,
    flac = 1,
    caf = 2,
    mp3 = 3,
    aac = 4,
    ogg = 5,
    wma = 6
}
export declare class SynthesizeRequest implements GrpcMessage {
    static toBinary(instance: SynthesizeRequest): any;
    static fromBinary(bytes: ByteSource): SynthesizeRequest;
    static refineValues(instance: SynthesizeRequest): void;
    static fromBinaryReader(instance: SynthesizeRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: SynthesizeRequest, writer: BinaryWriter): void;
    private _t2sPipelineId?;
    private _text?;
    private _lengthScale?;
    private _noiseScale?;
    private _sampleRate?;
    private _pcm?;
    private _audioFormat?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SynthesizeRequest value
     */
    constructor(value?: RecursivePartial<SynthesizeRequest>);
    get t2sPipelineId(): string | undefined;
    set t2sPipelineId(value: string | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    get lengthScale(): number | undefined;
    set lengthScale(value: number | undefined);
    get noiseScale(): number | undefined;
    set noiseScale(value: number | undefined);
    get sampleRate(): number | undefined;
    set sampleRate(value: number | undefined);
    get pcm(): SynthesizeRequest.Pcm | undefined;
    set pcm(value: SynthesizeRequest.Pcm | undefined);
    get audioFormat(): AudioFormat | undefined;
    set audioFormat(value: AudioFormat | undefined);
    toObject(): {
        t2sPipelineId: string;
        text: string;
        lengthScale: number;
        noiseScale: number;
        sampleRate: number;
        pcm: SynthesizeRequest.Pcm;
        audioFormat: AudioFormat;
    };
    toJSON(): {
        t2sPipelineId: string;
        text: string;
        lengthScale: number;
        noiseScale: number;
        sampleRate: number;
        pcm: SynthesizeRequest.Pcm;
        audioFormat: AudioFormat;
    };
}
export declare module SynthesizeRequest {
    enum Pcm {
        pcm16 = 0,
        pcm24 = 1,
        pcm32 = 2,
        pcmS8 = 3,
        pcmU8 = 4,
        float = 5,
        double = 6
    }
}
export declare class SynthesizeResponse implements GrpcMessage {
    static toBinary(instance: SynthesizeResponse): any;
    static fromBinary(bytes: ByteSource): SynthesizeResponse;
    static refineValues(instance: SynthesizeResponse): void;
    static fromBinaryReader(instance: SynthesizeResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: SynthesizeResponse, writer: BinaryWriter): void;
    private _audio?;
    private _generationTime?;
    private _audioLength?;
    private _t2sPipelineId?;
    private _audioFormat?;
    private _text?;
    private _sampleRate?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SynthesizeResponse value
     */
    constructor(value?: RecursivePartial<SynthesizeResponse>);
    get audio(): Uint8Array | undefined;
    set audio(value: Uint8Array | undefined);
    get generationTime(): number | undefined;
    set generationTime(value: number | undefined);
    get audioLength(): number | undefined;
    set audioLength(value: number | undefined);
    get t2sPipelineId(): string | undefined;
    set t2sPipelineId(value: string | undefined);
    get audioFormat(): AudioFormat | undefined;
    set audioFormat(value: AudioFormat | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    get sampleRate(): number | undefined;
    set sampleRate(value: number | undefined);
    toObject(): {
        audio: Uint8Array;
        generationTime: number;
        audioLength: number;
        t2sPipelineId: string;
        audioFormat: AudioFormat;
        text: string;
        sampleRate: number;
    };
    toJSON(): {
        audio: Uint8Array;
        generationTime: number;
        audioLength: number;
        t2sPipelineId: string;
        audioFormat: AudioFormat;
        text: string;
        sampleRate: number;
    };
}
export declare module SynthesizeResponse { }
export declare class ListT2sPipelinesRequest implements GrpcMessage {
    static toBinary(instance: ListT2sPipelinesRequest): any;
    static fromBinary(bytes: ByteSource): ListT2sPipelinesRequest;
    static refineValues(instance: ListT2sPipelinesRequest): void;
    static fromBinaryReader(instance: ListT2sPipelinesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListT2sPipelinesRequest, writer: BinaryWriter): void;
    private _languages?;
    private _speakerSexes?;
    private _pipelineOwners?;
    private _speakerNames?;
    private _domains?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListT2sPipelinesRequest value
     */
    constructor(value?: RecursivePartial<ListT2sPipelinesRequest>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
    get speakerSexes(): string[] | undefined;
    set speakerSexes(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
    get speakerNames(): string[] | undefined;
    set speakerNames(value: string[] | undefined);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
    toObject(): {
        languages: string[];
        speakerSexes: string[];
        pipelineOwners: string[];
        speakerNames: string[];
        domains: string[];
    };
    toJSON(): {
        languages: string[];
        speakerSexes: string[];
        pipelineOwners: string[];
        speakerNames: string[];
        domains: string[];
    };
}
export declare module ListT2sPipelinesRequest { }
export declare class ListT2sPipelinesResponse implements GrpcMessage {
    static toBinary(instance: ListT2sPipelinesResponse): any;
    static fromBinary(bytes: ByteSource): ListT2sPipelinesResponse;
    static refineValues(instance: ListT2sPipelinesResponse): void;
    static fromBinaryReader(instance: ListT2sPipelinesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListT2sPipelinesResponse, writer: BinaryWriter): void;
    private _pipelines?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListT2sPipelinesResponse value
     */
    constructor(value?: RecursivePartial<ListT2sPipelinesResponse>);
    get pipelines(): Text2SpeechConfig[] | undefined;
    set pipelines(value: Text2SpeechConfig[] | undefined);
    toObject(): {
        pipelines: {
            id: string;
            description: {
                language: string;
                speakerSex: string;
                pipelineOwner: string;
                comments: string;
                speakerName: string;
                domain: string;
            };
            active: boolean;
            inference: {
                type: string;
                compositeInference: {
                    text2mel: {
                        type: string;
                        glowTts: {
                            batchSize: string;
                            useGpu: boolean;
                            lengthScale: number;
                            noiseScale: number;
                            path: string;
                            cleaners: string[];
                            paramConfigPath: string;
                        };
                        glowTtsTriton: {
                            batchSize: string;
                            lengthScale: number;
                            noiseScale: number;
                            cleaners: string[];
                            maxTextLength: string;
                            paramConfigPath: string;
                            tritonUrl: string;
                            tritonModelName: string;
                        };
                    };
                    mel2audio: {
                        type: string;
                        mbMelganTriton: {
                            configPath: string;
                            statsPath: string;
                            tritonModelName: string;
                            tritonUrl: string;
                        };
                        hifiGan: {
                            useGpu: boolean;
                            batchSize: string;
                            configPath: string;
                            modelPath: string;
                        };
                        hifiGanTriton: {
                            configPath: string;
                            tritonModelName: string;
                            tritonUrl: string;
                        };
                    };
                };
                caching: {
                    active: boolean;
                    memoryCacheMaxSize: string;
                    samplingRate: string;
                    loadCache: boolean;
                    saveCache: boolean;
                    cacheSaveDir: string;
                };
            };
            normalization: {
                language: string;
                pipeline: string[];
            };
            postprocessing: {
                silenceSecs: number;
                pipeline: string[];
                logmmse: {
                    initialNoise: string;
                    windowSize: string;
                    noiseThreshold: number;
                };
                wiener: {
                    frameLen: string;
                    lpcOrder: string;
                    iterations: string;
                    alpha: number;
                    thresh: number;
                };
                apodization: {
                    apodizationSecs: number;
                };
            };
        }[];
    };
    toJSON(): {
        pipelines: {
            id: string;
            description: {
                language: string;
                speakerSex: string;
                pipelineOwner: string;
                comments: string;
                speakerName: string;
                domain: string;
            };
            active: boolean;
            inference: {
                type: string;
                compositeInference: {
                    text2mel: {
                        type: string;
                        glowTts: {
                            batchSize: string;
                            useGpu: boolean;
                            lengthScale: number;
                            noiseScale: number;
                            path: string;
                            cleaners: string[];
                            paramConfigPath: string;
                        };
                        glowTtsTriton: {
                            batchSize: string;
                            lengthScale: number;
                            noiseScale: number;
                            cleaners: string[];
                            maxTextLength: string;
                            paramConfigPath: string;
                            tritonUrl: string;
                            tritonModelName: string;
                        };
                    };
                    mel2audio: {
                        type: string;
                        mbMelganTriton: {
                            configPath: string;
                            statsPath: string;
                            tritonModelName: string;
                            tritonUrl: string;
                        };
                        hifiGan: {
                            useGpu: boolean;
                            batchSize: string;
                            configPath: string;
                            modelPath: string;
                        };
                        hifiGanTriton: {
                            configPath: string;
                            tritonModelName: string;
                            tritonUrl: string;
                        };
                    };
                };
                caching: {
                    active: boolean;
                    memoryCacheMaxSize: string;
                    samplingRate: string;
                    loadCache: boolean;
                    saveCache: boolean;
                    cacheSaveDir: string;
                };
            };
            normalization: {
                language: string;
                pipeline: string[];
            };
            postprocessing: {
                silenceSecs: number;
                pipeline: string[];
                logmmse: {
                    initialNoise: string;
                    windowSize: string;
                    noiseThreshold: number;
                };
                wiener: {
                    frameLen: string;
                    lpcOrder: string;
                    iterations: string;
                    alpha: number;
                    thresh: number;
                };
                apodization: {
                    apodizationSecs: number;
                };
            };
        }[];
    };
}
export declare module ListT2sPipelinesResponse { }
export declare class T2sPipelineId implements GrpcMessage {
    static toBinary(instance: T2sPipelineId): any;
    static fromBinary(bytes: ByteSource): T2sPipelineId;
    static refineValues(instance: T2sPipelineId): void;
    static fromBinaryReader(instance: T2sPipelineId, reader: BinaryReader): void;
    static toBinaryWriter(instance: T2sPipelineId, writer: BinaryWriter): void;
    private _id?;
    /**
     * Creates an object and applies default Protobuf values
     * @param T2sPipelineId value
     */
    constructor(value?: RecursivePartial<T2sPipelineId>);
    get id(): string | undefined;
    set id(value: string | undefined);
    toObject(): {
        id: string;
    };
    toJSON(): {
        id: string;
    };
}
export declare module T2sPipelineId { }
export declare class Text2SpeechConfig implements GrpcMessage {
    static toBinary(instance: Text2SpeechConfig): any;
    static fromBinary(bytes: ByteSource): Text2SpeechConfig;
    static refineValues(instance: Text2SpeechConfig): void;
    static fromBinaryReader(instance: Text2SpeechConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: Text2SpeechConfig, writer: BinaryWriter): void;
    private _id?;
    private _description?;
    private _active?;
    private _inference?;
    private _normalization?;
    private _postprocessing?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Text2SpeechConfig value
     */
    constructor(value?: RecursivePartial<Text2SpeechConfig>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get description(): Description | undefined;
    set description(value: Description | undefined);
    get active(): boolean | undefined;
    set active(value: boolean | undefined);
    get inference(): Inference | undefined;
    set inference(value: Inference | undefined);
    get normalization(): Normalization | undefined;
    set normalization(value: Normalization | undefined);
    get postprocessing(): Postprocessing | undefined;
    set postprocessing(value: Postprocessing | undefined);
    toObject(): {
        id: string;
        description: {
            language: string;
            speakerSex: string;
            pipelineOwner: string;
            comments: string;
            speakerName: string;
            domain: string;
        };
        active: boolean;
        inference: {
            type: string;
            compositeInference: {
                text2mel: {
                    type: string;
                    glowTts: {
                        batchSize: string;
                        useGpu: boolean;
                        lengthScale: number;
                        noiseScale: number;
                        path: string;
                        cleaners: string[];
                        paramConfigPath: string;
                    };
                    glowTtsTriton: {
                        batchSize: string;
                        lengthScale: number;
                        noiseScale: number;
                        cleaners: string[];
                        maxTextLength: string;
                        paramConfigPath: string;
                        tritonUrl: string;
                        tritonModelName: string;
                    };
                };
                mel2audio: {
                    type: string;
                    mbMelganTriton: {
                        configPath: string;
                        statsPath: string;
                        tritonModelName: string;
                        tritonUrl: string;
                    };
                    hifiGan: {
                        useGpu: boolean;
                        batchSize: string;
                        configPath: string;
                        modelPath: string;
                    };
                    hifiGanTriton: {
                        configPath: string;
                        tritonModelName: string;
                        tritonUrl: string;
                    };
                };
            };
            caching: {
                active: boolean;
                memoryCacheMaxSize: string;
                samplingRate: string;
                loadCache: boolean;
                saveCache: boolean;
                cacheSaveDir: string;
            };
        };
        normalization: {
            language: string;
            pipeline: string[];
        };
        postprocessing: {
            silenceSecs: number;
            pipeline: string[];
            logmmse: {
                initialNoise: string;
                windowSize: string;
                noiseThreshold: number;
            };
            wiener: {
                frameLen: string;
                lpcOrder: string;
                iterations: string;
                alpha: number;
                thresh: number;
            };
            apodization: {
                apodizationSecs: number;
            };
        };
    };
    toJSON(): {
        id: string;
        description: {
            language: string;
            speakerSex: string;
            pipelineOwner: string;
            comments: string;
            speakerName: string;
            domain: string;
        };
        active: boolean;
        inference: {
            type: string;
            compositeInference: {
                text2mel: {
                    type: string;
                    glowTts: {
                        batchSize: string;
                        useGpu: boolean;
                        lengthScale: number;
                        noiseScale: number;
                        path: string;
                        cleaners: string[];
                        paramConfigPath: string;
                    };
                    glowTtsTriton: {
                        batchSize: string;
                        lengthScale: number;
                        noiseScale: number;
                        cleaners: string[];
                        maxTextLength: string;
                        paramConfigPath: string;
                        tritonUrl: string;
                        tritonModelName: string;
                    };
                };
                mel2audio: {
                    type: string;
                    mbMelganTriton: {
                        configPath: string;
                        statsPath: string;
                        tritonModelName: string;
                        tritonUrl: string;
                    };
                    hifiGan: {
                        useGpu: boolean;
                        batchSize: string;
                        configPath: string;
                        modelPath: string;
                    };
                    hifiGanTriton: {
                        configPath: string;
                        tritonModelName: string;
                        tritonUrl: string;
                    };
                };
            };
            caching: {
                active: boolean;
                memoryCacheMaxSize: string;
                samplingRate: string;
                loadCache: boolean;
                saveCache: boolean;
                cacheSaveDir: string;
            };
        };
        normalization: {
            language: string;
            pipeline: string[];
        };
        postprocessing: {
            silenceSecs: number;
            pipeline: string[];
            logmmse: {
                initialNoise: string;
                windowSize: string;
                noiseThreshold: number;
            };
            wiener: {
                frameLen: string;
                lpcOrder: string;
                iterations: string;
                alpha: number;
                thresh: number;
            };
            apodization: {
                apodizationSecs: number;
            };
        };
    };
}
export declare module Text2SpeechConfig { }
export declare class Description implements GrpcMessage {
    static toBinary(instance: Description): any;
    static fromBinary(bytes: ByteSource): Description;
    static refineValues(instance: Description): void;
    static fromBinaryReader(instance: Description, reader: BinaryReader): void;
    static toBinaryWriter(instance: Description, writer: BinaryWriter): void;
    private _language?;
    private _speakerSex?;
    private _pipelineOwner?;
    private _comments?;
    private _speakerName?;
    private _domain?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Description value
     */
    constructor(value?: RecursivePartial<Description>);
    get language(): string | undefined;
    set language(value: string | undefined);
    get speakerSex(): string | undefined;
    set speakerSex(value: string | undefined);
    get pipelineOwner(): string | undefined;
    set pipelineOwner(value: string | undefined);
    get comments(): string | undefined;
    set comments(value: string | undefined);
    get speakerName(): string | undefined;
    set speakerName(value: string | undefined);
    get domain(): string | undefined;
    set domain(value: string | undefined);
    toObject(): {
        language: string;
        speakerSex: string;
        pipelineOwner: string;
        comments: string;
        speakerName: string;
        domain: string;
    };
    toJSON(): {
        language: string;
        speakerSex: string;
        pipelineOwner: string;
        comments: string;
        speakerName: string;
        domain: string;
    };
}
export declare module Description { }
export declare class Inference implements GrpcMessage {
    static toBinary(instance: Inference): any;
    static fromBinary(bytes: ByteSource): Inference;
    static refineValues(instance: Inference): void;
    static fromBinaryReader(instance: Inference, reader: BinaryReader): void;
    static toBinaryWriter(instance: Inference, writer: BinaryWriter): void;
    private _type?;
    private _compositeInference?;
    private _caching?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Inference value
     */
    constructor(value?: RecursivePartial<Inference>);
    get type(): string | undefined;
    set type(value: string | undefined);
    get compositeInference(): CompositeInference | undefined;
    set compositeInference(value: CompositeInference | undefined);
    get caching(): Caching | undefined;
    set caching(value: Caching | undefined);
    toObject(): {
        type: string;
        compositeInference: {
            text2mel: {
                type: string;
                glowTts: {
                    batchSize: string;
                    useGpu: boolean;
                    lengthScale: number;
                    noiseScale: number;
                    path: string;
                    cleaners: string[];
                    paramConfigPath: string;
                };
                glowTtsTriton: {
                    batchSize: string;
                    lengthScale: number;
                    noiseScale: number;
                    cleaners: string[];
                    maxTextLength: string;
                    paramConfigPath: string;
                    tritonUrl: string;
                    tritonModelName: string;
                };
            };
            mel2audio: {
                type: string;
                mbMelganTriton: {
                    configPath: string;
                    statsPath: string;
                    tritonModelName: string;
                    tritonUrl: string;
                };
                hifiGan: {
                    useGpu: boolean;
                    batchSize: string;
                    configPath: string;
                    modelPath: string;
                };
                hifiGanTriton: {
                    configPath: string;
                    tritonModelName: string;
                    tritonUrl: string;
                };
            };
        };
        caching: {
            active: boolean;
            memoryCacheMaxSize: string;
            samplingRate: string;
            loadCache: boolean;
            saveCache: boolean;
            cacheSaveDir: string;
        };
    };
    toJSON(): {
        type: string;
        compositeInference: {
            text2mel: {
                type: string;
                glowTts: {
                    batchSize: string;
                    useGpu: boolean;
                    lengthScale: number;
                    noiseScale: number;
                    path: string;
                    cleaners: string[];
                    paramConfigPath: string;
                };
                glowTtsTriton: {
                    batchSize: string;
                    lengthScale: number;
                    noiseScale: number;
                    cleaners: string[];
                    maxTextLength: string;
                    paramConfigPath: string;
                    tritonUrl: string;
                    tritonModelName: string;
                };
            };
            mel2audio: {
                type: string;
                mbMelganTriton: {
                    configPath: string;
                    statsPath: string;
                    tritonModelName: string;
                    tritonUrl: string;
                };
                hifiGan: {
                    useGpu: boolean;
                    batchSize: string;
                    configPath: string;
                    modelPath: string;
                };
                hifiGanTriton: {
                    configPath: string;
                    tritonModelName: string;
                    tritonUrl: string;
                };
            };
        };
        caching: {
            active: boolean;
            memoryCacheMaxSize: string;
            samplingRate: string;
            loadCache: boolean;
            saveCache: boolean;
            cacheSaveDir: string;
        };
    };
}
export declare module Inference { }
export declare class CompositeInference implements GrpcMessage {
    static toBinary(instance: CompositeInference): any;
    static fromBinary(bytes: ByteSource): CompositeInference;
    static refineValues(instance: CompositeInference): void;
    static fromBinaryReader(instance: CompositeInference, reader: BinaryReader): void;
    static toBinaryWriter(instance: CompositeInference, writer: BinaryWriter): void;
    private _text2mel?;
    private _mel2audio?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CompositeInference value
     */
    constructor(value?: RecursivePartial<CompositeInference>);
    get text2mel(): Text2Mel | undefined;
    set text2mel(value: Text2Mel | undefined);
    get mel2audio(): Mel2Audio | undefined;
    set mel2audio(value: Mel2Audio | undefined);
    toObject(): {
        text2mel: {
            type: string;
            glowTts: {
                batchSize: string;
                useGpu: boolean;
                lengthScale: number;
                noiseScale: number;
                path: string;
                cleaners: string[];
                paramConfigPath: string;
            };
            glowTtsTriton: {
                batchSize: string;
                lengthScale: number;
                noiseScale: number;
                cleaners: string[];
                maxTextLength: string;
                paramConfigPath: string;
                tritonUrl: string;
                tritonModelName: string;
            };
        };
        mel2audio: {
            type: string;
            mbMelganTriton: {
                configPath: string;
                statsPath: string;
                tritonModelName: string;
                tritonUrl: string;
            };
            hifiGan: {
                useGpu: boolean;
                batchSize: string;
                configPath: string;
                modelPath: string;
            };
            hifiGanTriton: {
                configPath: string;
                tritonModelName: string;
                tritonUrl: string;
            };
        };
    };
    toJSON(): {
        text2mel: {
            type: string;
            glowTts: {
                batchSize: string;
                useGpu: boolean;
                lengthScale: number;
                noiseScale: number;
                path: string;
                cleaners: string[];
                paramConfigPath: string;
            };
            glowTtsTriton: {
                batchSize: string;
                lengthScale: number;
                noiseScale: number;
                cleaners: string[];
                maxTextLength: string;
                paramConfigPath: string;
                tritonUrl: string;
                tritonModelName: string;
            };
        };
        mel2audio: {
            type: string;
            mbMelganTriton: {
                configPath: string;
                statsPath: string;
                tritonModelName: string;
                tritonUrl: string;
            };
            hifiGan: {
                useGpu: boolean;
                batchSize: string;
                configPath: string;
                modelPath: string;
            };
            hifiGanTriton: {
                configPath: string;
                tritonModelName: string;
                tritonUrl: string;
            };
        };
    };
}
export declare module CompositeInference { }
export declare class Text2Mel implements GrpcMessage {
    static toBinary(instance: Text2Mel): any;
    static fromBinary(bytes: ByteSource): Text2Mel;
    static refineValues(instance: Text2Mel): void;
    static fromBinaryReader(instance: Text2Mel, reader: BinaryReader): void;
    static toBinaryWriter(instance: Text2Mel, writer: BinaryWriter): void;
    private _type?;
    private _glowTts?;
    private _glowTtsTriton?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Text2Mel value
     */
    constructor(value?: RecursivePartial<Text2Mel>);
    get type(): string | undefined;
    set type(value: string | undefined);
    get glowTts(): GlowTTS | undefined;
    set glowTts(value: GlowTTS | undefined);
    get glowTtsTriton(): GlowTTSTriton | undefined;
    set glowTtsTriton(value: GlowTTSTriton | undefined);
    toObject(): {
        type: string;
        glowTts: {
            batchSize: string;
            useGpu: boolean;
            lengthScale: number;
            noiseScale: number;
            path: string;
            cleaners: string[];
            paramConfigPath: string;
        };
        glowTtsTriton: {
            batchSize: string;
            lengthScale: number;
            noiseScale: number;
            cleaners: string[];
            maxTextLength: string;
            paramConfigPath: string;
            tritonUrl: string;
            tritonModelName: string;
        };
    };
    toJSON(): {
        type: string;
        glowTts: {
            batchSize: string;
            useGpu: boolean;
            lengthScale: number;
            noiseScale: number;
            path: string;
            cleaners: string[];
            paramConfigPath: string;
        };
        glowTtsTriton: {
            batchSize: string;
            lengthScale: number;
            noiseScale: number;
            cleaners: string[];
            maxTextLength: string;
            paramConfigPath: string;
            tritonUrl: string;
            tritonModelName: string;
        };
    };
}
export declare module Text2Mel { }
export declare class GlowTTS implements GrpcMessage {
    static toBinary(instance: GlowTTS): any;
    static fromBinary(bytes: ByteSource): GlowTTS;
    static refineValues(instance: GlowTTS): void;
    static fromBinaryReader(instance: GlowTTS, reader: BinaryReader): void;
    static toBinaryWriter(instance: GlowTTS, writer: BinaryWriter): void;
    private _batchSize?;
    private _useGpu?;
    private _lengthScale?;
    private _noiseScale?;
    private _path?;
    private _cleaners?;
    private _paramConfigPath?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GlowTTS value
     */
    constructor(value?: RecursivePartial<GlowTTS>);
    get batchSize(): string | undefined;
    set batchSize(value: string | undefined);
    get useGpu(): boolean | undefined;
    set useGpu(value: boolean | undefined);
    get lengthScale(): number | undefined;
    set lengthScale(value: number | undefined);
    get noiseScale(): number | undefined;
    set noiseScale(value: number | undefined);
    get path(): string | undefined;
    set path(value: string | undefined);
    get cleaners(): string[] | undefined;
    set cleaners(value: string[] | undefined);
    get paramConfigPath(): string | undefined;
    set paramConfigPath(value: string | undefined);
    toObject(): {
        batchSize: string;
        useGpu: boolean;
        lengthScale: number;
        noiseScale: number;
        path: string;
        cleaners: string[];
        paramConfigPath: string;
    };
    toJSON(): {
        batchSize: string;
        useGpu: boolean;
        lengthScale: number;
        noiseScale: number;
        path: string;
        cleaners: string[];
        paramConfigPath: string;
    };
}
export declare module GlowTTS { }
export declare class GlowTTSTriton implements GrpcMessage {
    static toBinary(instance: GlowTTSTriton): any;
    static fromBinary(bytes: ByteSource): GlowTTSTriton;
    static refineValues(instance: GlowTTSTriton): void;
    static fromBinaryReader(instance: GlowTTSTriton, reader: BinaryReader): void;
    static toBinaryWriter(instance: GlowTTSTriton, writer: BinaryWriter): void;
    private _batchSize?;
    private _lengthScale?;
    private _noiseScale?;
    private _cleaners?;
    private _maxTextLength?;
    private _paramConfigPath?;
    private _tritonUrl?;
    private _tritonModelName?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GlowTTSTriton value
     */
    constructor(value?: RecursivePartial<GlowTTSTriton>);
    get batchSize(): string | undefined;
    set batchSize(value: string | undefined);
    get lengthScale(): number | undefined;
    set lengthScale(value: number | undefined);
    get noiseScale(): number | undefined;
    set noiseScale(value: number | undefined);
    get cleaners(): string[] | undefined;
    set cleaners(value: string[] | undefined);
    get maxTextLength(): string | undefined;
    set maxTextLength(value: string | undefined);
    get paramConfigPath(): string | undefined;
    set paramConfigPath(value: string | undefined);
    get tritonUrl(): string | undefined;
    set tritonUrl(value: string | undefined);
    get tritonModelName(): string | undefined;
    set tritonModelName(value: string | undefined);
    toObject(): {
        batchSize: string;
        lengthScale: number;
        noiseScale: number;
        cleaners: string[];
        maxTextLength: string;
        paramConfigPath: string;
        tritonUrl: string;
        tritonModelName: string;
    };
    toJSON(): {
        batchSize: string;
        lengthScale: number;
        noiseScale: number;
        cleaners: string[];
        maxTextLength: string;
        paramConfigPath: string;
        tritonUrl: string;
        tritonModelName: string;
    };
}
export declare module GlowTTSTriton { }
export declare class Mel2Audio implements GrpcMessage {
    static toBinary(instance: Mel2Audio): any;
    static fromBinary(bytes: ByteSource): Mel2Audio;
    static refineValues(instance: Mel2Audio): void;
    static fromBinaryReader(instance: Mel2Audio, reader: BinaryReader): void;
    static toBinaryWriter(instance: Mel2Audio, writer: BinaryWriter): void;
    private _type?;
    private _mbMelganTriton?;
    private _hifiGan?;
    private _hifiGanTriton?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Mel2Audio value
     */
    constructor(value?: RecursivePartial<Mel2Audio>);
    get type(): string | undefined;
    set type(value: string | undefined);
    get mbMelganTriton(): MbMelganTriton | undefined;
    set mbMelganTriton(value: MbMelganTriton | undefined);
    get hifiGan(): HiFiGan | undefined;
    set hifiGan(value: HiFiGan | undefined);
    get hifiGanTriton(): HiFiGanTriton | undefined;
    set hifiGanTriton(value: HiFiGanTriton | undefined);
    toObject(): {
        type: string;
        mbMelganTriton: {
            configPath: string;
            statsPath: string;
            tritonModelName: string;
            tritonUrl: string;
        };
        hifiGan: {
            useGpu: boolean;
            batchSize: string;
            configPath: string;
            modelPath: string;
        };
        hifiGanTriton: {
            configPath: string;
            tritonModelName: string;
            tritonUrl: string;
        };
    };
    toJSON(): {
        type: string;
        mbMelganTriton: {
            configPath: string;
            statsPath: string;
            tritonModelName: string;
            tritonUrl: string;
        };
        hifiGan: {
            useGpu: boolean;
            batchSize: string;
            configPath: string;
            modelPath: string;
        };
        hifiGanTriton: {
            configPath: string;
            tritonModelName: string;
            tritonUrl: string;
        };
    };
}
export declare module Mel2Audio { }
export declare class HiFiGan implements GrpcMessage {
    static toBinary(instance: HiFiGan): any;
    static fromBinary(bytes: ByteSource): HiFiGan;
    static refineValues(instance: HiFiGan): void;
    static fromBinaryReader(instance: HiFiGan, reader: BinaryReader): void;
    static toBinaryWriter(instance: HiFiGan, writer: BinaryWriter): void;
    private _useGpu?;
    private _batchSize?;
    private _configPath?;
    private _modelPath?;
    /**
     * Creates an object and applies default Protobuf values
     * @param HiFiGan value
     */
    constructor(value?: RecursivePartial<HiFiGan>);
    get useGpu(): boolean | undefined;
    set useGpu(value: boolean | undefined);
    get batchSize(): string | undefined;
    set batchSize(value: string | undefined);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get modelPath(): string | undefined;
    set modelPath(value: string | undefined);
    toObject(): {
        useGpu: boolean;
        batchSize: string;
        configPath: string;
        modelPath: string;
    };
    toJSON(): {
        useGpu: boolean;
        batchSize: string;
        configPath: string;
        modelPath: string;
    };
}
export declare module HiFiGan { }
export declare class HiFiGanTriton implements GrpcMessage {
    static toBinary(instance: HiFiGanTriton): any;
    static fromBinary(bytes: ByteSource): HiFiGanTriton;
    static refineValues(instance: HiFiGanTriton): void;
    static fromBinaryReader(instance: HiFiGanTriton, reader: BinaryReader): void;
    static toBinaryWriter(instance: HiFiGanTriton, writer: BinaryWriter): void;
    private _configPath?;
    private _tritonModelName?;
    private _tritonUrl?;
    /**
     * Creates an object and applies default Protobuf values
     * @param HiFiGanTriton value
     */
    constructor(value?: RecursivePartial<HiFiGanTriton>);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get tritonModelName(): string | undefined;
    set tritonModelName(value: string | undefined);
    get tritonUrl(): string | undefined;
    set tritonUrl(value: string | undefined);
    toObject(): {
        configPath: string;
        tritonModelName: string;
        tritonUrl: string;
    };
    toJSON(): {
        configPath: string;
        tritonModelName: string;
        tritonUrl: string;
    };
}
export declare module HiFiGanTriton { }
export declare class MbMelganTriton implements GrpcMessage {
    static toBinary(instance: MbMelganTriton): any;
    static fromBinary(bytes: ByteSource): MbMelganTriton;
    static refineValues(instance: MbMelganTriton): void;
    static fromBinaryReader(instance: MbMelganTriton, reader: BinaryReader): void;
    static toBinaryWriter(instance: MbMelganTriton, writer: BinaryWriter): void;
    private _configPath?;
    private _statsPath?;
    private _tritonModelName?;
    private _tritonUrl?;
    /**
     * Creates an object and applies default Protobuf values
     * @param MbMelganTriton value
     */
    constructor(value?: RecursivePartial<MbMelganTriton>);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get statsPath(): string | undefined;
    set statsPath(value: string | undefined);
    get tritonModelName(): string | undefined;
    set tritonModelName(value: string | undefined);
    get tritonUrl(): string | undefined;
    set tritonUrl(value: string | undefined);
    toObject(): {
        configPath: string;
        statsPath: string;
        tritonModelName: string;
        tritonUrl: string;
    };
    toJSON(): {
        configPath: string;
        statsPath: string;
        tritonModelName: string;
        tritonUrl: string;
    };
}
export declare module MbMelganTriton { }
export declare class Caching implements GrpcMessage {
    static toBinary(instance: Caching): any;
    static fromBinary(bytes: ByteSource): Caching;
    static refineValues(instance: Caching): void;
    static fromBinaryReader(instance: Caching, reader: BinaryReader): void;
    static toBinaryWriter(instance: Caching, writer: BinaryWriter): void;
    private _active?;
    private _memoryCacheMaxSize?;
    private _samplingRate?;
    private _loadCache?;
    private _saveCache?;
    private _cacheSaveDir?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Caching value
     */
    constructor(value?: RecursivePartial<Caching>);
    get active(): boolean | undefined;
    set active(value: boolean | undefined);
    get memoryCacheMaxSize(): string | undefined;
    set memoryCacheMaxSize(value: string | undefined);
    get samplingRate(): string | undefined;
    set samplingRate(value: string | undefined);
    get loadCache(): boolean | undefined;
    set loadCache(value: boolean | undefined);
    get saveCache(): boolean | undefined;
    set saveCache(value: boolean | undefined);
    get cacheSaveDir(): string | undefined;
    set cacheSaveDir(value: string | undefined);
    toObject(): {
        active: boolean;
        memoryCacheMaxSize: string;
        samplingRate: string;
        loadCache: boolean;
        saveCache: boolean;
        cacheSaveDir: string;
    };
    toJSON(): {
        active: boolean;
        memoryCacheMaxSize: string;
        samplingRate: string;
        loadCache: boolean;
        saveCache: boolean;
        cacheSaveDir: string;
    };
}
export declare module Caching { }
export declare class Normalization implements GrpcMessage {
    static toBinary(instance: Normalization): any;
    static fromBinary(bytes: ByteSource): Normalization;
    static refineValues(instance: Normalization): void;
    static fromBinaryReader(instance: Normalization, reader: BinaryReader): void;
    static toBinaryWriter(instance: Normalization, writer: BinaryWriter): void;
    private _language?;
    private _pipeline?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Normalization value
     */
    constructor(value?: RecursivePartial<Normalization>);
    get language(): string | undefined;
    set language(value: string | undefined);
    get pipeline(): string[] | undefined;
    set pipeline(value: string[] | undefined);
    toObject(): {
        language: string;
        pipeline: string[];
    };
    toJSON(): {
        language: string;
        pipeline: string[];
    };
}
export declare module Normalization { }
export declare class Postprocessing implements GrpcMessage {
    static toBinary(instance: Postprocessing): any;
    static fromBinary(bytes: ByteSource): Postprocessing;
    static refineValues(instance: Postprocessing): void;
    static fromBinaryReader(instance: Postprocessing, reader: BinaryReader): void;
    static toBinaryWriter(instance: Postprocessing, writer: BinaryWriter): void;
    private _silenceSecs?;
    private _pipeline?;
    private _logmmse?;
    private _wiener?;
    private _apodization?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Postprocessing value
     */
    constructor(value?: RecursivePartial<Postprocessing>);
    get silenceSecs(): number | undefined;
    set silenceSecs(value: number | undefined);
    get pipeline(): string[] | undefined;
    set pipeline(value: string[] | undefined);
    get logmmse(): Logmnse | undefined;
    set logmmse(value: Logmnse | undefined);
    get wiener(): Wiener | undefined;
    set wiener(value: Wiener | undefined);
    get apodization(): Apodization | undefined;
    set apodization(value: Apodization | undefined);
    toObject(): {
        silenceSecs: number;
        pipeline: string[];
        logmmse: {
            initialNoise: string;
            windowSize: string;
            noiseThreshold: number;
        };
        wiener: {
            frameLen: string;
            lpcOrder: string;
            iterations: string;
            alpha: number;
            thresh: number;
        };
        apodization: {
            apodizationSecs: number;
        };
    };
    toJSON(): {
        silenceSecs: number;
        pipeline: string[];
        logmmse: {
            initialNoise: string;
            windowSize: string;
            noiseThreshold: number;
        };
        wiener: {
            frameLen: string;
            lpcOrder: string;
            iterations: string;
            alpha: number;
            thresh: number;
        };
        apodization: {
            apodizationSecs: number;
        };
    };
}
export declare module Postprocessing { }
export declare class Logmnse implements GrpcMessage {
    static toBinary(instance: Logmnse): any;
    static fromBinary(bytes: ByteSource): Logmnse;
    static refineValues(instance: Logmnse): void;
    static fromBinaryReader(instance: Logmnse, reader: BinaryReader): void;
    static toBinaryWriter(instance: Logmnse, writer: BinaryWriter): void;
    private _initialNoise?;
    private _windowSize?;
    private _noiseThreshold?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Logmnse value
     */
    constructor(value?: RecursivePartial<Logmnse>);
    get initialNoise(): string | undefined;
    set initialNoise(value: string | undefined);
    get windowSize(): string | undefined;
    set windowSize(value: string | undefined);
    get noiseThreshold(): number | undefined;
    set noiseThreshold(value: number | undefined);
    toObject(): {
        initialNoise: string;
        windowSize: string;
        noiseThreshold: number;
    };
    toJSON(): {
        initialNoise: string;
        windowSize: string;
        noiseThreshold: number;
    };
}
export declare module Logmnse { }
export declare class Wiener implements GrpcMessage {
    static toBinary(instance: Wiener): any;
    static fromBinary(bytes: ByteSource): Wiener;
    static refineValues(instance: Wiener): void;
    static fromBinaryReader(instance: Wiener, reader: BinaryReader): void;
    static toBinaryWriter(instance: Wiener, writer: BinaryWriter): void;
    private _frameLen?;
    private _lpcOrder?;
    private _iterations?;
    private _alpha?;
    private _thresh?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Wiener value
     */
    constructor(value?: RecursivePartial<Wiener>);
    get frameLen(): string | undefined;
    set frameLen(value: string | undefined);
    get lpcOrder(): string | undefined;
    set lpcOrder(value: string | undefined);
    get iterations(): string | undefined;
    set iterations(value: string | undefined);
    get alpha(): number | undefined;
    set alpha(value: number | undefined);
    get thresh(): number | undefined;
    set thresh(value: number | undefined);
    toObject(): {
        frameLen: string;
        lpcOrder: string;
        iterations: string;
        alpha: number;
        thresh: number;
    };
    toJSON(): {
        frameLen: string;
        lpcOrder: string;
        iterations: string;
        alpha: number;
        thresh: number;
    };
}
export declare module Wiener { }
export declare class Apodization implements GrpcMessage {
    static toBinary(instance: Apodization): any;
    static fromBinary(bytes: ByteSource): Apodization;
    static refineValues(instance: Apodization): void;
    static fromBinaryReader(instance: Apodization, reader: BinaryReader): void;
    static toBinaryWriter(instance: Apodization, writer: BinaryWriter): void;
    private _apodizationSecs?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Apodization value
     */
    constructor(value?: RecursivePartial<Apodization>);
    get apodizationSecs(): number | undefined;
    set apodizationSecs(value: number | undefined);
    toObject(): {
        apodizationSecs: number;
    };
    toJSON(): {
        apodizationSecs: number;
    };
}
export declare module Apodization { }

import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class Empty implements GrpcMessage {
    static toBinary(instance: Empty): any;
    static fromBinary(bytes: ByteSource): Empty;
    static refineValues(instance: Empty): void;
    static fromBinaryReader(instance: Empty, reader: BinaryReader): void;
    static toBinaryWriter(instance: Empty, writer: BinaryWriter): void;
    /**
     * Creates an object and applies default Protobuf values
     * @param Empty value
     */
    constructor(value?: RecursivePartial<Empty>);
    toObject(): {};
    toJSON(): {};
}
export declare module Empty { }

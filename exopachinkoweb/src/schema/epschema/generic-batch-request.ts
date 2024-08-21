// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { GenericBinaryWrapper } from '../epschema/generic-binary-wrapper.js';


export class GenericBatchRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GenericBatchRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGenericBatchRequest(bb:flatbuffers.ByteBuffer, obj?:GenericBatchRequest):GenericBatchRequest {
  return (obj || new GenericBatchRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGenericBatchRequest(bb:flatbuffers.ByteBuffer, obj?:GenericBatchRequest):GenericBatchRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GenericBatchRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

sessionId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

messages(index: number, obj?:GenericBinaryWrapper):GenericBinaryWrapper|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new GenericBinaryWrapper()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

messagesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startGenericBatchRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addSessionId(builder:flatbuffers.Builder, sessionId:number) {
  builder.addFieldInt32(0, sessionId, 0);
}

static addMessages(builder:flatbuffers.Builder, messagesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, messagesOffset, 0);
}

static createMessagesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startMessagesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endGenericBatchRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGenericBatchRequest(builder:flatbuffers.Builder, sessionId:number, messagesOffset:flatbuffers.Offset):flatbuffers.Offset {
  GenericBatchRequest.startGenericBatchRequest(builder);
  GenericBatchRequest.addSessionId(builder, sessionId);
  GenericBatchRequest.addMessages(builder, messagesOffset);
  return GenericBatchRequest.endGenericBatchRequest(builder);
}
}

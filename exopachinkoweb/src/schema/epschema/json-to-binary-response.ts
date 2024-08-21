// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class JsonToBinaryResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):JsonToBinaryResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsJsonToBinaryResponse(bb:flatbuffers.ByteBuffer, obj?:JsonToBinaryResponse):JsonToBinaryResponse {
  return (obj || new JsonToBinaryResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsJsonToBinaryResponse(bb:flatbuffers.ByteBuffer, obj?:JsonToBinaryResponse):JsonToBinaryResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new JsonToBinaryResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

sessionId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

json(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

jsonLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

jsonArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startJsonToBinaryResponse(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addSessionId(builder:flatbuffers.Builder, sessionId:number) {
  builder.addFieldInt32(0, sessionId, 0);
}

static addJson(builder:flatbuffers.Builder, jsonOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, jsonOffset, 0);
}

static createJsonVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startJsonVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static endJsonToBinaryResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createJsonToBinaryResponse(builder:flatbuffers.Builder, sessionId:number, jsonOffset:flatbuffers.Offset):flatbuffers.Offset {
  JsonToBinaryResponse.startJsonToBinaryResponse(builder);
  JsonToBinaryResponse.addSessionId(builder, sessionId);
  JsonToBinaryResponse.addJson(builder, jsonOffset);
  return JsonToBinaryResponse.endJsonToBinaryResponse(builder);
}
}
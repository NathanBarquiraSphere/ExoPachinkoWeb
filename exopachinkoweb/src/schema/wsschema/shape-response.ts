// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ShapeResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ShapeResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsShapeResponse(bb:flatbuffers.ByteBuffer, obj?:ShapeResponse):ShapeResponse {
  return (obj || new ShapeResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsShapeResponse(bb:flatbuffers.ByteBuffer, obj?:ShapeResponse):ShapeResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ShapeResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

sessionId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

playerScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startShapeResponse(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addSessionId(builder:flatbuffers.Builder, sessionId:number) {
  builder.addFieldInt32(0, sessionId, 0);
}

static addPlayerScore(builder:flatbuffers.Builder, playerScore:number) {
  builder.addFieldInt32(1, playerScore, 0);
}

static endShapeResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createShapeResponse(builder:flatbuffers.Builder, sessionId:number, playerScore:number):flatbuffers.Offset {
  ShapeResponse.startShapeResponse(builder);
  ShapeResponse.addSessionId(builder, sessionId);
  ShapeResponse.addPlayerScore(builder, playerScore);
  return ShapeResponse.endShapeResponse(builder);
}
}

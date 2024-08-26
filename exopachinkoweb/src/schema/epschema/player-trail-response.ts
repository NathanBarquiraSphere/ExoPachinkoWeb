// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class PlayerTrailResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PlayerTrailResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPlayerTrailResponse(bb:flatbuffers.ByteBuffer, obj?:PlayerTrailResponse):PlayerTrailResponse {
  return (obj || new PlayerTrailResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPlayerTrailResponse(bb:flatbuffers.ByteBuffer, obj?:PlayerTrailResponse):PlayerTrailResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerTrailResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

sessionId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

showTrail():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startPlayerTrailResponse(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addSessionId(builder:flatbuffers.Builder, sessionId:number) {
  builder.addFieldInt32(0, sessionId, 0);
}

static addShowTrail(builder:flatbuffers.Builder, showTrail:boolean) {
  builder.addFieldInt8(1, +showTrail, +false);
}

static endPlayerTrailResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPlayerTrailResponse(builder:flatbuffers.Builder, sessionId:number, showTrail:boolean):flatbuffers.Offset {
  PlayerTrailResponse.startPlayerTrailResponse(builder);
  PlayerTrailResponse.addSessionId(builder, sessionId);
  PlayerTrailResponse.addShowTrail(builder, showTrail);
  return PlayerTrailResponse.endPlayerTrailResponse(builder);
}
}

// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ZoneRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ZoneRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsZoneRequest(bb:flatbuffers.ByteBuffer, obj?:ZoneRequest):ZoneRequest {
  return (obj || new ZoneRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsZoneRequest(bb:flatbuffers.ByteBuffer, obj?:ZoneRequest):ZoneRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ZoneRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

sessionId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

zoneId():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startZoneRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addSessionId(builder:flatbuffers.Builder, sessionId:number) {
  builder.addFieldInt32(0, sessionId, 0);
}

static addZoneId(builder:flatbuffers.Builder, zoneId:number) {
  builder.addFieldInt32(1, zoneId, 0);
}

static endZoneRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createZoneRequest(builder:flatbuffers.Builder, sessionId:number, zoneId:number):flatbuffers.Offset {
  ZoneRequest.startZoneRequest(builder);
  ZoneRequest.addSessionId(builder, sessionId);
  ZoneRequest.addZoneId(builder, zoneId);
  return ZoneRequest.endZoneRequest(builder);
}
}

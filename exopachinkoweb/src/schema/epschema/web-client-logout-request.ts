// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class WebClientLogoutRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):WebClientLogoutRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsWebClientLogoutRequest(bb:flatbuffers.ByteBuffer, obj?:WebClientLogoutRequest):WebClientLogoutRequest {
  return (obj || new WebClientLogoutRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsWebClientLogoutRequest(bb:flatbuffers.ByteBuffer, obj?:WebClientLogoutRequest):WebClientLogoutRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new WebClientLogoutRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

webClientSessionId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startWebClientLogoutRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addWebClientSessionId(builder:flatbuffers.Builder, webClientSessionId:number) {
  builder.addFieldInt32(0, webClientSessionId, 0);
}

static endWebClientLogoutRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createWebClientLogoutRequest(builder:flatbuffers.Builder, webClientSessionId:number):flatbuffers.Offset {
  WebClientLogoutRequest.startWebClientLogoutRequest(builder);
  WebClientLogoutRequest.addWebClientSessionId(builder, webClientSessionId);
  return WebClientLogoutRequest.endWebClientLogoutRequest(builder);
}
}
"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingMediaPlaneRequest = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var PingMediaPlaneRequest = /** @class */ (function () {
    function PingMediaPlaneRequest() {
        this.bb = null;
        this.bb_pos = 0;
    }
    PingMediaPlaneRequest.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    PingMediaPlaneRequest.getRootAsPingMediaPlaneRequest = function (bb, obj) {
        return (obj || new PingMediaPlaneRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    PingMediaPlaneRequest.getSizePrefixedRootAsPingMediaPlaneRequest = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PingMediaPlaneRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    PingMediaPlaneRequest.prototype.sessionId = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    PingMediaPlaneRequest.prototype.sent = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
    };
    PingMediaPlaneRequest.prototype.sentLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    PingMediaPlaneRequest.prototype.sentArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    PingMediaPlaneRequest.startPingMediaPlaneRequest = function (builder) {
        builder.startObject(2);
    };
    PingMediaPlaneRequest.addSessionId = function (builder, sessionId) {
        builder.addFieldInt32(0, sessionId, 0);
    };
    PingMediaPlaneRequest.addSent = function (builder, sentOffset) {
        builder.addFieldOffset(1, sentOffset, 0);
    };
    PingMediaPlaneRequest.createSentVector = function (builder, data) {
        builder.startVector(1, data.length, 1);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt8(data[i]);
        }
        return builder.endVector();
    };
    PingMediaPlaneRequest.startSentVector = function (builder, numElems) {
        builder.startVector(1, numElems, 1);
    };
    PingMediaPlaneRequest.endPingMediaPlaneRequest = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    PingMediaPlaneRequest.createPingMediaPlaneRequest = function (builder, sessionId, sentOffset) {
        PingMediaPlaneRequest.startPingMediaPlaneRequest(builder);
        PingMediaPlaneRequest.addSessionId(builder, sessionId);
        PingMediaPlaneRequest.addSent(builder, sentOffset);
        return PingMediaPlaneRequest.endPingMediaPlaneRequest(builder);
    };
    return PingMediaPlaneRequest;
}());
exports.PingMediaPlaneRequest = PingMediaPlaneRequest;
//# sourceMappingURL=ping-media-plane-request.js.map
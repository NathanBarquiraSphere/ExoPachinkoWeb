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
exports.PlayerTrailRequest = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var PlayerTrailRequest = /** @class */ (function () {
    function PlayerTrailRequest() {
        this.bb = null;
        this.bb_pos = 0;
    }
    PlayerTrailRequest.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    PlayerTrailRequest.getRootAsPlayerTrailRequest = function (bb, obj) {
        return (obj || new PlayerTrailRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    PlayerTrailRequest.getSizePrefixedRootAsPlayerTrailRequest = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerTrailRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    PlayerTrailRequest.prototype.sessionId = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    PlayerTrailRequest.prototype.showTrail = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    PlayerTrailRequest.startPlayerTrailRequest = function (builder) {
        builder.startObject(2);
    };
    PlayerTrailRequest.addSessionId = function (builder, sessionId) {
        builder.addFieldInt32(0, sessionId, 0);
    };
    PlayerTrailRequest.addShowTrail = function (builder, showTrail) {
        builder.addFieldInt8(1, +showTrail, +false);
    };
    PlayerTrailRequest.endPlayerTrailRequest = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    PlayerTrailRequest.createPlayerTrailRequest = function (builder, sessionId, showTrail) {
        PlayerTrailRequest.startPlayerTrailRequest(builder);
        PlayerTrailRequest.addSessionId(builder, sessionId);
        PlayerTrailRequest.addShowTrail(builder, showTrail);
        return PlayerTrailRequest.endPlayerTrailRequest(builder);
    };
    return PlayerTrailRequest;
}());
exports.PlayerTrailRequest = PlayerTrailRequest;
//# sourceMappingURL=player-trail-request.js.map
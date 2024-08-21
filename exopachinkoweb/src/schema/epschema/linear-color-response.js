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
exports.LinearColorResponse = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var linear_color_js_1 = require("../epschema/linear-color.js");
var LinearColorResponse = /** @class */ (function () {
    function LinearColorResponse() {
        this.bb = null;
        this.bb_pos = 0;
    }
    LinearColorResponse.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    LinearColorResponse.getRootAsLinearColorResponse = function (bb, obj) {
        return (obj || new LinearColorResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    LinearColorResponse.getSizePrefixedRootAsLinearColorResponse = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new LinearColorResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    LinearColorResponse.prototype.sessionId = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    LinearColorResponse.prototype.linearColor = function (obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new linear_color_js_1.LinearColor()).__init(this.bb_pos + offset, this.bb) : null;
    };
    LinearColorResponse.startLinearColorResponse = function (builder) {
        builder.startObject(2);
    };
    LinearColorResponse.addSessionId = function (builder, sessionId) {
        builder.addFieldInt32(0, sessionId, 0);
    };
    LinearColorResponse.addLinearColor = function (builder, linearColorOffset) {
        builder.addFieldStruct(1, linearColorOffset, 0);
    };
    LinearColorResponse.endLinearColorResponse = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    return LinearColorResponse;
}());
exports.LinearColorResponse = LinearColorResponse;
//# sourceMappingURL=linear-color-response.js.map
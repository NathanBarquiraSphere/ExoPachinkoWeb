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
exports.ClientLoginResponse = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var ClientLoginResponse = /** @class */ (function () {
    function ClientLoginResponse() {
        this.bb = null;
        this.bb_pos = 0;
    }
    ClientLoginResponse.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    ClientLoginResponse.getRootAsClientLoginResponse = function (bb, obj) {
        return (obj || new ClientLoginResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    ClientLoginResponse.getSizePrefixedRootAsClientLoginResponse = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ClientLoginResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    ClientLoginResponse.prototype.assignedSessionId = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    ClientLoginResponse.startClientLoginResponse = function (builder) {
        builder.startObject(1);
    };
    ClientLoginResponse.addAssignedSessionId = function (builder, assignedSessionId) {
        builder.addFieldInt32(0, assignedSessionId, 0);
    };
    ClientLoginResponse.endClientLoginResponse = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    ClientLoginResponse.createClientLoginResponse = function (builder, assignedSessionId) {
        ClientLoginResponse.startClientLoginResponse(builder);
        ClientLoginResponse.addAssignedSessionId(builder, assignedSessionId);
        return ClientLoginResponse.endClientLoginResponse(builder);
    };
    return ClientLoginResponse;
}());
exports.ClientLoginResponse = ClientLoginResponse;
//# sourceMappingURL=client-login-response.js.map
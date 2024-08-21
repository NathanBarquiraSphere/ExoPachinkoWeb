"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
exports.unionToMessage = unionToMessage;
exports.unionListToMessage = unionListToMessage;
var client_login_response_js_1 = require("../epschema/client-login-response.js");
var generic_batch_request_js_1 = require("../epschema/generic-batch-request.js");
var generic_batch_response_js_1 = require("../epschema/generic-batch-response.js");
var json_to_binary_request_js_1 = require("../epschema/json-to-binary-request.js");
var json_to_binary_response_js_1 = require("../epschema/json-to-binary-response.js");
var linear_color_request_js_1 = require("../epschema/linear-color-request.js");
var linear_color_response_js_1 = require("../epschema/linear-color-response.js");
var media_plane_login_request_js_1 = require("../epschema/media-plane-login-request.js");
var mobile_to_media_plane_login_request_js_1 = require("../epschema/mobile-to-media-plane-login-request.js");
var mobile_to_media_plane_logout_request_js_1 = require("../epschema/mobile-to-media-plane-logout-request.js");
var ping_media_plane_request_js_1 = require("../epschema/ping-media-plane-request.js");
var ping_media_plane_response_js_1 = require("../epschema/ping-media-plane-response.js");
var ping_media_plane_unreliable_request_js_1 = require("../epschema/ping-media-plane-unreliable-request.js");
var ping_media_plane_unreliable_response_js_1 = require("../epschema/ping-media-plane-unreliable-response.js");
var ping_server_request_js_1 = require("../epschema/ping-server-request.js");
var ping_server_response_js_1 = require("../epschema/ping-server-response.js");
var ping_server_unreliable_request_js_1 = require("../epschema/ping-server-unreliable-request.js");
var ping_server_unreliable_response_js_1 = require("../epschema/ping-server-unreliable-response.js");
var repeater_binary_response_js_1 = require("../epschema/repeater-binary-response.js");
var repeater_broadcast_binary_response_js_1 = require("../epschema/repeater-broadcast-binary-response.js");
var repeater_login_request_js_1 = require("../epschema/repeater-login-request.js");
var web_client_login_request_js_1 = require("../epschema/web-client-login-request.js");
var web_client_login_response_js_1 = require("../epschema/web-client-login-response.js");
var web_client_logout_request_js_1 = require("../epschema/web-client-logout-request.js");
var Message;
(function (Message) {
    Message[Message["NONE"] = 0] = "NONE";
    Message[Message["PingServerRequest"] = 1] = "PingServerRequest";
    Message[Message["PingServerResponse"] = 2] = "PingServerResponse";
    Message[Message["PingServerUnreliableRequest"] = 3] = "PingServerUnreliableRequest";
    Message[Message["PingServerUnreliableResponse"] = 4] = "PingServerUnreliableResponse";
    Message[Message["PingMediaPlaneRequest"] = 5] = "PingMediaPlaneRequest";
    Message[Message["PingMediaPlaneResponse"] = 6] = "PingMediaPlaneResponse";
    Message[Message["PingMediaPlaneUnreliableRequest"] = 7] = "PingMediaPlaneUnreliableRequest";
    Message[Message["PingMediaPlaneUnreliableResponse"] = 8] = "PingMediaPlaneUnreliableResponse";
    Message[Message["ClientLoginResponse"] = 9] = "ClientLoginResponse";
    Message[Message["MediaPlaneLoginRequest"] = 10] = "MediaPlaneLoginRequest";
    Message[Message["MobileToMediaPlaneLoginRequest"] = 11] = "MobileToMediaPlaneLoginRequest";
    Message[Message["MobileToMediaPlaneLogoutRequest"] = 12] = "MobileToMediaPlaneLogoutRequest";
    Message[Message["JsonToBinaryRequest"] = 13] = "JsonToBinaryRequest";
    Message[Message["JsonToBinaryResponse"] = 14] = "JsonToBinaryResponse";
    Message[Message["RepeaterLoginRequest"] = 15] = "RepeaterLoginRequest";
    Message[Message["WebClientLoginRequest"] = 16] = "WebClientLoginRequest";
    Message[Message["WebClientLoginResponse"] = 17] = "WebClientLoginResponse";
    Message[Message["WebClientLogoutRequest"] = 18] = "WebClientLogoutRequest";
    Message[Message["RepeaterBinaryResponse"] = 19] = "RepeaterBinaryResponse";
    Message[Message["RepeaterBroadcastBinaryResponse"] = 20] = "RepeaterBroadcastBinaryResponse";
    Message[Message["GenericBatchRequest"] = 21] = "GenericBatchRequest";
    Message[Message["GenericBatchResponse"] = 22] = "GenericBatchResponse";
    Message[Message["LinearColorRequest"] = 23] = "LinearColorRequest";
    Message[Message["LinearColorResponse"] = 24] = "LinearColorResponse";
})(Message || (exports.Message = Message = {}));
function unionToMessage(type, accessor) {
    switch (Message[type]) {
        case 'NONE': return null;
        case 'PingServerRequest': return accessor(new ping_server_request_js_1.PingServerRequest());
        case 'PingServerResponse': return accessor(new ping_server_response_js_1.PingServerResponse());
        case 'PingServerUnreliableRequest': return accessor(new ping_server_unreliable_request_js_1.PingServerUnreliableRequest());
        case 'PingServerUnreliableResponse': return accessor(new ping_server_unreliable_response_js_1.PingServerUnreliableResponse());
        case 'PingMediaPlaneRequest': return accessor(new ping_media_plane_request_js_1.PingMediaPlaneRequest());
        case 'PingMediaPlaneResponse': return accessor(new ping_media_plane_response_js_1.PingMediaPlaneResponse());
        case 'PingMediaPlaneUnreliableRequest': return accessor(new ping_media_plane_unreliable_request_js_1.PingMediaPlaneUnreliableRequest());
        case 'PingMediaPlaneUnreliableResponse': return accessor(new ping_media_plane_unreliable_response_js_1.PingMediaPlaneUnreliableResponse());
        case 'ClientLoginResponse': return accessor(new client_login_response_js_1.ClientLoginResponse());
        case 'MediaPlaneLoginRequest': return accessor(new media_plane_login_request_js_1.MediaPlaneLoginRequest());
        case 'MobileToMediaPlaneLoginRequest': return accessor(new mobile_to_media_plane_login_request_js_1.MobileToMediaPlaneLoginRequest());
        case 'MobileToMediaPlaneLogoutRequest': return accessor(new mobile_to_media_plane_logout_request_js_1.MobileToMediaPlaneLogoutRequest());
        case 'JsonToBinaryRequest': return accessor(new json_to_binary_request_js_1.JsonToBinaryRequest());
        case 'JsonToBinaryResponse': return accessor(new json_to_binary_response_js_1.JsonToBinaryResponse());
        case 'RepeaterLoginRequest': return accessor(new repeater_login_request_js_1.RepeaterLoginRequest());
        case 'WebClientLoginRequest': return accessor(new web_client_login_request_js_1.WebClientLoginRequest());
        case 'WebClientLoginResponse': return accessor(new web_client_login_response_js_1.WebClientLoginResponse());
        case 'WebClientLogoutRequest': return accessor(new web_client_logout_request_js_1.WebClientLogoutRequest());
        case 'RepeaterBinaryResponse': return accessor(new repeater_binary_response_js_1.RepeaterBinaryResponse());
        case 'RepeaterBroadcastBinaryResponse': return accessor(new repeater_broadcast_binary_response_js_1.RepeaterBroadcastBinaryResponse());
        case 'GenericBatchRequest': return accessor(new generic_batch_request_js_1.GenericBatchRequest());
        case 'GenericBatchResponse': return accessor(new generic_batch_response_js_1.GenericBatchResponse());
        case 'LinearColorRequest': return accessor(new linear_color_request_js_1.LinearColorRequest());
        case 'LinearColorResponse': return accessor(new linear_color_response_js_1.LinearColorResponse());
        default: return null;
    }
}
function unionListToMessage(type, accessor, index) {
    switch (Message[type]) {
        case 'NONE': return null;
        case 'PingServerRequest': return accessor(index, new ping_server_request_js_1.PingServerRequest());
        case 'PingServerResponse': return accessor(index, new ping_server_response_js_1.PingServerResponse());
        case 'PingServerUnreliableRequest': return accessor(index, new ping_server_unreliable_request_js_1.PingServerUnreliableRequest());
        case 'PingServerUnreliableResponse': return accessor(index, new ping_server_unreliable_response_js_1.PingServerUnreliableResponse());
        case 'PingMediaPlaneRequest': return accessor(index, new ping_media_plane_request_js_1.PingMediaPlaneRequest());
        case 'PingMediaPlaneResponse': return accessor(index, new ping_media_plane_response_js_1.PingMediaPlaneResponse());
        case 'PingMediaPlaneUnreliableRequest': return accessor(index, new ping_media_plane_unreliable_request_js_1.PingMediaPlaneUnreliableRequest());
        case 'PingMediaPlaneUnreliableResponse': return accessor(index, new ping_media_plane_unreliable_response_js_1.PingMediaPlaneUnreliableResponse());
        case 'ClientLoginResponse': return accessor(index, new client_login_response_js_1.ClientLoginResponse());
        case 'MediaPlaneLoginRequest': return accessor(index, new media_plane_login_request_js_1.MediaPlaneLoginRequest());
        case 'MobileToMediaPlaneLoginRequest': return accessor(index, new mobile_to_media_plane_login_request_js_1.MobileToMediaPlaneLoginRequest());
        case 'MobileToMediaPlaneLogoutRequest': return accessor(index, new mobile_to_media_plane_logout_request_js_1.MobileToMediaPlaneLogoutRequest());
        case 'JsonToBinaryRequest': return accessor(index, new json_to_binary_request_js_1.JsonToBinaryRequest());
        case 'JsonToBinaryResponse': return accessor(index, new json_to_binary_response_js_1.JsonToBinaryResponse());
        case 'RepeaterLoginRequest': return accessor(index, new repeater_login_request_js_1.RepeaterLoginRequest());
        case 'WebClientLoginRequest': return accessor(index, new web_client_login_request_js_1.WebClientLoginRequest());
        case 'WebClientLoginResponse': return accessor(index, new web_client_login_response_js_1.WebClientLoginResponse());
        case 'WebClientLogoutRequest': return accessor(index, new web_client_logout_request_js_1.WebClientLogoutRequest());
        case 'RepeaterBinaryResponse': return accessor(index, new repeater_binary_response_js_1.RepeaterBinaryResponse());
        case 'RepeaterBroadcastBinaryResponse': return accessor(index, new repeater_broadcast_binary_response_js_1.RepeaterBroadcastBinaryResponse());
        case 'GenericBatchRequest': return accessor(index, new generic_batch_request_js_1.GenericBatchRequest());
        case 'GenericBatchResponse': return accessor(index, new generic_batch_response_js_1.GenericBatchResponse());
        case 'LinearColorRequest': return accessor(index, new linear_color_request_js_1.LinearColorRequest());
        case 'LinearColorResponse': return accessor(index, new linear_color_response_js_1.LinearColorResponse());
        default: return null;
    }
}
//# sourceMappingURL=message.js.map
import * as flatbuffers from 'flatbuffers';
import { TypeWrapper } from '../schema/epschema/type-wrapper';
import { Message } from '../schema/epschema/message';
import { BaseNetworkingManager } from './BaseNetworkingManager'
import { LinearColorRequest } from '../schema/epschema/linear-color-request';
import { LinearColorResponse } from '../schema/epschema/linear-color-response';
import { LinearColor } from '../schema/epschema/linear-color';
import { LinearColorObject } from '../objects/LinearColorObject';
import { UseEmissiveRequest } from '../schema/epschema/use-emissive-request';
import { PlayerTrailRequest } from '../schema/epschema/player-trail-request';
import { TrailLengthRequest } from '../schema/epschema/trail-length-request';
import { UseEmissiveResponse } from '../schema/epschema/use-emissive-response';
import { PlayerTrailResponse } from '../schema/epschema/player-trail-response';
import { TrailLengthResponse } from '../schema/epschema/trail-length-response';


// similar to ENET client overrides.
// just create the senders / message handlers here.
export class NetworkingManager extends BaseNetworkingManager {


    // START SENDERS
    sendLinearColorRequest(inLinearColor: LinearColorObject): void
    {
        const builder = new flatbuffers.Builder(256);

        const linearColorOffset = LinearColor.createLinearColor(builder, inLinearColor.red, inLinearColor.green, inLinearColor.blue, inLinearColor.alpha);

        LinearColorRequest.startLinearColorRequest(builder);
        LinearColorRequest.addLinearColor(builder, linearColorOffset);
        LinearColorRequest.addSessionId(builder, this.sessionId);
        const linearColorRequest = LinearColorRequest.endLinearColorRequest(builder);

        TypeWrapper.startTypeWrapper(builder);
        TypeWrapper.addMessageType(builder, Message.LinearColorRequest);
        TypeWrapper.addMessage(builder, linearColorRequest);
        const typeWrapper = TypeWrapper.endTypeWrapper(builder);

        builder.finish(typeWrapper);

        const buf = builder.asUint8Array();

        this.socket?.send(buf);
    }
    sendUseEmissiveRequest(inUseEmissive: boolean): void
    {
        const builder = new flatbuffers.Builder(256);

        UseEmissiveRequest.startUseEmissiveRequest(builder);
        UseEmissiveRequest.addUseEmissive(builder, inUseEmissive);
        UseEmissiveRequest.addSessionId(builder, this.sessionId);
        const builtUseEmissiveRequest = UseEmissiveRequest.endUseEmissiveRequest(builder);

        TypeWrapper.startTypeWrapper(builder);
        TypeWrapper.addMessageType(builder, Message.UseEmissiveRequest);
        TypeWrapper.addMessage(builder, builtUseEmissiveRequest);
        const typeWrapper = TypeWrapper.endTypeWrapper(builder);

        builder.finish(typeWrapper);

        const buf = builder.asUint8Array();

        this.socket?.send(buf);
    }
    sendPlayerTrailRequest(inShowTrail: boolean): void
    {
        const builder = new flatbuffers.Builder(256);

        PlayerTrailRequest.startPlayerTrailRequest(builder);
        PlayerTrailRequest.addShowTrail(builder, inShowTrail);
        PlayerTrailRequest.addSessionId(builder, this.sessionId);
        const builtPlayerTrailRequest = PlayerTrailRequest.endPlayerTrailRequest(builder);

        TypeWrapper.startTypeWrapper(builder);
        TypeWrapper.addMessageType(builder, Message.PlayerTrailRequest);
        TypeWrapper.addMessage(builder, builtPlayerTrailRequest);
        const typeWrapper = TypeWrapper.endTypeWrapper(builder);

        builder.finish(typeWrapper);

        const buf = builder.asUint8Array();

        this.socket?.send(buf);
    }
    sendTrailLengthRequest(inLength: number): void
    {
        const builder = new flatbuffers.Builder(256);

        TrailLengthRequest.startTrailLengthRequest(builder);
        TrailLengthRequest.addLength(builder, inLength);
        TrailLengthRequest.addSessionId(builder, this.sessionId);
        const builtTrailLengthRequest = TrailLengthRequest.endTrailLengthRequest(builder);

        TypeWrapper.startTypeWrapper(builder);
        TypeWrapper.addMessageType(builder, Message.TrailLengthRequest);
        TypeWrapper.addMessage(builder, builtTrailLengthRequest);
        const typeWrapper = TypeWrapper.endTypeWrapper(builder);

        builder.finish(typeWrapper);

        const buf = builder.asUint8Array();

        this.socket?.send(buf);
    }
    // END SENDERS

    

    // START MESSAGE HANDLERS:
    protected handleLinearColorResponse(typeWrapper: TypeWrapper): void
    {
        console.log('received linear color response');

        const linearColorResponse = new LinearColorResponse();
        typeWrapper.message(linearColorResponse);

        const linearColorFlatbuffer = linearColorResponse.linearColor();
        if (!linearColorFlatbuffer) return;

        const outLinearColor: LinearColorObject = {
            red: linearColorFlatbuffer.red(), 
            green: linearColorFlatbuffer.green(),
            blue: linearColorFlatbuffer.blue(),
            alpha: linearColorFlatbuffer.alpha()
        };

        this.emit(Message.LinearColorResponse.toString(), outLinearColor);
    }
    protected handleUseEmissiveRequest(typeWrapper: TypeWrapper): void
    {
        console.log('received use emissive response')

        const useEmissiveResponse = new UseEmissiveResponse();
        typeWrapper.message(useEmissiveResponse);

        const shouldUseEmissive = useEmissiveResponse.useEmissive();

        this.emit(Message.LinearColorResponse.toString(), shouldUseEmissive);
    }
    protected handlePlayerTrailResponse(typeWrapper: TypeWrapper): void
    {
        console.log('received player trail response')

        const playerTrailResponse = new PlayerTrailResponse();
        typeWrapper.message(playerTrailResponse);

        const shouldShowTrail = playerTrailResponse.showTrail();

        this.emit(Message.LinearColorResponse.toString(), shouldShowTrail);
    }
    protected handleTrailLengthResponse(typeWrapper: TypeWrapper): void
    {
        console.log('received trail length response')

        const trailLengthResponse = new TrailLengthResponse();
        typeWrapper.message(trailLengthResponse);

        const trailLength = trailLengthResponse.length();

        this.emit(Message.LinearColorResponse.toString(), trailLength);
    }
    // END MESSAGE HANDLERS



    // START BASE CLASS OVERRIDE
    protected handleBinaryMessage(data: ArrayBuffer): void
    {
        console.log('Received binary message: ', data);
        const myBuf = new Uint8Array(data);
        const buf = new flatbuffers.ByteBuffer(myBuf);

        const root = TypeWrapper.getRootAsTypeWrapper(buf);
        const messageType = root.messageType();
        console.log('message type = ', messageType);

        switch (messageType)
        {
            case Message.LinearColorResponse:
            {
                this.handleLinearColorResponse(root);
                break;
            }
            case Message.TrailLengthResponse:
            {
                this.handleTrailLengthResponse(root);
                break;
            }
            case Message.UseEmissiveResponse:
            {
                this.handleUseEmissiveRequest(root);
                break;
            }
            case Message.PlayerTrailResponse:
            {
                this.handlePlayerTrailResponse(root);
                break;
            }
            default:
            {
                super.handleBinaryMessage(data);
            }
        }
    }

    protected handleStringMessage(data: string)
    {
        console.log('Received string message: ', data);

        const obj = JSON.parse(data);
        if (obj.type === "team")
        {
            console.log("received team message");
        }
        else
        {
            super.handleStringMessage(data);
        }
    };
    // END BASE CLASS OVERIDE
}
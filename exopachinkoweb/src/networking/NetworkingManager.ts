import * as flatbuffers from 'flatbuffers';
import { TypeWrapper } from '../schema/epschema/type-wrapper';
import { Message } from '../schema/epschema/message';
import { BaseNetworkingManager } from './BaseNetworkingManager'
import { LinearColorRequest } from '../schema/epschema/linear-color-request';
import { LinearColorResponse } from '../schema/epschema/linear-color-response';
import { LinearColor } from '../schema/epschema/linear-color';
import { LinearColorObject } from '../objects/LinearColorObject';

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
        TypeWrapper.addMessageType(builder, Message.PingServerRequest);
        TypeWrapper.addMessage(builder, linearColorRequest);
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

        this.emit(Message.LinearColorResponse, outLinearColor);
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
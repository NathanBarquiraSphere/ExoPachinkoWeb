import React, { useState, useEffect, useRef } from "react";
import { NetworkingManager } from "./../networking/NetworkingManager";
import { Message } from "../schema/epschema/message";


interface ZoneChoiceComponentProps {
    inNetworkingManager: NetworkingManager | null;
}

const ZoneChoiceComponent = ({inNetworkingManager} : ZoneChoiceComponentProps) => {

    // QR Code stuff
    const [urlZoneParams, setUrlZoneParams] = useState<string | null>("0");

    useEffect(() =>
        {
            const handleLoginResponse = (inSessionId: string) =>
            {
                const urlParsed = new URLSearchParams(window.location.search);
                const zoneURL = urlParsed.get('zone');
                console.log('in handle login response = ', inSessionId);

                if (zoneURL)
                {
                    setUrlZoneParams(zoneURL);
                    inNetworkingManager?.sendZoneRequest(+zoneURL);

                    console.log('zone info sent = ', zoneURL);
                }
                
            };

            
            // @TODO NATHAN temp
            if (inNetworkingManager)
            {
                const urlParsed = new URLSearchParams(window.location.search);
                const zoneURL = urlParsed.get('zone');

                if (zoneURL)
                {
                    inNetworkingManager.sendZoneRequest(+zoneURL);
                    console.log('received zone = ', zoneURL);
                }
                
            }
    
            inNetworkingManager?.on(Message.ClientLoginResponse.toString(), handleLoginResponse);
    
            // cleaning up
            return () =>
            {
                inNetworkingManager?.off(Message.ClientLoginResponse.toString(), handleLoginResponse);
            };
        }, [inNetworkingManager]);


    return (
        <div>
        </div>
    )
};

export default ZoneChoiceComponent;
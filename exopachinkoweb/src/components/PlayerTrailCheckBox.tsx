import React, { useState, useEffect, useRef } from "react";
import { NetworkingManager } from "./../networking/NetworkingManager";
import { Message } from "../schema/epschema/message";


interface PlayerTrailCheckBoxProps {
    inNetworkingManager: NetworkingManager | null;
}

const PlayerTrailCheckBox = ({inNetworkingManager} : PlayerTrailCheckBoxProps) => {

    const [useTrail, setUseTrail] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const newState = event.target.checked;
        setUseTrail(newState);
        console.log("new player trail state =", newState);
        inNetworkingManager?.sendPlayerTrailRequest(newState);
    }

    useEffect(() =>
        {
            const handlePlayerTrailResponse = (inUseTrail: boolean) =>
            {
                setUseTrail(inUseTrail);
            };
    
            inNetworkingManager?.on(Message.PlayerTrailResponse.toString(), handlePlayerTrailResponse);
    
            // cleaning up
            return () =>
            {
                inNetworkingManager?.off(Message.PlayerTrailResponse.toString(), handlePlayerTrailResponse);
            };
        }, [inNetworkingManager]);


    return (
        <div>
            <input style = {{width:"30px", height:"30px"}} type="checkbox" id="trailCheckBox" onChange={handleChange}/>
            <label htmlFor="trailCheckBox" style={{ color: 'white', fontSize:"30px"}}> UsePlayerTrail </label>
        </div>
    )
};

export default PlayerTrailCheckBox;
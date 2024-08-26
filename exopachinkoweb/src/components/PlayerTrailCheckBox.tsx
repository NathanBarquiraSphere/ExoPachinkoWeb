import React, { useState, useEffect, useRef } from "react";
import { NetworkingManager } from "./../networking/NetworkingManager";


interface PlayerTrailCheckBoxProps {
    inNetworkingManager: NetworkingManager | null;
}

const PlayerTrailCheckBox = ({inNetworkingManager} : PlayerTrailCheckBoxProps) => {

    const [useEmissive, setUseEmissive] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const newState = event.target.checked;
        setUseEmissive(newState);
        console.log("new player trail state =", newState);
        inNetworkingManager?.sendPlayerTrailRequest(newState);
    }


    return (
        <div>
            <input style = {{width:"30px", height:"30px"}} type="checkbox" id="trailCheckBox" onChange={handleChange}/>
            <label htmlFor="trailCheckBox" style={{ color: 'white', fontSize:"30px"}}> UsePlayerTrail </label>
        </div>
    )
};

export default PlayerTrailCheckBox;
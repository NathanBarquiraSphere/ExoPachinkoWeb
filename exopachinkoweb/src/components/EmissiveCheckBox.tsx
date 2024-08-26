import React, { useState, useEffect, useRef } from "react";
import { NetworkingManager } from "./../networking/NetworkingManager";


interface EmissiveCheckBoxProps {
    inNetworkingManager: NetworkingManager | null;
}

const EmissiveCheckBox = ({inNetworkingManager} : EmissiveCheckBoxProps) => {

    const [useEmissive, setUseEmissive] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const newState = event.target.checked;
        setUseEmissive(newState);
        console.log("new state =", newState);
        inNetworkingManager?.sendUseEmissiveRequest(newState);
    }


    return (
        <div>
            <input type="checkbox" style = {{width: "20px", height:"20px"}} id="emissiveCheckBox" onChange={handleChange}/>
            <label htmlFor="emissiveCheckBox" style={{ color: 'white'}}> UseEmissiveColor </label>
        </div>
    )
};

export default EmissiveCheckBox;
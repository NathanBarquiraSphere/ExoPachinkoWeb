import React, { useState, useEffect, useRef } from "react";
import { NetworkingManager } from "./../networking/NetworkingManager";


interface TrailLengthSliderProps {
    inNetworkingManager: NetworkingManager | null;
}

const TrailLengthSlider = ({inNetworkingManager} : TrailLengthSliderProps) => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const newValue = parseFloat(event.target.value);
        setValue(newValue);

        console.log('slider value = ', newValue);

        inNetworkingManager?.sendTrailLengthRequest(newValue);
    }


    return (
        <div>
            <input type="range" min="0" max="1" step="0.01" value={value} onChange={handleChange}/>
            <label htmlFor="trailCheckBox" style={{ color: 'white', fontSize:"30px"}}> Trail Length </label>
        </div>
    )
};

export default TrailLengthSlider;
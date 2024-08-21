import React, { useState, useEffect, useRef } from "react";
import { NetworkingManager } from "./../networking/NetworkingManager";
import { RgbColor, RgbColorPicker } from "react-colorful";
import { LinearColorObject } from '../objects/LinearColorObject';

interface ColorProps {
    inNetworkingManager: NetworkingManager | null;
}

const ColorSelector = ({inNetworkingManager} : ColorProps) => {

    const [color, setColor] = useState({ r: 50, g: 100, b: 150 });

    const onColorChange = (newColor : RgbColor) => {
        const outLinearColor: LinearColorObject = {
            red: newColor.r, 
            green: newColor.g,
            blue: newColor.b,
            alpha: 1
        };
        
        console.log("R: " + outLinearColor.red + " G: " + outLinearColor.green + " B: " + outLinearColor.blue);

        inNetworkingManager?.sendLinearColorRequest(outLinearColor)
    };
    return <RgbColorPicker color={color} onChange={onColorChange} />;
};

export default ColorSelector;
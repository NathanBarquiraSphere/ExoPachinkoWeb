import React, { useState, useEffect } from "react";
import { NetworkingManager } from "./../networking/NetworkingManager";
import { Message } from "../schema/epschema/message";

import SucessSound from "../assets/sounds/SuccessSound.wav";

import BallHitSound from "../assets/sounds/HitSound.wav";

interface BallCollisionOverlayProps {
  inNetworkingManager: NetworkingManager | null;
}

const BallCollisionOverlay = ({ inNetworkingManager }: BallCollisionOverlayProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // @TODO NATHAN: cvar?
  const flashBangTime = 200; // in milliseconds
  const hapticTime = 100; // in milliseconds
  const shouldPlaySounds = true;

  useEffect(() => {
    const handleBallCollisionEvent = () => 
    {
        if (shouldPlaySounds) 
        {
            const failAudio = new Audio(BallHitSound);
            failAudio.play();
        }
        
    };

    inNetworkingManager?.on(Message.BallCollisionResponse.toString(), handleBallCollisionEvent);

    // cleaning up
    return () => 
    {
        inNetworkingManager?.on(Message.BallCollisionResponse.toString(), handleBallCollisionEvent);
    };
  }, [inNetworkingManager]);

  return <div></div>;
};

export default BallCollisionOverlay;

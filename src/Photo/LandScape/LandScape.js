import React from 'react';
import LandLayout from './LandLayout';
import "./LandScape.css";

function LandScape() {
    return (
        <>
            <div className="landscape">
                <img src="./images/landscape.jpg" alt />
                <div className="landscape__description">
                    <h3>Nature Photographer</h3>
                    <p>Nature photography is a genre of photography that unlocks the beauty of natural elements in their natural habitat within a frame. It is an umbrella term that covers landscape photography, wildlife photography, and garden photography.</p>
                    <h2>Contact Us & let's talk ideas!</h2>

                </div>
            </div>
            <LandLayout />
        </>
    )
}

export default LandScape
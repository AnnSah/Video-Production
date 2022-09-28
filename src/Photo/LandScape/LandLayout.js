import React from 'react';
import "./LandLayout.css";

function LandLayout() {
    return (
        <div className="land__layout">
            <img className="land-grid-col-1 land-grid-row-2" src="./sub-images/lake.jpg" />
            <img src="./sub-images/ice.jpg" />
            <img src="./sub-images/hill.jpg" />
            <img className="land-grid-col-1 land-grid-row-2" src="./sub-images/paris.jpg" />
            <img src="./sub-images/fall.jpg" />
            <img className="land-grid-col-1 land-grid-row-2" src="./sub-images/ballon.jpg" />
            <img src="./sub-images/mountain.jpg" />
            <img className="land-grid-col-1 land-grid-row-2" src="./sub-images/air.jpg" />

        </div>
    )
}

export default LandLayout
import React from 'react';
import "./Drone.css";
import DroneGrid from './DroneGrid';

function Drone() {
    return (
        <div className="drone">
            <img />

            <div className="drone__info">
                <span>Are you looking for a Drone Photographer</span>
                <button >Contact Us</button>

                <div className="drone__description">
                    <img src="./images/drone.jpg" />
                    <p>Drone photographers control a drone or other unmanned aerial vehicle that is equipped with a camera and take pictures for their employer. You find drone photographers in a variety of industries, including real estate, TV and film, construction, GIS and surveying, events photography, and law enforcement.</p>
                </div>
            </div>

            <DroneGrid
                srcFirst="./images/city.jpg"
                srcSecond="./images/spain.jpg"
                srcThird=""
                srcForth=""
                srcFifth=""
                srcSixth=""
                srcSeventh=""
                srcEigth=""
                srcNinth=""
                srcTenth=""
                srcEleventh=""
                srcTwelfth=""
                srcThirteenth="" />

        </div>
    )
}

export default Drone;
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
                srcThird="./images/boats1.jpg"
                srcForth="./images/sunset.jpg"
                srcFifth="./images/bridge.jpg"
                srcSixth="./images/daytime.jpg"
                srcSeventh="./images/sea.jpg"
                srcEighth="./images/cars.jpg"
                srcNinth="./images/island.jpg"
                srcTenth="./images/cliff.jpg"
                srcEleventh="./images/park.jpg"
                srcTwelfth="./images/snow.jpg"
                srcThirteenth="./images/fields.jpg" />

        </div>
    )
}

export default Drone;
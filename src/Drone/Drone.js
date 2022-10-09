import React from 'react';
import "./Drone.css";
import DroneGrid from './DroneGrid';
import { Link } from 'react-router-dom';
 import PageEnd from "../PageEnd";

function Drone() {
    return (
        <div className="drone">
            <div className="drone__info">
            </div>
            <div className="drone__description">
                <h1>Aerial View Drone</h1>
                <p>Drone photographers control a drone or other unmanned aerial vehicle that is equipped with a camera and take pictures for their employer. You find drone photographers in a variety of industries, including real estate, TV and film, construction, GIS and surveying, events photography, and law enforcement.</p>
            </div>

            <div className="drone__contact">
                <h2>Tell us about your next idea.</h2>
                <Link className="btn" to="#"> <button>Contact Us</button></Link>
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


            <PageEnd />
        </div>

    )
}

export default Drone;
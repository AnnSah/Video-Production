import React from 'react';
import "./DroneSection.css";
import { Link } from 'react-router-dom';

function DroneSection() {
    return (
        <div className="drone__section">
            <img src="./homeimg/device.jpg" />
            <div className="drone__section__details">
                <h2>Drone Man</h2>
                <h4>Aerial View, Cities</h4>
                <p>Drone photographers control a drone or other unmanned aerial vehicle that is equipped with a camera and take pictures for their employer. You find drone photographers in a variety of industries, including real estate, TV and film, construction, GIS and surveying, events photography, and law enforcement.</p>
                <Link className="drone__section__btn" to="/drone">
                    <button>Learn more</button></Link>
            </div>
        </div>
    )
}

export default DroneSection;
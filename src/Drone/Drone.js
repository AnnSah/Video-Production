import React from 'react';
import "./Drone.css";
import DroneGrid from './DroneGrid';
import PageEnd from '../PageEnd';
import { Link, useHistory } from 'react-router-dom';

function Drone() {
    const history = useHistory();
    return (
        <div className="drone">
            <img src="./images/drone1.jpg" />
            <div className="drone__info">
                <h3>Drone Photographer</h3>
                <p>Drone photographers control a drone or other unmanned aerial vehicle that is equipped with a camera and take pictures for their employer. </p>
                <h3>Contact Us or Email-Us</h3>
                <Link className="link" to="/contact">
                    <button>Contact now</button>
                </Link>

            </div>

            {/* <DroneGrid
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
                srcThirteenth="./images/fields.jpg" /> */}


            {/* <PageEnd /> */}
        </div>

    )
}

export default Drone;
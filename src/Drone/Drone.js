import React from 'react';
import "./Drone.css";

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


            {/* 
            <div className="image__grid">
                <img className="img-grid-col-1 img-grid-row-3 " src="./images/chef.jpg" alt="cheff" />
                <img  className="img-grid-col-1 img-grid-row-2"src="./images/chef.jpg" alt="cheff" />
                <img  className="img-grid-col-2" src="./images/chef.jpg" alt="cheff" />
                <img src="./images/chef.jpg" alt="cheff" />
                <img src="./images/chef.jpg" alt="cheff" />
            </div> */}
        </div>
    )
}

export default Drone;
import React from 'react';
import "./PhotoSection.css";
import { Link } from 'react-router-dom';

function PhotoSection() {
    return (
        <div className="home__image">
            <img src="./homeimg/photographer.jpg" alt="photographer" />
            <div className="home__details">
                <h2>Cameraman & Photographer</h2>
                <p>Photographers use a variety of photographic equipment to capture events, people, objects or scenes for records, art or commercial use. Many photographers begin their careers as photographic assistants, setting up lights and stands, arranging transport and occasionally acting as a 'second shooter'.</p>
                <Link className="button__details" to="/photo">
                    <button>Learn More</button></Link>
            </div>

        </div>
    )
}

export default PhotoSection;
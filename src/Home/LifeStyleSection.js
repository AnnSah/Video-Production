import React from 'react';
import "./LifeStyleSection.css";
import { Link } from 'react-router-dom';

function LifeStyleSection() {
    return (
        <div className="lifestyle__section">
            <img src="./homeimg/wayoflife.jpg" />
            <div className="lifestyle__section__details">
                <h2>Lifestyle and Business Photography</h2>
                <h4>Photoshoot,Corporate, Business, Promo</h4>
                <p>Lifestyle photography is a genre of photography that mainly aims to capture portraits of people in situations, real-life events or milestones in an artistic manner and the art of the everyday.
                    The primary goal is to tell stories about people's lives or to inspire people in different times.</p>
                <Link className="lifestyle__details__btn" to="/lifestyle">
                    <button>Learn More</button></Link>
            </div>
        </div>
    )
}

export default LifeStyleSection;

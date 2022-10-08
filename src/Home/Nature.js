import React from 'react';
import "./Nature.css";
import { Link } from 'react-router-dom';

function Nature() {
    return (
        <div className="nature__section">
            <img src="./homeimg/nature.jpg" />
            <div className="nature__details">
                <h2>Paysage Photography</h2>
                <h4>Landcapes, Aerial View</h4>
                <p>Landscape photography shows the spaces within the world, sometimes vast and unending, but other times microscopic.
                   Landscape photographs typically capture the presence of nature but can also focus on man-made features or disturbances of landscapes.</p>
                <Link className="nature__details__btn" to="/landscape">
                    <button>Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default Nature;

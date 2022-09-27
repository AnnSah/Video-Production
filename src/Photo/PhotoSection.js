import React from 'react';
import "./PhotoSection.css";

function PhotoSection({ title, description, src }) {
    return (

        <div className="card__section">
            <img src="./images/pexels-jeandaniel-francoeur-2799785.jpg" />

            <div className="card__details">
                <h3>Photographer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sapien ut felis semper convallis id ut augue. Orci varius natoque</p>
            </div>
        </div>



    )
}

export default PhotoSection;
import React from 'react';
import "./PhotoSection.css";

function PhotoSection({ src, title, description, type1, type2, button }) {
    return (

        <div className="card">
            <img src={src} alt="." />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h5>{type1}</h5>
                <h3>{type2}</h3>
                <button>{button}</button>


            </div>
        </div>



    )
}

export default PhotoSection;
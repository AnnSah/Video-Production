import React from 'react';
import "./PhotoSection.css";

function PhotoSection({ title, description, src }) {
    return (

        <div className="photo__section">
            <img src={src} />
            <div className="photo__description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

        </div>



    )
}

export default PhotoSection;
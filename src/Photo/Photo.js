import React from 'react';
import PhotoHeadr from './PhotoHeadr';
import "./Photo.css";
import PhotoSection from './PhotoSection';

function Photo() {
    return (
        <div className="photo">
            <PhotoHeadr />

            <div className="photo__section">
                <PhotoSection src="./images/studio.jpg"
                    title=" Studio Photographer"
                    description="Unique photographs for your special day"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

                <PhotoSection src="./images/drone.jpg"
                    title=" Drone Photographer"
                    description="Unique photographs for your special day"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

                <PhotoSection src="./images/wedding.jpg"
                    title=" Wedding Photographer"
                    description="Unique photographs for your special day"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

            </div>

            <div className="photo__section">
                <PhotoSection src="./images/product.jpg"
                    title=" Product Promotion "
                    description="Unique photographs for your special day"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

                <PhotoSection src="./images/bhc.jpg"
                    title=" Behind the Scenes"
                    description="Unique photographs for your special day"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

                <PhotoSection src="./images/business.jpg"
                    title=" Business Photography"
                    description="Unique photographs for your special day"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

            </div>
        </div>
    )
}

export default Photo;
import React from 'react';
import PhotoHeadr from './PhotoHeadr';
import "./Photo.css";
import PhotoSection from './PhotoSection';
import ContactPromo from './ContactPromo';

function Photo() {
    return (
        <div className="photo">
            <PhotoHeadr />

            <div className="photo__section">
                <PhotoSection src="./images/drone.jpg"
                    title=" Drone Photographer"
                    description="Unique Setup Space"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

                <PhotoSection src="./images/wedding.jpg"
                    title=" Wedding Photographer"
                    description="Unique Setup Space"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

                <PhotoSection src="./images/landscape.jpg"
                    title=" Landscapes Photography"
                    description="Unique Setup Space"
                    type1="Reasonable prices"
                    type2="High quality photos"
                    button="Learn More" />

            </div>
            




            <ContactPromo />



        </div>

    )
}

export default Photo;
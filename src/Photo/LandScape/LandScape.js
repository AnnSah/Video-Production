import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageEnd from '../../PageEnd';
import LandLayout from './LandLayout';
import "./LandScape.css";

function LandScape() {
    const history = useHistory();
    return (
        <>
            <div className="landscape">
                <img src="./images/landscape.jpg" alt="landscape" />
                <div className="landscape__description">
                    <h3>Nature Photographer</h3>
                    <p>Nature photography is a genre of photography that unlocks the beauty of natural elements in their natural habitat within a frame. It is an umbrella term that covers landscape photography, wildlife photography, and garden photography.</p>
                    <h2>Contact Us & let's talk ideas!</h2>
                    <Link to="/contact" className="link__lds"><button>Contact Us</button></Link>
                </div>
            </div>
            <LandLayout />
            <PageEnd />
        </>
    )
}

export default LandScape
import React from 'react';
import "./GridVideo.css"
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function GridVideo() {
    return (
        <>
            <div className="video__grid">
            </div>
            <div className="video__contact">
                <h2>For any video production</h2>
                <Link to="/contact" className="link_">
                <button>Contact Us</button></Link>
            </div>
            <div className="video__grid">
                <ReactPlayer width="25%" url="https://youtu.be/gYO1uk7vIcc" />
                <ReactPlayer width="25%" url="https://youtu.be/9uA0aEO6rYY" />
                <ReactPlayer width="25%" url="https://youtu.be/KK2smasHg6w" />
            </div>

        </>

    )
}

export default GridVideo;
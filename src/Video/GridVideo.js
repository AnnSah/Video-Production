import React from 'react';
import "./GridVideo.css"
import ReactPlayer from 'react-player';

function GridVideo() {
    return (
        <>
            <div className="video__grid">
                {/* <ReactPlayer width="25%" url="https://youtu.be/KK2smasHg6w" />
                <div className="video__info">
                    <h4>Drone View Videos</h4>
                    <p>Drone videography is a new and emerging form of photography that can be done from the sky.<br></br> It has many benefits over traditional forms of photography because it allows you to see things in ways not possible before,</p>
                </div> */}
            </div>
            <div className="video__contact">
                <h2>For any video production</h2>
                <button>Contact Us</button>
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
import React from 'react';
import "./DroneVideo.css";
import ReactPlayer from 'react-player';

function DroneVideo() {
    return (
        <div className="drone__package">
            <div className="drone__video">
                <ReactPlayer width="25%" url="https://youtu.be/Yo4ueevKfdE" />
                <ReactPlayer width="25%" url="https://youtu.be/FCPdIvXo2rU" />
            </div>
        </div>
    )
}

export default DroneVideo;
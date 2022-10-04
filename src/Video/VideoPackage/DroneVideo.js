import React from 'react';
import "./DroneVideo.css";
import ReactPlayer from 'react-player';

function DroneVideo() {
    return (
        <div className="drone__package">
            <div className="drone__video">
                <ReactPlayer width="25%" url="https://youtu.be/Yo4ueevKfdE" />
                <ReactPlayer width="25%" url="https://youtu.be/FCPdIvXo2rU" />
                <ReactPlayer width="25%" url="https://youtu.be/8Z1eMy2FoX4" />
            </div>

            <div className="drone__second">
                <ReactPlayer width="25%" url="https://youtu.be/6k7a8bw451M" />
                <ReactPlayer width="25%" url="https://youtu.be/xRFrjAVH1uQ" />
                <ReactPlayer width="25%" url="https://youtu.be/xRFrjAVH1uQ" />


            </div>
        </div>
    )
}

export default DroneVideo;
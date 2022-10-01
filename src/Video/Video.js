import React from 'react';
import "./Video.css";
import ReactPlayer from "react-player";
import GridVideo from './GridVideo';

function Video() {
    return (
        <div className="video__player">
            <div className="video__description">
                <ReactPlayer className="video__1" width="100%" url="https://youtu.be/9ZfN87gSjvI" />
                <h1>Audiovisual Production</h1>
            </div>

            <GridVideo />
            <div className="video__description_2">
                <h2>Our Video Production</h2>
            </div>
        </div>


    )
}

export default Video;
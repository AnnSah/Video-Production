import React from 'react';
import "./Video.css";
import ReactPlayer from "react-player";
import GridVideo from './GridVideo';
import VideoInfo from './VideoInfo';

function Video() {
    return (
        <div className="video__player">
            <div className="video__description">
                <ReactPlayer className="video__1" width="100%" url="https://youtu.be/9ZfN87gSjvI" />
                <h1>Audiovisual Production</h1>

                <div className="video__description_2">
                    <h2>Our Video Production</h2>
                    <p>Our audiovisual production agency offers you personalized rates adapted to your budget and your objectives. Produce a quality, creative video that highlights your service, product or company. The goal is to convey your message to your target audience.</p>
                    <p>Our audiovisual production agency offers you personalized rates adapted to your budget and your objectives. Produce a quality, creative video that highlights your service, product or company. The goal is to convey your message to your target audience.</p>
                </div>
            </div>

            <GridVideo />
            <VideoInfo />
        </div>


    )
}

export default Video;
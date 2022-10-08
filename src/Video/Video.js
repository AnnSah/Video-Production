import React from 'react';
import "./Video.css";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import GridVideo from './GridVideo';
import VideoInfo from './VideoInfo';
import PageEnd from "../PageEnd";

function Video() {
    return (
        <div className="video__player">
            <div className="video__description">
                <ReactPlayer className="video__1" width="100%" url="https://youtu.be/9ZfN87gSjvI" />
                <h1>Audiovisual Production</h1>

                <div className="video__description_2">
                    {/* <h2>Our Video Production</h2> */}
                    <p>Our audiovisual production agency offers you personalized rates adapted to your budget and your objectives. Produce a quality, creative video that highlights your service, product or company. The goal is to convey your message to your target audience.</p>
                    <p>Our audiovisual production agency offers you personalized rates adapted to your budget and your objectives. Produce a quality, creative video that highlights your service, product or company. The goal is to convey your message to your target audience.</p>
                </div>
            </div>

            <GridVideo />
            <VideoInfo />

            <div className="video__bottom">
                <h3>Video Package</h3>
                <p>With the impact of video on the web, multimedia content guarantees positive results in your advertising campaigns. They allow you to have a better impact than simple photos. It is important that video production  is at the heart of your strategy.  </p>
                <Link to="/videopackage" className="videopack">
                    <button>Learn More</button></Link>
            </div>
            <PageEnd />
            <Footer />
        </div>


    )
}

export default Video;
import React from 'react';
import "./VideoSection.css";
import { Link } from 'react-router-dom';

function VideoSection() {
    return (
        <div className="video__section">
            <img src="./homeimg/videoshooting.jpg" />
            <div className="video__section__details">
                <h2>Video Production</h2>
                <h4>Editing, Shooting, Granding, Montage</h4>
                <p>Video production is basically the entire process of creating a video. Whether it's a short film, a full-length movie, business marketing video, television commercial, music video, or other type of film, the process may vary a little with the specifics, but the overall process is basically the same.</p>
                <Link className="video__section__btn" to="/video">
                    <button>Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default VideoSection;
import React from 'react';
import "./Video.css";
import ReactPlayer from "react-player";

function Video() {
    return (
        <div className="video__player">
            <ReactPlayer className="video__1" url="https://www.youtube.com/watch?v=tCpiZ7RQ98M&t=7s" />
            <h1>Video Production</h1>
            <p>Video production is basically the entire process of creating a video. Whether it's a short film, a full-length movie, business marketing video, television commercial, music video, or other type of film, the process may vary a little with the specifics, but the overall process is basically the same.</p>
        </div>
    )
}

export default Video;
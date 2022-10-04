import React from 'react';
import "./MusicVideo.css"
import ReactPlayer from 'react-player';

function MusicVideo() {
    return (
        <div className="music">
            <div className="music__video">
                < ReactPlayer width="25%" url="https://youtu.be/kO8fTk6oKQg" />
                <ReactPlayer width="25%" url="https://youtu.be/-rey3m8SWQI" />
                <ReactPlayer width="25%" url="https://youtu.be/lwZqbQL4H4Q" />
            </div>
            <div className="section__2">
                < ReactPlayer width="25%" url="https://youtu.be/kO8fTk6oKQg" />
                <ReactPlayer width="25%" url="https://youtu.be/-rey3m8SWQI" />
                < ReactPlayer width="25%" url="https://youtu.be/kO8fTk6oKQg" />

            </div>
        </div>
    )
}

export default MusicVideo;
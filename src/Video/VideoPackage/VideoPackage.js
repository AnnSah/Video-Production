import React from 'react';
import DroneVideo from './DroneVideo';
import MusicVideo from './MusicVideo';
import "./VideoPackage.css";
import PageEnd from '../../PageEnd';


function VideoPackage() {
    return (
        <div className="video__package">
            <div className="package__info"></div>
            <div className="package__title">
                <h2>Video Editing, Granding, fx, montage</h2>
            </div>

            <div className="package__description">
                <img src="./images2/editing.jpg" alt="man editing" />
                <div className="package__text">
                    <h3>Video Editing</h3>
                    <p>Video editing is one of the most important steps in your audio visual production project. This is why our video editing experts bring you all their expertise in this area. A beautiful video capture combined with a controlled editing will offer you a quality production.</p>
                </div>
            </div>

            <div className="package__granding">
                <img src="./images2/color.jpg" alt="color editing" />
                <div className="package__granding_text">
                    <h3>Video & Color Granding</h3>
                    <p>Color grading is an important step in the filmmaking process. Yet many underestimate it. First, the retouching of colors and brightness improves the rendering of the video . Then, the color grading gives a particular atmosphere to the videos. Finally, video dressing makes it possible to embed titles, subtitles or graphics  in a film. Therefore, a handy step when wanting to provide additional information in a video.</p>
                </div>
            </div>

            <div className="package__details">
                <h1>Content creation, a winning strategy</h1>
                <p>With the impact of video on the web, multimedia content guarantees positive results in your advertising campaigns. They allow you to have a better impact than simple photos. It is important that video production  is at the heart of your strategy.
                    <b>80%</b> of online userswill watch a video, while only <b>20%</b>  will read content on the site.</p>
            </div>

            <div className="break">
                <h4>Music Videos</h4>
            </div>
            <MusicVideo />
            <div className="package__stats">
                <h1>There Are 2.1 Billion Monthly Active YouTube Users Worldwide ,122 million users!</h1>
            </div>
            <DroneVideo />
            <div className="package__end">
                <h2>We Care!</h2>
                <p>Each video project is unique . This is why we attach great importance to the preparation of the shoot. Therefore, our cameramen advise you for the realization of your video. The shooting is the essential element to obtain a good film.</p>
            </div>
            <PageEnd />
        </div >
    )
}

export default VideoPackage;
import React from 'react';
import "./VideoPackage.css"

function VideoPackage() {
    return (
        <div className="video__package">
            <div className="package__info"></div>
            <div className="package__title">
                <h2>Video Editing, Granding, fx, montage</h2>
            </div>
            <div className="package__description">
                <img src="./images2/editing.jpg" />
                <div className="package__text">
                    <h3>Video Editing</h3>
                    <p>Video editing is one of the most important steps in your audio visual production project. This is why our video editing experts bring you all their expertise in this area. A beautiful video capture combined with a controlled editing will offer you a quality production.</p>
                </div>
            </div>
        </div>
    )
}

export default VideoPackage;
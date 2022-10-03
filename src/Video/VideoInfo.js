import React from 'react';
import "@mui/icons-material";
import "./VideoInfo.css"
import ListAltIcon from '@mui/icons-material/ListAlt';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import StreamIcon from '@mui/icons-material/Stream';

function VideoInfo() {
    return (
        <div className="video__info">
            <div className="video__icon1">
                <ListAltIcon sx={{ fontSize: 80 }} style={{ minWidth: '100px' }} />
                <p>Our agency accompanies you in the realization of the script to best achieve your target and objectives.</p>
            </div>

            <div className="video__icon1">
                <CameraRollIcon sx={{ fontSize: 80 }} style={{ minWidth: '100px' }} />
                <p>Our agency accompanies you in the realization of the script to best achieve your target and objectives.</p>
            </div>

            <div className="video__icon1">
                <VideoCameraBackIcon sx={{ fontSize: 80 }} style={{ minWidth: '100px' }} />
                <p>Our agency accompanies you in the realization of the script to best achieve your target and objectives.</p>
            </div>

            <div className="video__icon1">
                <StreamIcon sx={{ fontSize: 80 }} style={{ minWidth: '100px' }} />
                <p>Our agency accompanies you in the realization of the script to best achieve your target and objectives.</p>
            </div>


        </div>
    )
}

export default VideoInfo;
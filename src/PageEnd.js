import { Email } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';
import "./PageEnd.css";

function PageEnd() {
    return (
        <div className="page__end">
            <div className="page__end__details">
                <h2>Zeta Production</h2>
                <p> Our audiovisual production company supports you in your photo or video projects. Our image capture experts will enhance your projects. So whether you need a video, a production team, a creative post-production team for your videos (or a complete all-encompassing strategy), we're available worldwide – even at the last minute.</p>
                <div className="page__end__btm">
                    <h2>Production Services</h2>
                    <p>Whether you need a video, animation or video marketing strategy, we work with you to produce your content and share your story during all aspects of audiovisual production. </p>
                </div>
            </div>

            <div className="page__end__description">
                <h2>Out Work</h2>
                <p>Each video and photo project is unique . This is why we attach great importance to the preparation of the shoot. Therefore, our cameramen advise you for the realization of your video. The shooting is the essential element to obtain a good film.</p>

                <div className="page__end__contact">
                    <h2>Contact Us</h2>
                    <p>Contact Us through E-mail, or our social networks!</p>
                </div>
                <div className="icons">
                    <Email sx={{ fontSize: 50 }} style={{ minWidth: '80px' }} />
                    <InstagramIcon sx={{ fontSize: 50 }} style={{ minWidth: '80px' }} />
                    <YouTubeIcon sx={{ fontSize: 50 }} style={{ minWidth: '80px' }} />
                    <FacebookIcon sx={{ fontSize: 50 }} style={{ minWidth: '80px' }} />
                </div>
            </div>

        </div>
    )
}

export default PageEnd;

// const showMessage,setShowMessage= useState("false")
// const showMessageHandler ()=>{setShowMessage(!showMessage);}
// <button onClick={showMessageHandler}>{showMessage ? "Hide" : "Show"}Message <button/>


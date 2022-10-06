import React from 'react';
import "@mui/icons-material";
import TheatersIcon from '@mui/icons-material/Theaters';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HdIcon from '@mui/icons-material/Hd';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';
import "./Home.css"
// import Footer from '../Footer/Footer';
import PhotoSection from './PhotoSection';
import DroneSection from './DroneSection';
import VideoSection from './VideoSection';
import { Link } from 'react-router-dom';
// import PageEnd from '../PageEnd';
// import Fade from "react-reveal/Fade"


function Home() {

    return (
        <div className="home">
            <img alt="cameraman" />
            <div className="home__title">
                <h1>Audiovisual Production</h1>
            </div>

            <div className="home__production">
                <h2>Zeta</h2>
                <p>As pointed out by Sokanu, A “Videographer is someone who is responsible for recording live events and small scale video productions. Videographers focus on smaller productions like documentaries, live events, short films, legal depositions, weddings, birthday parties, sports events, commercials, and training videos.</p>
                <div className="home__icons">
                    <Link to="/videopackage">
                        <TheatersIcon color="action" sx={{ fontSize: 80 }} style={{ minWidth: '180px' }} /></Link>
                    <OndemandVideoIcon color="action" sx={{ fontSize: 80 }} style={{ minWidth: '180px' }} />
                    <Link to="/photo">
                        <AddAPhotoIcon color="action" sx={{ fontSize: 80 }} style={{ minWidth: '180px' }} />
                    </Link>
                    <HdIcon color="action" sx={{ fontSize: 80 }} style={{ minWidth: '180px' }} />
                </div>
            </div>

            <div className="home__category">
                <PhotoSection />
                <DroneSection />
                <VideoSection />
            </div>

            <div className="home__contact__category">
                <h1>Let's work together</h1>
                <div className="home__contact__details">
                    <AlternateEmailIcon sx={{ fontSize: 80 }} style={{ minWidth: '100px' }} />
                    <p>Contact or E-mail us </p>
                    <EmojiObjectsIcon sx={{ fontSize: 80 }} style={{ minWidth: '100px' }} />
                    <p>Tell us about your idea</p>
                    <HandshakeIcon sx={{ fontSize: 80 }} style={{ minWidth: '100px' }} />
                    <p>And let's collaborate</p>
                </div>

            </div>
        </div >

    )
}

export default Home;

import React from 'react';
import "@mui/icons-material";
import TheatersIcon from '@mui/icons-material/Theaters';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HdIcon from '@mui/icons-material/Hd';
import "./Home.css"
// import Footer from '../Footer/Footer';
// import HomeSection from './HomeSection';
// import PageEnd from '../PageEnd';
// import Fade from "react-reveal/Fade"
import { useHistory } from 'react-router-dom';



function Home() {
    const history = useHistory();
    return (
        <div className="home">
            <img />
            <div className="home__title">
                <h1>Audiovisual Production</h1>
            </div>

            <div className="home__production">
                <h2>Zeta</h2>
                <p>As pointed out by Sokanu, A “Videographer is someone who is responsible for recording live events and small scale video productions. Videographers focus on smaller productions like documentaries, live events, short films, legal depositions, weddings, birthday parties, sports events, commercials, and training videos.</p>
                <div className="home__icons">
                    <TheatersIcon color="action" sx={{ fontSize: 80 }} style={{ minWidth: '180px' }} />
                    <OndemandVideoIcon color="action" sx={{ fontSize: 80 }} style={{ minWidth: '180px' }} />
                    <AddAPhotoIcon color="action" sx={{ fontSize: 80 }} style={{ minWidth: '180px' }} />
                    <HdIcon color="action" sx={{ fontSize: 80 }} style={{ minWidth: '180px' }} />
                </div>
            </div>

            <div className="home__category">
                <img src="./homeimg/photographer.jpg" />
            </div>
        </div >

    )
}

export default Home;

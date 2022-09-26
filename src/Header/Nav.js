import React from 'react'
import "./Nav.css";
import "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Nav() {
    return (
        <div className="nav">
            <h4>Video Production</h4>

            <div className="nav__icons">
                <p><EmailIcon style={{minWidth: '50px'}} /></p>
                <p><InstagramIcon style={{minWidth: '50px'}} /></p>
                <p><YouTubeIcon style={{minWidth: '50px'}} /></p>


            </div>
        </div>
    )
}

export default Nav;
import React, { useState } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';



function Header() {
    const [isMobile, setIsMobile] = useState(false);


    return (

        <div className="header">
            <h1 className="logo">Zeta</h1>
            <ul className={isMobile ? "header__mobile" : "header__right"}
                onClick={() => setIsMobile(false)}>
                <Link to="/" className="home__headerList">
                    <li>Home</li>
                </Link>
                <Link to="/contact" className="home__headerList">
                    <li>Contact</li>
                </Link>
                <Link to="/photo" className="home__headerList">
                    <li>Photo</li>
                </Link>
                <Link to="/video" className="home__headerList">
                    <li>Video</li>
                </Link>
                <Link to="/Drone" className="home__headerList">
                    <li>Drone</li>
                </Link>
            </ul>
            <button className="hamburger__menu" onClick={() => setIsMobile(!isMobile)}>

                {isMobile ? <i className="fas fa-times"></i> : <i className=" fas fa-bars"> </i>}
            </button>
        </div >
    )
}

export default Header;
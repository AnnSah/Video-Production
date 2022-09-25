import React from 'react';
import "./Header.css";



function Header() {

    return (

        <div className="header">
            <a href="#defalut" className="logo">Zeta</a>
            <div className="header__right">
                <a href="">Welcome</a>
                <a href="#default">Home</a>
                <a href="#default">Contact</a>
                <a href="#default">Photo</a>
                <a href="#default">Video</a>
                <a href="#default">Drone</a>
            </div>



        </div>
    )
}

export default Header;
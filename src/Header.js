import React from 'react';
import "./Header.css";
import { useHistory } from "react-router-dom";


function Header() {
    const history = useHistory();

    return (

        <div className="header">
            <a href="#defalut " className="logo">Zeta</a>
            <div className="header__right">
                <a onClick={() => history.push("/")}>Home</a>
                <a href="#default">Contact</a>
                <a onClick={() => history.push("/photo")}>Photo</a>
                <a href="#default">Video</a>
                <a href="#default">Drone</a>
            </div>



        </div>
    )
}

export default Header;
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
                <a onClick={() => history.push("/contact")}>Contact</a>
                <a className="photo" onClick={() => history.push("/photo")}>Photo</a>
                <a onClick={() => history.push("/video")}>Video</a>
                <a onClick={() => history.push("/drone")}>Drone</a>
            </div>



        </div >
    )
}

export default Header;
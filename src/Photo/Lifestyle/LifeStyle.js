import React from 'react';
import DroneGrid from '../../Drone/DroneGrid';
import "./LifeStyle.css";
import LifeStyleLayout from './LifeStyleLayout';
import { useHistory } from 'react-router-dom';
import PageEnd from '../../PageEnd';
import { Link } from 'react-router-dom';

function LifeStyle() {
    const history = useHistory();
    return (
        <>
            <div className="lifestyle">
                <img src="./sub-images/lifestyle1.jpg" />
                <div className="lifestyle__description">
                    <h3>Lifestyle & Business Photographer</h3>
                    <p>Lifestyle & Business photography is a style of portrait photography that aims to capture real-life situations in an artistic manner. The purpose of this type of photography is to share people's stories through candid, unstaged scenes.</p>
                    <h2>Do you have a photo project ?</h2>
                    <Link to={"/contact"} className="link"> <button>Contact Us</button></Link>
                </div>


            </div >
            <LifeStyleLayout />

            <PageEnd />
        </>
    )
}

export default LifeStyle;
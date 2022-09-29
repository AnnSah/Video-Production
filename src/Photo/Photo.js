import React from 'react';
import PhotoHeadr from './PhotoHeadr';
import "./Photo.css";
import "./PhotoSection.css"

import { Link, useHistory } from 'react-router-dom';
import PageEnd from '../PageEnd';

function Photo() {
    const history = useHistory();
    return (
        <div className="photo">
            <PhotoHeadr />

            <div className="photo__section">
                <div className="card">
                    <img src="./images/drone.jpg" alt="." />
                    <div className="card__info">
                        <h2>Drone Photographer</h2>
                        <h4>Unique SetUp Space</h4>
                        <h5>Reasonable Prices</h5>
                        <h3>High Quality Photos</h3>
                        <Link to={"/drone"} className="link__button"><button>Learn more</button></Link>


                    </div>
                </div>

                <div className="card">
                    <img src="./images/lifestyle.jpg" alt="." />
                    <div className="card__info">
                        <h2>Lifestyle Photographer</h2>
                        <h4>Unique SetUp Space</h4>
                        <h5>Reasonable Prices</h5>
                        <h3>High Quality Photos</h3>
                        <Link to={"/lifestyle"} className="link__button"><button>Learn more</button></Link>


                    </div>
                </div>
                <div className="card">
                    <img src="./images/landscape.jpg" alt="." />
                    <div className="card__info">
                        <h2>Landscape Photographer</h2>
                        <h4>Unique SetUp Space</h4>
                        <h5>Reasonable Prices</h5>
                        <h3>High Quality Photos</h3>
                        <Link to={"/landscape"} className="link__button"><button>Learn more</button></Link>


                    </div>
                </div>

            </div>

            <PageEnd />
        </div>

    )
}

export default Photo;
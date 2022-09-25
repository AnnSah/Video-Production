import React from 'react';
import "@mui/icons-material";
import TheatersIcon from '@mui/icons-material/Theaters';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HdIcon from '@mui/icons-material/Hd';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__info ">
                <span>A video production to make?</span>
                <span className="home__btn">Contact Us</span>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3>Production</h3>
                        <p > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi? </p>
                    </div>

                    <div className="row__icons">
                        <p>  <AddAPhotoIcon sx={{ fontSize: 80 }} style={{ minWidth: '70px' }} /> </p>
                        <p>  <TheatersIcon sx={{ fontSize: 80 }} style={{ minWidth: '70px' }} /></p>
                        <p> <OndemandVideoIcon sx={{ fontSize: 80 }} style={{ minWidth: '70px' }} /> </p>
                        <p>  <HdIcon sx={{ fontSize: 80 }} style={{ minWidth: '70px' }} /></p>
                    </div>

                </div>

                <div className="row__1">
                    <img src="https://thumbs.dreamstime.com/b/professional-male-photographer-digital-photo-camera-photo-studio-isolated-grey-photographer-102998392.jpg" />
                    <div className="col-1-of-2">
                        <h3>Photographer</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi?</p>
                    </div>

                </div>


                <div className="row__1">
                    <div className="col-1-of-2">
                        <h3>Drone</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi?</p>
                    </div>
                    <img src="https://www.coverdrone.com/eu/wp-content/uploads/sites/18/2019/04/AdobeStock_192987059-scaled.jpeg" />
                </div>

                <div className="row__1 ">
                    <img src="https://www.linandjirsa.com/wp-content/uploads/010-galway-downs-temecula-wedding-photography-1000x667.jpg" />
                    <div className="col-1-of-2">
                        <h3>Wedding</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi?</p>
                    </div>

                </div> 

                <div className="row__1">
                    <div className="col-1-of-2">
                        <h3>Drone</h3>
                        <p> 1 – Contact us, tell us about your project.</p>
                        <p> 1 – Contact us, tell us about your project.</p>
                        <p> 1 – Contact us, tell us about your project.</p>

                    </div>
                    {/* <button className="row__btn">Contact Us</button> */}
                    <img src="https://www.coverdrone.com/eu/wp-content/uploads/sites/18/2019/04/AdobeStock_192987059-scaled.jpeg" />
                </div>
            </div>
        </div >

    )
}

export default Home;

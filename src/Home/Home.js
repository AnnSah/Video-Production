import React from 'react';
import "@mui/icons-material";
import TheatersIcon from '@mui/icons-material/Theaters';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HdIcon from '@mui/icons-material/Hd';
import "./Home.css"
import Footer from '../Footer/Footer';
import HomeSection from './HomeSection';



function Home() {
    return (
        <div className="home">
            <div className="home__info ">
                <span>A video production to make?</span>
                <button className="home__btn">Contact Us</button>

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

                {/* rows with img and description */}
                <div className="row__1">
                    <HomeSection
                        src="https://thumbs.dreamstime.com/b/professional-male-photographer-digital-photo-camera-photo-studio-isolated-grey-photographer-102998392.jpg"
                        title="Photographer"
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                        magnam id fuga cupiditate possimus earum expedita, nostrum
                        temporibus ab sit, fugit laudantium molestiae minus explicabo
                        pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                        magnam id fuga cupiditate possimus earum expedita, nostrum
                        temporibus ab sit, fugit laudantium molestiae minus explicabo
                        pariatur ea inventore enim excepturi?"/>

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
                    <img src="https://www.coverdrone.com/eu/wp-content/uploads/sites/18/2019/04/AdobeStock_192987059-scaled.jpeg" alt="#" />
                </div>

                <div className="row__1 ">
                    <img src="https://www.linandjirsa.com/wp-content/uploads/010-galway-downs-temecula-wedding-photography-1000x667.jpg" alt="#" />
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
                        <h3>Music Video</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi?</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1570459725240-9c1f1532f78b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="#" />
                </div>

                {/* contact info */}
                <div className="row__1">
                    <div className="row__contact">
                        <h3>Let's make your next video together.</h3>
                        <p>1- Contact us, tell us about your project</p>
                        <p>2- We will contact you and discuss for the details</p>
                        <p>3-  We will send you a tailor-made quote for free.</p>
                    </div>
                    <button className="row__contact__btn">Book now</button>
                </div>

                <div className="row__1 ">
                    <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="#" />
                    <div className="col-1-of-2">
                        <h3>Product Promotion</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi?</p>
                    </div>

                </div>

                {/* contact info */}
                <div className="row__btm">
                    <h3>Contact us & Book an appointment</h3>
                    <button>Book now</button>
                </div>

                <div className="home__bottom">
                    <div className="home__card1">
                        <h2>Zeta Production</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit. </p>
                    </div>
                    <div className="home__card2">
                        <h2>Privacy Policy</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                            magnam id fuga cupiditate possimus earum expedita, nostrum
                            temporibus ab sit, fugit laudantium molestiae minus explicabo
                            pariatur ea inventore enim excepturi?</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    )
}

export default Home;
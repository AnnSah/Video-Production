import React from 'react';
import "@mui/icons-material";
import TheatersIcon from '@mui/icons-material/Theaters';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HdIcon from '@mui/icons-material/Hd';
import "./Home.css"
import Footer from '../Footer/Footer';
import HomeSection from './HomeSection';
import PageEnd from '../PageEnd';
import Fade from "react-reveal/Fade"
import { useHistory } from 'react-router-dom';



function Home() {
    const history = useHistory();
    return (
        <div className="home">
            <Fade left>
                <div className="home__info ">
                    <span>A video production to make?</span>
                    <button  className="home__btn">Contact Us</button>


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
                            <p>  <AddAPhotoIcon sx={{ fontSize: 100 }} style={{ minWidth: '150px' }} /> </p>
                            <p>  <TheatersIcon sx={{ fontSize: 100 }} style={{ minWidth: '150px' }} /></p>
                            <p> <OndemandVideoIcon sx={{ fontSize: 100 }} style={{ minWidth: '150px' }} /> </p>
                            <p>  <HdIcon sx={{ fontSize: 100 }} style={{ minWidth: '150px' }} /></p>

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
                        <HomeSection title="Drone"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                        magnam id fuga cupiditate possimus earum expedita, nostrum
                        temporibus ab sit, fugit laudantium molestiae minus explicabo
                        pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                        magnam id fuga cupiditate possimus earum expedita, nostrum
                        temporibus ab sit, fugit laudantium molestiae minus explicabo
                        pariatur ea inventore enim excepturi?"
                            src="https://www.coverdrone.com/eu/wp-content/uploads/sites/18/2019/04/AdobeStock_192987059-scaled.jpeg" />


                    </div>

                    <div className="row__1 ">
                        <HomeSection
                            src="https://www.linandjirsa.com/wp-content/uploads/010-galway-downs-temecula-wedding-photography-1000x667.jpg"
                            title="Wedding"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi?" />

                    </div>

                    <div className="row__1">
                        <HomeSection
                            src="https://images.unsplash.com/photo-1570459725240-9c1f1532f78b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            title="Music Video"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi?"/>

                    </div>

                    {/* contact info */}
                    <div className="row__1">
                        <div className="row__contact">
                            <h3>Let's make your next video together.</h3>
                            <p>1- Contact us, tell us about your project</p>
                            <p>2- We will contact you and discuss for the details</p>
                            <p>3-  We will send you a tailor-made quote for free.</p>
                        </div>
                        <button onClick={() => history.push("/contact")} className="row__contact__btn">Book now</button>
                    </div>

                    <div className="row__1 ">

                        <HomeSection
                            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            title="Product Promotion"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi?"/>

                    </div>

                    {/* contact info */}
                    {/* <div className="row__btm">
                    <h3>Contact us & Book an appointment</h3>
                    <button>Book now</button>
                </div> */}

                    <PageEnd title="Zeta Production"
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                magnam id fuga cupiditate possimus earum expedita, nostrum
                temporibus ab sit, fugit laudantium molestiae minus explicabo
                pariatur ea inventore enim excepturi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                magnam id fuga cupiditate possimus earum expedita, nostrum
                temporibus ab sit."

                        title2="Contact"
                        contact="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                magnam id fuga cupiditate possimus earum expedita, nostrum
                temporibus ab sit, fugit laudantium molestiae minus explicabo
                pariatur ea inventore enim excepturi?"/>

                </div>
            </Fade>
            <Footer />

        </div >

    )
}

export default Home;

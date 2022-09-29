import React from 'react';
import "./PageEnd.css";

function PageEnd() {
    return (
        <div className="page__bottom">
            <div className="page__card1">
                <h2>Zeta Production</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam id fuga cupiditate possimus earum expedita, nostrum temporibus ab sit, fugit laudantium molestiae minus explicabo pariatur ea inventore enim excepturi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam id fuga cupiditate possimus earum expedita, nostrum temporibus ab sit. </p>
            </div>
            <div className="page__card2">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam id fuga cupiditate possimus earum expedita, nostrum temporibus ab sit, fugit laudantium molestiae minus explicabo pariatur ea inventore enim excepturi?</p>

            </div>
        </div>
    )
}

export default PageEnd;

// const showMessage,setShowMessage= useState("false")
// const showMessageHandler ()=>{setShowMessage(!showMessage);}
// <button onClick={showMessageHandler}>{showMessage ? "Hide" : "Show"}Message <button/>


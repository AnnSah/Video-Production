import React from 'react';
import "./Contact.css";
import "@mui/icons-material";
import Fade from "react-reveal/Fade";
import PageEnd from './PageEnd';

function Contact() {
    return (

        <div className="form-container">
            <Fade left>
                <div className="contact__title">
                    <h2>Contact Us</h2>
                    <p>For any request, don't hesitate to contact us.</p>
                </div>
                <form method="POST" className="form__register">
                    <input className="form-field"
                        placeholder="Name"
                        name="Name" />

                    <input className="form-field"
                        placeholder="Email"
                        name="Email" />

                    <input className="form-field"
                        placeholder="Object"
                        name="Object" />
                    <textarea className="form-field"
                        placeholder="Message..."
                        name="Message" />
                    <button>Submit</button>
                </form>
            </Fade>
            <PageEnd />
        </div>

    )
}

export default Contact;
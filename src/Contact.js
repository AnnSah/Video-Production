import React, { useRef } from 'react';
import "./Contact.css";
import "@mui/icons-material";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
import PageEnd from './PageEnd';

function Contact() {
    // const form = useRef();

    // const sendEmail = event => {
    //     event.preventDefault();

    //     emailjs.sendForm("service_2yj56lp", "template_oet6pbi", form.current, "yyV_N2w6RmVauDsOq").then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // }

    return (

        <div className="form-container">
            <Fade left>
                <div className="contact__title">
                    <h2>Contact Us</h2>
                    <p>For any request, don't hesitate to contact us.</p>
                </div>
                <form className="form__register">
                    <input className="form-field"
                        placeholder="Name"
                        name="Name" />

                    <input className="form-field"
                        placeholder="Email"
                        name="Email" />

                    <textarea className="form-field"
                        placeholder="Message..."
                    />
                    <button>Submit</button>
                </form>
            </Fade>
            <PageEnd />
        </div>

    )
}

export default Contact;
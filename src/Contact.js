import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form className="form__register">
                <input className="form-field"
                    placeholder="Name"
                    name="Name" />

                <input className="form-field"
                    placeholder="Email"
                    name="Email" />

                <input className="form-field"
                    placeholder="Object"
                    name="Name" />
                <textarea className="form-field"
                    placeholder="Message"
                    name="Message" />
            </form>
        </div>
    )
}

export default Contact;
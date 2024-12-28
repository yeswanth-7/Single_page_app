import React from 'react';
import './index.css'

function ContactPage() {
    return (
        <div className="contact-page-container">
          <div className="contact-page">
            <h2>Contact Us</h2>
            <p className="contact-page-text">
              We would love to hear from you! Please feel free to reach out with any
              questions or feedback you might have.
            </p>
            <form className="contact-page-form">
              <input type="text" placeholder="Your Name" className="contact-page-input" />
              <input type="email" placeholder="Your Email" className="contact-page-input" />
              <textarea placeholder="Your Message" className="contact-page-textarea"></textarea>
              <button className="contact-page-button">Send Message</button>
            </form>
          </div>
        </div>
    );
}

export default ContactPage;
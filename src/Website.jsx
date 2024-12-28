// Website.js
import React from 'react';
import './index.css'; // Assume you have some basic styles

function Website() {
  return (
    <>
      

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>This is a simple landing page example built with React.</p>
            <button><a href="#about">Learn More</a></button>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Us</h2>
            <p>
              We are a team dedicated to providing the best user experience. Our aim is to deliver solutions
              that are simple, elegant, and effective.
            </p>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>Our Services</h2>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Consultation</li>
            </ul>
          </div>
        </section>


        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Feel free to reach out to us.</p>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </section>
      </main>

    </>
  );
}

export default Website;
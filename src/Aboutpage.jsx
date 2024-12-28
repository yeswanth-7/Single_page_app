import React from 'react';
import './index.css';

function AboutPage() {
    return (
        <div className="about-page-container">
           <div className="about-page">
             <h2>About Our Company</h2>
            <p className="about-page-text">
              We are a dedicated team of developers and designers passionate about creating
              exceptional web experiences. Our mission is to deliver innovative and user-friendly
              solutions that meet the needs of our clients and their customers.
           </p>
              <p className="about-page-text">
            With years of experience in the industry, we pride ourselves on our technical
            expertise and our commitment to quality. We strive to stay ahead of the curve
            by embracing new technologies and methodologies.
            </p>

             <h3 className="about-page-subheading">Our Core Values</h3>
            <ul className="about-page-list">
                 <li>Innovation</li>
                <li>Quality</li>
                <li>Customer Satisfaction</li>
                  <li>Teamwork</li>
             </ul>
          </div>
        </div>
    );
}

export default AboutPage;
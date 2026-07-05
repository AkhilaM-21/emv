import React from 'react';
import './About.css';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span className="text-gradient font-bold" style={{textTransform: 'uppercase', letterSpacing: '2px'}}>About Us</span>
              <h2>Dedicated to Building<br />Scalable Solutions</h2>
            </div>
            <p className="about-description">
              We specialize in providing top-tier technological solutions tailored to your business needs. 
              Our expertise in Microsoft Dynamics, Cloud Computing, and custom Application Development 
              ensures that your enterprise stays ahead of the curve.
            </p>
            <ul className="about-features">
              <li><CheckCircle className="check-icon" /> Microsoft Dynamics Implementation</li>
              <li><CheckCircle className="check-icon" /> Cloud Computing & Migration</li>
              <li><CheckCircle className="check-icon" /> Custom Application Development</li>
              <li><CheckCircle className="check-icon" /> Enterprise IT Solutions</li>
            </ul>
            <a href="#contact" className="btn-primary" style={{marginTop: '2rem'}}>
              Learn More
            </a>
          </div>
          <div className="about-visuals">
            <div className="about-card glass-panel card-1">
              <h3 className="text-gradient">15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="about-card glass-panel card-2">
              <h3 className="text-gradient">200+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="about-image glass-panel">
              <div className="abstract-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

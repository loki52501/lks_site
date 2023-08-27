import React from 'react';
import '../styles/main.css';
import{Lock,Shield,Code}from 'react-feather'
const About = () => {

  
    return (
        <section className="about-section">
    
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
        I possess a fervent interest in the captivating realms of Quantum Computing, Blockchain, and Cybersecurity, particularly as they intersect with the dynamic world of Data. Driven by an insatiable curiosity, I delve into these pioneering technologies to fuel innovation and fortify the digital landscape. My aspirations are directed towards becoming a proficient Data Analyst, armed with a statistical mindset that empowers me to decipher real-world challenges.
        </p>
      </div>
      <div className="interests-section">
        <h3 className="interests-heading">My Interests</h3>
        <div className="interests-list">
          <div className="interest-item">
            <Code/>
            <p>Quantum Computing</p>
          </div>
          <div className="interest-item">
            <Lock/>
            <p>Blockchain</p>
          </div>
          <div className="interest-item">
            <Shield/>
            <p>Cybersecurity</p>
          </div>
        </div>
      </div>
        {/* Rest of the content */}
      </section>
    );
  };
  
  export default About;



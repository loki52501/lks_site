
// Footer.js
import React from 'react';
import {Mail,Linkedin,GitHub  } from 'react-feather';
import '../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a  href="mailto:lokeshlks01@gmail.com" >
          <Mail style={{
          margin:" 40 40 40 auto",
        }} color="white" size={48} />
        </a>
        <a href="https://www.linkedin.com/in/lks-lokesh-6935b0197/" target="_blank" rel="noopener noreferrer" >
          <Linkedin  style={{
          margin:" 40 40 40 auto",
        }} color="white" size={48} />
        </a>
        <a href="https://github.com/loki52501" target="_blank" rel="noopener noreferrer" >
          <GitHub  style={{
          margin:" 40 40 40 auto",
        }} color="white" size={48} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Lokesh LKS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

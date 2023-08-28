// Layout.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/main.css';
import '../styles/layout.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (

  
    <div className="layout">
        <Header />
      <main className="content"></main>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/awards">Awards</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/collegeexperience">CollegeExperience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        {/* ... */}
      </nav>
      <div className="page-container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
import React from 'react';
import './styles/main.css';

import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CollegeExperience from './components/CollegeExperience';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    
    <Router>
 
     
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/awards" component={Awards} />
          <Route path="/skills" component={Skills} />
          <Route path="/collegeexperience" component={CollegeExperience} />
          <Route path="/projects" component={Projects} />
          {/* ... */}
          </Routes>
      
  
    </Router>
  );
};

export default App;

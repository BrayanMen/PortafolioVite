import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import AboutMe from './Component/AboutMe';
import Contact from './Component/Contact';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Experience from './Component/Experience';

function App() {
  const [activeSection, setActiveSection] = useState('')
  
  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <Navbar activeSection={activeSection}/>
      <div className="">
      <section id="">
        <Home setActiveSection={setActiveSection}/>
    </section>
    <section id="about-me">
        <AboutMe setActiveSection={setActiveSection}/>
    </section>
    <section id="skills">
        <Skills setActiveSection={setActiveSection}/>
    </section>
    <section id="projects">
        <Projects setActiveSection={setActiveSection}/>
    </section>
    <section id="experience">
        <Experience setActiveSection={setActiveSection}/>
    </section>
    <section id="contact">
        <Contact setActiveSection={setActiveSection}/>
    </section>
      </div>
    </Router>
  );
}

export default App;

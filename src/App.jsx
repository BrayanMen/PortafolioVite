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
  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <Navbar/>
      <div className="">
        <section id="">
          <Home />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;

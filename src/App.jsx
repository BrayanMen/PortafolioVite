import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import AboutMe from './Component/AboutMe';
import Contact from './Component/Contact';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
// import Experience from './Component/Experience';
import Footer from './Component/Footer';

function App() {
  const [showGoTopButton, setShowGoTopButton] = useState(false);

  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowGoTopButton(true);
      } else {
        setShowGoTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Navbar />
          {showGoTopButton && (
            <button className={styles.goToTopButton} onClick={handleGoTop}>
              ^
            </button>
          )}  
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
        {/* <section id="experience">
          <Experience />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;

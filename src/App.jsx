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
        <Routes>
          <Route path="/" element={<Home setActiveSection={setActiveSection}/>} />
          <Route path="/about-me" element={<AboutMe setActiveSection={setActiveSection}/>} />
          <Route path="/contact" element={<Contact setActiveSection={setActiveSection}/>} />
          <Route path="/skills" element={<Skills setActiveSection={setActiveSection}/>} />
          <Route path="/experience" element={<Experience setActiveSection={setActiveSection}/>} />
          <Route path="/projects" element={<Projects setActiveSection={setActiveSection}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

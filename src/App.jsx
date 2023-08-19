import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import AboutMe from './Component/AboutMe';
import Contact from './Component/Contact';

function App() {
  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

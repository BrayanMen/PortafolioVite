import React, { useEffect, useState } from 'react';
import ParticleBackground from '../assets/ParticleBackground';
import styles from './Home.module.scss';
import { Link, useLocation } from 'react-router-dom';
import picture1 from '../assets/Images/pic.png'
import download from '../assets/Images/Icons/download.png'
import cv from '../assets/CV.pdf'

export default function Home({setActiveSection}) {
  const [devRotate, setDevRotate] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setActiveSection(''); 
  }, [setActiveSection]);

  useEffect(() => {
    const rotate = setInterval(() => {
      setDevRotate((prevI) => (prevI + 1) % dev.length);
    }, 3000);
    
    return () => clearInterval(rotate);
  }, []);

  const dev = [
    'Desarrollador Web',
    'Desarrollador Full-Stack',
    'Desarrollador Front-End',
  ];
  return (
    <>
      <section id='home' className={styles.home}>
        <div className={styles.divIzq}>
          <div className={styles.titleIzq}>
          <h1>Brayan Mendoza</h1>
          <h2>{dev[devRotate].split(' ').map((word, index) => (
            <span key={index}>
                {word}
                {index < dev.length - 1 && ' '}
              </span>
            ))}
            </h2>
            </div>
            <div className={styles.btnH}>
            <button className={styles.btnSecond}>
              <a href={cv} download>CV <img src={download} alt='download' width={'30px'}>
              </img></a>
              </button>
            <button className={styles.btnThird}>
              <Link to='/contact'>Contáctame</Link>
              </button>
            </div>
        </div>
            <ParticleBackground/>
        <div className={styles.divDer}>
          <div>
            <img className={styles.imgPic}
            src={picture1} 
            alt="pic" />
          </div>
        </div>
      </section>
    </>
  );
}

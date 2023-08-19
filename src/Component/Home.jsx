import React, { useEffect, useState } from 'react';
import ParticleBackground from '../assets/ParticleBackground';
import styles from './Home.module.scss';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [devRotate, setDevRotate] = useState(0);
  const location = useLocation();

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
      <section id='home'>
          <ParticleBackground/>
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
            <button>Portafolio</button>
            </div>
        </div>
      </section>
    </>
  );
}

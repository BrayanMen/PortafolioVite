import React, { useEffect } from 'react';
import styles from './AboutMe.module.scss';
import { useLocation } from 'react-router-dom';

export default function AboutMe({setActiveSection}) {
  useEffect(()=>{
    setActiveSection('about-me')
  },[setActiveSection])
  const location = useLocation();

  return (
    <section className={styles.aboutContainer} id="about-me">
      <div>
        <img></img>
      </div>
      <div className={styles.divAbout}>
        <h1 className="titleAbout">Sobre mi:</h1>
        <p className="pAbput">
        Apasionado desarrollador web con creatividad y pasión por la tecnología. Creo soluciones funcionales y únicas, fusionando habilidades técnicas con innovación. Siempre en búsqueda de nuevas tendencias y tecnologías para ofrecer resultados de calidad. Busco proyectos desafiantes para transformar ideas en realidad.{' '}
        </p>
        
      </div>
    </section>
  );
}

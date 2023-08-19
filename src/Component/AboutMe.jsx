import React, { useEffect } from 'react';
import styles from './AboutMe.module.scss';
import { useLocation } from 'react-router-dom';

export default function AboutMe() {
  const location = useLocation();

  return (
    <section className={styles.aboutContainer} id="about-me">
      <div className={styles.divAbout}>
        <h2 className="titleAbout">Sobre mi:</h2>
        <p className="pAbput">
          ¡Hola! Mi nombre es Brayan Mendoza y tengo una pasión por las artes
          marciales, las artes plásticas y la reparación de objetos. Además, me
          encanta la tecnología y he adquirido habilidades valiosas en trabajos
          previos, como instructor de kickboxing donde he aprendido a manejar de
          forma efectiva grandes grupos, enseñar de manera adecuada y cerrajero
          donde he adquirido habilidades de reparación y mejora de mecanismos de
          seguridad.{' '}
        </p>
        <p className="pAbput">
          Desde finales de 2021, he estado dedicando mi tiempo al aprendizaje y
          la práctica de la programación, trabajando en proyectos de desarrollo
          web utilizando distintas tecnologias. He tenido la oportunidad de
          trabajar en proyectos personales y en equipo, aprendiendo a colaborar
          y resolver problemas de manera efectiva.
        </p>
        <p className="pAbput">
          Estoy motivado por la posibilidad de crear cosas nuevas y
          emocionantes, así como por el desafío de resolver problemas complejos.
          Creo que mis habilidades y mi pasión por la tecnología me hacen una
          gran adición a cualquier equipo y estoy emocionado por seguir
          creciendo y aprendiendo en este campo emocionante.
        </p>
      </div>
    </section>
  );
}

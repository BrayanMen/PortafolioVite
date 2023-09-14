import React, { useEffect, useState } from 'react';
import styles from './AboutMe.module.scss';

export default function AboutMe() {
  const [age, setAge] = useState(0);
  const [programming, setProgramming] = useState(0);



  const birthDate = new Date(1995, 4, 8);
  const calculateAge = () => {
    const date = new Date();
    const diff = date.getFullYear() - birthDate.getFullYear();
    const birthdayOccurred =
      date.getMonth() > birthDate.getMonth() ||
      (date.getMonth() === birthDate.getMonth() &&
        date.getDate() >= birthDate.getDate());
    const calculated = birthdayOccurred ? diff : diff - 1;
    setAge(calculated);

    const programmingStartDate = new Date(2021, 11, 15);
    const timeDiff = Math.abs(date - programmingStartDate);
    const year = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const month = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44)
    );
    const day = Math.floor(
      ((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) %
        (1000 * 60 * 60 * 24 * 30.44)) /
        (1000 * 60 * 60 * 24)
    );

    setProgramming(
      `${year} ${year > 1 ? 'años' : 'año'}, ${month} ${
        month > 1 ? 'meses' : 'mes'
      } y ${day} ${day > 1 ? 'días' : 'dia'}`
    );
  };

  useEffect(() => {
    calculateAge();
    const interval = setInterval(() => {
      calculateAge();
    }, 1000 * 60 * 60 * 24);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={styles.aboutContainer} id="about-me">
      <div className={styles.divI}>
        <div>
          <div>
            <img></img>
          </div>
          <div className={styles.divAbout}>
            <h1 className="titleAbout">Sobre mi:</h1>
            <p className="pAbput">
              Apasionado desarrollador web con creatividad y pasión por la
              tecnología. Creo soluciones funcionales y únicas, fusionando
              habilidades técnicas con innovación. Siempre en búsqueda de nuevas
              tendencias y tecnologías para ofrecer resultados de calidad. Busco
              proyectos desafiantes para transformar ideas en realidad.{' '}
            </p>
            <ul className={styles.aboutList}>
              <li className={styles.aboutItem}>
                <strong>Edad: </strong>
                {age}
              </li>
              <li className={styles.aboutItem}>
                <strong>Tiempo Programando: </strong>
                {programming}
              </li>
              <li className={styles.aboutItem}>
                <strong>Residencia:</strong> Argentina.
              </li>
              <li className={styles.aboutItem}>
                <strong>Direccion:</strong> Buenos Aires, Avellaneda.
              </li>
              {/* <li className={styles.aboutItem}>
                <strong>Telefono:</strong> +54 9 11 2730 0038
              </li>
              <li className={styles.aboutItem}>
                <strong>E-mail:</strong>
                <a href="mailto:brayanjmr880@gmail.com">
                  {' '}
                  brayanjmr880@gmail.com
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

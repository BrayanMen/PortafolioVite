import React from 'react';
import styles from './Footer.module.scss';

const footItems = [
  {
    id: 1,
    name: '',
    title: 'Inicio',
  },
  {
    id: 2,
    name: 'about-me',
    title: 'Sobre mi',
  },
  {
    id: 3,
    name: 'skills',
    title: 'Habilidades',
  },
  {
    id: 4,
    name: 'projects',
    title: 'Proyectos',
  },
  // {
  //   id: 5,
  //   name: 'experience',
  //   title: 'Experiencia',
  // },
  {
    id: 6,
    name: 'contact',
    title: 'Contacto',
  },
];

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
    <footer className={styles.footer}>
      <div className={styles.waves}>
        <div className={styles.wave} id={styles.wave1}></div>
        <div className={styles.wave} id={styles.wave2}></div>
        <div className={styles.wave} id={styles.wave3}></div>
        <div className={styles.wave} id={styles.wave4}></div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className={styles.menu}>
      {footItems.map(({ id, name, title }) => (
          <li
            key={id}
            className={styles.menu__item}>
            <a 
            href={`#${name}`}
            className={styles.menu__link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
      <p>&copy;2022 Brayan Mendoza | All Rights Reserved</p>
    </footer>
    </div>
  );
}

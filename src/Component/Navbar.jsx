import { useState } from 'react';
import styles from './Navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = (sectionId) => {
    setMenuActive(false);
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.logo}></div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {!menuActive ? 'Menu' : 'Close'}
      </button>
      <ul className={`${styles.navList} ${menuActive ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              location.pathname === '/' ? styles.active : ''
            }`} onClick={() => closeMenu()}
          >
            Inicio
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/about-me"
            className={`${styles.navLink} ${
              location.pathname === '/about-me' ? styles.active : ''
            }`}  onClick={() => closeMenu()}
          >
            Sobre Mí
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/projects"
            className={`${styles.navLink} ${
              location.pathname === '/projects' ? styles.active : ''
            }`}  onClick={() => closeMenu()}
          >
            Proyectos
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/skills"
            className={`${styles.navLink} ${
              location.pathname === '/skills' ? styles.active : ''
            }`}  onClick={() => closeMenu()}
          >
            Habilidades
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/experience"
            className={`${styles.navLink} ${
              location.pathname === '/experience' ? styles.active : ''
            }`}  onClick={() => closeMenu()}
          >
            Experiencia
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/contact"
            className={`${styles.navLink} ${
              location.pathname === '/contact' ? styles.active : ''
            }`}  onClick={() => closeMenu()}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;






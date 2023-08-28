import { useState } from 'react';
import styles from './Navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import ToggleIcon from '../assets/Images/toggleIcon';

const navItems = [
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
  {
    id: 5,
    name: 'experience',
    title: 'Experiencia',
  },
  {
    id: 6,
    name: 'contact',
    title: 'Contacto',
  },
];

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  // const location = useLocation();
  const [activeLink, setActiveLink] = useState(''); 

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.logo}></div>
      <button className={`${styles.menuToggle} ${menuActive ? styles['menu-closed'] : ''}`} onClick={toggleMenu}>
        {!menuActive ? <ToggleIcon/> : `Cerrar`}
      </button>
      <ul className={`${styles.navList} ${menuActive ? styles.active : ''}`}>
      {navItems.map(({ id, name, title }) => (
          <li
            key={id}
            className={styles.navItem}>
            <a 
            href={`#${name}`}
            className={`${styles.navLink} ${
             activeLink === `${name}` ? styles.active : ''
            }`}
            onClick={() => {closeMenu();
             handleNavLinkClick(`${name}`)}}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;






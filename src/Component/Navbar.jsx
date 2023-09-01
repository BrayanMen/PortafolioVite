import { useState } from 'react';
import styles from './Navbar.module.scss';
import ToggleIcon from '../assets/Images/toggleIcon';
import git from '../assets/Images/Icons/github-fill.png';
import linked from '../assets/Images/Icons/linkedin.png'
import mail from '../assets/Images/Icons/mail.png'
// import { BsGithub } from 'react-icons/bs';

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
      <div className={`${styles.divNetwork} ${!menuActive ? `${styles.showMenu}` : ''}`}>
        <a href='https://github.com/BrayanMen'><img src={git} alt="git" width={'40px'} /></a>
        <a href='https://www.linkedin.com/in/brayan-mendoza-52625a160'><img src={linked} alt="Linkdn" width={'40px'}/></a>
        <a href="mailto:brayanjmr880@gmail.com"><img src={mail} alt="Mail" width={'30px'}/></a>
      </div>
    </nav>
  );
}

export default Navbar;






import React,{ useEffect } from 'react';
import styles from './Contact.module.scss';
import { useLocation } from 'react-router-dom';

function Contact({setActiveSection}) {
  useEffect(() => {
    setActiveSection('contact'); 
  }, [setActiveSection]);
  const location = useLocation();

  return (
    <section id='contact' className={styles.divContact}>
      <div>
        <div>Contacto
  
        </div>
      </div>
    </section>
  );
}

export default Contact;

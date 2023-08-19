import React,{ useEffect } from 'react';
import styles from './Contact.module.scss';
import { useLocation } from 'react-router-dom';

function Contact() {
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

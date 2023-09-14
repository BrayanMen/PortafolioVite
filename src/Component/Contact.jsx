import React, { useEffect, useState } from 'react';
import styles from './Contact.module.scss';
import mail from '../assets/Images/Icons/mail.png'


function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = () => {
    setFormData({
      nombre: formData.nombre,
      correo: formData.correo,
      asunto: formData.asunto,
      mensaje: formData.mensaje,
    });
  };
  return (
    <section id="contact" className={styles.sectContact}>
      <div className={styles.contactCard}>
        <div className={styles.contactForm}>
          <h1>Contactame</h1>
          <form>
            <div>
              <label htmlFor="correo">Correo</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="asunto">Asunto:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje:</label>
              <input type="text" />
            </div>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <h1>Informacion de Contacto</h1>
          <div>
            <strong>Ponte en contacto conmigo</strong>
          </div>
          <div>
            <i></i>
            <span>(54) 9 11 2730 0038</span>
          </div>
          <div>
            <img src={mail} alt='Mail' width={'30px'}/>
            <span>
              <a href="mailto:brayanjmr880@gmail.com">brayanjmr880@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React, { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.scss';
import mail from '../assets/Images/Icons/mail.png';
import phone from '../assets/Images/Icons/whatsapp-icon.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const formEmail = useRef();

  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.correo)) {
      setFormStatus('Por favor, ingrese un correo electrónico válido.');
      return;
    }
    console.log(formEmail);
    const serviceId = 'service_iuw0seb';
    const templateId = 'template_f3l7gme';
    const apikey = '0cVPQqj-PG7k2HuBf';
    emailjs
      .sendForm(serviceId, templateId, formEmail.current, apikey)
      .then((r) => {
        setFormStatus(
          'El formulario se envió con éxito. Gracias por contactarnos.'
        );
        setFormData({
          nombre: '',
          correo: '',
          asunto: '',
          mensaje: '',
        });
      })
      .catch((error) => {
        setFormStatus('Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo más tarde.');
        console.log(error);
      });
  };
  return (
    <section id="contact" className={styles.sectContact}>
      <div className={styles.contactCard}>
        <div className={styles.contactForm}>
          <form ref={formEmail} onSubmit={handleSubmitForm}>
            <h1 className={styles['h1FormInfo']}>Contactame</h1>
            {formStatus && <div className={styles.formStatus}><h4>{formStatus}</h4></div>}
            <br/>
            <div className={styles['inputBox']}>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChangeForm}
                required
              />
              <label htmlFor="nombre">Nombre Completo:</label>
            </div>
            <div className={styles['inputBox']}>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChangeForm}
                required
              />
              <label htmlFor="correo">Correo:</label>
            </div>
            <div className={styles['inputBox']}>
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChangeForm}
                required
              />
              <label htmlFor="asunto">Asunto:</label>
            </div>
            <div className={styles['inputBox']}>
              <textarea
                cols="30"
                rows="8"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChangeForm}
                required
              ></textarea>
              <label htmlFor="mensaje">Mensaje:</label>
            </div>
            <div className={styles['divSubmit']}>
              <input
                className={styles['inputSubmit']}
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <div>
            <h1 className={styles['h1FormInfo']}>Informacion de Contacto</h1>
            <div className={styles.contactContainerInfo}>
              <strong>Ponte en contacto conmigo</strong>
              <div className={styles.contactCardsInfo}>
                <a
                  href="mailto:brayanjmr880@gmail.com"
                  className={styles.tCardsInfoA}
                >
                  <img src={mail} alt="Mail" width={'30px'} />
                </a>
                <span>brayanjmr880@gmail.com</span>
              </div>
              <div className={styles.contactCardsInfo}>
                <a
                  href="https://wa.me/5491127300038"
                  className={styles.tCardsInfoA}
                >
                  <img src={phone} alt="phone" width={'30px'} />
                </a>
                <p>+(54) 9 11 2730-0038</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

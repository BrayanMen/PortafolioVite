import React, { useEffect, useState } from 'react';
import styles from './Contact.module.scss';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto:'',
    mensaje:'',
  })

  const handleChangeForm = (e)=>{
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    })
    )
  }

  const handleSubmitForm = ()=>{
    setFormData({
      nombre: formData.nombre,
      correo: formData.correo,
      asunto: formData.asunto,
      mensaje: formData.mensaje,
    });
  }
  return (
    <section id="contact" className={styles.divContact}>
      <div>
        <form>
          <h1>Contacto</h1>
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
    </section>
  );
}

export default Contact;

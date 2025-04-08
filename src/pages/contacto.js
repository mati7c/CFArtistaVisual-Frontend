import React, { useState } from 'react';
import Layout from './Layout';
import '../styles/contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { sendEmail } from '../services/emailService'; // <--- Importar función del servicio

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await sendEmail(formData); // <--- Usar la función del servicio

    if (success) {
      setStatus('Mensaje enviado con éxito');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Error al enviar el mensaje');
    }
  };

  return (
    <Layout>
      <div className="contacto">
        <h2 className="contactotitulo">Contacto</h2>
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribí tu mensaje acá..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>

        <div className="iconos">
          <a href="https://www.instagram.com/cecilia___ferreyra" target="_blank" rel="noopener noreferrer" className="icono">
            <FontAwesomeIcon icon={faInstagram} />
            <span>@cecilia___ferreyra</span>
          </a>
          <a href="https://www.facebook.com/cecilia.ferreyra.7543" target="_blank" rel="noopener noreferrer" className="icono">
            <FontAwesomeIcon icon={faFacebook} />
            <span>Cecilia Ferreyra</span>
          </a>
          <a href="mailto:ceciliaferreyra74@gmail.com" className="icono">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>ceciliaferreyra74@gmail.com</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;

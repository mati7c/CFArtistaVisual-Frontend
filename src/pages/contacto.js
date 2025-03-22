import React, { useState } from 'react';
import axios from 'axios'; // Importa Axios para hacer solicitudes HTTP
import Layout from './Layout'; // Importa el Layout
import '../styles/contacto.css'; // Importa los estilos específicos para este componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesome para los íconos
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Íconos de redes sociales
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Ícono de correo

const Contacto = () => {
  // Estados para manejar los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Estado para manejar el mensaje de éxito o error
  const [status, setStatus] = useState('');

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    try {
      // Envía los datos del formulario al endpoint
      const response = await axios.post('http://localhost:8080/email/send', formData, {
        headers: {
          'Content-Type': 'application/json', // Especifica que los datos son JSON
        },
      });

      // Si la solicitud es exitosa, muestra un mensaje de éxito
      if (response.status === 200) {
        setStatus('Mensaje enviado con éxito');
        setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
      }
    } catch (error) {
      // Si hay un error, muestra un mensaje de error
      setStatus('Error al enviar el mensaje');
      console.error('Error:', error);
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
          <a href="https://www.facebook.com/cecilia.ferreyra.7543?rdid=0Stk6b2oz1xUBLjI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15oiedd3Cw%2F#" target="_blank" rel="noopener noreferrer" className="icono">
            <FontAwesomeIcon icon={faFacebook} />
            <span>Cecilia Ferreyra</span>
          </a>
          <a href="mailto:ceciliaferreyra74@gmail.com " className="icono">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>ceciliaferreyra74@gmail.com </span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
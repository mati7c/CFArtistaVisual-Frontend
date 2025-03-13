import { useState } from "react";
import "../styles/styles.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div>
      <div className="contacto">
        <h2 className="contactotitulo">Contacto</h2>
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
            />

            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              rows="6"
              required
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="iconos">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icono">
          <i className="fab fa-instagram"></i>
          <span>@cecilia__ferreyra</span>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icono">
          <i className="fab fa-facebook-f"></i>
          <span>Cecilia Ferreyra</span>
        </a>
        <a href="mailto:ceciliaferreyra@gmail.com" className="icono">
          <i className="fas fa-envelope"></i>
          <span>ceciliaferreyra@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contacto;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hamburgerMenu.css"; // Archivo de estilos para el menú

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alternar entre abrir y cerrar el menú
  };

  return (
    <div className="hamburger-menu">
      {/* Botón de hamburguesa */}
      <button className="hamburger-icon" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      {/* Menú desplegable */}
      <div className={`menu-content ${isOpen ? "open" : ""}`}>
        {/* Botón de cierre (X) */}
        <button className="close-button" onClick={toggleMenu}>
          &times; {/* Símbolo de "X" */}
        </button>

        {/* Opciones del menú */}
        <Link to="/" onClick={toggleMenu}>Inicio</Link>
        <Link to="/bio" onClick={toggleMenu}>Bio</Link>
        <Link to="/obras" onClick={toggleMenu}>Obras</Link>
        <Link to="/muestras" onClick={toggleMenu}>Muestras</Link>
        <Link to="/procesos" onClick={toggleMenu}>Procesos</Link>
        <Link to="/statement" onClick={toggleMenu}>Statement</Link>
        <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
        
      </div>
    </div>
  );
};

export default HamburgerMenu;
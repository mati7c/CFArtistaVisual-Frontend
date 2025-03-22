import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import Fondo_2 from "../images/Fondo -2.jpeg";
import Fondo_1 from "../images/Fondo -1.jpeg";
import Fondo0 from "../images/Fondo 0.jpeg";
import Fondo1 from "../images/Fondo 1.jpg";
import Fondo2 from "../images/Fondo 2.jpg";
import Fondo3 from "../images/Fondo 3.jpg";
import "../styles/inicio.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const images = [Fondo0, Fondo_1, Fondo_2, Fondo1, Fondo2, Fondo3];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alternar entre abrir y cerrar el menú
  };

  return (
    <div className="hamburger-menu-inicio">
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

// Header específico para Inicio
const HeaderInicio = () => (
  <header className="header">
    {/* Logo y nombre */}
    <div className="titulo">
      <p className="nombre">Cecilia Ferreyra Artista Visual</p>
    </div>

    {/* Opciones de navegación */}
    <nav className="header-nav">
      <Link to="/">Inicio</Link>
      <Link to="/bio">Bio</Link>
      <Link to="/obras">Obras</Link>
      <Link to="/muestras">Muestras</Link>
      <Link to="/procesos">Procesos</Link>
      <Link to="/statement">Statement</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>

    {/* Ícono de login */}
    <Link to="/login" className="login-icon">
      <FontAwesomeIcon icon={faUser} size="lg" />
    </Link>
  </header>
);


// Footer específico para Inicio
const FooterInicio = () => (
  <div className="finicio">
    <div className="social-icons">
      <a href="https://www.instagram.com/cecilia___ferreyra" target="_blank" rel="noopener noreferrer" className="icon instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/cecilia.ferreyra.7543?rdid=0Stk6b2oz1xUBLjI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15oiedd3Cw%2F#" target="_blank" rel="noopener noreferrer" className="icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="mailto:ceciliaferreyra74@gmail.com" className="icon email">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </div>
);

export default function Inicio() {
  return (
    <div id="inicio" className="relative w-full h-full flex-grow">
      {/* Header específico para Inicio */}
      <HeaderInicio />
      <HamburgerMenu /> {/* Menú de hamburguesa */}
      {/* Carrusel de fondo */}
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={1000}
        stopOnHover={false}
        className="carousel-container" // Clase adicional para el carrusel
      >
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image}
              alt={`Fondo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Contenido principal (main) */}
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
        <div className="nombre-container">
          <p className="centro text-5xl font-bold">Cecilia Ferreyra</p>
        </div>
        <div className="titulo-container">
          <p className="centro2 text-2xl">Artista Visual</p>
        </div>
      </main>

      {/* Footer específico para Inicio */}
      <FooterInicio />
    </div>
  );
}
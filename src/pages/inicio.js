import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import Fondo1 from "../images/Fondo 1.jpg";
import Fondo2 from "../images/Fondo 2.jpg";
import Fondo3 from "../images/Fondo 3.jpg";
import logo from "../images/logotia-removebg-preview.png"; // Importa el logo
import "../styles/inicio.css";
import { Link } from "react-router-dom";

const images = [Fondo1, Fondo2, Fondo3];

// Header específico para Inicio
const HeaderInicio = () => (
  <header>
    <div className="titulo">
      <img id="logoinicio" src={logo} alt="logotia" />
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
  </header>
);

// Footer específico para Inicio
const FooterInicio = () => (
  <div className="finicio">
    <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="mailto:correo@ejemplo.com" className="icon email">
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
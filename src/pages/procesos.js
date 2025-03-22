import React, { useEffect, useState } from 'react';
import Layout from './Layout'; // Importa el Layout
import '../styles/procesos.css'; // Importa los estilos específicos para este componente
import Imagen1 from "../images/WhatsApp Image 2023-04-25 at 9.30.45 AM 1.jpeg";
import Imagen2 from "../images/WhatsApp Image 2022-10-17 at 5.59.18 PM.jpeg";
import Imagen3 from "../images/Obra Espacio Verde Cecilia Ferreyra.jpg";

const Procesos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalSlides = document.querySelectorAll('.procesos-slide').length;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Cambiado a 5000 milisegundos (5 segundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  useEffect(() => {
    const slides = document.querySelector('.procesos-slides');
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <Layout>
      <div className="procesos-container">
        <h2 className="procesos-h2">Procesos</h2>
        <div className="procesos-content">
          {/* Carrusel de imágenes */}
          <div className="procesos-slider">
            <div className="procesos-slides">
              <div className="procesos-slide">
                <img src={Imagen1} alt="Imagen 1" />
              </div>
              <div className="procesos-slide">
                <img src={Imagen2} alt="Imagen 2" />
              </div>
              <div className="procesos-slide">
                <img src={Imagen3} alt="Imagen 3" />
              </div>
            </div>
          </div>

          {/* Texto resumido */}
          <div className="procesos-texto">
            <p>
              La obra de Cecilia Ferreyra es una búsqueda constante de lo esencial, donde la
              naturaleza y lo pictórico se entrelazan para crear un diálogo entre el mundo
              interno y externo. A través de la pintura, el dibujo y el bordado, se exploran
              texturas, colores y gestos que dejan huella de una experiencia profunda y
              significativa. Cada obra es un viaje hacia lo invisible, donde la intuición y la
              materialidad se unen para evocar paisajes visuales y sonoros, invitando al
              espectador a sumergirse en una dimensión orgánica y etérea.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Procesos;
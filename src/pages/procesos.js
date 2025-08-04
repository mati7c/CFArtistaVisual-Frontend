import React, { useEffect, useState } from 'react';
import Layout from './Layout'; // Importa el Layout
import '../styles/procesos.css'; // Importa los estilos específicos para este componente
import Imagen1 from "../images/WhatsApp Image 2023-04-25 at 9.30.45 AM 1.jpeg";
import Imagen2 from "../images/WhatsApp Image 2022-10-17 at 5.59.18 PM.jpeg";
import Imagen3 from "../images/Obra Espacio Verde Cecilia Ferreyra.jpg";
import Imagen4 from "../images/Proc1.jpeg";
import Imagen5 from "../images/Proc2.jpeg";
import Imagen6 from "../images/Proc3.jpeg";
import Imagen7 from "../images/Proc4.jpeg";

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
              <div className="procesos-slide">
                <img src={Imagen4} alt="Imagen 4" />
              </div>
              <div className="procesos-slide">
                <img src={Imagen5} alt="Imagen 5" />
              </div>
              <div className="procesos-slide">
                <img src={Imagen6} alt="Imagen 6" />
              </div>
              <div className="procesos-slide">
                <img src={Imagen7} alt="Imagen 7" />
              </div>
            </div>
          </div>

          {/* Texto resumido */}
          <div className="procesos-texto">
            <p>
              Una búsqueda constante, a través de la exploración matérica y en conexión con la naturaleza.
            </p>
            <p>
              Así la pintura, el dibujo, el textil, sus posibles integraciones, y otras exploraciones con el
              material, me permiten traer al presente lo que se va hilvanando a través del tiempo. Hay
              búsquedas que aparecen transitando el proceso mismo, casi imprevisiblemente, otras, que
              necesitan sedimentarse, dando respuestas y generando nuevas preguntas. Mientras avanzo en
              este camino, lo experiencial, lo gestual, lo sutil, la huella, lo natural, lo informe, lo imprevisible,
              van encontrando diferentes formas de manifestarse.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Procesos;
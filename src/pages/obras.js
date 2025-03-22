import React, { useState } from "react";
import Layout from "./Layout";
import PinturaImage from "../images/Pintura.jpg";
import DibujoImage from "../images/Dibujo.jpg";
import TextilImage from "../images/Textil.jpg";
import CarruselObras from "./CarruselObras";
import "../styles/obras.css";

const Obras = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleOptionClick = (typeId) => {
    setSelectedType(typeId);
  };

  const handleCloseCarrusel = () => {
    setSelectedType(null);
  };

  return (
    <>
      {/* Fondo oscuro fuera del Layout */}
      {selectedType && <div className="dark-background">
                  {/* Mostrar el carrusel si hay un tipo seleccionado */}
                  {selectedType && (
            <CarruselObras typeId={selectedType} onClose={handleCloseCarrusel} />
          )}</div>}

      <Layout>
        <div className="obras-container">
          <h1 className="obras-title">Elije tu camino</h1>
          <div className="obras-options">
            {/* Opción de Pintura */}
            <div className="obra-option" onClick={() => handleOptionClick(4)}>
              <div className="image-container">
                <img src={PinturaImage} alt="Pintura" className="obra-image" />
              </div>
              <p className="obra-description">
                La pintura es un viaje hacia lo esencial, donde trazos y colores revelan lo invisible. Un diálogo entre el mundo interno y el externo, transformando el lienzo en huella.
              </p>
            </div>

            {/* Opción de Dibujo */}
            <div className="obra-option" onClick={() => handleOptionClick(5)}>
              <div className="image-container">
                <img src={DibujoImage} alt="Dibujo" className="obra-image" />
              </div>
              <p className="obra-description">
                El dibujo captura lo efímero en líneas y formas. Un gesto intuitivo que fluye como un paisaje visual, evocando ritmos internos y resonancias sutiles.
              </p>
            </div>

            {/* Opción de Textil */}
            <div className="obra-option" onClick={() => handleOptionClick(6)}>
              <div className="image-container">
                <img src={TextilImage} alt="Textil" className="obra-image" />
              </div>
              <p className="obra-description">
                El textil es un tejido de tiempo y memoria. Hilos y puntadas trazan un mapa de lo vivido, como un eco de la naturaleza que nos habita.
              </p>
            </div>
          </div>


        </div>
      </Layout>
    </>
  );
};

export default Obras;
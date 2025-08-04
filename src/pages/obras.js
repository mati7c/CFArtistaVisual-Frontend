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
          <h1 className="obras-title">Cada medio se presenta como una posibilidad de materializar un sentir profundo, en conexión conmigo misma, a través de la percepción intuitiva y sensible de la naturaleza que me rodea e integra.</h1>
          <div className="obras-options">
            {/* Opción de Pintura */}
            <div className="obra-option" onClick={() => handleOptionClick(4)}>
              <div className="image-container">
                <img src={PinturaImage} alt="Pintura" className="obra-image" />
              </div>
              <p className="obra-description">
                Pinturas
              </p>
              <p className="obra-description">
                La potencialidad de la materia pictórica, como experiencia de una dimensión sensible y hacia una expansión de la pintura.
              </p>
            </div>

            {/* Opción de Dibujo */}
            <div className="obra-option" onClick={() => handleOptionClick(5)}>
              <div className="image-container">
                <img src={DibujoImage} alt="Dibujo" className="obra-image" />
              </div>
              <p className="obra-description">
                Dibujos
              </p>
              <p className="obra-description">
                Lo gestual, registros de un instante que deja huella.
              </p>
            </div>

            {/* Opción de Textil */}
            <div className="obra-option" onClick={() => handleOptionClick(6)}>
              <div className="image-container">
                <img src={TextilImage} alt="Textil" className="obra-image" />
              </div>
              <p className="obra-description">
                Textil
              </p>
              <p className="obra-description">
                La trama del tiempo, hacia una búsqueda interior.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Obras;
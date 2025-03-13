import React from "react";
import "../styles/styles.css";

const Muestras = () => {
  const muestras = [
    "Descripción 1",
    "Descripción 2",
    "Descripción 3",
    "Descripción 4",
    "Descripción 5",
  ];

  return (
    <div>
      <h2 className="muestra">Muestras</h2>
      <div className="contenedor">
        {muestras.map((desc, index) => (
          <div className="fila" key={index}>
            <div className="placeholder"></div>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Muestras;

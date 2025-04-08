// CarruselObras.jsx
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/obras.css";

// Importá la función del servicio
import { getObrasByType } from "../services/pieceService";

const CarruselObras = ({ typeId, onClose }) => {
  const [obras, setObras] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchObras = async () => {
      const filteredObras = await getObrasByType(typeId);
      setObras(filteredObras);
    };

    fetchObras();
  }, [typeId]);

  const handleObraClick = (id) => {
    navigate(`/obra/${id}`);
  };

  const renderObras = () => {
    const obrasRenderizadas = [];

    for (let i = 0; i < obras.length; i++) {
      const obra = obras[i];
      obrasRenderizadas.push(
        <div
          key={obra.id}
          className="obra-carousel-item"
          onClick={() => handleObraClick(obra.id)}
        >
          <div className="image-container1">
            <img src={obra.imageUrls[0]} alt={obra.name} className="obra-carousel-image" />
          </div>
          <div className="obra-details">
            <h2>{obra.name}</h2>
          </div>
        </div>
      );
    }

    return obrasRenderizadas;
  };

  return (
    <div className="carrusel-overlay">
      <button className="close-button1" onClick={onClose}>
        &times;
      </button>

      <div className="carrusel-container">
        {obras.length > 0 ? (
          <Carousel showThumbs={false} infiniteLoop={true} selectedItem={0}>
            {renderObras()}
          </Carousel>
        ) : (
          <p>Cargando obras...</p>
        )}
      </div>
    </div>
  );
};

export default CarruselObras;

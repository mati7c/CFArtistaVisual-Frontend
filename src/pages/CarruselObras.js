import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "../styles/obras.css";

const CarruselObras = ({ typeId, onClose }) => {
  const [obras, setObras] = useState([]); // Estado para almacenar las obras
  const navigate = useNavigate(); // Para navegar a la página de detalles

  // Consume el endpoint para obtener las obras
  useEffect(() => {
    const fetchObras = async () => {
      try {
        const response = await axios.get("http://localhost:8080/piece/list");
        const filteredObras = response.data.filter(
          (obra) => obra.typeId === typeId && obra.imageUrls && obra.imageUrls.length > 0
        );
        setObras(filteredObras);
        console.log(filteredObras); // Verifica que las obras se están filtrando correctamente
      } catch (error) {
        console.error("Error fetching obras:", error);
      }
    };

    fetchObras();
  }, [typeId]);

  // Función para manejar el clic en una obra
  const handleObraClick = (id) => {
    navigate(`/obra/${id}`); // Navegar a la página de detalles
  };

  // Función para renderizar las obras usando un bucle for
  const renderObras = () => {
    const obrasRenderizadas = []; // Array para almacenar los elementos renderizados

    for (let i = 0; i < obras.length; i++) {
      const obra = obras[i];
      obrasRenderizadas.push(
        <div
          key={obra.id}
          className="obra-carousel-item"
          onClick={() => handleObraClick(obra.id)} // Manejar el clic en la obra
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

    return obrasRenderizadas; // Retornar el array de elementos renderizados
  };

  return (
    <div className="carrusel-overlay">
      <button className="close-button1" onClick={onClose}>
        &times; {/* Botón para cerrar el carrusel */}
      </button>

      <div className="carrusel-container">
        {obras.length > 0 ? ( // Solo renderizar el carrusel si hay obras
          <Carousel showThumbs={false} infiniteLoop={true} selectedItem={0}>
            {renderObras()}
          </Carousel>
        ) : (
          <p>Cargando obras...</p> // Mensaje de carga mientras se obtienen las obras
        )}
      </div>
    </div>
  );
};

export default CarruselObras;
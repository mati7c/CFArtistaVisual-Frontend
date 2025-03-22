import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import "../styles/obraDetalle.css"; // Archivo CSS para estilos
import Layout from './Layout'; // Importa el Layout

const ObraDetalle = () => {
  const { id } = useParams(); // Obtener el ID de la obra desde la URL
  const [obra, setObra] = useState(null); // Estado para almacenar los detalles de la obra

  // Consume el endpoint para obtener los detalles de la obra
  useEffect(() => {
    const fetchObra = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/piece/list/${id}`);
        setObra(response.data);
      } catch (error) {
        console.error("Error fetching obra details:", error);
      }
    };

    fetchObra();
  }, [id]);

  if (!obra) {
    return <p>Cargando detalles de la obra...</p>; // Mensaje de carga mientras se obtienen los datos
  }
    // Función para renderizar las imágenes usando un bucle for
    const renderImages = () => {
        const images = [];
        for (let i = 0; i < obra.imageUrls.length; i++) {
          images.push(
            <div key={i}>
              <img src={obra.imageUrls[i]} alt={`Imagen ${i + 1} de ${obra.name}`} />
            </div>
          );
          console.log(obra.imageUrls[i])
        }
        return images;
      };

        const backgroundStyle = {
    backgroundImage: `url(${obra.imageUrls[0]})`, // Primera imagen del carrusel
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(10px) grayscale(65%)", // Efecto de difuminado
    position: "fixed",
    left: 0,
    width: "100%",
    height: "100vh",
    top: "-250px",
    zIndex: -1, // Coloca el fondo detrás del contenido
  };

  return (
    <Layout>
      <div className="obra-detalle-container2">
      <div className="background-image" style={backgroundStyle}></div>
      <div className="mini-carrusel">
          {obra.imageUrls.length > 1 ? ( // Si hay más de una imagen, usa el carrusel
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
              {renderImages()}
            </Carousel>
          ) : (
            // Si solo hay una imagen, muéstrala directamente
            <div>
              <img src={obra.imageUrls[0]} alt={`Imagen de ${obra.name}`} />
            </div>
          )}
        </div>

        {/* Detalles de la obra */}
        <div className="obra-details2">
          <h1>{obra.name}</h1>
          <div className="detail-box1">
            <p><strong>Año:</strong> {obra.year}</p>
            </div>
            <div className="detail-box1">
            <p><strong>Técnica:</strong> {obra.technique}</p>
            </div>
            <div className="detail-box1">
            <p><strong>Medidas:</strong> {obra.measures}</p>
            </div>

        </div>
      </div>
    </Layout>
  );
};

export default ObraDetalle;
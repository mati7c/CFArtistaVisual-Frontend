import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/obraDetalle.css";
import Layout from './Layout';
import { fetchPieceById } from "../services/pieceService"; // Ahora usamos el service

const ObraDetalle = () => {
  const { id } = useParams();
  const [obra, setObra] = useState(null);

  useEffect(() => {
    const fetchObra = async () => {
      try {
        const data = await fetchPieceById(id);
        setObra(data);
      } catch (error) {
        console.error("Error fetching obra details:", error);
      }
    };

    fetchObra();
  }, [id]);

  if (!obra) {
    return <p>Cargando detalles de la obra...</p>;
  }

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < obra.imageUrls.length; i++) {
      images.push(
        <div key={i}>
          <img src={obra.imageUrls[i]} alt={`Imagen ${i + 1} de ${obra.name}`} />
        </div>
      );
    }
    return images;
  };

  const backgroundStyle = {
    backgroundImage: `url(${obra.imageUrls[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(10px) grayscale(65%)",
    position: "fixed",
    left: 0,
    width: "100%",
    height: "100vh",
    top: "-250px",
    zIndex: -1,
  };

  return (
    <Layout>
      <div className="obra-detalle-container2">
        <div className="background-image" style={backgroundStyle}></div>
        <div className="mini-carrusel">
          {obra.imageUrls.length > 1 ? (
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
              {renderImages()}
            </Carousel>
          ) : (
            <div>
              <img src={obra.imageUrls[0]} alt={`Imagen de ${obra.name}`} />
            </div>
          )}
        </div>

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

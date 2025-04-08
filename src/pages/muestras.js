import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "../styles/muestras.css";
import { fetchExhibitList } from "../services/exhibitService"; // ✅ Importa la función del service

const Muestras = () => {
  const [muestras, setMuestras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMuestras = async () => {
    try {
      const data = await fetchExhibitList(); // ✅ Usamos el service
      setMuestras(data);
    } catch (error) {
      setError("No se pudieron cargar las muestras.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMuestras();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <div className="muestras-container">
        <h2 className="muestra">Muestras</h2>
        <div className="contenedor">
          {muestras.map((muestra) => (
            <div className="fila" key={muestra.id}>
              <div className="imagen-container">
                <img src={muestra.imageUrl} alt="Muestra" className="imagen" />
              </div>
              <p className="descripcion">{muestra.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Muestras;

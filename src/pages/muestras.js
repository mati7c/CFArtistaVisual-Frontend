import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa Axios
import Layout from './Layout'; // Importa el Layout
import '../styles/muestras.css'; // Importa los estilos

const Muestras = () => {
  const [muestras, setMuestras] = useState([]); // Estado para almacenar las muestras
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener las muestras del endpoint usando Axios
  const fetchMuestras = async () => {
    try {
      const response = await axios.get('http://localhost:8080/exhibit/list'); // Hacer la solicitud GET
      setMuestras(response.data); // Guardar las muestras en el estado
    } catch (error) {
      setError(error.message); // Guardar el error
    } finally {
      setLoading(false); // Finalizar la carga
    }
  };

  // Efecto para cargar las muestras al montar el componente
  useEffect(() => {
    fetchMuestras();
  }, []);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Mostrar un mensaje de error si algo falla
  if (error) {
    return <div>Error: {error}</div>;
  }

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
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout"; // Importa el Layout
import "../styles/editPiece.css"; // Archivo CSS para estilos

const EditPiece = () => {
  const [obras, setObras] = useState([]); // Estado para almacenar las obras

  // Consume el endpoint para obtener las obras
  useEffect(() => {
    const fetchObras = async () => {
      try {
        const response = await axios.get("http://localhost:8080/piece/list" 
            )
        setObras(response.data);
      } catch (error) {
        console.error("Error fetching obras:", error);
      }
    };

    fetchObras();
  }, []);

  // Función para manejar la eliminación de una obra
  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar la obra "${name}"?`);
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/piece/delete/${id}`, {withCredentials: true});
        alert("Obra eliminada con éxito");
        setObras(obras.filter((obra) => obra.id !== id)); // Actualiza la lista de obras
      } catch (error) {
        console.error("Error deleting obra:", error);
        alert("Error al eliminar la obra");
      }
    }
  };



  return (
    <Layout>
      <div className="lista-obras-container">
        <h1>Lista de Obras</h1>
        <ul className="lista-obras">
          {obras.map((obra) => (
            <li key={obra.id} className="obra-item">
              <span>{obra.name}</span>
              <button
                className="delete-button"
                onClick={() => handleDelete(obra.id, obra.name)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div> .</div>
    </Layout>
  );
};
export default EditPiece;
import Layout from "./Layout"; // Importa el Layout
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/editPiece.css"; // Archivo CSS para estilos

const EditExhibit = () => {
    const [exhibit, setExhibit] = useState([]); // Estado para almacenar las obras
  
    // Consume el endpoint para obtener las obras
    useEffect(() => {
      const fetchExhibit = async () => {
        try {
          const response = await axios.get("http://localhost:8080/exhibit/list" 
              )
          setExhibit(response.data);
        } catch (error) {
          console.error("Error fetching Muestras:", error);
        }
      };
  
      fetchExhibit();
    }, []);
  
    // Función para manejar la eliminación de una obra
    const handleDelete = async (id, name) => {
      const confirmDelete = window.confirm(`¿Estás seguro de eliminar la muestra "${name}"?`);
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:8080/exhibit/delete/${id}`, {withCredentials: true});
          alert("Muestra eliminada con éxito");
          setExhibit(exhibit.filter((exhibit) => exhibit.id !== id)); // Actualiza la lista de obras
        } catch (error) {
          console.error("Error deleting Muestra:", error);
          alert("Error al eliminar la Muestra");
        }
      }
    };

    return (
          <Layout>
          <div className="lista-obras-container">
            <h1>Lista de Muestras</h1>
            <ul className="lista-obras">
              {exhibit.map((exhibit) => (
                <li key={exhibit.id} className="obra-item">
                  <span>{exhibit.name}</span>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(exhibit.id, exhibit.name)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
          </Layout>
      );
}

export default EditExhibit;
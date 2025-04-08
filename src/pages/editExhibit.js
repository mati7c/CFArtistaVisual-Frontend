import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "../styles/editPiece.css";
import { fetchExhibitList, deleteExhibit } from "../services/exhibitService"; // Importamos las funciones del servicio

const EditExhibit = () => {
  const [exhibit, setExhibit] = useState([]);

  useEffect(() => {
    const getExhibits = async () => {
      try {
        const data = await fetchExhibitList();
        setExhibit(data);
      } catch (error) {
        alert("Error al cargar las muestras");
      }
    };

    getExhibits();
  }, []);

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar la muestra "${name}"?`);
    if (confirmDelete) {
      const success = await deleteExhibit(id);
      if (success) {
        alert("Muestra eliminada con éxito");
        setExhibit(exhibit.filter((e) => e.id !== id));
      } else {
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
};

export default EditExhibit;

import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "../styles/editPiece.css";
import { fetchPieceList, deletePiece } from "../services/pieceService"; // Importamos del service

const EditPiece = () => {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    const getObras = async () => {
      try {
        const data = await fetchPieceList();
        setObras(data);
      } catch (error) {
        alert("Error al cargar las obras");
      }
    };

    getObras();
  }, []);

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar la obra "${name}"?`);
    if (confirmDelete) {
      const success = await deletePiece(id);
      if (success) {
        alert("Obra eliminada con éxito");
        setObras(obras.filter((obra) => obra.id !== id));
      } else {
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
      <div>.</div>
    </Layout>
  );
};

export default EditPiece;

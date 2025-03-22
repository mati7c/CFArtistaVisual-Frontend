import React, { useState } from "react";
import { addPiece } from "../services/pieceService";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout"; // Importa el Layout
import "../styles/addPiece.css"; // Archivo CSS para estilos

const AddPiece = () => {
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    technique: "",
    typeId: "", // Cambiamos a string para manejar el valor del select
    available: false,
    measures: "",
    images: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : files ? files : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await addPiece(formData);
    if (success) {
      alert("Obra agregada con éxito");
      navigate("/");
    } else {
      alert("Error al agregar la obra");
    }
  };

  return (
    <Layout>
      <div className="add-piece-container">
        <h2 className="add-piece-title">Agregar Obra</h2>
        <form className="add-piece-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre de la obra"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Año</label>
            <input
              type="text"
              id="year"
              name="year"
              placeholder="Año de creación"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="technique">Técnica</label>
            <input
              type="text"
              id="technique"
              name="technique"
              placeholder="Técnica utilizada"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="typeId">Tipo de Obra</label>
            <select
              id="typeId"
              name="typeId"
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un tipo</option>
              <option value="4">Pintura</option>
              <option value="5">Dibujo</option>
              <option value="6">Textil</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="measures">Medidas</label>
            <input
              type="text"
              id="measures"
              name="measures"
              placeholder="Medidas de la obra"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="available">Disponible</label>
            <input
              type="checkbox"
              id="available"
              name="available"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="images">Imágenes</label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleChange}
              required
            />
            <p className="image-warning">Las/la imagen debe tener un tamaño menor a 2MB.</p>
          </div>

          <button type="submit" className="submit-button">
            Guardar Obra
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddPiece;
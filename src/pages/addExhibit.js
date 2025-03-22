import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout"; // Importa el Layout
import "../styles/addPiece.css"; // Archivo CSS para estilos
import { addExhibit } from "../services/exhibitService";

const AddExhibit = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null, // Cambiamos "images" a "image"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : files ? files[0] : value, // Tomamos solo el primer archivo
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await addExhibit(formData);
    if (success) {
      alert("Muestra agregada con éxito");
      navigate("/");
    } else {
      alert("Error al agregar la muestra");
    }
  };

  return (
    <Layout>
      <div className="add-piece-container">
        <h2 className="add-piece-title">Agregar Muestra</h2>
        <form className="add-piece-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre de la Muestra"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Descripción"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Imagen</label>
            <input
              type="file"
              id="image"
              name="image" // Cambiamos "images" a "image"
              onChange={handleChange}
              required
            />
            <p className="image-warning">La imagen debe tener un tamaño menor a 2MB.</p>
          </div>

          <button type="submit" className="submit-button">
            Guardar Muestra
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddExhibit;
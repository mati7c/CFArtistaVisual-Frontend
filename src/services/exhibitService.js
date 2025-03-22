import axios from "axios";

const API_URL = "http://localhost:8080/exhibit";

export const addExhibit = async (exhibitData) => {
  try {
    const formData = new FormData();

    // Adjuntar cada campo del formulario al FormData
    formData.append("name", exhibitData.name);
    formData.append("description", exhibitData.description);
    formData.append("image", exhibitData.image); // Adjuntar la imagen

    // Enviar la solicitud al servidor
    await axios.post(`${API_URL}/save`, formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return true; // Éxito
  } catch (error) {
    console.error("Error agregando Muestra:", error);
    return false; // Error
  }
};
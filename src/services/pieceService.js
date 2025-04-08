import axios from "axios";
import { BASE_API_URL } from "../api/config";

const API_URL = `${BASE_API_URL}/piece`;

// Agregar nueva obra
export const addPiece = async (pieceData) => {
  try {
    const formData = new FormData();
    for (const key in pieceData) {
      if (key === "images") {
        Array.from(pieceData.images).forEach((file) =>
          formData.append("images", file)
        );
      } else {
        formData.append(key, pieceData[key]);
      }
    }

    await axios.post(`${API_URL}/save`, formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return true;
  } catch (error) {
    console.error("Error agregando obra:", error);
    return false;
  }
};

// Obtener todas las obras
export const fetchPieceList = async () => {
  try {
    const response = await axios.get(`${API_URL}/list`);
    return response.data;
  } catch (error) {
    console.error("Error fetching obras:", error);
    throw error;
  }
};

// Obtener obra por ID
export const fetchPieceById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/list/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la obra con id ${id}:`, error);
    throw error;
  }
};

// Eliminar obra
export const deletePiece = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`, { withCredentials: true });
    return true;
  } catch (error) {
    console.error("Error deleting obra:", error);
    return false;
  }
};

// Obtener obras por typeId
export const getObrasByType = async (typeId) => {
  try {
    const response = await axios.get(`${API_URL}/list`);
    const filteredObras = response.data.filter(
      (obra) => obra.typeId === typeId && obra.imageUrls && obra.imageUrls.length > 0
    );
    return filteredObras;
  } catch (error) {
    console.error("Error obteniendo obras:", error);
    return [];
  }
};

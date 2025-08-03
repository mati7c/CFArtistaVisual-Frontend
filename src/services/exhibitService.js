import axios from "axios";
import { BASE_API_URL } from "../api/config";

const API_URL = `${BASE_API_URL}/exhibit`;

export const fetchExhibitList = async () => {
  try {
    const response = await axios.get(`${API_URL}/list`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Muestras:", error);
    throw error;
  }
};

export const deleteExhibit = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`, { withCredentials: true });
    return true;
  } catch (error) {
    console.error("Error deleting Muestra:", error);
    return false;
  }
};

export const addExhibit = async (exhibitData) => {
  try {
    const formData = new FormData();
    formData.append("name", exhibitData.name);
    formData.append("description", exhibitData.description);
    formData.append("image", exhibitData.image);

    await axios.post(`${API_URL}/save`, formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return true;
  } catch (error) {
    console.error("Error agregando Muestra:", error);
    return false;
  }
};

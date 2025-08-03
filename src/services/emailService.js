import axios from "axios";
import { BASE_API_URL } from "../api/config";

const API_URL = `${BASE_API_URL}/email`;

export const sendEmail = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/send`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.status === 200;
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return false;
  }
};

import axios from "axios";

const API_URL = `http://64.176.18.90:8080/email`;

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

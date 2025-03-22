import axios from "axios";

const API_URL = "http://localhost:8080";

export const login = () => {
    window.location.href = `${API_URL}/oauth2/authorization/google`;
};

export const logout = async () => {
    try {
        await axios.post("http://localhost:8080/api/logout", {}, { withCredentials: true });
        window.location.href = "/"; // Redirigir al home después del logout
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
};

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/info`, { withCredentials: true });
        return response.data;
    } catch (error) {
        return null;
    }
};

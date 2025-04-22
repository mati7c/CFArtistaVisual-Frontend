// authService.js
import axios from "axios";
import { BASE_API_URL } from "../api/config";

const API_URL = `${BASE_API_URL}`;

// Redirecciona al login con Google (usado si se usa login por redirect)
export const login = () => {
    window.location.href = `https://ceciferreyra-little-glitter-451.fly.dev/oauth2/authorization/google`;
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/api/logout`, {}, { withCredentials: true });
        window.location.href = "/";
    } catch (error) {
        console.error("Error al cerrar sesion:", error);
    }
};

// Obtener info del usuario autenticado
export const getUserInfo = async () => {
    try {      
        const response = await axios.get(`https://ceciferreyra-little-glitter-451.fly.dev/user/info`, { withCredentials: true });
        return response.data;
    } catch (error) {
        return null;
    }
};


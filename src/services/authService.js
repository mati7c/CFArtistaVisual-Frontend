// authService.js
import axios from "axios";
import { BASE_API_URL } from "../api/config";

const API_URL = `${BASE_API_URL}`;

// Redirecciona al login con Google (usado si se usa login por redirect)
export const login = () => {
    window.location.href = `${API_URL}/oauth2/authorization/google`;
};

// Logout
export const logout = async () => {
    try {
        await axios.post(`${API_URL}/api/logout`, {}, { withCredentials: true });
        window.location.href = "/";
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
};

// Obtener info del usuario autenticado
export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/info`, { withCredentials: true });
        return response.data;
    } catch (error) {
        return null;
    }
};

// 🔽 Login con Google One-Tap o Login manual (token-based)
export const handleGoogleLogin = async (googleCredential) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { token: googleCredential }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Error en login:", error);
        throw error;
    }
};

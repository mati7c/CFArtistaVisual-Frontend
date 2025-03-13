import axios from 'axios';

export const login = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/google"; // Cambia por el endpoint de tu OAuth2
};

export const getUser = () => {
  return axios.get('http://localhost:8080/user'); // Endpoint para obtener datos del usuario autenticado
};

export const logout = () => {
  window.location.href = "http://localhost:8080/logout"; // Endpoint para cerrar sesión
};

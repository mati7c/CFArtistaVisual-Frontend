import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = ({ setUser, setIsAdmin }) => {
  const handleLoginSuccess = async (response) => {
    try {
        const token = response.credential;
        const res = await axios.post("http://localhost:8080/auth/login", 
            { token }, 
            { withCredentials: true }
        );
        console.log("Login exitoso:", res.data);
    } catch (error) {
        console.error("Error en login:", error);
    }
};
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log("Error en login")} />
    </div>
  );
};

export default Login;

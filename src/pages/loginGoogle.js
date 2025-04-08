import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { handleGoogleLogin } from "../services/authService";

const Login = ({ setUser, setIsAdmin }) => {
  const onLoginSuccess = async (response) => {
    try {
      const userData = await handleGoogleLogin(response.credential);
      console.log("Login exitoso:", userData);

      // Si querés setear datos del usuario o admin:
      setUser(userData.name);
      setIsAdmin(userData.roles?.includes("ADMIN"));
    } catch (error) {
      console.error("Login fallido");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <GoogleLogin
        onSuccess={onLoginSuccess}
        onError={() => console.log("Error en login")}
      />
    </div>
  );
};

export default Login;

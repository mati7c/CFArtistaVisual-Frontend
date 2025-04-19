// LoginGoogle.jsx
import React from "react";
import "../styles/login.css";
import logoGoogle from "../images/logo-google.png";
import {login} from "../services/authService";
import Layout from "./Layout";

const LoginG = () => {

  return (
    <Layout>
    <div className="login-container">
      <h2>Bienvenido a Cecilia Ferreyra Artista Visual</h2>
      <button className="google-login-button" onClick={login}>
        <img src={logoGoogle} alt="Google Logo" className="google-logo" />
        Iniciar Sesión con Google
      </button>
    </div>
    </Layout>
  );
};

export default LoginG;

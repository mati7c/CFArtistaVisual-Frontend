// LoginGoogle.jsx
import React from "react";
import "../styles/login.css";
import logoGoogle from "../images/logo-google.png";
import logoGighub from "../images/logo-github.png";
import {login, logingh} from "../services/authService";
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
      <button className="google-login-button" onClick={logingh}>
        <img src={logoGighub} alt="Google Logo" className="google-logo" />
        Iniciar Sesión con Github
      </button>
    </div>
    </Layout>
  );
};

export default LoginG;

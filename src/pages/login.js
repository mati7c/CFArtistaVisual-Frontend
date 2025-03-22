import React, { useEffect, useState } from "react";
import { login, getUserInfo, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout"; // Importa el Layout
import "../styles/login.css"; // Archivo CSS para estilos
import logoGoogle from "../images/logo-google.png"

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo()
      .then((data) => {
        setUser(data);
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <Layout>
      <div className="login-container">
        <h2>Bienvenido a Cecilia Ferreyra Artista Visual</h2>
        {user ? (
          <div className="user-info">
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {(user.email === "matic1087@gmail.com" || user.email === "ceciliaferreyra74@gmail.com") && (
              <button className="add-piece-button" onClick={() => navigate("/addPiece")}>
                Agregar Obra
              </button>
            )}
            {(user.email === "matic1087@gmail.com" || user.email === "ceciliaferreyra74@gmail.com") && (
              <button className="add-piece-button" onClick={() => navigate("/editPiece")}>
                Editar Obras
              </button>
            )}
            {(user.email === "matic1087@gmail.com" || user.email === "ceciliaferreyra74@gmail.com") && (
              <button className="add-piece-button" onClick={() => navigate("/addExhibit")}>
                Agregar Muestra
              </button>
            )}
              {(user.email === "matic1087@gmail.com" || user.email === "ceciliaferreyra74@gmail.com") && (
              <button className="add-piece-button" onClick={() => navigate("/editExhibit")}>
                Editar Muestra
              </button>
            )}
            <button className="logout-button" onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <button className="google-login-button" onClick={login}>
            <img
              src={logoGoogle}
              alt="Google Logo"
              className="google-logo"
            />
            Iniciar Sesión con Google
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Login;
// Login.jsx
import React, { useEffect, useState } from "react";
import { getUserInfo, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import "../styles/login.css";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo()
      .then((data) => setUser(data))
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

            {(user.email === "matic1087@gmail.com" || user.email === "ceciliaferreyra74@gmail.com" || user.login === "mati7c" || user.email === "ceciliaferreyra74") && (
              <>
                <button className="add-piece-button" onClick={() => navigate("/addPiece")}>
                  Agregar Obra
                </button>
                <button className="add-piece-button" onClick={() => navigate("/editPiece")}>
                  Editar Obras
                </button>
                <button className="add-piece-button" onClick={() => navigate("/addExhibit")}>
                  Agregar Muestra
                </button>
                <button className="add-piece-button" onClick={() => navigate("/editExhibit")}>
                  Editar Muestra
                </button>
              </>
            )}

            <button className="logout-button" onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <p>Cargando información del usuario...</p>
        )}
      </div>
    </Layout>
  );
};

export default Login;

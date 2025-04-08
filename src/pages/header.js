import React from "react";
import { Link } from "react-router-dom"; // Importá Link
import "../styles/header.css";

const Header = () => (
  <header>
    <div className="titulo">
      <Link to="/" className="nombre">
        Cecilia Ferreyra Artista Visual
      </Link>
    </div>
  </header>
);

export default Header;

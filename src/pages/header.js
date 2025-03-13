import React from "react";
import "../styles/header.css";
import logo from '../images/logotia-removebg-preview.png';
import { Link } from "react-router-dom"; // Importa Link

const Header = () => (
  <header>
    <div className="titulo">
      <Link to="/">
        <img id="logo" src={logo} alt="logotia" />
      </Link>
      <p className="nombre">Cecilia Ferreyra Artista Visual</p>
    </div>
  </header>
);

export default Header;
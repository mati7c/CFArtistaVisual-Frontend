import React from "react";
import "../styles/footer.css";

const Footer = () => (
  <footer>
    <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="mailto:correo@ejemplo.com" className="icon email">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
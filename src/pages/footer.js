import React from "react";
import "../styles/footer.css";

const Footer = () => (
  <footer>
    <div className="social-icons">
      <a href="https://www.instagram.com/cecilia___ferreyra" target="_blank" rel="noopener noreferrer" className="icon instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/cecilia.ferreyra.7543?rdid=0Stk6b2oz1xUBLjI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15oiedd3Cw%2F#" target="_blank" rel="noopener noreferrer" className="icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="mailto:ceciliaferreyra74@gmail.com " className="icon email">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
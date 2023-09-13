import React from "react";
import "./Footer.css";
import logo from "../Images/logo.png"; // Asegúrate de tener la imagen del logo
import { FaFacebook, FaTwitter } from "react-icons/fa"; // Importa los íconos de redes sociales

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-block logo-block">
        <img src={logo} alt="Logo" className="logoFooter" />
      </div>
      <div className="footer-block links">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Catálogo</a>
          </li>
        </ul>
      </div>
      <div className="footer-block icon-list">
        <ul>
          <li>
            <span className="icon">
              <FaFacebook />
            </span>
            Facebook
          </li>
          <li>
            <span className="icon">
              <FaTwitter />
            </span>
            Twitter
          </li>
        </ul>
      </div>
      <div className="footer-block social-icons">
        <span className="icon">
          <FaFacebook />
        </span>
        <span className="icon">
          <FaTwitter />
        </span>
      </div>
    </footer>
  );
};

export default Footer;

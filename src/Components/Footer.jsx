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
        <li><a href="#slider">Inicio</a></li>
  <li><a href="#About">About Us</a></li>
  <li><a href="#Top Sellers">Top Sellers</a></li>
  <li><a href="#Catalogue">Catálogo</a></li>
 
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
 
    </footer>
  );
};

export default Footer;

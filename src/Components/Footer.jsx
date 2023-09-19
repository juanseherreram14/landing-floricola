import React from "react";
import "./Footer.css";
import logo from "../Images/logo.png"; // Asegúrate de tener la imagen del logo
import { FaFacebook, FaTwitter } from "react-icons/fa"; // Importa los íconos de redes sociales
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import i18n from '../I18n/index'; // Importa i18n desde tu archivo de configuración i18n.js

const Footer = () => {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Cambia el idioma utilizando i18n
  };

  return (
    <footer className="footer">
      <div className="footer-block logo-block">
        <img src={logo} alt="Logo" className="logoFooter" />
      </div>
      <div className="footer-block links">
        <ul>
          <li><a href="#slider">{t('home')}</a></li>
          <li><a href="#About">{t('aboutUs')}</a></li>
          <li><a href="#Top Sellers">{t('topSellers')}</a></li>
          <li><a href="#Catalogue">{t('catalogue')}</a></li>
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
          <li>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

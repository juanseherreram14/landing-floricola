import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Images/rose.png';
import facebookIcon from '../Images/facebook.png';
import instagramIcon from '../Images/instagram.png';
import { useTranslation } from 'react-i18next'; // Importa useTranslation de react-i18next

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Obtiene t (función de traducción) y i18n (instancia de i18next)

  const logoImg = "https://i.postimg.cc/vZGWmSB2/IMG-4652.jpg" ;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma utilizando i18next
  };

  return (
    <div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <div className="logo-container">
            <img src={logoImg} className="logo" alt="logo" />
            <h1 className="logo-title">Floristica Ecuador</h1>
          </div>
        </div>
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#slider" onClick={toggleMenu}>{t('home')}</a></li>
          <li><a href="#About" onClick={toggleMenu}>{t('aboutUs')}</a></li>
          <li><a href="#Top Sellers" onClick={toggleMenu}>{t('topSellers')}</a></li>
          <li><a href="#FCatalogue" onClick={toggleMenu}>{t('catalogue')}</a></li>
          <li><img src={facebookIcon} alt="Facebook" className="social-icon" /></li>
          <li><img src={instagramIcon} alt="Twitter" className="social-icon" /></li>
        </ul>
    
      </nav>
    </div>
  );
}

export default Navbar;

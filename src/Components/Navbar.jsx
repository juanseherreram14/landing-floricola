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
  const handleClick = () => {
    const phone = '+5930982379716'; 
    const text = 'Hello World!';

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.location.href = url;
  }
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
          <li>
        <a href={"https://www.facebook.com/p/Atlantikko-100094355182665/"}>
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
      </li>
          <li>
        <a href={"https://www.instagram.com/atlantikko/"}>  
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </li>
      <li>
        <a href={"https://www.linkedin.com/company/atlantikko-corporation/"}>  
          <img src={"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png"} alt="Instagram" className="social-icon" />
        </a>
      </li>
        </ul>
     
      </nav>
    </div>
  );
}

export default Navbar;
//https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png
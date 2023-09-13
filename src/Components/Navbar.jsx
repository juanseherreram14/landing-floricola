import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Images/rose.png';
import facebookIcon from '../Images/facebook.png';
import instagramIcon from '../Images/instagram.png';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
      <div className="logo-container">
          
          <h1 className="logo-title">Floristica Ecuador</h1>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Top Sellers</a></li>
        <li><a href="#">Catálogo</a></li>
        <li><a href="#">Contáctanos</a></li>
        <li><img src={facebookIcon} alt="Facebook" className="social-icon" /></li>
        <li><img src={instagramIcon} alt="Twitter" className="social-icon" /></li>
      </ul>
    </nav>
  );
}

export default Navbar;

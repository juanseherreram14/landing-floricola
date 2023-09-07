import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Images/flower.png';
import FormularioPopup from './FormularioPopup';

function Navbar() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const abrirFormulario = () => {
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className={`navbar ${isOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-menu">
        <div className="close-icon" onClick={toggleMenu}>
          X
        </div>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
          <li>
            <button className="contact-button" onClick={abrirFormulario}>
              Contáctanos
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <FormularioPopup mostrar={mostrarFormulario} cerrarPopup={cerrarFormulario} />
    </nav>
  );
}

export default Navbar;

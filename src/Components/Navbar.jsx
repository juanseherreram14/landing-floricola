import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="left-section-navbar">
        <h1 className="navbar-title">Florística</h1>
      </div>
      <div className={`right-section-navbar ${showMenu ? "active" : ""}`}>
        <div
          className={`navbar-menu-toggle ${showMenu ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#proyectos" className="navbar-link">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#experiencia" className="navbar-link">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#habilidades" className="navbar-link">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#educacion" className="navbar-link">
              Educación
            </a>
          </li>
          <li>
            <button className="contact-button">Contacto</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

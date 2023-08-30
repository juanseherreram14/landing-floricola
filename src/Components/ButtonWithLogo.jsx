import React from 'react';
import './ButtonWithLogo.css'; // Asegúrate de que la ruta sea correcta

const ButtonWithLogo = ({ onClick, logoSrc }) => {
  return (
    <button className="button-with-logo" onClick={onClick}>
      <img className="logo" src={logoSrc} alt="Logo" />
    </button>
  );
};

export default ButtonWithLogo;

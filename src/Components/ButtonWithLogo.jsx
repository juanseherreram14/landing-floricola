import React from 'react';
import './ButtonWithLogo.css'; // Asegúrate de que la ruta sea correcta

const ButtonWithLogo = ({ onClick, logoSrc }) => {
  return (
    <button className="button-with-logo" onClick={onClick}>
      <img style={{height:'60px' ,width:'60px'}} src={logoSrc} alt="Logo" />
    </button>
  );
};

export default ButtonWithLogo;
 
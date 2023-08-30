import React from 'react';
import './RoundButton.css'; // Asegúrate de que la ruta sea correcta

const RoundButton = ({ onClick }) => {
  return (
    <button className="round-button" onClick={onClick}>
      +
    </button>
  );
};

export default RoundButton;

import React from 'react';
import './FloatingCard.css'; // Asegúrate de que la ruta sea correcta

const FloatingCard = ({ onClose }) => {
  return (
    <div className="floating-card">
      <div className="card-content">
        <h2>Formulario</h2>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" className="input-field" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="input-field" required />

          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" className="input-field" />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" className="input-field" placeholder="Escribe tu mensaje aquí"></textarea>

          <button type="submit" className="submit-button">Enviar</button>
        </form>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default FloatingCard;

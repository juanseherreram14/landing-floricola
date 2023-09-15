// FormularioPopup.js
import React from 'react';
import './FormularioPopup.css';

const FormularioPopup = ({ mostrar, cerrarPopup }) => {
  return (
   
        mostrar && (
      <div className="popup-background">
        <div className="popup-content">
          <button className="cerrar-btn" onClick={cerrarPopup}>
            <span className="cerrar-icon">x</span>
          </button>
          <h2>Formulario</h2>
          <form>
            <div className="campo-formulario">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" />
            </div>
            <div className="campo-formulario">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="campo-formulario">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" rows="4"></textarea>
            </div>
            <button type="submit" className="enviar-btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
    )


    );
};

export default FormularioPopup;

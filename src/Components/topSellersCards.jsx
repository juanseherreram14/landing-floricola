import React, { useState } from 'react';
import './topSellers.css'; // Asegúrate de crear un archivo CSS para tus estilos

const TopSellersCards = () => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    return (
      <div className="container">
        <h1 className="title">Título en itálica y negrita</h1>
        <div className="card-container">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={`card ${hovered ? 'hovered' : ''}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-content">
                  <h2 className="card-title">Título de la Tarjeta</h2>
                  {hovered && (
                    <div className="card-info">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus orci, ultrices eget sapien ut, 
                        tempor pulvinar eros. Praesent sed iaculis neque, in sagittis nisi. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus. Donec pretium magna vitae mi consequat pretium id
                         sollicitudin libero. Quisque eu nisl ac nulla ornare suscipit. Aliquam 
                         feugiat rutrum vehicula.</p>
                      <button className="card-button">Botón</button>
                    </div>
                  )}
                </div>
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMjR_-d6SUcJCka5AA3RXxzp284OH90ESDirQtCnGjnaDKf_ag" // Reemplaza con la URL de tu imagen
                  alt="Imagen de la tarjeta"
                  className={`card-image ${hovered ? 'image-hovered' : ''}`}
                />
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  

export default TopSellersCards;

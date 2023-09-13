import React, { useState } from 'react';

import './Card.css'; 

const Card = ({ title, imageSrc, description }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="card-title">{title}</h3>
      
      <img 
        src={imageSrc} 
        alt="Card" 
        className={`card-image ${isHovered ? 'image-raised' : ''}`} 
      />
      
      {isHovered && (
        <div className="card-description">
          <p>{description}</p>
        </div>
      )}

    </div>
  );
};

export default Card;

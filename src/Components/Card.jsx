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
  /*
  <a href="https://ibb.co/GFTjgzB"><img src="https://i.ibb.co/GFTjgzB/NINA-FLORERO.jpg" alt="NINA-FLORERO" border="0"></a>
 
  */

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

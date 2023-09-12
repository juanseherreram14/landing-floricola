import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={`card ${isHovered ? 'hovered' : ''}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <h3 className="card-title">{title}</h3>
      <img src={imageSrc} alt="Card" className="card-image" />
      {isHovered && <p className="card-description">{description}</p>}
    </div>
  );
};

export default Card;

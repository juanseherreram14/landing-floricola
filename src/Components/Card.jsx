import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

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
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        className='carrusel'
      >
        <div className='image1'>
          <img
            src={imageSrc}
            alt="Card"
            className={`card-image ${isHovered ? 'image-raised' : ''}`}
          />
        </div>
        <div className='image2'>
          <img
            src={imageSrc}
            alt="Card"
            className={`card-image ${isHovered ? 'image-raised' : ''}`}
          />
        </div>
      </Carousel>

      {isHovered && (
        <div className="card-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

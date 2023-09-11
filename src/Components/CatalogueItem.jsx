import React, { useState } from 'react';

const CatalogueItem = ({ imageUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    width: '380px', // Adjust the size as needed for a small square
    height: '380px', // Adjust the size as needed for a small square
    position: 'relative',
    marginLeft: '25px',
    marginRight:'25px'
  };

  const textContainerStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '5px',
    boxSizing: 'border-box',
    opacity: isHovered ? '1' : '0',
    transition: 'opacity 0.3s',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="catalogue-item"
      style={itemStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={textContainerStyle}>
        {description}
      </div>
    </div>
  );
};

export default CatalogueItem;

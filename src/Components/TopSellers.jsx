import React from 'react';
import './catalogue.css';
import Card from './Card';

const TopSellers = () => {
  return (
    <div className='catalogue'>
      <h1 className='title' style={{ fontWeight: 'bold' }}>
        TOP SELLERS
      </h1>
      <div style={{ display: 'flex' }}>
        <Card
          title="Card 1"
          imageSrc="https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-25.png"
          description="Hover over the card to see the description."
        />
     
        <Card
          title="Card 2"
          imageSrc="https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-25.png"
          description="Hover over the card to see the description."
        />
        <Card
          title="Card 3"
          imageSrc="https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-25.png"
          description="Hover over the card to see the description."
        />
      </div>
    </div>
  );
};

export default TopSellers;

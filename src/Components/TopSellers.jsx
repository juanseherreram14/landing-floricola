import React from 'react';
import './catalogue.css';
import Card from './Card';

const TopSellers = () => {
  return (
    <div className='catalogue'>
      <h1 className='title'>
      TOP SALES
      </h1>
      <div style={{ display: 'flex' }}>
        <Card
          title="EXPLORER" 
          imageSrc="https://i.ibb.co/nccJ4JC/EXPLORER-FLORERO.jpg"
          description="Hover over the card to see the description."
        />
     
        <Card
          title="EXPLORER"
          imageSrc="https://i.ibb.co/hCby1BJ/EXPLORER.jpg"
          description="Hover over the card to see the description."
        />
        <Card 
          title="EXPLORER"
          imageSrc="https://i.ibb.co/YR2TbNx/EXPLORER.png"
          description="Hover over the card to see the description."
        />
      </div>
    </div>
  );
};

export default TopSellers;

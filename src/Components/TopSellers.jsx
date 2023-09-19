import React from 'react';
import './catalogue.css';
import Card from './Card';

const TopSellers = () =>  {
  return (
    <section id="Top Sellers">
<div className='catalogue'>
      <h1 className='title'> 
      TOP SELLERS 
      </h1>
      <div style={{ display: 'flex' }}>
        <Card
          title="EXPLORER" 
          imageSrc="https://i.ibb.co/nccJ4JC/EXPLORER-FLORERO.jpg"
          description="Medidas: 50/60/70/80/90/100"
        />
     
        <Card
          title="CORAL-REEF"
          imageSrc="https://i.postimg.cc/JnxHFjZ6/CORAL-REEF-FLORERO.jpg"
          description="Medidas: 50/60/70"
        />
        <Card 
          title="BLUEZ"
          imageSrc="https://i.postimg.cc/W3Yg3MzD/BLUEZ-FLORERO.jpg"
          description="Medidas: 50/60/70/80"
        />
      </div>
    </div>
    </section>
    
  );
};

export default TopSellers;

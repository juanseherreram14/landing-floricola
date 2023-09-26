import React from 'react';
import './catalogue.css';
import Card from './Card';
import explorer1 from '../Images/EXPLORER.jpg'
import explorer2 from '../Images/EXPLORER.png'
import cr1 from '../Images/CORAL-REEF.png'
import cr2 from '../Images/CORAL-REEF.jpg'
import bl1 from '../Images/BLUEZFLORERO.jpg'
import bl2 from '../Images/BLUEZ.png'
const TopSellers = () =>  {
  return (
    <section id="Top Sellers">
<div className='catalogue'>
      <h1 className='title'> 
      TOP SELLERS 
      </h1>
      <div className="accordionrow">
        <Card
          title="EXPLORER" 
          imageSrc="https://i.ibb.co/nccJ4JC/EXPLORER-FLORERO.jpg"
          imageSrc2 = {explorer2}
          imageSrc3 = {explorer1}
          description="Medidas: 50/60/70/80/90/100"
        />
     
        <Card
          title="CORAL-REEF"
          imageSrc="https://i.postimg.cc/JnxHFjZ6/CORAL-REEF-FLORERO.jpg"
          imageSrc2 = {cr1 }
          imageSrc3 = {cr2}
          description="Medidas: 50/60/70"
        />
        <Card 
          title="BLUEZ"
          imageSrc="https://i.postimg.cc/W3Yg3MzD/BLUEZ-FLORERO.jpg"
          imageSrc2 = {bl2 }
          imageSrc3 = {bl1}
          description="Medidas: 50/60/70/80"
        />
      </div>
    </div>
    </section>
    
  );
};

export default TopSellers;

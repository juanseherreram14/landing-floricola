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
          title="BRIGHTON"
          imageSrc="https://icecube-us-841.icedrive.io/thumbnail?p=LXy6AW5.hXECWGDZFRWH4RSHbIt6ZMm4F.hrX6bRMxcv.9jmKswejfjKVSrJYqEwDtxFcU5M1cnxLHYptRYOhCDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZF.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Medidas: 50/60/70"
        />
        <Card 
          title="MONIDAL"
          imageSrc="https://icecube-us-302.icedrive.io/thumbnail?p=t.79ICf.GmZIBDQX9F7GpTg3fiRBurWAy9bost2Y_Aoa4GY9wumoX_ywag4eBlOX9aAi88gY7JH6ExtBgUQ9AiDlyLGz8uHpUKktTHrYuxBW5vNvCcpi4KLTxaTjTHZF.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"
          description="Medidas: 50/60/70/80"
        />
      </div>
    </div>
    </section>
    
  );
};

export default TopSellers;

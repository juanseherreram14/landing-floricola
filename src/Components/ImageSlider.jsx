import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

export default function ImageSlider() {
  return (
    <body className="bg-yellow-500 text-center">
      <Carousel showArrows={true} showThumbs={false} showStatus={false}>
        <div className='image-container'>
          <div className="image-overlay"></div>
          <img className="object-scale-down h-47 w-47" src={"https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg"} alt="flores" />
          <div className="header">Florística</div>
          <div className="subheader">Your vision</div>
        </div>

        <div className='image-container'>
          <div className="image-overlay"></div>
          <img className="object-scale-down h-47 w-47" src={'https://www.florespedia.com/Imagenes/flores-bonitas.jpg'} alt="Niña" />
          <div className="header">Florística</div>
          <div className="subheader">Your vision</div>
        </div>
      </Carousel>
    </body>
  );
}

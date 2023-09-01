import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

//import SimpleImageSlider from "react-simple-image-slider";

export default function  ImageSlider (){

    return(
        <>
        <body className=" bg-yellow-500 text-center">
            <Carousel showArrows={true} showThumbs={false} showStatus={false}>
         <div className='image-container'>
            <img className="object-scale-down h-47 w-47" src = {"https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg"} alt="flores"/>
            <h1 className="header">Florística</h1>
            <h3 className="subheader">Your vision</h3>
 
        
        </div>

        <div className='image-container'>
        <img className="object-scale-down h-47 w-47" src={'https://www.florespedia.com/Imagenes/flores-bonitas.jpg'} alt="Niña"/>
        <h1 className="header">Florística</h1>
        <h3 className="subheader">Your vision</h3>
        <div></div>
        
        </div>
    
</Carousel>
</body>
        
        </>
    )
    
     
}
    

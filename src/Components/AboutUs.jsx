import React from "react";
import "./AboutUs.css"; 

import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
const AboutUs = () => {
  return (
    <section id="About">
 <div className="about-us">
      <div className="about-us-content">
        <div className="left-side">
          <h1 className="title">About Us</h1>
          <blockquote className="quote">
            <p>
            Bienvenidos a Floristica Ecuador, donde la belleza y la excelencia se unen. Iniciamos nuestro viaje en 2019 en el pintoresco Tabacundo, Ecuador, y desde entonces hemos cultivado más de dos años de experiencia en la industria floral. En nuestra expansiva finca, ofrecemos una impresionante variedad de 28 productos, exportando semanalmente un promedio de 300 cajas llenas de frescura y esplendor. Nuestra pasión se refleja en la satisfacción de clientes en todo el mundo, incluyendo Rusia, Estados Unidos, Europa, Chile y Canadá. Únete a nuestra historia en crecimiento y descubre cómo Floristica Ecuador ha transformado la belleza floral en una experiencia global excepcional.
            </p>
            
              <button className="btnContacto" >
                Contáctanos   
              </button>          

          </blockquote>
        </div> 
        <div className="right-side">
        <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000} // Cambia esto según tus necesidades
          >
        

          <div className='image-container'>
            <div className="image-overlay"></div>
            <img  src={"https://icecube-us-841.icedrive.io/thumbnail?p=i4YSP1W.pLJIs4R8qma6dH.RR7EOWHQPdXJRYpidusAlU6iV7g339RbrVjexQvn0yO.sD2g5ApON_h0eJfaP0SDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"} alt="flores" className="slider-image"  />
           
            <div className="header">Floristica Ecuador</div>
          
          </div>

          <div className='image-container'>
            <div className="image-overlay"></div>
            <img   src={"https://icecube-us-845.icedrive.io/thumbnail?p=BoKekWH5CItzBwOrIFFBqN9Dsmo1.CPs8pQcD0MT9Ay6LEMFsLPq2dJyGYtKgCVqGod.esSAm.fqgB6OBFxYECDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"} alt="flores" className="slider-image"  />
           
            <div className="header">Floristica Ecuador</div>

         
          </div>


            
          </Carousel>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default AboutUs;

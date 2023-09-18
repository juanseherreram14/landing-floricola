import React from "react";
import "./AboutUs.css"; 
import fotoAU from '../Images/aboutUsPhoto.jpg';
 
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
          <img
            src={fotoAU}
            alt="About Us"
          // Limita el alto de la imagen al 70% del alto total
          />
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default AboutUs;

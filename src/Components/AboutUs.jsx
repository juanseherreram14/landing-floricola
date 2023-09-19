import React from "react";
import "./AboutUs.css";
import fotoAboutUs from '../Images/aboutUsPhoto.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del Carousel

const AboutUs = () => {
  return (
    <section id="About">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        {/* Primer slide */}
        <div className="about-us">
          <div className="about-us-content">
            <div className="left-side">
              <h1 className="title">About Us</h1>
              <blockquote className="quote">
                <p>
                  Bienvenidos a Floristica Ecuador, donde la belleza y la excelencia se unen. Iniciamos nuestro viaje en 2019 en el pintoresco Tabacundo, Ecuador, y desde entonces hemos cultivado más de dos años de experiencia en la industria floral. En nuestra expansiva finca, ofrecemos una impresionante variedad de 28 productos, exportando semanalmente un promedio de 300 cajas llenas de frescura y esplendor. Nuestra pasión se refleja en la satisfacción de clientes en todo el mundo, incluyendo Rusia, Estados Unidos, Europa, Chile y Canadá. Únete a nuestra historia en crecimiento y descubre cómo Floristica Ecuador ha transformado la belleza floral en una experiencia global excepcional.
                </p>
                <button className="btnContacto">Contáctanos</button>
              </blockquote>
            </div>
            <div className="right-side">
              <img src={fotoAboutUs} alt="About Us" className="about-us-image" />
            </div>
          </div>
        </div>

        {/* Segundo slide (idéntico al primero) */}
        <div className="about-us">
          <div className="about-us-content">
            <div className="left-side">
              <h1 className="title">Paquetes</h1>
              <blockquote className="quote">
                <p>
                  Espacio para poner el tamaño de los paquetes
                </p>
         
              </blockquote>
            </div>
            <div className="right-side">
              <img src={fotoAboutUs} alt="About Us" className="about-us-image" />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default AboutUs;

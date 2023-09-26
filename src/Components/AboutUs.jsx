import React, { useState } from "react";
import "./AboutUs.css";
import fotoAboutUs from '../Images/aboutUsPhoto.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fotoRosas1 from '../Images/IMG_0171.jpg';
import fotoRosas2 from '../Images/IMG_01712.jpg';
import fotoRosas3 from '../Images/IMG_01713.jpg';

import fotoRosas from '../Images/FREEDOM.png';
import { useTranslation } from 'react-i18next'; // Importa useTranslation de react-i18next
import FormularioPopup from './FormularioPopup'; // Importa el componente del formulario

const AboutUs = () => {
  const { t } = useTranslation(); // Obtiene t (función de traducción)
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const abrirFormulario = () => {
    setMostrarFormulario(true);
  }

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
              <h1 className="title mobile-center">{t('aboutUsTitle')}</h1>
              <blockquote className="quote">
                <p className="mobile-text">{t('aboutUsText')}</p>
              </blockquote>
              <button className="btnContacto mobile-button" onClick={abrirFormulario}>
                {t('contactUs')}
              </button>
            </div>
            <div className="right-side">
              <img src={fotoRosas} alt="About Us" className="about-us-image" />
            </div>
          </div>
        </div>

        {/* Segundo slide */}
        <div className="about-us">
          <div className="about-us-content">
            <div className="left-side">
              <h1 className="title mobile-center">{t('packagesTitle')}</h1>
              <blockquote className="quote">
                <p className="mobile-text">{t('packagesText')}</p>
              </blockquote>
              <button className="btnContacto mobile-button" onClick={abrirFormulario}>
                {t('contactUs')}
              </button>
            </div>
            <div className="right-side">
              <div className="image-container"> {/* Contenedor de imágenes */}
                <img src={fotoRosas1} alt="About Us" className="about-us-image" />
                <img src={fotoRosas2} alt="About Us" className="about-us-image" />
                <img src={fotoRosas3} alt="About Us" className="about-us-image" />
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Renderiza el formulario si mostrarFormulario es verdadero */}
      {mostrarFormulario && <FormularioPopup cerrarPopup={() => setMostrarFormulario(false)} mostrar={mostrarFormulario} />}
    </section>
  );
};

export default AboutUs;

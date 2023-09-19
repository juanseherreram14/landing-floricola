import React from "react";
import "./AboutUs.css";
import fotoAboutUs from '../Images/aboutUsPhoto.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next'; // Importa useTranslation de react-i18next

const AboutUs = () => {
  const { t } = useTranslation(); // Obtiene t (función de traducción)

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
              <h1 className="title">{t('aboutUsTitle')}</h1>
              <blockquote className="quote">
                <p>
                  {t('aboutUsText')}
                </p>
                <button className="btnContacto">{t('contactUs')}</button>
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
              <h1 className="title">{t('packagesTitle')}</h1>
              <blockquote className="quote">
                <p>
                  {t('packagesText')}
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

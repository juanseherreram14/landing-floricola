import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import FormularioPopup from './FormularioPopup';
import fotoRosas from '../Images/FREEDOM.png';
import fotof from '../Images/ESPERANCE-FLORERO.jpg'
import fotof2 from '../Images/ESPERANCE.png'
import { useTranslation } from 'react-i18next'; // Importa useTranslation de react-i18next

import i18n from '../I18n/index'; // Importa i18n desde tu archivo de configuración i18n.js
export default function ImageSlider() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const { t } = useTranslation(); // Obtiene t (función de traducción)
  

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Cambia el idioma utilizando i18n
  };


  const abrirFormulario = () => {
    setMostrarFormulario(true);
  };

  return (
    <section id="slider">
      <div>
        
        <body className="bg-yellow-500 text-center">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000} // Cambia esto según tus necesidades
          >
            <div className='image-container'>
              <div className="image-overlay"></div>
              <img src={fotof2} alt="flores" className="slider-image" />
              <div className="header">{t('welcome')}</div>
              <div className="subheader">{t('topSellers')}</div>
              <div className="button-container">
            
              
                <button className="contact-button" onClick={abrirFormulario}>
                  {t('contactUs')}
                </button>
                <li> 
            <button className="t-button" onClick={() => changeLanguage('en')}>EN</button>
            <button className="t-button" onClick={() => changeLanguage('es')}>ES</button>
              </li>
              </div>
            </div> 

            <div className='image-container'>
              <div className="image-overlay"></div>
              <img src={fotoRosas} alt="flores" className="slider-image" />
              <div className="header">{t('welcome')}</div>
              <div className="subheader">{t('knowUs')}</div>
             
              <div className="button-container">
              <li> 

              </li>

                <button className="contact-button" onClick={abrirFormulario}>
                  {t('contactUs')}
                </button>
                
                <li> 
            <button className="t-button" onClick={() => changeLanguage('en')}>EN</button>
            <button className="t-button" onClick={() => changeLanguage('es')}>ES</button>
              </li>
              </div>
            </div>
          </Carousel>
        </body>
        <FormularioPopup mostrar={mostrarFormulario} cerrarPopup={() => setMostrarFormulario(false)} />
      </div>
    </section>
  );
}

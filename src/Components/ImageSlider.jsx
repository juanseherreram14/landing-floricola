import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import FormularioPopup from './FormularioPopup'; // Asegúrate de importar el componente FormularioPopup
import fotoRosas from '../Images/roseBG.jpg';

export default function ImageSlider() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const abrirFormulario = () => {
    setMostrarFormulario(true);
  };

  return (
    <div>
      <body className="bg-yellow-500 text-center">
        <Carousel showArrows={true} showThumbs={false} showStatus={false}>
          <div className='image-container'>
            <div className="image-overlay"></div>
            <img  sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, 800px" src={fotoRosas} alt="flores" />
            <div className="header">Bienvenido a nuestra página</div>
            <div className="subheader">Conóce las mejores rosas del Ecuador</div>
            <div className="button-container">
              <button className="contact-button" onClick={abrirFormulario}>
                Contáctanos
              </button>
            </div>
          </div>

          {/* Otras diapositivas del carrusel */}
        </Carousel>
      </body>

      <FormularioPopup mostrar={mostrarFormulario} cerrarPopup={() => setMostrarFormulario(false)} />
    </div>
  );
}

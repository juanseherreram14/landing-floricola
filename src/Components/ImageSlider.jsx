import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import FormularioPopup from './FormularioPopup'; // Asegúrate de importar el componente FormularioPopup

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
            <img className="object-scale-down h-47 w-47" src={"https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg"} alt="flores" />
            <div className="header">Bienvenido a nuestra página</div>
            <div className="subheader">Conoce las mejores flores del Ecuador</div>
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

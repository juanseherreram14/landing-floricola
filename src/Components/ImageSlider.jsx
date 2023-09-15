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
            <img  sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, 800px" src={"https://icecube-us-841.icedrive.io/thumbnail?p=i4YSP1W.pLJIs4R8qma6dH.RR7EOWHQPdXJRYpidusAlU6iV7g339RbrVjexQvn0yO.sD2g5ApON_h0eJfaP0SDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"} alt="flores" />
           
            <div className="header">Florística Ecuador</div>
            <div className="subheader">Conóce las mejores rosas del Ecuador</div>
            <div className="button-container">
              <button className="contact-button" onClick={abrirFormulario}>
                Contáctanos
              </button>
            </div>
          </div>

          <div className='image-container'>
            <div className="image-overlay"></div>
            <img  sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, 800px" src={"https://icecube-us-845.icedrive.io/thumbnail?p=BoKekWH5CItzBwOrIFFBqN9Dsmo1.CPs8pQcD0MT9Ay6LEMFsLPq2dJyGYtKgCVqGod.esSAm.fqgB6OBFxYECDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"} alt="flores" />
           
            <div className="header">Florística Ecuador</div>
            <div className="subheader">Conóce las mejores rosas del Ecuador</div>
            <div className="button-container">
              <button className="contact-button" onClick={abrirFormulario}>
                Contáctanos
              </button>
            </div>
          </div>

          {/* Otras diapositivas del carrusel.   <img  sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, 800px" src={"https://icecube-us-841.icedrive.io/thumbnail?p=i4YSP1W.pLJIs4R8qma6dH.RR7EOWHQPdXJRYpidusAlU6iV7g339RbrVjexQvn0yO.sD2g5ApON_h0eJfaP0SDlyLGz8uHpUKktTHrYuxDcvWGcR3uOixMrcrnaAhj6.pQBV1ASGuK0gxj72vtdCg--&w=1024&h=1024&m=cropped"} alt="flores" /> */}
        </Carousel>
      </body>

      <FormularioPopup mostrar={mostrarFormulario} cerrarPopup={() => setMostrarFormulario(false)} />
    </div>
  );
}

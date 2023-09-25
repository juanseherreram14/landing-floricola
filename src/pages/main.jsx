import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider'
import TopSellers from '../Components/TopSellers'
import MoreButton from '../Components/SeeMoreBtn'
import AboutUs from '../Components/AboutUs'
import RoundButton from '../Components/RoundButton'; // Importa el nuevo componente
import FloatingCard from '../Components/FloatingCard'; // Importa el nuevo componente
import logoWhatsapp from '../Images/whatsapp.png';
import ButtonWithLogo from '../Components/ButtonWithLogo';
import Footer from '../Components/Footer'
import AccordionMenu from '../Components/Accordion';
import CenteredButton from '../Components/SeeMoreBtn'
export default function FlorMain() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleRoundButtonClick = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };
  const handleClick = () => {
    const phone = '+5930982379716'; 
    const text = 'Hello World!';

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.location.href = url;
  }


  return (
    <>
    <div>
 
   
      <Navbar />
      <ImageSlider />
      <TopSellers />
      <AccordionMenu/>
      <AboutUs />
      <ButtonWithLogo
          
        logoSrc={logoWhatsapp}
        onClick={handleClick}

      />
     

     

      {/* Botón redondo de WhatsApp */}
      

      {/* Tarjeta flotante con formulario */}
      {isCardOpen && <FloatingCard onClose={handleCloseCard} />}
<Footer/>
</div>
    </>
  );
}
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider'
import TopSellers from '../Components/TopSellers'
import MoreButton from '../Components/SeeMoreBtn'
import AboutUs from '../Components/AboutUs';
import RoundButton from '../Components/RoundButton'; // Importa el nuevo componente
import FloatingCard from '../Components/FloatingCard'; // Importa el nuevo componente
import logoWhatsapp from '../Images/whatsapp.png';
import ButtonWithLogo from '../Components/ButtonWithLogo';
import Footer from '../Components/Footer'
import AccordionMenu from '../Components/Accordion';
export default function FlorMain() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleRoundButtonClick = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  return (
    <>
      <Navbar />
      <ImageSlider />
      <AboutUs />
      <ButtonWithLogo
        
        logoSrc={logoWhatsapp}

      />
      <TopSellers />

      <AccordionMenu/>

      {/* Botón redondo de WhatsApp */}
      <RoundButton onClick={handleRoundButtonClick} />

      {/* Tarjeta flotante con formulario */}
      {isCardOpen && <FloatingCard onClose={handleCloseCard} />}
<Footer/>
    </>
  );
}

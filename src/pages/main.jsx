import react from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider'
import TopSellers from '../Components/TopSellers'
import MoreButton from '../Components/SeeMoreBtn'
export default function FlorMain(){
    return(
        <>
            <Navbar/>
            <ImageSlider />
            <TopSellers/>
            <MoreButton/>
        </>
    )
  


}
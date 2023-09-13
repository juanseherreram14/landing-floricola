import React from "react";
import "./AboutUs.css";
import MoreButton from './SeeMoreBtn'
import fotoAU from '../Images/aboutUsPhoto.jpg';
 
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="left-side">
          <h1 className="title">About Us</h1>
          <blockquote className="quote">
            <p>
              WELCOME TO OUR UNIVERSE OF COLOR. A WORLD LEADER IN ROSE PRODUCTION WITH 24 YEARS OF EXPERIENCE AND MORE THAN 100 VARIETIES.
            </p>
            
              <button className="btnContacto" >
                Contáctanos
              </button>

          </blockquote>
        </div> 
        <div className="right-side">
          <img
            src={fotoAU}
            alt="About Us"
            style={{ maxHeight: "70vh" }} // Limita el alto de la imagen al 70% del alto total
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

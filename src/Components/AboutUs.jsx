import React from "react";
import "./AboutUs.css";
import MoreButton from './SeeMoreBtn'

const AboutUs = () => {
  return (
    <>
    <div style={{backgroundColor:"#f2eee6"}}>


<section className="about-us">
<h1 className="title">About Us</h1>
      <div style={{display:'flex'}}>

      
      
      <img  style={{width:120,height:"auto"}} src={"https://static.vecteezy.com/system/resources/previews/012/591/073/non_2x/red-rose-flowers-isolated-for-love-wedding-and-valentines-day-png.png"} alt="About Us" />
      <blockquote className="quote">
        <p>
        WELCOME TO OUR UNIVERSE OF COLOR.  A WORLD LEADER IN ROSE PRODUCTION WITH 24 YEARS OF EXPERIENCE AND MORE THAN 100 VARIETIES.
        </p>
      </blockquote>
     
      </div>

    </section>
  </div>
    </>


 
   
  );
};

export default AboutUs;

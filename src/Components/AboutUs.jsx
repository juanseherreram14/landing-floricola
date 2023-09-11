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

      
      
      <img  style={{width:200,height:200}} src={"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-14.png"} alt="About Us" />
      <blockquote className="quote">
        <p>
        WELCOME TO OUR UNIVERSE OF COLOR.  A WORLD LEADER IN ROSE PRODUCTION WITH 24 YEARS OF EXPERIENCE AND MORE THAN 100 VARIETIES.
        </p>
      </blockquote>
     
      </div>
  <MoreButton />
    </section>
  </div>
    </>


 
   
  );
};

export default AboutUs;

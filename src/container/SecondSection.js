import React from 'react';
import Sectionimage from "../assets/Sectionimage.png"

export default function SecondSection() {
  return (
  <div className="secondsection">
      <div className="comp11">
          
          <img src={Sectionimage} className="sectionimage1" alt="" />
            
      </div>
      <div className="comp12">
        <div className="aboutdiv" >
        <h3 className="aboutus">About us</h3>
        <h1 classname="aboutus2">We work together to make to make the change we want to see in Nigeria</h1>
        <h3 className="aboutus3">We’re a movement of Nigerian youths with one common goal, to make our nation great. We’re a movement of Nigerian youths with one common goal, to make our nation great</h3>
        <button className="buttonstyles">Read more</button>

        </div >
      </div>
      
  </div>
  );
}

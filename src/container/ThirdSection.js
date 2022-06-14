import React from 'react';
import Sectionimage from "../assets/Sectionimage.png"

export default function ThirdSection() {
  return (
    <div className="thirdsection">
        
      <div className="thirdsection1">
          <div className="aboutdiv">
          <h3 className="aboutus" style={{marginBottom: 20}}>What we do</h3>
        <h1 classname="aboutus2">We work together to make to make the change we want to see in Nigeria</h1>
        <h3 className="aboutus3">We’re a movement of Nigerian youths with one common goal, to make our nation great. We’re a movement of Nigerian youths with one common goal, to make our nation great</h3>
        <button className="buttonstyles">Read more</button>

          </div>

      </div>
      <div className="thirdsection2">
      <img src={Sectionimage} className="sectionimage" alt="" />


      </div>

    </div>
  );
}

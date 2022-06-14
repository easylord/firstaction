import React from 'react';
import firstBanner from "../assets/firstBanner.png"
import Gradient from "../assets/Gradient.png"
import { LinkedIn, Facebook, Instagram, Twitter } from '@material-ui/icons'

export default function FirstSection() {
  return (
    <div className="firstsection">
        <div className="comp1">
            <h1 className="firstfont">The Possibility Of a New Nigeria Begins with us</h1>
            <h3 className="secondfont">We are the future leaders, we come together to make one loud voice, and this voice, must be heard</h3>
            <div className="buttonstyle">
                <button className="buttonstyles">learn more</button>
                <button className="buttonstyles2">Upcoming Events</button>
                <img src={Gradient} className="gradient"/>
    </div>
        </div>
        
        <div className="comp2">
            <img className="firstBanner" src={firstBanner} />
            <div className="logostyle" >
                <LinkedIn className="logopause"></LinkedIn>
                <Facebook className="logopause"  ></Facebook>
                <Instagram className="logopause"></Instagram>
                <Twitter className="logopause"></Twitter>

            </div>

        </div>
    </div>
  );
}

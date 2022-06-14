import React from 'react';
import {ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons'
import Rectangle6 from "../assets/Rectangle6.png"

export default function FourthSection() {
  return (
    <div className="fourthsections">
        <div className="fourthsection1">
        <div className="fourthsection3">
                <h3 className="aboutus" style={{marginBottom: 30, color:"white"}}>Upcoming Events</h3>
                <h1 className="aboutus2" style={{paddingRight:200, color:"white"}}>We always have events where we gather and make plans and objectives</h1>

            </div>
            

            </div>
            <div className="fourthsection2">
                <div className="sectionbox">
                    <div className="fourthicon">
                    <ArrowBackOutlined ></ArrowBackOutlined>

                    </div>
                    <div>
                    <img className="rectangle6" src={Rectangle6}/>
                    <div className="row">
                    <div>
                        <h3 className="innertext">Step Up 2.0</h3>
                        <h4 className="innertext2">MAY 31, 2022 | 1:00PM</h4>
                    </div>
                    <div>
                        <button className="innerbutton" style={{marginLeft: 60}} >Book a Seat</button>
                    </div>
                    </div>

                    </div>
                    <div>
                    <img className="rectangle6" src={Rectangle6}/>
                    <div className="row">
                    <div>
                        <h3 className="innertext">Step Up 2.0</h3>
                        <h4 className="innertext2">MAY 31, 2022 | 1:00PM</h4>
                    </div>
                    <div>
                        <button className="innerbutton" style={{marginLeft: 60}} >Book a Seat</button>
                    </div>
                    </div>

                    </div>

                    <div className="fourthicon" style={{marginLeft: 20}}>
                    <ArrowForwardOutlined ></ArrowForwardOutlined>

                    </div>

                </div>
                
    
            </div>
        
        

    </div>
  );
}

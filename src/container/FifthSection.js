import React from 'react';
import { LinkedIn, Facebook, Instagram, Twitter } from '@material-ui/icons'
import Gradient from "../assets/Gradient.png"
import Create from './Create';


export default function FifthSection() {
  return (
    <div className="fifthsection" >
        <div className="fifthsection1">
            <div className="questionbox">
                <h1 className="questions">Questions? we have answers</h1>
                <h3 className="aboutus" style={{marginTop: 10}}>CALL US TO FOR ENQUIRIES</h3>
                <h1 className="phonenumber">+234 816 897 0607</h1>
                <div className="fifthlogo" >
                <LinkedIn className="logopause"></LinkedIn>
                <Facebook className="logopause" style={{marginLeft: 15}}  ></Facebook>
                <Instagram className="logopause" style={{marginLeft: 15}}></Instagram>
                <Twitter className="logopause" style={{marginLeft: 15}}></Twitter>
            </div>
            <img src={Gradient} className="gradient"/>

            </div>

        </div>
        <div className="fifthsection2">
            <div className="formdiv">
            <Create />

            </div>
        </div>

    </div>
  );
}

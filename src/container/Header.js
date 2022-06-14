import React from 'react';
import uym from '../assets/uym.png'


export default function Header() {
  return (
      <div >
      <div className="bodyfirst" >
        <div>
        <img className="logoImage" src={uym}  />

        </div>
        <div className="rowclass" >
        <h4 className="headertext">Home</h4>
        <h4 className="headertext">About</h4>
        <h4 className="headertext">What we do</h4>
        <h4 className="headertext" >Upcoming Events</h4>
        </div>
        <div>
          <button className="buttonstyles" style={{marginLeft:110, color:"white"}}>Contact us</button>
        </div>

        </div>
    </div>
  );
}



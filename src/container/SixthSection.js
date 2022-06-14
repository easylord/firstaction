import React, {useRef, useState} from 'react';
import { LinkedIn, Facebook, Instagram, Twitter } from '@material-ui/icons'

import uym2 from '../assets/uym2.png'

export default function SixthSection(props) {

    const [user, setUser] = useState(props.user)
    const form = useRef(null)

    const submit = e => {
        e.preventDefault()
        const data = new FormData(form.current)
        fetch('/api', { method: 'POST', body: data })
          .then(res => res.json())
          .then(json => setUser(json.user))
      }
  return (
    <div className= "sixthSection">
        <div className="sixthSection1">
            <div>
            <img alt="imageff" className="logoImage" src={uym2} style={{paddingTop: 40}} />
            <h3 className="sixthText" >
            We are the future leaders, we come together to make the changes we want to see in our nation
            </h3>
            <div className="fifthlogo" style={{paddingLeft: 40, paddingTop: 20}} >
                <LinkedIn className="logopause" style={{marginLeft: 15, backgroundColor: "white", borderRadius: 5, height: 20, width: 20}}u></LinkedIn>
                <Facebook className="logopause" style={{marginLeft: 15, backgroundColor: "white", borderRadius: 5, height: 20, width: 20}}  ></Facebook>
                <Instagram className="logopause" style={{marginLeft: 15, backgroundColor: "white", borderRadius: 5, height: 20, width: 20}}></Instagram>
                <Twitter className="logopause" style={{marginLeft: 15, backgroundColor: "white", borderRadius: 5, height: 20, width: 20}}></Twitter>
            </div>

            <h3 className="sixthText" >
            All Rights Reserved. UYM 2022.            </h3>
            </div>

        </div>
        <div className="sixthSection2">
            <div className="lastsection">
             <div className= "sixthsection3">
                 <h4 className="lastsectiontext">Join the movement</h4>
     <div style={{paddingTop: 50}} >
         <form  onSubmit={submit} classname="formjare" >
        <input className="formsection"
          type="text" 
          required 
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        </form>
        </div>
        <button className="innerbutton" style={{position : "absolute", marginLeft: 475, marginTop: 52}} >Get Updates</button>

                 
             </div>

             
            </div>
            <div className="relast">
                <div>
                    <h3 className="lastsecpart">What We Do</h3>
                    <h5 className="smalltext" style={{marginTop: 20}}>Example1</h5>
                    <h5 className="smalltext">Example2</h5>

                    <h5 className="smalltext">Example3</h5>

                    <h5 className="smalltext">what we do</h5>

                </div>

                <div style={{paddingLeft: 90}}>
                    <h3 className="lastsecpart" >Our Links</h3>
                    <h5 className="smalltext" style={{marginTop: 20}}>Example1</h5>
                    <h5 className="smalltext">Example2</h5>

                    <h5 className="smalltext">Example3</h5>

                    <h5 className="smalltext">what we do</h5>

                </div>

                <div style={{paddingLeft: 90}}>
                    <h3 className="lastsecpart" >Our Links</h3>
                    <h5 className="smalltext" style={{marginTop: 20}}>info@uymng.org</h5>
                    

                </div>


             </div>

        </div>

    </div>
  
  );
}

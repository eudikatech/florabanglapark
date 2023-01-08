/*
import { map } from 'jquery'
import mapboxgl from 'mapbox-gl'*/
import { useState, useEffect } from 'react';
import styles from '../styles/Mappage.module.css';
import Link from 'next/link';
import Image from 'next/image';
import  axios  from 'axios';
import Router from 'next/router'




export default function Mappage() {
  const [email, setEmail] = useState("");
  const [textMsg, setTextMsg] = useState("");


  const ContactMsgHandler = async (e) => {
    e.preventDefault();


    const ContactMsg = {
      email,
      textMsg
    }

    try {
      const { data } = await axios({
        url : "/api/contact",
        method : "POST",
        data :  ContactMsg

      });

      Router.replace('/thanks');
    
    }catch(error) {
      console.log("Error :", error);
    }
    
    

}
 /*
  const [Map, setMap] = useState();
  mapboxgl.accessToken = 'AIzaSyCjx2XL3x9S_4mKsw0wQZ0szjB0s8HzvQM';

  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [90.573211, 23.964880],
      zoom: 13,
      scrollZoom: false
    });

    setMap(map);
  }, []);
*/

    return (
      <div id='mappage' className={styles.container}>
          <div className='row container-fluid m-5'>
              <div className='row'>
                <div className='col-md-6'>
                
                    <h1 className='py-5'>How To Get Here</h1>
                    <Image id="gethereimg" src="/assets/image/leaf.png" width={100} height={100}/>
                    <h6>BUS</h6>
                    <p>Just 1hour from Kuril Bishwa Road.</p>
                    <h6>Car</h6>
                    <p>Specious Car Parking Area For Visitors.</p><br/>
                    

                    <div className='contact-form'>
                    
                    <h1>Contact Us</h1>
                    <h6>Email</h6>
                    <form class="map" onSubmit={ContactMsgHandler}>
                    <input type="text" 
                        className="form-control bg-white" 
                        id="email" 
                        placeholder="Your Email address Here" 
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                        <h6>Text</h6>
                        <textarea type="text" 
                        className="form-control bg-white" 
                        id="textMsg" 
                        placeholder="Your Text Here" 
                        onChange={(e) => setTextMsg(e.target.value)}
                        required/>

                      <button type="submit" id="submitbtn" className="btn btn-danger">Send</button>

                  </form>
                    </div>
                  </div>
                
                <div className='col-md-6 py-5'>
                    <div id='map' className='map'>Map: (Previous Name Garden Resort!)<br/> <Link className="btn btn-primary mt-2 p-3" href={`https://maps.app.goo.gl/gFbaDoXZY3Gwaorj7`} target="_blank" rel="noopener noreferrer">Open Location in GoogleMap</Link></div>
                    <br /><Link href={`https://maps.app.goo.gl/gFbaDoXZY3Gwaorj7`} target="_blank" rel="noopener noreferrer"><Image id="mapimg" src="/assets/image/map.jpg" width={400} height={300} /></Link>
                </div>
              </div>
          </div>
      </div>
    )
  }

/*
import { map } from 'jquery'
import mapboxgl from 'mapbox-gl'*/
import { useState, useEffect } from 'react';
import styles from '../styles/Mappage.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Mappage() {
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
                    <h1>Contact Us</h1>

                    <h6>Email</h6>
                    <input type="text" 
                        className="form-control bg-white" 
                        id="Contact" 
                        placeholder="Your Email address Here" 
                        onChange={(e) => setNumberOfVisitor(e.target.value)}
                        required/>
                        <h6>Text</h6>
                        <textarea type="text" 
                        className="form-control bg-white" 
                        id="Contact" 
                        placeholder="Your Text Here" 
                        onChange={(e) => setNumberOfVisitor(e.target.value)}
                        required/>

                      <Link id='send' href={`/`} className="btn btn-light mt-2 p-3" role="button" aria-pressed="true">
                          Send
                      </Link>

                </div>
                <div className='col-md-6 py-5'>
                    <div id='map' className='map'> &nbsp;&nbsp;&nbsp;&nbsp;   Map: (Previous Name Garden Resort!)<br/> <Link href={`https://maps.app.goo.gl/gFbaDoXZY3Gwaorj7`} target="_blank" rel="noopener noreferrer">Click here to Get Location on google map</Link></div>
                    <br /><Link href={`https://maps.app.goo.gl/gFbaDoXZY3Gwaorj7`} target="_blank" rel="noopener noreferrer"><Image src="/assets/image/map.jpg" width={500} height={400} /></Link>
                </div>
              </div>
          </div>
      </div>
    )
  }
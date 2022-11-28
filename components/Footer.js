import React from 'react'
import styles from '../styles/Footer.module.css'
import NavBottom from '../components/NavBottom';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <div id='footer'>
        <div className='row'>
          <div className="collapse navbar-collapse d-flex bg-dark justify-content-end p-5 text-white">
            <div className='col-md-3'>
              <ul className="navbar-nav p-3">
                  <li className="nav-item p-2">
                      <h5 className='text-white'>Contact Info</h5>
                 </li>
                 <li className="nav-item p-2">
                    <div class="d-flex text-white">
                          <FontAwesomeIcon className='footer-icon text-white' icon={faLocationDot} />
                          <Link href={`/#activities`} className="nav-link">
                            kaligonj, Gazipur
                          </Link>
                    </div>
                 </li>
                 <li className="nav-item">
                    <div class="d-flex p-2 text-white">
                          <FontAwesomeIcon className='footer-icon text-white' icon={faEnvelope} />
                          <Link href={`/#activities`} className="nav-link">
                             florabanglapark@gmail.com
                          </Link>
                    </div>
                 </li> 
                 <li className="nav-item">
                    <div class="d-flex p-2 text-white">
                    <FontAwesomeIcon className='footer-icon text-white' icon={faPhone} />
                          <Link href={`/#activities`} className="nav-link">
                            01644404060
                          </Link>
                    </div>
                 </li>     
              </ul>
            </div>
            <div className='col-md-3 ml-5'>
              <ul className="navbar-nav px-5">
                  <li className="nav-item px-4">
                      <h5 className='text-white'>Schedule</h5>
                 </li>
                 <li className="nav-item p-2">
                    <div class="d-flex text-white">
                          <Link href={`/#activities`}>
                            Opens at 8:00 AM
                          </Link>
                    </div>
                 </li>
                 <li className="nav-item">
                    <div class="d-flex p-2 text-white">
                          <Link href={`/#activities`}>
                            Lunch at 1:00 PM
                          </Link>
                    </div>
                 </li>
                 <li className="nav-item">
                    <div class="d-flex p-2 text-white">
                          <Link href={`/#activities`}>
                            Closes at 5:00 PM
                          </Link>
                    </div>
                 </li>      
              </ul>
            </div>
            <div className='col-md-3 ml-5'>
              <ul className="navbar-nav px-5">
                  <li className="nav-item px-4">
                      <h5 className='text-white'>Support</h5>
                 </li>
                 <li className="nav-item p-2">
                    <div class="d-flex text-white">
                          <Link href={`/#activities`}>
                            Contact Us
                          </Link>
                    </div>
                 </li>
                 <li className="nav-item">
                    <div class="d-flex p-2 text-white">
                          <Link href={`/#activities`}>
                            Terms & Condition
                          </Link>
                    </div>
                 </li>
                 <li className="nav-item">
                    <div class="d-flex p-2 text-white">
                          <Link href={`/#activities`}>
                            Privacy Policy
                          </Link>
                    </div>
                 </li>      
              </ul>
            </div>      
            <div className='col-md-3'>
                  <Image className="justify-center align-center" src="/assets/image/logo.png" width={250} height={130} alt="logo"/>         
            </div>     
          </div>
        </div>
        <NavBottom/>
    </div>
  )
}

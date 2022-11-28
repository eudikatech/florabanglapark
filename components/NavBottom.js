import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBottom.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquarePinterest, faSquareSnapchat } from '@Fortawesome/free-brands-svg-icons'


export default function NavBottom() {
  return (
    <div id='navbottom'>
        <div className="row">
                <div className='col-md-12'>
                <nav id="navbar" className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link href={`/#activities`} className="nav-link">
                                Terms & Conditions
                            </Link>
                            </li>
                            <li className="nav-item me-5">
                            <Link href="/" className="nav-link">
                                About Us
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/#activities`}>
                                <FontAwesomeIcon className='text-dark me-1' icon={faSquareFacebook} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/#activities`}>
                                    <FontAwesomeIcon className='text-dark me-1' icon={faSquareTwitter} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/#activities`}>
                                <FontAwesomeIcon className='text-dark me-1' icon={faSquareInstagram} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/#activities`}>
                                <FontAwesomeIcon className='text-dark me-1' icon={faSquareSnapchat} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/#activities`}>
                                <FontAwesomeIcon className='text-dark me-4' icon={faSquarePinterest} />
                                </Link>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

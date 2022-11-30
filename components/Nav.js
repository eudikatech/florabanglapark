import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { faCalendarDays, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Nav() {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <FontAwesomeIcon id="collbtn" icon={faBars} /> 
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                </li>
                <li className="nav-item">
                <Link href={`/#activities`} className="nav-link">
                  Features
                </Link>
                </li>
                <li className="nav-item">
                <Link href={`/#footer`} className="nav-link" >
                  Virtual Tour
                </Link>
                </li>
            </ul>
            </div>


            <div className="rigntlink align-items-center">
            <Link href={`/bookevents`} className="btn btn-link evtbtn" role="button" aria-pressed="true">
                <FontAwesomeIcon id="event" icon={faCalendarDays} /> 
                      Event Reservation
            </Link>
            <Link href={`/book`} id='tkt' className="btn btn-light" role="button" aria-pressed="true">
                  Book Now
            </Link>
            </div>
        </div>
        </nav>
    </div>
  )
}

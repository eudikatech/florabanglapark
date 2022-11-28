import styles from '../styles/Hero.module.css'
import { faCalendarDays,faClock,faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'


export default function () {
  return (
    <div id="Hero" className='container-fluid'>
      <Image id="backimage" src="/assets/image/leaf.png" width={100} height={100}/>
        <header id='main-title' className='justify-content-center'>
        <Image className="logoimg justify-center align-center" src="/assets/image/logo.png" width={230} height={120} alt="logo"/>

              
        </header>
        <div className='row'>
            <div className='col-md-12'>
                <Image className="hero-img" src="/assets/image/flower-park.jpg" alt="Card image cap" width={230} height={120}/>
            </div>
        </div>

        <div className='row'>
          <div className='col-md-12 container-fluid justify-content-center'>
                    <div className="card btncard">
                        <div className="card-body">
                            <div className="d-md-flex flex-row bd-highlight m-3 justify-content-center">
                                <div className="p-2 bd-highlight flex-item flexitm">
                                    <div className="d-md-flex flex-row bd-highlight justify-content-center">
                                        <div className="p-2 bd-highlight flex-item">
                                        <FontAwesomeIcon icon={faCalendarDays} />       
                                        </div>
                                        <div className="p-2 bd-highlight flex-item">
                                            <Link className="nav-link" href="/">
                                            Check In<br/>
                                            Select Your Date
                                            </Link> 
                                        </div>     
                                    </div>               
                                </div>
                                <div className="p-2 bd-highlight flex-item flexout">
                                    <div className="d-md-flex flex-row bd-highlight justify-content-center">
                                        <div className="p-2 bd-highlight flex-item">
                                        <FontAwesomeIcon icon={faClock} />   
                                        </div>
                                        <div className="p-2 bd-highlight flex-item">
                                            <Link className="nav-link" href="/">
                                            Time<br/>
                                            Opens at 8:00AM
                                            </Link>  
                                        </div>     
                                    </div>               
                                </div>
                                <div className="p-2 bd-highlight flex-item flexout">
                                    <div className="d-md-flex flex-row bd-highlight justify-content-center">
                                        <div className="p-2 bd-highlight flex-item">
                                        <FontAwesomeIcon icon={faUser} />                                      
                                        </div>
                                        <div className="p-2 bd-highlight flex-item">
                                            <Link className="nav-link" href="/">
                                            Travelers<br/>
                                            Add Gest
                                            </Link> 
                                        </div>     
                                    </div>               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

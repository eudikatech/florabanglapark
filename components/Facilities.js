import styles from '../styles/Activities.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faUtensils, faChair, faHotel, faWheelchair, faToilet, faCar, faFan, faOtter } from '@fortawesome/free-solid-svg-icons';

export default function Facilities() {
    return (
      <div id='facilities' className={styles.container}>
          <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner fac">
                <div className="carousel-item active align-center">
                <div className="row">
                    <div className="col-sm-4 fac-slider">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faStore} />
                        <h6 className='text-white'>Food Court</h6>
                    </div>
                    <div class="col-sm-4">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faHotel} />
                        <h6 className='text-white px-2'>Resort</h6>
                    </div>
                    <div className="col-sm-4">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faUtensils} />
                        <h6 className='text-white'>Dining Area</h6>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="row">
                    <div className="col-sm-4 align-items-center">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faChair} />
                        <h6 className='text-white'>Sittings</h6>
                    </div>
                    <div class="col-sm-4">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faWheelchair} />
                        <h6 className='text-white'>WheelChair</h6>
                    </div>
                    <div class="col-sm-4">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faToilet} />
                        <h6 className='text-white'>Toilets</h6>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="row">
                    <div class="col-sm-4">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faCar} />
                        <h6 className='text-white'>Parking Area</h6>
                    </div>
                    <div class="col-sm-4">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faFan} />
                        <h6 className='text-white'>Flower Shop</h6>
                    </div>
                    <div class="col-sm-4">
                        <FontAwesomeIcon className='fac-slider-icon text-white' icon={faOtter} />
                        <h6 className='text-white'>Kids Play Ground</h6>
                    </div>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            </button>
           </div>
      </div>
    )
  }
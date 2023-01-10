import styles from '../styles/Activities.module.css'
import Image from 'next/image'

export default function Activities() {
    return (
      <div id='activities'>
          <div className='row container-fluid justify-content-center'>
              <div className='row'>
              <div className="container">
                <div className="row">
                  <div id="activities-heading" className="col-md-12">
                    <h1>Park Features</h1>
                    <Image class="actleaf1 pt-5" src="/assets/image/leaf2.svg" width={300} height={400}/>
                    <Image class="actleaf2 pt-5" src="/assets/image/leaf4.svg" width={300} height={300}/>
                  </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                    <h3 className='text-white'>Scenic Beauty</h3>
                    <hr/><br/>
                    <Image className="justify-center actimg" src="/assets/image/flowerbed.webp" width={300} height={400} alt="logo"/>
                    </div>
                    <div className="col-md-4 mt-5">
                    <h3 className='text-white'>Village Atmosphere</h3>
                    <hr/><br/>
                    <Image className="justify-center actimg" src="/assets/image/village_atmosphere.webp" width={300} height={400} alt="logo"/>
                    </div>  
                    <div className="col-md-4">
                    <h3 className='text-white'>Food Court</h3>
                    <hr/><br/>
                    <Image className="justify-center actimg" src="/assets/image/foodcourt.webp" width={300} height={400} alt="logo"/>
                    </div>
                    
                  
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <h3 className='text-white'>Flower Shop</h3>
                    <hr/><br/>
                    <Image className="justify-center actimg" src="/assets/image/flowershop.webp" width={300} height={400} alt="logo"/>
                    </div>
                    <div className="col-md-4 mt-5">
                    <h3 className='text-white'>Play Ground</h3>
                    <hr/><br/>
                    <Image className="justify-center actimg" src="/assets/image/playground.webp" width={300} height={400} alt="logo"/>
                    </div>
                    <div className="col-md-4">
                    <h3 className='text-white'>Photo Zone</h3>
                    <hr/><br/>
                    <Image className="justify-center actimg" src="/assets/image/photozone.webp" width={300} height={400} alt="logo"/>
                    </div>          
                </div>

              </div>
              </div>
          </div>
      </div>
    )
  }

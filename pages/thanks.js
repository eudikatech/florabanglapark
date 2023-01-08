import styles from '../styles/Book.module.css';



export default function Thanks() {


  return (
    <div id="thankspage" className={styles.container}>
        <div className='container-fluid justify-content-center'>
            <div className='row'>
                <div className='col-md-12 justify-center'>
                <p id="thankstxt" class="fw-semibold bg-light text-success">Thanks!! Our Customer Care Officer will Contact You Soon!</p>
                <img src="/assets/image/thankyou.webp" className="img-thks" alt="Thank You!"/>
                
                </div>
            </div>
        </div>
    </div> 
  )
}
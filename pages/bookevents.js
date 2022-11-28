import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from '../styles/Bookevents.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import axios from 'axios';


export default function Bookevents() {
    const [contactPersonName, setContactPersonName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const[eventName, setEventName] = useState("");
    const [startDate, setStartDate] = useState(new Date()); 
    const [numberOfVisitor, setNumberOfVisitor] = useState(""); 


  const bookeventFormSubmitHandler = async (e) => {
    e.preventDefault();


    const eventInfo = {
      contactPersonName,
      contactEmail,
      contactPhone,
      eventName,
      startDate,
      numberOfVisitor
    }

    try {
      const { data } = await axios({
        url : "/api/addEvent",
        method : "POST",
        data : eventInfo

      });
      console.log("response back: ",data);
    }catch(error) {
      console.log("Error :", error);
    }

  }

  return (
    <div id="booking" className={styles.container}>
        <div className='container-fluid justify-content-center'>
            <div className='row'>
                <div className='col-md-12 justify-center'>
                <form onSubmit={bookeventFormSubmitHandler}>
                <Link href="/" id="backbtn"  className="btn btn-danger" role="button">Back</Link>
                <h3 className='mb-5 text-center text-uppercase font-weight-boldm bg-danger text-light'>Book for Events</h3>
                <fieldset> 
                  <img id="booking-img" src="../assets/image/event.webp" className="img-fluid" alt="Responsive image"/>
                      <h3 className='text-center'>Event Details</h3>
                      <div className="form-group mb-3">
                        <label className="form-label" htmlFor="Name">Name :</label>
                        <input type="text" className="form-control" id="contact_person_name" placeholder="Your Name here" onChange={(e) => setContactPersonName(e.target.value)} required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="contact_email" aria-describedby="emailHelp" placeholder="example@email.com" onChange={(e) => setContactEmail(e.target.value)} required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="validationCustomUsername" className="form-label">Phone</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="contact_phone_number"><FontAwesomeIcon id="phone" icon={faPhone} /></span>
                          <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="+88017********" onChange={(e) => setContactPhone(e.target.value)} required/>
                          <div className="invalid-feedback">
                            Please Enter Phone Number.
                          </div>
                        </div>
                      </div>
                      <div className="htmlForm-group">
                        <label ftext-centeror="event-name-lable">Event Name :</label>
                        <input type="text" className="form-control" id="event-name" placeholder="Your Event Name here" onChange={(e) => setEventName(e.target.value)} required/>
                      </div>
                      <div className="htmlForm-group date" data-provide="datepicker">
                        <label ftext-centeror="event-name-lable">Event Date :</label>
                          <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} required/>
                      </div>
                      <div className="htmlForm-group">
                        <label htmlFor="htmlFormGroupExampleInput2">Event Visitor:</label>
                        <input type="text" className="form-control" id="htmlFormGroupExampleInput2" placeholder="Expected total number of visitors at the event here"  onChange={(e) => setNumberOfVisitor(e.target.value)} required/>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customControlValidation1"required/>
                        <label className="custom-control-label" htmlFor="customControlValidation1">&nbsp; I, Agree with,</label>
                        <Link href="/terms">Terms and Conditions</Link>
                      </div>
                      <button type="submit" id="submitbtn" className="btn btn-danger">Submit</button>
                    </fieldset>
                </form>
                </div>
            </div>
        </div>
    </div>
    
  )
}
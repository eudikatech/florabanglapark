import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from '../styles/Book.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import  axios  from 'axios';
import Router from 'next/router'

export default function Book() {
    const [visitorName, setVisitorName] = useState("");
    const [visitorEmail, setVisitorEmail] = useState("");
    const [visitorPhone, setVisitorPhone] = useState("");
    const [startDate, setStartDate] = useState(new Date()); 
    const [numberOfVisitor, setNumberOfVisitor] = useState(""); 


  const bookingFormSubmitHandler = async (e) => {
    e.preventDefault();


    const bookingInfo = {
      visitorName,
      visitorEmail,
      visitorPhone,
      startDate,
      numberOfVisitor
    }

    try {
      const { data } = await axios({
        url : "/api/visitor",
        method : "POST",
        data : bookingInfo

      });

      Router.replace('/thanks');

    }catch(error) {
      console.log("Error :", error);
    }
}


  return (
    <div id="booking" className={styles.container}>
        <div className='container-fluid justify-content-center'>
            <div className='row'>
                <div className='col-md-12 justify-center'>
                <form class="event" onSubmit={bookingFormSubmitHandler}>
                <Link href="/" id="backbtn" className="btn btn-danger" role="button">Back</Link>
                <h3 className='mb-5 text-center text-uppercase font-weight-bold bg-danger text-light'>Book Now</h3>
                <fieldset> 
                  <img src="/assets/image/book.webp" className="img-fluid" alt="Book Now image error"/>
                      <h3 className='text-center'>Visitor Details</h3>
                      <div className="htmlForm-group">
                        <label  htmlFor="formGroupExampleInput2" className="form-label">Name :</label><br/>
                        <input type="text" 
                        className="form-control" 
                        id="visitorName" 
                        placeholder="Your Name here"
                        onChange={(e) => setVisitorName(e.target.value)}
                        required/>
                      </div>
                      <div className="htmlForm-group">
                        <label htmlFor="exampeIlnputEmail1" className="form-label">Email address</label>
                        <input type="email" 
                        className="form-control" 
                        id="visitorEmail" 
                        aria-describedby="emailHelp" 
                        placeholder="example@email.com"
                        onChange={(e) => setVisitorEmail(e.target.value)}
                        required/>
                      </div>
                      <div className="htmlForm-group">
                        <label htmlFor="validationCustomUsername" >Phone</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend"><FontAwesomeIcon id="phone" icon={faPhone} /></span>
                          <input type="text" 
                          className="form-control" 
                          id="visitorPhone" 
                          aria-describedby="inputGroupPrepend" 
                          placeholder="+88017********" 
                          onChange={(e) => setVisitorPhone(e.target.value)}
                          required/>
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <div className="form-group date" data-provide="datepicker">
                        <label className="form-label mb-3" ftext-centeror="event-name-lable">Visiting Date :</label>
                          <DatePicker className="form-control" 
                          id="visitingDate" 
                          selected={startDate} onChange={(date) => setStartDate(date)}
                          required/>
                      </div>
                      <div className="htmlForm-group mt-3">
                        <label className="form-label" htmlFor="formGroupExampleInput2">Number of Visitor:</label>
                        <input type="text" 
                        className="form-control" 
                        id="numberOfVisitor" 
                        placeholder="Number of visitors or Family members here" 
                        onChange={(e) => setNumberOfVisitor(e.target.value)}
                        required/>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" 
                        className="custom-control-input" 
                        id="agreeWithTermsAndCondition"
                        required/>
                        <label className="custom-control-label" htmlFor="customControlValidation1">&nbsp; I, Agree with,</label>
                        <Link href="/terms">Terms and Conditions</Link>
                      </div>
                    </fieldset>
                    <button type="submit" id="submitbtn" className="btn btn-danger">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div> 
  )
}

 "use client";

import './checkin.css';
import axios from 'axios';
import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import { Modal } from 'antd';

const CheckIn = () => {

    const[fname, setFName] = useState("");
    const[lname, setLName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[sms, setSMS] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


   const handleFNameChange = event => {
    setFName(event.target.value)
  };
    const handleLNameChange = event => {
    setLName(event.target.value)
  };
    const handleEmailChange = event => {
    setEmail(event.target.value)
  };
    const handlePhoneChange = event => {
    setPhone(event.target.value)
  };
    const handleSMSChange = event => {
      setSMS(event.target.checked)
    }
    
    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };
  

    const handleSubmit = event => {
      event.preventDefault();

      const objt = { fname, lname, email, phone, sms };

      console.log(
        `\n
        First Name: ${fname} \n
        Last Name: ${lname} \n
        Email Address: ${email} \n
        Phone Number: ${phone} \n
        SMS Promotions: ${sms}
        `)

        axios.post('https://sheetdb.io/api/v1/ccqoxfdvii2py', 
          objt
        )
        .then(response => {
          console.log(response);
          setFName('');
          setLName('');
          setEmail('');
          setPhone('');
          setSMS(false);
          showModal();
        })
        .catch(error => {
          console.error(error);
        });
  };

  
  return (
    <form className="form-container">
      <h1 className="heading">Check In</h1><br></br>
        <label>
          First Name:
        </label><br></br>
          <input className ="textBox" type="text" name="Fname" placeholder="Enter your first name" value={fname} onChange={handleFNameChange}/><br></br><br></br>
        <label>
          Last Name:
        </label><br></br>
          <input className ="textBox" type="text" name="Lname" placeholder="Enter your last name" value={lname} onChange={handleLNameChange}/><br></br><br></br>
        <label>
          Email Address:
        </label><br></br>
          <input className ="textBox" type="text" name="Email" placeholder="Enter your email address" value={email} onChange={handleEmailChange}/><br></br><br></br>
        <label>
          Phone Number:
        </label><br></br>
          <input className ="textBox" type="text" name="Phone" placeholder="Enter your phone number" value={phone} onChange={handlePhoneChange}/><br></br><br></br>
      <div>
        <label>
          <input className="checkbox-wrapper" type="checkbox" name="sms" checked={sms} onChange={handleSMSChange}/>
          SMS Promotions
        </label>
        <br></br><br></br>
      </div>
        <Button type="submit" className="submitBtn" onClick={handleSubmit}>Submit</Button>

        <Modal title="You're on the waitlist!" 
        open={isModalOpen} onOk={handleOk}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: {backgroundColor: 'black' } }}>
          <p>Please stay nearby, 
            we'll be in contact as soon as it is your turn.</p>
      </Modal>

    </form>
      
      
      
  )
}

export default CheckIn

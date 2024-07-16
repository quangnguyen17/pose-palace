
"use client";
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import './waitlist.css';
import { Modal } from 'antd';

  
  const JoinWaitList = () => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[sms, setSMS] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    

   const handleFirstNameChange = event => {
    setFirstName(event.target.value)
  };
    const handleLastNameChange = event => {
    setLastName(event.target.value)
  };
    const handleEmailChange = event => {
    setEmail(event.target.value)
  };
    const handlePhoneChange = event => {
    setPhone(event.target.value)
  };
    const handleSMSChange = event => {
      setSMS(event.target.checked)
  };

    
      const showModal = () => {
        setIsModalOpen(true);
      };
  
      const handleOk = () => {
        setIsModalOpen(false);
      };
    

    const handleSubmit = event => {
      event.preventDefault();
      

      const objt = {firstName, lastName, email, phone, sms };

      console.log(
        `\n
        First Name: ${firstName} \n
        Last Name: ${lastName} \n
        Email Address: ${email} \n
        Phone Number: ${phone} \n
        SMS Promotions: ${sms}
        `)
        
        axios.post('https://sheetdb.io/api/v1/4ndhqe9ipguow', 
          objt
        )
        
        .then(response => {
          console.log(response);
          
          setFirstName('');
          setLastName('');
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
      <h1 className="heading">Join Waitlist Form</h1><br></br>
        <label>
          First Name:
        </label><br></br>
          <input className ="textBox" type="text" name="FirstName" placeholder="Enter your first name" value={firstName} onChange={handleFirstNameChange}/><br></br><br></br>
        <label>
          Last Name:
        </label><br></br>
          <input className ="textBox" type="text" name="Lname" placeholder="Enter your last name" value={lastName} onChange={handleLastNameChange}/><br></br><br></br>
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
          <input className="checkbox-wrapper" type="checkbox" name="SMS" checked={sms} onChange={handleSMSChange}/>
          Allow SMS promotions, 
          receive our latest offers and 
          promotions and stay up to date 
          with our latest stuff
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
      
       

  );
};


export default JoinWaitList 



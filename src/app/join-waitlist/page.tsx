'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import { Modal } from 'antd'
import { useCheckInForm } from '../useCheckInForm'
import '../form.css'

const JoinWaitList = () => {
  const {
    firstName,
    setFirstName,
    firstNameError,
    setFirstNameError,
    lastName,
    setLastName,
    lastNameError,
    setLastNameError,
    email,
    setEmail,
    emailError,
    setEmailError,
    phone,
    setPhone,
    phoneError,
    setPhoneError,
    sms,
    setSMS,
    isModalOpen,
    setIsModalOpen,
    handleFirstNameChange,
  } = useCheckInForm()

  const handleLastNameChange = (event) => {
    const value = event.target.value

    if (/^[a-zA-Z]*$/.test(value) || value === '') {
      setLastName(value)
      setLastNameError('')
    } else {
      setLastNameError('Last name should only contain letters!')
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setEmailError('')
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
    setPhoneError('')
  }

  const handleSMSChange = (event) => {
    setSMS(event.target.checked)
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const validateForm = () => {
    let valid = true

    //First Name validation
    if (firstName.trim() === '') {
      setFirstNameError('First Name is required!')
      valid = false
    } else if (!/^[a-zA-Z]*$/.test(firstName)) {
      setFirstNameError('First name should only contain letters!')
      valid = false
    }

    //Last Name validation
    if (lastName.trim() === '') {
      setLastNameError('Last Name is required!')
      valid = false
    } else if (!/^[a-zA-Z]*$/.test(firstName)) {
      setLastNameError('Last name should only contain letters!')
      valid = false
    }

    //Email validation
    if (email.trim() === '') {
      setEmailError('Email address is required!')
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Email address is invalid!')
      valid = false
    }

    //Phone number validation (assuming 10 digits)
    if (phone.trim() === '') {
      setPhoneError('Phone number is required!')
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone number is invalid!')
      valid = false
    }

    return valid
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validateForm()

    if (isValid) {
      const objt = { firstName, lastName, email, phone, sms }

      console.log(
        `\n
        First Name: ${firstName} \n
        Last Name: ${lastName} \n
        Email Address: ${email} \n
        Phone Number: ${phone} \n
        SMS Promotions: ${sms}
        `,
      )

      axios
        .post('https://sheetdb.io/api/v1/4ndhqe9ipguow', objt)

        .then((response) => {
          console.log(response)

          setFirstName('')
          setLastName('')
          setEmail('')
          setPhone('')
          setSMS(false)
          showModal()
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      console.log('Form has errors.')
    }
  }

  return (
    <form>
      <Image
        src="/logo-short.png"
        alt="Pose Palace Short Logo"
        width={200}
        height={40}
        style={{ objectFit: 'contain', width: 'auto' }}
      />
      <h3 className="heading">Join Waitlist</h3>

      <label>First Name:</label>
      <input
        type="text"
        name="FirstName"
        placeholder="Enter your first name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      {firstNameError && <span className="errorMessage">{firstNameError}</span>}

      <label>Last Name:</label>
      <input
        type="text"
        name="Lastname"
        placeholder="Enter your last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      {lastNameError && <span className="errorMessage">{lastNameError}</span>}

      <label>Email Address:</label>
      <input
        type="text"
        name="Email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <span className="errorMessage">{emailError}</span>}

      <label>Phone Number:</label>
      <input
        type="text"
        name="Phone"
        placeholder="Enter your phone number"
        value={phone}
        onChange={handlePhoneChange}
      />
      {phoneError && <span className="errorMessage">{phoneError}</span>}

      <div className="row">
        <input type="checkbox" name="SMS" checked={sms} onChange={handleSMSChange} />
        <label>
          Allow SMS promotions, receive our latest offers and promotions and stay up to date with
          our latest stuff
        </label>
      </div>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      <Modal
        title="You're on the waitlist!"
        open={isModalOpen}
        onOk={handleOk}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { backgroundColor: 'black' } }}
      >
        <p>Please stay nearby, we'll be in contact as soon as it is your turn.</p>
      </Modal>
    </form>
  )
}

export default JoinWaitList

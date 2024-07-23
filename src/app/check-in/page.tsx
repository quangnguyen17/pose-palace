'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import { useCheckInForm } from '../useCheckInForm'
import '../form.css'
import './modal.css'

const CheckIn = () => {
  const {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    isModalOpen,
    setIsModalOpen,
    handleInputChange,
  } = useCheckInForm()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const validateForm = () => {
    // let valid = true

    // //First Name validation
    // if (firstName.trim() === '') {
    //   setFirstNameError('First Name is required!')
    //   valid = false
    // } else if (!/^[a-zA-Z]*$/.test(firstName)) {
    //   setFirstNameError('First name should only contain letters!')
    //   valid = false
    // }

    // //Last Name validation
    // if (lastName.trim() === '') {
    //   setLastNameError('Last Name is required!')
    //   valid = false
    // } else if (!/^[a-zA-Z]*$/.test(firstName)) {
    //   setLastNameError('Last name should only contain letters!')
    //   valid = false
    // }

    // //Email validation
    // if (email.trim() === '') {
    //   setEmailError('Email address is required!')
    //   valid = false
    // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //   setEmailError('Email address is invalid!')
    //   valid = false
    // }

    // //Phone number validation (assuming 10 digits)
    // if (phone.trim() === '') {
    //   setPhoneError('Phone number is required!')
    // } else if (!/^\d{10}$/.test(phone)) {
    //   setPhoneError('Phone number is invalid!')
    //   valid = false
    // }

    // return valid
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    showModal()

    // const isValid = validateForm()

    // if (isValid) {
    //   const objt = { firstName, lastName, email, phone, sms }

    //   console.log(
    //     `\n
    //     First Name: ${firstName} \n
    //     Last Name: ${lastName} \n
    //     Email Address: ${email} \n
    //     Phone Number: ${phone} \n
    //     SMS Promotions: ${sms}
    //     `,
    //   )

    //   axios
    //     .post('https://sheetdb.io/api/v1/ccqoxfdvii2py', objt)
    //     .then((response) => {
    //       console.log(response)
    //       setFirstName('')
    //       setLastName('')
    //       setEmail('')
    //       setPhone('')
    //       setSMS(false)
    //       showModal()
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    // } else {
    //   console.log('Form has errors.')
    // }
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
      <h3>Check in</h3>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        placeholder="Enter your first name"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      {formErrors.firstName && <span className="errorMessage">{formErrors.firstName}</span>}

      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        placeholder="Enter your last name"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      {formErrors.lastName && <span className="errorMessage">{formErrors.lastName}</span>}

      <label>Email Address:</label>
      <input
        type="text"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleInputChange}
      />
      {formErrors.email && <span className="errorMessage">{formErrors.email}</span>}

      <label>Phone Number:</label>
      <input
        type="text"
        name="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleInputChange}
      />
      {formData.phone && <span className="errorMessage">{formData.phone}</span>}

      <div className="row">
        <input type="checkbox" name="sms" checked={formData.sms} onChange={handleInputChange} />
        <label>
          Allow SMS promotions, receive our latest offers and promotions and stay up to date with
          our latest stuff
        </label>
      </div>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      {/* <Modal
        title="You're on the waitlist!"
        open={isModalOpen}
        onOk={handleOk}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { backgroundColor: 'black' } }}
      >
      </Modal> */}
      <div className={`modal-overlay${isModalOpen ? '-visible' : ''}`}>
        <div className={`modal${isModalOpen ? '-visible' : ''}`}>
          <h2>You're on the waitlist!</h2>
          <p>Please stay nearby, we'll be in contact as soon as it is your turn.</p>
        </div>
      </div>
    </form>
  )
}

export default CheckIn

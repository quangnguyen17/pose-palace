'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import { Modal } from 'antd'
import '../form.css'

const CheckIn = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [sms, setSMS] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
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

  const handleSubmit = (event) => {
    event.preventDefault()

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
      .post('https://sheetdb.io/api/v1/ccqoxfdvii2py', objt)
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
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        placeholder="Enter your last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <label>Email Address:</label>
      <input
        type="text"
        name="Email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      <label>Phone Number:</label>
      <input
        type="text"
        name="Phone"
        placeholder="Enter your phone number"
        value={phone}
        onChange={handlePhoneChange}
      />
      <div className="row">
        <input type="checkbox" name="sms" checked={sms} onChange={handleSMSChange} />
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

export default CheckIn

'use client'

import Image from 'next/image'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import { Page } from '../components/Page'
import { useForm } from '../useForm'
import '../form.css'
import '../modal.css'
import '../loading.css'

const CheckIn = () => {
  const { formData, formErrors, isModalOpen, isLoading, ...formMethods } = useForm()

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const isValid = formMethods.validateForm()
    if (!isValid) return

    formMethods.showLoading()

    try {
      await axios.post('https://api.zerosheets.com/v1/cms', formData)
      formMethods.setIsModalOpen(true) // Show modal
    } catch (error) {
      console.error(error)
    }

    formMethods.hideLoading() // Hide loading screen
  }

  return (
    <Page>
      <form>
        <Image
          src="/logo-long.png"
          alt="Pose Palace Short Logo"
          width={200}
          height={100}
          unoptimized
          style={{ objectFit: 'contain', width: 'auto' }}
        />
        <h2>Check In</h2>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={formMethods.handleInputChange}
        />
        {formErrors.firstName && <span className="errorMessage">{formErrors.firstName}</span>}
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={formMethods.handleInputChange}
        />
        {formErrors.lastName && <span className="errorMessage">{formErrors.lastName}</span>}
        <label>Email Address:</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={formMethods.handleInputChange}
        />
        {formErrors.email && <span className="errorMessage">{formErrors.email}</span>}
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={formMethods.handleInputChange}
        />
        {formErrors.phone && <span className="errorMessage">{formErrors.phone}</span>}
        <div className="row">
          <input
            type="checkbox"
            name="sms"
            checked={formData.sms}
            onChange={formMethods.handleInputChange}
          />
          <label>
            Allow SMS promotions, receive our latest offers and promotions and stay up to date with
            our latest stuff
          </label>
        </div>
        <Button type="submit" onClick={handleSubmit} disabled={!formMethods.isFormFilled()}>
          Submit
        </Button>
        {/* Loading Screen */}
        <div className={`loading-overlay${isLoading ? '-visible' : ''}`}>
          <div className="loading">
            <div className="loading-dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className={`modal-overlay${isModalOpen ? '-visible' : ''}`}>
          <div className={`modal${isModalOpen ? '-visible' : ''}`}>
            <h2>You're on the waitlist!</h2>
            <p>Please stay nearby, we'll be in contact as soon as it is your turn.</p>
          </div>
        </div>
      </form>
    </Page>
  )
}

export default CheckIn

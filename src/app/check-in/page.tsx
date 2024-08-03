'use client'

import Image from 'next/image'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import { Page } from '../components/Page'
import { Cell } from '../components/Cell'
import { useForm } from '../useForm'
import '../form.css'
import '../modal.css'
import '../loading.css'

const CheckIn = () => {
  const { handleSubmit, formData, formErrors, isModalOpen, isLoading, ...formMethods } =
    useForm('check-in')

  return (
    <Page>
      <form>
        <Image
          src="/logo-short.png"
          alt="Pose Palace Logo Short"
          width={0}
          height={0}
          unoptimized
          style={{ objectFit: 'contain', width: 'auto', height: '60px' }}
        />
        <h2>Check In</h2>
        <Cell.Separator />
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
            Opt in for SMS promotions to receive exclusive offers and stay updated with our latest
            news and deals.
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
            <h2>{`You are checked in ✅`}</h2>
            <p>Please come to the front desk and show this to one of our associates</p>
          </div>
        </div>
      </form>
    </Page>
  )
}

export default CheckIn

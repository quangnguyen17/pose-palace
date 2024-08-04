'use client'

import { Page } from '../components/Page'
import { Form } from '../components/Form'
import { Modal } from '../components/Modal'
import { Loading } from '../components/Loading'
import { useForm } from '../useForm'
import '../form.css'

const JoinWaitList = () => {
  const { handleSubmit, formData, formErrors, isModalOpen, isLoading, ...formMethods } =
    useForm('join-waitlist')

  return (
    <Page>
      <form>
        <Form.Header title="Join Waitlist" />
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
        <div className="row-checkbox">
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
        <button type="submit" onClick={handleSubmit} disabled={!formMethods.isFormFilled()}>
          Submit
        </button>
        <Loading isLoading={isLoading} />
        <Modal
          isOpen={isModalOpen}
          title={`You are now on the waitlist ✅`}
          description={`Please stay nearby, we'll contact you as soon as it is your turn.`}
        />
      </form>
    </Page>
  )
}

export default JoinWaitList

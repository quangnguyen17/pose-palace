// 'use client'
'use server'

// import { Fragment } from 'react'
// import { Page } from '../components/Page'
// import { Form } from '../components/Form'
// import { Modal } from '../components/Modal'
// import { Loading } from '../components/Loading'
// import { useForm } from '../useForm'
// import '../form.css'
import { redirect } from 'next/navigation'

const CheckIn = async () => {
  // const { handleSubmit, formData, formErrors, isModalOpen, isLoading, ...formMethods } =
  //   useForm('check-in')
  // return (
  //   <Page>
  //     <form>
  //       <Form.Header title="Check In" />
  //       <label>Select room:</label>
  //       <select name="room" value={formData.room} onChange={formMethods.handleInputChange}>
  //         <option value="white">Full Body White Color</option>
  //         <option value="color">Standard Color Room</option>
  //       </select>
  //       <label>Select duration:</label>
  //       <select name="duration" value={formData.duration} onChange={formMethods.handleInputChange}>
  //         <option value="5">5 Minutes</option>
  //         <option value="15">15 Minutes</option>
  //       </select>
  //       {formData.duration.toString() === '5' && (
  //         <Fragment>
  //           <label>Session by:</label>
  //           <select name="type" value={formData.type} onChange={formMethods.handleInputChange}>
  //             <option value="walk-in">Walk In</option>
  //             <option value="appointment">Appointment</option>
  //           </select>
  //         </Fragment>
  //       )}
  //       <label>First Name:</label>
  //       <input
  //         type="text"
  //         name="firstName"
  //         placeholder="Enter your first name"
  //         value={formData.firstName}
  //         onChange={formMethods.handleInputChange}
  //       />
  //       {formErrors.firstName && <span className="errorMessage">{formErrors.firstName}</span>}
  //       <label>Last Name:</label>
  //       <input
  //         type="text"
  //         name="lastName"
  //         placeholder="Enter your last name"
  //         value={formData.lastName}
  //         onChange={formMethods.handleInputChange}
  //       />
  //       {formErrors.lastName && <span className="errorMessage">{formErrors.lastName}</span>}
  //       <label>Email Address:</label>
  //       <input
  //         type="text"
  //         name="email"
  //         placeholder="Enter your email address"
  //         value={formData.email}
  //         onChange={formMethods.handleInputChange}
  //       />
  //       {formErrors.email && <span className="errorMessage">{formErrors.email}</span>}
  //       <label>Phone Number:</label>
  //       <input
  //         type="text"
  //         name="phone"
  //         placeholder="Enter your phone number"
  //         value={formData.phone}
  //         onChange={formMethods.handleInputChange}
  //       />
  //       {formErrors.phone && <span className="errorMessage">{formErrors.phone}</span>}
  //       <div className="row-checkbox">
  //         <input
  //           type="checkbox"
  //           name="sms"
  //           checked={formData.sms}
  //           onChange={formMethods.handleInputChange}
  //         />
  //         <label>
  //           Opt in for SMS promotions to receive exclusive offers and stay updated with our latest
  //           news and deals.
  //         </label>
  //       </div>
  //       <button type="submit" onClick={handleSubmit} disabled={!formMethods.isFormFilled()}>
  //         Submit
  //       </button>
  //       <Loading isLoading={isLoading} />
  //       <Modal
  //         isOpen={isModalOpen}
  //         title={`You are now checked in ✅`}
  //         description={`Please come to the front desk and show this to one of our associates`}
  //       />
  //     </form>
  //   </Page>
  // )
  return redirect('https://forms.gle/47CR8EAGJBxqWZ8r8')
}

export default CheckIn

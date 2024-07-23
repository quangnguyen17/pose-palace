// a hook is a function
// but a function is not a hook
// a hook can contains other hooks
// but function cannot contain hooks
// hooks can only be called at the top of the component

import { useState } from 'react'

export const useCheckInForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sms: true,
  })
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sms: true,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleInputChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setFormData({ ...formData, [name]: value })

    // validate string
    if (['firstName', 'lastName'].includes(name)) {
      if (/^[a-zA-Z]*$/.test(value) || value === '') {
        setFormErrors({ ...formErrors, [name]: '' })
      } else {
        setFormErrors({ ...formErrors, [name]: `${name} should only contain letters!` })
      }
    }

    if (['phone', 'email'].includes(name)) {
      // validate phone and email
      // if (/^[a-zA-Z]*$/.test(value) || value === '') {
      //   setFormData({ ...formData, [name]: value })
      //   setFormErrors({ ...formErrors, [name]: '' })
      // } else {
      //   setFormErrors({ ...formErrors, [name]: `${name} should only contain letters!` })
      // }
    }

    if (name === 'sms') {
      // validate sms boolean value
    }
  }

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    isModalOpen,
    setIsModalOpen,
    handleInputChange,
  }
}

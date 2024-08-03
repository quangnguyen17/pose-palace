import { useState, useCallback, useMemo } from 'react'
import axios from 'axios'

type FormType = 'join-waitlist' | 'check-in'

export const useForm = (formType: FormType) => {
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
    sms: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  //Handle input
  const handleInputChange = useCallback((event) => {
    const { name, value, type, checked } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }, [])

  //Validations
  const validateForm = useCallback(() => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      sms: '',
    }

    let valid = true

    // First Name validation
    if (!/^[a-zA-Z]*$/.test(formData.firstName)) {
      newErrors.firstName = 'First name should only contain letters!'
      valid = false
    }

    // Last Name validation
    if (!/^[a-zA-Z]*$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name should only contain letters!'
      valid = false
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email address is invalid!'
      valid = false
    }

    // Phone number validation
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid!'
      valid = false
    }

    setFormErrors(newErrors)
    return valid
  }, [formData])

  const isFormFilled = useCallback(() => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== ''
    )
  }, [formData])

  const showLoading = () => setIsLoading(true)
  const hideLoading = () => setIsLoading(false)

  const formMethods = {
    setFormData,
    setFormErrors,
    setIsModalOpen,
    handleInputChange,
    validateForm,
    isFormFilled,
    showLoading,
    hideLoading,
  }

  const getFormPayload = () => ({
    'First Name': formData.firstName,
    'Last Name': formData.lastName,
    Email: formData.email,
    'Phone Number': formData.phone,
    'Allow SMS Offers and Promos': formData.sms ? `✅` : `❌`,
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const isValid = formMethods.validateForm()
    if (!isValid) return

    formMethods.showLoading()

    try {
      const formKey = formType === 'check-in' ? 'lob' : 'cms'
      await axios.post(`https://api.zerosheets.com/v1/${formKey}`, getFormPayload())
      formMethods.setIsModalOpen(true) // Show modal
    } catch (error) {
      console.error(error)
    }

    formMethods.hideLoading() // Hide loading screen
  }

  return {
    formData,
    formErrors,
    isModalOpen,
    isLoading,
    handleSubmit,
    ...formMethods,
  }
}

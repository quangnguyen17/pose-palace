import { useState, useCallback } from 'react'
import axios from 'axios'

type AppointmentType = 'walk-in' | 'appointment'
type AppointmentRoom = 'white' | 'color'
type FormType = 'join-waitlist' | 'check-in'
type Form = {
  firstName: string
  lastName: string
  email: string
  phone: string
  sms: boolean
  type: AppointmentType
  room: AppointmentRoom
  duration: number
}

export const useForm = (formType: FormType) => {
  const [formData, setFormData] = useState<Form>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sms: true,
    room: 'white',
    type: 'walk-in',
    duration: 5,
  })
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sms: '',
    room: '',
    type: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Handle input change
  const handleInputChange = useCallback((event: any) => {
    const { name, value, type, checked } = event.target
    setFormData((formData) => ({ ...formData, [name]: type === 'checkbox' ? checked : value }))
  }, [])

  // Validations
  const validateForm = useCallback(() => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      sms: '',
      room: '',
      type: '',
      duration: '',
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

  const getFormPayload = () => {
    const date = new Date()
    return {
      'First Name': formData.firstName,
      'Last Name': formData.lastName,
      Email: formData.email,
      'Phone Number': formData.phone,
      'Allow SMS Offers and Promos': formData.sms ? `✅` : `❌`,
      Date: date.toLocaleDateString(),
      Time: date.toLocaleTimeString(),
      ...(formType === 'check-in' && {
        Type: formData.type,
        Room: formData.room,
        Duration: formData.duration,
      }),
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const isValid = validateForm()
    if (!isValid) return

    setIsLoading(true)

    const formKey = formType === 'check-in' ? 'lob' : 'cms'
    await axios.post(`https://api.zerosheets.com/v1/${formKey}`, getFormPayload())

    setIsModalOpen(true)
    setIsLoading(false)
  }

  return {
    formData,
    formErrors,
    isModalOpen,
    isLoading,
    handleSubmit,
    validateForm,
    isFormFilled,
    handleInputChange,
  }
}

'use client'

import { FormEvent } from 'react'
import Link from 'next/link'

const rentalInbox = 'hainguyen.whiteroom@posepalacestudio.com'

export const RentalRequestLink = ({
  cameraName,
  className,
}: {
  cameraName?: string
  className?: string
}) => {
  const query = cameraName ? `?camera=${encodeURIComponent(cameraName)}` : ''
  return (
    <Link href={`/rentals/request${query}`} className={className}>
      {cameraName ? 'Request this camera' : 'Request a camera'} <span aria-hidden="true">↗</span>
    </Link>
  )
}

export const RentalRequestForm = ({ cameraName }: { cameraName?: string }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent('Digital camera rental request')
    const body = encodeURIComponent(
      [
        `Camera: ${form.get('camera') || 'Any available camera'}`,
        `Preferred pickup: ${form.get('pickup') || 'Not provided'}`,
        `Preferred return: ${form.get('return') || 'Not provided'}`,
        `Name: ${form.get('name') || 'Not provided'}`,
        `Phone: ${form.get('phone') || 'Not provided'}`,
        `Notes: ${form.get('notes') || 'None'}`,
      ].join('\n'),
    )
    window.location.href = `mailto:${rentalInbox}?subject=${subject}&body=${body}`
  }

  return (
    <form className="RentalRequestForm" onSubmit={handleSubmit}>
      <p className="RentalRequestIntro">
        Tell us what you need and your email app will open a request addressed to {rentalInbox}.
      </p>
      <label>
        Camera
        <select name="camera" defaultValue={cameraName || ''} required>
          <option value="">Any available camera</option>
          <option>Canon PowerShot A480</option>
          <option>Canon PowerShot A495</option>
          <option>Sony Cyber-shot DSC-S2100</option>
          <option>Fujifilm FinePix AX655</option>
        </select>
      </label>
      <div className="RentalRequestFields">
        <label>
          Pickup date
          <input type="date" name="pickup" required />
        </label>
        <label>
          Return date
          <input type="date" name="return" required />
        </label>
      </div>
      <div className="RentalRequestFields">
        <label>
          Your name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>
      <label>
        Notes <span>(optional)</span>
        <textarea name="notes" rows={3} placeholder="Tell us about your plans or ask a question." />
      </label>
      <button type="submit" className="RentalRequestSubmit">
        Open email request ↗
      </button>
    </form>
  )
}

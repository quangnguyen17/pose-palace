'use client'

import { useState } from 'react'
import { SPACING } from '../constants'
import { BookNowModal } from './BookNowModal/BookNowModal'
import { Clock } from './Clock'

export const BookNow = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        position: 'fixed',
        left: SPACING,
        right: SPACING,
        bottom: SPACING,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        style={{
          border: 'none',
          color: 'white',
          backgroundColor: 'black',
          padding: '16px 28px 16px 26px',
          borderRadius: '32px',
          fontSize: '17px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
        onClick={() => setIsOpen(true)}
      >
        <Clock />
        <span>Book Now</span>
      </button>
      <BookNowModal isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
    </div>
  )
}

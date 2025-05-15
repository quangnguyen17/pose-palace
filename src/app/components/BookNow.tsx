'use client'

import { useState } from 'react'
import { SPACING, SPACING_PX } from '../constants'
import { BookNowModal } from './BookNowModal/BookNowModal'

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
          padding: `${SPACING}px ${SPACING * 1.5}px`,
          borderRadius: '32px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(true)}
      >
        Book Now!
      </button>
      <BookNowModal isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
    </div>
  )
}

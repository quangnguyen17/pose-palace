'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SPACING, MOBILE_BREAKPOINT } from '../constants'
import { BookNowModal } from './BookNowModal/BookNowModal'

export const BookNow = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/book-now') {
      setIsOpen(true)
    }
  }, [])

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
          width: `${MOBILE_BREAKPOINT - SPACING - SPACING}px`,
          border: 'none',
          color: 'white',
          backgroundColor: 'black',
          padding: `${SPACING}px ${SPACING * 1.5}px`,
          borderRadius: '32px',
          fontSize: '17px',
          fontWeight: 400,
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(true)}
      >
        Book Now
      </button>
      <BookNowModal isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
    </div>
  )
}

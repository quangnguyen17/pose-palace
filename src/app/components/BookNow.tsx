'use server'

import Link from 'next/link'
import { SPACING, MOBILE_BREAKPOINT } from '../constants'

export const BookNow = () => {
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
      <Link
        style={{
          width: `${MOBILE_BREAKPOINT - SPACING - SPACING}px`,
          border: 'none',
          color: 'white',
          backgroundColor: 'black',
          padding: `${SPACING}px ${SPACING * 1.5}px`,
          borderRadius: '32px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
        href='https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start'
        target='_blank'
      >
        Book Now
      </Link>
    </div>
  )
}

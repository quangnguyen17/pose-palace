'use client'

import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { RightArrow } from './RightArrow'
import { MOBILE_BREAKPOINT, SPACING } from '../constants'
import { BookNowModal } from './BookNowModal/BookNowModal'
import 'react-spring-bottom-sheet/dist/style.css'

export const BookNow = () => {
  const [open, setOpen] = useState(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

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
          flex: 1,
          maxWidth: MOBILE_BREAKPOINT - SPACING * 2,
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          padding: '14px 20px',
          borderRadius: '20px',
          fontSize: '17px',
          fontWeight: 400,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={openModal}
      >
        <span>Book now</span>
        <RightArrow />
      </button>
      <BottomSheet open={open} onDismiss={closeModal}>
        <BookNowModal />
      </BottomSheet>
    </div>
  )
}

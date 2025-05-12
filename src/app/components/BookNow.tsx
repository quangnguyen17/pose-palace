import Link from 'next/link'
import { RightArrow } from './RightArrow'
import { MOBILE_BREAKPOINT, SPACING } from '../constants'

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
          flex: 1,
          maxWidth: MOBILE_BREAKPOINT,
          backgroundColor: 'black',
          color: 'white',
          padding: '14px 20px',
          borderRadius: '20px',
          fontSize: '17px',
          fontWeight: 400,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        href="/book-now"
      >
        <span>Book now</span>
        <RightArrow />
      </Link>
    </div>
  )
}

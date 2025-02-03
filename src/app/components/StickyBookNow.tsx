import Link from 'next/link'
import { RightArrow } from './RightArrow'

export const StickyBookNow = () => {
  return (
    <div
      className="sticky-book-now"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'none',
        padding: '16px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Link
        style={{
          backgroundColor: 'black',
          color: 'white',
          fontSize: '16px',
          padding: '14px 24px',
          borderRadius: '24px',
        }}
        href="/book-now"
      >
        Book now
      </Link>
    </div>
  )
}

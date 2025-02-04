import Link from 'next/link'
import { RightArrow } from './RightArrow'

export const BookNow = () => {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '16px' }}>
      <Link
        style={{
          width: '100%',
          backgroundColor: 'black',
          color: 'white',
          padding: '12px 20px',
          fontSize: '16px',
          borderRadius: '24px',
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

import Link from 'next/link'
import { RightArrow } from './RightArrow'

export const BookNow = () => {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <Link
        style={{
          width: '100%',
          backgroundColor: 'black',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '20px 20px 0px 0px',
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

import Link from 'next/link'
import { RightArrow } from './RightArrow'

export const StickyBookNow = () => {
  return (
    <Link
      style={{
        backgroundColor: 'black',
        color: 'white',
        fontSize: '16px',
        padding: '12px 16px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      href="/book-now"
      className="sticky-book-now"
    >
      <span>Book Now</span>
      <RightArrow />
    </Link>
  )
}

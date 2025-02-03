import Link from 'next/link'
import { RightArrow } from './RightArrow'

export const BookNow = () => {
  return (
    <Link
      style={{
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        padding: '14px 20px',
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
  )
}

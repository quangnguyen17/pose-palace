import Link from 'next/link'
import Image from 'next/image'

export const StickyBookNow = () => {
  return (
    <Link
      style={{
        backgroundColor: 'black',
        color: 'white',
        fontSize: '16px',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      href="/book-now"
      className="sticky-book-now"
    >
      <span>Book Now</span>
      <Image
        style={{ filter: 'invert(1)' }}
        src="/right-arrow.png"
        alt="/right-arrow.png"
        width={26}
        height={26}
        unoptimized
      />
    </Link>
  )
}

import Link from 'next/link'

export const StickyBookNow = () => {
  return (
    <Link
      style={{
        backgroundColor: 'black',
        color: 'white',
        fontSize: '15px',
        fontWeight: 500,
        padding: '15px',
      }}
      href="/book-now"
      className="sticky-book-now"
    >
      BOOK NOW
    </Link>
  )
}

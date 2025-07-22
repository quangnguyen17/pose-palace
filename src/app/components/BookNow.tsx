import Link from 'next/link'

export const BookNow = () => {
  return (
    <Link
      style={{
        width: '100%',
        border: 'none',
        color: 'white',
        backgroundColor: 'black',
        padding: '14px',
        fontSize: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
      }}
      href="https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start"
      target="_blank"
    >
      Book Now
    </Link>
  )
}

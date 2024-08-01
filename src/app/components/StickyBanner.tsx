import { FC } from 'react'
import Link from 'next/link'

export const StickyBanner: FC = () => {
  return (
    <Link
      style={{
        backgroundColor: '#e9dd70',
        color: 'black',
        padding: '16px',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '20px',
        textAlign: 'center',
      }}
      href="/book-now"
    >
      {`Book your self-portrait session today 📸`}
    </Link>
  )
}

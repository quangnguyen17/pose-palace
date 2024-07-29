import { FC } from 'react'
import Link from 'next/link'

export const StickyBanner: FC = () => {
  return (
    <Link
      style={{
        backgroundColor: '#d5d5d5',
        color: 'black',
        padding: '16px',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '20px',
        textAlign: 'center',
      }}
      href="https://calendly.com/posepalacestudio"
      target="_blank"
    >
      {`Book your self-portrait session today 📸`}
    </Link>
  )
}

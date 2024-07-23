import { FC } from 'react'
import Link from 'next/link'

export const StickyBanner: FC = () => {
  return (
    <Link
      style={{
        backgroundColor: '#60b58d',
        color: 'white',
        padding: '16px',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '20px',
        textAlign: 'center',
      }}
      href="https://calendly.com/posepalacestudio"
      target="_blank"
    >
      {`Book a self-portrait session with us today 📸`}
    </Link>
  )
}

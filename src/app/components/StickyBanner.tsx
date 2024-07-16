import { FC } from 'react'
import Link from 'next/link'

export const StickyBanner: FC = () => {
  return (
    <Link
      style={{
        flex: 1,
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'white',
        padding: '16px',
        fontSize: '15px',
        fontWeight: 500,
        lineHeight: '19px',
        textAlign: 'center',
      }}
      href="https://calendly.com/posepalacestudio"
      target="_blank"
    >
      {`Book your first self-portrait session today 📸`}
    </Link>
  )
}

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const BookNow: FC<{
  theme?: 'light' | 'dark'
  text?: string
}> = ({ theme = 'dark', text = 'BOOK NOW' }) => {
  const backgroundColor = theme === 'light' ? 'rgb(235, 235, 235)' : 'rgb(0, 0, 0)'
  const color = theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'

  return (
    <Link
      style={{
        backgroundColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 18px 18px 18px',
        margin: 0,
      }}
      href="/book-now"
    >
      <p
        style={{
          fontSize: '20px',
          color,
        }}
      >
        {text}
      </p>
      {/* <Image
        className={theme === 'dark' ? 'invert-color' : ''}
        src="/right-arrow.png"
        alt="/right-arrow.png"
        width={25}
        height={25}
        unoptimized
      /> */}
    </Link>
  )
}

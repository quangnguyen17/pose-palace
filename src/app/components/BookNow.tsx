import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const BookNow: FC<{
  theme?: 'light' | 'dark'
  text?: string
  afterText?: string
}> = ({ theme = 'light', text = 'Book Now', afterText }) => {
  const backgroundColor = theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
  const color = theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'

  return (
    <Link
      style={{
        backgroundColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
      }}
      href="/book-now"
    >
      <p style={{ fontSize: '15px', lineHeight: '15px', color }}>
        {text && <span>{text}</span>}{' '}
        {afterText && (
          <span>
            <b>{afterText}</b>
          </span>
        )}
      </p>
      <Image
        className={theme === 'dark' ? 'invert-color' : ''}
        src="/right-arrow.png"
        alt="/right-arrow.png"
        width={25}
        height={25}
        unoptimized
      />
    </Link>
  )
}

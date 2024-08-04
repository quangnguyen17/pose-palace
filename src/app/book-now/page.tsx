'use client'

import { FC } from 'react'
import { Page } from '../components/Page'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import './book-now.css'

const BookNow: FC = () => {
  const searchParams = useSearchParams()
  const room = searchParams.get('room')
  const duration = searchParams.get('duration')

  const sessionData = [
    {
      className: 'book-now-card sample-2',
      href: 'https://calendly.com/posepalacestudio-colorroom/5min',
      price: '$27',
      duration: '5-Minute Session',
      roomType: 'Standard Color Room',
    },
    {
      className: 'book-now-card sample-3',
      href: 'https://calendly.com/posepalacestudio-colorroom/15min',
      price: '$67',
      duration: '15-Minute Session',
      roomType: 'Standard Color Room',
    },
    {
      className: 'book-now-card white-1',
      href: 'https://calendly.com/posepalacestudio/5min',
      price: '$27',
      duration: '5-Minute Session',
      roomType: 'Full Body White Room',
    },
    {
      className: 'book-now-card white-2',
      href: 'https://calendly.com/posepalacestudio/15min',
      price: '$67',
      duration: '15-Minute Session',
      roomType: 'Full Body White Room',
    },
  ]

  const getSessionData = () => {
    if (room === 'white') {
      return [sessionData[2], sessionData[3]]
    }
    if (room === 'color') {
      return [sessionData[0], sessionData[1]]
    }
    if (duration === '5') {
      return [sessionData[0], sessionData[2]]
    }
    if (duration === '15') {
      return [sessionData[1], sessionData[3]]
    }
    return [...sessionData]
  }

  return (
    <Page
      padding="0"
      gap="0"
      justifyContent="stretch"
      alignItems="stretch"
      style={{ width: '100%', height: '100%' }}
    >
      {getSessionData().map((session, index) => (
        <Link key={index} className={session.className} href={session.href} target="_blank">
          <h1 className="price-badge">{session.price}</h1>
          <p>{session.duration}</p>
          <p>{session.roomType}</p>
        </Link>
      ))}
    </Page>
  )
}

export default BookNow

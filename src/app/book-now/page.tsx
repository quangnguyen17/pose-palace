'use client'

import { FC } from 'react'
import './book-now.css'

const sessions = [
  {
    title: '$27 • 5-Minute @ Standard Color Room',
    link: 'https://calendly.com/posepalacestudio-colorroom/5min',
  },
  {
    title: '$67 • 15-Minute @ Standard Color Room',
    link: 'https://calendly.com/posepalacestudio-colorroom/15min',
  },
  {
    title: '$27 • 5-Minute @ Full Body White Room',
    link: 'https://calendly.com/posepalacestudio/5min',
  },
  {
    title: '$67 • 15-Minute @ Full Body White Room',
    link: 'https://calendly.com/posepalacestudio/15min',
  },
]

const BookNow: FC = () => {
  return (
    <div className="sessions">
      {sessions.map((session, index) => (
        <a key={index} href={session.link} className="session">
          <h1>{session.title}</h1>
        </a>
      ))}
    </div>
  )
}

export default BookNow

import { FC } from 'react'
import { Page } from '../components/Page'
import Link from 'next/link'
import './book-now.css'

const sessions = [
  {
    title: '$27 • 5-Minute @ Standard Color Room',
    link: 'https://calendly.com/posepalacestudio-colorroom/5min',
  },
  {
    title: '$27 • 5-Minute @ Full Body White Room',
    link: 'https://calendly.com/posepalacestudio/5min',
  },
  {
    title: '$67 • 15-Minute @ Standard Color Room',
    link: 'https://calendly.com/posepalacestudio-colorroom/15min',
  },
  {
    title: '$67 • 15-Minute @ Full Body White Room',
    link: 'https://calendly.com/posepalacestudio/15min',
  },
  {
    title: '$100 • 30-Minute @ Standard Color Room',
    link: 'https://calendly.com/posepalacestudio-colorroom/30min',
  },
  {
    title: '$100 • 30-Minute @ Full Body White Room',
    link: 'https://calendly.com/posepalacestudio/30min',
  },
]

const BookNow: FC = () => {
  return (
    <Page gap="1rem" padding="0">
      <div className="sessions">
        {sessions.map((session, index) => (
          <Link key={index} href={session.link} className="session">
            <h1>{session.title}</h1>
          </Link>
        ))}
      </div>
    </Page>
  )
}

export default BookNow

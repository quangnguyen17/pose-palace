import { Page } from '../components/Page'
import Link from 'next/link'
import './book-now.css'

const BookNow = () => {
  return (
    <Page gap="0" padding="0">
      {[
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
      ].map((session, index) => (
        <Link key={index} href={session.link} className="session">
          <h1>{session.title}</h1>
        </Link>
      ))}
    </Page>
  )
}

export default BookNow

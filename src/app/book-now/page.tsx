import { FC } from 'react'
import Link from 'next/link'
import './book-now.css'

const BookNow: FC = () => {
  return (
    <div className="book-now">
      <Link
        className="book-now-card sample1 room"
        href="https://calendly.com/posepalacestudio-colorroom/5min"
        target="_blank"
      >
        <h1>$27</h1>
        <p>5-Minute Session</p>
        <p>Standard Color Room</p>
      </Link>
      <Link
        className="book-now-card sample2 room"
        href="https://calendly.com/posepalacestudio-colorroom/15min"
        target="_blank"
      >
        <h1>$67</h1>
        <p>15-Minute Session</p>
        <p>Standard Color Room</p>
      </Link>
      <Link
        className="book-now-card sample3 room"
        href="https://calendly.com/posepalacestudio/5min"
        target="_blank"
      >
        <h1>$27</h1>
        <p>5-Minute Session</p>
        <p>Full Body White Room</p>
      </Link>
      <Link
        className="book-now-card sample4 room"
        href="https://calendly.com/posepalacestudio/15min"
        target="_blank"
      >
        <h1>$67</h1>
        <p>15-Minute Session</p>
        <p>Full Body White Room</p>
      </Link>
    </div>
  )
}

export default BookNow

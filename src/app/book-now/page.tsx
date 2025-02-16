'use client'

import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Page } from '../components/Page'
import './book-now.css'

const BookNow = () => {
  const router = useRouter()
  const [selector, setSelector] = useState<'duration' | 'room'>('duration')
  const [duration, setDuration] = useState<number | null>(null)
  const [room, setRoom] = useState<string | null>(null)

  useEffect(() => {
    if (duration && room) {
      router.push(
        `https://calendly.com/posepalacestudio${room === 'white' ? '' : '-colorroom'}/${duration}min`,
      )
    }
  }, [duration, room, router])

  return (
    <Page>
      <p>Select {selector}:</p>
      <div className="selector-container">
        {/* Duration Selector */}
        {selector === 'duration' && (
          <Fragment>
            {[
              { title: '5 Minutes', value: 5 },
              { title: '15 Minutes', value: 15 },
              { title: '30 Minutes', value: 30 },
            ].map((item, index) => (
              <button
                key={index}
                className="selector-button"
                onClick={() => {
                  setDuration(item.value)
                  setSelector('room')
                }}
              >
                {item.title}
              </button>
            ))}
          </Fragment>
        )}
        {/* Room Selector */}
        {selector === 'room' && (
          <Fragment>
            {[
              { title: 'Full Body White Room', value: 'white' },
              { title: 'Standard Color Room', value: 'color' },
            ].map((item, index) => (
              <button
                key={index}
                className="selector-button"
                onClick={() => {
                  setRoom(item.value)
                  setSelector('room')
                }}
              >
                {item.title}
              </button>
            ))}
          </Fragment>
        )}
      </div>
    </Page>
  )
}

export default BookNow

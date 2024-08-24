'use client'

import { FC, Fragment, useEffect, useState } from 'react'
import { Page } from '../components/Page'
import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'
import './book-now.css'

const sessionData = [
  {
    className: 'book-now-card sample-2',
    renderContent: () => (
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/posepalacestudio-colorroom/5min"
        style={{ width: '100%', height: '100%' }}
      />
    ),
  },
  {
    className: 'book-now-card sample-3',
    renderContent: () => (
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/posepalacestudio-colorroom/15min"
        style={{ width: '100%', height: '100%' }}
      />
    ),
  },
  {
    className: 'book-now-card white-1',
    renderContent: () => (
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/posepalacestudio/5min"
        style={{ width: '100%', height: '100%' }}
      />
    ),
  },
  {
    className: 'book-now-card white-2',
    renderContent: () => (
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/posepalacestudio/15min"
        style={{ width: '100%', height: '100%' }}
      />
    ),
  },
]

const BookNow: FC = () => {
  const searchParams = useSearchParams()
  const room = searchParams.get('room')
  const duration = searchParams.get('duration')

  const getSessionData = () => {
    if (room === 'white' && duration === '5') {
      return [sessionData[2]]
    }
    if (room === 'white' && duration === '15') {
      return [sessionData[3]]
    }
    if (room === 'color' && duration === '5') {
      return [sessionData[0]]
    }
    if (room === 'color' && duration === '15') {
      return [sessionData[1]]
    }
    return []
  }

  const selectRoom = (room: string) => {
    const url = new URL(window.location.href)
    url.searchParams.set('room', room)
    window.location.href = url.toString()
  }

  // const selectDuration = (duration: string) => {
  //   const url = new URL(window.location.href)
  //   url.searchParams.set('duration', duration)
  //   window.location.href = url.toString()
  // }

  return (
    <Fragment>
      <div className="room-selection">
        <button
          className={`button ${room === 'white' ? 'selected' : ''}`}
          onClick={() => selectRoom('white')}
        >
          Full Body <b>White Room</b>
        </button>
        <button
          className={`button ${room === 'color' ? 'selected' : ''}`}
          onClick={() => selectRoom('color')}
        >
          Standard <b>Color Room</b>
        </button>
      </div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
      {getSessionData().map((session, index) => (
        <Fragment key={index}>{session.renderContent()}</Fragment>
      ))}
    </Fragment>
  )
}

export default BookNow

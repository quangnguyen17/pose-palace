'use client'

import { Fragment, FC, useState, useEffect } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { useRouter } from 'next/navigation'
import 'react-spring-bottom-sheet/dist/style.css'
import './BookNowModal.css'

type BookNowModalProps = {
  isOpen: boolean
  onDismiss: () => void
}

type Duration = 5 | 15 | 30
type Room = 'white' | 'color'

const DURATION_DISPLAY_MAP: Record<Duration, string> = {
  5: '5 Minutes',
  15: '15 Minutes',
  30: '30 Minutes',
}

const ROOM_DISPLAY_MAP: Record<Room, string> = {
  white: 'Full Body White Room',
  color: 'Standard Color Room',
}

export const BookNowModal: FC<BookNowModalProps> = ({ isOpen, onDismiss }) => {
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

  const handleDismiss = () => {
    setSelector('duration')
    setDuration(null)
    setRoom(null)
    onDismiss()
  }

  const DURATION_OPTIONS: Duration[] = [5, 15, 30]
  const ROOM_OPTIONS: Room[] = ['white', 'color']

  return (
    <BottomSheet
      header={
        <div className="header">
          {[
            'Make an appointment',
            ...(duration && duration !== 0 ? [DURATION_DISPLAY_MAP[duration]] : []),
            ...(room && room.length > 0 ? [ROOM_DISPLAY_MAP[room]] : []),
          ].map((text, index) => (
            <p key={index} className="subheading">
              {text.toUpperCase()}
            </p>
          ))}
        </div>
      }
      footer={
        <div className="footer">
          <button
            className="Pill"
            onClick={handleDismiss}
            style={{
              backgroundColor: '#e4e4dd',
              textAlign: 'center',
            }}
          >
            Dismiss
          </button>
        </div>
      }
      open={isOpen}
      onDismiss={handleDismiss}
    >
      <div className="BookNowModal">
        <p className="text">Select {selector}:</p>
        <div className="Stack">
          {/* Duration Selector */}
          {selector === 'duration' && (
            <Fragment>
              {DURATION_OPTIONS.map((value) => (
                <button
                  key={value}
                  className="Pill"
                  onClick={() => {
                    setDuration(value)
                    setSelector('room')
                  }}
                >
                  {DURATION_DISPLAY_MAP[value]}
                </button>
              ))}
            </Fragment>
          )}
          {/* Room Selector */}
          {selector === 'room' && (
            <Fragment>
              {ROOM_OPTIONS.map((value) => (
                <button
                  key={value}
                  className="Pill"
                  onClick={() => {
                    setRoom(value)
                    setSelector('room')
                  }}
                >
                  {ROOM_DISPLAY_MAP[value]}
                </button>
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </BottomSheet>
  )
}

import { FC } from 'react'
import Image from 'next/image'
import './Collection.css'

type CollectionProps = {
  type: string
  room: string
  photos: string[]
}

export const Collection: FC<CollectionProps> = ({ type, room, photos }) => (
  <div className="collection">
    {photos.map((photo) => (
      <div key={photo} className="photo-wrapper">
        <Image
          src={photo}
          alt={photo}
          quality={100}
          width={100}
          height={100}
          unoptimized
          className="photo"
        />
        <p className="headline">
          <span className="type" style={{ color: room === 'WHITE ROOM' ? 'black' : 'white' }}>
            {type}
          </span>{' '}
          <span className="room" style={{ color: room === 'WHITE ROOM' ? 'black' : 'white' }}>
            {room}
          </span>
        </p>
      </div>
    ))}
  </div>
)

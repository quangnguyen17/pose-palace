import { FC, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Collection.css'

type CollectionProps = {
  type?: string
  room?: string
  photos: string[]
}

export const Collection: FC<CollectionProps> = ({ type, room, photos }) => {
  return (
    <Fragment>
      <div className="headline">
        <p>
          {type && <span className="type">{type}</span>}{' '}
          {room && <span className="room">{room}</span>}
        </p>
        <Link
          href="/book-now"
          style={{
            backgroundColor: 'rgb(0, 0, 0)',
            color: 'rgb(255, 255, 255)',
            padding: '12px',
            fontSize: '15px',
            lineHeight: '15px',
            fontWeight: 500,
          }}
        >
          Book Now
        </Link>
      </div>
      <div className="collection">
        {photos.map((photo) => (
          <Image
            key={photo}
            src={photo}
            alt={photo}
            quality={100}
            width={100}
            height={100}
            unoptimized
            className="photo"
          />
        ))}
      </div>
    </Fragment>
  )
}

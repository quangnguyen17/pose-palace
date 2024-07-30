import { FC, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Collection.css'

type CollectionProps = {
  type: string
  room: string
  photos: string[]
}

export const Collection: FC<CollectionProps> = ({ type, room, photos }) => {
  const tintColor = room.toLowerCase().includes('white') ? 'black' : 'white'
  return (
    <Fragment>
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
            <div className="headline">
              <p className="type" style={{ color: tintColor }}>
                {type}
              </p>
              <p className="room" style={{ color: tintColor }}>
                {room}
              </p>
            </div>
            <Link href="https://www.instagram.com/posepalacestudio/" target="_blank">
              <img
                src="/instagram.png"
                alt="/instagram.png"
                className={`instagram${tintColor === 'white' ? ' invert-color' : ''}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

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
  return (
    <Fragment>
      <div className="headline">
        <p>
          <span className="type">{type}</span> <span className="room">{room}</span>
        </p>
        <Link
          href="https://www.instagram.com/posepalacestudio/"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/instagram.png" alt="/instagram.png" className="instagram" />
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

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
      <Link href="/book-now" className="headline">
        <p>
          {type && <span className="type">{type}</span>}{' '}
          {room && <span className="room">{room}</span>}
        </p>
        <Image src="/right-arrow.png" alt="/right-arrow.png" width={24} height={24} />
      </Link>
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

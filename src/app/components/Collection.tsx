import { FC } from 'react'
import Image from 'next/image'
import './Collection.css'

export const Collection: FC<{ photos: string[]; caption?: string }> = ({ photos, caption }) => {
  return (
    <div className="collection-container">
      {caption && <p className="collection-caption">{caption}</p>}
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
    </div>
  )
}

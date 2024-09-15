import { FC } from 'react'
import Image from 'next/image'
import './Collection.css'

export const Collection: FC<{ photos: string[]; caption?: string; color?: string }> = ({
  photos,
  caption,
  color = 'black',
}) => {
  return (
    <div className="collection-container">
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
        {caption && (
          <p className="collection-caption" style={{ color }}>
            {caption}
          </p>
        )}
      </div>
    </div>
  )
}

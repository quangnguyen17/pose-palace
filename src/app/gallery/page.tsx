import Image from 'next/image'
import { Page } from '../components/Page'
import './gallery.css'

const mapPhotos = (photos: number[]) => photos.map((photo) => `/sample-${photo}.jpg`)
const WHITE_ROOM_PHOTOS = mapPhotos([1, 2, 3, 4, 5])
const COLOR_ROOM_PHOTOS = mapPhotos([6, 7, 8, 9, 10, 11, 12])

const Gallery = () => (
  <Page>
    <div className="gallery">
      <h4>Standard Color Room</h4>
      <div className="collection">
        {WHITE_ROOM_PHOTOS.map((photo) => (
          <Image
            key={photo}
            src={photo}
            alt={`Pose Palace ${photo}`}
            quality={100}
            width={100}
            height={100}
            unoptimized
            className="photo"
          />
        ))}
      </div>
      <h4>Full Body White Room</h4>
      <div className="collection">
        <div className="collection">
          {COLOR_ROOM_PHOTOS.map((photo) => (
            <Image
              key={photo}
              src={photo}
              alt={`Pose Palace ${photo}`}
              quality={100}
              width={100}
              height={100}
              unoptimized
              className="photo"
            />
          ))}
        </div>
      </div>
    </div>
  </Page>
)

export default Gallery

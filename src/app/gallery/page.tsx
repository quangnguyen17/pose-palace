import Image from 'next/image'
import { Page } from '../components/Page'
import './gallery.css'

const mapPhotos = (photos: number[]) => photos.map((photo) => `/sample-${photo}.jpg`)
const WHITE_ROOM_PHOTOS = mapPhotos([1, 2, 3, 4, 5])
const COLOR_ROOM_PHOTOS = mapPhotos([6, 7, 8, 9, 10, 11, 12])

const Gallery = () => (
  <Page padding="1rem 0">
    <h4 className="headline">Standard Color Room</h4>
    <div className="collection">
      {WHITE_ROOM_PHOTOS.map((photo) => (
        <Image
          key={photo}
          src={photo}
          alt={`Pose Palace ${photo}`}
          quality={100}
          width={100}
          height={100}
          className="photo"
        />
      ))}
    </div>
    <h4 className="headline">Full Body White Room</h4>
    <div className="collection">
      {COLOR_ROOM_PHOTOS.map((photo) => (
        <Image
          key={photo}
          src={photo}
          alt={`Pose Palace ${photo}`}
          quality={100}
          width={100}
          height={100}
          className="photo"
        />
      ))}
    </div>
  </Page>
)

export default Gallery

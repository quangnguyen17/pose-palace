import Image from 'next/image'
import { Page } from '../components/Page'
import './gallery.css'

const getPhotos = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => `/sample-${num}.jpg`)
}

const Gallery = () => (
  <Page>
    <div className="gallery">
      {getPhotos().map((photo) => (
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
  </Page>
)

export default Gallery

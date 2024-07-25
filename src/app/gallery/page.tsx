import Image from 'next/image'
import { Page } from '../components/Page'
import './gallery.css'

const getColorPhotos = () => {
  return [1, 2, 3, 4, 5].map((num) => `/sample-${num}.jpg`)
}

const getWhitePhotos = () => {
  return [6, 7, 8, 9, 10].map((num) => `/sample-${num}.jpg`)
}

const Gallery = () => (
  <Page>
    <div className="gallery">
      <h4>Standard Color Room</h4>
      <div className="collection">
        {getColorPhotos().map((photo) => (
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
          {getWhitePhotos().map((photo) => (
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

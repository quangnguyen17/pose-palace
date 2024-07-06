import Image from 'next/image'
import './gallery.css'

const getPhotos = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => `/sample-${num}.jpg`)
}

const Gallery = () => {
  const photos = getPhotos()

  return (
    <div className="container">
      {photos.map((photo) => (
        <Image
          key={photo}
          src={photo}
          alt={`Pose Palace ${photo}`}
          quality={100}
          width={100}
          height={100}
          className="image"
        />
      ))}
    </div>
  )
}

export default Gallery

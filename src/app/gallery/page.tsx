import Image from 'next/image'
import { Page } from '../components/Page'
import { Collection } from '../components/Collection'

const Gallery = () => {
  return (
    <Page justifyContent="flex-start" alignItems="flex-start">
      <Image
        src="/logo-short.png"
        alt="Pose Palage Logo Short"
        width={100}
        height={100}
        unoptimized
        style={{
          objectFit: 'contain',
          width: 'auto',
          height: '38px',
        }}
      />
      <Collection
        photos={[
          '/color1.JPG',
          '/color2.JPG',
          '/color3.JPG',
          '/color4.JPG',
          '/color5.JPG',
          '/color6.JPG',
          '/color7.JPG',
        ]}
        caption="Standard Color Room"
      />
      <Collection
        photos={[
          '/white1.JPG',
          '/white2.JPG',
          '/white3.JPG',
          '/white4.JPG',
          '/white5.JPG',
          '/white6.JPG',
          '/white7.JPG',
          '/white8.JPG',
        ]}
        caption="Full Body White Room"
      />
    </Page>
  )
}

export default Gallery

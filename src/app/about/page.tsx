import './styles.css'

import Link from 'next/link'
import Image from 'next/image'

const More = () => {
  return (
    <div className="container">
      <h2>About us</h2>
      <p>
        {`We are a proud Vietnamese-American-owned self-portrait photo studio conveniently located
            in Koreatown, Garden Grove. Our mission is to provide professional photos at affordable
            prices. You might wonder what a self-portrait studio is. Essentially, it's a photography
            studio where customers take photos of themselves, rather than being photographed by a
            professional. Equipped with a 32-inch monitor displaying the camera's live feed, you can
            see yourself exactly as you appear in the camera, much like looking into a mirror. We
            firmly believe that capturing memorable moments is invaluable. What better way to
            preserve these moments than by capturing them yourself, with your own authentic
            expressions and feelings?`}
      </p>
      <h2>How it works</h2>
      <p className="text">
        {`Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide,
            full-body shots, while the other offers multiple color backdrops, perfect for more
            personal waist-up to headshot portraits. An on-site attendant will guide you into either
            room, provide you with a remote clicker to trigger the camera shutter, assist you in
            taking your first shot to familiarize you with the equipment, and finally, start the
            timer for your booked session.`}
      </p>
      <h3>Photography equipments:</h3>
      <ul>
        <li>1 Sony Full-Frame camera</li>
        <li>{`1 32-inch monitor displaying the camera's live view/feed`}</li>
        <li>1 27-inch monitor displaying the last photo taken</li>
        <li>1-2 photography strobe lights depending on the room.</li>
      </ul>
      <h3>Props available for use:</h3>
      <ul>
        <li>Benches</li>
        <li>Cubes</li>
        <li>Chairs</li>
        <li>Stools</li>
        <li>Party props like glasses, headbands, hats, etc.</li>
      </ul>
      <Image
        src="/logo-long.png"
        alt="Pose Palace Full Logo"
        width={200}
        height={100}
        style={{ objectFit: 'contain', width: 'auto' }}
      />
      <p>
        <span>(We are located inside the AR Galleria)</span>
        <Link
          href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
          target="_blank"
          style={{ textAlign: 'left', color: 'black' }}
        >
          9618 Garden Grove Blvd # 106
          <br />
          Garden Grove, CA 92844
        </Link>
        <Link href="tel:714-467-7036" style={{ textAlign: 'left', color: 'black' }}>
          (714) 467-7036
        </Link>
        <Link
          href="mailto:posepalacestudio@gmail.com"
          style={{ textAlign: 'left', color: 'black' }}
        >
          posepalacestudio@gmail.com
        </Link>
        © 2024 Crystal Lighthouse LLC
      </p>
    </div>
  )
}

export default More

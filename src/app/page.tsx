'use server'

import Image from 'next/image'
import Link from 'next/link'

const Home = async () => {
  return (
    <div className="App">
      <header>
        <Image src="/logo.png" alt="/logo.png" width={163} height={70} />
        <Link href="https://www.instagram.com/posepalacestudio/" target="_blank">
          <Image
            className="instagram"
            src="/instagram.png"
            alt="/instagram.png"
            width={34}
            height={34}
          />
        </Link>
      </header>
      <h3>Book your first session with us today 📸</h3>
      <div className="grid">
        <div className="pricing-card bg-yellow">
          <p className="pricing-headline">5-minute session</p>
          <p className="pricing-label">$27</p>
          <ul className="pricing-whats-included">
            <li>For 2 people (each additional: $5)</li>
            <li>Instantly available digital photos (available for 7 days)</li>
            <li>
              2 selected complimentary digital edits (delivered within 24 hours) and $5/edit after
            </li>
            <li>All props included</li>
            <li>
              <p>
                Prints (you can choose <b>one</b> of the followings):
              </p>
              <ul>
                <li>
                  <b>1</b> <u>4x6</u> in (1, 3, 4 photo layouts)
                </li>
                <li>
                  <b>2</b> <u>2x2</u> in passport photos
                </li>
              </ul>
            </li>
          </ul>
          <Link
            className="pricing-book-now"
            href="https://calendly.com/posepalace/5-minute-session"
            target="_blank"
          >
            Book now
          </Link>
        </div>
        <div className="pricing-card bg-purple">
          <p className="pricing-headline">15-minute session</p>
          <p className="pricing-label">$67</p>
          <ul className="pricing-whats-included">
            <li>For 2 people (each additional: $5)</li>
            <li>Instantly available digital photos (available for 7 days)</li>
            <li>
              3 selected complimentary digital edits (delivered within 24 hours) and $5/edit after
            </li>
            <li>All props included</li>
            <li>
              <p>Prints (you can choose any of the followings):</p>
              <ul>
                <li>
                  <b>3</b> <u>4x6</u> in (1, 3, 4 photo layouts)
                </li>
                <li>
                  <b>2</b> <u>2x2</u> in passport photos
                </li>
              </ul>
            </li>
          </ul>
          <Link
            className="pricing-book-now"
            href="https://calendly.com/posepalace/15-minute-session"
            target="_blank"
          >
            Book now
          </Link>
        </div>
      </div>
      <h3>How it works</h3>
      <div className="card bg-gray">
        <p>
          {`Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide,
            full-body shots, while the other offers multiple color backdrops, perfect for more
            personal waist-up to headshot portraits. An on-site attendant will guide you into either
            room, provide you with a remote clicker to trigger the camera shutter, assist you in
            taking your first shot to familiarize you with the equipment, and finally, start the
            timer for your booked session.`}
        </p>
        <h4>Photography equipments:</h4>
        <ul>
          <li>1 Sony Full-Frame camera</li>
          <li>{`1 32-inch monitor displaying the camera's live view/feed`}</li>
          <li>1 27-inch monitor displaying the last photo taken</li>
          <li>1-2 photography strobe lights depending on the room.</li>
        </ul>
        <h4>Props available for use:</h4>
        <ul>
          <li>Benches</li>
          <li>Cubes</li>
          <li>Chairs</li>
          <li>Stools</li>
          <li>Party props like glasses, headbands, hats, etc.</li>
        </ul>
      </div>
      <h3>Promotions</h3>
      <div className="card bg-gray">
        <p>
          <b>10% off</b> for the following events in a given month:
        </p>
        <ul>
          <li>Birthday</li>
          <li>
            {`Wedding/Couple Anniversary (must provide an image of last year's anniversary to verify)`}
          </li>
          <li>Graduation</li>
          <li>Quinceañera</li>
        </ul>
        <p>
          <b>10% off</b> automatic discount for military personnel and healthcare workers.
        </p>
      </div>
      <h3>About us</h3>
      <div className="card bg-gray">
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
      </div>
      <footer>
        <p>© 2024 Crystal Lighthouse LLC. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home

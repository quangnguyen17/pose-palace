import Image from 'next/image'
import { Page } from './Page'
import { Footer } from './Footer'
import { Card } from './Card'
import { BookNowPill, ViewCatalogPill } from './Pills'
import { Hero } from './Hero'

export const Home = () => (
  <Page gap="1rem" padding="1rem">
    <Image
      src="/logo-short.png"
      alt="Pose Palace Logo Short"
      width={0}
      height={0}
      unoptimized
      style={{
        objectFit: 'contain',
        width: 'auto',
        height: '60px',
        margin: '0px auto 0px 0px',
      }}
    />
    <Hero />
    <Card background="#f2f5de">
      <p>
        <b>Unlimited Photos</b> – Capture every moment effortlessly
      </p>
      <p>
        <b>Same-Day Prints</b> – Take your memories home instantly
      </p>
      <p>
        <b>Instant Online Access</b> – Download & share for 7 days
      </p>
      <p>
        <b>Includes 2 People</b> – Just $5 per extra person
      </p>
      <ViewCatalogPill />
    </Card>
    <Card background="#dee7e7">
      <p className="price-label">$27</p>
      <p>5-minute session</p>
      <p>
        <b>4 x 6</b> photo prints x 1
      </p>
      <p>
        <b>2 x 2</b> passport photos x 2
      </p>
      <BookNowPill />
    </Card>
    <Card background="#d9e5d6">
      <p className="price-label">$67</p>
      <p>15-minute session</p>
      <p>
        <b>4 x 6</b> photo prints x 3
      </p>
      <p>
        <b>2 x 2</b> passport photos x 2
      </p>
      <BookNowPill />
    </Card>
    <Card background="#d0e3c4">
      <p className="price-label">$100</p>
      <p>30-minute session</p>
      <p>
        <b>4 x 6</b> photo prints x 6
      </p>
      <p>
        <b>2 x 2</b> passport photos x 2
      </p>
      <BookNowPill />
    </Card>
    <Card background="#dee7e7">
      <p className="price-label">10% OFF</p>
      <p>{`🎂 Birthday Promotion`}</p>
      <p>{`🩷 Wedding / Couple Anniversary Promotion`}</p>
      <p>{`🎓 Graduation Promotion`}</p>
      <p>{`🎊 Quinceañera`}</p>
      <p>{`🪖 Military Personnel`}</p>
      <p>{`🏥 Healthcare Workers`}</p>
    </Card>
    <Card>
      <h4>How It Works</h4>
      <p>
        Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide,
        full-body shots, while the other offers multiple colored backdrops, perfect for more
        personal waist-up or headshot portraits. An on-site attendant will guide you into either
        room, provide you with a remote clicker to trigger the camera shutter, assist you in taking
        your first shot to familiarize you with the equipment, and finally start the timer for your
        booked session.
      </p>
    </Card>
    <Card>
      <h4>Our Equipments</h4>
      <p>
        1 Sony full-frame camera
        <br />1 32-inch monitor displaying the camera's live view/feed
        <br />1 27-inch monitor displaying the last photo taken
        <br />
        1-2 photography strobe lights, depending on the room
      </p>
    </Card>
    <Card>
      <h4>Props Available for Use</h4>
      <p>
        Benches, cubes, chairs, stools, and seasonal or party props such as glasses, headbands,
        hats, etc.
      </p>
    </Card>
    <Card>
      <h4>About Us</h4>
      <p>
        We are a proud Vietnamese-American-owned self-portrait photo studio conveniently located in
        Koreatown, Garden Grove. Our mission is to provide professional photos at affordable prices.
        You might wonder what a self-portrait studio is—essentially, it's a photography studio where
        customers take photos of themselves rather than being photographed by a professional.
        Equipped with a 32-inch monitor displaying the camera's live feed, you can see yourself
        exactly as you appear in the camera, much like looking into a mirror. We firmly believe that
        capturing memorable moments is invaluable. What better way to preserve these moments than by
        capturing them yourself, with your own authentic expressions and feelings?
      </p>
    </Card>
    <Card>
      <Footer />
    </Card>
  </Page>
)

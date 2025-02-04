import Image from 'next/image'
import { Page } from './components/Page'
import { Header } from './components/Header'
import { Cards, Card } from './components/Cards'
import { BookNow } from './components/BookNow'

const App = () => (
  <Page style={{ overflowY: 'auto', overflowX: 'hidden' }} padding="0" gap="0">
    <Cards>
      <Header />
      <BookNow />
      <Card className="bg-alice-blue" style={{ alignItems: 'stretch' }}>
        <p className="text-left">
          <b>Unlimited photos</b> to capture every moment
        </p>
        <p className="text-left">
          Enjoy <b>same-day prints</b> to take your memories home immediately
        </p>
        <p className="text-left">
          Your photos are <b>instantly shared online</b> and available for download for{' '}
          <b>7 days</b>
        </p>
        <p className="text-left">
          Includes 2 people, <b>$5</b> for each extra
        </p>
      </Card>
      <Card className="bg-azure">
        <div className="row">
          <div className="col">
            <p className="text-medium">
              5-minute session
              <br />
              <b>4 x 6</b> photo prints x 1
              <br />
              <b>2 x 2</b> passport photos x 2
            </p>
          </div>
          <p className="price-label">$27</p>
        </div>
      </Card>
      <Card className="bg-ghost-white">
        <div className="row">
          <div className="col">
            <p className="text-medium">
              15-minute session
              <br />
              <b>4 x 6</b> photo prints x 3
              <br />
              <b>2 x 2</b> passport photos x 2
            </p>
          </div>
          <p className="price-label">$67</p>
        </div>
      </Card>
      <Card className="bg-lavender">
        <div className="row">
          <div className="col">
            <p className="text-medium">
              30-minute session
              <br />
              <b>4 x 6</b> photo prints x 6
              <br />
              <b>2 x 2</b> passport photos x 2
            </p>
          </div>
          <p className="price-label">$100</p>
        </div>
      </Card>
      <Card className="bg-light-gray">
        <p>{`🎂 Birthday Promotion`}</p>
        <p className="price-label">10% OFF</p>
        <p>
          Celebrate your birthday month with an exclusive gift: enjoy 10% off your self-portrait
          session! To redeem this offer, simply inform one of our associates that it's your birthday
          month.
        </p>
      </Card>
      <Card className="bg-light-gray">
        <p>{`🩷 Wedding / Couple Anniversary Promotion`}</p>
        <p className="price-label">10% OFF</p>
        <p>
          Celebrate your wedding or couple's anniversary with a special treat: enjoy 10% off your
          self-portrait session! To redeem this offer, please provide an image of last year's
          anniversary for verification and inform one of our associates about your special occasion.
        </p>
      </Card>
      <Card className="bg-light-gray">
        <p>{`🎓 Graduation Promotion`}</p>
        <p className="price-label">10% OFF</p>
        <p>
          Celebrate your graduation in style with an exclusive offer! Enjoy 10% off your
          self-portrait session as our gift to you. Simply share your graduation story with one of
          our associates to redeem this special discount and make your achievement unforgettable.
        </p>
      </Card>
      <Card className="bg-light-gray">
        <p>{`🎊 Quinceañera`}</p>
        <p className="price-label">10% OFF</p>
        <p>
          Celebrate the milestone of your Quinceañera with an exclusive offer! Enjoy a 10% discount
          on your self-portrait session as our special gift to you. Simply share the story of your
          Quinceañera with one of our associates to redeem this offer and create lasting memories.
        </p>
      </Card>
      <Card className="bg-light-gray">
        <p>{`🪖 Military Personnel and 🏥 Healthcare Workers`}</p>
        <p className="price-label">10% OFF</p>
        <p>
          Receive a 10% automatic discount for military personnel and healthcare workers, our token
          of gratitude for your service and dedication.
        </p>
      </Card>
      <Card className="bg-light-gray">
        <h3>How it works</h3>
        <p>
          Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide,
          full-body shots, while the other offers multiple color backdrops, perfect for more
          personal waist-up to headshot portraits. An on-site attendant will guide you into either
          room, provide you with a remote clicker to trigger the camera shutter, assist you in
          taking your first shot to familiarize you with the equipment, and finally, start the timer
          for your booked session.
        </p>
      </Card>
      <Card className="bg-light-gray">
        <h3>Our equipments</h3>
        <p>1 Sony Full-Frame camera</p>
        <p>1 32-inch monitor displaying the camera's live view/feed</p>
        <p>1 27-inch monitor displaying the last photo taken</p>
        <p>1-2 photography strobe lights depending on the room.</p>
      </Card>
      <Card className="bg-light-gray">
        <h3>Props available for use:</h3>
        <p>
          Benches, cubes, chairs, stools, seasonal and party props like glasses, headbands, hats,
          etc.
        </p>
      </Card>
      <Card className="bg-light-gray">
        <Image
          src="/logo-long.png"
          alt="Pose Palace Full Logo"
          width={100}
          height={100}
          unoptimized
          style={{
            objectFit: 'contain',
            width: 'auto',
            height: '82px',
          }}
        />
        <p>
          We are a proud Vietnamese-American-owned self-portrait photo studio conveniently located
          in Koreatown, Garden Grove. Our mission is to provide professional photos at affordable
          prices. You might wonder what a self-portrait studio is. Essentially, it's a photography
          studio where customers take photos of themselves, rather than being photographed by a
          professional. Equipped with a 32-inch monitor displaying the camera's live feed, you can
          see yourself exactly as you appear in the camera, much like looking into a mirror. We
          firmly believe that capturing memorable moments is invaluable. What better way to preserve
          these moments than by capturing them yourself, with your own authentic expressions and
          feelings?
        </p>
        <p>© 2024 Crystal Lighthouse LLC</p>
      </Card>
    </Cards>
  </Page>
)

export default App

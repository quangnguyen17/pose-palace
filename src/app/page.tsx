import Image from 'next/image'
import Link from 'next/link'
import { Page } from './components/Page'
import { Cell } from './components/Cell'
import { Cards, Card } from './components/Cards'
import { StickyBookNow } from './components/StickyBookNow'
import { RightArrow } from './components/RightArrow'

const App = () => (
  <div className="App">
    <Page style={{ overflowY: 'auto', overflowX: 'hidden' }} padding="0" gap="0">
      <Cell.Header />
      <Cards>
        <Card className="bg-alice-blue">
          <p>
            <b>Unlimited photos</b> to capture every moment!
          </p>
          <p>
            Enjoy <b>same-day prints</b> to take your memories home immediately.
          </p>
          <p>
            Your photos are <b>instantly shared online</b> and available for download for{' '}
            <b>7 days</b>!
          </p>
          <p>
            Includes 2 people, <b>$5</b> for each extra!
          </p>
        </Card>
        <Card className="bg-azure">
          <h3>$27 • 5-minute session</h3>
          <p>
            Prints (you get to pick <b>one</b> of the options):
          </p>
          <ul>
            <li>
              <b>1</b> <u>4 x 6</u>
            </li>
            <li>
              <b>2</b> <u>2 x 2</u> (passport photos)
            </li>
          </ul>
        </Card>
        <Card className="bg-ghost-white">
          <h3>$67 • 15-minute session</h3>
          <p>
            Prints (you get to pick <b>one</b> of the options):
          </p>
          <ul>
            <li>
              <b>3</b> <u>4 x 6</u>
            </li>
            <li>
              <b>2</b> <u>2 x 2</u> (passport photos)
            </li>
          </ul>
        </Card>
        <Card className="bg-lavender">
          <h3>$100 • 30-minute session</h3>
          <p>
            Prints (you get to pick <b>one</b> of the options):
          </p>
          <ul>
            <li>
              <b>6</b> <u>4 x 6</u>
            </li>
            <li>
              <b>2</b> <u>2 x 2</u> (passport photos)
            </li>
          </ul>
        </Card>
      </Cards>
      <Link href="/gallery" className="view-gallery">
        <span>{`View our gallery`}</span>
        <RightArrow />
      </Link>
      <Cell.Content
        title={`🎂 Birthday Promotion`}
        discount={`10% OFF`}
        text={`Celebrate your birthday month with an exclusive gift: enjoy 10% off your self-portrait
          session! To redeem this offer, simply inform one of our associates that it's your birthday
          month.`}
      />
      <Cell.Content
        title={`🩷 Wedding / Couple Anniversary Promotion`}
        discount={`10% OFF`}
        text={`Celebrate your wedding or couple's anniversary with a special treat: enjoy 10% off your
          self-portrait session! To redeem this offer, please provide an image of last year's
          anniversary for verification and inform one of our associates about your special occasion.`}
      />
      <Cell.Content
        title={`🎓 Graduation Promotion`}
        discount={`10% OFF`}
        text={`Celebrate your graduation in style with an exclusive offer! Enjoy 10% off your
          self-portrait session as our gift to you. Simply share your graduation story with one of
          our associates to redeem this special discount and make your achievement unforgettable.`}
      />
      <Cell.Content
        title={`🎊 Quinceañera`}
        discount={`10% OFF`}
        text={`Celebrate the milestone of your Quinceañera with an exclusive offer! Enjoy a 10% discount
          on your self-portrait session as our special gift to you. Simply share the story of your
          Quinceañera with one of our associates to redeem this offer and create lasting memories.`}
      />
      <Cell.Content
        title={`🪖 Military Personnel and 🏥 Healthcare Workers`}
        discount={`10% OFF`}
        text={`Receive a 10% automatic discount for military personnel and healthcare workers, our token
          of gratitude for your service and dedication.`}
      />
      <Cell>
        <Cell.Content
          title="How it works"
          text={`Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide,
          full-body shots, while the other offers multiple color backdrops, perfect for more
          personal waist-up to headshot portraits. An on-site attendant will guide you into either
          room, provide you with a remote clicker to trigger the camera shutter, assist you in
          taking your first shot to familiarize you with the equipment, and finally, start the
          timer for your booked session.`}
        />
      </Cell>
      <Cell>
        <Cell.Content title="Our equipments">
          <ul>
            <li>1 Sony Full-Frame camera</li>
            <li>{`1 32-inch monitor displaying the camera's live view/feed`}</li>
            <li>1 27-inch monitor displaying the last photo taken</li>
            <li>1-2 photography strobe lights depending on the room.</li>
          </ul>
        </Cell.Content>
      </Cell>
      <Cell>
        <Cell.Content title="Props available for use">
          <ul>
            <li>Benches</li>
            <li>Cubes</li>
            <li>Chairs</li>
            <li>Stools</li>
            <li>Party props like glasses, headbands, hats, etc.</li>
          </ul>
        </Cell.Content>
      </Cell>
      <div style={{ padding: '0px 16px 16px 16px' }}>
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
            marginBottom: '4px',
          }}
        />
        <p className="text">
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
        <p className="text" style={{ marginTop: '8px' }}>
          © 2024 Crystal Lighthouse LLC
        </p>
      </div>
    </Page>
    <StickyBookNow />
  </div>
)

export default App

import Image from 'next/image'
import { Page } from './components/Page'
import { Cell } from './components/Cell'
import { Collection } from './components/Collection'
import { BookNow } from './components/BookNow'
import { Sessions, Session } from './components/Sessions'

const App = () => (
  <Page padding="0" gap="0">
    <Cell.Header />
    <BookNow />
    <Sessions>
      <Session className="bg-azure">
        <h3>5-minute session</h3>
        <p className="price">$27</p>
        <ul>
          <li>For 2 people (each additional: $5)</li>
          <li>Instantly available digital photos (available for 7 days)</li>
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
      </Session>
      <Session className="bg-ghost-white">
        <h3>15-minute session</h3>
        <p className="price">$67</p>
        <ul>
          <li>For 2 people (each additional: $5)</li>
          <li>Instantly available digital photos (available for 7 days)</li>
          <li>All props included</li>
          <li>
            <p>
              Prints (you can choose <b>one</b> of the followings):
            </p>
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
      </Session>
      <Session className="bg-lavender">
        <h3>30-minute session</h3>
        <p className="price">$100</p>
        <ul>
          <li>For 2 people (each additional: $5)</li>
          <li>Instantly available digital photos (available for 7 days)</li>
          <li>All props included</li>
          <li>
            <p>
              Prints (you can choose <b>one</b> of the followings):
            </p>
            <ul>
              <li>
                <b>6</b> <u>4x6</u> in (1, 3, 4 photo layouts)
              </li>
              <li>
                <b>2</b> <u>2x2</u> in passport photos
              </li>
            </ul>
          </li>
        </ul>
      </Session>
    </Sessions>
    <p className="text" style={{ padding: '0px 16px 0px 16px', fontStyle: 'italic' }}>
      $20 deposit is required upon booking (refundable if canceled more than 24 hours in advance).
    </p>
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
    <BookNow />
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
    <BookNow />
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
          height: '120px',
          padding: '20px 16px 8px 0px',
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
)

export default App

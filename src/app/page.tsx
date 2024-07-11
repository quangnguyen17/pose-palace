import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'

const Grid: FC<PropsWithChildren> = ({ children }) => <div className="grid">{children}</div>

const Cell: FC<PropsWithChildren<{ className?: string | undefined }>> = ({
  className,
  children,
}) => <div className={`cell ${className}`}>{children}</div>

const App = () => (
  <Grid>
    <Cell className="bg-yellow">
      <h3>5-minute session</h3>
      <p className="pricing-label">$27</p>
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
        <li>
          A $20 deposit is required upon booking (refundable if canceled more than 24 hours in
          advance).
        </li>
      </ul>
      <Link
        className="pricing-book-now"
        href="https://calendly.com/posepalace/5-minute-session"
        target="_blank"
      >
        Book now
      </Link>
    </Cell>
    <Cell className="bg-purple">
      <h3>15-minute session</h3>
      <p className="pricing-label">$67</p>
      <ul className="pricing-whats-included">
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
        <li>
          A $20 deposit is required upon booking (refundable if canceled more than 24 hours in
          advance).
        </li>
      </ul>
      <Link
        className="pricing-book-now"
        href="https://calendly.com/posepalace/15-minute-session"
        target="_blank"
      >
        Book now
      </Link>
    </Cell>
    <Cell className="bg-icy-blue">
      <h3>{`🎂 Birthday Promotion`}</h3>
      <p className="pricing-off">10% OFF</p>
      <p className="text">
        {`Celebrate your birthday month with an exclusive gift: enjoy 10% off your self-portrait
          session! To redeem this offer, simply inform one of our associates that it's your birthday
          month.`}
      </p>
    </Cell>
    <Cell className="bg-tea-green">
      <h3>{`🩷 Wedding / Couple Anniversary Promotion`}</h3>
      <p className="pricing-off">10% OFF</p>
      <p className="text">
        {`Celebrate your wedding or couple's anniversary with a special treat: enjoy 10% off your
          self-portrait session! To redeem this offer, please provide an image of last year's
          anniversary for verification and inform one of our associates about your special occasion.`}
      </p>
    </Cell>
    <Cell className="bg-baby-blue">
      <h3>{`🎓 Graduation Promotion`}</h3>
      <p className="pricing-off">10% OFF</p>
      <p className="text">
        {`Celebrate your graduation in style with an exclusive offer! Enjoy 10% off your
          self-portrait session as our gift to you. Simply share your graduation story with one of
          our associates to redeem this special discount and make your achievement unforgettable.`}
      </p>
    </Cell>
    <Cell className="bg-light-pink">
      <h3>{`🎊 Quinceañera`}</h3>
      <p className="pricing-off">10% OFF</p>
      <p className="text">
        {`Celebrate the milestone of your Quinceañera with an exclusive offer! Enjoy a 10% discount
          on your self-portrait session as our special gift to you. Simply share the story of your
          Quinceañera with one of our associates to redeem this offer and create lasting memories.`}
      </p>
    </Cell>
    <Cell className="bg-banana-green">
      <h3>{`🪖 Military Personnel and 🏥 Healthcare Workers`}</h3>
      <p className="pricing-off">10% OFF</p>
      <p className="text">
        {`Receive a 10% automatic discount for military personnel and healthcare workers, our token
          of gratitude for your service and dedication.`}
      </p>
    </Cell>
    <Cell className="bg-gray">
      <h3>How it works</h3>
      <p className="text">
        {`Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide,
            full-body shots, while the other offers multiple color backdrops, perfect for more
            personal waist-up to headshot portraits. An on-site attendant will guide you into either
            room, provide you with a remote clicker to trigger the camera shutter, assist you in
            taking your first shot to familiarize you with the equipment, and finally, start the
            timer for your booked session.`}
      </p>
      <p>
        <b>Photography equipments:</b>
      </p>
      <ul>
        <li>1 Sony Full-Frame camera</li>
        <li>{`1 32-inch monitor displaying the camera's live view/feed`}</li>
        <li>1 27-inch monitor displaying the last photo taken</li>
        <li>1-2 photography strobe lights depending on the room.</li>
      </ul>
      <p>
        <b>Props available for use:</b>
      </p>
      <ul>
        <li>Benches</li>
        <li>Cubes</li>
        <li>Chairs</li>
        <li>Stools</li>
        <li>Party props like glasses, headbands, hats, etc.</li>
      </ul>
    </Cell>
    <Cell className="bg-gray">
      <h3>About us</h3>
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
    </Cell>
  </Grid>
)

export default App

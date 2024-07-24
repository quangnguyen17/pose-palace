import Link from 'next/link'
import { Page } from './components/Page'

const App = () => (
  <Page>
    <div className="grid">
      <div className="cell bg-yellow">
        <div className="cell-content">
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
        </div>
        <Link
          className="cell-footer-action"
          href="https://calendly.com/posepalacestudio/5-minute-session"
          target="_blank"
        >
          {`Book and shine ✨`}
        </Link>
      </div>
      <div className="cell bg-purple">
        <div className="cell-content">
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
        </div>
        <Link
          className="cell-footer-action"
          href="https://calendly.com/posepalacestudio/15-minute-session"
          target="_blank"
        >
          {`Book now ✌️`}
        </Link>
      </div>
      <div className="cell bg-icy-blue">
        <div className="cell-content">
          <h3>{`🎂 Birthday Promotion`}</h3>
          <p className="pricing-off">10% OFF</p>
          <p className="text">
            {`Celebrate your birthday month with an exclusive gift: enjoy 10% off your self-portrait
          session! To redeem this offer, simply inform one of our associates that it's your birthday
          month.`}
          </p>
        </div>
      </div>
      <div className="cell bg-tea-green">
        <div className="cell-content">
          <h3>{`🩷 Wedding / Couple Anniversary Promotion`}</h3>
          <p className="pricing-off">10% OFF</p>
          <p className="text">
            {`Celebrate your wedding or couple's anniversary with a special treat: enjoy 10% off your
          self-portrait session! To redeem this offer, please provide an image of last year's
          anniversary for verification and inform one of our associates about your special occasion.`}
          </p>
        </div>
      </div>
      <div className="cell bg-baby-blue">
        <div className="cell-content">
          <h3>{`🎓 Graduation Promotion`}</h3>
          <p className="pricing-off">10% OFF</p>
          <p className="text">
            {`Celebrate your graduation in style with an exclusive offer! Enjoy 10% off your
          self-portrait session as our gift to you. Simply share your graduation story with one of
          our associates to redeem this special discount and make your achievement unforgettable.`}
          </p>
        </div>
      </div>
      <div className="cell bg-light-pink">
        <div className="cell-content">
          <h3>{`🎊 Quinceañera`}</h3>
          <p className="pricing-off">10% OFF</p>
          <p className="text">
            {`Celebrate the milestone of your Quinceañera with an exclusive offer! Enjoy a 10% discount
          on your self-portrait session as our special gift to you. Simply share the story of your
          Quinceañera with one of our associates to redeem this offer and create lasting memories.`}
          </p>
        </div>
      </div>
      <div className="cell bg-banana-green">
        <div className="cell-content">
          <h3>{`🪖 Military Personnel and 🏥 Healthcare Workers`}</h3>
          <p className="pricing-off">10% OFF</p>
          <p className="text">
            {`Receive a 10% automatic discount for military personnel and healthcare workers, our token
          of gratitude for your service and dedication.`}
          </p>
        </div>
      </div>
    </div>
  </Page>
)

export default App

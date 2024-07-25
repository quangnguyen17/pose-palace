import { Page } from './components/Page'
import { Cell } from './components/Cell'

const App = () => (
  <Page>
    <div className="grid">
      <Cell className="bg-yellow">
        <Cell.Content title="5-minute session" price="$27">
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
        </Cell.Content>
        <Cell.Footer
          link="https://calendly.com/posepalacestudio/5-minute-session"
          cta="Book and shine ✨"
        />
      </Cell>
      <Cell className="bg-purple">
        <Cell.Content title="15-minute session" price="$67">
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
            <li>
              A $20 deposit is required upon booking (refundable if canceled more than 24 hours in
              advance).
            </li>
          </ul>
        </Cell.Content>
        <Cell.Footer
          link="https://calendly.com/posepalacestudio/15-minute-session"
          cta="Book now"
        />
      </Cell>
      <Cell className="bg-icy-blue">
        <Cell.Content
          title={`🎂 Birthday Promotion`}
          discount={`10% OFF`}
          text={`Celebrate your birthday month with an exclusive gift: enjoy 10% off your self-portrait
          session! To redeem this offer, simply inform one of our associates that it's your birthday
          month.`}
        />
      </Cell>
      <Cell className="bg-tea-green">
        <Cell.Content
          title={`🩷 Wedding / Couple Anniversary Promotion`}
          discount={`10% OFF`}
          text={`Celebrate your wedding or couple's anniversary with a special treat: enjoy 10% off your
          self-portrait session! To redeem this offer, please provide an image of last year's
          anniversary for verification and inform one of our associates about your special occasion.`}
        />
      </Cell>
      <Cell className="bg-baby-blue">
        <Cell.Content
          title={`🎓 Graduation Promotion`}
          discount={`10% OFF`}
          text={`Celebrate your graduation in style with an exclusive offer! Enjoy 10% off your
          self-portrait session as our gift to you. Simply share your graduation story with one of
          our associates to redeem this special discount and make your achievement unforgettable.`}
        />
      </Cell>
      <Cell className="bg-light-pink">
        <Cell.Content
          title={`🎊 Quinceañera`}
          discount={`10% OFF`}
          text={`Celebrate the milestone of your Quinceañera with an exclusive offer! Enjoy a 10% discount
          on your self-portrait session as our special gift to you. Simply share the story of your
          Quinceañera with one of our associates to redeem this offer and create lasting memories.`}
        />
      </Cell>
      <Cell className="bg-banana-green">
        <Cell.Content
          title={`🪖 Military Personnel and 🏥 Healthcare Workers`}
          discount={`10% OFF`}
          text={`Receive a 10% automatic discount for military personnel and healthcare workers, our token
          of gratitude for your service and dedication.`}
        />
      </Cell>
    </div>
  </Page>
)

export default App

import Image from 'next/image'
import Link from 'next/link'
import { Page } from './Page'

const sessionUrl = 'https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start'
const rentalEmail =
  'mailto:hainguyen.whiteroom@posepalacestudio.com?subject=Digital%20camera%20rental%20request'

const cameras = [
  {
    name: 'Canon PowerShot A480',
    color: '#14367d',
    detail: '10.0 MP · 3.3x optical',
    note: 'Blue body, bright flash, easy to carry.',
  },
  {
    name: 'Canon PowerShot A495',
    color: '#c2202b',
    detail: '10.0 MP · 3.3x optical',
    note: 'Red body, party-ready flash, slightly newer.',
  },
  {
    name: 'Sony Cyber-shot DSC-S2100',
    color: '#606366',
    detail: '12.1 MP · 3x optical',
    note: 'A clean, straightforward point-and-shoot.',
  },
  {
    name: 'Fujifilm FinePix AX655',
    color: '#121212',
    detail: '16.0 MP · 5x optical',
    note: 'A little more reach for the day out.',
  },
]

const Arrow = () => <span aria-hidden="true">↗</span>

export const Home = () => (
  <Page>
    <header className="SiteHeader">
      <div className="SiteHeaderInner">
        <Link href="#top" className="Brand" aria-label="Pose Palace home">
          <Image src="/logo-short.png" alt="Pose Palace" width={178} height={50} priority />
        </Link>
        <nav className="SiteNav" aria-label="Main navigation">
          <Link href="#sessions">Studio sessions</Link>
          <Link href="#rentals">Digicam rentals</Link>
          <Link href="#visit">Visit us</Link>
        </nav>
        <Link href={sessionUrl} target="_blank" className="HeaderAction">
          Book a session <Arrow />
        </Link>
      </div>
    </header>

    <main id="top">
      <section className="StudioHero">
        <div className="HeroMotif" aria-hidden="true">
          pose palace · pose palace · pose palace
        </div>
        <div className="PageWrap HeroGrid">
          <div className="HeroCopyBlock">
            <p className="Eyebrow">Garden Grove, California · self-portrait studio</p>
            <h1>
              your face,
              <br />
              your <span>frame.</span>
            </h1>
            <p className="HeroLead">
              A self-portrait studio for the loud milestones, the quiet confidence boosts, and every
              picture you want to keep.
            </p>
            <div className="ButtonRow">
              <Link href={sessionUrl} target="_blank" className="ActionButton">
                Book a studio session <Arrow />
              </Link>
              <Link href="#rentals" className="TextButton">
                Meet the digicams ↓
              </Link>
            </div>
          </div>
          <div className="HeroVisual" aria-label="Pose Palace self-portrait studio">
            <div className="HeroVisualWord">
              pose
              <br />
              palace
            </div>
            <div className="HeroVisualBadge">
              <span>SELF-PORTRAIT</span>
              <b>press the shutter yourself.</b>
            </div>
          </div>
        </div>
        <div className="HeroStrip">
          <div>
            <b>2</b>
            <span>studio rooms</span>
          </div>
          <div>
            <b>same-day</b>
            <span>prints + gallery</span>
          </div>
          <div>
            <b>from $27</b>
            <span>quick sessions</span>
          </div>
          <div>
            <b>7 days</b>
            <span>digital access</span>
          </div>
        </div>
      </section>

      <section className="EditorialSection" id="sessions">
        <div className="PageWrap">
          <div className="SectionHeading">
            <div>
              <p className="Eyebrow">the studio</p>
              <h2>make the whole room yours.</h2>
            </div>
            <p>
              Step into a set, see the live view, and take every photo with your own remote clicker.
              An attendant gets you comfortable, then the frame is all yours.
            </p>
          </div>
          <div className="SessionGrid">
            <article className="SessionFeature SessionFeatureDark">
              <p className="Eyebrow">01 / white room</p>
              <h3>full body, fully you.</h3>
              <p>
                Our cyclorama white wall gives you the clean, wide frame for couples, groups, and
                graduation looks.
              </p>
            </article>
            <article className="SessionFeature">
              <p className="Eyebrow">02 / color room</p>
              <h3>pick a mood.</h3>
              <p>
                Multiple colored backdrops made for personal portraits, headshots, and the kind of
                photos that need a little personality.
              </p>
            </article>
            <article className="SessionRates">
              <p className="Eyebrow">session rates</p>
              <div>
                <b>$27</b>
                <span>5 minutes</span>
              </div>
              <div>
                <b>$67</b>
                <span>15 minutes</span>
              </div>
              <div>
                <b>$100</b>
                <span>30 minutes</span>
              </div>
              <Link href={sessionUrl} target="_blank">
                Reserve your time <Arrow />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="RentalIntro" id="rentals">
        <div className="PageWrap RentalIntroGrid">
          <div>
            <p className="Eyebrow">new at pose palace</p>
            <h2>
              take a little
              <br />
              <span>digicam</span> with you.
            </h2>
          </div>
          <div className="RentalIntroCopy">
            <p className="RentalLead">
              A small fleet of early-digital cameras, charged and ready for your day out. Each one
              has its own look; every rental comes with the essentials.
            </p>
            <Link href={rentalEmail} className="ActionButton ActionButtonLight">
              Request a camera <Arrow />
            </Link>
          </div>
        </div>
        <div className="RentalStats">
          <div>
            <b>$24</b>
            <span>per day, online booking</span>
          </div>
          <div>
            <b>$7</b>
            <span>per hour, walk-ins only</span>
          </div>
          <div>
            <b>$15</b>
            <span>optional coverage / day</span>
          </div>
          <div>
            <b>$80</b>
            <span>refundable deposit at pickup</span>
          </div>
        </div>
      </section>

      <section className="EditorialSection FleetSection">
        <div className="PageWrap">
          <div className="SectionHeading FleetHeading">
            <div>
              <p className="Eyebrow">the rental shelf</p>
              <h2>
                small cameras,
                <br />
                big personality.
              </h2>
            </div>
            <p>
              Daily rentals can be requested online for one to three days. Hourly rentals are
              walk-in only, so we can make sure the camera is really on the shelf.
            </p>
          </div>
          <div className="CameraGrid">
            {cameras.map((camera, index) => (
              <article className="CameraCard" key={camera.name}>
                <div
                  className="CameraArt"
                  style={{ '--camera-color': camera.color } as React.CSSProperties}
                >
                  <span className="CameraNumber">0{index + 1}</span>
                  <div className="CameraBody">
                    <i />
                    <b />
                    <em />
                  </div>
                </div>
                <div className="CameraCardBody">
                  <h3>{camera.name}</h3>
                  <p className="Mono">{camera.detail}</p>
                  <p>{camera.note}</p>
                  <Link href={rentalEmail}>
                    Request this camera <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="HowItWorks">
        <div className="PageWrap">
          <div className="SectionHeading InvertedHeading">
            <div>
              <p className="Eyebrow">how it works</p>
              <h2>
                from shelf
                <br />
                to snapshot.
              </h2>
            </div>
            <p>
              For now, submit a daily rental request and the studio will confirm the camera and
              pickup details with you. No payment is taken online.
            </p>
          </div>
          <ol className="Steps">
            <li>
              <span>01</span>
              <h3>Pick your camera</h3>
              <p>Choose a favorite from the rental shelf and tell us your preferred dates.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Confirm your days</h3>
              <p>
                We confirm availability and your pickup and return window before the rental is held.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Pick it up</h3>
              <p>Bring a photo ID and the $80 refundable incidental deposit to the studio.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Make a mess of memories</h3>
              <p>Return the camera, battery, SD card, and bag together when your rental ends.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="EditorialSection" id="rental-policy">
        <div className="PageWrap InfoGrid">
          <div>
            <p className="Eyebrow">inside every rental</p>
            <h2>
              the good stuff
              <br />
              comes with it.
            </h2>
            <ul className="KitList">
              <li>
                <span>01</span>
                <b>Camera, cleaned and test-shot before every rental</b>
              </li>
              <li>
                <span>02</span>
                <b>Charged battery or fresh batteries</b>
              </li>
              <li>
                <span>03</span>
                <b>Empty SD card for your day out</b>
              </li>
              <li>
                <span>04</span>
                <b>Carrying bag to keep it together</b>
              </li>
            </ul>
          </div>
          <div className="PolicyPanel">
            <p className="Eyebrow">the plain-English policies</p>
            <div>
              <h3>$80 incidental deposit</h3>
              <p>
                Refundable at return, paid at pickup by cash, Zelle, or Venmo once the full kit is
                back at the counter.
              </p>
            </div>
            <div>
              <h3>$15 per day coverage</h3>
              <p>
                Optional coverage helps with accidental camera damage. Lost cameras are not covered.
              </p>
            </div>
            <div>
              <h3>One to three days</h3>
              <p>
                Daily rentals are capped at three days. Three-day rentals receive 10% off the rental
                rate.
              </p>
            </div>
            <div>
              <h3>Session customer credit</h3>
              <p>
                Customers with a studio session can receive their first rental hour free at the
                counter, one camera per session.
              </p>
            </div>
            <p className="PolicyFootnote">
              Rental time is based on hours out, not calendar dates. Pickup and return times are
              confirmed with the studio.
            </p>
          </div>
        </div>
      </section>

      <section className="VisitSection" id="visit">
        <div className="PageWrap VisitGrid">
          <div>
            <p className="Eyebrow">come by</p>
            <h2>
              find your
              <br />
              favorite angle.
            </h2>
          </div>
          <div className="VisitDetails">
            <div>
              <span>Appointments</span>
              <b>9:00 AM - 9:00 PM</b>
            </div>
            <div>
              <span>Walk-ins</span>
              <b>11:30 AM - 7:30 PM</b>
            </div>
            <div>
              <span>Call</span>
              <Link href="tel:714-467-7036">(714) 467-7036</Link>
            </div>
            <div>
              <span>Email</span>
              <Link href="mailto:hainguyen.whiteroom@posepalacestudio.com">
                hainguyen.whiteroom@posepalacestudio.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="SiteFooter">
      <div className="PageWrap FooterGrid">
        <div>
          <Image src="/logo-short.png" alt="Pose Palace" width={178} height={50} />
          <p>Vietnamese-American owned self-portrait studio in Garden Grove.</p>
        </div>
        <div>
          <p className="Eyebrow">Explore</p>
          <Link href="#sessions">Studio sessions</Link>
          <Link href="#rentals">Digicam rentals</Link>
          <Link href="#rental-policy">Rental policies</Link>
        </div>
        <div>
          <p className="Eyebrow">Elsewhere</p>
          <Link href="https://www.instagram.com/posepalacestudio/" target="_blank">
            Instagram
          </Link>
          <Link href="https://www.tiktok.com/@posepalacestudio" target="_blank">
            TikTok
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61562108288648" target="_blank">
            Facebook
          </Link>
        </div>
        <div>
          <Link href={sessionUrl} target="_blank" className="ActionButton">
            Book a session <Arrow />
          </Link>
          <Link href={rentalEmail} className="FooterRental">
            Request a rental <Arrow />
          </Link>
        </div>
      </div>
    </footer>
  </Page>
)

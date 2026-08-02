import Image from 'next/image'
import Link from 'next/link'
import { Page } from './Page'

const sessionUrl = 'https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start'

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
          <Link href="/rentals">Digicam rentals</Link>
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
              <Link href="/rentals" className="TextButton">
                Meet the digicams ↗
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
          <Link href="/rentals">Digicam rentals</Link>
          <Link href="/rentals#policies">Rental policies</Link>
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
          <Link href="/rentals" className="FooterRental">
            Rent a digicam <Arrow />
          </Link>
        </div>
      </div>
    </footer>
  </Page>
)

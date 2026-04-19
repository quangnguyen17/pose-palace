import Link from 'next/link'

export const Hero = () => (
  <section className="HeroCard fade-up">
    <div className="HeroContent">
      <span className="SectionLabel">Garden Grove Self-Portrait Studio</span>
      <div>
        <h1 className="HeroTitle">Strike your pose. Keep the whole frame.</h1>
        <p className="HeroCopy" style={{ marginTop: '12px' }}>
          A polished self-portrait studio made for birthdays, couples, graduation photos, and quick
          confidence-boosting sessions with instant prints.
        </p>
      </div>
      <div className="HeroBookingPanel">
        <div className="HeroBookingCopy">
          <span className="HeroBookingEyebrow">Most visitors book online</span>
          <strong>Reserve your session in under a minute.</strong>
          <p>Choose your time, show up, and start shooting with instant prints and digital access.</p>
        </div>
        <div className="HeroActions">
          <Link
            className="HeroPrimaryAction"
            href="https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start"
            target="_blank"
          >
            Book Your Session
          </Link>
          <Link className="HeroSecondaryAction" href="tel:714-467-7036">
            Call to Book
          </Link>
        </div>
      </div>
      <div className="HeroStats">
        <div className="HeroStat">
          <strong>2</strong>
          <span>studio rooms</span>
        </div>
        <div className="HeroStat">
          <strong>Same-day</strong>
          <span>prints + gallery</span>
        </div>
        <div className="HeroStat">
          <strong>From $27</strong>
          <span>quick sessions</span>
        </div>
      </div>
      <div className="HeroMeta">
        <div className="HeroMetaRow">
          <span>Appointments</span>
          <strong>9:00 AM - 9:00 PM</strong>
        </div>
        <div className="HeroMetaRow">
          <span>Walk-ins</span>
          <strong>11:30 AM - 7:30 PM</strong>
        </div>
      </div>
      <div className="HeroContactGroup">
        <Link className="HeroContactLink" href="tel:714-467-7036">
          <span className="HeroContactLabel">Call</span>
          <span className="HeroContactValue">(714) 467-7036</span>
        </Link>
        <Link className="HeroContactLink" href="mailto:hainguyen.whiteroom@posepalacestudio.com">
          <span className="HeroContactLabel">Email</span>
          <span className="HeroContactValue">hainguyen.whiteroom@posepalacestudio.com</span>
        </Link>
      </div>
    </div>
  </section>
)

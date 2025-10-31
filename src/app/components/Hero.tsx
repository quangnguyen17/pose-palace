import Link from 'next/link'

export const Hero = () => (
  <div
    style={{
      marginTop: '0.2rem',
      textAlign: 'center',
    }}
  >
    <p>
      <span>
        <b>Open</b> 9:00 AM - 9:00 PM
      </span>
      <br />
      <span>
        <b>Appointment</b> 9:00 AM - 9:00 PM
      </span>
      <br />
      <span>
        <b>Walk-in</b> 11:30 AM - 7:30 PM
      </span>
      <Link href="tel:714-467-7036" style={{ color: 'black', textAlign: 'center' }}>
        (714) 467-7036
      </Link>
      <Link
        href="mailto:hainguyen.whiteroom@posepalacestudio.com"
        style={{ color: 'black', textAlign: 'center' }}
      >
        hainguyen.whiteroom@posepalacestudio.com
      </Link>
    </p>
  </div>
)

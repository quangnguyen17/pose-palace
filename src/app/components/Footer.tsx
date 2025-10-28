import { FC } from 'react'
import Link from 'next/link'
import { RightArrow } from './Icons'

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <Link
        className="LinkButton"
        href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
        target="_blank"
      >
        <span>
          9618 Garden Grove Blvd # 106
          <br />
          Garden Grove, CA 92844
        </span>
        <RightArrow />
      </Link>
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
        <Link href="tel:714-467-7036" style={{ color: 'black', textAlign: 'left' }}>
          (714) 467-7036
        </Link>
        <Link
          href="mailto:hainguyen.whiteroom@posepalacestudio.com"
          style={{ color: 'black', textAlign: 'left' }}
        >
          hainguyen.whiteroom@posepalacestudio.com
        </Link>
        <span>© 2024 Crystal Lighthouse LLC</span>
      </p>
    </div>
  )
}

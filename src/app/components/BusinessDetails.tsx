import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SPACING, SPACING_PX } from '../constants'

export const BusinessDetails: FC = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: SPACING / 2,
        }}
      >
        <Link
          href="https://www.instagram.com/posepalacestudio/"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/instagram.png"
            alt="/instagram.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61562108288648"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/facebook.png"
            alt="/facebook.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@posepalacestudio"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/tiktok.png"
            alt="/tiktok.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
        <Link
          href="https://www.yelp.com/biz/pose-palace-self-portrait-studio-garden-grove"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/yelp.png"
            alt="/yelp.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
      </div>
      <p>
        <Link
          href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
          target="_blank"
          style={{ color: 'black', textAlign: 'left' }}
        >
          9618 Garden Grove Blvd # 106
          <br />
          Garden Grove, CA 92844
        </Link>
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
      </p>
    </div>
  )
}

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SPACING } from '../constants'

export const Social: FC = () => {
  return (
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
  )
}

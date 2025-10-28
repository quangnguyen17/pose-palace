import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const SocialCard: FC = () => {
  return (
    <div className="SocialCard">
      <Link
        className="SocialLink"
        href="https://www.instagram.com/posepalacestudio/"
        target="_blank"
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
        className="SocialLink"
        href="https://www.facebook.com/profile.php?id=61562108288648"
        target="_blank"
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
      <Link className="SocialLink" href="https://www.tiktok.com/@posepalacestudio" target="_blank">
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
        className="SocialLink"
        href="https://www.yelp.com/biz/pose-palace-self-portrait-studio-garden-grove"
        target="_blank"
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

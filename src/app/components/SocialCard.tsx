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
      <Link
        className="SocialLink"
        href="https://www.google.com/maps/place/Pose+Palace+self-portrait+studio/@33.7730624,-117.967127,1308m/data=!3m3!1e3!4b1!5s0x80dd287be0a405f5:0xef476f0f53bd1bc7!4m6!3m5!1s0x80dd295f0cdac4d5:0x6547481a3f71e5c6!8m2!3d33.773058!4d-117.9645467!16s%2Fg%2F11w25gx5hz?entry=ttu&g_ep=EgoyMDI1MTAyOS4xIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <Image
          src="/google-maps.png"
          alt="/google-maps.png"
          className="social-media-icon"
          unoptimized
          width={0}
          height={0}
        />
      </Link>
    </div>
  )
}

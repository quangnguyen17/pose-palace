import Image from 'next/image'
import Link from 'next/link'

export const TabBar = () => {
  return (
    <div
      className="tabbar"
      style={{
        flex: 1,
        width: '100%',
        padding: '16px 16px 0 16px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="/logo-short.png"
          alt="Pose Palace Logo"
          width={200}
          height={40}
          style={{ objectFit: 'contain', width: 'auto' }}
        />
      </Link>
      <Link href="/gallery" style={{ color: 'rgb(0, 0, 0)' }}>
        our gallery
      </Link>
      <Link href="/about" style={{ color: 'rgb(0, 0, 0)' }}>
        about us
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/posepalacestudio/"
        style={{ color: 'rgb(0, 0, 0)' }}
      >
        @posepalacestudio
      </Link>
    </div>
  )
}

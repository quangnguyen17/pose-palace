import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header
      style={{
        width: '100%',
        padding: '1rem 1rem 0 1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
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
      <Link
        target="_blank"
        href="https://www.instagram.com/posepalacestudio/"
        style={{ color: 'rgb(0, 0, 0)' }}
      >
        @posepalacestudio
      </Link>
    </header>
  )
}

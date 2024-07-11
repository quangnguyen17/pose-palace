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
        justifyContent: 'space-between',
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Link
          href="/gallery"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/gallery.png"
            alt="Pose Palage Gallery"
            width={34}
            height={34}
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/posepalacestudio/"
          target="_blank"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/instagram.png"
            alt="Pose Palace Instagram"
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
    </header>
  )
}

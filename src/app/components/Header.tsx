import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header
      style={{
        width: '100%',
        padding: '1rem',
        gap: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderBottom: '1px solid rgb(230, 230, 230)',
      }}
    >
      <Link href="/">
        <Image src="/logo.png" alt="Pose Palace Logo" width={163} height={70} />
      </Link>
      <div
        style={{
          gap: '8px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href="/gallery">
          <Image
            src="/gallery.png"
            alt="Pose Palace Gallery"
            width={43}
            height={43}
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <Link href="https://www.instagram.com/posepalacestudio/" target="_blank">
          <Image
            src="/instagram.png"
            alt="Pose Palace Instagram"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
    </header>
  )
}

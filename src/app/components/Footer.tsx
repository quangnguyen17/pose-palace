import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        color: 'rgb(160, 160, 160)',
        borderTop: '1px solid rgb(230, 230, 230)',
        padding: '0.8rem 1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <p style={{ fontSize: '14px' }}>© 2024 POSE PALACE Self-Portrait Studio</p>
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
            width={25}
            height={25}
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <Link href="https://www.instagram.com/posepalacestudio/" target="_blank">
          <Image
            src="/instagram.png"
            alt="Pose Palace Instagram"
            width={25}
            height={25}
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
    </footer>
  )
}

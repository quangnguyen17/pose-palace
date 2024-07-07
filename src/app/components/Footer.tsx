import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        borderTop: '1px solid rgb(230, 230, 230)',
        padding: '1rem',
        gap: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        fontSize: '15px',
        lineHeight: '24px',
      }}
    >
      <p style={{ color: 'black' }}>
        <span style={{ fontStyle: 'italic' }}>(We are located inside the AR Galleria)</span>
        <Link
          href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
          target="_blank"
          style={{ textAlign: 'left', color: 'black' }}
        >
          9618 Garden Grove Blvd # 106
          <br />
          Garden Grove, CA 92844
        </Link>
        <Link href="tel:714-467-7036" style={{ textAlign: 'left', color: 'black' }}>
          (714) 467-7036
        </Link>
      </p>
      <Image
        src="/logo-long.png"
        alt="Pose Palace Full Logo"
        width={200}
        height={75}
        style={{ objectFit: 'contain', width: 'auto' }}
      />
      <p style={{ color: 'rgb(35, 35, 35)' }}>© 2024 Crystal Lighthouse LLC</p>
    </footer>
  )
}

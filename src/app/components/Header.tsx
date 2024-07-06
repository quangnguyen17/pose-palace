import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header
      style={{
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderBottom: '1px solid rgb(230, 230, 230)',
      }}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Pose Palace Logo"
          width={150}
          height={65}
          unoptimized
          style={{ objectFit: 'contain' }}
        />
      </Link>
      <p style={{ textAlign: 'right', fontSize: '14px', lineHeight: '20px' }}>
        <Link
          href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
          target="_blank"
          style={{ textAlign: 'right', color: 'black' }}
        >
          9618 Garden Grove Blvd # 106
          <br />
          Garden Grove, CA 92844
        </Link>
        <Link href="tel:714-467-7036" style={{ textAlign: 'right', color: 'black' }}>
          (714) 467-7036
        </Link>
      </p>
    </header>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header
      style={{
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderBottom: '1px solid rgb(230, 230, 230)',
      }}
    >
      <Link href="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src="/logo.png"
          alt="Pose Palace Logo"
          width={200}
          height={100}
          unoptimized
          style={{ objectFit: 'contain' }}
        />
      </Link>
    </header>
  )
}

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
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderBottom: '1px solid rgb(230, 230, 230)',
      }}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Pose Palace Logo"
          width={200}
          height={70}
          unoptimized
          style={{ objectFit: 'contain' }}
        />
      </Link>
    </header>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header
      style={{
        width: '100%',
        padding: '1rem',
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
      <Link href="https://www.instagram.com/posepalacestudio/" target="_blank">
        <Image
          className="instagram"
          src="/instagram.png"
          alt="Pose Palace Instagram"
          width={34}
          height={34}
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </header>
  )
}

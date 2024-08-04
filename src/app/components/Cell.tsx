import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: FC = () => {
  return (
    <div className="cell-content">
      <Image
        src="/logo-long.png"
        alt="Pose Palace Logo Long"
        width={100}
        height={100}
        unoptimized
        style={{
          objectFit: 'contain',
          width: 'auto',
          height: '100px',
          margin: '0px auto',
        }}
      />
      <p className="text" style={{ margin: '0px auto' }}>
        <Link
          href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
          target="_blank"
          style={{ color: 'black' }}
        >
          9618 Garden Grove Blvd # 106
          <br />
          Garden Grove, CA 92844
        </Link>
        <Link href="tel:714-467-7036" style={{ color: 'black' }}>
          (714) 467-7036
        </Link>
        <Link href="mailto:posepalacestudio@gmail.com" style={{ color: 'black' }}>
          posepalacestudio@gmail.com
        </Link>
      </p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Link
          href="https://www.instagram.com/posepalacestudio/"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/instagram.png"
            alt="/instagram.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61562108288648"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/facebook.png"
            alt="/facebook.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
      </div>
    </div>
  )
}

const Content: FC<
  PropsWithChildren<{
    className?: string | undefined
    title?: string | undefined
    price?: string | undefined
    discount?: string | undefined
    text?: string | undefined
  }>
> = ({ children, className, title, price, discount, text }) => {
  return (
    <div className={`cell-content ${className}`}>
      {title && <h3>{title}</h3>}
      {price && <p className="price">{price}</p>}
      {discount && <p className="discount">{discount}</p>}
      {text && <p className="text">{text}</p>}
      {children}
    </div>
  )
}

const Separator: FC = () => {
  return <div className="separator"></div>
}

const Cell: FC<
  PropsWithChildren<{
    className?: string | undefined
  }>
> & {
  Header: typeof Header
  Content: typeof Content
  Separator: typeof Separator
} = ({ children, className }) => {
  return <div className={`cell ${className}`}>{children}</div>
}

Cell.Header = Header
Cell.Content = Content
Cell.Separator = Separator

export { Cell }

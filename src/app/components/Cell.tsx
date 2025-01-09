import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: FC = () => {
  return (
    <div className="cell-content" style={{ background: 'none', margin: 0 }}>
      <Image
        src="/logo-long.png"
        alt="Pose Palace Logo Long"
        width={100}
        height={100}
        unoptimized
        style={{
          objectFit: 'contain',
          width: 'auto',
          height: '250px',
          margin: '0px auto',
        }}
      />
      <p className="text" style={{ margin: '20px', display: 'flex' }}>
        <Link
                  href=""
                  style={{ 
                    color: 'black',
                    fontSize: 30,
                    fontFamily: 'serif',
                    paddingLeft: 250,
                  }}
        > ABOUT US
        </Link>
        <Link
            href=""
            style={{ 
            color: 'black',
            fontSize: 30,
            fontFamily: 'serif',
            paddingLeft: 250
        }}
        > SERVICES
        </Link>
        <Link
            href=""
            style={{ 
            color: 'black',
            fontSize: 30,
            fontFamily: 'serif',
            paddingLeft: 200
        }}
        > CONTACT US
        </Link>
      </p>
      {/* <p className="text" style={{ margin: '0px auto', textAlign: 'center' }}>
        <Link
          href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
          target="_blank"
          style={{ color: 'black' }}
        >
          9618 Garden Grove Blvd # 106
          <br />
          Garden Grove, CA 92844
        </Link>
        <span>
          <b>Open</b> 9:00 AM - 9:00 PM
        </span>
        <br />
        <span>
          <b>Appointment</b> 9:00 AM - 9:00 PM
        </span>
        <br />
        <span>
          <b>Walk-in</b> 11:30 AM - 7:30 PM
        </span>
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
          gap: '12px',
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
        <Link
          href="https://www.tiktok.com/@posepalacestudio"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/tiktok.png"
            alt="/tiktok.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
        <Link
          href="https://www.yelp.com/biz/pose-palace-self-portrait-studio-garden-grove"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/yelp.png"
            alt="/yelp.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
      </div> */}
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
    <div className={`cell-content${className ? ` ${className}` : ``}`}>
      {title && <h3>{title}</h3>}
      {price && <p className="price">{price}</p>}
      {discount && <p className="discount">{discount}</p>}
      {text && <p className="text">{text}</p>}
      {children}
    </div>
  )
}

const Contact: FC = () => {
  return (
    <div className="cell-content" style={{ background: 'none', margin: 0 }}>
      <p className="text" style={{ margin: '0px auto', textAlign: 'center' }}>
        <Link
          href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
          target="_blank"
          style={{ color: 'black' }}
        >
          9618 Garden Grove Blvd # 106
          <br />
          Garden Grove, CA 92844
        </Link>
        <span>
          <b>Open</b> 9:00 AM - 9:00 PM
        </span>
        <br />
        <span>
          <b>Appointment</b> 9:00 AM - 9:00 PM
        </span>
        <br />
        <span>
          <b>Walk-in</b> 11:30 AM - 7:30 PM
        </span>
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
          gap: '12px',
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
        <Link
          href="https://www.tiktok.com/@posepalacestudio"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/tiktok.png"
            alt="/tiktok.png"
            className="social-media-icon"
            unoptimized
            width={0}
            height={0}
          />
        </Link>
        <Link
          href="https://www.yelp.com/biz/pose-palace-self-portrait-studio-garden-grove"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/yelp.png"
            alt="/yelp.png"
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
  return <div className={`cell${className ? ` ${className}` : ``}`}>{children}</div>
}

Cell.Header = Header
Cell.Content = Content
Cell.Contact = Contact
Cell.Separator = Separator

export { Cell }

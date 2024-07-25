import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RightArrow: FC = () => {
  return (
    <Image
      className="invert-color"
      src="/right-arrow.png"
      alt="/right-arrow.png"
      width={18}
      height={18}
    />
  )
}

const Footer: FC<{
  link?: string | undefined
}> = ({ link }) => {
  if (!link) return <></>
  return (
    <Link className="cell-footer" href={link} target="_blank">
      <p>Book now</p>
      <RightArrow />
    </Link>
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

const Cell: FC<
  PropsWithChildren<{
    className?: string | undefined
  }>
> & {
  Footer: typeof Footer
  Content: typeof Content
} = ({ children, className }) => {
  return <div className={`cell ${className}`}>{children}</div>
}

Cell.Content = Content
Cell.Footer = Footer

export { Cell }

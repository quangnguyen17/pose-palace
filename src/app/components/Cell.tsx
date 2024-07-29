import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RightArrow: FC = () => {
  return (
    <Image
      className="invert-color"
      src="/right-arrow.png"
      alt="/right-arrow.png"
      width={25}
      height={25}
    />
  )
}

const BookNow: FC<{
  link?: string | undefined
  cta?: string | undefined
}> = ({ link, cta = 'Book now' }) => {
  if (!link || !cta) return <></>
  return (
    <Link className="cell-book-now" href={link} target="_blank">
      <p>{cta}</p>
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
  BookNow: typeof BookNow
  Content: typeof Content
} = ({ children, className }) => {
  return <div className={`cell ${className}`}>{children}</div>
}

Cell.Content = Content
Cell.BookNow = BookNow

export { Cell }

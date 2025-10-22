import { CSSProperties, FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import './Card.css'

export const Card: FC<
  PropsWithChildren<{
    background?: string | undefined
    className?: string | undefined
    borderless?: boolean
    style?: CSSProperties | undefined
    title?: string | undefined
    headline?: string | undefined
    linkUrl?: string | undefined
    linkText?: string | undefined
  }>
> = ({ children, className, style, title, headline, linkUrl, linkText, ...props }) => {
  return (
    <div
      className={[`card`, className].filter((cName) => !!cName).join(' ')}
      style={{
        ...style,
        background: props.background || style?.background || '#f0f0f0ff',
      }}
      {...props}
    >
      {title && <h1 className="title">{title}</h1>}
      {headline && <h4 className="headline">{headline}</h4>}
      {children}
      {linkUrl && linkText && (
        <Link className="Pill" href={linkUrl} target="_blank">
          {linkText}
        </Link>
      )}
    </div>
  )
}

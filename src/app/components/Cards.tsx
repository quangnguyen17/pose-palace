import { CSSProperties, FC, PropsWithChildren } from 'react'
import './Cards.css'

export const Cards: FC<PropsWithChildren> = ({ children }) => {
  return <div className="cards">{children}</div>
}

export const Card: FC<
  PropsWithChildren<{
    className?: string | undefined
    borderless?: boolean
    style?: CSSProperties | undefined
  }>
> = ({ children, className, style, ...props }) => {
  return (
    <div className={`card ${className}`} style={style} {...props}>
      {children}
    </div>
  )
}

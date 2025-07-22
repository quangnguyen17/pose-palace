import { CSSProperties, FC, PropsWithChildren } from 'react'
import './Card.css'

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

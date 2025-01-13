import { FC, PropsWithChildren } from 'react'
import './Cards.css'

export const Cards: FC<PropsWithChildren> = ({ children }) => {
  return <div className="cards">{children}</div>
}

export const Card: FC<PropsWithChildren<{ className?: string | undefined }>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  )
}

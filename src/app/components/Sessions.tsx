import { FC, PropsWithChildren } from 'react'
import './Sessions.css'

export const Sessions: FC<PropsWithChildren> = ({ children }) => {
  return <div className="sessions">{children}</div>
}

export const Session: FC<PropsWithChildren<{ className?: string | undefined }>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`session ${className}`} {...props}>
      {children}
    </div>
  )
}

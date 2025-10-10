import { CSSProperties, FC, PropsWithChildren } from 'react'
import './Card.css'

export const Card: FC<
  PropsWithChildren<{
    background?: string | undefined
    className?: string | undefined
    borderless?: boolean
    style?: CSSProperties | undefined
  }>
> = ({ children, className, style, ...props }) => {
  return (
    <div
      className={[`card`, className].filter((cName) => !!cName).join(' ')}
      style={{
        ...style,
        background: props.background || style?.background || '#f0f0f0ff',
      }}
      {...props}
    >
      {children}
    </div>
  )
}

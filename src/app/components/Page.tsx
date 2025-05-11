import { CSSProperties, FC, PropsWithChildren } from 'react'
import '../config/firebase'
import './Page.css'

type PageProps = Pick<
  CSSProperties,
  'gap' | 'padding' | 'alignItems' | 'justifyContent' | 'height'
> & {
  style?: CSSProperties | undefined
}

export const Page: FC<PropsWithChildren<PageProps>> = ({
  children,
  alignItems,
  justifyContent,
  height,
  style,
}) => {
  return (
    <div
      className="Page"
      data-testid="Page"
      style={{
        alignItems,
        justifyContent,
        flexDirection: 'column',
        display: 'flex',
        height,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

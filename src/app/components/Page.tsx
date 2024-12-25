import { CSSProperties, FC, PropsWithChildren } from 'react'
import '../config/firebase'

type PageProps = Pick<
  CSSProperties,
  'gap' | 'padding' | 'alignItems' | 'justifyContent' | 'height'
> & {
  style?: CSSProperties | undefined
}

export const Page: FC<PropsWithChildren<PageProps>> = ({
  children,
  gap = '1rem',
  padding = '1rem',
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
        display: 'flex',
        flexDirection: 'column',
        gap,
        padding,
        alignItems,
        justifyContent,
        height,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

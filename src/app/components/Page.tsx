import { CSSProperties, FC, PropsWithChildren } from 'react'
import '../config/firebase'
import './Page.css'

type PageProps = Pick<
  CSSProperties,
  'gap' | 'padding' | 'alignItems' | 'justifyContent' | 'height'
> & {
  style?: CSSProperties | undefined
  renderFooter?: () => JSX.Element | null
}

export const Page: FC<PropsWithChildren<PageProps>> = ({
  children,
  gap,
  padding,
  alignItems,
  justifyContent,
  height,
  style,
  renderFooter,
}) => {
  return (
    <div
      className="Layout"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        className="Page"
        style={{
          overflow: 'auto',
          flex: 1,
          gap,
          padding,
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
      {renderFooter?.()}
    </div>
  )
}

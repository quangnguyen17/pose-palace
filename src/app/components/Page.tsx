import { CSSProperties, FC, PropsWithChildren } from 'react'
import '../firebase'
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
    <div className="Layout">
      <div className="Page" style={{ gap, padding, alignItems, justifyContent, height, ...style }}>
        {children}
      </div>
      {renderFooter?.()}
    </div>
  )
}

'use client'

import { CSSProperties, FC, PropsWithChildren, useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
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
    bottomSheetButtonText?: string | undefined
    bottomSheetOptions?: { text: string; url: string }[] | undefined
  }>
> = ({
  children,
  className,
  style,
  title,
  headline,
  linkUrl,
  linkText,
  bottomSheetButtonText,
  bottomSheetOptions,
  ...props
}) => {
  const [open, setOpen] = useState(false)
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
      {bottomSheetButtonText && (
        <button className="Button" onClick={() => setOpen(true)}>
          {bottomSheetButtonText}
        </button>
      )}
      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        {bottomSheetOptions?.map((option) => (
          <Link key={option.text} className="Option" href={option.url} target="_blank">
            {option.text}
          </Link>
        ))}
      </BottomSheet>
    </div>
  )
}

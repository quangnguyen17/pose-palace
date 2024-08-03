import { FC, Fragment } from 'react'
import Image from 'next/image'
import { Cell } from './Cell'

const Header: FC<{ title?: string }> = ({ title }) => {
  return (
    <Fragment>
      <Image
        src="/logo-short.png"
        alt="Pose Palace Logo Short"
        width={0}
        height={0}
        unoptimized
        style={{ objectFit: 'contain', width: 'auto', height: '60px' }}
      />
      {title && <h2>{title}</h2>}
      <Cell.Separator />
    </Fragment>
  )
}

export const Form: FC & { Header: typeof Header } = () => {
  return <></>
}

Form.Header = Header

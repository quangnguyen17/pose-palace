import { FC, Fragment } from 'react'
import Image from 'next/image'
import './Modal.css'

export const Modal: FC<{ isOpen: boolean; title: string; description: string }> = ({
  isOpen,
  title,
  description,
}) => {
  return (
    <Fragment>
      <div className={`modal-overlay${isOpen ? '-visible' : ''}`}>
        <div className={`modal${isOpen ? '-visible' : ''}`}>
          <Image
            src="/logo-short.png"
            alt="Pose Palace Logo Short"
            width={0}
            height={0}
            unoptimized
            style={{ objectFit: 'contain', width: 'auto', height: '60px' }}
          />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Fragment>
  )
}

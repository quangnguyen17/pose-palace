'use client'

import { FC, PropsWithChildren } from 'react'
import '../config/firebase'

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="Page" data-testid="Page">
      {children}
    </div>
  )
}

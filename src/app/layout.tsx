import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import './global.css'

export const metadata: Metadata = {
  title: 'Pose Palace',
  description:
    'Unlock Your Creative Potential at Pose Palace: Where Photos and Videos Come to Life!',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

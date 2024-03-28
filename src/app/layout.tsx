import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Pose Palace',
  description:
    'Unlock Your Creative Potential at Pose Palace: Where Photos and Videos Come to Life!',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer>Crystal Lighthouse LLC</footer>
    </html>
  )
}

import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  title: 'Pose Palace Studio',
  creator: 'Pose Palace Studio',
  keywords: ['Pose Palace', 'Pose Palace Studio', 'self photo', 'self portrait', 'photo taking'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

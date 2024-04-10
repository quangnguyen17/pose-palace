import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pose Palace',
  description: 'Self photo session at Pose Palace 📸',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

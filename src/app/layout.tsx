import type { Metadata } from 'next'
import { StickyBanner } from './components/StickyBanner'
import { TabBar } from './components/TabBar'
import './styles.css'

export const metadata: Metadata = {
  title: 'POSE PALACE self-portrait studio',
  creator: 'Pose Palace self-portrait studio',
  keywords: [
    'Pose Palace',
    'Pose Palace Studio',
    'pose palace',
    'pose palace studio',
    'self photo',
    'self photo studio',
    'self portrait',
    'self portrait studio',
    'photo taking',
    'photo taking studio',
    'garden grove photo studio',
    'garden grove photo',
    'garden grove portrait',
    'garden grove portraits',
  ],
  openGraph: {
    title: 'POSE PALACE self-portrait studio',
    description: 'Pose Palace self-portrait studio',
  },
  icons: [
    { rel: 'icon', url: '/app-icon.jpg' },
    { rel: 'apple-touch-icon', url: '/app-icon.jpg' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <main>{children}</main>
          <TabBar />
          <StickyBanner />
        </div>
      </body>
    </html>
  )
}

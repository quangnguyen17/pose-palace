import type { Metadata } from 'next'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './styles.css'

export const metadata: Metadata = {
  title: 'Pose Palace',
  creator: 'Pose Palace',
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
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

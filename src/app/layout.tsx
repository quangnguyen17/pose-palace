import { StickyBanner } from './components/StickyBanner'
import './styles.css'

export * from './config/metadata'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <StickyBanner />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

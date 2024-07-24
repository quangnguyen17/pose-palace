import { StickyBanner } from './components/StickyBanner'
import { TabBar } from './components/TabBar'
import './styles.css'

export * from './config/metadata'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <StickyBanner />
          <main>{children}</main>
          <TabBar />
        </div>
      </body>
    </html>
  )
}

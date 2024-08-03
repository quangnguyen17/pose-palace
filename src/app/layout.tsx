import './styles.css'

export * from './config/metadata'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

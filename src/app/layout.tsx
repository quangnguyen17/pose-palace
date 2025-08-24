import './styles.css'
import { Suspense } from 'react'
import { Roboto } from 'next/font/google'

export * from './config/metadata'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={roboto.className}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}

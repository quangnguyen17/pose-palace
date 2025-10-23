import './styles.css'
import 'react-spring-bottom-sheet/dist/style.css'
import { Suspense } from 'react'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.posepalacestudio.com'),
  title: {
    default: 'Pose Palace Studio | Professional Self-Portrait Studio in Garden Grove',
    template: '%s | Pose Palace Studio',
  },
  description:
    'Professional self-portrait studio in Garden Grove offering high-quality photos, same-day prints, and instant digital access. Perfect for portraits, passports, graduation, and special events.',
  creator: 'Crystal Lighthouse LLC',
  keywords: [
    // Location-based keywords
    'Garden Grove photo studio',
    'Orange County photography',
    'Koreatown Garden Grove photos',
    'Vietnamese American photo studio',
    // Service-based keywords
    'self portrait studio',
    'professional self photos',
    'instant photo prints',
    'same day photo printing',
    'passport photos Garden Grove',
    // Event-based keywords
    'graduation photos Orange County',
    'birthday photoshoot Garden Grove',
    'couples photography OC',
    'quinceañera photos',
    // Unique selling points
    'affordable professional photos',
    'self service photography',
    'digital photo access',
    'multiple backdrop studio',
    'walk-in photo studio',
  ],
  authors: [{ name: 'Pose Palace Studio', url: 'https://www.posepalacestudio.com' }],
  category: 'Photography',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.posepalacestudio.com',
    title: 'Pose Palace Studio | Professional Self-Portrait Studio in Garden Grove',
    description:
      'Professional self-portrait studio offering high-quality photos, same-day prints, and instant digital access. Perfect for portraits, passports, graduation, and special events.',
    siteName: 'Pose Palace Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pose Palace Studio - Professional Self-Portrait Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pose Palace Studio | Professional Self-Portrait Studio',
    description:
      'Professional self-portrait studio offering high-quality photos, same-day prints, and instant digital access.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  alternates: {
    canonical: 'https://www.posepalacestudio.com',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/manifest.json',
}

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

import type { Metadata } from 'next'

const description: string =
  'Step into our self-serve photo studio and unlock a world of creativity! From candid moments to professional portraits, our space is your canvas. Capture memories, express yourself, and bring your vision to life with ease. With a user-friendly environment designed for seamless shooting, every photo session is a masterpiece in the making. Discover the freedom to capture your moments your way. Your memories, your style – all in one place!'

export const metadata: Metadata = {
  title: 'Pose Palace Studio',
  creator: 'Pose Palace Studio',
  keywords: ['Pose Palace', 'Pose Palace Studio', 'self photo', 'self portrait', 'photo taking'],
  description,
  authors: [
    {
      name: 'Pose Palace Studio',
      url: 'https://www.instagram.com/posepalacestudio/',
    },
    {
      name: 'Quang Nguyen',
      url: 'https://www.instagram.com/quang_dng20/',
    },
    {
      name: 'Dang Nguyen',
      url: 'https://www.instagram.com/dangh_nguyen/',
    },
    {
      name: 'Crystal Nguyen',
      url: 'https://www.instagram.com/crystalnguyennnn/',
    },
  ],
  icons: {
    icon: 'https://posepalace.com/logo.jpg',
    apple: 'https://posepalace.com/logo.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://posepalace.com/',
    creator: '@posepalacestudio',
    images: 'https://posepalace.com/logo.jpg',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.posepalace.com/',
    title: 'Pose Palace Studio',
    description,
    siteName: 'Pose Palace Studio',
    images: [
      { url: 'https://posepalace.com/logo.jpg', username: '@posepalacestudio' },
      { url: 'https://posepalace.com/q1.jpg', username: '@quang_dng20' },
      { url: 'https://posepalace.com/q2.jpg', username: '@quang_dng20' },
      { url: 'https://posepalace.com/q3.jpg', username: '@quang_dng20' },
      { url: 'https://posepalace.com/q4.jpg', username: '@quang_dng20' },
      { url: 'https://posepalace.com/c1.jpg', username: '@crystalnguyennnn' },
      { url: 'https://posepalace.com/c2.jpg', username: '@crystalnguyennnn' },
      { url: 'https://posepalace.com/c3.jpg', username: '@crystalnguyennnn' },
      { url: 'https://posepalace.com/c4.jpg', username: '@crystalnguyennnn' },
    ],
  },
  applicationName: 'Pose Palace Studio',
  appleWebApp: {
    capable: true,
    title: 'Pose Palace Studio',
    statusBarStyle: 'default',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

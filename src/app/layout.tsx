import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pose Palace Studio',
  creator: 'Pose Palace Studio',
  keywords: ['Pose Palace', 'Pose Palace Studio', 'self photo', 'self portrait', 'photo taking'],
  description:
    'Step into our self-serve photo studio and unlock a world of creativity! From candid moments to professional portraits, our space is your canvas. Capture memories, express yourself, and bring your vision to life with ease. With a user-friendly environment designed for seamless shooting, every photo session is a masterpiece in the making. Discover the freedom to capture your moments your way. Your memories, your style – all in one place!',
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
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

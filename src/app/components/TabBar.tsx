'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabBarItems = [
  {
    key: 'home',
    label: 'home',
    href: '/',
  },
  {
    key: 'gallery',
    label: 'gallery',
    href: '/gallery',
  },
  {
    key: 'about',
    label: 'about',
    href: '/about',
  },
  {
    key: 'instagram',
    label: 'instagram',
    href: 'https://www.instagram.com/posepalacestudio/',
    target: '_blank',
  },
]

export const TabBar = () => {
  const pathname = usePathname()

  return (
    <div
      className="tabbar"
      style={{
        width: '100%',
        padding: '16px',
        borderTop: '1px solid rgb(235, 235, 235)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      {tabBarItems.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          target={item.target}
          style={{ color: pathname === item.href ? 'rgb(0, 0, 0)' : 'rgb(135, 135, 135)' }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

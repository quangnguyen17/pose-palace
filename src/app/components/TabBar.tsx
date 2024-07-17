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
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '16px',
      }}
    >
      {tabBarItems.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          target={item.target}
          style={{
            color: pathname === item.href ? 'rgb(0, 0, 0)' : 'rgb(135, 135, 135)',
            fontWeight: pathname === item.href ? 500 : 400,
            fontSize: '15px',
            lineHeight: '20px',
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

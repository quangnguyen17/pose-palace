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
    <div className="TabBar">
      {tabBarItems.map((item) => {
        const isSelected = pathname === item.href

        return (
          <Link
            key={item.key}
            href={item.href}
            target={item.target}
            style={{
              color: isSelected ? 'rgb(0, 0, 0)' : 'rgb(140, 140, 140)',
              fontWeight: isSelected ? 500 : 400,
              fontSize: '15px',
              lineHeight: '20px',
            }}
          >
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}

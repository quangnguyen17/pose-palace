import type { FC } from 'react'
import Link from 'next/link'

export const NavBar: FC = () => {
  return (
    <nav style={{ backgroundColor: 'rgb(240, 240, 240)', padding: '1rem' }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'rgb(60, 60, 70)' }}>
        Pose Palace
      </Link>
    </nav>
  )
}

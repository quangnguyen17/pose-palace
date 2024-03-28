import type { FC } from 'react'
import Link from 'next/link'

const App: FC = () => {
  return (
    <div style={{ display: 'flex', padding: '1rem' }}>
      <Link
        href="/schedule"
        className="button-outlined"
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          textDecoration: 'none',
          textAlign: 'center',
        }}
      >
        Make an appointment @ Pose Palace
      </Link>
    </div>
  )
}

export default App

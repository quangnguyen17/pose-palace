'use client'

import { useRouter } from 'next/navigation'

const App = () => {
  const router = useRouter()

  return (
    <div
      className="App"
      onClick={() => router.push('https://www.instagram.com/posepalacestudio/')}
    ></div>
  )
}

export default App

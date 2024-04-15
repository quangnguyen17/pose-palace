'use client'

import { FC, useEffect, useState } from 'react'

const HOST_URL: string =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.posepalace.com'

const App: FC = () => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    fetch(`${HOST_URL}/catalog.json`)
      .then((res) => res.json())
      .then((data) => setImages(data))
  }, [])

  return (
    <div className="App">
      <div className="grid-container">
        {images.map((url, idx) => (
          <div className="grid-item" key={idx}>
            <img src={url} alt={url} />
          </div>
        ))}
      </div>
      <a
        className="button-appointment"
        href="https://calendly.com/posepalace/15min"
        target="_blank"
      >
        🗓️ Schedule your appointment today at Pose Palace Studio
      </a>
    </div>
  )
}

export default App

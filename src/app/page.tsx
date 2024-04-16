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
      <header>
        <a href="https://www.instagram.com/posepalacestudio/" target="_blank">
          @posepalacestudio
        </a>
        <a href="https://www.instagram.com/explore/tags/posepalacestudio" target="_blank">
          #posepalacestudio
        </a>
      </header>
      <div className="grid-container">
        {images.map((url, idx) => (
          <div className="grid-item" key={idx}>
            <img src={url} alt={url} loading="lazy" />
          </div>
        ))}
      </div>
      <footer>
        <a href="https://calendly.com/posepalace/15min" target="_blank">
          🌉 Click here to schedule your self photo session today at Pose Palace Studio!
        </a>
      </footer>
    </div>
  )
}

export default App

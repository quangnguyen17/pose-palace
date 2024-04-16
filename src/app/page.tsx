'use client'

import { FC, useEffect, useState } from 'react'

const HOST_URL: string =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.posepalace.com'

type Collection = {
  title: string
  images: string[]
}

const App: FC = () => {
  const [collections, setCollections] = useState<Collection[]>([])

  useEffect(() => {
    fetch(`${HOST_URL}/collections.json`)
      .then((res) => res.json())
      .then((data) => setCollections(data.collections))
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
        {collections.map((collection, collectionIndex) => (
          <div key={collectionIndex} className="collection">
            <p className="collection-title">{collection.title.toUpperCase()}</p>
            <div className="collection-images">
              {collection.images.map((url, idx) => (
                <div className="grid-item" key={idx}>
                  <img src={url} alt="pose palace studio collection" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <footer>
        <a href="https://calendly.com/posepalace/15min" target="_blank">
          🏞️ Click here to schedule your self photo session today at Pose Palace Studio!
        </a>
      </footer>
    </div>
  )
}

export default App

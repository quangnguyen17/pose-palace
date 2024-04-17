const photos: string[] = [
  'c1.jpg',
  'c10.jpg',
  'c2.jpg',
  'c3.jpg',
  'c4.jpg',
  'c5.jpg',
  'c6.jpg',
  'c7.jpg',
  'c8.jpg',
  'c9.jpg',
  'd1.jpg',
  'd2.jpg',
  'q12.jpg',
  'q13.jpg',
  'q14.jpg',
  'q15.jpg',
  'q2.jpg',
  'q7.jpg',
  'q8.jpg',
  'q9.jpg',
]

const hashtags: string[] = ['posepalacestudio', 'full-body', 'portraits', 'goofy']

export default function App() {
  return (
    <div className="App">
      <header>
        <a className="instagram" href="https://www.instagram.com/posepalacestudio/" target="_blank">
          @posepalacestudio
        </a>
        {hashtags.map((hashtag, idx) => (
          <a key={idx} href={`https://www.instagram.com/explore/tags/${hashtag}`} target="_blank">
            #{hashtag}
          </a>
        ))}
      </header>
      <div className="grid-container">
        {photos.map((imagePath, idx) => (
          <div className="grid-item" key={idx}>
            <img src={`/photos/${imagePath}`} alt="pose palace studio collection" loading="lazy" />
          </div>
        ))}
      </div>
      <footer>
        <a href="https://calendly.com/posepalace/15min" target="_blank">
          🗓️ Click here to schedule your self photo session today at Pose Palace Studio!
        </a>
      </footer>
    </div>
  )
}

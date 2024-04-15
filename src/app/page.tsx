const images = [
  'https://posepalace.com/q1.jpg',
  'https://posepalace.com/q2.jpg',
  'https://posepalace.com/q3.jpg',
  'https://posepalace.com/q4.jpg',
  'https://posepalace.com/c1.jpg',
  'https://posepalace.com/c2.jpg',
  'https://posepalace.com/c3.jpg',
  'https://posepalace.com/c4.jpg',
]

export default async function App() {
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

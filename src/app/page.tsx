'use client'

const Home = () => {
  return (
    <div className="App">
      <main>
        <div className="section">
          <img
            className="logo"
            src="logo.png"
            alt="logo.png"
            onClick={() => {
              window.open('https://www.instagram.com/posepalacestudio/')
            }}
          />
          <p>
            We are a proud Vietnamese-American-owned self-portrait photo studio conveniently located
            in Koreatown, Garden Grove. Our mission is to provide professional photos at affordable
            prices. You might wonder what a self-portrait studio is. Essentially, it's a photography
            studio where customers take photos of themselves, rather than being photographed by a
            professional. Equipped with a 32-inch monitor displaying the camera's live feed, you can
            see yourself exactly as you appear in the camera, much like looking into a mirror. We
            firmly believe that capturing memorable moments is invaluable. What better way to
            preserve these moments than by capturing them yourself, with your own authentic
            expressions and feelings?
          </p>
          <h3>How it works</h3>
          <p>
            Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide,
            full-body shots, while the other offers multiple color backdrops, perfect for more
            personal waist-up to headshot portraits. An on-site attendant will guide you into either
            room, provide you with a remote clicker to trigger the camera shutter, assist you in
            taking your first shot to familiarize you with the equipment, and finally, start the
            timer for your booked session.
          </p>
          <table>
            <tr>
              <th>Photography equipments (included in rental price)</th>
              <th>Props available for use (included in rental price)</th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>1 Sony Full-Frame camera</li>
                  <li>1 32-inch monitor displaying the camera's live view/feed</li>
                  <li>1 27-inch monitor displaying the last photo taken</li>
                  <li>1-2 photography strobe lights depending on the room.</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Benches</li>
                  <li>Cubes</li>
                  <li>Chairs</li>
                  <li>Stools</li>
                  <li>Party props like glasses, headbands, hats, etc.</li>
                </ul>
              </td>
            </tr>
          </table>

          <h3>Pricing</h3>
          <table>
            <tr>
              <th>Duration</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>5 minutes</td>
              <td>$26.99</td>
            </tr>
            <tr>
              <td>25 minutes</td>
              <td>$66.99</td>
            </tr>
          </table>
          <h3>Promotions</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <p>
              <b>10% off</b> for the following events in a given month:
            </p>
            <ul>
              <li>Birthday</li>
              <li>
                Wedding/Couple Anniversary (provide an image of last year's anniversary to verify)
              </li>
              <li>Graduation</li>
              <li>Quinceañera</li>
            </ul>
            <p>
              <b>10% off</b> automatic discount for military personnel and healthcare workers.
            </p>
          </div>
        </div>
      </main>
      <footer
        onClick={() => {
          window.open('https://calendly.com/posepalace/15min')
        }}
      >
        BOOK NOW
      </footer>
    </div>
  )
}

export default Home

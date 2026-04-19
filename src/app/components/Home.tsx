import Image from 'next/image'
import { Page } from './Page'
import { Card } from './Card'
import { Hero } from './Hero'
import { SocialCard } from './SocialCard'

export const Home = () => (
  <Page gap="1rem" padding="1rem">
    <Image
      className="PageHeaderLogo"
      src="/logo-short.png"
      alt="Pose Palace Logo Short"
      width={0}
      height={0}
      unoptimized
    />
    <Hero />
    <SocialCard />
    <Card
      className="fade-up fade-up-delay-2"
      headline="Session Rates"
      background="linear-gradient(145deg, #eff4f2 0%, #dbe8e2 100%)"
      linkUrl="https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start"
      linkText="Book Now"
    >
      <p>
        <b>$27</b> for 5 minutes
      </p>
      <p>
        <b>$67</b> for 15 minutes
      </p>
      <p>
        <b>$100</b> for 30 minutes
      </p>
    </Card>
    <Card
      className="fade-up fade-up-delay-2"
      background="linear-gradient(145deg, #eef5fb 0%, #d9e9f5 100%)"
      headline="Give the perfect gift. Gift cards available."
      linkText="Buy Now"
      linkUrl="https://app.squareup.com/gift/MLMSZ9AMTGFPJ/order"
    >
      <p>{`🎁 get a voucher for yourself or gift one to a friend`}</p>
    </Card>
    <Card
      className="fade-up fade-up-delay-3"
      background="linear-gradient(145deg, #f1edf8 0%, #e2e0f2 100%)"
      headline="Weekend Flex Sessions @ 25% OFF"
      bottomSheetButtonText="Book Now"
      bottomSheetOptions={[
        {
          text: 'Full body white room',
          url: 'https://koalendar.com/u/whitecyclorama?fbclid=PAZXh0bgNhZW0CMTEAAafiuxEs7vg4tuuSe8jvIlEOJE_x8GV7esXx4AwAt1sOs9o24BA0s26gJ0b-Ww_aem_T7d6JpghIZLMrmdD96Xh2A',
        },
        {
          text: 'Standard color room',
          url: 'https://koalendar.com/u/standardcolorroom?fbclid=PAZXh0bgNhZW0CMTEAAaem_7uc9i3Z29sGWqY7OZoY37oS1g3JmvoxkxdFk7rdfpr8nYQqR7znoYvXBw_aem_aquGQFX9zi2greq93Uj89g',
        },
      ]}
      linkUrl="https://koalendar.com/u/whitecyclorama?fbclid=PAZXh0bgNhZW0CMTEAAafiuxEs7vg4tuuSe8jvIlEOJE_x8GV7esXx4AwAt1sOs9o24BA0s26gJ0b-Ww_aem_T7d6JpghIZLMrmdD96Xh2A"
    >
      <p>{`🗓️ available to book every week on Wednesday and Thursday`}</p>
    </Card>
    <Card
      className="fade-up fade-up-delay-3"
      background="linear-gradient(145deg, #ecfaf4 0%, #d8efe8 100%)"
      linkUrl="https://docs.google.com/presentation/d/e/2PACX-1vTL91hO5l_EXIvQtarOilrB6LKNLhBeffkMgG4RA7AF5xPpveRUiclTQ57AZ4h9LEiRzMcwDutdtbKu/pub?start=false&loop=false&delayms=3000&slide=id.p"
      linkText="View Catalog"
    >
      <p>
        <b>Unlimited Photos</b> • Capture every moment effortlessly
      </p>
      <p>
        <b>Same-Day Prints</b> • Take your memories home instantly
      </p>
      <p>
        <b>Instant Online Access</b> • Download & share for 7 days
      </p>
      <p>
        <b>Includes 2 People</b> • Just $5 per extra person
      </p>
    </Card>
    <Card
      className="fade-up fade-up-delay-3"
      background="linear-gradient(145deg, #fff4ec 0%, #f3dfd1 100%)"
      title="10% OFF"
    >
      <p>{`🎂 Birthday Promotion`}</p>
      <p>{`🩷 Wedding / Couple Anniversary Promotion`}</p>
      <p>{`🎓 Graduation Promotion`}</p>
      <p>{`🎊 Quinceañera`}</p>
      <p>{`🪖 Military Personnel`}</p>
      <p>{`🏥 Healthcare Workers`}</p>
    </Card>
    <Card className="fade-up" headline="How It Works" background={undefined}>
      <p>
        Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide,
        full-body shots, while the other offers multiple colored backdrops, perfect for more
        personal waist-up or headshot portraits. An on-site attendant will guide you into either
        room, provide you with a remote clicker to trigger the camera shutter, assist you in taking
        your first shot to familiarize you with the equipment, and finally start the timer for your
        booked session.
      </p>
    </Card>
    <Card className="fade-up" headline="Our Equipments" background={undefined}>
      <p>A Sony full-frame camera</p>
      <p>32-inch monitor displaying the camera's live view/feed</p>
      <p>27-inch monitor displaying the last photo taken</p>
      <p>1-2 photography strobe lights, depending on the room</p>
    </Card>
    <Card className="fade-up" headline="Props Available for Use" background={undefined}>
      <p>
        Benches, cubes, chairs, stools, and seasonal or party props such as glasses, headbands,
        hats, etc.
      </p>
    </Card>
    <Card className="fade-up" headline="About Us" background={undefined}>
      <p>
        We are a proud Vietnamese-American-owned self-portrait photo studio conveniently located in
        Koreatown, Garden Grove. Our mission is to provide professional photos at affordable prices.
        You might wonder what a self-portrait studio is—essentially, it's a photography studio where
        customers take photos of themselves rather than being photographed by a professional.
        Equipped with a 32-inch monitor displaying the camera's live feed, you can see yourself
        exactly as you appear in the camera, much like looking into a mirror. We firmly believe that
        capturing memorable moments is invaluable. What better way to preserve these moments than by
        capturing them yourself, with your own authentic expressions and feelings?
      </p>
    </Card>
  </Page>
)

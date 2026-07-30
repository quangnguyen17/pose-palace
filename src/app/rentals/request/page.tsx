import Image from 'next/image'
import Link from 'next/link'
import { RentalRequestForm } from '../../components/RentalRequestForm'

export default function RentalRequestPage({ searchParams }: { searchParams: { camera?: string } }) {
  const cameraName = searchParams.camera ? decodeURIComponent(searchParams.camera) : undefined

  return (
    <main className="RentalRequestPage">
      <header className="SiteHeader">
        <div className="SiteHeaderInner">
          <Link href="/#top" className="Brand" aria-label="Pose Palace home">
            <Image src="/logo-short.png" alt="Pose Palace" width={178} height={50} priority />
          </Link>
          <Link href="/#rentals" className="HeaderAction RentalReturnLink">
            ← Back to Pose Palace
          </Link>
        </div>
      </header>
      <div className="PageWrap RentalRequestPageBody">
        <div className="RentalRequestPageIntro">
          <p className="Eyebrow">pose palace · digital camera rentals</p>
          <h1>
            request a<br />
            <span>digicam.</span>
          </h1>
          <p>
            Send us your preferred camera and dates. We will confirm availability and pickup details
            by email.
          </p>
        </div>
        <section className="RentalRequestPanel" aria-labelledby="request-form-title">
          <div className="RentalRequestPanelHeader">
            <p className="Eyebrow">rental request</p>
            <h2 id="request-form-title">Let&apos;s make a plan.</h2>
            <p>
              Daily rentals are available for one to three days. Hourly rentals are walk-in only.
            </p>
          </div>
          <RentalRequestForm cameraName={cameraName} />
        </section>
      </div>
      <footer className="RentalRequestPageFooter">
        <div className="PageWrap">
          <span>Questions? hainguyen.whiteroom@posepalacestudio.com</span>
          <Link href="/#top">Return to the main landing page ↗</Link>
        </div>
      </footer>
    </main>
  )
}

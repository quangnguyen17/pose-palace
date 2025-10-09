'use client'

import Link from 'next/link'

export const BookNowPill = () => {
  return (
    <Link
      className="Pill"
      href="https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start"
      target="_blank"
    >
      Book Now
    </Link>
  )
}

export const ViewCatalogPill = () => {
  return (
    <Link
      className="Pill"
      href="https://docs.google.com/presentation/d/e/2PACX-1vTL91hO5l_EXIvQtarOilrB6LKNLhBeffkMgG4RA7AF5xPpveRUiclTQ57AZ4h9LEiRzMcwDutdtbKu/pub?start=false&loop=false&delayms=3000&slide=id.p"
      target="_blank"
    >
      View Catalog
    </Link>
  )
}

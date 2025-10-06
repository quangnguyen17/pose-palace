'use client'

import Link from 'next/link'

const ForwardIcon = () => (
  <div
    style={{
      background: '#ffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '14px',
      borderRadius: '32px',
    }}
  >
    <img src="/forward-icon.png" width={18} height={18} style={{ objectFit: 'contain' }} />
  </div>
)

export const BookNowPill = () => {
  return (
    <Link
      className="Pill"
      style={{
        color: 'black',
        backgroundColor: '#e1dabd',
        padding: '6px 6px 6px 22px',
        borderRadius: '32px',
        cursor: 'pointer',
        textAlign: 'left',
      }}
      href="https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start"
      target="_blank"
    >
      <p>Book Now</p>
      <ForwardIcon />
    </Link>
  )
}

export const ViewCatalogPill = () => {
  return (
    <Link
      className="Pill"
      style={{
        color: 'black',
        backgroundColor: '#f1dedc',
        padding: '6px 6px 6px 22px',
        borderRadius: '32px',
        cursor: 'pointer',
        textAlign: 'left',
      }}
      href="https://docs.google.com/presentation/d/e/2PACX-1vTL91hO5l_EXIvQtarOilrB6LKNLhBeffkMgG4RA7AF5xPpveRUiclTQ57AZ4h9LEiRzMcwDutdtbKu/pub?start=false&loop=false&delayms=3000&slide=id.p"
      target="_blank"
    >
      <p>View Catalog</p>
      <ForwardIcon />
    </Link>
  )
}

'use client'

import Link from 'next/link'

const ForwardIcon = () => {
  return <img src="/forward-icon.png" width={22} height={22} style={{ objectFit: 'contain' }} />
}

export const BookNowPill = () => {
  return (
    <Link
      style={{
        color: 'black',
        backgroundColor: '#e1dabd',
        padding: '16px 18px',
        borderRadius: '22px',
        fontSize: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
        textAlign: 'left',
      }}
      href="https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start"
      target="_blank"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>Book Now</p>
        <ForwardIcon />
      </div>
    </Link>
  )
}

export const ViewCatalogPill = () => {
  return (
    <Link
      style={{
        color: 'black',
        backgroundColor: '#f1dedc',
        padding: '16px 18px',
        borderRadius: '22px',
        fontSize: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
        textAlign: 'left',
      }}
      href="https://docs.google.com/presentation/d/e/2PACX-1vTL91hO5l_EXIvQtarOilrB6LKNLhBeffkMgG4RA7AF5xPpveRUiclTQ57AZ4h9LEiRzMcwDutdtbKu/pub?start=false&loop=false&delayms=3000&slide=id.p"
      target="_blank"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>View Catalog</p>
        <ForwardIcon />
      </div>
    </Link>
  )
}

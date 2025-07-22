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

const Title = ({ title }: { title: string }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <p>{title}</p>
    <ForwardIcon />
  </div>
)

export const BookNowPill = () => {
  return (
    <Link
      style={{
        color: 'black',
        backgroundColor: '#e1dabd',
        padding: '6px 6px 6px 22px',
        borderRadius: '32px',
        fontSize: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
        textAlign: 'left',
      }}
      href="https://app.squareup.com/appointments/book/fyciorqmm5xzjt/LR292GX4G172B/start"
      target="_blank"
    >
      <Title title="Book Now" />
    </Link>
  )
}

export const ViewCatalogPill = () => {
  return (
    <Link
      style={{
        color: 'black',
        backgroundColor: '#f1dedc',
        padding: '6px 6px 6px 22px',
        borderRadius: '32px',
        fontSize: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
        textAlign: 'left',
      }}
      href="https://docs.google.com/presentation/d/e/2PACX-1vTL91hO5l_EXIvQtarOilrB6LKNLhBeffkMgG4RA7AF5xPpveRUiclTQ57AZ4h9LEiRzMcwDutdtbKu/pub?start=false&loop=false&delayms=3000&slide=id.p"
      target="_blank"
    >
      <Title title="View Catalog" />
    </Link>
  )
}

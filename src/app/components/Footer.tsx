import Link from 'next/link'

export const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        borderTop: '1px solid rgb(230, 230, 230)',
        padding: '1rem',
        gap: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        fontSize: '15px',
        lineHeight: '20px',
      }}
    >
      <p>© 2024 POSE PALACE self-portrait studio</p>
      <Link href="/gallery">explore our work</Link>
      <Link href="https://www.instagram.com/posepalacestudio/" target="_blank">
        @posepalacestudio
      </Link>
    </footer>
  )
}

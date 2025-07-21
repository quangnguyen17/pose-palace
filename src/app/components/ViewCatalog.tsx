import Link from 'next/link'

export const ViewCatalog = () => {
  return (
    <Link
      style={{
        width: '100%',
        border: 'none',
        color: 'black',
        backgroundColor: '#86bbd8',
        padding: '1rem',
        fontSize: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
      }}
      href="https://docs.google.com/presentation/d/e/2PACX-1vTL91hO5l_EXIvQtarOilrB6LKNLhBeffkMgG4RA7AF5xPpveRUiclTQ57AZ4h9LEiRzMcwDutdtbKu/pub?start=false&loop=false&delayms=3000&slide=id.p"
      target="_blank"
    >
      View Catalog
    </Link>
  )
}

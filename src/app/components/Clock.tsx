import Image from 'next/image'

export const Clock = () => {
  return (
    <Image
      style={{ filter: 'invert(1)' }}
      src="/clock.png"
      alt="/clock.png"
      width={25}
      height={25}
      unoptimized
    />
  )
}

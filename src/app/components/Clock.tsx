import Image from 'next/image'

export const Clock = () => {
  return (
    <Image
      style={{ filter: 'invert(1)' }}
      src="/clock.png"
      alt="/clock.png"
      width={24}
      height={24}
      unoptimized
    />
  )
}

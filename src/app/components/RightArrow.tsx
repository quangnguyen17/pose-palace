import Image from 'next/image'

export const RightArrow = () => {
  return (
    <Image
      style={{ filter: 'invert(1)' }}
      src="/right-arrow.png"
      alt="/right-arrow.png"
      width={27}
      height={27}
      unoptimized
    />
  )
}

import { FC } from 'react'
import Link from 'next/link'
import { NewTab } from './Icons'

export const DirectionCard: FC = () => {
  return (
    <Link
      className="DirectionCard"
      href="http://maps.google.com/maps?q=9618+Garden+Grove+Blvd%2C+Garden+Grove%2C+CA+92844"
      target="_blank"
    >
      <span>
        9618 Garden Grove Blvd # 106
        <br />
        Garden Grove, CA 92844
      </span>
      <NewTab />
    </Link>
  )
}

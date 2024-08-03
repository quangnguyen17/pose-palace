import { FC, Fragment } from 'react'
import './Loading.css'

export const Loading: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <Fragment>
      <div className={`loading-overlay${isLoading ? '-visible' : ''}`}>
        <div className="loading">
          <div className="loading-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

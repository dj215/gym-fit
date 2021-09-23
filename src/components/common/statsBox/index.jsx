import React from 'react'
import classNames from 'classnames'

const StatsBox = (props) => {
    const {challenge, isInfo=false} = props
    return(
        <div className={classNames('row', 'mx-0',' mt-10', 'text-center', {'border': !isInfo},{'bg-green' : isInfo}, 'border-radius-5', 'ptb-15')}>
            <div className="col-4 pa-0 border-right">
              <div className="fs-18">{challenge.pledge}</div>
              <div className={classNames({'black-text':isInfo,'green-text':!isInfo} ,'fs-14')}>Pledge</div>
            </div>
            <div className="col-4 pa-0 border-right">
              <div className="fs-18">{challenge.maxPlayers}</div>
              <div className={classNames({'black-text':isInfo,'green-text':!isInfo} ,'fs-14')}>Max Players</div>
            </div>
            <div className="col-4 pa-0 ">
              <div className="fs-18">{challenge.maxPostSize}</div>
              <div className={classNames({'black-text':isInfo,'green-text':!isInfo} ,'fs-14')}>Max Pot Size</div>
            </div>
        </div>
    )
}

export default StatsBox
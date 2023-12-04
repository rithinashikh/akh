import React from 'react'
import './advocate-info.scss'
function AdvocateInfo({user}) {
  return (
    <div>
      <div className="user-info">
        <div className="user-info__img">
            <img src={user.img} alt="error" />
        </div>
        <div className="user-info__name">
            <span>{user.name}</span>
        </div>
      </div>
    </div>
  )
}

export default AdvocateInfo
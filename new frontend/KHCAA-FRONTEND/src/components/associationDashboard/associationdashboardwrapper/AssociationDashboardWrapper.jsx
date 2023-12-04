import React from 'react'
import './association-dashboardwrapper.scss'

const AssociationDashboardWrapper = props =>  {
  return (
    <div className='dashboard-wrapper'>
      {props.children}
    </div>
  )
}

export default  AssociationDashboardWrapper

export const AssociationDashboardWrapperMain = props => {
    return (
      <div className='dashboard-wrapper__main'>
        {props.children}
      </div>
    )
  }

  export const AssociationDashboardWrapperRight= props => {
    return (
      <div className='dashboard-wrapper__right'>
        {props.children}
      </div>
    )
  }


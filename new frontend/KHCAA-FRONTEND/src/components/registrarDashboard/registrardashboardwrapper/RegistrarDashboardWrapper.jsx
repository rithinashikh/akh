import React from 'react'
import './registrar-dashboardwrapper.scss'

const RegistrarDashboardWrapper = props =>  {
  return (
    <div className='dashboard-wrapper'>
      {props.children}
    </div>
  )
}

export default  RegistrarDashboardWrapper

export const RegistrarDashboardWrapperMain = props => {
    return (
      <div className='dashboard-wrapper__main'>
        {props.children}
      </div>
    )
  }

  
  export const RegistrarDashboardWrapperRight= props => {
    return (
      <div className='dashboard-wrapper__right'>
        {props.children}
      </div>
    )
  }


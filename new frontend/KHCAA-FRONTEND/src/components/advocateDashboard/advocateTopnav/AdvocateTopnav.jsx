import React from 'react'
import './advocate-topnav.scss'

import AdvocateInfo from '../../../components/advocateDashboard/advocate-info/AdvocateInfo'

import data from '../../../constants/Advocate/data'
function RegistrarTopNav() {
  const openSidebar = ()=>{
    document.body.classList.add('sidebar-open')
  }
  return (
    <div>
      <div className="topnav">
        <AdvocateInfo  user={data.user}/>
        <div className="sidebar-toggle" onClick={openSidebar}>
          <i className="bx bx-menu-alt-right"></i>
        </div>
      </div>
    </div>
  )
}

export default RegistrarTopNav


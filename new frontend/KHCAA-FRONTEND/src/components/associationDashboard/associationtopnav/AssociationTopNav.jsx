import React from 'react'
import './association-topnav.scss'

import AssociationInfo from '../associationinfo/AssociationInfo'

import data from '../../../constants/association/data'
function RegistrarTopNav() {
  const openSidebar = ()=>{
    document.body.classList.add('sidebar-open')
  }
  return (
    <div>
      <div className="topnav">
        <AssociationInfo  user={data.user}/>
        <div className="sidebar-toggle" onClick={openSidebar}>
          <i className="bx bx-menu-alt-right"></i>
        </div>
      </div>
    </div>
  )
}

export default RegistrarTopNav

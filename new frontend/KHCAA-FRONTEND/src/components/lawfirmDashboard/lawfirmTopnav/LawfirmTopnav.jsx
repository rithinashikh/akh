import React from 'react'
import './lawfirm-topnav.scss'

// import AssociationInfo from '../associationinfo/AssociationInfo'
import Lawfirminfo from '../LawfirmInfo/LawfirmInfo'

// import data from '../../../constants/association/data'
import Data from '../../../constants/lawfirm/Data'
function LawfirmTopNav() {
  const openSidebar = ()=>{
    document.body.classList.add('sidebar-open')
  }
  return (
    <div>
      <div className="topnav">
        <Lawfirminfo  user={Data.user}/>
        <div className="sidebar-toggle" onClick={openSidebar}>
          <i className="bx bx-menu-alt-right"></i>
        </div>
      </div>
    </div>
  )
}

export default LawfirmTopNav

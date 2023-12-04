import React from 'react'
import './registrar-top.scss'
import RegistrarInfo from '../registrarinfo/RegistrarInfo'
import data from '../../../constants/registrardatas/data'
function RegistrarTopNav() {
  const openSidebar = ()=>{
    document.body.classList.add('sidebar-open')
  }
  return (
    <div>
      <div className="topnav">
        <RegistrarInfo  user={data.user}/>
        <div className="sidebar-toggle" onClick={openSidebar}>
          <i className="bx bx-menu-alt-right"></i>
        </div>
      </div>
    </div>
  )
}

export default RegistrarTopNav

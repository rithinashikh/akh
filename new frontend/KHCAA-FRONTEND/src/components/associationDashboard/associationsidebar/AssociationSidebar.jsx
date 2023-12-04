
import React, { useEffect, useState } from 'react'
import './association-sidebar.scss'
import {Link,useLocation, useNavigate} from 'react-router-dom'
import { images } from '../../../constants'
import AssociationNav  from '../../../configs/AssociationNav'

function AssociationSidebar() {


  const [activeIndex , setActiveIndex]=useState(0)
  const navigate=useNavigate()
  const location=useLocation()
  useEffect(()=>{
    const curPath = window.location.pathname.split('/')[1]
    const activeItem = AssociationNav.findIndex(item=>item.section === curPath)

    setActiveIndex(curPath.length === 0 ? 0 :activeItem)
    console.log('curPath:', curPath);

  },[location])
  

  const handleLogout =()=>{
    localStorage.removeItem('associationToken')
    localStorage.removeItem('associationRefreshToken')
    navigate('/association/login')
  }

  const closeSidebar =()=>{
  document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
  setTimeout(()=>{
    document.body.classList.remove('sidebar-open')
    document.querySelector('.main__content').style=''
  },500)

  
  }

  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
          <img src={images.logo} alt="" />
          <div className="sidebar-close" onClick={closeSidebar}>
            <i className='bx bx-x'></i>
          </div>
      </div>
      <div className="sidebar__menu">
        {
          AssociationNav.map((nav,index)=>(
            <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}` }onClick={closeSidebar}>
              <div className="sidebar__menu__item__icon">
                {nav.icon}
              </div>
              <div className="sidebar__menu__item__txt">
                {nav.text}
              </div>
            </Link>
          ))
        }
        <div onClick={handleLogout} className="sidebar__menu__item" >
          <div className="sidebar__menu__item__icon">
            <i className='bx bx-log-out'></i>
          </div>
          <div className="sidebar__menu__item__txt">
            Logout

          </div>
        </div>
      </div>
    </div>
  )
}

export default AssociationSidebar



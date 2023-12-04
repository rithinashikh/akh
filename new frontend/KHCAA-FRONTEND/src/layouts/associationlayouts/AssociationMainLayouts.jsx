import React, { useEffect } from 'react'
import './association-layouts.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import AssociationSidebar from '../../components/associationDashboard/associationsidebar/AssociationSidebar'
import AssociationTopNav from '../../components/associationDashboard/associationtopnav/AssociationTopNav'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUserToken } from '../../store/slice/AuthSlice'
function AssociationMainLayouts() {

  const associationToken=useSelector(selectUserToken)
  const sessionId=localStorage.getItem('sessionId')
   
  const navigate=useNavigate()

  useEffect(()=>{
    if(!associationToken && !sessionId){
      navigate('/association/login')
    }
  },[navigate,associationToken,sessionId])

  return (
    <>
    {
      associationToken || sessionId ?(
        <>
        <AssociationSidebar />
    <div className="main">
      <div className="main__content">
     
          <AssociationTopNav/>
          
          <Outlet/>
      </div>
    </div>

        </>
      ):null
    }
    
  </>
  )
}

export default AssociationMainLayouts

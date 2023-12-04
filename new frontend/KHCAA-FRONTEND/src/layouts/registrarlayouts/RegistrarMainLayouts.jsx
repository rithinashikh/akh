import React,{useEffect} from 'react'
import './registrar-mainlayout.scss'
import { Outlet,useNavigate } from 'react-router-dom'
import RgeistrarSidebar from '../../components/registrarDashboard/registrarsidebar/RgeistrarSidebar'
import RegistrarTopNav from '../../components/registrarDashboard/registrartopnav/RegistrarTopNav'
function RegistrarMainLayouts() {

  const navigate=useNavigate()
  const token=localStorage.getItem('RegistrarToken')
  // const impid = localStorage.getItem('ImpersonateId') 
  const sessionId=localStorage.getItem('sessionId')

  useEffect(() => {
    if (!token && !sessionId) {
      navigate('/registrar/login');
    }
  }, [navigate, token, sessionId]);

  return (
    <>

    {token || sessionId ?(
      <>
      <RgeistrarSidebar/>
      <div className="main">
        <div className="main__content">
       
            <RegistrarTopNav/>
            
            <Outlet/>
        </div>
      </div>
    </>
    ):null}
    </>
  )
}

export default RegistrarMainLayouts

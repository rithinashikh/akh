import React  from 'react'
import './lawfirm-layouts.scss'
import { Outlet} from 'react-router-dom'
import LawfirmSidebar from '../../components/lawfirmDashboard/lawfirmSidebar/LawfirmSidebar'
import LawfirmTopnav from '../../components/lawfirmDashboard/lawfirmTopnav/LawfirmTopnav'
function LawfirmMainLayouts() {

  
  return (
    
    
        <>
    <LawfirmSidebar/>
    <div className="main">
      <div className="main__content">
        
        <LawfirmTopnav/>
        <Outlet/>
      </div>
    </div>
    
      </>
  )
}

export default LawfirmMainLayouts

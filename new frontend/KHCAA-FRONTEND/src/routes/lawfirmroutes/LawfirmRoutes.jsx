import React from 'react'
// import LawfirmBlankpage from '../../pages/LawfirmDashboard/LawfirmBlankpage'
import LawfirmDashboard from '../../pages/LawfirmDashboard/LawfirmDashboard'
import LawfirmMainLayouts from '../../layouts/lawfirmlayouts/LawfirmMainLayouts'
import LawfirmLogin from '../../pages/LawfirmDashboard/LawfirmLogin'
import AdvocateList from '../../pages/LawfirmDashboard/AdvocateList'
import Memberslist from '../../pages/LawfirmDashboard/Memberslist'
import Notification from '../../pages/LawfirmDashboard/Notification'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
function LawfirmRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path='/lawfirmdashboard' element={<LawfirmMainLayouts/>}>
                <Route index element={<LawfirmDashboard/>}/>
                <Route path='members' element={<LawfirmBlankpage/>}/>
                <Route path='notification' element={<LawfirmBlankpage/>}/>
            </Route> */}
           <Route path='/login' element={<LawfirmLogin/>}/>

        <Route path='/lawfirm' element={<LawfirmMainLayouts />}>
          <Route index element={<LawfirmDashboard />} />
          <Route path='members' element={<Memberslist />} />
          <Route path='advocates' element={<AdvocateList />} />
          <Route path='notification' element={<Notification />} />
        </Route>
       <Route path='*' element={<PageNotFound/>}/>

      </Routes>

    </div>
  )
}

export default LawfirmRoutes

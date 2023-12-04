import React from 'react'
import BlankPage from '../../pages/RegistrarDashboard/BlankPage'
import RegistrarDashboard from '../../pages/RegistrarDashboard/RegistrarDashboard'
import RegistrarMainLayouts from '../../layouts/registrarlayouts/RegistrarMainLayouts'
import Association from '../../pages/RegistrarDashboard/Association'
import Admin from '../../pages/RegistrarDashboard/Admin'
import RegistrarLogin from '../../pages/RegistrarDashboard/RegistrarLogin'
import {Routes,Route} from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import ForgotPasswordRegistrar from '../../pages/RegistrarDashboard/ForgotPasswordRegistrar'
function RegistrarRoutes() {
  return (
    <div>
       <Routes>
           <Route path='/login' element={<RegistrarLogin/>}/>
           <Route path='/resetpassword' element={<ForgotPasswordRegistrar/>}/>

        <Route path='/layout' element={<RegistrarMainLayouts />}>
          <Route index element={<RegistrarDashboard />} />
          <Route path='association' element={<Association />} />
          <Route path='admin' element={<Admin />} />
          {/* <Route path='advocate' element={<BlankPage/>} /> */}
          {/* <Route path='lawfirm' element={<BlankPage/>} />
          <Route path='advocate' element={<BlankPage/>} /> */}
         
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default RegistrarRoutes

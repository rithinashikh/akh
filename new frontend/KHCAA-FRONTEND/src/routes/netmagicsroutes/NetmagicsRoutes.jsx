// import React from 'react'
// // import Blank from '../../pages/NetmagicsDashboard/Blank'
// import Dashboard from '../../pages/NetmagicsDashboard/Dashboard'
// import Court from '../../pages/NetmagicsDashboard/Court'
// import Registrar from '../../pages/NetmagicsDashboard/Registrar'
// import Association from '../../pages/NetmagicsDashboard/Association'
// // import LawFirm from '../../pages/NetmagicsDashboard/LawFirm'
// import Advocates from '../../pages/NetmagicsDashboard/Advocates'
// import NetmagicsMainLayout from '../../layouts/netmagicslayouts/NetmagicsMainLayout'
// import NetmagicsLogin from '../../pages/NetmagicsDashboard/NetmagicsLogin'
// import ActivityTracker from '../../pages/NetmagicsDashboard/ActivityTracker'

// import { Routes, Route } from 'react-router-dom';

// function netmagicsroutes() {
//   return (
//     <div>
//       <Routes>
     
      
//         {/* <Route path='/netmagics/layout' element={<NetmagicsMainLayout />}> */}
//         <Route path="netmagics/login" element={<NetmagicsLogin />} />
//         <Route path='/layout' element={<NetmagicsMainLayout />}>

//           <Route index element={<Dashboard />} />
//           <Route path='court' element={<Court/>} />
//           <Route path='registrar' element={<Registrar />} />
//           <Route path='association' element={<Association />} />
//           {/* <Route path='lawfirm' element={<LawFirm />} /> */}
//           <Route path='advocate' element={<Advocates />} />
//           <Route path='activity' element={<ActivityTracker />} />
          
//         </Route>
       
//       </Routes>
//     </div>
//   )
// }

// export default netmagicsroutes


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetmagicsMainLayout from '../../layouts/netmagicslayouts/NetmagicsMainLayout';
import NetmagicsLogin from '../../pages/NetmagicsDashboard/NetmagicsLogin';
import Dashboard from '../../pages/NetmagicsDashboard/Dashboard';
import Court from '../../pages/NetmagicsDashboard/Court';
import Registrar from '../../pages/NetmagicsDashboard/Registrar';
import Association from '../../pages/NetmagicsDashboard/Association';
import Advocates from '../../pages/NetmagicsDashboard/Advocates';
import ActivityTracker from '../../pages/NetmagicsDashboard/ActivityTracker';
import AssociationAdmin from '../../pages/NetmagicsDashboard/AssociationAdmin';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import ForgotPassword from '../../pages/NetmagicsDashboard/ForgotPassword';
function NetmagicsRoutes() {

  return (
    <Routes>
      <Route path="/login" element={<NetmagicsLogin />} />
      <Route path='/resetpassword' element={<ForgotPassword/>}/>
      <Route path="/layout" element={<NetmagicsMainLayout />}>
        <Route index element={<Dashboard />}/>
        <Route path="court" element={<Court />}/>
        <Route path="registrar" element={<Registrar/>}/>
        <Route path="association" element={<Association/>}/>
        <Route path="advocate" element={<Advocates />}/>
        <Route path="activity" element={<ActivityTracker />}/>
        <Route path='admin' element={<AssociationAdmin/>}/>

      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  );
}

export default NetmagicsRoutes;
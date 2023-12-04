import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import AdvocateLayouts from '../../layouts/advocatelayouts/AdvocateLayouts';
import AdvocateDashboard from '../../pages/AdvocateDashboard/AdvocateDashboard';
import LawfirmDashboard from '../../pages/LawfirmDashboard/LawfirmDashboard';
import LawfirmMainLayouts from '../../layouts/lawfirmlayouts/LawfirmMainLayouts';
import AdvocateList from '../../pages/LawfirmDashboard/AdvocateList';
import AdvocateRegistraction from '../../pages/AdvocateDashboard/AdvocateRegistraction'
import AdvocateLogin from '../../pages/AdvocateDashboard/AdvocateLogin'
import Association from '../../pages/AdvocateDashboard/Association';
import Lawfirm from '../../pages/AdvocateDashboard/Lawfirm';
import Membership from '../../pages/AdvocateDashboard/Membership';
import Memberslist from '../../pages/LawfirmDashboard/Memberslist';
import Notification from '../../pages/LawfirmDashboard/Notification';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import ForgotPasswordAdvocate from '../../pages/AdvocateDashboard/ForgotPasswordAdvocate';
import PaymentSuccess from '../../pages/AdvocateDashboard/PaymentSuccess';

function AdvocateRoutes() {
  const location = useLocation();
  const isNestedRoute = location.pathname.startsWith('/advocate/layout/nested-route/');

  return (
    <Routes>
      <Route path="/login" element={<AdvocateLogin />} />
      <Route path="/register" element={<AdvocateRegistraction />} />
      <Route path='/resetpassword' element={<ForgotPasswordAdvocate/>}/>
      <Route path='/success' element={<PaymentSuccess/>}/>
    
      <Route path="/layout" element={isNestedRoute ? null : <AdvocateLayouts />}>
        <Route index element={<AdvocateDashboard />} />
        <Route path="association" element={<Association />} />
        <Route path="lawfirm" element={<Lawfirm />} />
        <Route path="membership" element={<Membership />} />
        {/* <Route path='success' element={<PaymentSuccess/>}/> */}
        
        
        {/* {isNestedRoute ? (
          <Route path='nested-route/*' element={<LawfirmMainLayouts />}>
            <Route index element={<LawfirmDashboard />} />
            <Route path="advocates" element={<AdvocateList />} />
            <Route path="members" element={<Memberslist />} />
            <Route path="notification" element={<Notification />} />
          </Route>
        ) : null} */}

<Route path="nested-route" element={<LawfirmMainLayouts />}>
            <Route index element={<LawfirmDashboard />} />
            <Route path="advocates" element={<AdvocateList />} />
            <Route path="members" element={<Memberslist />} />
            <Route path="notification" element={<Notification />} />
            <Route path=":lawfirmId" element={<LawfirmDashboard />} />
        </Route>


      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  );
}

export default AdvocateRoutes;

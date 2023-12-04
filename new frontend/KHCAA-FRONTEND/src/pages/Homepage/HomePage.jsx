// import React from 'react'
// import { Link } from 'react-router-dom'
// import './homepage.css'
// import { Routes, Route } from 'react-router-dom';

// import NetmagicsRoutes from '../../routes/netmagicsroutes/NetmagicsRoutes';
// import RegistrarRoutes from '../../routes/netmagicsroutes/RegistrarRoutes';
// import AdvocateRoutes from '../../routes/advocateroutes/AdvocateRoutes';
// import AssociationRoutes from '../../routes/associationroutes/AssociationRoutes';
// function HomePage() {
  
//   return (
//     <Routes>
        
//         <Route path="/netmagics/*" element={<NetmagicsRoutes />} />
//         <Route path="/registrar/*" element={<RegistrarRoutes />} />
//         <Route path="/association/*" element={<AssociationRoutes />} />
//         <Route path="/advocate/*" element={<AdvocateRoutes />} />
//         <Route path="*" element={<PageNotFound/>} />
        
//       </Routes>
//     <div>
//       {/* <Link to='/netmagics/login'>netmagics</Link> */}
//       <div class="main-box">
//         <div class="sub-box">
//        <Link to='/netmagics/login'>netmagics</Link>

//         </div>
//         <div class="sub-box">Association</div>
//         <div class="sub-box">Registrar </div>
//         <div class="sub-box">Registrar </div>
//     </div>
//     </div>
//   )
// }

// export default HomePage
import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import { Routes, Route } from 'react-router-dom';

import NetmagicsRoutes from '../../routes/netmagicsroutes/NetmagicsRoutes';
import RegistrarRoutes from '../../routes/netmagicsroutes/RegistrarRoutes';
import AdvocateRoutes from '../../routes/advocateroutes/AdvocateRoutes';
import AssociationRoutes from '../../routes/associationroutes/AssociationRoutes';
// import PageNotFound from '../PageNotFound/PageNotFound';

function HomePage() {
  return (
    <div>
      <Routes>
        <Route path="/netmagics/*" element={<NetmagicsRoutes />} />
        <Route path="/registrar/*" element={<RegistrarRoutes />} />
        <Route path="/association/*" element={<AssociationRoutes />} />
        <Route path="/advocate/*" element={<AdvocateRoutes />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <div className="main-box">
      <Link to='/netmagics/login'>
        <div className="sub-box">
        Netmagics
        </div>
        </Link>
        <Link to='association/login'>
        <div className="sub-box">
        Association
        </div>
        </Link>
        <Link to='registrar/login'>
        <div className="sub-box">
        Registrar
          </div>
          </Link>
          <Link to='Advocate/login'>
        <div className="sub-box">
        Advocate
        </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;


import React from 'react'
import {Routes,Route} from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import MemberDirectories from '../../pages/Directory/MemberDirectories'
import DetailView from '../../pages/Directory/DetailView'
function MemberDirectoriesRoutes() {
    return (
      <div>
         <Routes>
             <Route path='/directory' element={<MemberDirectories/>}/>
             <Route path='/detailview' element={<DetailView/>}/>
  
          {/* <Route path='/layout' element={<RegistrarMainLayouts />}>
            <Route index element={<RegistrarDashboard />} />
            <Route path='association' element={<Association />} />
            <Route path='admin' element={<Admin />} />
           
          </Route> */}
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        
      </div>
    )
  }
  
  export default MemberDirectoriesRoutes
  
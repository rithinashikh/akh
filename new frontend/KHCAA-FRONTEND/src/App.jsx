import './styles/App.scss'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import NetmagicsRoutes from './routes/netmagicsroutes/NetmagicsRoutes'
import RegistrarRoutes from './routes/netmagicsroutes/RegistrarRoutes'
import AdvocateRoutes from './routes/advocateroutes/AdvocateRoutes'
import AssociationRoutes from './routes/associationroutes/AssociationRoutes'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import MemberDirectoriesRoutes from './routes/memberdirectorieRoutes/MemberDirectoriesRoutes'
// import BlankPage from './pages/RegistrarDashboard/BlankPage'
// import BlankPageId from './pages/AssociationDashboard/BlankPageId'
// import userContext from './context/UserContext'
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import HomePage from './pages/HomePage'
import HomePage from './pages/Homepage/HomePage'

function App() {

  // const user = 'netmagics'
  // const [userdata, setUserdata] = useState([])

  return (
    <>
      {/* <userContext.Provider value={{userdata,setUserdata}}>
      <div className="App">

    {
      user==='netmagics'?(
    <NetmagicsRoutes/>
      ):(
        // <LawfirmRoutes/>
      //  <AdvocateRoutes/>
        // <LawfirmRoutes/>


      // <BlankPageId/>
      <AssociationRoutes/>
      // <RegistrarRoutes/>
      )
    }

      </div>
      </userContext.Provider> */}
     <Routes>
        {/* Render HomePage only on the root path */}
        <Route index element={<HomePage />} />
        
        {/* Define other routes as needed */}
        <Route path="/netmagics/*" element={<NetmagicsRoutes/>}/>
        <Route path="/registrar/*" element={<RegistrarRoutes/>}/>
        <Route path="/association/*" element={<AssociationRoutes/>} />
        <Route path="/advocate/*" element={<AdvocateRoutes/>}/>
        <Route path="/member/*" element={<MemberDirectoriesRoutes/>}/>
        
        {/* Handle 404 Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
{/* <NetmagicsRoutes/>
<RegistrarRoutes/>
<AssociationRoutes/>
<AdvocateRoutes/>
<AdvocateRoutes/> */}
<ToastContainer/>
</>
  );
}


export default App;

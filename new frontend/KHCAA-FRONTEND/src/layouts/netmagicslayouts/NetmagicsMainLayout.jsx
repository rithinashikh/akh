import React, { useEffect } from 'react';
import './mainlayout.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/netmagicsdashboard/sidebar/Sidebar';
import TopNav from '../../components/netmagicsdashboard/topnav/TopNav';

function NetmagicsMainLayout() {
  const token = localStorage.getItem('accessToken');
 
  const navigate = useNavigate();
  

  useEffect(() => {
    
    if (!token) {
      navigate('/netmagics/login');
    }
  }, [navigate, token]);

  

  return (
    <>
      {token ? (
        <>
          <Sidebar />
          <div className="main">
            <div className="main__content">
              
              <TopNav />
              <Outlet />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default NetmagicsMainLayout;

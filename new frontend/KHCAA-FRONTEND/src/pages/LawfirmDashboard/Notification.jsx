import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component'
import AddNotification from '../../components/lawfirmDashboard/notification/AddNotification';
import {NotificationData} from '../../constants/lawfirm/NotificationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import EditNotification from '../../components/lawfirmDashboard/notification/EditNotification';
import DeleteNotification from '../../components/lawfirmDashboard/notification/DeleteNotification';

function Notification() {
  const [notification,setNotification]=useState([])
  const lawfirm_id=localStorage.getItem('lawfirm_id')
  const [searchQuery,setSearchQuery]=useState('')
  
  const ImpersonateId = localStorage.getItem('id')
  const advocateid = ImpersonateId ? localStorage.getItem('advid') : null;
  const adv_token = localStorage.getItem('advocateToken');
  const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken');

  // const token=localStorage.getItem('advocateToken')
  useEffect(()=>{
    let endpoint=`/lawfirm/notification/list/${lawfirm_id}`
    if(advocateid){
      endpoint+=`/${advocateid}`
    }
    
    axiosInstance.get(`/lawfirm/notification/list/${lawfirm_id}`,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((response)=>{
      const filteredCourts = response.data.filter(notification =>{
        return notification.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
      console.log('notification',response.data);
      setNotification(filteredCourts)
    }).catch((error)=>{
      console.log(error);
    })
  },[searchQuery])

  const columnWithButtons=[
    ...NotificationData,
    {
      name: 'Edit',
      cell: (row) => (
       <EditNotification notiid={row.id} setNotification={setNotification} />
      ),
      sortable: false,
    },
    {
      name: 'Delete',
      cell: (row) => (
      <DeleteNotification notificationid={row.id} setNotification={setNotification}/>

      ),
      sortable: false,
    },
  ]

  return (
    <>
    <div className='court__container'>
     <div className="court__container__title">
        <h1 className='text-3xl font-bold'>Notification</h1>
     </div>
     <div className="court__container__search">
        <input type="text" name="search" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ' onChange={(e) => setSearchQuery(e.target.value)} />
        {/* <i class='bx bx-search-alt'></i> */}
        
     </div>
     <div >
    
        {/* <AddCourt Court={court} setCourt={setCourt}/>  */}
        {/* <Button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' >
        Add Court <span>+</span>
      </Button> */}
      <AddNotification setNotification={setNotification}/>
      
        
     </div>

    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
    
     
    <DataTable
  columns={columnWithButtons}
  data={notification}
  fixedHeader
  pagination
/> 
  </div>
  </>
  )
}

export default Notification

import React, { useEffect, useState } from 'react'
import '../../styles/netmagics/association.scss'

import DataTable from 'react-data-table-component'

// import AddAssociation from '../../components/netmagicsdashboard/association-component/AddAssociation'
import { Columns } from '../../constants/netmagics/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
// import ImpersonateAssociation from '../../components/netmagicsdashboard/impersonate-association/ImpersonateAssociation'
import AssociationDetails from '../../components/netmagicsdashboard/associationDetailpage/AssociationDetails'
import SuspendAssociation from '../../components/netmagicsdashboard/association-component/SuspendAssociation'


function Association() {
   const [association , setAssociation]=useState([])
   const [searchQuery,setSearchQuery]=useState('')
   const token=localStorage.getItem('accessToken')

   useEffect(()=>{
      axiosInstance.get('/association/list',{
         headers:{
            'Authorization':`Bearer ${token}`
         }
      }).then((response)=>{
         // console.log('response data');
         // console.log("association",response.data);
         const filteredassociation = response.data.filter(association=>{
            return association.name.toLowerCase().includes(searchQuery.toLowerCase())
         })
         setAssociation(filteredassociation)
      }).catch((error)=>{
         console.log(error);
      })
   },[searchQuery])



   const columnWithbutton=[
      ...Columns,
      {
         name: 'Suspend',
         cell: (row) => (
         //   <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
         //     {row.is_suspend ? 'suspend' : 'unsuspend'}
         //   </button>
         <SuspendAssociation associd={row.id} is_suspend={row.is_suspend}/>

         ),
         sortable: false,
       },
      
         {
            name: 'Details',
            cell: (row) => (
            //   <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            //    <i class='bx bx-right-top-arrow-circle fs-4 bx-tada bx-rotate-90 fs-6' ></i>
            //   </button>
            <AssociationDetails associd={row.id} assocname={row.name} assocemail={row.email} estd_date={row.estd_date} contact_no={row.contact_no} address={row.address}/>
            ),
            sortable: false,
          },
 
   ]
   
  return (
    <>
    <div className='association__container'>
     <div className="association__container__title">
        <h1 className='text-3xl font-bold'>Association</h1>
     </div>
     <div className="association__container__search">
        <input type="text" name="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" ' onChange={(e)=>setSearchQuery(e.target.value)}/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     {/* <div >
        <AddAssociation/>
     </div> */}
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={columnWithbutton}
     data={association}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
  )
}

export default  Association


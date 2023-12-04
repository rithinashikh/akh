import React,{useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
// import { Columns } from '../../constants/Advocate/MembershipData'
import { Columns,data} from '../../constants/Advocate/JoinedAssociationData';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';

function Membership() {
    const [membership,setMembership]=useState([])

   
  const ImpersonateId = localStorage.getItem('id')
  const advcoatedata = ImpersonateId ? localStorage.getItem('advid') : null;
  const advtoken = localStorage.getItem('advocateToken')
  const token = advtoken ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')
    
    useEffect( ()=>{
      const fetchData= async()=>{
         try {
            let endpoint=`association/advocates/payment/list`
            if(advcoatedata){
               endpoint+=`/${advcoatedata}`
            }
            const response =await axiosInstance.get(endpoint,{
               headers:{
                  'Authorization':`Bearer ${token}`
               }
            })
            console.log('response ',response.data);
            setMembership(response.data)

         } catch (error) {
            console.log(error);
         }

      }
      
      fetchData()
    },[])

  return (
    <>
    <div className='lawfirm__container'>
     <div className="lawfirm__container__title">
        <h1 className='text-3xl font-bold'>Your Membership</h1>
     </div>
     <div className="lawfirm__container__search">
        <input type="text" name="" id="" placeholder='search....'className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
  columns={Columns}
  data={membership}
  fixedHeader
  pagination
/>
     

  </div>
  </>
  )
}

export default Membership

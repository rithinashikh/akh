import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';

import '../../styles/netmagics/lawfirm.scss'
import DataTable from 'react-data-table-component'
import AddAssociationAdvocates from '../../components/associationDashboard/association-advocates/AddAssociationAdvocates'
import { Columns, memberColumn, pendingList,ActiveList,expirylist } from '../../constants/association/AdvocatesData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import LoadingAnimation from '../../components/loader/LoadingAnimation'
import AproveMembership from '../../components/associationDashboard/membership-aprove/AproveMembership';
import MemberShipReject from '../../components/associationDashboard/membership-reject/MemberShipReject';
function AssociationAdvocates() {
   const [AdvocatesData, setAdvocatesData] = useState([])
   const [searchQuery, setSearchQuery] = useState('')
   // const token=localStorage.getItem('associationToken')

   const ImpersonateId = localStorage.getItem('id')
   const associationdata = ImpersonateId ? localStorage.getItem('adminid') : null;
   const associationToken = localStorage.getItem('associationToken')
   const token = associationToken ? localStorage.getItem('associationToken') : localStorage.getItem('accessToken');
   const [loading, setLoading] = useState(false);
   const [activeTab, setActiveTab] = useState('Activemembers')
   const [pendingAdvocate,setPendingAdvocate]=useState([])
   const [activeAdvocateassociation,setActiveAdvocateassociation]=useState([])
   const [expiredMembers,setExpiredMembers]=useState([])


   // useEffect(()=>{
   //    setLoading(true)
   //    let endpoint='/advocates/list'
   //    if(associationdata){
   //       endpoint+=`/${associationdata}`
   //    }
   //    axiosInstance.get(endpoint,{
   //       headers:{
   //          'Authorization':`Bearer ${associationtoken}`
   //       }
   //    }).then((response)=>{
   //       setLoading(false)
   //       console.log("response data",response.data);
   //       const filteradvocate=response.data.filter(advocate=>{
   //          return advocate.user.name.toLowerCase().includes(searchQuery.toLowerCase())


   //       })

   //    }).catch((error)=>{
   //       setLoading(false)
   //       console.log(error);
   //    })
   // },[searchQuery])


   // const columcwithAprovedButton=[
   //    ...pendingList,
      
   //       {
   //          name: 'Approve membership',
   //          cell: (row) => (
   //             <button form='addcourt' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >Done </button>

   //          ),
   //          sortable: false,
   //        },

      
   // ]



   const columnWithApprovedButton = [
      ...pendingList,
      {
        name: 'Approve membership',
        cell: (row) => (
          <div style={{ display: 'flex' }}>
            <AproveMembership advid={row.advocate?.id}/>
            <MemberShipReject advid={row.advocate?.id}/>
          </div>
        ),
        sortable: false,
      },
    ];


    const columnWithStatusButton = [
      ...ActiveList,
      {
        name: 'Membership status',
        selector:  (row) => row?.approval_status,
      },
    ];
    
    
    


   useEffect(() => {
      
      
    
      if (activeTab === 'Activemembers') {
         let activeAdvocate = `association/advocates-active-in-association`;
        async function fetchData() {
          try {
            const response = await axiosInstance.get(activeAdvocate, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }).then((response)=>{
               console.log(response.data);
               setActiveAdvocateassociation(response.data)
            }).catch((error)=>{
               console.log(error);
            })

            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      } else if (activeTab === 'pending') {
        async function fetchlawfirm() {
         let pendinlist=`association/advocates-waiting-for-approval`
         if(associationdata){
            pendinlist+=`/${associationdata}`
         }
          try {
            // Your logic for fetching data when activeTab is 'pending'
            // Update 'endpoint' and handle the API call here
             await axiosInstance.get(pendinlist,{
               headers:{
                  'Authorization':`Bearer ${token}`
               }
            }).then((response)=>{
               console.log(response.data);
               setPendingAdvocate(response.data)
            }).catch((error)=>{
               console.log(error);
            })
    
            // Process the response and update state if needed
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchlawfirm();
      } else if (activeTab === 'membershipExpired') {
         let expiredadvocate = `association/advocates-active-in-association`;
         if(associationdata){
            expiredadvocate+=`/${associationdata}`
         }
        async function fetchMembershipExpired() {
         
          try {
            await axiosInstance.get(expiredadvocate,{
               headers:{
                  'Authorization':`Bearer ${token}`
               }
            }).then((response)=>{
               
               const [{ asso_payment_details: { payment_expiry_date },...rest}]=response.data;
               console.log('response data',payment_expiry_date)

               const newdaata=new Date().toLocaleDateString()
               console.log('today',newdaata);
               console.log('response data',response.data);
               if ('2025-11-17' === payment_expiry_date) {
                  alert('fi')
                  setExpiredMembers([...setExpiredMembers, { payment_expiry_date, ...rest }]);
                }
               
               setExpiredMembers(response.data)
            }).catch((error)=>{
               console.log(error);
            })

          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchMembershipExpired();
        
      }
    }, [activeTab,]);
    

   return (

      <>

         <div className='registrar__container'>
            <div className="registrar__container__title">
               <h1 className='text-3xl font-bold'>Advocates</h1>
            </div>
            {/* <div className="registrar__container__search">
         {
           activeTab === 'Activemembers' ?(
             <input type="text" name="" id="" placeholder='Search active members' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" ' />
           ):<input type="text" name="" id="" placeholder='Search pending request' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" '  />
         }
         
       </div> */}

         </div>

         <Nav justify variant="tabs" defaultActiveKey="Activemembers" className='mt-5' onSelect={(selectedKey) => setActiveTab(selectedKey)}>

            <Nav.Item>
               <Nav.Link eventKey="Activemembers">Active members</Nav.Link>
            </Nav.Item>

            <Nav.Item>
               <Nav.Link eventKey="pending">Pending Request</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="membershipExpired">Membership Expired</Nav.Link>
            </Nav.Item>

         </Nav>

         {
            activeTab === 'Activemembers' && (
               <DataTable
                  columns={columnWithStatusButton}
                  data={activeAdvocateassociation}
                  fixedHeader
                  pagination
               />
            )
         }

         {
            activeTab === 'pending' && (
               <DataTable
                  columns={columnWithApprovedButton}
                  data={pendingAdvocate}
                  fixedHeader
                  pagination
               />
            )
         }

{
            activeTab === 'membershipExpired' && (
               <DataTable
                  columns={expirylist}
                  data={pendingAdvocate}
                  fixedHeader
                  pagination
               />
            )
         }



      </>
   )
}

export default AssociationAdvocates

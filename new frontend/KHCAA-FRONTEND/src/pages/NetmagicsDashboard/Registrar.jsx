import React, { useEffect, useState } from 'react'
import '../../styles/netmagics/registrar.scss'
import DataTable from 'react-data-table-component'
import AddRegistrar from '../../components/netmagicsdashboard/registrarcomponent/AddRegistrar'
import EditRegistrar from '../../components/netmagicsdashboard/registrarcomponent/EditRegistrar'
import DeleteRegistrar from '../../components/netmagicsdashboard/registrarcomponent/DeleteRegistrar'
import SuspendRegistrar from '../../components/netmagicsdashboard/registrarcomponent/SuspendRegistrar'
import { Columns } from '../../constants/netmagics/RegistrarData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import ImpersonateRegistrar from '../../components/netmagicsdashboard/impersonate-registrar/ImpersonateRegistrar'

function Registrar() {

   const [registrardata, setRegistrardata] = useState();
   const [searchQuery, setSearchQuery] = useState('')
   const token = localStorage.getItem('accessToken')
   const impid=localStorage.getItem('ImpersonateId')

   // useEffect(() => {

   //    axiosInstance.get('/registrar/list-registrar',{
   //       headers:{
   //          'Authorization':`Bearer ${token}`
   //       }
   //    })
   //       .then((response) => {

   //          const filteredRegistrar = response.data.filter(registrar =>{
   //             return registrar.name.toLowerCase().includes(searchQuery.toLowerCase());
   //          })
   //          setRegistrar(filteredRegistrar)

   //       })
   //       .catch((error) => {
   //          console.error(error);
   //       });
   // }, [searchQuery]);
// let responseData
//    useEffect(() => {
//       axiosInstance.get('/registrar/list-registrar', {
//          headers: {
//             'Authorization': `Bearer ${token}`
//          }
//       }).then(response => {
//          responseData=response.data
//         console.log("responsedata",responseData);
        
//         if(responseData&&responseData.court&&responseData.user){
//          const {
//            court: { name: courtName, type: courtType },
//            user: { name: userName, email: userEmail }
//          } = responseData
   
//          console.log("courtname", courtName);
//          console.log("courtType", courtType);
//          console.log("username", userName);
//          console.log("email", userEmail);

//         }else{
//          console.log('no court');
//         }
        
//        })
//        .catch(error => {
//          console.error(error);
//        });
         
       
    
//    }, [])

// useEffect(() => {
//    axiosInstance.get('/registrar/list-registrar', {
//      headers: {
//        'Authorization': `Bearer ${token}`
//      }
//    }).then(response => {
//       console.log(response.data);
//      const responseData = response.data;
//      console.log("Response Data:", responseData);
 
//      if (responseData && responseData.court && responseData.user) {
//        const {
//          court: { name: courtName, type: courtType },
//          user: { name: userName, email: userEmail }
//        } = responseData;
 
//        console.log("courtname", courtName);
//        console.log("courtType", courtType);
//        console.log("username", userName);
//        console.log("email", userEmail);
 
//        // Perform any operations dependent on court and user data here
//      } else {
//        console.log('Court or user data not found');
//      }
//    })
//    .catch(error => {
//      console.error(error);
//    });
//  }, []);
 
useEffect(()=>{
   axiosInstance.get('/registrar/list-registrar', {
           headers: {
             'Authorization': `Bearer ${token}`
           }
         }).then((response)=>{
               console.log('normal response',response.data);
               const filteredRegistrar=response.data.filter(registrar=>{
                  return registrar.user.name.toLowerCase().includes(searchQuery.toLowerCase())
               })
                setRegistrardata(filteredRegistrar)
         })

},[searchQuery])


 
 
 
 
 
  

   const columnWithButtons = [

      ...Columns, {
         name: 'Edit',
         cell: (row) => (
            <EditRegistrar Registrarid={row?.id} setRegistrar={setRegistrardata} />
         ),
         sortable: false,
      }, {
         name: 'Delete',
         cell: (row) => (
            <DeleteRegistrar Registrarid={row?.id} setRegistrar={setRegistrardata} />
         ),
         sortable: false
      }, {
         name: 'Suspend',
         cell: (row) => (
            <SuspendRegistrar Registrarid={row?.id} setRegistrar={setRegistrardata} />
         ),
         sortable: false
      },
      {

         name: 'impersonate',
         selector: (row) => (
            
            <ImpersonateRegistrar regid={row?.user?.id} regname={row?.user?.name}/>
            
         ),
         sortable: false,
      },
   ]
   
   return (
      <>
         <div className='registrar__container'>
            <div className="registrar__container__title">
               <h1 className='text-3xl font-bold'>Registrar</h1>
               {/* <p>{token}</p> */}
            </div>
            <div className="registrar__container__search">
               {/* <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  ' /> */}

               <input
                  type="text"
                  name=""
                  id=""
                  placeholder="search court"

                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
               
               {/* <i class='bx bx-search-alt'></i> */}
            </div>
            <div >
               <AddRegistrar setRegistrar={setRegistrardata} registrardata={registrardata} />
            </div>


         </div>
         <div className="list-court" style={{ marginTop: '50px' }}>

            <DataTable
               columns={columnWithButtons}
               data={registrardata}
               fixedHeader
               pagination>

            </DataTable>


         </div>
      </>
   )
}

export default Registrar

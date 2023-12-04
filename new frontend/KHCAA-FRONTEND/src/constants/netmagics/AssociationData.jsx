// import EditAssociation from "../../components/netmagicsdashboard/association-component/EditAssociation";
import axiosInstance from '../../configs/axios/AxiosVonfiguration'

// const handleButtonClick = (row) => {
//   axios.patch(`association/suspend-association/${row.id}`, {
//     id: row.id,
//     status: row.status ? 'Suspended' : 'Active' 
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });
// }


// const handleSuspend=async(userid,is_suspend)=>{
//     const token=localStorage.getItem('accessToken')
//   try {
//     if(is_suspend){
//       await axiosInstance.patch(`association/suspend-association/${userid}`,{
//         headers:{
//           'Authorization':`Bearer ${token}`
//         }
//       }).then((response)=>{
//             console.log(response.data);
//           }).catch((error)=>{
//             console.log(error);
//           })
//     }else{
//       await axiosInstance.patch(`association/suspend-association/${userid}`).then((response)=>{
//         console.log(response.data);
//       }).catch((error)=>{
//         console.log(error);
//       })
//     }
    
//   } catch (error) {
//      console.log(error);
//   }
//   }
// const handleSuspend = async (userid, is_suspend) => {
//   const token = localStorage.getItem('accessToken');
//   const headers = {
//     'Authorization': `Bearer ${token}`
//   };

//   try {
//     await axiosInstance.patch(`association/suspend-association/${userid}`, null, {
//       headers: headers
//     }).then((response) => {
//       console.log(response.data);
//       window.location.reload()
//     }).catch((error) => {
//       console.log(error);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }


export const Columns = [
    {
      name: 'Association Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
        name: 'Court',
        selector: (row) => row.court.name,
        sortable: true,
    },
    // {
    //   name: 'Edit',
    //   selector: (row) => (
    //     // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //     //   Edit
    //     // </button>
    //     <EditAssociation/>
    //   ),
    //   sortable: false, 
    // },


    // {
    //   name: 'Suspend',
    //   selector: (row) => (
    //     <button className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //       Delete
    //     </button>
    //   ),
    //   sortable: false,
    // },

    // {
    //   name: 'Suspend',
    //   selector: (row) => (
    //     <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
    //       {row.is_suspend ? 'suspend' : 'unsuspend'}
    //     </button>
    //   ),
    //   sortable: false,
    // },
    // {
    //   name: 'impersonate',
    //   selector: (row) => (
    //     <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //      <i class='bx bx-right-top-arrow-circle fs-4 bx-tada bx-rotate-90 fs-6' ></i>
    //     </button>
    //   ),
    //   sortable: false,
    // },
    

  ];
  







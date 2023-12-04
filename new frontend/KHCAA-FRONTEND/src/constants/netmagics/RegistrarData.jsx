// const handleSuspend=async(userid,is_suspend)=>{
    
//   try {
//     if(is_suspend){
//       await axiosInstance.patch(`association/suspend-association/${userid}`).then((response)=>{
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

export const Columns = [
    {
      name: 'Name',
      selector: (row) => row?.user?.name ,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) =>row?.user?.email,
      sortable: true,
    },
    {
        name: 'Court',
        selector: (row) =>row?.court?.name,
        sortable: true,
    },
  //   {
  //     name: 'Court',
  //     selector: (row) =>row.court ?row.court.name :'',
  //     sortable: true,
  // },
    {
      name: 'Phone',
      selector: (row) =>row?.phone,
      sortable: true,
  },
    // {
    //   name: 'Edit',
    //   selector: (row) => (
    //     <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //       Edit
    //     </button>
    //     // <AddRegistrar/>
        
    //   ),
    //   sortable: false, 
    // },


    // {
    //   name: 'Delete',
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
    //     <button  className={`bg-red-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
    //       Suspend
    //     </button>
    //   ),
    //   sortable: false,
    // },
    


  ];

// export const Columns = [
//     {
//       name: 'Registrar Name',
//       selector: (row) => row.phone, // Access user's name
//       sortable: true,
//     },
//     {
//       name: 'Court Name',
//       selector: (row) => row.date_of_birth
//       , // Access court's name
//       sortable: true,
//     },
//     {
//       name: 'Court Type',
//       selector: (row) => row.court.type, // Access court's type
//       sortable: true,
//     },
//     {
//       name: 'Edit',
//       selector: (row) => (
//         <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
//           Edit
//         </button>
//       ),
//       sortable: false,
//     },
//     {
//       name: 'Suspend',
//       selector: (row) => (
//         <button className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
//           Delete
//         </button>
//       ),
//       sortable: false,
//     },
//     {
//       name: 'Suspend',
//       selector: (row) => (
//         <button className={`bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
//           Suspend
//         </button>
//       ),
//       sortable: false,
//     },
//   ];
  
  
//   onClick={()=>handleSuspend(row.id,row.is_suspend)}






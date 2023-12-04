
export const Columns = [
    {
      name: 'Court',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Court Type',
      selector: (row) => row.type,
      sortable: true,
    },
    // {
    //   name: 'Edit',
    //   selector: (row) => (
    //     <EditCourt 
    //     courtId={row.id}/>
    //   ),
    //   sortable: false, 
    // },
    // {
    //   name: 'Delete',
    //   selector: (row) => (
    //     <button onClick={()=>handleDelete(row.id)} className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //       Delete
    //     </button>
    //   ),
    //   sortable: false,
    // },
  ];
  // const handleDelete =async(userid)=>{
  //   await axiosInstance.delete(`/association/court/delete-court/${userid}`).then((response)=>{
  //     console.log(response);
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }
  
 

 
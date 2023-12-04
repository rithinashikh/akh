import EditRegistrar from '../../components/netmagicsdashboard/registrarcomponent/EditRegistrar'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
export const Columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Specialized in',
      selector: (row) => row.specialization,
      sortable: true,
    },
    {
        name: 'Phone no',
        selector: (row) => row.contact_no,
        sortable: true,
      },
      {
        name: 'Status',
        selector: (row) => row.is_suspend ? "Suspended" : "Active",
        sortable: true,
      },
      {
        name: 'impersonate',
        selector: (row) => (
          <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
           <i class='bx bx-right-top-arrow-circle bx-tada bx-rotate-90 fs-6' ></i>
          </button>
        ),
        sortable: false,
      },
    // {
    //   name: 'edit',
    //   selector: (row) => (
    //     <EditRegistrar/>
    //   ),
    //   sortable: false, 
    // },
    // {
    //   name: 'Delete',
    //   selector: (row) => (
    //     <button onClick={()  => handleDelete(row.id)} className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //       Delete
    //     </button>
    //   ),
    //   sortable: false,
    // },
  ];
  

export const Data = [
    {
        id: 1,
        name: 'arun',
        age: '30',
        email: 'abc@gmail.com',
        phone:'9645655408'
       
       
    },
    {
      id: 1,
      name: 'appu',
      age: '32',
      email: 'abd@gmail.com',
      phone:'9288451044'
        
       
    }
];


// const handleDelete= async (userid)=>{
//   await axiosInstance.delete(`registrar/delete-registrar/${userid}`).then((response)=>{
//     console.log(response);
//   }).catch((error)=>{
//     console.log(error);
//   })
// }
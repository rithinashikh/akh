
import EditAdvocate from '../../components/netmagicsdashboard/advocate-component/EditAdvocate';
export const Columns = [
    {
      name: 'Name',
      selector: (row) => row.user.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.user.email,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
      sortable: true,
    },
    {
        name: 'Specialization',
        selector: (row) => row.specialization,
        sortable: true,
      },
    // {
    //   name: 'Edit',
    //   selector: (row) => (
    //     <EditAdvocate/>
    //   ),
    //   sortable: false, 
    // },
    // {
    //   name: 'Delete',
    //   selector: (row) => (
    //     <button className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //       delete
    //     </button>
    //   ),
    //   sortable: false,
    // },
    
  ];
  
// export const Data = [
//     {
//         id: 1,
//         name: 'arun',
//         email: 'arun@gmail.com',
//         specialization: 'criminal',

//     },
//     {
//         id: 2,
//         name: 'namitha',
//         email: 'namitha@gmail.com',
//         specialization: 'criminal',
        
       
//     },
//     {
//         id: 3,
//         name: 'siju',
//         email: 'siju@gmail.com',
//         specialization: 'criminal',
       
       
//     },
//     {
//         id: 4,
//         name: 'rithin',
//         email: 'rithin@gmail.com',
//         specialization: 'criminal',
       
       
//     },
//     {
//         id: 5,
//         name: 'akhil',
//         email: 'akhil@gmail.com',
//         specialization: 'criminal',
       
       
//     },
//     {
//         id: 6,
//         name: 'vaisakh',
//         email: 'vaisakh@gmail.com',
//         specialization: 'criminal',
       
//     }
       
//     ,
//     {
//         id: 7,
//         name: 'varun',
//         email: 'varun@gmail.com',
//         specialization: 'criminal',
       
       
//     },
//     {
//         id: 7,
//         name: 'kishan',
//         email: 'kishan@gmail.com',
//         specialization: 'criminal',
       
       
//     },
//     {
//         id: 7,
//         name: 'amal',
//         email: 'amal@gmail.com',
//         specialization: 'criminal',
      
       
//     },
//     {
//         id: 7,
//         name: 'amal',
//         email: 'amal@gmail.com',
//         specialization: 'criminal',
      
       
//     },
//     {
//         id: 7,
//         name: 'amal',
//         email: 'amal@gmail.com',
//         specialization: 'criminal',
      
//     }
// ];

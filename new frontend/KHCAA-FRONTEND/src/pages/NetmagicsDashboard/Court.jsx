import React, { useEffect,useState} from 'react'
import '../../styles/netmagics/court.scss'
import AddCourt from '../../components/netmagicsdashboard/courtcomponent/AddCourt'
import DataTable from 'react-data-table-component'
import { Columns} from '../../constants/netmagics/CourtData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import EditCourt from '../../components/netmagicsdashboard/courtcomponent/EditCourt'
import DeleteCourt from '../../components/netmagicsdashboard/courtcomponent/DeleteCourt'
import StartImpersonate from '../../components/netmagicsdashboard/impersonate/StartImpersonate'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import axios from 'axios'
function Court() {
const [court , setCourt]=useState([])
const [searchQuery,setSearchQuery]=useState('')
const [errorMessage,setErrorMessage]=useState('')



// const [searchResults, setSearchResults] = useState([]);
//  const Url = 'http://127.0.0.1:8000'
//  const token = localStorage.getItem('access');  
// const axiossecond= axios.create({
//    baseURL:Url,
//    headers: {
//       Authorization: bearerToken,
//       "Content-Type": 'application/json'
//    }
   
// ,})

// useEffect(()=>{
//    axiossecond.get('/association/court/list').then((response)=>{
//       console.log("court list",response.data);
      
//       setCourt(response.data)
      
//    }).catch((error)=>{
//       console.log(error);
//    })

// },[])


// const token=localStorage.getItem('access')
// console.log(token);
//  useEffect(()=>{
//    axiosInstance.get('/association/court/list',{
//      headers:{
//       'Authorization': `Bearer ${token}`
//      }
//    }).then((response)=>{
//       setCourt(response.data)
//    }).catch((error)=>{
//       console.log(error);
//    })
//  },[])


// this is my last seted dataa//
// console.log("search query",searchQuery);
// useEffect(() => {

// const token = localStorage.getItem('accessToken');
   
//    axiosInstance.get('/association/court/list', {
//       headers: {
//          'Authorization': `Bearer ${token}`
//       }
//    })
//    .then((response) => {
//       setCourt(response.data);
//    })
//    .catch((error) => {
//       console.log(error);
//    });
// },[]);

//end of this useeffect//
 const token = localStorage.getItem('accessToken');

useEffect(() => {
  
 
   axiosInstance.get('/association/court/list', {
     headers: {
       'Authorization': `Bearer ${token}`
     }
   })
   
   .then((response) => {
     const filteredCourts = response.data.filter(court => {
       return court.name.toLowerCase().includes(searchQuery.toLowerCase());
     });
     setCourt(filteredCourts);
     
   })
   .catch((error) => {
     console.log(error);
     console.log('error message', error.response.data.detail);
     if (error.response) {
       setErrorMessage(error.response.data.detail);
       toast.error(error.response.data.detail); 
     } else {
       setErrorMessage('An error occurred while fetching data.');
     }
     
     
   });
 }, [searchQuery]);


// {
//    name: 'Edit',
//    selector: (row) => (
//      <EditCourt 
//      courtId={row.id}/>
//    ),
//    sortable: false, 
//  }


//  const columnsWithEditButton=[
//    ...Columns,
//    {
//       selector: (row) => (
//          <EditCourt 
//          courtId={row.id}
//          Court={court}
//          setCourt={setCourt}
//          />
//        ),
//    }
//  ];


const columnsWithEditButton = [
   ...Columns,
   {
     name: 'Edit',
     cell: (row) => (
       <EditCourt courtId={row.id} Court={court} setCourt={setCourt} />
     ),
     sortable: false,
   },{
      name:'Delete',
      cell:(row)=>(
          <DeleteCourt courtId={row.id} setCourt={setCourt}/>
      ),
      sortable:false
   },
  //  {
  //   name: 'impersonate',
  //   selector: (row) => (
      
  //     <StartImpersonate courtdata={row.id} courtname={row.name}/>
  //   ),
  //   sortable: false,
  // },
 ];

// const columnsWithEditButqton = [
//     ...Columns,
//     {
//       name: 'Edit',
//       cell: (row) => (
         
//         <button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={() => handleEditClick(console.log(row.id))}>Edit</button>
//       ),
//     },
//   ];


return (
    <>
    <div className='court__container'>
     <div className="court__container__title">
        <h1 className='text-3xl font-bold'>Court</h1>
     </div>
     <div className="court__container__search">
        <input type="text" name="search" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ' onChange={(e) => setSearchQuery(e.target.value)}/>
        {/* <i class='bx bx-search-alt'></i> */}
        
     </div>
     <div >
    
      
        <AddCourt Court={court} setCourt={setCourt}/> 
      
        
     </div>

    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
    {/* <DataTable
     columns={Columns}
     data={court}
     fixedHeader
     pagination>

     </DataTable> */}
     
    <DataTable
  columns={columnsWithEditButton}
  data={court}
  fixedHeader
  pagination
/> 

{/* <DataTable
  columns={columnsWithEditButton}
  data={searchResults}
  fixedHeader
  pagination
/> */}

    
  </div>
  </>
  )
}

export default Court

import React,{useEffect,useState} from 'react';
import '../../styles/netmagics/registrar.scss';
import DataTable from 'react-data-table-component';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import { Columns} from '../../constants/netmagics/AdvocateData';
import ImpersonateAdvocate from '../../components/netmagicsdashboard/impersonate-advocate/ImpersonateAdvocate';

function Advocates() {
  const [data, setData] = useState([]);
  const [searchQuery,setSearchQuery]=useState('')
 const token=localStorage.getItem('accessToken')
  useEffect(() => {
    
    axiosInstance.get('/advocates/list',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
      .then(response => {
        console.log('this is advocate response',response.data);
        const filteredadvocates=response.data.filter(advocate=>{
          return advocate.user.name.toLowerCase().includes(searchQuery.toLowerCase())
        })
        setData(filteredadvocates);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [searchQuery]);

  const columnsWithImpersonateButton=[
    ...Columns,
    {
      name: 'impersonate',
      selector: (row) => (
        // <button className="bg-blue-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        //  <i class='bx bx-right-top-arrow-circle bx-tada bx-rotate-90' ></i>
        // </button>
        <ImpersonateAdvocate advid={row.user.id} advname={row.user.name}/>
      ),
      sortable: false,
    },
  ]


  // const handleEditClick = (id) => {
  //   // Handle the edit button click here
  //   // You can send the ID to the backend for editing
  //   axiosInstance.put(`/advocates/edit/${id}`)
  //     .then(response => {
  //       // Handle the successful edit response (if needed)
  //     })
  //     .catch(error => {
  //       console.error('Error editing data:', error);
  //     });
  // };

  // const columnsWithEditButton = [
  //   ...Columns,
  //   {
  //     name: 'Edit',
  //     cell: (row) => (
         
  //       <button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={() => handleEditClick(console.log(row.id))}>Edit</button>
  //     ),
  //   },
  // ];

  return (
    <>
      <div className='registrar__container'>
        {/* Your title and search input */}
        <div className="court__container__title">
        <h1 className='text-3xl font-bold'>Advocates</h1>
     </div>
     <div className="court__container__search">
        <input type="text" name="search" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ' onChange={(e)=>setSearchQuery(e.target.value)} />
        {/* <i class='bx bx-search-alt'></i> */}
        
     </div>
      </div>
      <div className="list-court" style={{ marginTop: '50px' }}>
        <DataTable
          columns={columnsWithImpersonateButton}
          data={data} 
          fixedHeader
          pagination
        />
      </div>
    </>
  );
}

export default Advocates;

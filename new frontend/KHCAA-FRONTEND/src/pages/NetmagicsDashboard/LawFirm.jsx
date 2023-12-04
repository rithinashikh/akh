import React ,{useEffect,useState,useMemo }from 'react'
import '../../styles/netmagics/lawfirm.scss'

import DataTable from 'react-data-table-component'
// import AddRegistrar from '../../components/netmagicsdashboard/registrarcomponent/AddRegistrar'
// import { Columns,Data} from '../../constants/netmagics/RegistrarData'
import {Columns} from '../../constants/netmagics/LawfirmData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
function LawFirm() {
   const [lawfirm , setLawfirm] = useState([])

   const token=localStorage.getItem('accessToken')
   const fetchData = useMemo(() => {
      return async () => {
        try {
          const response = await axiosInstance.get('/lawfirm/list',{
            headers:{
              'Authorization':`Bearer ${token}`
            }
          });
          return response.data;
        } catch (error) {
          console.error(error);
          return [];
        }
      };
    }, []);


   // useEffect(()=>{
   //    axiosInstance.get('/lawfirm/list').then((response)=>{
   //       console.log("hhhhhhhhhhhhhhhhhhiiiiiiii",response.data);
   //       setLawfirm(response.data)
   //    }).catch((error)=>{
   //       console.log(error);
   //    })
   
   // },[lawfirm ])
   useEffect(() => {
      // Call the memoized fetchData function to fetch data
      fetchData()
        .then((data) => {
          console.log("Data fetched:", data);
          setLawfirm(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, [fetchData]);
   


  return (
    <>
    <div className='lawfirm__container'>
     <div className="lawfirm__container__title">
        <h1 className='text-3xl font-bold'>Lawfirm</h1>
     </div>
     <div className="lawfirm__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
    
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={Columns}
     data={lawfirm}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
  )
}

export default LawFirm
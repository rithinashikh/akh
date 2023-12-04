import React, { useEffect, useState } from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
import { Columns } from '../../constants/association/NormalAdminData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import LoadingAnimation from '../../components/loader/LoadingAnimation'

// import AddNormalAdmin from '../../components/associationDashboard/normaladmincomponent/AddNormalAdmin'
function NormalAdmin() {
  const[admin,setAdmin]=useState([])
  const [loading, setLoading] = useState(false);


const ImpersonateId=localStorage.getItem('id')
const associationdata=ImpersonateId ? localStorage.getItem('adminid'):null;
const associationToken=localStorage.getItem('associationToken')
const token=associationToken ? localStorage.getItem('associationToken') : localStorage.getItem('accessToken');

//   useEffect(async()=>{
//  let endpoint='/association/association-super-admin/list'
//  if(associationdata){
//   endpoint+=`/${associationdata}`
//  }
//     await axiosInstance.get(endpoint,{
//       headers:{
//         'Authorization':`Bearer ${token}`
//       }
//     }).then((response)=>{
//       console.log('response data for association admin',response.data);
//     }).catch((error)=>{
//       console.log(error);
//     })
//   },[])


  useEffect(() => {
    const fetchData = async () => {
      let endpoint = '/association/association-super-admin/list';
      
      if (associationdata) {
        endpoint += `/${associationdata}`;
      }

      try {
        setLoading(true)
        const response = await axiosInstance.get(endpoint, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const [firstItem] = response.data; 
      const { user } = firstItem;
      const dateJoined = new Date(user.date_joined).toLocaleDateString();

      // console.log('Destructured user data:', user.name);
      // console.log('Destructured user data:', user.email);
      // console.log('Destructured user data:', user.date_joined);

console.log('response data',response.data)
setAdmin([...response.data],dateJoined);
      } catch (error) {
        
        console.log(error);
      }
        setLoading(false);
      
    };

    fetchData();

   
  }, []);

console.log('this is user',admin)

  return (
    <div>                                           
      <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>ADMIN</h1>
        
     </div>
     
     <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     {/* <div >
        <AddNormalAdmin/>
     </div> */}
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
                    
     {loading && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <LoadingAnimation color="#3498db" loading={loading} size={15} />
        </div>
      )}

     <DataTable
     columns={Columns}
     data={admin}
     fixedHeader
     pagination>
     </DataTable>
     

  </div>
  </>
    </div>
  )
}

export default NormalAdmin

import React,{useEffect,useState} from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
// import { Columns } from '../../constants/association/MembershipData'
// import {Columns} from '../../constants/association/AssociationData'
import { adminColumns } from '../../constants/registrardatas/AssociationData'
// import {Columns} from '../../constants/netmagics/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
// import AddMemberShip from '../../components/associationDashboard/membership-plan/AddMemberShip'
import LoadingAnimation from '../../components/loader/LoadingAnimation'
function Admin() {

const ImpersonateId=localStorage.getItem('id')
const registrarId = ImpersonateId ? localStorage.getItem('RegistrarId') : null;
let reg_token=localStorage.getItem('RegistrarToken')
const token = reg_token ? localStorage.getItem('RegistrarToken') :localStorage.getItem('accessToken');



const [admin,setAdmin]=useState([])
const [loading, setLoading] = useState(false);


useEffect(()=>{
const fetchData= async()=>{
  try {
    setLoading(true)
    let endpoint='registrar/assocition-admins'
    if(registrarId){
      endpoint+=`/${registrarId}`
    }
    const response=await axiosInstance.get(endpoint,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    
    const responseData = response.data || [];

    // Extracting user.name, user.email, and association.name
    const extractedData = responseData.map(item => ({
      userName: item.user.name,
      userEmail: item.user.email,
      associationName: item.association.name
    }));

    
    console.log('extractedData', extractedData);
    // Logging the extracted data
    console.log('extractedData',extractedData);
    setAdmin(extractedData)
  } catch (error) {
    console.log(error);
  }finally{
    setLoading(false)
  }
}

  fetchData()
},[])

  

  


  return (
    <div>
      <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>Admins</h1>
     </div>
     
     {/* <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
     </div> */}
 
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     {loading && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <LoadingAnimation color="#3498db" loading={loading} size={15} />
        </div>
      )}

     <DataTable
     columns={adminColumns}
     data={admin}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
    </div>
  )
}

export default Admin
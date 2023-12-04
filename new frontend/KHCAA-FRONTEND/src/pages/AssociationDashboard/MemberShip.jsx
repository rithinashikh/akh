import React,{useEffect,useState} from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
import { Columns } from '../../constants/association/MembershipData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import AddMemberShip from '../../components/associationDashboard/membership-plan/AddMemberShip'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUserToken } from '../../store/slice/AuthSlice'
import EditMemberShip from "../../components/associationDashboard/membership-plan/EditMembership";
import DeleteMembership from '../../components/associationDashboard/membership-plan/DeleteMembership'
import LoadingAnimation from '../../components/loader/LoadingAnimation'

function Membership() {

const [membership , setMembership]=useState([]);
const [searchQuery,setSearchQuery]=useState('');
const [loading, setLoading] = useState(false);


let association_token=useSelector(selectUserToken)
localStorage.setItem('associationToken',association_token)

const ImpersonateId=localStorage.getItem('id')
const associationdata=ImpersonateId ? localStorage.getItem('adminid'):null;
const associationToken=localStorage.getItem('associationToken')
const token=associationToken ? localStorage.getItem('associationToken') : localStorage.getItem('accessToken');

// const ImpersonateId=localStorage.getItem('id')
// const membershipdata=ImpersonateId ? localStorage.getItem('adminid') :null;

// let association_token=useSelector(selectUserToken)

// const token=association_token ? localStorage.getItem('accessToken') :localStorage.getItem('accessToken')


  useEffect(()=>{
    setLoading(true)
    let endpoint='/association/membership-plan/list/asso'
    if(associationdata){
      endpoint +=`/${associationdata}`
    }
   axiosInstance.get(endpoint,{
    headers:{
      'Authorization':`Bearer ${token}`
    }
   }).then((response)=>{
    setLoading(false)
    console.log(response.data);
    const filteredmembership=response.data.filter(membership=>{
      return membership.unit_of_plan.toLowerCase().includes(searchQuery.toLowerCase());
    })
    setMembership(filteredmembership);
   }).catch((error)=>{
    setLoading(false)
    console.log(error);
   })

  },[searchQuery])

  const columnWithButton=[
    ...Columns,
    {
      name: 'Edit',
      cell: (row) => (
        // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleEdit}>
        //   Edit
        // </button>
        <EditMemberShip  membershipId={row.id} setMembership={setMembership} />
        
      ),
      sortable: false, 
    },
    {
      name: 'Delete',
      cell: (row) => (
        // <button  className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
        //   Delete
        // </button>
        <DeleteMembership membershipid={row.id} setMembership={setMembership}/>
      ),
      sortable: false,
    },
  ]
  
  return (
    <div>
      <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>Membership</h1>
        
         
        
     </div>
     <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='Search membership...' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  ' onChange={(e)=>setSearchQuery(e.target.value)}/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div >
        <AddMemberShip  setMembership={setMembership}/>
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>

     {loading && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <LoadingAnimation color="#3498db" loading={loading} size={15} />
        </div>
      )}
     
     <DataTable
     columns={columnWithButton}
     data={membership}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
    </div>
  )
  }
  
  export default Membership
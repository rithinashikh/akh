import React,{useEffect,useState} from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
// import { Columns } from '../../constants/association/MembershipData'
// import {Columns} from '../../constants/association/AssociationData'
import { Columns } from '../../constants/registrardatas/AssociationData'
// import {Columns} from '../../constants/netmagics/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
// import AddMemberShip from '../../components/associationDashboard/membership-plan/AddMemberShip'
import Addassociation from '../../components/registrarDashboard/addassociation/Addassociation'
import AddAssociationAdmin from '../../components/registrarDashboard/add-admin/AddAssociationAdmin'
import SuspendAssociation from '../../components/registrarDashboard/suspend-association/SuspendAssociation'
import LoadingAnimation from '../../components/loader/LoadingAnimation'
function Association() {


const [membership , setMembership]=useState([]);
const [association,setAssociation]=useState([]);
const [searchQuery,setSearchQuery]=useState('')
// const registrarid=localStorage.getItem('RegistrarId')
// const ImpersonateId=localStorage.getItem('ImpersonateId')
// const registrarId = ImpersonateId ? localStorage.getItem('RegistrarId') : null;

const sessionId = localStorage.getItem('sessionId')
const [loading, setLoading] = useState(false);
const ImpersonateId=localStorage.getItem('id')
const registrarId = ImpersonateId ? localStorage.getItem('RegistrarId') : null;

// console.log(registrarId,  '  RegistrarId');
 
  // useEffect(()=>{
  //  axiosInstance.get('/association/membership-plan/list').then((response)=>{
  //   console.log(response.data);
  //   setMembership(response.data)
  //  }).catch((error)=>{
  //   console.log(error);
  //  })

  // },[])
  let reg_token=localStorage.getItem('RegistrarToken')
const token = reg_token ? localStorage.getItem('RegistrarToken') :localStorage.getItem('accessToken');

// const token=localStorage.getItem('RegistrarToken')

  // useEffect(()=>{
  //   axiosInstance.get(`/association/list/${registrarId}`,{
  //     headers:{
  //       'Authorization':`Bearer ${token}`
  //     }
  //   }).then((response)=>{
  //     console.log("response.data",response.data);
  //     setAssociation(response.data)
  //   })
   
  // },[])

  useEffect(()=>{

    let endpoint = 'registrar/associations';
    if (registrarId) {
        endpoint += `/${registrarId}`;
    }
    setLoading(true);
    axiosInstance.get(endpoint ,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((response)=>{
      setLoading(false);
      console.log('this is association response',response.data)
      const filteredassociation=response.data.filter(association =>{
        return association.name.toLowerCase().includes(searchQuery.toLowerCase())
      })
      
      setAssociation(filteredassociation)
 })

},[searchQuery])

  const ColumnsWithbuttons=[
    ...Columns,
    {
      name: 'Suspend',
      selector: (row) => (
        // <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
        //   {row.is_suspend ? 'suspend' : 'unsuspend'}
        // </button>
        <SuspendAssociation associationid={row.id} is_suspend={row.is_suspend} setAssociation={setAssociation}/>
      ),
      sortable: false,
    },
    // {
    //   name: 'impersonate',
    //   selector: (row) => (
    //     <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //      <i class='bx bx-right-top-arrow-circle fs-4 bx-tada bx-rotate-90 fs-6' ></i>
    //     </button>
    //   ),
    //   sortable: false,
    // },
    {
      name: 'Admin',
      cell: (row) => (
        <div>
          <AddAssociationAdmin associationid={row.id} association={association} setAssociation={setAssociation}/> 
        </div>
      ),
      sortable: false,
    }
    
      // {
      //   name: 'Suspend',
      //   selector: (row) => (
      //     <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
      //       {row.is_suspend ? 'suspend' : 'unsuspend'}
      //     </button>
      //   ),
      //   sortable: false,
      // },
      // {
      //   name: 'impersonate',
      //   selector: (row) => (
      //     <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
      //      <i class='bx bx-right-top-arrow-circle fs-4 bx-tada bx-rotate-90 fs-6' ></i>
      //     </button>
      //   ),
      //   sortable: false,
      // },
    
  ]


 

  
  // setAssociation((prev) => {
  //     const updateRegistrar = [...prev, ];
  //     return updateRegistrar;
  //   });

  // const updatedAssociation = response.data;

   
    // setAssociations((prevAssociations) => [...prevAssociations, updatedAssociation]);
  
  
  return (
    <div >
      <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>Association</h1>
     </div>
     <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  ' onChange={(e)=>setSearchQuery(e.target.value)}/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div>
        <Addassociation setAssociation={setAssociation}/>
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     {loading && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <LoadingAnimation color="#3498db" loading={loading} size={15} />
        </div>
      )}
     
     <DataTable
     columns={ColumnsWithbuttons}
     data={association}
     fixedHeader
     pagination>

     </DataTable>
     {/* {
                sessionId ? <button className='shadow bg-red-500 mt-3 text-end hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded border-none' ><i class='bx bxs-log-in-circle bx-tada' ></i></button> : ''
              } */}

  </div>
  </>
    </div>
  )
}

export default Association
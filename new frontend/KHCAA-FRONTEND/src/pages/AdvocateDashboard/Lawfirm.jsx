import React, { useEffect, useState } from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
// import { Columns} from '../../constants/association/MembershipData'
import { columns } from '../../constants/Advocate/LawfirmData'
import {memberColumn} from '../../constants/Advocate/LawfirmData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import AddLawfirm from '../../components/advocateDashboard/Add-lawfirm/AddLawfirm'
import DeleteLawfirm from '../../components/advocateDashboard/Add-lawfirm/DeleteLawfirm'
import EditLawfirm from '../../components/advocateDashboard/Add-lawfirm/EditLawfirm'
import Nav from 'react-bootstrap/Nav';
import LoadingAnimation from '../../components/loader/LoadingAnimation'
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
function Lawfirm() {
 
  // const token=localStorage.getItem('advocateToken')
  const [activeTab,setActiveTab]=useState('createdFirm')
  const [lawfirm, setLawfirm] = useState([]);
  const [memberfirm,setMemberfirm]=useState([])
  const [loading,setLoading]=useState(false)
const [searchQuery,setSearchQuery]=useState('')


  const impersonateId=localStorage.getItem('id')

  const advocateData=impersonateId ? localStorage.getItem('advid'):null

  const advtoken =localStorage.getItem('advocateToken')

  const token=advtoken ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')
  
  const columnWithButton = [
    ...columns,
    {
      
     name :'dashboard',
      cell: (row) => (
        
        <Link to={`/advocate/layout/nested-route/${row.lawfirm?.id}`}>
        <button  className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded">
          redirect to lawfirm
        </button>
        
       
        </Link>
        

        // <Link to="/advocate/lawfirmdashboard">
        //   <button>Go to Lawfirm Dashboard</button>
        // </Link>
      ),
      sortable: false,
    },
    {
      name: 'Edit',
      cell: (row) => (
        
        <EditLawfirm lawfirmid={row.lawfirm?.id} setLawfirm={setLawfirm} />


      ),
      sortable: false,
    },
    {
      name: 'Delete',
      cell: (row) => (
        <DeleteLawfirm
          firmid={row.lawfirm?.id}
          setLawfirm={setLawfirm}
        />

      ),
      sortable: false,
    },

  ]

 

  // useEffect(() => {
  //   if(activeTab==='createdFirm'){
  //     async function fetchData() {
  //       try {
  //         const response = await axiosInstance.get('/advocates/own-lawfirm',{
  //           headers:{
  //             'Authorization':`Bearer ${token}`
  //           }
  //         }); 
  //         console.log("own lawfirm",response.data);
  //         setLawfirm(response.data);
  //       } catch (error) {
  
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  
  //     fetchData();
  //   },[activeTab])

  //   }

  useEffect(() => {

    
    if (activeTab === 'createdFirm') {
      let ownendpoint = '/advocates/own-lawfirm';

if (advocateData) {
  ownendpoint += `/${advocateData}`;
}

async function fetchData() {
  try {
    setLoading(true);

     await axiosInstance.get(ownendpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response)=>{
      console.log('this is lawfirm data',response.data);
      setLawfirm(response.data)
    })

   
    // Filter the results based on the search query
    
    // setLawfirm(filteredLawfirms);

    // console.log("own lawfirm datas", filteredLawfirms);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
}
      fetchData();
    }else{
      async function fetchlawfirm(){
        
        try {
          setLoading(true)
          let endpoint = '/advocates/advocate-lawfirm';
          if(advocateData){
            endpoint+=`/${advocateData}`
          }
          await axiosInstance.get(endpoint,{
            headers:{
              'Authorization':`Bearer ${token}`
            }
          }).then((response)=>{
            setLoading(false)
            console.log("memberfirm",response.data);
            setMemberfirm(response.data)
            
          })
        } catch (error) {
          setLoading(false)
          console.log(error);
        }finally{
          setLoading(false)
        }
      }
      
      fetchlawfirm()
     
    }
  }, [activeTab,setSearchQuery]);
  
  // useEffect(()=>{
  //   async function fetchlawfirm(){
  //     console.log('start 2');
  //     try {
  //      const response= await axiosInstance.get('/advocates/advocate-lawfirm',{
  //         headers:{
  //           'Authorization':`Bearer ${token}`
  //         }
  //       }).then((response)=>{
  //         console.log("membership dataaaassss",response.data);
  //         setMemberfirm(response.data)
          
  //       })
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   console.log('start 3');
  //   fetchlawfirm()
  //   console.log('start 4');
  // },[])
  console.log("Search Query", searchQuery);



console.log('activeTab',activeTab);

  return (

    
   
      <>
     
        <div className='registrar__container'>
          <div className="registrar__container__title">
            <h1 className='text-3xl font-bold'>Lawfirm</h1>
          </div>
          {
    activeTab === 'createdFirm' ? (
      <div className="registrar__container__search">
        <input
          type="text"
          placeholder='search lawfirm'
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          onChange={(e) => setSearchQuery(e.target.value)}/>
      </div>
    ) : (
      <div className="registrar__container__search">
        <input
          type="text"
          placeholder='search joined member'
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        />
      </div>
    )
  }
          
          <div >
           
            <AddLawfirm setLawfirm={setLawfirm} />
          </div>

        </div>
        <Nav justify variant="tabs" defaultActiveKey="createdFirm" className='mt-5' onSelect={(selectedKey) =>setActiveTab(selectedKey)}>

      <Nav.Item>

        <Nav.Link eventKey="createdFirm">Created Firm</Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="member">Member </Nav.Link>
      </Nav.Item>
      
    </Nav>
    {loading && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <LoadingAnimation color="#3498db" loading={loading} size={15} />
        </div>
      )}
    {
      activeTab === 'createdFirm' &&(
        <DataTable
        columns={columnWithButton}
        data={lawfirm}/>
      )
    }

    {
      activeTab === 'member' &&(
        <DataTable
        columns={memberColumn}
        data={memberfirm}/>
      )
      
    }
      </>
   
  )
}

export default Lawfirm

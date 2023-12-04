import Nav from 'react-bootstrap/Nav';
import {useState,useEffect} from 'react'
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import {memberColumn,pendingList} from '../../constants/lawfirm/AdvocateData'
import DataTable from 'react-data-table-component'
import Withdraw from '../../components/advocateDashboard/withdraw-invitation/Withdraw'

function Memberslist() {
  const [activeTab,setActiveTab]=useState('Activemembers')
  const [activemembers,setActivemembers]=useState([])
  const [pendingrequest,setPendingRequest]=useState([])
  const [searchQuery,setSearchQuery]=useState('')
  const [searchresult,setSearchResult]=useState('')


 const lawfirm_id=localStorage.getItem('lawfirm_id')
  const impersonateId=localStorage.getItem('id')
  const advocateData=impersonateId ? localStorage.getItem('advid'):null
  const advtoken =localStorage.getItem('advocateToken')
  const token=advtoken ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')

  
  // const dataToDisplay = activeTab === 'createdFirm' ? activemembers : pendingrequest;

  const columnwithPendingButton=[
    ...pendingList,
    {
      name: 'Withdraw-Request',
      cell: (row) => (
        <Withdraw advid={row.advocate?.id} setPendingRequest={setPendingRequest}/>
      ),
      sortable: false,
    },
  ]

  useEffect(() => {
    console.log('searchQuery',searchQuery);
    let endpoint = `/lawfirm/active-advocates/${lawfirm_id}`;
    if(advocateData){
      endpoint+=`/${advocateData}`
    }
    if (activeTab === 'Activemembers') {
      async function fetchData() {
        try {
           await axiosInstance.get(endpoint, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then((response)=>{
            console.log('response.data testing lawfirm',response.data.lawfirm);
            // setActivemembers(response.data);
            const filteradvocate=response.data.filter(advocate=>{
              return advocate.advocate.user.name.toLowerCase().includes(searchQuery.toLowerCase());
            })
            
            setActivemembers(filteradvocate)
          }) 
          
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }else{
      async function fetchlawfirm(){
        
        try {
          let endpoint = `/lawfirm/pending-advocates/${lawfirm_id}`;
          if(advocateData){
            endpoint+=`/${advocateData}`
          }
         await axiosInstance.get(endpoint,{
            headers:{
              'Authorization':`Bearer ${token}`
            }
          }).then((response)=>{
            const pending=response.data.filter(advocate=>{
              return advocate.advocate.user.name.toLowerCase().includes(searchresult.toLowerCase())
            })
            console.log("request pending members",response.data);
            setPendingRequest(pending)
            
          })
        } catch (error) {
          console.log(error);
        }
      }
      
      fetchlawfirm()
     
    }
  }, [activeTab,searchQuery,searchresult]);

  console.log();

  return (
    <>
     
        <div className='registrar__container'>
          <div className="registrar__container__title">
            <h1 className='text-3xl font-bold'>Members</h1>
          </div>
          <div className="registrar__container__search">
            {
              activeTab === 'Activemembers' ?(
                <input type="text" name="" id="" placeholder='Search active members' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" ' onChange={(e)=>setSearchQuery(e.target.value)} />
              ):<input type="text" name="" id="" placeholder='Search pending request' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" ' onChange={(e)=>setSearchResult(e.target.value)} />


            }
            {/* <input type="text" name="" id="" placeholder='search active members' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" ' onChange={(e)=>setSearchQuery(e.target.value)} /> */}

            
            
          </div>
          
        </div>
        <Nav justify variant="tabs" defaultActiveKey="Activemembers" className='mt-5' onSelect={(selectedKey) =>setActiveTab(selectedKey)}>

      <Nav.Item>

        <Nav.Link eventKey="Activemembers">Active members</Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="pending">Pending</Nav.Link>
      </Nav.Item>
      
    </Nav>

    {
      activeTab==='Activemembers' &&(
        <DataTable
        columns={memberColumn}
        data={activemembers}
        fixedHeader
        pagination>
   
        </DataTable>

      )
    }

{
      activeTab === 'pending' &&(
        <DataTable
        columns={columnwithPendingButton}
        data={pendingrequest}
        fixedHeader
        pagination
        />
      )
      
    }

          
      </>
   
  );
}

export default Memberslist;

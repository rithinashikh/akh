import React, { useEffect, useState } from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
// import { Columns } from '../../constants/association/MembershipData'
import { Columns } from '../../constants/lawfirm/AdvocateData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import InviteAdvocate from '../../components/lawfirmDashboard/invite-advocate/InviteAdvocate'
function AdvocateList() {

  const [advocate, setAdvocate] = useState('')

  // const ImpersonateId = localStorage.getItem('id')
  // const advocateid = ImpersonateId ? localStorage.getItem('advid') : null;
  // const adv_token = localStorage.getItem('advocateToken');
  // const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken');

  const impersonateId = localStorage.getItem('id')
  const advocateData = impersonateId ? localStorage.getItem('advid') : null
  const advtoken = localStorage.getItem('advocateToken')
  const token = advtoken ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')
  const lawfirm_id=localStorage.getItem('lawfirm_id')

  const [searchQuery,setSearchQuery]=useState('')


  useEffect(() => {

    let endpoint=`/advocates/list-to-invite-lawfirm/${lawfirm_id}`;
    // if(advocateData){
    //   endpoint+=`/${advocateData}`
    // }
    axiosInstance.get(endpoint,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((response) => {
      console.log('wwwwwwwww' , response.data)
      const filteradvocate=response.data.filter(advocate=>{
        return advocate.user.name.toLowerCase().includes(searchQuery.toLowerCase());
      })
      
        setAdvocate(filteradvocate)
      
      
    }).catch((error) => {
      console.warn(error);
    })
  }, [searchQuery])


  const columnWithInvitebutton = [
    ...Columns,
    {
      name: 'Invite',
      selector: (row) => (
        // <button  className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        //   Invite
        // </button>
        <InviteAdvocate adv_id={row.id} />



      ),
      sortable: false,
    },
  ]


  return (
    <div>
      <>
        <div className='registrar__container'>
          <div className="registrar__container__title">
            <h1 className='text-3xl font-bold'>Advocate</h1>
          </div>
          <div className="registrar__container__search">
            <input type="text" name="" id="" placeholder='search advocate' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  ' onChange={(e)=>setSearchQuery(e.target.value)} />
            {/* <i class='bx bx-search-alt'></i> */}
          </div>


        </div>
        <div className="list-court" style={{ marginTop: '50px' }}>

          <DataTable
            columns={columnWithInvitebutton}
            data={advocate}
            fixedHeader
            pagination>

          </DataTable>


        </div>
      </>
    </div>
  )
}

export default AdvocateList
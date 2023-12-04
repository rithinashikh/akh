import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Columns } from '../../constants/Advocate/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import PaymentModal from '../../components/advocateDashboard/payment/PaymentModal'
import '../../styles/advocates/association.scss'
import LoadingAnimation from '../../components/loader/LoadingAnimation'
function Association() {

  const [association, setAssociation] = useState([])
  const [searchQuery,setSearchQuery]=useState('')

  const ImpersonateId = localStorage.getItem('id')
  const advocateid = ImpersonateId ? localStorage.getItem('advid') : null;
  const adv_token = localStorage.getItem('advocateToken');
  const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken');
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    setLoading(true)
    let endpoint = '/advocates/list-associations';
    if (advocateid) {
      endpoint += `/${advocateid}`
    }
    axiosInstance.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      const filteredAssociation=response.data.filter(assoc=>{
        return assoc.name.toLowerCase().includes(searchQuery.toLowerCase());
      })
      setAssociation(filteredAssociation)
      setLoading(false)
      console.log('response data', response.data);
      
    }).catch((error) => {
      setLoading(false)
      console.log(error);
    });
  }, [searchQuery])

  const columnWithAssociation = [
    ...Columns,
    {
      name: 'Membership',
      cell: (row) => (
        // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        //   Take membership
        // </button>
        <PaymentModal associationid={row.id} />

      ),
      sortable: false,

    }
  ]
  return (
    <>
      <div className='association__container'>
        <div className="lawfirm__container__title">
          <h1 className='text-3xl font-bold'>Association</h1>
        </div>
        <div className="lawfirm__container__search">
          <input type="text" name="" id="" placeholder='search association' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" ' onChange={(e) => setSearchQuery(e.target.value)} />
          {/* <i class='bx bx-search-alt'></i> */}
        </div>


      </div>
      <div className="list-court" style={{ marginTop: '50px' }}>
      {loading && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <LoadingAnimation color="#3498db" loading={loading} size={15} />
        </div>
      )}

        <DataTable
          columns={columnWithAssociation}
          data={association}
          fixedHeader
          pagination>

        </DataTable>


      </div>
    </>
  )
}



export default Association

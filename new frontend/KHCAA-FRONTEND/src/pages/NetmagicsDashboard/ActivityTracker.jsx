// import React,{useEffect, useState} from 'react'
// import '../../styles/netmagics/activity-tracker.scss'
// import DataTable from 'react-data-table-component'
// import  { Columns, data } from '../../constants/netmagics/ActivityData'
// import axiosInstance from '../../configs/axios/AxiosVonfiguration'
// function ActivityTracker() {
// const token=localStorage.getItem('accessToken')

// const [tracker,setTracker]=useState([])

//   useEffect(()=>{
//     axiosInstance.get('/netmagics/activity-tracker/list',{
//       headers:{
//         'Authorization':`Bearer ${token}`
//       }
//     }).then((response)=>{
//       console.log("response data",response.data);
//       setTracker(response.data)
//     })
//   },[])
  
//   return (
//    <>
  
//    <DataTable
//    columns={Columns}
//    data={tracker}
//    fixedHeader
//    pagination
//    />

   
//    </>
//   )
// }

// export default ActivityTracker

import React,{useEffect, useState} from 'react'
import '../../styles/netmagics/activity-tracker.scss'
import DataTable from 'react-data-table-component'
import  { Columns, data } from '../../constants/netmagics/ActivityData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'

function ActivityTracker() {
  const token = localStorage.getItem('accessToken');
  const [tracker, setTracker] = useState([]);

  useEffect(() => {
    axiosInstance.get('/netmagics/changes-made', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      console.log("response data", response.data);
      setTracker(response.data);
    });
  }, []);

  return (
    <>
      <DataTable
        columns={Columns}
        data={tracker}
        fixedHeader
        pagination
      />
    </>
  );
}

export default ActivityTracker;

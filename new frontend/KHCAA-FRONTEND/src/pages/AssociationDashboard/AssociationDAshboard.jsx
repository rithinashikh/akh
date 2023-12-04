import React, { useEffect, useState } from 'react'
import AssociationDashboardWrapper, { AssociationDashboardWrapperMain, AssociationDashboardWrapperRight } from '../../components/associationDashboard/associationdashboardwrapper/AssociationDashboardWrapper'
// import {data} from '../../constants'
import data from '../../constants/association/data'
import Box from '../../components/netmagicsdashboard/Box/Box'
import SummaryBox, { SummaryBoxSpecial } from '../../components/netmagicsdashboard/summarybox/SummaryBox'
import {colors} from '../../constants'
import { Bar } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUserToken } from '../../store/slice/AuthSlice'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import OverallList from '../../components/netmagicsdashboard/overall-list/OverallList'
// import RevenueList from '../../components/AssociationDashboard/revenue-list/RevenueList'
import RevenueList from '../../components/associationDashboard/revenueList/RevenueList'

import axiosInstance from '../../configs/axios/AxiosVonfiguration'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)



function AssociationDAshboard() {

  const sessionId=localStorage.getItem('sessionId')
  const navigate=useNavigate()
  const associationid=localStorage.getItem('id')
  const token =localStorage.getItem('accessToken')

 let association_token=useSelector(selectUserToken)
 
localStorage.setItem('associationToken',association_token)


const ImpersonateId=localStorage.getItem('id')
const associationdata=ImpersonateId ? localStorage.getItem('adminid'):null;
const associationToken=localStorage.getItem('associationToken')
const associationtoken=associationToken ? localStorage.getItem('associationToken') : localStorage.getItem('accessToken');

const[adminlength,setAdminLength]=useState('')
const[membershiplength,setMembershipLength]=useState('')


  const handleStop= async()=>{
    try {
      await axiosInstance.post(`/netmagics/admin/impersonate/stop/${associationid}/${sessionId}`,{},{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      }).then((response)=>{
        console.log(response.data)
        localStorage.removeItem('id')
        localStorage.removeItem('sessionId')
        localStorage.removeItem('adminid')
        navigate('/netmagics/layout/association')
      }).catch((error)=>{
        console.log(error);
      })

      
    } catch (error) {
      console.log(error);
    }
  }

 useEffect( ()=>{

  const fetchData= async()=>{
    try {

      // first api call for gettinh association admins length
      let endpoint='/association/association-super-admin/list'
      if(associationdata){
        endpoint+=`/${associationdata}`
      }
      
      const adminResponse= await axiosInstance.get(endpoint,{
        headers:{
          'Authorization':`Bearer ${associationtoken}`
        }
      })
      
      setAdminLength(adminResponse.data.length);


      //second api call for membership length

      let membershipendpoint='/association/membership-plan/list/asso'
      if(associationdata){
        membershipendpoint+=`/${associationdata}`
      }
      const membershipResponse=await axiosInstance.get(membershipendpoint,{
        headers:{
          'Authorization':`Bearer ${associationtoken}`
        }
      })
      setMembershipLength(membershipResponse.data.length)
      
    } catch (error) {
      console.log(error);
    }
  
  }

 fetchData()
 },[])

 //admin length

 data.summary[0].value=adminlength;
 const total=100;
 const adminpercentage=(adminlength/total)*100;
 data.summary[0].percent=adminpercentage;

 //membershiplength

 data.summary[1].value=membershiplength;
 const membershipPercentage=(membershiplength/total)*100
 data.summary[1].percent=membershipPercentage;


 //bar chart

 data.revenueSummary.chartData.data=[adminlength,membershiplength]


 //insights

 data.revenueByChannel[0].value=adminlength;
 data.revenueByChannel[1].value=membershiplength
 data.revenueByChannel[2].value=adminlength
 data.revenueByChannel[3].value=membershiplength

  return (
    <div>
     <AssociationDashboardWrapper>
      <AssociationDashboardWrapperMain>
       <div className="row" style={{marginTop:'100px'}}>
        <div className="col-8 col-md-12">
          <div className="row">
            {
              data.summary.map((item,index)=>(
                <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                  {/* <Box/> */}
                  <SummaryBox item={item}/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-4 hide-md">
          <SummaryBoxSpecial item={data.revenueSummary} />
        </div>
       </div>
       {
          sessionId ? <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded border-none' onClick={handleStop}>stop</button >:''
        }
      
      </AssociationDashboardWrapperMain>
      < AssociationDashboardWrapperRight>
        
        
        
        <div className="title mb">Insights</div>
        <div className="mb">
          <RevenueList/>
        </div>
      </ AssociationDashboardWrapperRight>
     </AssociationDashboardWrapper>
     
    </div>
  )
}

export default  AssociationDAshboard


const RevenueByMonthsChart = () => {
  const chartOptions={
    responsive:true,
    maintainAspectRatio:false,
    scales: {
      xAxes:{
        grid:{
          display:false,
          drawBorder:false
        }
      },
      yAxes:{
        grid:{
          display:false,
          drawBorder:false
        }
      }
    },
    plugins:{
      legend:{
        display:false
      },
      title:{
        display:false
      }
    },
    elements:{
      bar:{
        backgroundColor:colors.orange,
        borderRadius:20,
        borderSkipped:'bottom'
      }
    }
  }

  const chartData={
    labels:data.revenueByMonths.labels,
    datasets:[
      {
        label:'remove',
        data:data.revenueByMonths.data
      }
    ]
  }
  return (
    <>
    <div className="title mb">

    </div>
    <div>
           <Bar options={chartOptions} data={chartData} height={`300px`}/>
    </div>
    </>
  )
}



// <div className="row">
// <div className="col-12">
//            <Box>
// <RevenueByMonthsChart/>
//            </Box>
// </div>
// </div>

// <div className="title mb">overall</div>
//         <div className="mb">
//           <OverallList/>
//         </div>
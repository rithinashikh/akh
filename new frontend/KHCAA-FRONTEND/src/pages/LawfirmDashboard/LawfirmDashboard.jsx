import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../../components/netmagicsdashboard/dashboard-wrapper/DashboardWrapper'
// import {data} from '../../constants'
// import GraphData from '../../constants/netmagics/GraphData'
import Data from '../../constants/lawfirm/Data'
import Box from '../../components/netmagicsdashboard/Box/Box'
import SummaryBox, { SummaryBoxSpecial } from '../../components/netmagicsdashboard/summarybox/SummaryBox'
import {colors} from '../../constants'
import { Bar } from 'react-chartjs-2'
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
import RevenueList from '../../components/netmagicsdashboard/revenue-list/RevenueList'
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


function LawfirmDashboard() {

  const {lawfirmId} = useParams();
  console.log('lawfirm_id',lawfirmId);

  useEffect(() => {
    if (lawfirmId && !['advocates', 'members', 'notification'].includes(lawfirmId)) {
      localStorage.setItem('lawfirm_id', lawfirmId);
    }
  }, [lawfirmId]);
  

  const displayId = (lawfirmId && !['advocates', 'members', 'notification'].includes(lawfirmId))
  ? lawfirmId
  : (localStorage.getItem('lawfirm_id') || 'Not Specified');

  
  const impersonateId=localStorage.getItem('id')
  const advocateData=impersonateId ? localStorage.getItem('advid'):null
  const advtoken =localStorage.getItem('advocateToken')
  const token=advtoken ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')

  const [advlength,setadvlength]=useState('')
  const [activemembersLength,setActivemembersLength]=useState('')
  const [pendingRequestLength,setPendingRequestLength]=useState('')
  const [notficationLength,setNotificationLength]=useState('')

  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const lawfirm_id=localStorage.getItem('lawfirm_id')
        //first api call for getting the advocate length
        let endpoint=`/advocates/list-to-invite-lawfirm/${lawfirm_id}`
        // if(advocateData){
        //   endpoint+=`/${advocateData}`
        // }
        const advocateResponse= await axiosInstance.get(endpoint,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        console.log('this is advocate response',advocateResponse.data);
        setadvlength(advocateResponse.data.length)

        //second api call for getting the active members length

        let activemembers=`/lawfirm/active-advocates/${lawfirm_id}`
        const activemembersResponse=await axiosInstance.get(activemembers,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        setActivemembersLength(activemembersResponse.data.length  )

        //third api call for getting the pending request

        let pendingrequest=`/lawfirm/pending-advocates/${lawfirm_id}`
        const pendingresponse=await axiosInstance.get(pendingrequest,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        setPendingRequestLength(pendingresponse.data.length)

        //fourth api call for getting notification list

        let notification=`/lawfirm/notification/list/${lawfirm_id}`
        // if(advocateData){
        //   notification+=`/${advocateData}`
        // }
        const notficationResponse=await axiosInstance.get(notification,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        setNotificationLength(notficationResponse.data.length)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  },[])

  Data.summary[0].value = advlength;
  const total=100;
  const advpercentage=(advlength/total)*100;
  Data.summary[0].percent = advpercentage;

  Data.summary[1].value=activemembersLength
  const activepercent=(activemembersLength/total)*100
  Data.summary[1].percent=activepercent

  
  Data.summary[2].value=pendingRequestLength
  const pendingpercent=(pendingRequestLength/total)*100
  Data.summary[2].percent=pendingpercent

  
  Data.summary[3].value=notficationLength
  const notificationpercent=(notficationLength/total)*100
  Data.summary[3].percent=notificationpercent


  Data.revenueSummary.chartData.data = [advlength,activemembersLength,pendingRequestLength,notficationLength];

  Data.revenueByChannel[0].value=advlength;
  Data.revenueByChannel[1].value=activemembersLength;
  Data.revenueByChannel[2].value=pendingRequestLength;
  Data.revenueByChannel[3].value=notficationLength;




  return (
    <div>
      {/* LawfirmDashboard : {displayId} */}

      <div>
     <DashboardWrapper>
      <DashboardWrapperMain>
       <div className="row" style={{marginTop:'100px'}} >
        <div className="col-8 col-md-12">
          
       
          
          <div className="row">
            {
              Data.summary.map((item,index)=>(
                <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                 
                  <SummaryBox item={item} />
                  
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-4 hide-md">
          <SummaryBoxSpecial item={Data.revenueSummary} />
        </div>
       </div>
       {/* <div className="row">
        <div className="col-12">
                   <Box>
   <RevenueByMonthsChart/>
                   </Box>
        </div>
       </div> */}
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        {/* <div className="title mb">overall</div> */}
        <div className="mb">
          {/* <OverallList/> */}
        </div>
        <div className="title mb">Insights</div>      
        <div className="mb">
          <RevenueList/>
        </div>
      </DashboardWrapperRight>
     </DashboardWrapper>
    </div>
    </div>
  )
}

export default LawfirmDashboard

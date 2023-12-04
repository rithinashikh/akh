import React,{useContext, useEffect, useState} from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../../components/netmagicsdashboard/dashboard-wrapper/DashboardWrapper'
// import {data} from '../../constants'
import GraphData from '../../constants/netmagics/GraphData'
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


function Dashboard() {

  const [courtLength,setCourtLength]=useState('')
  const [registrarLength,setRegistrarLength]=useState('')
  const [associationLength,setAssociationLength]=useState('')
  const [advocateLength,setAdvocateLength]=useState('')
  const token = localStorage.getItem('accessToken');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // first api call for getting court length//
        const courtResponse = await axiosInstance.get('/association/court/list',{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        });
       
        setCourtLength(courtResponse.data.length);

        //second api call for getting registrar length //

        const registrarresponse= await axiosInstance.get('/registrar/list-registrar',{
          headers:{
            'Authorization' :`Bearer ${token}`
          }
        })
       
        setRegistrarLength(registrarresponse.data.length)

        //third api call for getting association length//

        const associationresponse=await axiosInstance.get('/association/list',{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        });
       
        setAssociationLength(associationresponse.data.length)


        //fourth api call for getting advocate list//

        const advocateresponse=await axiosInstance.get('/advocates/list',{
          headers:{
            'Authorization' :`Bearer ${token}`
          }
        })
        console.log('this is advocate response',advocateresponse.data.length);
        setAdvocateLength(advocateresponse.data.length)

      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  //court length//
  GraphData.summary[0].value = courtLength;
  const total=100;
  const Courtpercentage=(courtLength/total)*100;
  GraphData.summary[0].percent = Courtpercentage;

  //registrar length//
  GraphData.summary[1].value = registrarLength;
  const Registrarpercentage=(registrarLength/total)*100;
  GraphData.summary[1].percent = Registrarpercentage;

  //association length//
  GraphData.summary[2].value = associationLength;
  const Associationpercentage=(associationLength/total)*100;
  GraphData.summary[2].percent = Associationpercentage;


  //advocate length//
  GraphData.summary[3].value=advocateLength
  const advocatePercentage=(advocateLength/total)*100;
  GraphData.summary[3].percent=advocatePercentage


  //netmagics overall view//
  GraphData.revenueSummary.chartData.data = [courtLength, registrarLength,associationLength,advocateLength];


  //insight elements//

  GraphData.revenueByChannel[0].value=courtLength;
  GraphData.revenueByChannel[1].value=registrarLength;
  GraphData.revenueByChannel[2].value=associationLength;
  GraphData.revenueByChannel[3].value=advocateLength;




  

 

  // const rowStyle={
  //   display:'flex',
  //   alignItems:'center',
  //   justifyContent:'center'
  // }
  

  return (
    <div>
     <DashboardWrapper>
      <DashboardWrapperMain>
       <div className="row mt-5" >
        <div className="col-8 col-md-12">
          
       
          
          <div className="row">
            {
              GraphData.summary.map((item,index)=>(
                <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                 
                  <SummaryBox item={item} />
                  
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-4 hide-md">
          <SummaryBoxSpecial item={GraphData.revenueSummary} />
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
  )
}

export default Dashboard


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
    labels:GraphData.revenueByMonths.labels,
    datasets:[
      {
        label:'remove',
        data:GraphData.revenueByMonths.GraphData
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














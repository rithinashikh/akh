import React, { useEffect, useState } from 'react'
import RegistrarDashboardWrapper, { RegistrarDashboardWrapperMain, RegistrarDashboardWrapperRight } from '../../components/registrarDashboard/registrardashboardwrapper/RegistrarDashboardWrapper'
// import { data } from '../../constants'
import data from '../../constants/registrardatas/data'
// import Box from '../../components/netmagicsdashboard/Box/Box'
import SummaryBox, { SummaryBoxSpecial } from '../../components/netmagicsdashboard/summarybox/SummaryBox'
import { colors } from '../../constants'
import { Bar } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import ImpersonateAlert from '../../components/registrarDashboard/impersonate-alert/ImpersonateAlert'

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
// import RevenueList from '../../components/netmagicsdashboard/revenue-list/RevenueList'
import RevenueList from '../../components/registrarDashboard/revenueList/RevenueList'
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
  const ImpersonateId = localStorage.getItem('id')
  const registrarId = ImpersonateId ? localStorage.getItem('RegistrarId') : null;
  let reg_token = localStorage.getItem('RegistrarToken')
  const token = reg_token ? localStorage.getItem('RegistrarToken') : localStorage.getItem('accessToken');

  const [AssociationLength, setAssociationLength] = useState('')

  const [suspendedAssociations, setSuspendedAssociations] = useState([]);
  const [activeAssociations, setActiveAssociations] = useState([]);
  const [adminLength, setAdminLength] = useState('')

  // const impid = localStorage.getItem('ImpersonateId')
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  const sessionId = localStorage.getItem('sessionId')
  // console.log('sessionId',sessionId);
  const RegistrarId = localStorage.getItem('id')

  const handlestop = () => {
    axiosInstance.post(`/netmagics/admin/impersonate/stop/${RegistrarId}/${sessionId}`, {}, {

      headers: {
        'Authorization': `Bearer ${accessToken}`

      }

    }).then((response) => {
      console.log(response.data);
      localStorage.removeItem('id')
      localStorage.removeItem('sessionId')
      localStorage.removeItem('RegistrarId')
      navigate('/netmagics/layout/registrar')
    }).catch((error) => {
      console.log(error);
    })


  }
  useEffect(() => {
    const fetchData = async () => {

      try {
        //first api call for getting association length
        let endpoint = 'registrar/associations'
        if (registrarId) {
          endpoint += `/${registrarId}`
        }
        const associationResponse = await axiosInstance.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const extractedData = associationResponse.data.map(item => ({
          name: item.name,
          isSuspended: item.is_suspend
        }));

        // Update state with the extracted data
        setAssociationLength(associationResponse.data.length);

        // Filter associations based on suspension status
        const suspendedAssociations = extractedData.filter(item => item.isSuspended);
        const activeAssociations = extractedData.filter(item => !item.isSuspended);

        // Set different states based on suspension status
        setSuspendedAssociations(suspendedAssociations);
        setActiveAssociations(activeAssociations);


        setAssociationLength(associationResponse.data.length)



        //second api call for getting association admin length

        let adminednpoint = 'registrar/assocition-admins';
        if (registrarId) {
          adminednpoint += `/${registrarId}`
        }
        const adminresponse = await axiosInstance.get(adminednpoint, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log('this is admin length', adminresponse.data.length);
        setAdminLength(adminresponse.data.length)

      } catch (error) {
        console.log(error);
      }

    }

    fetchData()
  }, [])

  data.summary[0].value = AssociationLength;

  // association length
  const total = 100;
  const Associationpercentage = (AssociationLength / total) * 100;
  data.summary[0].percent = Associationpercentage;


  //association admins

  data.summary[1].value = adminLength;
  const AssociationAdmin=(adminLength/total)*100;
  data.summary[1].percent=AssociationAdmin;

  //suspended association

  data.summary[2].value = suspendedAssociations.length
  const suspendedAssociationPercentage = (suspendedAssociations.length / total) * 100
  data.summary[2].percent = suspendedAssociationPercentage

  //active association
  data.summary[3].value = activeAssociations.length
  const activeAssociationPercentage = (activeAssociations.length / total) * 100
  data.summary[3].percent = activeAssociationPercentage


  data.revenueSummary.chartData.data = [AssociationLength, suspendedAssociations.length, suspendedAssociations.length, activeAssociations.length];

  data.revenueByChannel[0].value = AssociationLength;
  data.revenueByChannel[1].value = '2';
  data.revenueByChannel[2].value = suspendedAssociations.length;
  data.revenueByChannel[3].value = activeAssociations.length;









  return (
    <div>
      <RegistrarDashboardWrapper>

        <RegistrarDashboardWrapperMain>
          
          <div className="row mt-5">
            <div className="col-8 col-md-12">
              <div className="row">
                {
                  data.summary.map((item, index) => (
                    <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                      {/* <Box/> */}
                      <SummaryBox item={item} />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-4 hide-md">
              <SummaryBoxSpecial item={data.revenueSummary} />
              {/* {
                sessionId ? <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded border-none' onClick={handlestop}>stop</button> : ''
              } */}

            </div>  
          </div>

        </RegistrarDashboardWrapperMain>
        < RegistrarDashboardWrapperRight>

          <div className="title mb">Insights</div>
          <div className="mb">
            <RevenueList />
          </div>
          {
            sessionId ? <ImpersonateAlert /> : ''
          }
        </ RegistrarDashboardWrapperRight>
      </RegistrarDashboardWrapper>
    </div>
  )
}

export default Dashboard


const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false
        }
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: 'bottom'
      }
    }
  }

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: 'remove',
        data: data.revenueByMonths.data
      }
    ]
  }
  return (
    <>
      <div className="title mb">

      </div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  )
}


// <div className="row">
//             <div className="col-12">
//               <Box>
//                 <RevenueByMonthsChart />
//               </Box>
//             </div>
//           </div>
// <div className="title mb">overall</div>
// <div className="mb">
//   <OverallList />
// </div>
import React, { useEffect,useState} from 'react'
import images from "./images"
import axiosInstance from '../configs/axios/AxiosVonfiguration'

// const fetchData=()=>{
//     useEffect(()=>{
//         try {
//             const response=axiosInstance.get('/association/court/list')
//             console.log('this is response data for court',response.data);
            
//         } catch (error) {
//             console.log(error);
//         }
//     },[])

// }


// fetchData()




const data = {
    user: {
        name: 'Netmagics',
        img: images.avt
    },
    summary: [
        {
            title: 'admin',
            subtitle: 'Total admin  ',
            value: '1',
            percent: 70
        },
        {
            title: 'Membership',
            subtitle: 'Total membership',
            value: '3',
            percent: 49
        },
        {
            title: 'Advocates',
            subtitle: 'Total Advocates',
            value: '0',
            percent: 38
        },
        {
            title: 'Amount',
            subtitle: 'Total Amount',
            value: '6000',
            percent: 55
        },
        
    ],
    revenueSummary: {
        title: 'Association',
        // value: '1000',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [200, 200, 280, 380, 200, 300, 280, 350]
        }
    },

    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    
    revenueByChannel: [
        {
            title: 'Admin',
            value: 1
        },
        {
            title: 'Membership',
            value: 5
        },
        {
            title: 'Advocates',
            value: 5
        },
        {
            title: 'Revenue',
            value: 5
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}




export default data




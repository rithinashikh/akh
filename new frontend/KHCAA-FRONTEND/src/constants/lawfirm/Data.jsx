import images from "../images"

const Data = {
    user: {
        name: 'lawfirm',
        img: images.avt
    },
    
    summary: [
        {
            title: 'Advocate',
            subtitle: 'Total Advocates',
            value: '',
            percent: ''
        },
        {          
            title: 'ActiveMember',
            subtitle: ' Member in the firm',
            value: '',
            percent: '1'
        },
        {
            title: 'PendingRequest',
            subtitle: 'Total pending request',
            value: '',
            percent: ''
        },
        {
            title: 'Notification',
            subtitle: 'Total Notifications',
            value: '',
            percent: ''
        }
    ],
    revenueSummary: {
        title: 'Courts',
        value: '$678',
        chartData: {
            labels: ['Advocate','Active','Pending','Notfication'],
            data: ['','','','']
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
            title: 'Advocate',
            value: ''
        },
        {
            title: 'Active members',
            value: ''
        },
        {
            title: 'Pending Request',
            value: ''
        },
        {
            title: 'Notification',
            value: ''
        }
    ],
    revenueByMonths: {
        labels: ['','','',''],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }

    
}

export default Data
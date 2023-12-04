import images from "./images"


const data = {
    user: {
        name: 'Registrar',
        img: images.avt
    },
    summary: [
        {
            title: 'Association',
            subtitle: 'Total Association',
            value: '',
            percent: ''
        },
        {
            title: 'Admins',
            subtitle: 'Total Admins',
            value: '2',
            percent: ''
        },
        {
            title: 'Suspended',
            subtitle: 'Associations',
            value: '0',
            percent: ''
        },
        {
            title: 'Unsuspended',
            subtitle: 'Associations',
            value: '2',
            percent: ''
        },
        
    ],
    revenueSummary: {
        title: 'Registrar',
        value: '0000',
        chartData: {
            labels: ['Association','Admins','Suspended','Active'],
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
            title: 'Association',
            value: ''
        },
        {
            title: 'Admins',
            value: ''
        },
        {
            title: 'Suspended Associations',
            value: ''
        },
        {
            title: 'Active Associations',
            value: ''
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }

    
}

export default data
import images from "./images"


const data = {
    user: {
        name: 'Association',
        img: images.avt
    },
    
    summary: [
        {
            title: 'Admin',
            subtitle: 'Total Admins',
            value: '',
            percent: ''
        },
        {
            title: 'Membership',
            subtitle: 'Total Membership',
            value: '',
            percent: ''
        },
        {
            title: 'Advocate',
            subtitle: 'Total Advocate',
            value: '',
            percent: ''
        },
        {
            title: 'Advocates',
            subtitle: 'Total advocates',
            value: '',
            percent: ''
        }
    ],
    revenueSummary: {
        title: 'Association',
        value: '',
        chartData: {
            labels: ['Admins','Membership','Advocate'],
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
            title: 'Admins',
            value: ''
        },
        {
            title: 'Membership',
            value: ''
        },
        {
            title: 'Advocates',
            value: ''
        },
        {
            title: 'Advocates',
            value: ''
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }

    
}

export default data
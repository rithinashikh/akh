
import images from '../../assets/images/avt.jpg'
//"./images"
const GraphData = {
    user: {
        name: 'Netmagics',
        img: images.avt
    },
    summary: [
        {
            title: 'Court',
            subtitle: 'Total Court  ',
            value: '',
            percent: ''
        },
        {
            title: 'Registrar',
            subtitle: 'Total Registrar  ',
            value: '',
            percent: ''
        },
        {
            title: 'Association',
            subtitle: 'Total Association',
            value: '',
            percent: ''
        },
        {
            title: 'Advocate',
            subtitle: 'Total Advocate',
            value: '',
            percent: ''
        },
        
    ],
    revenueSummary: {
        title: 'Netmagics',
        // value: '1000',
        chartData: {
            labels: ['Court','Registrar','Association','Advocate'],
            data: [200,300]
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
            title: 'Court',
            value: ''
        },
        {
            title: 'Registrar',
            value: ''
        },
        {
            title: 'Association',
            value: ''
        },
        {
            title: 'Advocate',
            value: ''
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}




export default GraphData



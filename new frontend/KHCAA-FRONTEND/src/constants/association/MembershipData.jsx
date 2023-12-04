
import axiosInstance from "../../configs/axios/AxiosVonfiguration";
export const Columns = [
    {
      name: 'Type',
      selector: (row) => row.unit_of_plan,
      sortable: true,
    },
    {
      name: 'Duration',
      selector: (row) => row.duration,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: (row) => row.membership_price,
      sortable: true,
    },
    
  ];
  
const handleDelete =async(userid)=>{
  
}


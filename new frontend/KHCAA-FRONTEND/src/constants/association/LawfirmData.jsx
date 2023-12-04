import axiosInstance from "../../configs/axios/AxiosVonfiguration";
import EditLawfirm from '../../components/associationDashboard/associationlawfirm/EditLawfirm'
export const Columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
        name: 'Contact',
        selector: (row) => row.contact_no,
        sortable: true,
      },
      {
        name: 'Estd Date',
        selector: (row) => row.estd_date,
        sortable: true,
      },
    {
      name: 'Edit',
      selector: (row) => (
        // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        //   Edit
        // </button>
        <EditLawfirm 
        lawfirm={row.id}/>
      ),
      sortable: false, 
    },
    {
      name: 'Delete',
      selector: (row) => (
        <button onClick={()=>handleDelete(row.id)} className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      ),
      sortable: false,
    },
    {
      
      name: 'Suspend',
      selector: (row) => (
        <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'green' :'red'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
          {row.is_suspend ? 'suspend' : 'unsuspend'}
        </button>
      ),
      sortable: true,
      
    }
  ];

  const handleSuspend=async(userid,is_suspend)=>{
    
    // // console.log(userid);
    //   await axiosInstance.patch(`/advocates/suspend-advocate/${userid}`).then((response)=>{
    //     console.log(response.data);
    //   }).catch((error)=>{
    //     console.log(error);
    //   })
    try {
      if(is_suspend){
        await axiosInstance.patch(`/lawfirm/suspend-lawfirm/${userid}`).then((response)=>{
              console.log(response.data);
            }).catch((error)=>{
              console.log(error);
            })
      }else{
        await axiosInstance.patch(`/lawfirm/suspend-lawfirm/${userid}`).then((response)=>{
          console.log(response.data);
        }).catch((error)=>{
          console.log(error);
        })
      }
      
    } catch (error) {
       console.log(error);
    }
    }
  
  
  



  const handleDelete = async (userid)=>{
    await axiosInstance.delete(`/lawfirm/delete-lawfirm/${userid}`).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  
  


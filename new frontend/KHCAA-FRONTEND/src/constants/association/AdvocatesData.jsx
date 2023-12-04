import EditAssociationAdvocates from '../../components/associationDashboard/association-advocates/EditAssociationAdvocates'
import axiosInstance from '../../configs/axios/AxiosVonfiguration';

export const Columns = [
    {
      name: 'Name',
      selector: (row) => row.user.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.user.email,
      sortable: true,
    },
    {
        name: 'Phone',
        selector: (row) => row.phone,
        sortable: true,
      },
      {
        name: 'enrolment id',
        selector: (row) => row.enrollment_id,
        sortable: true,
      },

    // {
    //   name: 'Details',
    //   selector: (row) => (
    //     // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //     //   Edit
    //     // </button>
    //     <EditAssociationAdvocates 
    //     advocateId={row.id}/>
    //   ),
    //   sortable: false, 
    // },
    // {
    //   name: 'Suspend',
    //   selector: (row) => (
    //     <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
    //       {row.is_suspend ? 'suspend' : 'unsuspend'}
    //     </button>
    //   ),
    //   sortable: false,
    // },
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
      await axiosInstance.patch(`/advocates/suspend-advocate/${userid}`).then((response)=>{
            console.log(response.data);
          }).catch((error)=>{
            console.log(error);
          })
    }else{
      await axiosInstance.patch(`/advocates/suspend-advocate/${userid}`).then((response)=>{
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
    
  } catch (error) {
     console.log(error);
  }
  }

  export const memberColumn = [
    {
      name: "Name",
      selector: (row) => row.advocate?.user?.name || "",
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.advocate?.user?.email || "",
      sortable: true,
    },
    {
      name: "number",
      selector: (row) => row.advocate?.phone || "",
      sortable: true,
    },
    {
      name: "specialization",
      selector: (row) => row.advocate?.specialization || "",
      sortable: true,
    },
  ];


  export const pendingList = [
    {
      name: 'Advocate name',
      selector: (row) => row?.advocate?.user?.name,
      sortable: true,
    },
    {
      name: 'Enrollment',
      selector: (row) => row?.advocate?.enrollment_id,
      sortable: true,
    },
    {
      name: 'Plan choosed',
      selector: (row) => `${row?.asso_payment_details?.for_payment_plan?.duration} ${row?.asso_payment_details?.for_payment_plan?.unit_of_plan}`,
      sortable: true,
    },  
    {
      name: 'Amount',
      selector: (row) => row?.asso_payment_details?.payment_total_amount_paid,
      sortable: true,
    },  
    {
      name: 'Paid on',
      selector: (row) => row?.asso_payment_details?.payment_done_at,
      sortable: true,
    },  
    
    // {
    //   name: 'Membership status',
    //   selector: (row) => row?.approval_status,
    //   sortable: true,
    // },  
  ];


  export const ActiveList = [
    {
      name: 'Advocate name',
      selector: (row) => row?.advocate?.user?.name,
      sortable: true,
    },
    {
      name: 'Enrollment',
      selector: (row) => row?.advocate?.enrollment_id,
      sortable: true,
    },
    {
      name: 'Plan choosed',
      selector: (row) => `${row?.asso_payment_details?.for_payment_plan?.duration} ${row?.asso_payment_details?.for_payment_plan?.unit_of_plan}`,
      sortable: true,
    },  
    {
      name: 'Amount',
      selector: (row) => row?.asso_payment_details?.payment_total_amount_paid,
      sortable: true,
    },  
    {
      name: 'Paid on',
      selector: (row) => row?.asso_payment_details?.payment_done_at,
      sortable: true,
    },  
    
    // {
    //   name: 'Membership status',
    //   selector: (row) => row?.approval_status,
    //   if (row?.approval_status === 'approve') {
    //     return <IconApprove />;
    //   }
    //   sortable: true,
    // },  
   
  ];


  export const expirylist = [
    {
      name: 'Advocate name',
      selector: (row) => row?.advocate?.user?.name,
      sortable: true,
    },
    {
      name: 'Enrollment',
      selector: (row) => row?.advocate?.enrollment_id,
      sortable: true,
    },
    {
      name: 'Plan choosed',
      selector: (row) => `${row?.asso_payment_details?.for_payment_plan?.duration} ${row?.asso_payment_details?.for_payment_plan?.unit_of_plan}`,
      sortable: true,
    },  
    {
      name: 'Amount',
      selector: (row) => row?.asso_payment_details?.payment_total_amount_paid,
      sortable: true,
    },  
    {
      name: 'Paid on',
      selector: (row) => row?.asso_payment_details?.payment_done_at,
      sortable: true,
    },  
    
    // {
    //   name: 'Membership status',
    //   selector: (row) => row?.approval_status,
    //   if (row?.approval_status === 'approve') {
    //     return <IconApprove />;
    //   }
    //   sortable: true,
    // },  
   
  ];



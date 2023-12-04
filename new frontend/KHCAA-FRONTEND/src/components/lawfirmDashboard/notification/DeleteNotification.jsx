import React from 'react'
import Swal from 'sweetalert2'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';



function DeleteNotification({notificationid,setNotification}) {
    const handleDelete=()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
               await axiosInstance.delete(`lawfirm/notification/delete/${notificationid}`).then((response)=>{
                console.log('response data',response.data);
               }).catch((error)=>{
                console.log(error);
               })
               setNotification((prev)=>{
                return prev.filter((court)=>court.id !== notificationid)
               });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }
  return (
    <div>
<button   className=' bg-red-500 hover:bg-blue-700 text-white font-light py-1 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleDelete} ><i class='bx bx-trash'></i> </button>

    </div>
  )
}

export default DeleteNotification

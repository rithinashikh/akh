import React from 'react'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
import Swal from 'sweetalert2'
function SuspendAssociation({associationid,is_suspend,setAssociation}) {

    
    
    const handleSuspend = async (associationid, is_suspend) => {
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then(async (result) => {
          if (result.isConfirmed) {
            // const token = localStorage.getItem('RegistrarToken');
            let reg_token=localStorage.getItem('RegistrarToken')
            const token = reg_token ? localStorage.getItem('RegistrarToken') :localStorage.getItem('accessToken');
            try {
              
                await axiosInstance.patch(`/association/suspend-association/${associationid}`, {}, {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                }).then((response) => {
                  window.location.reload()
                  console.log("response data", response.data);
                });
                
              Swal.fire('Saved!', '', 'success');
            } catch (error) {
              console.error(error); // Log the error for debugging purposes
              console.error("API Error Response:", error.response); // Log the detailed error response
              Swal.fire('Error occurred while saving changes', '', 'error');
            }
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info');
          }
        });
      
      };

  return (
    <div>
      <button onClick={()=>handleSuspend(associationid,is_suspend)} className={`bg-${is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded`}>
          {is_suspend ? 'unsuspend' : 'suspend'}
      </button>
    </div>
  )
}

export default SuspendAssociation

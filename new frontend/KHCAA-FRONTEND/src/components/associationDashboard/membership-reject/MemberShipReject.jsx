import React from 'react'
import Swal from 'sweetalert2'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function MemberShipReject({advid}) {
    const ImpersonateId = localStorage.getItem('id')
   const associationdata = ImpersonateId ? localStorage.getItem('adminid') : null;
   const associationToken = localStorage.getItem('associationToken')
   const token = associationToken ? localStorage.getItem('associationToken') : localStorage.getItem('accessToken');

    const handleConfirm=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Reject this request",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject !"
          }).then((result) => {
            if (result.isConfirmed) {
                try {
                    const dinkan1=async ()=>{
                        const values= {
                            status:'REJECTED'
                        }
                        
                        
                        let endpoint=`association/to-approve-advocates-membership-by-admin/${advid}`
                        // let endpoint = `association/to-approve-advocates-membership-by-admin/${advid}`?status=APPROVED;
                        if(associationdata){
                            endpoint+=`/${associationdata}`
                        }
                      await axiosInstance.patch(endpoint,{values},{
                        headers:{
                            'Authorization':`Bearer ${token}`
                        }
                      }).then((response)=>{
                        console.log(response.data);
                      }).catch((error)=>{
                        console.log(error);
                      })
                    }
                    dinkan1()
                    
                } catch (error) {
                    console.log(error);
                }
              Swal.fire({
                title: "Rejected",
                text: "Advcoate request removed successfully.",
                icon: "success"
              });
            }
          });

    }
  return (
    <div>
      <button  type='submit' className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleConfirm}>
        <i class='bx bx-window-close'></i>
        </button>
    </div>
  )
}

export default MemberShipReject

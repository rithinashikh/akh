import React from 'react'
import Swal from 'sweetalert2'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
function StartImpersonate({courtdata,courtname}) {
    const token=localStorage.getItem('accessToken')
    const handlestart=()=>{
        Swal.fire({
            title: `Are you sure want to impersonate as  ${courtname} court`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                axiosInstance.get(`/admin/impersonate/start/${courtdata}`,{
                    headers:{
                        'Authorization':`Bearer ${token}`
                    }
                }).then((response)=>{
                    // console.log(response.data);
                    if (response.status === 200) {
                        console.log(response.data);
                      } else if (response.status === 302) {
                        // Handle redirect URL here
                        window.location.href = response.headers.location;
                      }
                }).catch((error)=>{
                    console.log(error);
                })
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }
  return (
    <div>
     <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handlestart}>
       <i class='bx bx-right-top-arrow-circle bx-tada bx-rotate-90 fs-6' ></i>
    </button>
    </div>
  )
}

export default StartImpersonate

import React from 'react'
import Swal from 'sweetalert2'
import '../../../styles/netmagics/swal.scss'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
function SuspendRegistrar({Registrarid,setRegistrar}) {
   
    
    const handleShow =()=>{
        Swal.fire({
            title: 'Do you want to suspend the registrar?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire('Suspended!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
        
    }
   
    
  return (
    <div>
      <button onClick={handleShow} className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
      <i class='bx bx-link-alt'></i>
        </button>
    </div>
  )
}

export default SuspendRegistrar

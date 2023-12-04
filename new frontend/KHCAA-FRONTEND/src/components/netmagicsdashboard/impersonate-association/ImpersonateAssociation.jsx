import React from 'react'
import Swal from 'sweetalert2'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
import { useNavigate } from "react-router-dom";
function ImpersonateAssociation({ adminid, adminname }) {
   const navigate=useNavigate()
    const token = localStorage.getItem('accessToken')
    
    const handleStart = () => {
        
        Swal.fire({
            title: `Are you sure want to impersonate as  ${adminname} `,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            
            if (result.isConfirmed) {

                axiosInstance.get(`netmagics/admin/impersonate/start/${adminid}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                                                      
                }).then((response) => {
                    console.log(response.data);
                    if (response.status === 200){
                        console.log(response.data);
                        localStorage.setItem('adminid',adminid)
                        localStorage.setItem('sessionId',response.data._impersonate_session_id)
                        localStorage.setItem('id',response.data.id)
                        navigate('/association/layout/')
                    } else if (response.status === 302){
                        // Handle redirect URL here
                        window.location.href = response.headers.location;
                    }
                }).catch((error) => {
                    console.log(error);
                })
                Swal.fire('impersonation Started!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded" onClick={handleStart}>
                                                            <span className='fw-light'>Impersonate</span><i className='bx bx-right-top-arrow-circle bx-tada bx-rotate-90 fs-6 fw-light'></i>
                                                        </button>
            {/* <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
               <i class='bx bx-right-top-arrow-circle bx-tada bx-rotate-90 fs-6' ></i>
             </button> */}
        </div>
    )
}

export default ImpersonateAssociation
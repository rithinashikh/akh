import React from 'react'
import Swal from 'sweetalert2'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
import '../../../styles/netmagics/swal.scss'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUserToken } from '../../../store/slice/AuthSlice'
function DeleteMembership({membershipid,setMembership}) {

  const token=useSelector(selectUserToken)
  

    const handleDelete = async ()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
            reverseButtons: true,
            customContainerClass: 'swal-button--confirm'
          }).then(async(result) => {

            if (result.isConfirmed) {
                await axiosInstance.delete(`/association/membership-plan/delete/${membershipid}`,{
                  headers:{
                    'Authorization':`Bearer ${token}`
                  }
                }).then((response)=>{
                    console.log(response);
                  }).catch((error)=>{
                    console.log(error);
                  })

                  setMembership((prev)=>{
                    return prev.filter((membership)=>membership.id !== membershipid )
                })
                
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        
    }
  return (
    <div>
       <button  className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>
       <i class='bx bx-trash'></i>
        </button>
    </div>
  )
}

export default DeleteMembership

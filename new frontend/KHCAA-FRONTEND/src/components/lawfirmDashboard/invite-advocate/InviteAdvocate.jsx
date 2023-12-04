import React from 'react'
import Swal from 'sweetalert2'
// // import '../../../styles/netmagics/swal.scss'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// function InviteAdvocate({advid}) {

//   const token=localStorage.getItem('lawfirmToken')
//     const handleDelete=()=>{
//         const swalWithBootstrapButtons = Swal.mixin({
//             customClass: {
//               confirmButton: 'btn btn-success ms-2',
//               cancelButton: 'btn btn-danger me-2 '
//             },
//             buttonsStyling: false
//           })

//           swalWithBootstrapButtons.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, invite',
//             cancelButtonText: 'No, cancel!',
//             reverseButtons: true,
//             customContainerClass: 'swal-buttons-container'
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 console.log('advid',advid);
//                 console.log('token',token);
//                 axiosInstance.post(`/lawfirm/invite-advocate/${advid}`,null,{
//                   headers:{
//                     'Authorization':`Bearer ${token}`
//                   }
//                 }).then((response)=>{
//                     console.log(response.data);
//                     toast.success(response.message)
//                   }).catch((error)=>{
//                    toast.error(error.data)
//                   })


//               swalWithBootstrapButtons.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//               )
//             } else if (
//               /* Read more about handling dismissals below */
//               result.dismiss === Swal.DismissReason.cancel
//             ) {
//               swalWithBootstrapButtons.fire(
//                 'Cancelled',
//                 'Your imaginary file is safe :)',
//                 'error'
//               )
//             }
//           })

//     }
//   return (
//     <div>
//       <button onClick={handleDelete} className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
//           invite
//         </button>
//     </div>
//   )
// }

// export default InviteAdvocate


function InviteAdvocate({ adv_id }) {

  // const token = localStorage.getItem('advocateToken')
  
  const lawfirm_id=localStorage.getItem('lawfirm_id')

      const ImpersonateId = localStorage.getItem('id')
    const advocateid = ImpersonateId ? localStorage.getItem('advid') : null;
    const adv_token = localStorage.getItem('advocateToken');
    const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken');

  const handleDelete = () => {
    Swal.fire({
      title: 'Do you want to send the request?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Send',
      denyButtonText: `Don't send`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
       
        
        axiosInstance.post(`/lawfirm/invite-advocate/${adv_id}/${lawfirm_id}`,null,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((response) => {
          console.log(response.data);
          toast.success(response.message)
        }).catch((error) => {
          toast.error(error.data)
        })
        Swal.fire('Successfully send the request !', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Request is not send to the advocate', '', 'info')
      }
    })
  }
  return (
    <div>
      <button onClick={handleDelete} className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        invite
      </button>
    </div>
  )
}

export default InviteAdvocate

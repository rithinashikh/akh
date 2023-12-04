import React from 'react'
import Swal from 'sweetalert2'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function AproveMembership({advid}) {

    const ImpersonateId = localStorage.getItem('id')
   const associationdata = ImpersonateId ? localStorage.getItem('adminid') : null;
   const associationToken = localStorage.getItem('associationToken')
   const token = associationToken ? localStorage.getItem('associationToken') : localStorage.getItem('accessToken');
    const handleConfirm=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "By confirming you are adding this advocate as a  member of this association",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve!"
          }).then((result) => {
            if (result.isConfirmed) {
                try {
                    const dinkan = async () => {
                        const values = {
                          status: 'APPROVED',
                        };
                      
                        let endpoint = `association/to-approve-advocates-membership-by-admin/${advid}`;
                        if (associationdata) {
                          endpoint += `/${associationdata}`;
                        }
                      
                        try {
                          await axiosInstance.patch(
                            endpoint,
                            values,  // Send status directly in the request data
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          );
                        } catch (error) {
                          console.log(error);
                        }
        };
                    dinkan()
                    
                } catch (error) {
                    console.log(error);
                }
              Swal.fire({
                title: "Approved",
                text: "Advocate added to this association",
                icon: "success"
              });
            }
          });

    }


    
  return (
    <div>
      <button  type='submit' className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' style={{ marginRight: '5px' }} onClick={handleConfirm}>
        <i class='bx bx-check'></i>
        </button>
    </div>
  )
}

export default AproveMembership

import React from 'react'
import Swal from 'sweetalert2';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function Withdraw({advid,setPendingRequest}) {

    // const token = localStorage.getItem('advocateToken')
    const lawfirm_id=localStorage.getItem('lawfirm_id')

    const ImpersonateId = localStorage.getItem('id')
    const advocateid = ImpersonateId ? localStorage.getItem('advid') : null;
    const adv_token = localStorage.getItem('advocateToken');
    const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken');

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure want to delete this request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async(result) => {
            if (result.isConfirmed) {
                let endpoint=`lawfirm/withdraw-invitation/${lawfirm_id}/${advid}`
                // if(advocateid){
                //     endpoint+=`/${advocateid}`
                // }
                await axiosInstance.patch(endpoint, {},{
                    headers: {
                        'Authorization': `Bearer ${token}`
                      }
                }).then((response)=>{
                    console.log(response.data);
                }).catch((error)=>{
                    console.log(error);
                })

                // setPendingRequest((prev)=>{
                //     return prev.filter((court)=>court.id !== advid)
                // })
                setPendingRequest((prev)=>{
                    console.log('prev',prev);
                    const updateState=prev.filter((adv)=>adv.id !== advid);
                    console.log("updateState",updateState);
                    return updateState;
                   });

                Swal.fire({
                    title: "Deleted!",
                    text: "Your request has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div>
            <button className=' bg-red-500 hover:bg-red-700 text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleDelete}>Withdraw  </button>
        </div>
    )
}

export default Withdraw

import React from 'react'
import Swal from 'sweetalert2';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function SuspendAssociation({ associd, is_suspend }) {

    const handleConfirmation = async (associd, is_suspend) => {


        const token = localStorage.getItem('accessToken');
        try {
            await axiosInstance.patch(`association/suspend-association/${associd}`, null, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                console.log('user id', associd);
                console.log('response data', response.data);
                console.log('is_suspend', is_suspend);
                window.location.reload()
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }


    }
    const HandleSuspend = () => {
        Swal.fire({
            title: "Do you want to suspend this association?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `Don't suspend`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {


                handleConfirmation(associd, is_suspend);
                Swal.fire("suspend!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Association not suspended", "", "info");
            }
        });
    }
    return (
        <div>
            {/* <button  onClick={HandleSuspend} className={`shadow ${is_suspend ? 'bg-red-500' : 'bg-green-500'} bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none`}>
         suspend
          </button> */}
            <button
                onClick={HandleSuspend}
                className={`shadow ${is_suspend ? 'bg-red-500' : 'bg-green-500'} hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none`}
            >
            {is_suspend ? 'unsuspend' : 'Suspend'}
            </button>
        </div>
    )
}

export default SuspendAssociation

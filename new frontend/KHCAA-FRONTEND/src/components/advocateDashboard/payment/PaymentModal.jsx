import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function PaymentModal({ associationid }) {


  const [show, setShow] = useState(false);
  const [membership, setMembership] = useState([])
  const [membershipid, setMembershipid] = useState(null)
const navigate=useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const token=localStorage.getItem('advocateToken')
  const user = localStorage.getItem('advocateData')

  // useEffect(() => {
  //   axiosInstance.get(`/association/membership-plan/list/${associationid}`,{
  //        headers:{
  //         'Authorization':`Bearer ${token}`
  //        }
  //   })
  //     .then((response) => {
  //       setMembership(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },[]);

  // console.log(associationid);

  const ImpersonateId = localStorage.getItem('id')

  const advocateid = ImpersonateId ? localStorage.getItem('advocateToken') : null;

  const adv_token = localStorage.getItem('advocateToken');

  const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')
  // console.log('membershipid', membershipid);

  useEffect(() => {
    let endpoint = `/association/membership-plan/list/${associationid}`       
    if (advocateid) {
      endpoint +=`/${advocateid}`
    }
    axiosInstance.get(endpoint,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
      .then((response) => {

        console.log("API Response:", response.data);
        setMembership(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // const handleSubmit=(e)=>{
  //    e.preventDefault()
  //    const url=
  //    axiosInstance.post(`/membership-payment/create/`).then((response)=>{
  //       console.log("response data",response.data);
  //    }).catch((error)=>{
  //       console.log(error);
  //    })

  // }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const url = `association/membership-payment/create/${associationid}/${user}/${membershipid}`
  //     axiosInstance.post(url, {

  //     })
  //     .then((response) => {
  //         console.log("response data", response.data);
  //         const url = response.data.payment_request_url
  //       window.location.href = url;
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('1');
    console.log('associationid', associationid);
    console.log('2');
    console.log('user', user);
    console.log('3');
    console.log('membershipid', membershipid);
    console.log('4');
    if (!membershipid) {
      
      toast.error('Please select a membership plan');
      return;
    }
    const url = `association/membership-payment/create/${user}/${membershipid}/${associationid}`
    axiosInstance.post(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }, {

    })
      .then((response) => {

        console.log(response.data);
        const urll = response.data.payment_request_url
        window.location.href = urll;
        if(response.data.message==='Payment unsucessfull'){
          navigate('advocate/success')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (

    <>
      <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' onClick={handleShow}>
        Join
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select membership plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form id='payment' className="w-full max-w-lg" onSubmit={handleSubmit}>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Duration
                </label>
                <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  value={membership.id}
                  onChange={(e) => {
                    setMembershipid(e.target.value)
                  }}>
                  <option className='payment-options' value="">Select membership plan</option>
                  {
                    membership.map((membership) => (
                      <option key={membership.id} value={membership.id} >
                        <span style={{ marginLeft: '8px' }}>{membership.duration}</span>  <span style={{ marginRight: '8px' }}>{membership.unit_of_plan}</span>   <span style={{ marginRight: '8px' }}>₹{membership.membership_price}</span>
                      </option>
                    ))
                  }

                </select>
              

              </div>
              
            </div>

          </form> */}

















          <form id='payment' onSubmit={handleSubmit}>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {membership.map((membership) => (
                  <div
                    key={membership.id}
                    className={`p-4 border rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${membershipid === membership.id ? 'bg-green-200' : 'bg-white'
                      }`}
                    onClick={() => setMembershipid(membership.id)}
                  >
                    <div className="mb-2 text-lg font-semibold">
                      <span className="font-bold">Duration: </span>
                      {membership.duration}
                    </div>
                    <div className="mb-2 text-gray-700">
                      <span className="font-bold">Unit of Plan: </span>
                      {membership.unit_of_plan}
                    </div>
                    <div className="mb-2 text-green-500">
                      <span className="font-bold">Amount: </span>
                      {membership.membership_price}₹
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' form='payment' variant="primary" onClick={membershipid ? handleClose : handleShow}>Take membership</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentModal;
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'

import { useFormik } from 'formik'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function MyVerticallyCenteredModal(props) {

  const impersonateId=localStorage.getItem('id')

  const advocateData=impersonateId ? localStorage.getItem('advid') :null

  const advtoken=localStorage.getItem('advocateToken')

  const token=advtoken ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')
   
  //  const userid=localStorage.getItem('advocateData')
  //  const token=localStorage.getItem('advocateToken')
  
  const formik =useFormik({
    initialValues:{
      name:'',
      address:'',
      contact_no:'',
      specialization:'',
      description:'',
      estd_date:'',
      email:''
    },
    onSubmit: async (values, { resetForm }) =>{
      let endpoint='/lawfirm/create-lawfirm';
      if(advocateData){
        endpoint+=`/${advocateData}`
      }
      await axiosInstance.post(endpoint,values,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      }).then((response)=>{
        console.log(response.data);
        
        resetForm()
        
      }).catch((error)=>{
        console.warn(error);
      })

      props.setLawfirm(prev=>{
        const updatefirm=[...prev,values]

        return updatefirm
      })
     window.location.reload()
    }
  }) 



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Lawfirm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='addlawfirm' onSubmit={formik.handleSubmit} >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
                {/* <p>{courtId}</p> */}
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' value={formik.values.name} onChange={formik.handleChange} placeholder="enter name..." />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Date
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="date" name='estd_date' value={formik.values.estd_date} onChange={formik.handleChange} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Address
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='address' value={formik.values.address} onChange={formik.handleChange} placeholder="enter address..." />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="email" placeholder="enter email id..." name='email' value={formik.values.email} onChange={formik.handleChange} />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Description
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='description' value={formik.values.description}  onChange={formik.handleChange} placeholder="enter Description...." />
              
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Mobile number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="number" name='contact_no' value={formik.values.contact_no} onChange={formik.handleChange} placeholder="enter mobile number..." />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              alternate number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" placeholder="enter alternate number ..." value={formik.values.specialization} onChange={formik.handleChange} name='specialization' />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
        <button form='addlawfirm' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Done </button>
      </Modal.Footer>
    </Modal>
  );
}

function AddLawfirm({setLawfirm}) {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' onClick={() => setModalShow(true)}>
        Add Lawfirm <span>+</span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setLawfirm={setLawfirm}


      />
    </>
  );
}

export default AddLawfirm
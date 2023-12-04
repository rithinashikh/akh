import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { CourtSchema } from '../../../schema/netmagics/NetmagicsSchema';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditCourt(props) {
  // const [courtData, setCourtData] = useState([])
  const token=localStorage.getItem('accessToken')
const [show, setShow] = useState(false);
const formik=useFormik({
  initialValues:{
    name:'',
    type:'',
    estd_date:'',
    address:'',
    contact_no:'',
    description:''
  },
 validationSchema:CourtSchema,
  onSubmit:async (values,{resetForm})=>{
    
    await axiosInstance.patch(`/association/court/edit-court/${props.courtId}`,values,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((response)=>{
      console.log('response data',response.data.message);
      toast.success(response.data.message); 

      resetForm()
      handleClose()
    }).catch((error)=>{
      console.log(error);
      if (error.response) {
        
        // toast.error(error.response.data.message); 
        if (error.response) {
          
          toast.error(error.response.data.message); 
        } else {
          toast.error('An error occurred while fetching data.');
        }
      } else {
        toast.error('An error occurred while fetching data.');
      }
      
    })
    
    props.setCourt(prevCourt => {
      const updatedCourt = prevCourt.map(courtItem => {
        if (courtItem.id === props.courtId) {
          return { ...courtItem, ...values }; // Replace the existing value with the edited value
        }
        return courtItem;
      });
      return updatedCourt;
    });

    
  }
})

  const handleShow = () => {
    console.log("modal show");
    axiosInstance
      .get(`/association/court/editform-court/${props.courtId}`)
      .then((response) => {
       formik.setValues(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
      setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    

  };


  return (
    <>
      <Button  variant="primary" className='bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded' onClick={handleShow}>
      {/* <i className='bx bx-edit-alt'></i> */}
      <i className='bx bx-edit-alt' ></i>

      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit court
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editcourt' onSubmit={formik.handleSubmit} >



            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Court Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="court Name" value={formik.values.name} onChange={formik.handleChange} name='name' />
                {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
              ) : null}
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Court type
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="court type" name='type'  value={formik.values.type} onChange={formik.handleChange}/>
                {formik.touched.type && formik.errors.type ? (
                <div className="text-red-500 text-xs italic">{formik.errors.type}</div>
              ) : null}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  address
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='address' value={formik.values.address} onChange={formik.handleChange} placeholder="enter address" />
                {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500 text-xs italic">{formik.errors.address}</div>
              ) : null}
                {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  Est Date
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" name='estd_date' value={formik.values.estd_date}  onChange={formik.handleChange}  placeholder=" est date" />
                {formik.touched.estd_date && formik.errors.estd_date ? (
                <div className="text-red-500 text-xs italic">{formik.errors.estd_date}</div>
              ) : null}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  contact number
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name='contact_no' placeholder="contact number" value={formik.values.contact_no} onChange={formik.handleChange} />
                {formik.touched.contact_no && formik.errors.contact_no ? (
                <div className="text-red-500 text-xs italic">{formik.errors.contact_no}</div>
              ) : null}
              </div>
              {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        contact number
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div> */}
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                  description
                </label>
                <input  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" name='description' type="text" placeholder="description" value={formik.values.description} onChange={formik.handleChange} />
                {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500 text-xs italic">{formik.errors.description}</div>
              ) : null}
                {/* <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip' textarea/> */}
              </div>
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleClose} >Close</Button>
          <button form='editcourt' type='sunbmit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Done </button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default EditCourt

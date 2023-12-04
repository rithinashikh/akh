import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React,{useState} from 'react'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify';
import { CourtSchema } from '../../../schema/netmagics/NetmagicsSchema'
import 'react-toastify/dist/ReactToastify.css';

function MyVerticallyCenteredModal(props) {

  const token = localStorage.getItem('accessToken')
const [errorMessage,setErrorMessage]=useState('')

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      estd_date: '',
      address: '',
      contact_no: '',
      description: ''
    },
    validationSchema:CourtSchema,
    onSubmit: async (values, { resetForm }) => {

      await axiosInstance.post('/association/court/create-court', values, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        console.log(response.data);
        toast.success(response.data.message); 
        props.onHide()
        resetForm()
      }).catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.detail);
          toast.error(error.data.message); 
        } else {
          setErrorMessage('An error occurred while fetching data.');
        }
      })
      props.setCourt(prevCourt => {

        const updatedCourt = [...prevCourt, values];


        return updatedCourt;
      });
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
          Add Court
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='addcourt' onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Court Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' onChange={formik.handleChange} value={formik.values.name} placeholder="enter court name" />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
              ) : null}
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Court type
              </label>
              
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" placeholder="court type" name='type' value={formik.values.type} onChange={formik.handleChange} />
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
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" type="text" name='address' value={formik.values.address} onChange={formik.handleChange} placeholder="enter address" />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500 text-xs italic">{formik.errors.address}</div>
              ) : null}
              {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Date
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="estd_date" type="date" name='estd_date' value={formik.values.estd_date} onChange={formik.handleChange} placeholder="date" />
              {formik.touched.estd_date && formik.errors.estd_date ? (
                <div className="text-red-500 text-xs italic">{formik.errors.estd_date}</div>
              ) : null}
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                contact number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact_no" type="text" name='contact_no' value={formik.values.contact_no} onChange={formik.handleChange} placeholder="contact number" />
              {formik.touched.contact_no && formik.errors.contact_no ? (
                <div className="text-red-500 text-xs italic">{formik.errors.contact_no}</div>
              ) : null}
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                description
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description  " name='description' value={formik.values.description} onChange={formik.handleChange} type="text" placeholder="description" />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500 text-xs italic">{formik.errors.description}</div>
              ) : null}
              {/* <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip' textarea/> */}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
        <button form='addcourt' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >Done </button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>

  );
}

function AddCourt({ Court, setCourt }) {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' onClick={() => setModalShow(true)}>
        Add Court <span>+</span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        Court={Court}
        setCourt={setCourt}

      />
    </>
  );
}

export default AddCourt
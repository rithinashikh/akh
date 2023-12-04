import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
import * as Yup from 'yup';

function MyVerticallyCenteredModal(props) {
  const [court, setCourt] = useState([])
  const [courtId, setCourtid] = useState('')
  const impersonateId = localStorage.getItem('id')
  const registrardata = impersonateId ? localStorage.getItem('RegistrarId') : null;
  const RegistrarToken = localStorage.getItem('RegistrarToken')
  const token = RegistrarToken ? localStorage.getItem('RegistrarToken') : localStorage.getItem('accessToken')

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      estd_date: '',
      address: '',
      website: '',
      contact_no: '',
      court: '',
      instamojo_API_KEY: '',
      instamojo_AUTH_TOKEN: '',
    },
    validationSchema: Yup.object({
      // other fields...
      instamojo_API_KEY: Yup.string()
        .required('API Key is required'),
        // .matches(/^test_[a-f0-9]{24}$/, 'Invalid API Key format-24 char are required'),
  
      instamojo_AUTH_TOKEN: Yup.string()
        .required('Auth Token is required'),
        // .matches(/^test_[a-f0-9]{24}$/, 'Invalid Auth Token format -24 char are required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      let endpoint = `/association/create-association/${courtId}`;
      if (registrardata) {
        endpoint += `/${registrardata}`
      }
      try {
        const response = await axiosInstance.post(endpoint, values, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log("response", response.data);
        resetForm();
      } catch (error) {
        console.error(error);
      }
      if (values && values.name) {
        props.setRegistrar((prev) => {
          const updateRegistrar = [...prev, values];
          return updateRegistrar;
        });
      }
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/association/court/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setCourt(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Association
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='addRegistrar' onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' onChange={formik.handleChange} value={formik.values.name} placeholder="Enter name..." />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Date
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="date" placeholder="Enter date..." name='estd_date' value={formik.values.estd_date} onChange={formik.handleChange} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Address
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='address' onChange={formik.handleChange} value={formik.values.address} placeholder="Enter address..." />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="email" placeholder="Enter email id..." name='email' value={formik.values.email} onChange={formik.handleChange} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="instamojo_API_KEY">
                Instamojo API Key
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="instamojo_API_KEY" type="text" name='instamojo_API_KEY' onChange={formik.handleChange} value={formik.values.instamojo_API_KEY} placeholder="Enter Instamojo API Key..." />
              {formik.errors.instamojo_API_KEY && (
                    <p className="text-red-500 text-xs italic">{formik.errors.instamojo_API_KEY}</p>
                  )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="instamojo_AUTH_TOKEN">
                Instamojo Auth Token
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="instamojo_AUTH_TOKEN" type="text" name='instamojo_AUTH_TOKEN' onChange={formik.handleChange} value={formik.values.instamojo_AUTH_TOKEN} placeholder="Enter Instamojo Auth Token..." />
              {formik.errors.instamojo_API_KEY && (
                      <p className="text-red-500 text-xs italic">{formik.errors.instamojo_AUTH_TOKEN}</p>
                    )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Court
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                  value={courtId}
                  onChange={(e) => {
                    setCourtid(e.target.value)
                  }}
                >
                  <option>Select a court</option>
                  {court.map((courtItem) => (
                    <option key={courtItem.id} value={courtItem.id}>
                      {courtItem.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                Contact no
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact_no" type="text" name='contact_no' value={formik.values.contact_no} onChange={formik.handleChange} placeholder="Enter phone" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Website
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" name='website' type="text" value={formik.values.website} onChange={formik.handleChange} placeholder="Enter website" />
            </div>
          </div>
          <Modal.Footer>
        <Modal.Footer>
  <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
  <button form='addRegistrar' type='submit' className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => {
      props.onHide(); // Close the modal when the "Done" button is clicked
    }}
  >
    Done</button>
</Modal.Footer>

      </Modal.Footer>
        </form>
      </Modal.Body>
      
    </Modal>
  );
}

function Addassociation({ setAssociation }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' onClick={() => setModalShow(true)}>
        Add Association <span>+</span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setRegistrar={setAssociation}
      />
    </>
  );
}

export default Addassociation;
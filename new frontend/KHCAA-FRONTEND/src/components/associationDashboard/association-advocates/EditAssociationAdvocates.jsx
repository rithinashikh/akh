import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
import { selectUserToken } from '../../../store/slice/AuthSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useFormik } from 'formik'

function EditAssociationAdvocates({ advocateId }) {
  const [show, setShow] = useState(false);
  const token = useSelector(selectUserToken)
  // const [advocatedata, setAdvocateData] = useState({
  //   phone: '',
  //   email: '',
  //   specialization: '',
  //   profile_image: ''

  // })

  // const [advocateData,setAdvocateData]=useState({
  //   phone:'',
  //   email:'',
  //   specilalization:'',
  //   profile_image:''
  // })

  const formik = useFormik({
    initialValues: {
      user:{
        email:''
      },
      phone: '',
      specialization: '',
      profile_image: ''
    },
    onSubmit: async (values, {resetForm}) =>{
      await axiosInstance.patch(`/advocates/edit-advocate/${advocateId}`,values,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      }).then((response)=>{
        console.log(response.data);
        resetForm()
      }).catch((error)=>{
        console.log(error);
      })
    }
    
  })

  console.log("formik.values",formik.values);

  const handleShow = async () => {
    try {
      const response = await axiosInstance.get(`/advocates/editform-advocate/${advocateId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log('ressponse datas', response.data);
      // const { user: { email }, specialization, phone } = response.data
      formik.setValues(response.data)

    
      setShow(true);
    } catch (error) {

      console.error("Error fetching data:", error);
    }
  }
  
  



  // console.log('advocate datass',advocatedata);
  // formik.setValues(advocatedata)
  const handleClose = async (e) => {
    

    // axiosInstance.patch(`/advocates/edit-advocate/${advocateId}`).then((response) => {
    //   console.log(response.data.user);
     
    // }).catch((error) => {
    //   console.log(error);
    // })

    setShow(false);
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAdvocateData({ ...advocateData, [name]: value });

  //   console.log("advocatedata",advocateData);

  // };
  

  return (

    <>
      <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Advocate </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editmembership' className="w-full max-w-lg" onSubmit={formik.handleSubmit} >

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Phone
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='phone' value={formik.values.phone} onChange={formik.handleChange} placeholder="Enter phone number..." />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  email
                </label>
                {/* <p>{advocateId}</p> */}
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" name='user.email' value={formik.values?.user?.email} onChange={formik.handleChange} placeholder="Enter email..." />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  specilalization
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='specialization' value={formik.values.specialization} onChange={formik.handleChange} placeholder="Enter specilalization..." />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  file
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="large_size" type="file" placeholder='choose file' />
              </div>
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form='editmembership' type='submit' variant="primary" onClick={handleClose}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditAssociationAdvocates;
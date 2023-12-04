import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { NotificationSchema } from '../../../schema/lawfirm/LawfirmSchema';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
function AddNotification({setNotification}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const ImpersonateId = localStorage.getItem('id')
  // const advocateid = ImpersonateId ? localStorage.getItem('advid') : null;
  // const adv_token = localStorage.getItem('advocateToken');
  // const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken');
  const advtoken = localStorage.getItem('advocateToken')

const token=advtoken ? localStorage.getItem('advocateToken') :localStorage.getItem('accessToken')


  const lawfirm_id = localStorage.getItem('lawfirm_id')

  

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: NotificationSchema,
    onSubmit: async (values, { resetForm }) => {
      
      // if(advocateid){
      //   endpoint=`/${advocateid}`
      // }
      await axiosInstance.post(`lawfirm/notification/create/${lawfirm_id}`, values, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        console.log(response.data);
        setShow(false)
        resetForm()
      }).catch((error) => {
        console.log(error);
      })
      setNotification(prev=>{
        const updateNotification = [...prev,values];
        return updateNotification;
      })
    }

  })
  console.log('fomik values', formik.values);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}
      <Button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' onClick={handleShow} >
        Notification <span>+</span>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='notification' onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder='Enter Title'
              style={{ width: '100%', height: '50px', margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            {
              formik.touched.title && formik.errors.title ?(
                <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.title}</div>
              ):null
            }
            <textarea
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              cols="30"
              rows="10"
              style={{ width: '100%', height: '200px', margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              placeholder='Enter Notification Content....'
            ></textarea>
            {formik.touched.content && formik.errors.content ? (
              <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.content}</div>
            ) : null}
           
          </form> 

        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <button className=' bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleClose}>close </button>

          {/* <Button variant="primary">Add <span>+</span></Button> */}
          <button form='notification' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-light py-1 px-4 rounded focus:outline-none focus:shadow-outline' >Done </button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNotification;
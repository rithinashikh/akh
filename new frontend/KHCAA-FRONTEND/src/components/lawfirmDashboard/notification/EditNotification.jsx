import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { NotificationSchema } from '../../../schema/lawfirm/LawfirmSchema';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
function EditNotification({notiid,setNotification}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const lawfirm_id = localStorage.getItem('lawfirm_id')

  const advtoken = localStorage.getItem('advocateToken')
  const token=advtoken ? localStorage.getItem('advocateToken') :localStorage.getItem('accessToken')

  // useEffect(()=>{
  //   axiosInstance.get(`/lawfirm/notification/editform/${notiid}`,{
  //     headers:{
  //       'Authorization':`Bearer ${token}`
  //     }
  //   }).then((response)=>{
  //     console.log(response.data);
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // })

  const formik=useFormik({
    initialValues:{
      title:'',
      content: ''
    },
    validationSchema:NotificationSchema,
    onSubmit: async (values,{resetForm})=>{
      await axiosInstance.patch(`/lawfirm/notification/edit/${notiid}`,values,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      }).then((response)=>{
        console.log(response.data);
        resetForm()
        setShow(false)
      }).catch((error)=>{
        console.log(error);
      })

      setNotification(prev=>{
        const updateNotification=prev.map(notification=>{
          if(notification.id ===notiid){
            return {...notification,...values}
          }
          return notification
        })
        return updateNotification
      })
    }
  })

  console.log(formik.values);

  const handleShow=()=>{
    console.log('notiid',notiid);
    axiosInstance.get(`/lawfirm/notification/editform/${notiid}`,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((response)=>{
      
      formik.setValues(response.data)
    }).catch((error)=>{
      console.log(error);
    })
    setShow(true)
  }

//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       content: ''
//     },
//     validationSchema: NotificationSchema,
//     onSubmit: async (values, { resetForm }) => {
//       await axiosInstance.post(`lawfirm/notification/create/${lawfirm_id}`, values, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       }).then((response) => {
//         console.log(response.data);
//         setShow(false)
//         resetForm()
//       }).catch((error) => {
//         console.log(error);
//       })
//     }

//   })
//   console.log('fomik values', formik.values);



  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}
      <Button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' onClick={handleShow} >
      <i className='bx bx-edit-alt' ></i>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editnotification' onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
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
          <button form='editnotification' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-light py-1 px-4 rounded focus:outline-none focus:shadow-outline' >Done </button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditNotification;
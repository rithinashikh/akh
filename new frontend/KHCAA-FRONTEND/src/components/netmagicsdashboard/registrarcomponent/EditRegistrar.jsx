import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
function MyVerticallyCenteredModal(props) {
  
  const token=localStorage.getItem('accessToken')
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      profile_image: null,
      password: '',
      date_of_birth: ''

    },
    onSubmit: async (values, { resetForm }) => {
      console.log('values',values);
      await axiosInstance.patch(`/registrar/edit-registrar/${props.Registrarid}`, values,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      }).then((response) => {
        console.log('response datassss',response.data);
        resetForm()
      }).catch((error) => {
        console.log(error);
      })
      props.setRegistrar(prevreg => {
        const updatedCourt = prevreg.map(courtItem => {
          if (courtItem.id === props.Registrarid) {
            return { ...courtItem, ...values }; 
          }
          return courtItem;
        });
        return updatedCourt;
      });
    }
    

  })

  useEffect(() => {
   
    if (props.Registrardata) {
      console.log('props.Registrardata',props.Registrardata)
      formik.setValues(props.Registrardata);
    }
  }, [props.Registrardata])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Registrar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='EditRegistrar' onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='user.name' value={formik.values?.user?.name} onChange={formik.handleChange} placeholder="Jane" />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
             </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                phone
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='phone' value={formik.values.phone} onChange={formik.handleChange} type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                address
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='address' value={formik.values.address} onChange={formik.handleChange} placeholder="Enter address" />
              {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                choose file
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="file" name='profile_image' onChange={(event) => {
                event.preventDefault();
                const file = event.target.files[0]
                // setFieldValue('file','file')
                formik.setFieldValue('file', 'file')

              }} />
            </div>
            {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        password
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
         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
      </div>
    </div> */}

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                password
              </label>
              {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='password' value={formik.values?.user?.password} onSubmit={formik.handleChange} id="grid-zip" type="text" placeholder="90210" /> */}
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-zip"
                type="text"
                name="user.password"
                value={formik.values.user?.password || ''} // Use optional chaining to access the property safely
                onChange={formik.handleChange}
                placeholder="Enter the password"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                dob
              </label>
              {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" name=' date_of_birth' value={formik.values.date_of_birth} onSubmit={formik.handleChange} type="date" placeholder="90210"/> */}
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-zip"
                type="date"
                name="date_of_birth" // Specify the field name
                value={formik.values.date_of_birth} // Use the field's value
                onChange={formik.handleChange} // Handle changes
                placeholder="90210"
              />
            </div>

          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
        <button form='EditRegistrar' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Done </button>
      </Modal.Footer>
    </Modal>
  );
}

function EditRegistrar({ Registrarid, setRegistrar }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [registrarData, setRegistrardata] = useState([])
  const handleShow = async () => {
    axiosInstance.get(`/registrar/editform-registrar/${Registrarid}`).then((response) => {
      setRegistrardata(response.data)
    })
    setModalShow(true)
  }



  return (
    <>
      <Button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded border-none' onClick={handleShow}>
        <i class='bx bx-edit-alt'></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        Registrarid={Registrarid}
        Registrardata={registrarData}
        setRegistrar={setRegistrar}
      />
    </>
  );
}

export default EditRegistrar
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import { Registrar } from '../../../schema/netmagics/NetmagicsSchema'
import { useFormik } from 'formik'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function MyVerticallyCenteredModal(props) {

  const [court, setCourt] = useState([])
  const [courtId, setCourtid] = useState('')
  
  // const [passwordError, setPasswordError] = useState('');
  const token = localStorage.getItem('accessToken')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axiosInstance.get('/association/court/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((response) => {

          setCourt(response.data)
        }).catch((error) => {
          console.log(error);
        })

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  // const formik=useFormik({
  //   initialValues:{
  //     name:'',
  //     email:'',
  //     phone:'',
  //     password:''
  //   },
  //   validationSchema: Registrar,
  //   onSubmit: async (values,{resetForm})=>{
   
      
  //     await axiosInstance.post(`/registrar/create-registrar/${courtId}`, values,{
  //       headers:{
  //         'Authorization':`Bearer ${token}`
  //       }
  //     }).then((response)=>{
  //       console.log(response.data);
  //       resetForm()
  //     }).catch((error)=>{
  //       console.log(error);
  //     })
   
  //     props.setRegistrar(prevRegistrar => {
  //       const updatedRegistrar = [...prevRegistrar, values]; 
  //       return updatedRegistrar;
  //     });
 
  //   }
  // })
 
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      retypepassword:'',
      court:''
      
    },
    validationSchema: Registrar,
    onSubmit: async (values, { resetForm }) => {
      let postdata;
      try {
        await axiosInstance.post(`/registrar/create-registrar/${courtId}`, values, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((response)=>{
          // Update state with the response data
          console.log("registrar dataa",response.data);
          postdata=response.data
          window.location.reload()
          props.onHide()
          
        }).catch((error)=>{
          console.log(error);
        })
        resetForm();
        
      } catch (error) {

        console.error(error);

      }
      // props.setRegistrar(prevreg=>{
        
      //   const updateregistrar = [{...prevreg,postdata}]
      //   return updateregistrar;
      // })

    
      
      // props.setRegistrar(prevRegistars => 
      //   {
      //     console.log('prevRegistars',prevRegistars);
      //     [...prevRegistars, postdata]
      //   }
      //   )

      props.setRegistrar(prevRegistars => {
        console.log('prevRegistars', prevRegistars);
        return [...prevRegistars, postdata];
      })
      
      console.log('after update data',props.registrardata);
      // props.setRegistrar(prevRegistrar => {
      //   // Use the response data instead of the form values
      //   const updatedRegistrar = [...prevRegistrar,responsedata ];
      //   return updatedRegistrar;
      // });
    }
  });
  
  // console.log('prev data last',props.registrardata); 





  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Registrar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='addRegistrar' onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' value={formik.values.name} onChange={formik.handleChange} placeholder="enter name..." />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
              ) : null}
              
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                phone
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" placeholder="enter phone number..." name='phone'  values={formik.values.phone} onChange={formik.handleChange} />
              {
                formik.touched.phone && formik.errors.phone?(
                  <div className="text-red-500 text-xs italic">{formik.errors.phone}</div>
                ):null
              }
              
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" type="email" name='email'  value={formik.values.email} onChange={formik.handleChange} placeholder="enter address" />
              {
                formik.touched.email && formik.errors.email?(
                  <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
                ):null
              }
              
              {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Court
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='court'
                  value={formik.values.court}
                  onChange={(e) => {
                    formik.handleChange(e)
                    setCourtid(e.target.value)
                  }}
                  required>
                  <option >Select a court</option>
                  {court.map((courtItem)=> (

                    <option key={courtItem.id} value={courtItem.id}>
                      {courtItem.name}
                    </option>
                  ))}
                  

                </select>
                  {
                  formik.touched.court && formik.errors.court?(
                    <div className="text-red-500 text-xs italic">{formik.errors.court}</div>
                  ):null
                }
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                password
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact_no" type="password" name='password'  placeholder="Enter password" value={formik.values.password} onChange={formik.handleChange}/>
              {formik.touched.password && formik.errors.password ? (
                                    <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
                                ) : null}
                                   
            </div>
            
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        re-enter password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description  " name='retypepassword'   type="password" value={formik.values.retypepassword} onChange={formik.handleChange}  placeholder="Re-enter password"/>
      {formik.touched.retypepassword && formik.errors.retypepassword ? (
                                    <p className="text-red-500 text-xs italic">{formik.errors.retypepassword}</p>
                                ) : null}
    </div> 
    
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
        <button form='addRegistrar' type='submit' className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Done</button>

      </Modal.Footer>
    </Modal>
  );
}

function AddRegistrar({ setRegistrar }) {
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={() => setModalShow(true)}>
        Add Registrar <span>+</span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setRegistrar={setRegistrar}


      />
    </>
  );
}

export default AddRegistrar
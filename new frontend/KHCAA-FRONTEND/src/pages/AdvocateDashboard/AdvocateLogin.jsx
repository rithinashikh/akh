import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import '../../styles/netmagics/login.scss';

import { useFormik } from 'formik';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import { useNavigate, Link } from 'react-router-dom';
import { loginSchema } from '../../schema/advocate/AdvocateSchema';
import LoadingAnimation from '../../components/loader/LoadingAnimation';
function AdvocateLogin() {
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [enrollment_id, setEnrollmentNumber] = useState('')
  const [error, setError] = useState(null)
  const [errorMessage, setErrormessage] = useState('')
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (enrollment_id) {

  //   }
  // }, [enrollment_id])

  // const handleCheck = async () => {

  //   await axiosInstance.post(`/advocates/id-verification`, {
  //     enrollment_id: enrollment_id
  //   }).then((response) => {
  //     console.log('response.data', response.data);
  //     // console.log('response.data.details', response.data.detail);
  //     // console.log('response.data.is_registred',response.data.is_registred);
  //     if (response.data.is_registred) {

  //       setShowLoginForm(true)
  //     }

  //   }).catch((error) => {
  //     console.log(error);
  //     setError('Enrollment Number Not Registered')

  //   })

  // }


  // const handleCheck=async ()=>{
  //   try {
  //     const response=await axiosInstance.post (`/advocates/id-verification`,{
  //       enrollment_id: enrollment_id
  //     })


  //     console.log('response',response.data.is_registred);
  //     if(response.data.is_registred === true){
  //       alert('is_registred is true')
  //     }else{
  //       alert('is_registred is false')

  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  const handleCheck = async () => {
    try {
      
      const response = await axiosInstance.post(`/advocates/id-verification`, {
        enrollment_id: enrollment_id
      });

      console.log('Response:', response.data.message);

      if (response.data.message === 'User found with this enrollment id') {
        
        setShowLoginForm(true)
      } else {
        
        setError('Enrollment Number Not Registered')
      }
    } catch (error) {
      
      console.error('Error:', error);
      setError('Enrollment Number Not Registered')

    }
  };



  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      enrollment: ''
    },
    validationSchema:loginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        
        const response = await axiosInstance.post('/userapp/api/login/', values);
        console.log('response data', response.data);
        if (response.data.access) {

          const accessToken = response.data.access
          const refreshToken = response.data.refresh
          // console.log("tokennsssss",{token:accessToken});
          // localStorage.setItem('access', JSON.stringify(accessToken));
          localStorage.setItem('refresh', refreshToken)
          localStorage.setItem('advocateToken', accessToken)

          resetForm();
          navigate('/advocate/layout')
        }
      } catch (error) {
        setLoading(false)
        if (error.response) {
          setErrormessage(error.response.data.detail)
          toast.error(error.response.data.detail); // Set the error message from the API response
        } else {
          setErrormessage('An error occurred during login. Please try again.');
        }
      }
    }
  });

  console.log('formik values', formik.values);

  const handleNavigate = () => {
    // navigate('/netmagics')
  }


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        minHeight: '100vh', // Make the container at least 100% of the viewport height
      }}
    >
      <MDBCard
        className='bg-white my-5 mx-auto'
        style={{ borderRadius: '1rem', maxWidth: '500px' }}
      >
        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
          <h2 className='fw-bold mb-2 text-center'>Sign in</h2>
          <p className='text-white-50 mb-3'>Please enter your login and password!</p>
          
          <form onSubmit={formik.handleSubmit} className='d-flex flex-column'>

            {

              !showLoginForm ? (
                <>
                  <MDBInput
                    wrapperClass='mb-4'
                    name='enrollment'
                    type='text'
                    value={enrollment_id}
                    onChange={(e) => setEnrollmentNumber(e.target.value)}
                    placeholder='Enrollment number '
                    id='formControlLg'
                    size='lg'
                  />
                  <button
                    type='button'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                    style={{ flex: '1' }}
                    onClick={handleCheck}

                  >
                    continue
                  </button>
                  {/* {error && <div className="error-message" style={{color:'red',fontSize:'14px'}}>{error}</div>} */}

                  {error && (
                    <div className="error-message" style={{ color: 'red', fontSize: '12px' }}>
                      {error}{' '}
                      <Link to="/advocate/register" style={{ color: 'blue', fontSize: '13px' }}>Register Here</Link>
                    </div>
                  )}


                </>
              ) : (
                <>
                  <MDBInput
                    wrapperClass='mb-4'
                    name='email'
                    type='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    // label='Email address'
                    placeholder='Email address'
                    id='formControlLg'
                    size='lg'
                  />
                  {
              formik.touched.email && formik.errors.email ?(
                <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
              ) :null
            }
                  <MDBInput
                    wrapperClass='mb-4'
                    placeholder='Enter password'
                    // label='Password'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    id='formControlLg'
                    type='password'
                    size='lg'
                  />
                  {
              formik.touched.password && formik.errors.password ?(
                <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
              ) :null
            }
                  {/* <MDBCheckbox
                    name='flexCheck'
                    id='flexCheckDefault'
                    className='mb-4'
                    label='Remember password'
                  /> */}
                                {errorMessage  && <div className="text-red-500 text-xs italic">{errorMessage}</div> }

                  <button
                    type='submit'
                    className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                    style={{ flex: '1' }}
                    onClick={handleNavigate}
                  >
                    Login
                  </button>
                  <hr className='my-4' />
            
            {/* <Link className=" text-end font-light" to="/association/resetpassword" >Forgot password ? </Link> */}
            <div className="d-flex justify-content-between mt-3">
            <Link className="font-light" to="/advocate/resetpassword" style={{ fontSize: '0.9rem' }}>Forgot password</Link>
            <Link className="font-light" to="/advocate/resetpassword" style={{ fontSize: '0.9rem' }}>Change password</Link>
          </div>
                </>

              )
            }
            
            {/* <hr className='my-4' /> */}
            
            {/* <Link className=" text-end font-light" to="/association/resetpassword" >Forgot password ? </Link> */}
            {/* <div className="d-flex justify-content-between mt-3">
            <Link className="font-light" to="/advocate/resetpassword" style={{ fontSize: '0.9rem' }}>Forgot password</Link>
            <Link className="font-light" to="/advocate/resetpassword" style={{ fontSize: '0.9rem' }}>Change password</Link>
          </div> */}
            

          </form>

          
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default AdvocateLogin;

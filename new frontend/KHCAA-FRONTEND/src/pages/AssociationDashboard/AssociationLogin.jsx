import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  
} from 'mdb-react-ui-kit';
import '../../styles/netmagics/login.scss';
import { useFormik } from 'formik';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import { useDispatch } from 'react-redux'
import {login} from '../../store/slice/AuthSlice'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { loginSchema } from '../../schema/association/AssociationSchema';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUserToken } from '../../store/slice/AuthSlice'



function AssociationLogin() {
 const navigate=useNavigate()
 const dispatch=useDispatch()
 const [errorMessage,setErrorMessage]=useState('')

const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema:loginSchema,
  onSubmit: async (values, { resetForm }) => {
    try {
      const response = await axiosInstance.post('/userapp/user-authorization',values);
      if(response.data.related_objects.data === 'association_super_admin'){
              console.log('response dataaa',response.data.related_objects.data);
              const loginresponse = await axiosInstance.post('/userapp/api/login/', values);
              if (loginresponse.data.access) {
                // const associationToken = response.data.access
                // const associationRefreshToken=response.data.refresh
                // console.log("tokennsssss",{token:accessToken});
                // localStorage.setItem('access', JSON.stringify(accessToken));
                // localStorage.setItem('associationRefreshToken',associationRefreshToken)
                // localStorage.setItem('associationToken',associationToken)
                console.log('loginresponse.data.access',loginresponse.data.access)
                
                navigate('/association/layout')
                dispatch(login(response.data.access))
                // let association_token=useSelector(selectUserToken)
                
                resetForm();
              }else {
                setErrorMessage('User does not exist. Please try again.');
                toast.error('User does not exist. Please try again.');
              }
      }
      
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.detail)
        toast.error(error.response.data.detail); // Set the error message from the API response
      } else {
        setErrorMessage('An error occurred during login. Please try again.')
        // toast.error('An error occurred during login. Please try again.');
      }
    }
  }
});

const handleNavigate=()=>{
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
            <MDBInput
              wrapperClass='mb-4'
              name='email'
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              // label='Email address'
              placeholder='Enter email...'
              id='email'
              size='lg'
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
              ) : null}
            <MDBInput
              wrapperClass='mb-4'
              // label='Password'
              placeholder='Enter password...'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              id='password'
              type='password'
              size='lg'
            />
            {/* <MDBCheckbox
              name='flexCheck'
              id='flexCheckDefault'
              className='mb-4'
              label='Remember password'
            /> */}
            {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
              ) : null}
          {errorMessage  && <div className="text-red-500 text-xs italic">{errorMessage}</div> }

            <button
              type='submit'
              className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
              style={{ flex: '1' }}
              onClick={handleNavigate}
            >
              Login
            </button>
          </form>
          <hr className='my-4' />
          <Link className=" text-end font-light" to="/association/resetpassword" >Forgot password ? </Link>

        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default AssociationLogin;
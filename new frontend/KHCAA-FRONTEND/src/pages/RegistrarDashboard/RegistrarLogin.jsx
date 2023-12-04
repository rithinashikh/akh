import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginSchema } from '../../schema/Registrar/RegistrarSchema';
import LoadingAnimation from '../../components/loader/LoadingAnimation';
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import '../../styles/netmagics/login.scss';
import { useFormik } from 'formik';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import { useNavigate, Link } from 'react-router-dom';

export function NetmagicsLogin() {
  const navigate = useNavigate();
  const [errorMessage, setErrormessage] = useState('');
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true)
        const response = await axiosInstance.post('/userapp/user-authorization', values);
        if (response.data.related_objects.data === 'registrar') {
          console.log('zzzzzzzzzzzzzzzzzzzz', response.data);
          const loginResponse = await axiosInstance.post('/userapp/api/login/', values);
          if (loginResponse.data.access) {
            console.log('yyyyyyyyyyyyyyyyy', loginResponse.data);

            const RegistrarToken = loginResponse.data.access;
            const refreshToken = loginResponse.data.refresh;

            localStorage.setItem('refresh', refreshToken);
            localStorage.setItem('RegistrarToken', RegistrarToken);

            resetForm();

            navigate('/registrar/layout');
          }
        } else {
          setErrormessage('User does not exists. Please try again.');
          toast.error('User does not exists. Please try again.');
        }
      } catch (error) {
        setLoading(false)

        console.log('error message', error.response?.data.message);
  if (error.response) {
    setLoading(false)

    setErrormessage(error.response.data.message);
    toast.error(error.response.data.message);
        } else {
          setErrormessage('An error occurred while fetching data.');
        }
      }
    },
  });

  const handleNavigate = () => {
    // navigate('/netmagics')
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
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
              placeholder='Enter email..'
              id='formControlLg'
              size='lg'
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
            ) : null}
            <ToastContainer />
            <MDBInput
              wrapperClass='mb-4'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              id='formControlLg'
              type='password'
              size='lg'
              placeholder='Enter password'
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
            ) : null}
            {errorMessage && <div className="text-red-500 text-xs italic">{errorMessage}</div>}

            <button
              type='submit'
              className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
              style={{ flex: '1' }}
              onClick={handleNavigate}
            >
              Login
            </button>
            {loading && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <LoadingAnimation color="#3498db" loading={loading} size={15} />
        </div>
      )}
          </form>
          <hr className='my-4' />
          <Link className="text-end font-light" to="/registrar/resetpassword" >Forgot password ? </Link>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default NetmagicsLogin;





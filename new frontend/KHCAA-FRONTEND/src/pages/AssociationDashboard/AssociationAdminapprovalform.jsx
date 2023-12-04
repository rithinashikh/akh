import React, { useState, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { login } from '../../store/slice/AuthSlice';
import { useNavigate, useParams } from 'react-router-dom';

import * as Yup from 'yup';

function AssociationLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_id, asso_id } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const [emailData, setEmailData] = useState('');
  const [loadingData, setLoadingData] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema:
      Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axiosInstance.post(`association/admin/verify/${user_id}/${asso_id}`, values);

        if (response.data) {
          dispatch(login(response.data.access));
          toast.success('You are added as a admin successfully!')
          console.log(response.data,'uuuuuuuuuuuuuuuuuuuuuuuuuuuu');
          navigate('/association/layout');
          resetForm();
        }
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data.detail);
          toast.error(error.response.data.detail);
        } else {
          setErrorMessage('An error occurred during login. Please try again.');
        }
      }
    },
  });

  const handleNavigate = () => {
    navigate('/association/login');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/association/admin-email/${user_id}`);
        setEmailData(response.data.email);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    };

    fetchData();
  }, [user_id]);

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      email: emailData,
    });
  }, [emailData]);

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
          <h2 className='fw-bold mb-2 text-center'>By activating the link you will have the access to the association admin panel .Be happy .Stay Calm </h2>
          <p className='text-white-50 mb-3'>Please enter your email and password!</p>

          <form onSubmit={formik.handleSubmit} className='d-flex flex-column'>
                                <MDBInput
                        wrapperClass='mb-4'
                        name='email'
                        // label='Email'
                        type='email'
                        id='formControlLg'
                        size='lg'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        readOnly
                        disabled  // Add the disabled attribute
                        />

            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
            ) : null}

            <MDBInput
              wrapperClass='mb-4'
              name='password'
            //   label='Password'
              type='password'
              id='formControlLg'
              size='lg'
              placeholder='Enter password'
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
            ) : null}

            <MDBInput
              wrapperClass='mb-4'
              name='confirmPassword'
            //   label='Confirm Password'
              placeholder='Confirm Password'
              type='password'
              id='formControlLg'
              size='lg'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-xs italic">{formik.errors.confirmPassword}</div>
            ) : null}

            {errorMessage && <div className="text-red-500 text-xs italic">{errorMessage}</div>}

            <button
              type='submit' 
              className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
              style={{ flex: '1' }}
              onClick={handleNavigate}
            >
              Activate Link
            </button>
          </form>

          <hr className='my-4' />
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default AssociationLogin;
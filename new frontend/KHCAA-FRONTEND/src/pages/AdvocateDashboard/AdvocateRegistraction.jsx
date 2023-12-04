import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import { AdvocateRegisterSchema } from '../../schema/advocate/AdvocateSchema';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdvocateRegistration() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date_of_birth: '',
            enrollment_id: '',
            specialization: '',
            address: '',
            profile_image: '',
            password: '',
            phone: '',
            confirm_password: ''
        },
        validationSchema: AdvocateRegisterSchema,
        onSubmit: async (values, { resetForm }) => {
            const formData = new FormData();

            for (const key in values) {
                formData.append(key, values[key]);
            }

            try {
                const response = await axiosInstance.post('/advocates/create-advocate', formData);
                if (response.data) {
                    console.log("response data", response.data);
                } else {
                    console.log('no data found');
                }
                resetForm();
                navigate('/advocate/login');
            } catch (error) {
                console.error("Error while submitting form", error);
            }
        }
    });


    console.log('formik values', formik.values);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <ToastContainer />
            <MDBCard style={{ width: '600px' }}>
                <MDBCardBody className='px-4'>
                    <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>
                    <form id='register-adv' onSubmit={formik.handleSubmit} enctype="multipart/form-data">

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='name'
                                    type='text'
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    placeholder='Enter name...'
                                    
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
                                ) : null}
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='email'
                                    type='email'
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder='Enter email...'
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
                                ) : null}
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='date_of_birth'
                                    type='date'
                                    name='date_of_birth'
                                    value={formik.values.date_of_birth}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.date_of_birth}</div>
                                ) : null}
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='enrollment_id'
                                    type='text'
                                    name='enrollment_id'
                                    value={formik.values.enrollment_id}
                                    onChange={formik.handleChange}
                                    placeholder='Enrollment ID...'
                                />
                                {formik.touched.enrollment_id && formik.errors.enrollment_id ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.enrollment_id}</div>
                                ) : null}
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='specialization'
                                    type='text'
                                    name='specialization'
                                    value={formik.values.specialization}
                                    onChange={formik.handleChange}
                                    placeholder='official address...'
                                />
                                {formik.touched.specialization && formik.errors.specialization ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.specialization}</div>
                                ) : null}
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='address'
                                    type='text'
                                    name='address'
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    placeholder='Residential Address...'
                                />
                                {formik.touched.address && formik.errors.address ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.address}</div>
                                ) : null}
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='profile_image'
                                    type='file'
                                    placeholder='choose your image'
                                    name='profile_image'
                                    onChange={(event) => {
                                        formik.setFieldValue('profile_image', event.currentTarget.files[0]);
                                    }}
                                />
                                {formik.touched.profile_image && formik.errors.profile_image ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.profile_image}</div>
                                ) : null}
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='phone'
                                    type='tel'
                                    name='phone'
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    placeholder='Phone Number...'
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.phone}</div>
                                ) : null}
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='password'
                                    type='password'
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder='Password...'
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
                                ) : null}
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    size='lg'
                                    id='confirm_password'
                                    type='password'
                                    name='confirm_password'
                                    value={formik.values.confirm_password}
                                    onChange={formik.handleChange}
                                    placeholder='Confirm Password...'
                                />
                                {formik.touched.confirm_password && formik.errors.confirm_password ? (
                                    <div className="text-red-500 text-xs italic">{formik.errors.confirm_password}</div>
                                ) : null}
                            </MDBCol>
                        </MDBRow>

                        {/* <button 
                            form='register-adv' 
                            className='bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' 
                            type='submit'
                        >
                            Submit
                        </button> */}

                        <div className="text-center mt-4">
                            <button
                                form='register-adv'
                                className='btn btn-primary btn-lg p1'
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>


                    </form>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}

export default AdvocateRegistration;





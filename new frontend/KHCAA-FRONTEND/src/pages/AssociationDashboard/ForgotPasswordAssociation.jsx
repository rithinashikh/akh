import React, { useState, useEffect } from 'react'
import '../../styles/netmagics/forgot-password.scss'
import forgot from '../../assets/images/forgot.jpg'
import { useFormik } from 'formik'
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import OtpInput from 'react-otp-input';
import {useNavigate}  from 'react-router-dom'
import {  toast } from 'react-toastify';
import { passwordschema } from '../../schema/forgotpassword/ForgotPasswordSchema'
import {resetpasswordSchema} from '../../schema/forgotpassword/ForgotPasswordSchema'

function ForgotPassword() {

  const navigate=useNavigate()
  const [handleshow, setHandleshow] = useState(false)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  console.log('otp', otp);
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: passwordschema,
    onSubmit: async (values, { resetForm }) => {
      resetpassword.setValues(values)
      setEmail(values)
      await axiosInstance.post('/userapp/forgot-password-email/request', values).then((response) => {

        console.log(response.data);
        toast.success(response.data.message)
        if (response.data.message === 'otp sent successfully') {
          resetForm()
          setHandleshow(true)

        }

      }).catch((error) => {
        console.log(error);
      })
    }
  })

  const handleOtpChange = (newotp) => {
    console.log('newotp', newotp);
    setOtp(newotp);
    console.log('otp to set formik values', otp);
  }
  useEffect(() => {
    resetpassword.setFieldValue('otp', otp);
  }, [otp]);

  const resetpassword = useFormik({
    initialValues: {
      email:'',
      otp: '',
      new_password: '',
      retypepassword: ''
    },
    validationSchema:resetpasswordSchema,
    onSubmit: async (values) => {
      await axiosInstance.post(`/userapp/forgot-password-email/confirm`,values).then((response) => {
        console.log(response.data);
        toast.success(response.data.message)
        if(response.data.message ==='password changed successfully'){
          navigate('/association/login')
        }

      }).catch((error) => {
        console.log(error);
      })
    }
  })

  console.log(resetpassword.values);

  return (
    <>
    {
  handleshow ? (
    <form id='forgot-password' onSubmit={resetpassword.handleSubmit}>
      <div className='main-password-container'>
        <div className="card text-center" style={{ maxWidth: '300px' }}>
          <img src={forgot} alt="error" />
          <div className="card-body px-5">
            <div className="userInput">
              {/* OTP input fields */}
              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={6}  
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} style={{ width: '30px' }} />} 
                className="custom-otp-input"
              />
            </div>
            {/* Email input field */}
            <input
              type="password"
              id="typeEmail"
              name='new_password'
              value={resetpassword.values.password}
              onChange={resetpassword.handleChange}
              className="form-control mt-3"  
              placeholder='new password'
            />
            {resetpassword.touched.new_password && resetpassword.errors.new_password ? (
              <div className="text-red-500 text-xs italic">{resetpassword.errors.new_password}</div>
            ) : null}
            <input
              type="password"
              id="typeEmail"
              name='retypepassword'
              value={resetpassword.values.retypepassword}
              onChange={resetpassword.handleChange}
              className="form-control mt-3"  
              placeholder='Re-type password'
            />
            {resetpassword.touched.retypepassword && resetpassword.errors.retypepassword ? (
              <div className="text-red-500 text-xs italic">{resetpassword.errors.retypepassword}</div>
            ) : null}
            
            <button
              form='forgot-password'
              type='submit'
              className="btn btn-primary mt-3"  
              style={{ width: '200px' }}
            >
              Reset password
            </button>
            <div className="d-flex justify-content-between mt-4">
            
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : (
    <form id='forgot-password' onSubmit={formik.handleSubmit}>
      <div className='main-password-container'>
        <div className="card text-center" style={{ maxWidth: '300px' }}>
          <div className="card-body px-5">
            <img src={forgot} alt="error" />
            <p className="card-text py-2" style={{ fontSize: '10px' }}>
              Enter your email address, and we'll send you an OTP to reset your password.
            </p>

            <div className="form-outline">
              <input
                type="email"
                id="typeEmail"
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                className="form-control my-3"
                placeholder='Enter your email....'
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
              ) : null}
            </div>

            <button
              form='forgot-password'
              type='submit'
              className="btn forgot-button btn-primary w-100"
            >
              Send OTP
            </button>
            <div className="d-flex justify-content-between mt-4">
            
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}


    </>
  )
}

export default ForgotPassword

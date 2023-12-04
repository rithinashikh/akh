// import React from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
 
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
// } from 'mdb-react-ui-kit';
// import '../../styles/netmagics/login.scss';
// import { useFormik } from 'formik';
// import axiosInstance from '../../configs/axios/AxiosVonfiguration';
// import { useNavigate } from 'react-router-dom';

// function LawfirmLogin() {
//  const navigate=useNavigate()
  

// const formik = useFormik({
//   initialValues: {
//     email: '',
//     password: '',
//   },
//   onSubmit: async (values, { resetForm }) => {
//     try {
//       const response = await axiosInstance.post('/userapp/api/login/', values);
//       if (response.data.access) {
      
//         const lawfirmToken = response.data.access
//         const refreshToken=response.data.refresh
        
//         localStorage.setItem('refresh',refreshToken)
//         localStorage.setItem('lawfirmToken',lawfirmToken)

        
//         resetForm();
//         navigate('/lawfirm')
//       }
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.detail) {
//         toast.error(error.response.data.detail); // Set the error message from the API response
//       } else {
        
//         toast.error('An error occurred during login. Please try again.');
//       }
//     }
//   }
// });


// console.log("formik values",formik.values);
  

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center', // Center horizontally
//         alignItems: 'center', // Center vertically
//         minHeight: '100vh', // Make the container at least 100% of the viewport height
//       }}
//     >
//       <MDBCard
//         className='bg-white my-5 mx-auto'
//         style={{ borderRadius: '1rem', maxWidth: '500px' }}
//       >
//         <MDBCardBody className='p-5 w-100 d-flex flex-column'>
//           <h2 className='fw-bold mb-2 text-center'>Sign in</h2>
//           <p className='text-white-50 mb-3'>Please enter your login and password!</p>
//           <form onSubmit={formik.handleSubmit} className='d-flex flex-column'>
//             <MDBInput
//               wrapperClass='mb-4'
//               name='email'
//               type='email'
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               label='Email address'
//               id='formControlLg'
//               size='lg'
//             />
//             <MDBInput
//               wrapperClass='mb-4'
//               label='Password'
//               name='password'
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               id='formControlLg'
//               type='password'
//               size='lg'
//             />
//             <MDBCheckbox
//               name='flexCheck'
//               id='flexCheckDefault'
//               className='mb-4'
//               label='Remember password'
//             />
//             <button
//               type='submit'
//               className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
//               style={{ flex: '1' }}
              
//             >
//               Login
//             </button>
//           </form>
//           <hr className='my-4' />
//         </MDBCardBody>
//       </MDBCard>
//     </div>
//   );
// }

// export default LawfirmLogin;

// MyVerticallyCenteredModal.jsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let RegistrarToken = localStorage.getItem('RegistrarToken');
const token = RegistrarToken ? localStorage.getItem('RegistrarToken') : localStorage.getItem('accessToken');

function MyVerticallyCenteredModal(props) {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: async (values, { resetForm }) => {
      let endpoint = `/association/association-super-admin/create/${props.associationid}`;

      try {
        const response = await axiosInstance.post(endpoint,values,{
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        // Handle success
        console.log('Response:', response.data);
        toast.success('The invitation of admin sent to the email sucessfully!!..');
        // setSuccessMessage('Admin created successfully!');
        setErrorMessage('');

        resetForm();
        props.onHide();
      } catch (error) {
        toast.error(error.message)
        console.error('Error:', error);

        // Handle error
        setSuccessMessage('');
        setErrorMessage('Error creating admin. Please try again.');
      }
    },
  });

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Superadmin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form id="addRegistrar" onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter name..."
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter email..."
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="phone"
                type="text"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                placeholder="Enter phone..."
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>
          Close
        </Button>
        <button
          form='addRegistrar'
          type='submit'
          className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Create him as an admin
        </button>
      </Modal.Footer>
    </Modal>
  );
}






function AddAssociationAdmin({ associationid, association }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-1 px-6 rounded border-none' onClick={() => setModalShow(true)}>
        Add admin
      </Button>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} associationid={associationid} association={association} />
    </>
  );
}




export default AddAssociationAdmin;





// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import React from 'react';
// import { useFormik } from 'formik';
// import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

// let RegistrarToken = localStorage.getItem('RegistrarToken')
// const token = RegistrarToken ? localStorage.getItem('RegistrarToken') : localStorage.getItem('accessToken')


// function MyVerticallyCenteredModal(props) {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//     },
//     onSubmit: async (values, { resetForm }) => {
//       let endpoint = `/association/association-super-admin/create/${props.associationid}`;

//       try {
//         const response = await axiosInstance.post(endpoint, values, {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         // Handle success as needed
//         console.log('Response:', response.data);

//         resetForm();
//         props.onHide();
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     },
//   });

//   return (
//     <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">Add Superadmin</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form id="addRegistrar" onSubmit={formik.handleSubmit}>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 placeholder="Enter name..."
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="email"
//                 type="text"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 placeholder="Enter email..."
//                 name="email"
//               />
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
//                 Phone
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="phone"
//                 type="text"
//                 name="phone"
//                 value={formik.values.phone}
//                 onChange={formik.handleChange}
//                 placeholder="Enter phone..."
//               />
//             </div>
//           </div>
//         </form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>
//           Close
//         </Button>
//         <button
//           form='addRegistrar'
//           type='submit'
//           className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//         >
//           Create him as an admin
//         </button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function AddAssociationAdmin({ associationid, association }) {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-1 px-6 rounded border-none' onClick={() => setModalShow(true)}>
//         Add admin
//       </Button>

//       <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} associationid={associationid} association={association} />
//     </>
//   );
// }




// export default AddAssociationAdmin;
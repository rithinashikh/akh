import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
import { useFormik } from 'formik';
import { editadvocateSchema } from '../../../schema/advocate/AdvocateSchema'

function EditAdvocate({ setAdvocate }) {

    const [lgShow, setLgShow] = useState(false);
    //   onClick={() => setLgShow(true)}

    const advid = localStorage.getItem('advocateData')
    // const token = localStorage.getItem('advocateToken')

    // const ImpersonateId = localStorage.getItem('id')
    // const advocateid = ImpersonateId ? localStorage.getItem('advid') : null;
    // const adv_token = localStorage.getItem('advocateToken');
    // const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken');
    // useEffect(() => {
    //   let endpoint = '/association/list';
    //   if (advocateid) {
    //     endpoint += `/${advocateid}`
    //   }
    //   axiosInstance.get(endpoint, {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   }).then((response) => {
    //     console.log('response data', response.data);
    //     setAssociation(response.data)
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }, [])

    const ImpersonateId = localStorage.getItem('id')
    const advocateid = ImpersonateId ? localStorage.getItem('advid') : null;
    const adv_token = localStorage.getItem('advocateToken');
    const token = adv_token ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken');


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date_of_birth: '',
            phone: '',
            specialization: '',
            address: '',
            profile_image: ''
        },
        validationSchema: editadvocateSchema,
        onSubmit: async (values) => {
            try {
                let endpoint = `advocates/edit-advocate/${advid}`
                // if(advocateid){
                //     endpoint += `/${advocateid}`
                // }
                const responsedata = await axiosInstance.patch(endpoint, values, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                })

                console.log('response dataa.dataaaaa', responsedata.data);
                setLgShow(false)
                
                handletest(responsedata.data.data)

            } catch (error) {
                console.log(error);
            }

        }

    })

    const handletest = (newdata) => {
        setAdvocate(newdata)
    }
    // const handletest = (newdata) => {
    //     console.log('Updating advocate state with:', newdata);

    //     setAdvocate((prevAdvocate) => ({ ...prevAdvocate, ...newdata }));

    //     // Reload the page after updating the state
    //     window.location.reload(true);
    //   };




    console.log('formik values', formik.values);
    const handleFetch = () => {
        setLgShow(true)
        let endpoint = `advocates/editform-advocate/${advid}`
        // if(advocateid){
        //             endpoint += `/${advocateid}`
        //         }
        axiosInstance.get(endpoint, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            console.log('response dataaaaaaaaa', response.data);
            const { user: { name, email }, profile_image, profile_image_url, date_of_birth, phone, specialization, address } = response.data;
            formik.setValues({
                name,
                email,
                profile_image: profile_image_url,
                date_of_birth,
                phone,
                specialization,
                address
            })
        }).catch((error) => {
            console.log(error);
        })

    }


    console.log('formik values', formik.values);


    return (
        <>

            {/* <Button onClick={() => setLgShow(true)}>Edit profile</Button> */}
            <button style={{ fontSize: '12px' }} className='bg-blue-500 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded' onClick={handleFetch}><i className='bx bx-edit-alt' ></i></button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit advocate
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='editadvocate' onSubmit={formik.handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" value={formik.values.name} onChange={formik.handleChange} name='name' placeholder="name" />

                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    phone
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" value={formik.values.phone} onChange={formik.handleChange} placeholder="enter phone number..." name='phone' />


                            </div>
                        </div>
                        {/* <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" type="email" name='email'    placeholder="enter address" />
             
              
              
            </div>
          </div> */}
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    address
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" value={formik.values.address} onChange={formik.handleChange} placeholder="address" name='address' />

                            </div>
                        </div>
                        {/* <div className="flex flex-wrap -mx-3 mb-6">
                            
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    address
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" value={formik.values.address} onChange={formik.handleChange} placeholder="address" name='address' />


                            </div>
                        </div> */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                    dob
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact_no" type="date" name='date_of_birth' value={formik.values.date_of_birth} onChange={formik.handleChange} placeholder="Enter password" />

                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                    residential address
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact_no" type="text" name='specialization' value={formik.values.specialization} onChange={formik.handleChange} placeholder="Enter residential addresspassword" />

                            </div>

                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    profile_image
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description " name='profile_image' onChange={(event) => formik.setFieldValue('profile_image', event.currentTarget.files[0])} type="file" placeholder="profile image" required />

                            </div>
                            {formik.touched.profile_image && formik.errors.profile_image ? (
                                <div className="text-red-500 text-xs italic">{formik.errors.profile_image}</div>
                            ) : null}

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => setLgShow(false)} >Close</button>
                    <button form='editadvocate' type='sunbmit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >Done </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditAdvocate;
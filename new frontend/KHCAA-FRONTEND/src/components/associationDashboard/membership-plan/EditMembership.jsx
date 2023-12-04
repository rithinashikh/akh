import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUserToken } from '../../../store/slice/AuthSlice';
import { useFormik } from 'formik';
function EditMemberShip({membershipId,setMembership}) {
  const usertoken=useSelector(selectUserToken)
  const [show, setShow] = useState(false);
  // const [membershipdata,setMembershipdata]=useState([])
  // const [duration,setDuration]=useState("")
  

  const formik=useFormik({
    initialValues:{
      duration:'',
      unit_of_plan:'',
      membership_price:''

    },
    onSubmit:async (values)=>{
      await axiosInstance.patch(`/association/membership-plan/edit/${membershipId}`,values,{
        headers:{
          'Authorization':`Bearer ${usertoken}`
        }
      }).then((response)=>{
         console.log(response.data);
      })

      setMembership(prev=>{
        const updateMembership = prev.map(membership=>{
          if(membership.id===membershipId){
            return{...prev,...values};
          }
          return membership
        });
        return updateMembership;

      })
    }


  })
  
  const handleShow= async ()=>{
   console.log(membershipId);
   await axiosInstance.get(`/association/membership-plan/editform/${membershipId}`,{
    headers:{
      'Authorization':`Bearer ${usertoken}`
    }
   }).then((response)=>{
    console.log("response datas ",response.data)
    // setMembershipData(response.data)
    formik.setValues(response.data)

   }).catch((error)=>{
    console.log(error);
   })
    
    setShow(true)

  }

  const handleClose = async (e) => {
    // e.preventDefault()
    // axiosInstance.patch(`/association/membership-plan/edit/${membershipId}`,membershipData).then((response)=>{
    //  console.log( response.data);
    // })
    setShow(false);
  }

 




  return (

    <>
      <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={handleShow}>
      <i className='bx bx-edit-alt' ></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit membership plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editmembership' className="w-full max-w-lg" onSubmit={formik.handleSubmit} >

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Duration
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={formik.values.duration} type="text" name='duration' onChange={formik.handleChange} placeholder="Enter duration..."  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 unit of Plan
                </label>
                {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={formik.values.unit_of_plan} type="text" name='unit_of_plan' onChange={formik.handleChange} placeholder="Enter Plan name..."  /> */}
                <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'name='unit_of_plan' onChange={formik.handleChange} >
                  <option value={formik.values.unit_of_plan}>{formik.values.unit_of_plan}</option>
                  {
                    formik.values.unit_of_plan==='Day' &&(
                      <>
                      <option value="Month">Month</option>
                      <option value='Year'>Year</option>
                      </>
                    )
                  }

                  {
                    formik.values.unit_of_plan === 'Month' &&(
                      <>
                      <option value='Day'>Day</option>
                      <option value="Year">Year</option>
                      </>
                    )
                  }
                  {
                    formik.values.unit_of_plan === 'year' &&(
                      <>
                      <option value="Month">Month</option>
                      <option value="Day">Day</option>
                      </>
                    )
                  }
                  
                </select>

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Membership Plan
                </label>
                
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={formik.values.membership_price}  type="text" name='membership_price' onChange={formik.handleChange}  placeholder="Enter Amount..."  />

              </div>
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form='editmembership' type='submit' variant="primary" onClick={handleClose}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMemberShip;
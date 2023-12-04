import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUserToken } from '../../../store/slice/AuthSlice';
import { useFormik } from 'formik'

function AddMemberShip({setMembership}) {


  // const token=useSelector(selectUserToken)
  const [show, setShow] = useState(false);
  const [trial,setTrial]=useState([])
  // const [duration, setDuration] = useState("");
  // const [unit_of_plan, setUnit_of_plan] = useState("")
  // const [membership_price, setMembership_price] = useState("")

  // const ImpersonateId=localStorage.getItem('id')
  // const membershipdata=ImpersonateId ?localStorage.getItem('adminid') :null;
  
  // let association_token=useSelector(selectUserToken);

  // const token=association_token ? useSelector(selectUserToken) : localStorage.getItem('accessToken')

const association_token = useSelector(selectUserToken);
localStorage.setItem('associationToken',association_token)
     


const impersonateId=localStorage.getItem('id')


const associationdata=impersonateId ? localStorage.getItem('adminid') : null;
const associationToken=localStorage.getItem('associationToken')

const token=associationToken ? localStorage.getItem('associationToken') : localStorage.getItem('accessToken');

// const token = association_token || localStorage.getItem('accessToken')




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const formik=useFormik({
    initialValues:{
      duration:'',
      unit_of_plan:'',
      membership_price:''

    },
    onSubmit: async(values,{resetForm})=>{
      
      let endpoint='/association/membership-plan/create'

      if(associationdata){
        endpoint +=`/${associationdata}`
      }

      await axiosInstance.post(endpoint,values,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      }).then((response)=>{
        console.log(response.data);
        resetForm()
      }).catch((error)=>{
        console.log(error);
      })

      setMembership(prev =>{
        const updateMembership = [...prev,values]

        return updateMembership;
      })
    }
  })

  // console.log(formik.values);
  // const handleSubmit= async (e)=>{
  //   e.preventDefault()
  //   setMembership([...membership, trial]);
  //   let formField =new FormData()
  //   formField.append("duration",duration)
  //   formField.append("unit_of_plan",unit_of_plan)
  //   formField.append("membership_price",membership_price)
  //   await axiosInstance.post('/association/membership-plan/create',formField,{
  //     headers:{
  //       'Authorization':`Bearer ${token}`
  //     }

  //   }).then((response)=>{
  //     setTrial(response.data)
  //     console.log('successfully done');
      
      
      
  //   }).catch((error)=>{
  //     console.log(error);
  //   })

  // }

  return (

    <>
      <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' onClick={handleShow}>
        Add membership plan <span>+</span>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add membership plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='membership' className="w-full max-w-lg" onSubmit={formik.handleSubmit}>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Duration
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='duration' placeholder="Enter duration... ex..5" value={formik.values.duration}  onChange={formik.handleChange} />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Membership unit
                </label>
                
                {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='membership_price' placeholder="Enter Amount..."  value={formik.values.membership_price} onChange={formik.handleChange} /> */}
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='unit_of_plan' value={formik.values.unit_of_plan} onChange={formik.handleChange}>
                  <option value="">select unit</option>
                  <option value="Day">Day</option>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>


                </select>

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                plan amount
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='membership_price' placeholder="Enter Plan amount... ex..₹5000" value={formik.values.membership_price}  onChange={formik.handleChange} />

              </div>
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form='membership' type='submit' onClick={handleClose} variant="primary" >Add Plan</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMemberShip;
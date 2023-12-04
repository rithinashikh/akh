import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
function EditLawfirm({lawfirm}) {
  const [show, setShow] = useState(false);
  // const [membershipdata,setMembershipdata]=useState([])
  // const [duration,setDuration]=useState("")
  const [lawfirmdata, setLawfirmdata] = useState({
    address: '',
    contact_no: '',
    specialization: '',
    description:''
  });
  
  
  
  const handleShow= async ()=>{
   console.log("lawfirm",lawfirm);
   await axiosInstance.get(`/lawfirm/editform-lawfirm/${lawfirm}`).then((response)=>{
    console.log(response.data);
    setLawfirmdata(response.data)

   }).catch((error)=>{
    console.log(error);
   })
    
    setShow(true)

  }
  const handleClose = async () => {
    
    setShow(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLawfirmdata({ ...lawfirmdata, [name]: value });
    
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("lawfirmdata",lawfirmdata);
    axiosInstance.patch(`/lawfirm/edit-lawfirm/${lawfirm}`,lawfirmdata).then((response)=>{
     console.log( response.data);
    }).catch((error)=>{
      console.log(error);
    })
    setShow(false);
  }

  return (

    <>
      <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={handleShow}>
        Edit 
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
          <form id='editmembership' className="w-full max-w-lg" onSubmit={handleSubmit} >

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Address
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  type="text" value={lawfirmdata.address} name='address' onChange={handleChange}  placeholder="Enter address..."  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Contact no
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  type="text" name='contact_no' value={lawfirmdata.contact_no} onChange={handleChange}  placeholder="Enter contact no..."  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                specialization
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  type="text" name='specialization' value={lawfirmdata.specialization} onChange={handleChange}  placeholder="Enter Amount..."  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                description
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  type="text" name='description' value={lawfirmdata.description} onChange={handleChange}  placeholder="Enter Description..."  />

              </div>
              
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form='editmembership' type='submit' variant="primary" >Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditLawfirm;
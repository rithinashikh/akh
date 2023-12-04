import Alert from 'react-bootstrap/Alert';
import './impersonate.css'
// import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
import { useNavigate } from 'react-router-dom'
function ImpersonateAlert() {
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  const sessionId = localStorage.getItem('sessionId')
  // console.log('sessionId',sessionId);
  const RegistrarId = localStorage.getItem('id')
  const handlestop = () => {
    
    axiosInstance.post(`/netmagics/admin/impersonate/stop/${RegistrarId}/${sessionId}`, {}, {

      headers: {
        'Authorization': `Bearer ${accessToken}`

      }

    }).then((response) => {
      console.log(response.data);
      localStorage.removeItem('id')
      localStorage.removeItem('sessionId')
      localStorage.removeItem('RegistrarId')
      navigate('/netmagics/layout/registrar')
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="center-alert">
    <Alert variant="success" className="booming-alert" style={{ position: 'absolute', background: 'rgba(255, 0, 0, 0.5)' }}>
      {/* <Alert.Heading>Hey, Admin</Alert.Heading> */}
      <p style={{fontSize:'15px'}}>
        impersonate as registrar.if you want to stop impersonate,Click the stop button

      </p>
      <hr />
      <button className='shadow bg-green-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded border-none mt-1'onClick={handlestop}>stop</button>
      
    </Alert>
    </div>
  );
}

export default ImpersonateAlert;
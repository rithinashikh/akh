import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import ImpersonateAssociation from '../impersonate-association/ImpersonateAssociation';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,

} from "mdb-react-ui-kit";
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
function MyVerticallyCenteredModal(props) {

    console.log('props.admin', props.admin);
    let getdate
    let curdate
    let formattedDate

   


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {props.associd}
        </Modal.Title>
      </Modal.Header> */}
            <Modal.Body>
                <MDBContainer fluid className="w-100">
                    <MDBRow className="justify-content-center mb-0">
                        <MDBCol  >
                            <MDBCard className="shadow-0 border">
                                <MDBCardBody>
                                    <MDBRow>
                                        {/* <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                          fluid
                          className="w-100"
                          
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                          ></div>
                        </a>
                      </MDBRipple>
                    </MDBCol> */}
                                        <MDBCol md='6' className='mb-4'>
                                            <h5>Association name:- <span className='fw-bold'>{props.assocname}{props.associd}</span></h5>
                                            <div className="d-flex flex-row mt-2">

                                                <h5>Address:- <span className='fw-bold'>{props.address}</span></h5>


                                            </div>
                                            <div className="d-flex flex-row mt-2">
                                                {/* <span>100% cotton</span>
                        <span className="text-primary"> • </span>
                        <span>Light weight</span>
                        <span className="text-primary"> • </span>
                        <span>
                          Best finish
                          <br />
                        </span> */}

                                                <h5>Estd_Date:- <span className='fw-bold'>{props.estd_date}</span></h5>
                                            </div>
                                            <div className="d-flex flex-row mt-2">
                                                <h5>Email:- <span className='fw-bold'>{props.assocemail}</span></h5>

                                            </div>
                                            <p className="text-truncate mb-4 mb-md-0 mt-2">
                                                <h5>Phone:- <span className='fw-bold'>{props.contact_no}</span></h5>

                                            </p>


                                        </MDBCol>
                                        {
                                            props.admin.map((item, index) => (

                                                getdate = item.user.date_joined,
                                                curdate = new Date(getdate),
                                                formattedDate = curdate.toLocaleDateString(),

                                                <MDBCol key={index} className="border-sm-start-none mb-3   border-start">

                                                    <h5>Admin name:- <span className='fw-bold'>{item.user.name}</span></h5>
                                                    <div className="d-flex flex-row mt-2">
                                                        <h5>Court:- <span className='fw-bold'>{item.association.court.name}</span></h5>


                                                    </div>
                                                    <div className="d-flex flex-row mt-2">


                                                        <h5>Phone:- <span className='fw-bold'>{props.contact_no}</span></h5>
                                                    </div>
                                                    <div className="d-flex flex-row mt-2">
                                                        <h5>Email:- <span className='fw-bold'></span>{item.user.email}</h5>

                                                    </div>
                                                    <p className="text-truncate mb-4 mb-md-0 mt-2">

                                                        <span style={{ overflow: 'hiden' }}>Date of joined :-{formattedDate}</span>

                                                    </p>

                                                    <div className="d-flex flex-row mt-4 mb-4 justify-content-center">
                                                        {/* <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded" onClick={()=>handleStart(item.user.id)}>
                                                            <span className='fw-light'>Impersonate</span><i className='bx bx-right-top-arrow-circle bx-tada bx-rotate-90 fs-6 fw-light'></i>
                                                        </button> */}
                                                        <ImpersonateAssociation adminid={item.user.id} adminname={item.user.name}/>
                                                    </div>
                                                    <hr/>
                                                </MDBCol>

                                            ))
                                        }
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>


                </MDBContainer>
            </Modal.Body>
            {/* <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}

        </Modal>

    );
}

function AssociationDetails({ associd, assocname, assocemail, estd_date, contact_no, address }) {
    const [modalShow, setModalShow] = React.useState(false);
    const [admin, setAdmin] = useState([])
    const token = localStorage.getItem('accessToken')

    const handleFetch = (associd) => {
        axiosInstance.get(`association/admins/${associd}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            
            setModalShow(true)
            setAdmin(response.data)
        }).catch((error) => {
            console.log(error);
        })

    }


    // const user=admin[0]?.user
    // const username=user?.name;
    // console.log('admin',user);
    // console.log('admin user',username);

    return (
        <>
            <Button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-light py-2 px-4 rounded border-none' onClick={() => handleFetch(associd)}>
                Details
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                assocname={assocname}
                assocemail={assocemail}
                estd_date={estd_date}
                contact_no={contact_no}
                address={address}
                associd={associd}
                admin={admin}


            />
        </>
    );
}

export default AssociationDetails
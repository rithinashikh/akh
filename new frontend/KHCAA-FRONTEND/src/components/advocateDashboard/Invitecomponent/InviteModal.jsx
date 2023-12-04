import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import './invite.scss'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";



function MyVerticallyCenteredModal(props) {
  // const token = localStorage.getItem('advocateToken')
  const advid = localStorage.getItem('advocateData')
  const lawfirm_id = props.invite.lawfirm.id

  const impersonateId = localStorage.getItem('id')

  const advocateData = impersonateId ? localStorage.getItem('advid') : null

  const advtoken = localStorage.getItem('advocateToken')

  const token = advtoken ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')

  const handleAccept = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Accept it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
      customContainerClass: 'swal-buttons-container'
    }).then((result) => {
      if (result.isConfirmed) {
        let endpoint = `/lawfirm/accept-invitation-advocate/${advid}/${lawfirm_id}`
        if (advocateData) {
          endpoint += `/${advocateData}`
        }
        try {
          axiosInstance.patch(endpoint, {

          },{
            headers:{
              'Authorization':`Bearer ${token}`
            }
          }).then((response) => {
            console.log(response.data);
          }).catch((error) => {
            console.log(error);
          })
          
        } catch (error) {
          console.log(error);
        }
        swalWithBootstrapButtons.fire(
          'Accepted!',
          'Your request has been accepted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header >

      </Modal.Header> */}
      <Modal.Body >
        {


        }

        <MDBContainer fluid className="w-100">
          <MDBRow className="justify-content-center mb-0">
            <MDBCol md="12" xl="10">
              <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
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
                    </MDBCol>
                    <MDBCol md="6">
                      <h5>Firm name:- <span className='fw-bold'>{props.invite.lawfirm.name}</span></h5>
                      <div className="d-flex flex-row mt-2">
                        <h5>Specialization:- <span className='fw-bold'>{props.invite.lawfirm.specialization}</span></h5>


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

                        <h5>Phone:- <span className='fw-bold'>{props.invite.lawfirm.contact_no}</span></h5>
                      </div>
                      <div className="d-flex flex-row mt-2">
                        <h5>Email:- <span className='fw-bold'>{props.invite.lawfirm.email}</span></h5>

                      </div>
                      <p className="text-truncate mb-4 mb-md-0 mt-2">
                        <span style={{ overflow: 'hiden' }}>Description :-</span>
                        {
                          props.invite.lawfirm.description


                        }
                      </p>

                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      {/* <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">$13.99</h4>
                        <p>{props.invite.user?.name}</p>
                        

                        <span className="text-danger">
                          <s>$20.99</s>
                        </span>
                      </div> */}
                      <h5>Address:-{props.invite.lawfirm.address}</h5>
                      {/* <h6 className="text-success">Free shipping</h6> */}
                      <div className="d-flex flex-column mt-4">
                        <button form='addcourt' type='submit' className='bg-teal-500 hover:bg-blue-700 text-white font-normal text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline' onClick={handleAccept} >Accept </button>
                        <button className=' mt-2 bg-teal-500 hover:bg-blue-700 text-white font-normal text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide} >Ignore </button>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>


        </MDBContainer>


      </Modal.Body>


    </Modal>

  );
}


function InviteModal({ invitation_id, invite }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className='shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded border-none'
        onClick={() => setModalShow(true)}

      >
        Details
      </Button>



      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        invite={invite}
        invitation_id={invitation_id}

      />
    </>
  );
}

export default InviteModal
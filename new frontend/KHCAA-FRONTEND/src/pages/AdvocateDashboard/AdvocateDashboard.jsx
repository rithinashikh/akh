import React, { useEffect, useState } from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../../components/netmagicsdashboard/dashboard-wrapper/DashboardWrapper'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import InviteModal from '../../components/advocateDashboard/Invitecomponent/InviteModal';
import { useNavigate } from 'react-router-dom';
import EditAdvocate from '../../components/advocateDashboard/edit-advocate/EditAdvocate';
import LoadingAnimation from '../../components/loader/LoadingAnimation';


import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { legacy_createStore } from '@reduxjs/toolkit';

function Dashboard() {
  const [advocate, setAdvocate] = useState([])
  // const [datatype, setDatatype] = useState('notification')
  const [invitation, setInvitation] = useState([])
  // const [showComponent,setShowComponent]=useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const sessionId = localStorage.getItem('sessionId')
  const ImpersonateId = localStorage.getItem('id')

  const advcoatedata = ImpersonateId ? localStorage.getItem('advid') : null;

  const advtoken = localStorage.getItem('advocateToken')

  const token = advtoken ? localStorage.getItem('advocateToken') : localStorage.getItem('accessToken')

  useEffect(() => {
    setLoading(true)
    let endpoint = '/advocates/profile';
    if (advcoatedata) {
      endpoint += `/${advcoatedata}`
    }
    axiosInstance.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setLoading(false)
      setAdvocate(response.data)
      localStorage.setItem('advocateData', response.data.id)
    }).catch((error)=>{
      setLoading(false)
      console.log(error);
    })
  }, [])

  useEffect(() => {
    let invendpoint = '/lawfirm/invitation-in-advocate';
    if (advcoatedata) {
      invendpoint += `/${advcoatedata}`
    }
    axiosInstance.get(invendpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {

      setInvitation(response.data)

    }).catch((error) => {
      console.log(error);
    })
  }, [])

  const handleStop = () => {
    try {
      axiosInstance.post(`/netmagics/admin/impersonate/stop/${ImpersonateId}/${sessionId}`, {}, {

        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        console.log(response.data);
        localStorage.removeItem('id')
        localStorage.removeItem('sessionId')
        localStorage.removeItem('ImpersonateId')
        localStorage.removeItem('advid')
        navigate('/netmagics/layout/advocate')
      })


    } catch (error) {
      console.log(error);

    }

  }

  // const handlefetchdata = (data) => {
  //   if (data === 'notification') {
  //     setDatatype('notification')
  //     alert(datatype)
  //   } else {
  //     setDatatype('invitation')
  //     alert(datatype)
  //   }
  // }

  return (
    <div>
      <DashboardWrapper>
        <DashboardWrapperMain>
          <section >
            {/* style={{ backgroundColor: '#eee' }} */}
            <MDBContainer className="py-5">

              {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src={advocate?.profile_image_url}
                        alt="avatar"
                        className=""
                        style={{ width: '250px' }}
                        fluid />
                      <p className="text-muted mb-1"></p>
                      <p className="text-muted mb-4"></p>
                      <div className="d-flex justify-content-center mb-2">
                        {/* <MDBBtn>Follow</MDBBtn> */}
                        {
                          <EditAdvocate setAdvocate={setAdvocate}/>
                          
                        }
                        
                      </div>
                    </MDBCardBody>
                  </MDBCard>

                  {/* <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard> */}
                </MDBCol>
                <MDBCol lg="8">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">{advocate?.user?.name}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">

                          <MDBCardText className="text-muted">{advocate?.user?.email}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">

                          <MDBCardText className="text-muted">{advocate?.phone}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      {/* <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow> */}
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Official address:</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">{advocate?.address}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBCard className="mb-4 mb-md-0">
                        <MDBCardBody>
                          <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Residential address:</MDBCardText>
                          <MDBCardText className="mb-4"><span className=" font-italic me-1"><br/>{advocate?.specialization}</span></MDBCardText>
                          {/* <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Address</MDBCardText> */}
                          <hr />

                          {/* <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress> */}
                          {/* <p>official Address:<br/> {advocate?.specialization}</p> */}

                          {/* <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress> */}

                          {/* <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress> */}

                          {/* <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress> */}

                          {/* <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress> */}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBCard className="mb-4 mb-md-0">
                        <MDBCardBody>
                          <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Notification</span>Invitation</MDBCardText>

                          {/* <Button variant="primary" className="w-100 mb-2" onClick={handlefetchdata('notification')}>
        Notification <Badge bg="light" className='text-dark'>9</Badge>
        
      </Button>

      <Button variant="primary" className="w-100" onClick={handlefetchdata('invitation')}>
        Invitation <Badge bg="light" className='text-dark'>9</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button> */}
                          <Button variant="primary" className="w-100 mb-2" >
                            Notification <Badge bg="light" className='text-dark'>0</Badge>
                          </Button>

                          <Button variant="primary" className="w-100" >
                            Invitation <Badge bg="light" className='text-dark'>{invitation.length}</Badge>
                            <span className="visually-hidden">unread messages</span>
                          </Button>
                          {
                            sessionId ? <Button variant="primary" className="w-100 mt-2" onClick={handleStop}>
                              stop impersonate

                            </Button> : ''
                          }
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>

                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          {/* <div className="row">
            <div className="col-12">
              <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">


                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mb-4">
                        <div className="card-body text-center">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                            className="rounded-circle img-fluid" style={{ width: '150px' }} />
                          <h5 className="my-3">{advocate?.user?.name}</h5>
                          <p className="text-muted mb-1">{advocate?.user?.email}</p>
                          <p className="text-muted mb-4">{advocate.phone}</p>
                          <div className="d-flex justify-content-center mb-2">
                            <button type="button" className="btn btn-primary">EditProfile</button>
                            
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-8">
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Name</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{advocate?.user?.name}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Email</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{advocate?.user?.email}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Phone</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{advocate.phone}</p>
                            </div>
                          </div>
                          <hr />

                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Address</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{advocate.address}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card mb-4 mb-md-0">
                            <div className="card-body">
                              <p className="mb-4"><span className="text-primary font-italic me-1">{advocate.specialization}</span> lawyer</p>
                              <p className="mb-1" style={{ fontSize: '.77rem' }}>{advocate.specialization}</p>
                              <div className="progress rounded" style={{ height: '5px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>www.khcaa.com</p>

                            </div>
                          </div>
                        </div>


                      </div>
                      
                      

                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div> */}

        </DashboardWrapperMain>
        <DashboardWrapperRight>

          <div>

            <div>
              {invitation.map((invite) => (
                <Alert key={invite.id} variant="success">
                  {/* {
                    showComponent&&<detailspage/>
                  } */}
                  <Alert.Heading>Hey, {advocate?.user?.name}</Alert.Heading>
                  <p>
                    You have an invitation from <span className='fw-bold'> {invite.lawfirm.name}</span> firm
                  </p>

                  <InviteModal invitation_id={invite.id} invite={invite} />
                </Alert>
              ))}

            </div>

          </div>
          {loading && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <LoadingAnimation color="#3498db" loading={loading} size={15} />
        </div>
      )}

        </DashboardWrapperRight>
      </DashboardWrapper>
    </div>
  )
}

export default Dashboard


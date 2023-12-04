import React,{useEffect} from 'react'
import '../../../styles/advocates/directorymemberlist.css'
import adv from '../../../assets/images/ada.jpg'

function DirectoryMemberList() {
    useEffect(() => {
        
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('fade-in');
        });
    }, []);
    return (
        <>
            <div className='memberdirectory-maincontainer'>
                <div className="memberdirectory-subcontainer">
                    <div className="member-searchcontainer">
                        <p className='member-find-lawyer'>Find Lawyer</p>
                        <input type="text" name="" id="" className='member-directory-search' placeholder='Search...' />
                    </div>
                    <div className='directory-member-list'>
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Adarsh S</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                        
                                    </div>
                                </div>
                            </div>


                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>John Doe</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>    
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Jane Smith</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>


                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div class="card">
                                    <img src={adv} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>Maria Rodriguez</b></h4>
                                        <p>High Court of Kerala</p>
                                        <p>9249483243</p>
                                        <p>adv@adarshs.com</p>
                                        <button>profile</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DirectoryMemberList

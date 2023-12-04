// import React, { useEffect } from "react";
// import adv from '../../assets/images/ada.jpg';
// import '../../styles/Directories/directoriememberlist.css';
// import '../../styles/Directories/directoriememberlist.css'

// function VarietyDirectoryMemberList() {

//     useEffect(() => {
//         let cards = document.querySelectorAll('.variety-card'); // Change class name
//         cards.forEach(card => {
//             card.classList.add('fade-in');
//         });
//     }, []);

//     return (
//         <>
//             <div className='variety-memberdirectory-maincontainer'>
//                 <div className="variety-memberdirectory-subcontainer">
//                     <div className="variety-member-searchcontainer">
//                         <p className='variety-member-find-lawyer'>Find Lawyer</p>
//                         <input type="text" name="" id="" className='variety-member-directory-search' placeholder='Search...' />
//                     </div>
//                     <div className='variety-directory-member-list'>
//                         <div className="row">
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name"><b>Adarsh S</b></h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name"><b>Adarsh S</b></h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name"><b>Adarsh S</b></h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name"><b>Adarsh S</b></h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name"><b>Adarsh S</b></h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name"><b>Adarsh S</b></h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name"><b>Adarsh S</b></h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name"><b>Adarsh S</b></h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name">Adarsh S</h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name">Adarsh S</h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name">Adarsh S</h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name">Adarsh S</h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name">Adarsh S</h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile" >
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name">Adarsh S</h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name">Adarsh S</h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 advocate-card-profile">
//                                 <div className="variety-card">
//                                     <img src={adv} alt="Avatar" />
//                                     <div className="variety-card-container">
//                                         <h4 className="advocate-name">Adarsh S</h4>
//                                         <p className="highcourt-kerala">High Court of Kerala</p>
//                                         <p className="advocate-mobilnumber">9249483243</p>
//                                         <p className="advocate-email">adv@adarshs.com</p>
//                                         <button className="advocate-profile-button" >View Profile<i class='bx bx-right-arrow-alt bx-flashing' ></i></button>
//                                     </div>
//                                 </div>
//                             </div>
                           
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div>
                
//             </div>
//         </>
//     )
// }

// export default VarietyDirectoryMemberList;

import React from "react";
// import '../../style/AdvocateDirectories/khcaadirectorylist.css'
import '../../styles/Directories/directoriememberlist.css';
// import adv from '../../assets/ada.jpg'
import adv from '../../assets/images/ada.jpg'

function VarietyDirectoryMemberList() {
    return (
        <>
            <div className="khcaaDirectorylist-parent-container">
                <div className="khcaaDirectorylist-search-container">
                    <div className="khcaaDirectorylist-findlawyer-container">
                        <div className="khcaaDirectorylist-findlawyer">
                            <p>Find Lawyer</p>
                        </div>
                        <div className="KhcaaDirectorylist-searchlawyer">
                            <input type="text" className="khcaaDirectorylist-input-text" placeholder="Search lawyer" />
                        </div>

                    </div>
                </div>
            </div>

            {/* memberlist */}
            

            <div className="khcaaDirectorylist-membercard-lists">
                <div className="khcaaDirectorylist-membercars-for-advocates">
                  
                <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
        <div className="khcaaDirectorylist-profile-card">
            <img src={adv} alt="Advocate Name" className="profile-image" />
            <div className="profile-details">
                <h2 className="khcaaDirectory-advocate-name">adv adarsh s</h2>
                <p className="khcaaDirectory-advocate-court">High court of kerala</p>
                <p className="khcaaDirectory-advocate-number">9249483243</p>
                <p className="khcaaDirectory-advocate-email">adv@Adarshs.com</p>
                <button className="khcaaDirectory-advocate-viewprofile">view profile</button>
            </div>
        </div>
                </div>

            </div>
           
            

        </>
    )
}

export default VarietyDirectoryMemberList








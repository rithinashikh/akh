import React, { useState } from "react";
import '../../style/AdvocateDirectories/khcaaDirectorynav.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function KhcaaDirectoryNav() {
    const [activeTab, setActiveTab] = useState('Home');
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);

    };
    const handleMouseEnter = () => {
        setIsSubMenuVisible(true);
    };
    
    const handleMouseLeave = () => {
        setIsSubMenuVisible(false);
    };

    return (
        <>

            <div className="advocate-navbar-for-socialmedia">
                <div>
                </div>

                <div>
                    <FaFacebookSquare style={{ marginRight: '10px' }} />
                    <FaYoutube />
                </div>
            </div>
            <div>

            </div>

            <div className="advocate-navbar-khcaa-logo-number-parent">
                <div className="advocate-navbar-khcaa-logo-number">
                    <div className="advocate-navbar-khcaa-logo">
                        <img src="http://www.khcaa.com/wp-content/uploads/2020/12/Header-Logo.png" alt="khcaa" />
                    </div>
                    <div>
                        <p>Contact: +91-484-2393244</p>
                    </div>

                </div>
            </div>

            <hr />
            <div className="advocate-navigationbar-for-khcaa-parentdiv">
                <div className="advocate-navigationbar-for-khcaa">
                    <div onClick={() => handleTabClick("Home")} className={activeTab === "Home" ? "advocate-navbar-active-tab advocate-navbar-for-home navigation-bar" : "advocate-navbar-for-home navigation-bar"}> Home </div>

                    {/* className="advocate-navbar-for-home  navigation-bar" */}
                    <div className="navigation-bar">|</div>
                    {/* <div
                        onClick={() => handleTabClick("About us")}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={activeTab === "About us" ? "advocate-navbar-active-tab advocate-navbar-for-About navigation-bar" : "advocate-navbar-for-About navigation-bar"}
                    >
                        About us
                        {isSubMenuVisible && (
                            <div className="advocate-about-us-submenu">
                                <p>submenu 1</p>
                                <p>submenu 2</p>
                                <p>submenu 3</p>
                                <p>submenu 4</p>
                            </div>
                        )}
                    </div> */}
                    <div
                        onClick={() => handleTabClick("About us")}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={activeTab === "About us" ? "advocate-navbar-active-tab advocate-navbar-for-About navigation-bar" : "advocate-navbar-for-About navigation-bar"}
                    >
                        About us
                        <div className={isSubMenuVisible ? "submenu visible" : "submenu"}>
                            <ul>
                                <li>one </li>
                                <li>two</li>
                                <li>three</li>
                                <li>four</li>
                                <li>five</li>
                                <li>six</li>
                            </ul>
                        </div>
                    </div>

                    <div className="navigation-bar">|</div>
                    <div onClick={() => handleTabClick("Notices")} className={activeTab === "Notices" ? "advocate-navbar-active-tab advocate-navbar-for-notices navigation-bar" : "advocate-navbar-for-notices navigation-bar"}  >Notices</div>
                    <div className="navigation-bar">|</div>
                    <div onClick={() => handleTabClick("Resources")} className={activeTab === "Resources" ? "advocate-navbar-active-tab advocate-navbar-for-resources navigation-bar" : "advocate-navbar-for-resources navigation-bar"} >Resources</div>
                    <div className="navigation-bar">|</div>
                    <div onClick={() => handleTabClick("Gallery")} className={activeTab === "Gallery" ? "advocate-navbar-active-tab advocate-navbar-for-gallery navigation-bar" : "advocate-navbar-for-gallery navigation-bar"} >Gallery</div>
                    <div className="navigation-bar">|</div>
                    <div onClick={() => handleTabClick("Calender")} className={activeTab === "Calender" ? "advocate-navbar-active-tab advocate-navbar-for-calender navigation-bar" : "advocate-navbar-for-calender navigation-bar"}>Calender</div>
                    <div className="navigation-bar">|</div>
                    <div onClick={() => handleTabClick("Members Directory")} className={activeTab === "Members Directory" ? "advocate-navbar-active-tab advocate-navbar-for-Members-Directory navigation-bar" : "advocate-navbar-for-Members-Directory navigation-bar"} >Members Directory</div>
                    <div className="navigation-bar">|</div>
                    <div onClick={() => handleTabClick("Contact")} className={activeTab === "Contact" ? "advocate-navbar-active-tab advocate-navbar-for-contact navigation-bar" : "advocate-navbar-for-contact navigation-bar"}>Contact</div>
                    <div className="navigation-bar">|</div>
                    <div onClick={() => handleTabClick("Members Login")} className={activeTab === "Members Login" ? "advocate-navbar-active-tab advocate-navbar-for-Members-Login navigation-bar" : "advocate-navbar-for-Members-Login navigation-bar"} >Members Login</div>
                </div>
            </div>
            <hr className="advocate-navbar-bottom-line" />
        </>
    )
}

export default KhcaaDirectoryNav
import React, { useState } from "react";
import '../../styles/Directories/memberDirectoryNav.css';

function MemberDirectoryNav() {
    const [activeTab, setActiveTab] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleTabClick = (tabName) => {

        setActiveTab(tabName);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleCloseButtonClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className='member-directory'>
                <div className='facebook-container'>
                    <div className='facebook-subcontainer'>
                        <div>
                            <i className='bx bxl-facebook facebook-logo'></i>
                            <i className='bx bxl-youtube youtube-logo'></i>
                        </div>
                    </div>
                </div>
                <div className='member-container'>
                    <div className='member-subcontainer'>
                        <div className='member-khcaimage'>
                            <img src="http://www.khcaa.com/wp-content/uploads/2020/12/Header-Logo.png" alt="KHCAA" />
                        </div>
                        <div className='member-phone'>
                            <p>Contact: +91-484-2393244</p>
                        </div>
                    </div>
                </div>
                <hr className="line" />
                {/* <div className='member-nav'>
                    <div className={`hamburger-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} onClick={toggleMobileMenu}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                    <nav className={`member-navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                        <ul className='nav-ul'>
                        <li onClick={() => handleTabClick("Home")} className={activeTab === "Home" ? "active" : ""}>Home</li>
                <li>|</li>
                <li onClick={() => handleTabClick("About us")} className={activeTab === "About us" ? "active" : ""}>
                    About us
                    <ul class="submenu">
                        <li>About KHCAA</li>
                        <li>History of BAR</li>
                        <li>President's Desk</li>
                        <li>Executive Committee</li>
                        <li>Former Presidents & Secretaries</li>
                        <li>Voters List</li>
                    </ul>
                </li>
                <li>|</li>
                <li onClick={() => handleTabClick("Notice")} className={activeTab === "Notice" ? "active" : ""}>Notice</li>
                <li>|</li>
                <li onClick={() => handleTabClick("Resource")} className={activeTab === "Resource" ? "active" : ""}>Resource
                    <ul className='submenu'>
                        <li>KHCAA Annual Day 2023</li>
                        <li>Rules & Regulations</li>
                        <li>GJCC Byelaws</li>
                        <li>Medical Aid Scheme</li>
                        <li>Social Security Scheme-|</li>
                        <li>Social Security Scheme-||</li>
                        <li>Downloads</li>
                    </ul>
                </li>
                <li>|</li>
                <li onClick={() => handleTabClick("Gallery")} className={activeTab === "Gallery" ? "active" : ""}>Gallery
                    <ul className='submenu'>
                         <li>Photo Gallery</li>
                         <li>Video Gallery</li>
                    </ul>
                </li>
                <li>|</li>
                <li onClick={() => handleTabClick("Calender")} className={activeTab === "Calender" ? "active" : ""}>Calender</li>
                <li>|</li>
                <li onClick={() => handleTabClick("Members Directory")} className={activeTab === "Members Directory" ? "active" : ""}>Members Directory</li>
                <li>|</li>
                <li onClick={() => handleTabClick("Contact")} className={activeTab === "Contact" ? "active" : ""}>Contact</li>
                <li>|</li>
                <li onClick={() => handleTabClick("Member Login")} className={activeTab === "Member Login" ? "active" : ""}>Member Login</li>
                        </ul>
                    </nav>
                </div> */}

                <div className='member-nav'>
                    
                    <div className={`hamburger-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} onClick={toggleMobileMenu}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                    
                    <nav className={`member-navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    
                        <ul className={`nav-ul ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                        {isMobileMenuOpen && (
                        <button  className="close-button-for-membernav" onClick={handleCloseButtonClick}>
                            <i class='bx bx-window-close'></i>
                        </button>
                    )}
                            <li onClick={() => handleTabClick("Home")} className={activeTab === "Home" ? "active" : ""}>Home</li>
                            <li className="advocate-navbar-line">|</li>
                            <li onClick={() => handleTabClick("About us")} className={activeTab === "About us" ? "active" : ""}>
                                About us
                                <ul class="submenu">
                                    <li onClick={() => handleTabClick("About KHCAA")}>About KHCAA</li>
                                    <li onClick={() => handleTabClick("History of BAR")}>History of BAR</li>
                                    <li onClick={() => handleTabClick("President's Desk")}>President's Desk</li>
                                    <li onClick={() => handleTabClick("Executive Committee")}>Executive Committee</li>
                                    <li onClick={() => handleTabClick("Former Presidents & Secretaries")}>Former Presidents & Secretaries</li>
                                    <li onClick={() => handleTabClick("Voters List")}>Voters List</li>
                                </ul>
                            </li>
                            <li className="advocate-navbar-line">|</li>
                            <li onClick={() => handleTabClick("Notice")} className={activeTab === "Notice" ? "active" : ""}>Notice</li>
                            <li className="advocate-navbar-line">|</li>
                            <li onClick={() => handleTabClick("Resource")} className={activeTab === "Resource" ? "active" : ""}>Resource
                                <ul className='submenu'>
                                    <li>KHCAA Annual Day 2023</li>
                                    <li>Rules & Regulations</li>
                                    <li>GJCC Byelaws</li>
                                    <li>Medical Aid Scheme</li>
                                    <li>Social Security Scheme-|</li>
                                    <li>Social Security Scheme-||</li>
                                    <li>Downloads</li>
                                </ul>
                            </li>
                            <li className="advocate-navbar-line">|</li>
                            <li onClick={() => handleTabClick("Gallery")} className={activeTab === "Gallery" ? "active" : ""}>Gallery
                                <ul className='submenu'>
                                    <li>Photo Gallery</li>
                                    <li>Video Gallery</li>
                                </ul>
                            </li>
                            <li className="advocate-navbar-line">|</li>
                            <li onClick={() => handleTabClick("Calender")} className={activeTab === "Calender" ? "active" : ""}>Calender</li>
                            <li className="advocate-navbar-line">|</li>
                            <li onClick={() => handleTabClick("Members Directory")} className={activeTab === "Members Directory" ? "active" : ""}>Members Directory</li>
                            <li className="advocate-navbar-line">|</li>
                            <li onClick={() => handleTabClick("Contact")} className={activeTab === "Contact" ? "active" : ""}>Contact</li>
                            <li className="advocate-navbar-line">|</li>
                            <li onClick={() => handleTabClick("Member Login")} className={activeTab === "Member Login" ? "active" : ""}>Member Login</li>
                        </ul>
                    </nav>
                </div>
                <hr className="under-line-for-nav" />
            </div>
        </>
    );
}

export default MemberDirectoryNav;

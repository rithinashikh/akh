import React from 'react'
import '../../../styles/advocates/membernav.css'
function MemberNav() {

    
  return (
    <>
    <div className='member-directory'>
    <div className='facebook-container'>
        <div className='facebook-subcontainer'>
            <div>
            <i className='bx bxl-facebook facebook-logo'></i>
            <i class='bx bxl-youtube youtube-logo' ></i>
            </div>
        
        </div>
    </div>
    <div className='member-container'>
        <div className='member-subcontainer'>
      <div className='member-khcaimage'>
      <img src="http://www.khcaa.com/wp-content/uploads/2020/12/Header-Logo.png" alt="KHCAA" />
      </div>
      <div className='member-phone'>
            <p>Contact:  +91-484-2393244</p>
      </div>
      </div>
    </div>
    <hr className="line"/>
    <div className='member-nav'>
    <nav className='member-navigation'>
        <ul className='nav-ul'>
            <li>Home</li>
            <li>|</li>
            <li>
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
            <li>Notice</li>
            <li>|</li>
            <li>Resource
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
            <li>Gallery
                <ul className='submenu'>
                     <li>Photo Gallery</li>
                     <li>Video Gallery</li>
                </ul>
            </li>
            <li>|</li>
            <li>Calender</li>
            <li>|</li>
            <li>Members Directory</li>
            <li>|</li>
            <li>Contact</li>
            <li>|</li>
            <li>Member Login</li>
        </ul>
    </nav>
</div>



    </div>
    </>
  )
}

export default MemberNav

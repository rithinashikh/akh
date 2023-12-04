//   import React from "react";
//   import '../../styles/Directories/memberfooter.css'
//   function MemberDirectoryFooter(){
//     return(
//       <>
//        <footer className='footer-container'>
    
//   <section className='footer-top'>
  
//     <ul className='contact-info'>
//       <li>
//         <h3>CONTACTS</h3>
//         <address className='footer-members-list'>
//           KHCAA, High Court of Kerala, Erankulam,
//           <br />
//           <a href='tel:+9104842393244'>+91-0484-2393244</a>
//           <br />
//           <a href='tel:+9104842394435'>0484-2394435</a>
//           <br />
//           <a href='mailto:k.hcaa@yahoo.com'>k.hcaa@yahoo.com</a>
//         </address>
//       </li>
//       <li>
//         <h3>RECENT POSTS</h3>
//         <address>
//         <a href='https://www.khcaa.com/2023/10/26/calender-printing-quotations-are-invited/'>Calender Printing - Quotations are invited</a><br/>
//         <a href='https://www.khcaa.com/2023/10/26/renewal-of-ordinary-membership-last-date-19-11-2023/'>Renewal of Ordinary Membership - Last date 19.11.2023</a><br/>
//         <a href='https://www.khcaa.com/2023/10/20/sitting-notice-174/'>Sitting Notice</a>
//         </address>
//       </li>
//     </ul>
//   </section>

//   <section className='footer-top'>
//     <div>
//     <h3>CONTACTS</h3>
//     <address className='footer-members-list' style={{fontWeight:'100'}}>
//           KHCAA, High Court of Kerala, Erankulam,
//           <br />
//           <a style={{fontWeight:'100'}} href='tel:+9104842393244'>+91-0484-2393244</a>
//           <br />
//           <a style={{fontWeight:'100'}} href='tel:+9104842394435'>0484-2394435</a>
//           <br />
//           <a style={{fontWeight:'100'}} href='mailto:k.hcaa@yahoo.com'>k.hcaa@yahoo.com</a>
//         </address>

//     </div>

//     <div>
//     <h3>RECENT POSTS</h3>
//         <address>
//         <a href='https://www.khcaa.com/2023/10/26/calender-printing-quotations-are-invited/' style={{fontWeight:'100'}}>Calender Printing - Quotations are invited</a><br/>
//         <a href='https://www.khcaa.com/2023/10/26/renewal-of-ordinary-membership-last-date-19-11-2023/' style={{fontWeight:'100'}}>Renewal of Ordinary Membership - Last date 19.11.2023</a><br/>
//         <a href='https://www.khcaa.com/2023/10/20/sitting-notice-174/' style={{fontWeight:'100'}}>Sitting Notice</a>
//         </address>

//     </div>

//   </section>
//   <hr style={{marginBottom:'20px'}}/>
//   <div className='footer-container-image-logo'>
//     <img src='http://www.khcaa.com/wp-content/uploads/2020/12/Header-Logo.png' style={{marginLeft:'-150px'}} alt='Footer Image' className='footer-logo' />
//     <div>
//     <i className='bx bxl-facebook facebook-logo'></i>
//         <i class='bx bxl-youtube youtube-logo' ></i>
//         </div>
//         </div>
//         <hr/>
//   <section className='footer-bottom'>
//     <div>
//       <p style={{fontWeight:'100'}}>Copyright © 2020 - 2023. KHCAA. All rights reserved</p>
//     </div>
//     <div>
//       <p style={{fontWeight:'100'}}>Website Developed & Maintained by Netmagics</p>
//     </div>
//   </section>
// </footer>
//       </>
    
//     )

//   }
//   export default MemberDirectoryFooter





import React from "react";

import '../../styles/Directories/directoryadvocatefooter.css'
function DirectoryAdvocateFooter() {
  return (
    <>
      <footer className='new-footer-container'>
        <div className='new-footer-top'>
          <div className='new-footer-info'>
            <h3>CONTACTS</h3>
            <address className='new-footer-members-list' style={{ fontWeight: '100' }}>
              KHCAA, High Court of Kerala, Erankulam,
              <br />
              <a style={{ fontWeight: '100' }} href='tel:+9104842393244'>+91-0484-2393244</a>
              <br />
              <a style={{ fontWeight: '100' }} href='tel:+9104842394435'>0484-2394435</a>
              <br />
              <a style={{ fontWeight: '100' }} href='mailto:k.hcaa@yahoo.com'>k.hcaa@yahoo.com</a>
            </address>
          </div>
          <div className='new-footer-info'>
            <h3>RECENT POSTS</h3>
            <address>
              <a href='https://www.khcaa.com/2023/10/26/calender-printing-quotations-are-invited/' style={{ fontWeight: '100' }}>Calender Printing - Quotations are invited</a><br />
              <a href='https://www.khcaa.com/2023/10/26/renewal-of-ordinary-membership-last-date-19-11-2023/' style={{ fontWeight: '100' }}>Renewal of Ordinary Membership - Last date 19.11.2023</a><br />
              <a href='https://www.khcaa.com/2023/10/20/sitting-notice-174/' style={{ fontWeight: '100' }}>Sitting Notice</a>
            </address>
          </div>
        </div>
        <hr style={{ marginBottom: '20px' }} />
        <div className='new-footer-container-image-logo'>
          <img src='http://www.khcaa.com/wp-content/uploads/2020/12/Header-Logo.png' style={{ marginLeft: '-150px' }} alt='Footer Image' className='new-footer-logo' />
          <div>
            <i className='bx bxl-facebook facebook-logo'></i>
            <i className='bx bxl-youtube youtube-logo'></i>
          </div>
        </div>
        <hr />
        <div className='new-footer-bottom'>
          <div>
            <p style={{ fontWeight: '100' }}>Copyright © 2020 - 2023. KHCAA. All rights reserved</p>
          </div>
          <div>
            <p style={{ fontWeight: '100' }}>Website Developed & Maintained by Netmagics</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default DirectoryAdvocateFooter;


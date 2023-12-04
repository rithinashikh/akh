import React from "react";
import '../../style/AdvocateDirectories/khcaaDirectoryfooter.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function KhcaaDirectoryFooter() {
    return (
        <div className="khcaaDirectoryfooter-parent">
            <div className="khcaaDirectoryfooter-child">
                <div className="khcaaDirectoryfooter-div-for-first-box">


                    <div className="khcaaDirectoryfooter-div-for-contacts">
                        <h3>CONTACTS</h3>
                        <address>
                            KHCAA, High Court of Kerala, Ernakulam, Kerala, 682031,
                        </address>
                        <p>+91-0484-2393244</p>
                        <p>0484-2394435</p>
                        <p>k.hcaa@yahoo.com</p>
                    </div>
                    <div className="khcaaDirectoryfooter-div-for-recent-posts">
                        <h3>RECENT POSTS</h3>
                        <p>Calender Printing – Quotations are <br /> invited</p>
                        <hr />
                        <p>Renewal of Ordinary Membership- <br />Last date 19.11.2023</p>
                        <hr />
                        <p>Sitting Notice</p>
                    </div>

                </div>
                <hr className="khcaaDirectorfooter-line-for-hr-line" />
                <div className="khcaaDireectorfooter-line-images">
                    <div>
                        <img src="http://www.khcaa.com/wp-content/uploads/2020/12/Header-Logo.png" alt="khcaa" />

                    </div>
                    <div>
                        <FaFacebookSquare />
                        <FaYoutube />
                    </div>

                </div>
                <hr className="khcaaDirectorfooter-line-for-hr-line" />

                <div className="khcaaDireectorfooter-maintained-persons">
                    <div>
                        <p>Copyright © 2020 - 2023. KHCAA. All rights reserved</p>
                    </div>
                    <div>
                        <p> Website Developed & Maintained by Netmagics</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default KhcaaDirectoryFooter
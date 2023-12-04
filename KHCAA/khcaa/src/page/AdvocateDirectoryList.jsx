import React from "react";
import '../style/AdvocateDirectories/AdvocateDirectoryList.css'
import KhcaaDirectoryNav from '../component/khcaadirectorylist/KhcaaDirectoryNav';
import KhcaaDirectoryList from "../component/khcaadirectorylist/KhcaaDirectoryList";
import KhcaaDirectoryFooter from "../component/khcaadirectorylist/KhcaaDirectoryFooter";
function AdvocateDirectoryList(){
    return(
        <>
        <div className="advocate-directorylist-maincontainer">
            <div className="advocate-directorylist-subcontainer">
            <KhcaaDirectoryNav/>
            <KhcaaDirectoryList/>
            <KhcaaDirectoryFooter/>
            </div>
        
        </div>
        
        </>
    )
}

export default AdvocateDirectoryList
import React from "react";
import MemberDirectoryNav from "../../components/Directories/MemberDirectoryNav";
import DirectoryMemberList from "../../components/Directories/DirectoryMemberList";
import MemberDirectoryFooter from "../../components/Directories/MemberDirectoryFooter";
import DirectoryAdvocateFooter from '../../components/Directories/DirectoryAdvocateFooter'
import '../../styles/Directories/memberdirectories.css'
function MemberDirectories() {
    return(
        <>
       <div className='memberdirectory-main-component'>
        <div className="memberdirectorydirectorylist-subcontainer-child"> 

        
       <MemberDirectoryNav/>
       <DirectoryMemberList/>
       <MemberDirectoryFooter/>
       {/* <DirectoryAdvocateFooter/> */}
       </div>

       </div>
        </>
    )
}

export default MemberDirectories
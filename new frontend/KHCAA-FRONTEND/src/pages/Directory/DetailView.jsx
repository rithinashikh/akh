import React from "react";
import MemberDirectoryNav from "../../components/Directories/MemberDirectoryNav";
import MemberAdvocateProfilePage from "../../components/Directories/MemberAdvocateProfilePage";
import MemberDirectoryFooter from "../../components/Directories/MemberDirectoryFooter";

function DetailView() {
    return(
        <>
        <div className='advocate-detailview'>
            <MemberDirectoryNav/>
            <MemberAdvocateProfilePage/>
            <MemberDirectoryFooter/>
        </div>
        </>
    )
}

export default DetailView
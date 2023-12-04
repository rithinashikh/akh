import React from 'react'
// import DataTable from 'react-data-table-component'

function AssociationAdmin() {
  return (
    
    <>
    <div className='association__container'>
     <div className="association__container__title">
        <h1 className='text-3xl font-bold'>Association Admins</h1>
     </div>
     <div className="association__container__search">
        <input type="text" name="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     {/* <div >
        <AddAssociation/>
     </div> */}
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     {/* <DataTable
     columns={}
     data={}
     fixedHeader
     pagination>

     </DataTable> */}
     

  </div>
  </>
      
    
  )
}

export default AssociationAdmin

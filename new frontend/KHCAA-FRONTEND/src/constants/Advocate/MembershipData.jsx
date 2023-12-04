export const Columns = [
    {
      name: 'Type',
      selector: (row) => row.unit_of_plan,
      sortable: true,
    },
    {
      name: 'Duration',
      selector: (row) => row.duration,
      sortable: true,
    },

    {
      name: 'Amount',
      selector: (row) => row.membership_price,
      sortable: true,
    },
    {
      name: 'Edit',
      selector: (row) => (
        <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Make payment
        </button>
       
      ),
      sortable: false, 
    },
   
  ];
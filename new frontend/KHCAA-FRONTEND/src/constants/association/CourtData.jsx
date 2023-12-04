export const Columns = [
    {
      name: 'Court',
      selector: (row) => row.court,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Edit',
      selector: (row) => (
        <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
      ),
      sortable: false, 
    },
    {
      name: 'Delete',
      selector: (row) => (
        <button className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      ),
      sortable: false,
    },
  ];
  

  export const Data = [
    {
       
        court: 'Kerala high court',
        state: 'Kerala',
       
       
    },
    {
       
        court: 'Tamilnadu high court',
        state: 'Tamilnadu ',
        
       
    },
    {
       
        court: 'Delhi high court',
        state: 'Delhi',
       
       
    },
    {
       
        court: 'Bombay high court',
        state: 'Bombay',
        
       
    },
    {
        
        court: 'Orisa high court',
        state: 'Orisa',
       
       
    },
    {
       
        court: 'Up high court',
        state: 'Uthar pradesh',
       
    }
       
    ,
    {
        
        court: 'Hydrabadh high court',
        state: 'Hydrabath',
        
       
    },
]
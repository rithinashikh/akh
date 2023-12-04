
export const Columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
        name: 'Court',
        selector: (row) => row.court.name,
        sortable: true,
      },
      {
        name: 'Suspend',
        selector: (row) => (
          <button className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
            {row.is_suspend ? 'suspend' : 'unsuspend'}
          </button>
        ),
        sortable: false,
      },
      {
        name: 'impersonate',
        selector: (row) => (
          <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
           <i class='bx bx-right-top-arrow-circle fs-4 bx-tada bx-rotate-90 fs-6' ></i>
          </button>
        ),
        sortable: false,
      },
    


  ];





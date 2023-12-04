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
        }
    
   
  ];
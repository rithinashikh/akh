export const columns = [
    {
        name: 'Name',
        selector: (row) => row.lawfirm ?.name,
        sortable: true,
      },
      {
        name: 'email',
        selector: (row) => row.lawfirm?.email,
        sortable: true,
      },
      {
          name: 'number',
          selector: (row) => row.lawfirm ?.contact_no,
          sortable: true,
        },
  ];


  export const  memberColumn=[
    {
      name: 'Name',
      selector: (row) => row.lawfirm ?.name,
      sortable: true,
    },
    {
      name: 'specialization',
      selector: (row) => row.lawfirm ?.specialization,
      sortable: true,
    },
    {
        name: 'number',
        selector: (row) => row.lawfirm ?.contact_no,
        sortable: true,
      },

  ]

  //  export const  memberColumn=[
  //   {
  //     name: 'Name',
  //     selector: (row) => row.name,
  //     sortable: true,
  //   },
  //   {
  //     name: 'specialization',
  //     selector: (row) => row.email,
  //     sortable: true,
  //   },
  //   {
  //       name: 'number',
  //       selector: (row) => row.specialization,
  //       sortable: true,
  //     },

  // ]

  // export const data=[
  //   {
  //     name:'akhil',
  //     email:'akhil@gmail.com',
  //     specialization:'criminal'
  //   }
  // ]
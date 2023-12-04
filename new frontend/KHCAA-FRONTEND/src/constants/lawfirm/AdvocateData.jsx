export const Columns=[
    {
        name: 'Name',
        selector: (row) => row.user.name,
        sortable: true,
      },
      {
        name: 'Phone',
        selector: (row) => row.phone,
        sortable: true,
      },
      {
        name: 'specialization',
        selector: (row) => row.specialization,
        sortable: true,
      },


]

export const memberColumn = [
  {
    name: "Name",
    selector: (row) => row.advocate?.user?.name || "",
    sortable: true,
  },
  {
    name: "email",
    selector: (row) => row.advocate?.user?.email || "",
    sortable: true,
  },
  {
    name: "number",
    selector: (row) => row.advocate?.phone || "",
    sortable: true,
  },
  {
    name: "specialization",
    selector: (row) => row.advocate?.specialization || "",
    sortable: true,
  },
];

export const pendingList = [
  {
    name: "Name",
    selector: (row) => row.advocate?.user?.name || "",
    sortable: true,
  },
  {
    name: "email",
    selector: (row) => row.advocate?.user?.email || "",
    sortable: true,
  },
  {
    name: "number",
    selector: (row) => row.advocate?.phone || "",
    sortable: true,
  },
  {
    name: "specialization",
    selector: (row) => row.advocate?.specialization || "",
    sortable: true,
  },
];



export const data=[
  {
    name:'akhil',
    email:'akhil@gmail.com',
    specialization:'criminal',
    number:'9645655408'

  },  
  {
    name:'nikhil',
    email:'nikhil@gmail.com',
    specialization:'family',
    number:'9645656408'

  }
]
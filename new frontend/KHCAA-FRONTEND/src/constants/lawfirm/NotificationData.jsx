export const NotificationData=[
    {
        name:'Title',
        selector:(row)=>row.title,
        sortable:true,
    },
    {
        name:'content',
        selector:(row)=>row.content,
        sortable:true,
    },
    {
        name:'date',
        selector:(row)=>row.created_at,
        sortable:true
    }

]

// export const Columns=[
//     {
//         name: 'Name',
//         selector: (row) => row.user.name,
//         sortable: true,
//       },
//       {
//         name: 'Phone',
//         selector: (row) => row.phone,
//         sortable: true,
//       },
//       {
//         name: 'specialization',
//         selector: (row) => row.specialization,
//         sortable: true,
//       },


// ]
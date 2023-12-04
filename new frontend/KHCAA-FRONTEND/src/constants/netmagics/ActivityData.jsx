import DetailView from "../../components/netmagicsdashboard/activity-tracker/DetailView";
// export const Columns = [
//     // {
//     //   name: 'Done by',
//     //   selector: (row) => row.done_by,
//     //   sortable: true,
//     // },
    
//     {
//       name: 'Time',
//       selector: (row) => row.time,
//       sortable: true,
//     },
    
//     {
//       name: 'Details',
//       selector: (row) =>row.description,
//       // <DetailView/>
      
      
//       sortable: true,
//     },
   
    
    
//   ];

//   export const data = [

//     {
//         done:'user',
//         time:'10.30pm',
//         description:'changed membership plan'
//     }
//   ]


 export const Columns = [
  {
    name: 'Action',
    selector: 'action',
    sortable: true,
    cell: row => ["create", "update", "delete", "access"][row.action] // Mapping based on the order you provided in Python.
  },
  {
    name: ' Done By',
    // selector: 'actor',
    // selector: (row) =>row.actor?.name , row.actor?.email,
    selector: (row) => `${row.actor?.name} - ${row.actor?.related_objects.data}`,

    sortable: true,
  },
  // {
  //   name: 'Changed Object',
  //   selector: 'object_repr',
  //   sortable: true,
  // },

//   {
//     name: 'Changes Made',
//     selector: 'changes',
//     sortable: true,
//     cell: row => {
//         const changes = JSON.parse(row.changes);
//         const filteredChanges = Object.entries(changes).filter(
//             ([field]) => field !== 'id'
//         );

//         const changesString = filteredChanges.map(([,[oldValue, newValue]]) => 
//             ` ${oldValue} To ${newValue}`
//         ).join('<br />');
        
//         return <div dangerouslySetInnerHTML={{ __html: changesString }} />;
//     }
// },

//   {
//     name: 'Changes Made',
//     selector: 'changes',
//     sortable: true,
//     cell: row => {
//         const changes = JSON.parse(row.changes);
//         const changesString = Object.entries(changes).map(([field, [oldValue, newValue]]) => 
//             ${field} : ${oldValue} To ${newValue}
//         ).join('<br />');
        
//         return <div dangerouslySetInnerHTML={{ __html: changesString }} />;
//     }
// },

{
  name: 'Changes Made',
  selector: 'changes',
  sortable: true,
  cell: row => {
      const changes = JSON.parse(row.changes);
      const changesString = Object.entries(changes) .filter(([field]) => field !== 'id').map(([field, [oldValue, newValue]]) => {
          const displayName = field === 'is_suspend' ? 'Suspension' : field;
          return `${displayName} : ${oldValue} To ${newValue}`;
      }).join('<br />');
      
      return <div dangerouslySetInnerHTML={{ __html: changesString }} />;
  }
},



  // {
  //   name: 'Changes Made',
  //   selector: 'changes',
  //   sortable: true,
  //   cell: row => {
  //     // Parse the changes into a human-readable format.
  //     const changes = JSON.parse(row.changes);
  //     return Object.entries(changes).map(([field, [oldValue, newValue]]) => 
  //       ${field}: ${oldValue} -> ${newValue}
  //     ).join(', ');
  //   }
  // },
  {
    name: 'Date',
    selector: 'timestamp',
    sortable: true,
    cell: (row) => {
        let date = new Date(row.timestamp);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} :: ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }
},
  // {
  //   name: 'Date',
  //   selector: 'timestamp',
  //   sortable: true,
  // },
];
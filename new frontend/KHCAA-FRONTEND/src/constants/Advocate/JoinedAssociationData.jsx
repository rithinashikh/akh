export const Columns = [
  {
    name: 'Association name',
    selector: (row) => row?.association?.name,
    sortable: true,
  },
  {
    name: 'Plan choosed',
    selector: (row) => `${row?.asso_payment_details?.for_payment_plan?.duration} ${row?.asso_payment_details?.for_payment_plan?.unit_of_plan}`,
    sortable: true,
  },  
  {
    name: 'Amount',
    selector: (row) => row?.asso_payment_details?.payment_total_amount_paid,
    sortable: true,
  },  
  {
    name: 'Paid on',
    selector: (row) => row?.asso_payment_details?.payment_done_at,
    sortable: true,
  },  
  {
    name: 'Will Expire on',
    selector: (row) => row?.asso_payment_details?.payment_expiry_date,
    sortable: true,
  },
  {
    name: 'Membership status',
    selector: (row) => row?.approval_status,
    sortable: true,
  },  
];
  
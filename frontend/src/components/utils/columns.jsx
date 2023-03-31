// Define the columns array
export const columns = [
  // Define each column as an object with properties that configure its appearance and behavior
  { title: "Product Number", accessor: "productId", sortable: true },
  { title: "Product Name", accessor: "productName", sortable: true },
  { title: "Product Owner", accessor: "productOwnerName", sortable: true },
  { title: "Scrum Master", accessor: "scrumMasterName", sortable: true },
  {
    title: "Developer Names",
    accessor: "Developers",
    sortable: true,
    // Configure the "Developer Names" column to render the developer names as a comma-separated string
    render: ({ Developers }) => Developers.join(", "),
  },
  { title: "Start Date", accessor: "startDate", sortable: true },
  { title: "Methodology", accessor: "methodology", sortable: true },
];

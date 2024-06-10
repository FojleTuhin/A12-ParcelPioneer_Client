import MUIDataTable from 'mui-datatables';

const AllUser = () => {

  const columns = [
    // {
    //     name: 'S.NO',
    //     options: {
    //         filter: false,
    //         customBodyRender: (value, tableMeta) => {
    //             return (
    //                 tableMeta.rowIndex + 1
    //             );
    //         }
    //     },
    //     flex:1
    // },

    {
      name: "UserName",
      label: "User"
    },
    // {
    //   name: "ownerImage",
    //   label: "Image",
    //   options: {
    //     customBodyRender: (value) => (
    //       <img src={value} alt="pic" className="w-12 h-12 rounded-full" />
    //     )
    //   }
    // },
    {
      name: "phoneNumber",
      label: "Phone"
    },
    {
      name: "numberOfParcelBooked",
      label: "Booked"
    },
    {
      name: "Role",
      options: {
        customBodyRender: (value) => (
          <p
            className={`capitalize inline-block px-3 py-1 rounded-full font-semibold 
            ${value === 'Admin' && "bg-pink-500"}
            ${value === 'RegularUser' && "bg-blue-500"}
            ${value === 'DeliveryMan' && "bg-[#EBFBE5]"}
            `}>
            {value}
          </p>
        )
      }
    },
    {
      name: "MakeAdmin",
      options: {
        customBodyRender: () => (
          <button
            className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-pink-500`}>
            Admin
          </button>
        )
      }
    },
    {
      name: "MakeDeliveryMan",
      options: {
        customBodyRender: () => (
          <button
            className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}>
            DeliveryMan
          </button>
        )
      }
    },
    

  ];

const data = [

  ["Joe James", "Test Corp", "Yonkers", "6", "Admin"],
  ["John Walsh", "Test Corp", "Hartford", "6", "DeliveryMan"],
  ["Bob Herm", "Test Corp", "Tampa", "3", "RegularUser"],
  ["James Houston", "Test Corp", "Dallas", "6", "RegularUser"],
  ["Joe James", "Test Corp", "Yonkers", "9", "Admin"],
  ["John Walsh", "Test Corp", "Hartford", "0", "DeliveryMan"],
  ["Bob Herm", "Test Corp", "Tampa", "1", "RegularUser"],
  ["James Houston", "Test Corp", "Dallas", "4", "RegularUser"],
];
const options = {
  selectableRows: false,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 15]
};
return (
  <div>
    <div className='px-4 md:px-8 mt-10'>
      <div>
        <MUIDataTable
          title={"Featured list"}
          data={data}
          columns={columns}
          options={options}

        />
      </div>

    </div>
  </div>
);
};

export default AllUser;
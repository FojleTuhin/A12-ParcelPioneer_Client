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
      name: "userName",
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
      name: "role",
      label: "Role",
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
      name: "role",
      label: "MakeAdmin",
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
      name: "role",
      label: "MakeDeliveryMan",
      options: {
        customBodyRender: (value) => (
          <button
            className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5] ${value === "Admin" && "disabled:"}`}>
            DeliveryMan
          </button>
        )
      }
    },


  ];

  const data = [

    ["Joe James", "01877127477", "3", "Admin"],
    ["Joe James", "01877127477", "3", "DeliveryMan"],
    ["Joe James", "01877127477", "3", "DeliveryMan"],
    ["Joe James", "01877127477", "3", "RegularUser"],
    ["Joe James", "01877127477", "3", "RegularUser"],
    ["Joe James", "01877127477", "3", "RegularUser"],
  ];
  const options = {
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15]
  };
  return (
    <div>
      <div className=' mt-10'>
        <div>
          <MUIDataTable
            title={"All User List"}
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
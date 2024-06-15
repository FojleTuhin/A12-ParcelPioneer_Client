import useUsers from '@/hooks/useUsers';
import MUIDataTable from 'mui-datatables';
import { Helmet } from 'react-helmet-async';

const AllUser = () => {

  const [users] = useUsers();

  const columns = [


    {
      name: "name",
      label: "User"
    },

    {
      name: "phone",
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
            ${value === 'admin' && "bg-pink-500"}
            ${value === 'regularUser' && "bg-blue-500"}
            ${value === 'deliveryMan' && "bg-[#EBFBE5]"}
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
            className={` inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}>
            DeliveryMan
          </button>
        )
      }
    },


  ];

  // const data = [

  //   ["Joe James", "01877127477", "3", "Admin"],
  //   ["Joe James", "01877127477", "3", "DeliveryMan"],
  //   ["Joe James", "01877127477", "3", "DeliveryMan"],
  //   ["Joe James", "01877127477", "3", "RegularUser"],
  //   ["Joe James", "01877127477", "3", "RegularUser"],
  //   ["Joe James", "01877127477", "3", "RegularUser"],
  // ];
  const options = {
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15]
  };
  return (
    <div>
      <Helmet>
        <title>
          ParcelPioneer || All User
        </title>
      </Helmet>
      <div className=' '>
        <div>
          <MUIDataTable
            title={"All User List"}
            data={users}
            columns={columns}
            options={options}

          />
        </div>

      </div>
    </div>
  );
};

export default AllUser;
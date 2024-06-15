import { AuthContext } from '@/Firebase/FirebaseProvider';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useUsers from '@/hooks/useUsers';
import MUIDataTable from 'mui-datatables';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AllUser = () => {

  const [users, refetch] = useUsers();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const handleMakeAdmin = (userId) => {

    axiosPublic.patch(`/makeAdmin/${userId}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Update Admin Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
        
      })

      
      
      
  }


  const handleMakeDeliveryMan = (userId) => {

    console.log(userId);

    axiosPublic.patch(`/makeDeliveryMan/${userId}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Update Delivery Man Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
        
      })

      
      
      
  }
 

  








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
      name: "_id",
      label: "MakeAdmin",
      options: {
        customBodyRender: (value) => (
          <button onClick={() => handleMakeAdmin(value)}
            className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-pink-500`}>
            Admin
          </button>
        )
      }
    },
    {
      name: "_id",
      label: "MakeDeliveryMan",
      options: {
        customBodyRender: (value) => (
          <button onClick={()=>handleMakeDeliveryMan(value)}
            className={` inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}>
            DeliveryMan
          </button>
        )
      }
    },


  ];


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
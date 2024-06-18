import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import MUIDataTable from "mui-datatables";
import { Helmet } from "react-helmet-async";

const AllDeliveryMan = () => {


    const axiosPublic = useAxiosPublic();

    const { data: allDeliveryMan = [] } = useQuery({
        queryKey: ['deliveryMan'],
        queryFn: async () => {
            const res = await axiosPublic.get('/deliveryMan');
            return res.data;
        }
    })





    let columns = [
        {
            name: "name",
            label: "Name"
        },
        {
            name: "photo",
            label: "Image",
            options: {
                customBodyRender: (value) => (
                    <img src={value} alt="pic" className="w-12 h-12 rounded-full" />
                )
            }
        },
        {
            name: "phone",
            label: "Phone"
        },
        {
            name: "numberOfParcelDelivered",
            label: "Delivered"
        },

        {
            name: "averageRating",
            label: "Review"
        }

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
                    ParcelPioneer || AllDeliveryMan
                </title>
            </Helmet>
            <div className=' mt-10'>
                <div>
                    <MUIDataTable
                        title={"All Delivery Man List"}
                        data={allDeliveryMan}
                        columns={columns}
                        options={options}

                    />
                </div>

            </div>
        </div>
    );
};

export default AllDeliveryMan;
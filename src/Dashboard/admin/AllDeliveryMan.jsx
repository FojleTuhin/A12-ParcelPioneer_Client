import MUIDataTable from "mui-datatables";

const AllDeliveryMan = () => {
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
            name: "deliveryManName",
            label: "Name"
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
            name: "numberOfParcelDelivered",
            label: "Delivered"
        },
        
        {
            name: "averageReview",
            label: "Review"
        },
        
        
        


    ];

    const data = [

        ["Joe James", "01877127477", "3", "4"],
        ["Joe James", "01877127477", "3", "4"],
        ["Joe James", "01877127477", "3", "5"],
        ["Joe James", "01877127477", "3", "2"],
        ["Joe James", "01877127477", "3", "2"],
        ["Joe James", "01877127477", "3", "4"],
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
                        title={"All Delivery Man List"}
                        data={data}
                        columns={columns}
                        options={options}

                    />
                </div>

            </div>
        </div>
    );
};

export default AllDeliveryMan;
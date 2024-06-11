import MUIDataTable from "mui-datatables";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";




const AllParcel = () => {


    const [startDate, setStartDate] = useState(new Date());
    const handleDeliveryManage = (e) => {
        e.preventDefault();
        const deliveryDate = startDate;
        const deliveryMan = e.target.deliveryMan.value;


        console.log(deliveryDate, deliveryMan);
    }


    const columns = [


        {
            name: "userName",
            label: "Name"
        },

        {
            name: "phoneNumber",
            label: "Phone"
        },
        {
            name: "bookingDate",
            label: "booking_date"
        },

        {
            name: "requestedBookingDate",
            label: "req_date"
        },
        {
            name: "cost",
        },
        {
            label: "Status"
        },
        {
            name: "Manage",
            options: {
                customBodyRender: () => (

                    <div>
                        <AlertDialog>
                            <AlertDialogTrigger><button
                                className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}>
                                Manage
                            </button></AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle><p className="text-center font-bold mb-4">Manage Your delivery</p></AlertDialogTitle>
                                    <form onSubmit={handleDeliveryManage}>
                                        <div className="flex">
                                            <div>
                                                
                                                <div className="form-control ">
                                                    <select className="select w-[190px] bg-none border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg" name="deliveryMan">
                                                        <option disabled selected>Pick a delivery man</option>
                                                        <option>Fojle</option>
                                                        <option>Rabbi</option>
                                                        <option>Tuhin</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex-1 m-auto ml-5">
                                                <div className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg">
                                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="mt-5">
                                            <button type="submit" className="py-2 px-4 border border-[rgb(226, 232, 240)] rounded-lg">Assign</button>
                                        </div>

                                    </form>




                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    {/* <AlertDialogAction>Assign</AlertDialogAction> */}
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>

                )
            }
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
            <div className=''>
                <div>
                    <MUIDataTable
                        title={"All Booked Parcel List"}
                        data={data}
                        columns={columns}
                        options={options}

                    />
                </div>

            </div>
        </div>
    );
};

export default AllParcel;
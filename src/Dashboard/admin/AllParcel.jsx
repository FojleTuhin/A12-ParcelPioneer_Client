import MUIDataTable from "mui-datatables";
import {
    AlertDialog,
    AlertDialogAction,
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

import { DayPicker } from "react-day-picker";
import { useState } from "react";





const AllParcel = () => {

    const initiallySelectedDate = new Date();
    const [selectedDate, setSelectedDate] = useState(initiallySelectedDate);
    console.log(selectedDate);
    
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
            name: "status",
            options: {
                customBodyRender: () => (

                    <div>
                        <AlertDialog>
                            <AlertDialogTrigger><button
                                className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-pink-500`}>
                                Manage
                            </button></AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle><p className="text-center font-bold mb-4">Manage Your delivery</p></AlertDialogTitle>
                                    <div className="flex">
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a delivery man" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Delivery Man</SelectLabel>
                                                    <SelectItem value="apple">Apple</SelectItem>
                                                    <SelectItem value="banana">Banana</SelectItem>
                                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                                    <SelectItem value="grapes">Grapes</SelectItem>
                                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <div className="flex-1 m-auto ml-5">
                                            <DayPicker
                                                mode="single"
                                                selected={selectedDate}
                                                onSelect={setSelectedDate}
                                                required // A date must be selected
                                            />


                                        </div>
                                    </div>



                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Assign</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>

                )
            }
        },
        {
            label: "manage"
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
                        title={"All Parcel List"}
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
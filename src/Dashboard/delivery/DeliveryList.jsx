import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useUserRole from "@/hooks/useUserRole";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { IoMdDoneAll } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { Map } from "pigeon-maps"
import { useState } from "react";
import Swal from "sweetalert2";


const DeliveryList = () => {


    const [center, setCenter] = useState([])
    const [zoom, setZoom] = useState(10)

    const [userRole] = useUserRole();

    const axiosPublic = useAxiosPublic();
    console.log(userRole._id);


    const { data: allDeliveryList = [], refetch } = useQuery({
        queryKey: ['deliveryList', userRole._id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/deliveryList/${userRole._id}`);
            return res.data;
        }
    })






    const handleReturned = (bookingId) => {


        Swal.fire({
            title: "Do you want to returned the parcel?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosPublic.patch(`/bookingReturned/${bookingId}`)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {

                                Swal.fire("Parcel returned successfully!", "", "success");
                                refetch();
                            }

                        })
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });


    }


    const handleBooked = (bookingId, id) => {

        Swal.fire({
            title: "Booked the parcel?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        })
            .then((result) => {

                if (result.isConfirmed) {
                    axiosPublic.patch(`/delivered/${bookingId}`)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                Swal.fire("Parcel successfully booked!", "", "success");
                                refetch();
                            }
                        })
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });






        axiosPublic.patch(`/totalDeliveredNumber/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                }

            })
    }


    return (
        <div>
            <Helmet>
                <title>
                    ParcelPioneer || DeliveryList
                </title>
            </Helmet>
            <div className="px-4 pb-4 bg-[#F8F6F1]">
                <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-5">
                    <h1 className="font-bold text-xl text-center">My Delivery List</h1>
                </div>

                <table className="border-collapse border table-auto border-slate-400">

                    <thead>
                        <tr>
                            <th className="border border-slate-300 p-1">Booked User's Name</th>
                            <th className="border border-slate-300 p-1"> Receiver's Name</th>
                            <th className="border border-slate-300 p-1">Booked User's Phone</th>
                            <th className="border border-slate-300 p-1">Receiver's Phone</th>
                            <th className="border border-slate-300 p-1">Requested Delivery Date</th>
                            <th className="border border-slate-300 p-1">Approximate Delivery Date</th>
                            <th className="border border-slate-300 p-1">Address</th>
                            <th className="border border-slate-300 p-1">Location</th>
                            <th className="border border-slate-300 p-3">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allDeliveryList.map(item =>
                                <tr key={item._id} className="text-center">
                                    <td className="border border-slate-300 ">{item.name}</td>
                                    <td className="border border-slate-300">{item.receiverName}</td>
                                    <td className="border border-slate-300">{item.phone}</td>
                                    <td className="border border-slate-300">{item.receiversNumber}</td>
                                    <td className="border border-slate-300">{item.requestedDeliveryDate}</td>
                                    <td className="border border-slate-300">{item.approximateDaliveryDate}</td>
                                    <td className="border border-slate-300">{item.place}</td>
                                    <td className="border border-slate-300">

                                        <AlertDialog>
                                            <AlertDialogTrigger><button
                                                className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}>
                                                View
                                            </button></AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle><p className="text-center font-bold mb-4">See your delivery location</p></AlertDialogTitle>
                                                </AlertDialogHeader>

                                                {/* map...............  */}
                                                <Map
                                                    height={300}
                                                    center={[item.latitude, item.longitude]}
                                                    zoom={zoom}
                                                    anchor={[item.latitude, item.longitude]}
                                                    onBoundsChanged={({ center, zoom }) => {
                                                        setCenter(center);
                                                        setZoom(zoom);

                                                    }}
                                                />
                                                <div >





                                                </div>

                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </td>
                                    <td className="border border-slate-300">
                                        {
                                            (item.status == 'returned') || (item.status == 'delivered') ?


                                                <p>{item.status}</p>
                                                :
                                                <span span className="flex justify-evenly">
                                                    <button><MdCancel onClick={() => handleReturned(item._id)} className="text-xl bg-red-500 p-1 rounded-full text-white" /></button>
                                                    <button><IoMdDoneAll onClick={() => handleBooked(item._id, userRole._id)} className="text-xl bg-[#3EA570] p-1 rounded-full text-white" /></button>
                                                </span>



                                        }
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div >
    );
};

export default DeliveryList;
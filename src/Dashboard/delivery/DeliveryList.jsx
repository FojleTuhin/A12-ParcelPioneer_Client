import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Helmet } from "react-helmet-async";
import { IoMdDoneAll } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
const DeliveryList = () => {

    const center = [23.78606960000005, 90.37654022944777]



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

                <table className="border-collapse border border-slate-400">

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
                        <tr className="text-center">
                            <td className="border border-slate-300 ">box</td>
                            <td className="border border-slate-300">Tuhin</td>
                            <td className="border border-slate-300">01877127477</td>
                            <td className="border border-slate-300">01877127477</td>
                            <td className="border border-slate-300">12/06/2024</td>
                            <td className="border border-slate-300">14/06/2024</td>
                            <td className="border border-slate-300">Taltola, Agargaon</td>
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
                                        <div >
                                            <MapContainer
                                                center={center}
                                                zoom={10}
                                                style={
                                                    { width: '450px', height: '300px' }
                                                }
                                            >
                                            </MapContainer>
                                        </div>

                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </td>
                            <td className="border border-slate-300">
                                <span className="flex justify-evenly">
                                    <button><MdCancel className="text-xl bg-red-500 p-1 rounded-full text-white" /></button>
                                    <button><IoMdDoneAll className="text-xl bg-[#3EA570] p-1 rounded-full text-white" /></button>
                                </span>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default DeliveryList;
import { MdOutlineUpdate } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";


const MyParcel = () => {

    return (
        <div className="px-4 pb-4 bg-[#F8F6F1]">
            <Helmet>
                <title>
                    ParcelPioneer || MyParcel
                </title>
            </Helmet>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-5">
                <h1 className="font-bold text-xl text-center">My Parcel List</h1>
            </div>

            <table className="border-collapse border border-slate-400">

                <thead>
                    <tr>
                        <th className="border border-slate-300 p-4 ">Type</th>
                        <th className="border border-slate-300 p-4"> Booking date</th>
                        <th className="border border-slate-300 p-4">Requested date</th>
                        <th className="border border-slate-300 p-4"> Approximate date</th>
                        <th className="border border-slate-300 p-4">Deliveryman</th>
                        <th className="border border-slate-300 p-4">Status</th>
                        <th className="border border-slate-300 p-4">Action</th>
                        <th className="border border-slate-300 p-4">Pay</th>
                        <th className="border border-slate-300 p-4">Review</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="border border-slate-300 ">box</td>
                        <td className="border border-slate-300">12/23/4556</td>
                        <td className="border border-slate-300">23/12/3457</td>
                        <td className="border border-slate-300">12/34/5678</td>
                        <td className="border border-slate-300">Tuhin</td>
                        <td className="border border-slate-300">pending</td>
                        <td className="border border-slate-300 p-2">
                            <span className="flex justify-evenly">
                                <button><MdOutlineUpdate className="text-xl  bg-[#3EA570] p-1 rounded-full text-white"/></button>
                                <button><FaTrashAlt className="text-xl bg-red-500 p-1 rounded-full text-white"/></button>
                            </span>
                        </td>
                        <td className="border border-slate-300">Pay</td>
                        <AlertDialog>
                                    <AlertDialogTrigger><button
                                        className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}>
                                        Review
                                    </button></AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle><p className="text-center font-bold mb-4">See your delivery location</p></AlertDialogTitle>
                                        </AlertDialogHeader>

                                       


                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default MyParcel;
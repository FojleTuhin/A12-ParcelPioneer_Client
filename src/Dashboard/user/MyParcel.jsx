import { MdOutlineUpdate } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const MyParcel = () => {


    return (
        <div className="px-4 pb-4 bg-[#F8F6F1]">
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
                        <td className="border border-slate-300">Review</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default MyParcel;
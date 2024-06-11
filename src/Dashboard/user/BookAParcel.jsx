import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const BookAParcel = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="px-4 md:px-8 lg:px-[100px]  pb-1 bg-[#F8F6F1] ">
                <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-10">
                    <h1 className="font-bold text-xl text-center">Book a Parcel</h1>
                </div>
                <form >
                    {/* 1st div */}
                    <div className="md:flex mb-8 gap-4 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" required defaultValue={user?.displayName} className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" required defaultValue={user?.email} className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Phone</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="email" required placeholder="Add your number here" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                    </div>
                    {/* 2nd div */}
                    <div className="md:flex mb-8 gap-4 ">


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Receivers Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="receiverName" required placeholder="Add receiver name here" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Receiver number</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="receiversNumber" required placeholder="Add receiver number here" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Requested Delivery Date</span>
                            </label>
                            <label className="input-group">
                                <div className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </label>
                        </div>

                    </div>
                    <div className="md:flex mb-8 gap-4 ">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Place</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place" required placeholder="Place" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Latitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place_Latitude" required placeholder="Find Latitude from google map" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Longitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place_Longitude" required placeholder="Find Longitude from google map" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex mb-8 gap-4 md:justify-evenly">
                        <div className="form-control w-[200px]">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Weight</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="parcelWeight" required placeholder="Add total weight" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-[200px]">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="totalPrice" disabled required placeholder="total price" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>

                    </div>
                   

                    <div className="md:flex mb-8 ">
                        <button className="btn bg-[#3EA570] border-none text-white w-1/2 justify-center m-auto">Book</button>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default BookAParcel;
import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const BookAParcel = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>
                    ParcelPioneer || BookAParcel
                </title>
            </Helmet>
            <div className="px-4 md:px-8 lg:px-[100px]  pb-1 bg-[#F8F6F1] ">
                <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-5">
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
                                <input type="text" name="userName" required defaultValue={user?.displayName} className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" required defaultValue={user?.email} className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Phone</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="email" required placeholder="Add your number here" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                    </div>
                    {/* 2nd div */}
                    <div className="md:flex mb-8 gap-4 ">


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Receiver's Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="receiverName" required placeholder="Add receiver name here" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Receiver's number</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="receiversNumber" required placeholder="Add receiver number here" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
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
                    {/* 3rd div  */}
                    <div className="md:flex mb-8 gap-4 ">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Place</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place" required placeholder="Place" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Latitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place_Latitude" required placeholder="Find Latitude from google map" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]"/>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Longitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place_Longitude" required placeholder="Find Longitude from google map" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>

                    </div>
                        {/* 4th div  */}
                    <div className="md:flex mb-6 gap-4 md:justify-evenly">
                        <div className="form-control w-[200px]">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Weight</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="parcelWeight" required placeholder="Add total weight" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-[200px]">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="totalPrice" disabled required placeholder="total price" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex mb-5 ">
                        <button className=" bg-[#3EA570] border-none text-white w-1/2 justify-center m-auto py-2 rounded-lg font-bold text-xl">Book</button>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default BookAParcel;
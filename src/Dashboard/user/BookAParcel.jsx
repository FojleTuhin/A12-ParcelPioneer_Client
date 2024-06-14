import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import useUserRole from "@/hooks/useUserRole";
const BookAParcel = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [, refetch] = useUserRole();
    const [status, setStatus] = useState('pending');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState(0);


    const handleWeightChange = (e) => {

        const inputWeight = parseFloat(e.target.value) || 0;
        setWeight(inputWeight);

        let calculatedPrice;
        if (inputWeight === 1) {
            calculatedPrice = 50;
        } else if (inputWeight === 2) {
            calculatedPrice = 100;
        } else if (inputWeight > 2) {
            calculatedPrice = 150;
        } else {
            calculatedPrice = 0;
        }

        setPrice(calculatedPrice);
    }

    const { mutateAsync } = useMutation({
        mutationFn: async parcelData => {
            const { data } = await axiosPublic.post(`/allParcel`, parcelData)
            return data
        },
        onSuccess: () => {
            console.log('Data Saved Successfully')
            toast.success('Parcel booked Successfully!')
        },
    })


    const handleBookAParcel = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const receiverName = e.target.receiverName.value;
        const receiversNumber = e.target.receiversNumber.value;
        const requestedDeliveryDate = startDate;
        const place = e.target.place.value;
        const latitude = e.target.latitude.value;
        const longitude = e.target.longitude.value;
        const type = e.target.type.value;
        const bookingDate = new Date();



        const bookParcel = {
            name,
            email,
            phone,
            receiverName,
            receiversNumber,
            requestedDeliveryDate,
            place,
            latitude,
            longitude,
            type,
            weight,
            bookingDate,
            price,
            status
        }

        console.table(bookParcel);


        mutateAsync(bookParcel);

        e.target.reset();
        setPrice(0)
    }

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
                <form onSubmit={handleBookAParcel}>
                    {/* 1st div */}
                    <div className="md:flex mb-8 gap-4 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" required defaultValue={user?.displayName} className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
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
                                <input type="number" name="phone" required placeholder="Add your number here" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
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
                                <input type="text" name="place" required placeholder="Place" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Latitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="latitude" required placeholder="Find Latitude from google map" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Longitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="longitude" required placeholder="Find Longitude from google map" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>

                    </div>
                    {/* 4th div  */}
                    <div className="md:flex mb-6 gap-4 md:justify-evenly">
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" required placeholder="Add type" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Weight</span>
                            </label>
                            <label className="input-group">
                                <input type="number" onBlur={handleWeightChange} name="weight" required placeholder="Add total weight" className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" disabled required placeholder="total price" defaultValue={price} className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg w-full  bg-[#f4f3f0]" />
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
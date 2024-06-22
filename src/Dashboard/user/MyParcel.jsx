import { MdOutlineUpdate } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "@/Firebase/FirebaseProvider";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import moment from "moment";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "@/hooks/useAxiosSecure";



const MyParcel = () => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();



    const [search, setSearch] = useState('');

    const { data: parcelData = [], refetch } = useQuery({
        queryKey: ['parcel', user.email, search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allParcel/${user.email}?search=${search}`);
            return res.data;
        }
    })



    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.searchStatus.value;
        setSearch(searchText);
        e.target.reset();
    }


    const { mutateAsync } = useMutation({
        mutationFn: async newFeedback => {
            const { data } = await axiosPublic.post(`/feedback`, newFeedback)
            return data
        },
        onSuccess: () => {
            console.log('Data Saved Successfully')
            toast.success('Feedback given Successfully!')
        },
    })



    const handleCancel = (id) => {


        Swal.fire({
            title: "Do you want to cancel the Parcel?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosPublic.patch(`/canceled/${id}`)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                Swal.fire("Parcel canceled done!", "", "success");
                                refetch();
                            }
                        })
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });

    }



    const handleGiveReview = async (e) => {
        e.preventDefault();
        const feedback = e.target.feedback.value;
        const date = moment().format("MMM Do YY");
        const deliveryManId = e.target.deliveryManId.value;

        const newFeedback = {
            name: user.displayName,
            photo: user.photoURL,
            rating,
            feedback,
            date,
            deliveryManId
        }
        await mutateAsync(newFeedback);
        e.target.reset();


        axiosPublic.patch(`/calculateAvgRating/${deliveryManId}`)
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire("Saved!", "", "success");
                    refetch();
                }
            })

    }




    return (
        <div className="md:px-4 pb-4 bg-[#F8F6F1]">
            <Helmet>
                <title>
                    ParcelPioneer || MyParcel
                </title>
            </Helmet>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-5">
                <h1 className="font-bold text-xl text-center">My Parcel List</h1>
            </div>

            <div className="mb-10">
                <form onSubmit={handleSearch}>
                    <input type="text" name="searchStatus" className="border border-gray-400 rounded-md px-5 py-2 " placeholder="Search by booking status" />
                    <button type="submit" className="border border-gray-400 rounded-md px-5 py-2 ">Search</button>
                </form>
            </div>

            <div className="overflow-x-auto p-2 md:p-0">
                <table className="border-collapse border border-slate-400 table-auto ">

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
                        {
                            parcelData.map(item =>
                                <tr key={item._id} className="text-center">
                                    <td className="border border-slate-300 ">{item.type}</td>
                                    <td className="border border-slate-300">{item.bookingDate}</td>
                                    <td className="border border-slate-300">{item.requestedDeliveryDate}</td>
                                    <td className="border border-slate-300">{item.approximateDaliveryDate}</td>
                                    <td title={item.deliveryManId} className="border border-slate-300">{item.deliveryManId?.slice(0, 10)}</td>
                                    <td className="border border-slate-300">
                                        <p
                                            className={`capitalize inline-block px-3 py-1 rounded-full font-semibold 
                            ${item.status === 'pending' && "bg-pink-500 text-white"}
                            ${item.status === 'OnTheWay' && "bg-blue-500 text-white"}
                            ${item.status === 'returned' && "bg-red-300 text-white"}
                            ${item.status === 'canceled' && "bg-red-500 text-white"}
                            ${item.status === 'delivered' && "bg-[#3EA570] text-white"}
                             `}>
                                            {item.status}
                                        </p>
                                    </td>
                                    <td className="border border-slate-300 p-2">
                                        {
                                            item.status === 'pending' ?
                                                <span className="flex justify-evenly">
                                                    <Link to={`/dashboard/update/${item._id}`}>
                                                        <button><MdOutlineUpdate className="text-xl  bg-[#3EA570] p-1 rounded-full text-white" /></button>
                                                    </Link>
                                                    <button><FaTrashAlt onClick={() => handleCancel(item._id)} className="text-xl bg-red-500 p-1 rounded-full text-white" /></button>
                                                </span>
                                                :
                                                <p>{item.status}</p>
                                        }
                                    </td>
                                    <td className="border border-slate-300">
                                        {/* {
                        item.status === 'delivered' ? (
                            <button className="bg-[#EBFBE5] p-2 border border-gray-500 rounded-md">
                                <Link to={`/dashboard/payment/${item._id}`}>Pay</Link>
                            </button>
                        ) : ''
                    } */}


                                        {
                                            item.status === 'delivered' ? (
                                                item.payment ? (
                                                    <p className=" text-white bg-[#3EA570]  px-1 py-1 rounded-full">Done</p>
                                                ) : (
                                                    <button className="bg-[#EBFBE5] p-2 border border-gray-500 rounded-md">
                                                        <Link to={`/dashboard/payment/${item._id}`}>Pay</Link>
                                                    </button>
                                                )
                                            ) : ''
                                        }

                                    </td>
                                    <td>
                                        {
                                            item.status === 'delivered' ?
                                                <AlertDialog>
                                                    <AlertDialogTrigger><button
                                                        className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}>
                                                        Review
                                                    </button></AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle><p className="text-center font-bold mb-4">Give a review of delivery man</p></AlertDialogTitle>





                                                            <form className="mx-auto" onSubmit={handleGiveReview}>
                                                                <div className="-mt-20 ">
                                                                    <div className="h-[106px] w-[106px] rounded-full border-4 border-[#95D2B3] relative top-24 left-8">
                                                                        <div className="h-[101px] w-[100px] rounded-full border-4 border-[#78ABA8]">
                                                                            <img className="h-[100px] w-[100px] rounded-full" src={user.photoURL} alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-[350px] bg-gray-200 mt-10 px-6 py-6 rounded-2xl " >
                                                                        <div className="ml-32">
                                                                            <p className="font-bold ">{user.displayName}</p>
                                                                            <div >
                                                                                <Rating
                                                                                    style={{ maxWidth: 180 }}
                                                                                    value={rating}
                                                                                    onChange={setRating}
                                                                                    isRequired
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <input type="text" name="deliveryManId" defaultValue={item.deliveryManId} className="border border-gray-400 py-2 px-3 rounded-lg mb-3" />
                                                                        <textarea name="feedback" id="" placeholder="add a review" className="border border-gray-400 w-full rounded-lg px-4 py-2"></textarea>
                                                                        <br />

                                                                        <AlertDialogCancel><button className="">Submit</button></AlertDialogCancel>
                                                                    </div>
                                                                </div>

                                                            </form>


                                                        </AlertDialogHeader>




                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                                :

                                                ''
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyParcel;
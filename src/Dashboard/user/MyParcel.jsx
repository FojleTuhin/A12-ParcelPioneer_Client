import { MdOutlineUpdate } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "@/Firebase/FirebaseProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "@/hooks/useAxiosSecure";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Mail, Package, Star } from "lucide-react";

const MyParcel = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [deliveryman, setDeliveryMan] = useState(null);

  const [search, setSearch] = useState("");

  const { data: parcelData = [], refetch } = useQuery({
    queryKey: ["parcel", user?.email, search],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/allParcel/${user?.email}?search=${search}`
      );
      return res.data;
    },
  });

  const { data: allDeliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosPublic.get("/deliveryMan");
      return res.data;
    },
  });

  const handleDeliveryMan = (deliveryManId) => {
    const deliveryMan = allDeliveryMan.find(
      (item) => item._id === deliveryManId
    );
    setDeliveryMan(deliveryMan);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchStatus.value;
    setSearch(searchText);
    e.target.reset();
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (newFeedback) => {
      const { data } = await axiosPublic.post(`/feedback`, newFeedback);
      return data;
    },
    onSuccess: () => {
      console.log("Data Saved Successfully");
      Swal.fire("Saved!", "", "success");
      toast.success("Feedback added successfully!");
    },
  });

  const handleCancel = (id) => {
    Swal.fire({
      title: "Do you want to cancel the Parcel?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/canceled/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire("Parcel canceled done!", "", "success");
            // refetch();
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const [manId, setManId] = useState(''); 

  const handleDeliveryManID = (id) => {
    console.log(id);
    setManId(id); // Set the delivery
  }


  const handleGiveReview = async (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    const date = moment().format("MMM Do YY");
    // const deliveryManId = e.target.deliveryManId.value;

    const newFeedback = {
      name: user.displayName,
      photo: user.photoURL,
      rating,
      feedback,
      date,
      deliveryManId: manId, // Use the state variable here
    };
    await mutateAsync(newFeedback);
    e.target.reset();

   






    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/calculateAvgRating/${manId}`).then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire("Saved!", "", "success");
            refetch();
          }
        });
      } else if (result.isDenied) {
        Swal.fire("not saved", "", "info");
      }
    });
  };

  return (
    <div className="md:px-4 pb-4 bg-[#F8F6F1]">
      <Helmet>
        <title>ParcelPioneer || MyParcel</title>
      </Helmet>
      <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-5">
        <h1 className="font-bold text-xl text-center">My Parcel List</h1>
      </div>

      <div className="mb-10">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="searchStatus"
            className="border border-gray-400 rounded-md px-5 py-2 "
            placeholder="Search by booking status"
          />
          <button
            type="submit"
            className="border border-gray-400 rounded-md px-5 py-2 "
          >
            Search
          </button>
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
            {parcelData.map((item) => (
              <tr key={item._id} className="text-center">
                <td className="border border-slate-300 ">{item.type}</td>
                <td className="border border-slate-300">{item.bookingDate}</td>
                <td className="border border-slate-300">
                  {item.requestedDeliveryDate}
                </td>
                <td className="border border-slate-300">
                  {item.approximateDaliveryDate}
                </td>
                {/* <td
                  className="border border-slate-300"
                >
                  {item.deliveryManName}
                </td> */}
                <td className="border border-slate-300">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => {
                          handleDeliveryMan(item.deliveryManId);
                        }}
                      >
                        {item?.deliveryManName}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-xl">
                          Delivery Person Details
                        </DialogTitle>
                      </DialogHeader>

                      <div className="mt-4 space-y-6">
                        {/* Profile section with photo and name */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <Avatar className="h-24 w-24">
                            <AvatarImage
                              src={deliveryman?.photo || "/placeholder.svg"}
                              alt={deliveryman?.name}
                            />
                            <AvatarFallback>
                              {deliveryman?.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold">
                              {deliveryman?.name}
                            </h3>
                            <div className="flex items-center justify-center sm:justify-start mt-2">
                              <Star className="h-5 w-5 text-yellow-500 mr-1" />
                              <span className="font-medium">
                                {deliveryman?.averageRating}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Contact information */}
                        <div className="grid gap-3">
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-gray-500" />
                            <span>{deliveryman?.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-gray-500" />
                            <span>{deliveryman?.email}</span>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Package className="h-5 w-5 text-gray-500" />
                            <div>
                              <span className="font-medium">
                                {deliveryman?.numberOfParcelDelivered}
                              </span>
                              <span className="text-gray-600 ml-1">
                                parcels delivered
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <DialogClose asChild>
                        <Button className="w-full mt-4" type="button">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogContent>
                  </Dialog>
                </td>
                <td className="border border-slate-300">
                  <p
                    className={`capitalize inline-block px-3 py-1 rounded-full font-semibold 
                            ${
                              item.status === "pending" &&
                              "bg-pink-500 text-white"
                            }
                            ${
                              item.status === "OnTheWay" &&
                              "bg-blue-500 text-white"
                            }
                            ${
                              item.status === "returned" &&
                              "bg-red-300 text-white"
                            }
                            ${
                              item.status === "canceled" &&
                              "bg-red-500 text-white"
                            }
                            ${
                              item.status === "delivered" &&
                              "bg-[#3EA570] text-white"
                            }
                             `}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="border border-slate-300 p-2">
                  {item.status === "pending" ? (
                    <span className="flex justify-evenly">
                      <Link to={`/dashboard/update/${item._id}`}>
                        <button>
                          <MdOutlineUpdate className="text-xl  bg-[#3EA570] p-1 rounded-full text-white" />
                        </button>
                      </Link>
                      <button>
                        <FaTrashAlt
                          onClick={() => handleCancel(item._id)}
                          className="text-xl bg-red-500 p-1 rounded-full text-white"
                        />
                      </button>
                    </span>
                  ) : (
                    <p>{item.status}</p>
                  )}
                </td>
                <td className="border border-slate-300">
                  {/* {
                        item.status === 'delivered' ? (
                            <button className="bg-[#EBFBE5] p-2 border border-gray-500 rounded-md">
                                <Link to={`/dashboard/payment/${item._id}`}>Pay</Link>
                            </button>
                        ) : ''
                    } */}

                  {item.status === "delivered" ? (
                    item.payment ? (
                      <p className=" text-white bg-[#3EA570]  px-1 py-1 rounded-full">
                        Done
                      </p>
                    ) : (
                      <button className="bg-[#EBFBE5] p-2 border border-gray-500 rounded-md">
                        <Link to={`/dashboard/payment/${item._id}`}>Pay</Link>
                      </button>
                    )
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {item.status === "delivered" ? (
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <button
                          className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}
                        >
                          Review
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            <p className="text-center font-bold mb-4">
                              Give a review of delivery man
                            </p>
                          </AlertDialogTitle>

                          <form className="mx-auto" onSubmit={handleGiveReview}>
                            <div className=" ">
                              {/* <div className="h-[106px] w-[106px] rounded-full border-4 border-[#95D2B3] relative top-24 left-8">
                                <div className="h-[101px] w-[100px] rounded-full border-4 border-[#78ABA8]">
                                  <img
                                    className="h-[100px] w-[100px] rounded-full"
                                    src={user.photoURL}
                                    alt=""
                                  />
                                </div>
                              </div> */}
                              <div className="w-[350px] bg-gray-200 mt-10 px-6 py-6 rounded-2xl ">
                                <div className="mb-5">
                                  {/* <p className="font-bold ">
                                    {item.deliveryManName}
                                  </p> */}
                                  <div>
                                    <Rating
                                      style={{ maxWidth: 150 }}
                                      value={rating}
                                      onChange={setRating}
                                      isRequired
                                    />
                                  </div>
                                </div>
                                {/* <input
                                  type="text"
                                  name="deliveryManId"
                                  defaultValue={item.deliveryManId}
                                  readOnly
                                  className=" py-2 px-3 rounded-lg"
                                /> */}


                                <p className=" pb-2 px-3">{item.deliveryManName}</p>
                                <textarea
                                  name="feedback"
                                  id=""
                                  placeholder="add a review"
                                  className="border border-gray-400 w-full rounded-lg px-4 py-2"
                                ></textarea>
                                <br />

                                <AlertDialogCancel>
                                  <button onClick={()=>handleDeliveryManID(item.deliveryManId)} className="">Submit</button>
                                </AlertDialogCancel>
                              </div>
                            </div>
                          </form>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcel;

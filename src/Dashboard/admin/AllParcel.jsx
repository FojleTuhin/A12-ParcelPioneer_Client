"use client";

import MUIDataTable from "mui-datatables";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Swal from "sweetalert2";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const AllParcel = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: allDeliveryMan = [], refetch } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosPublic.get("/deliveryMan");
      return res.data;
    },
  });

  const [bookingId, setBookingId] = useState({});
  const handleGetBookingId = (value) => {
    setBookingId(value);
  };

  const [status] = useState("OnTheWay");
  const [startDate, setStartDate] = useState(new Date());

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearchByDate = (e) => {
    e.preventDefault();
    const dateFrom = e.target.dateFrom.value;
    setFrom(dateFrom);
    const dateTo = e.target.dateTo.value;
    setTo(dateTo);

    console.log(from, to);
  };

  const { data: allParcel = [] } = useQuery({
    queryKey: ["parcel"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allParcel?`);
      return res.data;
    },
  });

  const handleDeliveryManage = (e, deliveryManId) => {
    e.preventDefault();
    setIsDialogOpen(false); // Close the dialog first

    // Then show the SweetAlert
    setTimeout(() => {
      const deliveryDate = moment(startDate).format("MMM Do YY");

      const updatebooking = {
        deliveryDate,
        deliveryManId,
        deliveryManName: allDeliveryMan.find(
          (item) => item._id === deliveryManId
        )?.name,
        status,
      };
      console.log(updatebooking);
      
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .put(`/allParcel/${bookingId}`, updatebooking)
            .then((data) => {
              console.log(data);
              if (data.data?.modifiedCount > 0) {
                Swal.fire("Saved!", "", "success");
                refetch();
              }
            });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }, 100); // Small delay to ensure dialog is closed
  };

  const columns = [
    {
      name: "name",
    },
    {
      name: "phone",
    },
    {
      name: "bookingDate",
      label: "bookingDate",
    },
    {
      name: "requestedDeliveryDate",
      label: "req_date",
    },
    {
      name: "price",
      label: "Price",
    },
    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value) => (
          <p
            className={`capitalize inline-block px-3 py-1 rounded-full font-semibold 
                  ${value === "pending" && "bg-pink-500 text-white"}
                  ${value === "OnTheWay" && "bg-blue-500 text-white"}
                  ${value === "returned" && "bg-red-300 text-white"}
                  ${value === "delivered" && "bg-[#3EA570] text-white"}
                  ${value === "canceled" && "bg-red-500 text-white"}
                  `}
          >
            {value}
          </p>
        ),
      },
    },
    {
      name: "_id",
      label: "Action",
      options: {
        customBodyRender: (value) => (
          <div>
            <button
              onClick={() => {
                handleGetBookingId(value);
                setIsDialogOpen(true);
              }}
              className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}
            >
              Manage
            </button>

            {isDialogOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
                <div className="bg-white p-6 rounded-lg w-[500px] max-w-[90%]">
                  <h2 className="text-center font-bold mb-4">
                    Manage Your delivery
                  </h2>

                  <form
                    onSubmit={(e) => {
                      const deliveryManId =
                        document.getElementById("deliveryManSelect").value;
                      handleDeliveryManage(e, deliveryManId);
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <p className="font-bold mb-2">Pick a Delivery Man</p>
                        <div className="form-control">
                          <select
                            id="deliveryManSelect"
                            className="select w-full bg-none border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg"
                            name="deliveryMan"
                          >
                            {allDeliveryMan.map((item) => (
                              <option key={item._id} value={item._id}>
                                {item?.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold mb-2">Pick approximate date</p>
                        <div className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg">
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setIsDialogOpen(false)}
                        className="border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600"
                      >
                        Assign
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        ),
      },
    },
  ];

  const options = {
    selectableRows: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 15],
  };

  return (
    <div>
      <Helmet>
        <title>ParcelPioneer || AllParcel</title>
      </Helmet>

      <div className="mb-16">
        <form onSubmit={handleSearchByDate} className="md:grid md:grid-cols-3">
          <div>
            <span className="font-bold mr-4 text-xl">From</span>
            <input
              type="date"
              name="dateFrom"
              id=""
              className="border border-gray-500 rounded-md py-2 px-4"
            />
          </div>

          <div>
            <span className="font-bold  mr-4 text-xl">To</span>
            <input
              type="date"
              name="dateTo"
              id=""
              className="border border-gray-500 rounded-md py-2 px-4"
            />
          </div>

          <div>
            <button
              type="submit"
              className="border border-gray-500 rounded-md py-2 px-4 ml-16"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10">
        <MUIDataTable
          className=""
          title={"All Parcel List"}
          data={allParcel}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default AllParcel;

"use client"

import MUIDataTable from "mui-datatables"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import useAxiosPublic from "@/hooks/useAxiosPublic"
import { useQuery } from "@tanstack/react-query"
import moment from "moment"
import Swal from "sweetalert2"
import useAxiosSecure from "@/hooks/useAxiosSecure"

const AllParcel = () => {
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  // State for the currently selected booking
  const [selectedBooking, setSelectedBooking] = useState(null)

  // State for the modal
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // State for the selected delivery date
  const [startDate, setStartDate] = useState(new Date())

  // State for the selected delivery person
  const [selectedDeliveryMan, setSelectedDeliveryMan] = useState("")

  // Fetch all delivery personnel
  const { data: allDeliveryMan = [], refetch: refetchDeliveryMan } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosPublic.get("/deliveryMan")
      return res.data
    },
  })

  // Fetch all parcels
  const { data: allParcel = [], refetch: refetchParcels } = useQuery({
    queryKey: ["parcel"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allParcel?`)
      return res.data
    },
  })

  // Handle opening the management dialog
  const handleOpenManageDialog = (bookingId) => {
    // Find the booking details
    const booking = allParcel.find((parcel) => parcel._id === bookingId)
    setSelectedBooking(booking)

    // Reset the delivery person selection
    setSelectedDeliveryMan("")

    // Open the dialog
    setIsDialogOpen(true)
  }

  // Handle delivery management form submission
  const handleDeliveryManage = (e) => {
    e.preventDefault()

    // Get the selected delivery person ID
    const deliveryManId = e.target.deliveryMan.value

    // Find the delivery person details
    const selectedDeliveryPerson = allDeliveryMan.find((item) => item._id === deliveryManId)

    // Close the dialog
    setIsDialogOpen(false)

    // Format the delivery date
    const deliveryDate = moment(startDate).format("MMM Do YY")

    // Create the update object
    const updatebooking = {
      deliveryDate,
      deliveryManId,
      deliveryManName: selectedDeliveryPerson?.name,
      status: "OnTheWay",
    }

    console.log("Update booking data:", updatebooking)

    // Show confirmation dialog
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        // Send update request
        axiosSecure
          .put(`/allParcel/${selectedBooking._id}`, updatebooking)
          .then((response) => {
            console.log("Update response:", response)
            if (response.data?.modifiedCount > 0) {
              Swal.fire("Saved!", "", "success")
              refetchParcels()
            }
          })
          .catch((error) => {
            console.error("Error updating parcel:", error)
            Swal.fire("Error!", "Failed to update parcel", "error")
          })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info")
      }
    })
  }

  // Table columns configuration
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
              onClick={() => handleOpenManageDialog(value)}
              className={`capitalize inline-block px-3 py-1 rounded-full font-semibold bg-[#EBFBE5]`}
            >
              Manage
            </button>
          </div>
        ),
      },
    },
  ]

  // Table options
  const options = {
    selectableRows: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 15],
  }

  return (
    <div>
      <Helmet>
        <title>ParcelPioneer || AllParcel</title>
      </Helmet>

      <div className="mt-10">
        <MUIDataTable className="" title={"All Parcel List"} data={allParcel} columns={columns} options={options} />
      </div>

      {/* Delivery Management Modal */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
          <div className="bg-white p-6 rounded-lg w-[500px] max-w-[90%]">
            <h2 className="text-center font-bold mb-4">Manage Delivery for {selectedBooking?.name}</h2>

            <form onSubmit={handleDeliveryManage}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <p className="font-bold mb-2">Pick a Delivery Man</p>
                  <div className="form-control">
                    <select
                      id="deliveryManSelect"
                      className="select w-full bg-none border border-[rgb(226, 232, 240)] py-2 px-4 rounded-lg"
                      name="deliveryMan"
                      value={selectedDeliveryMan}
                      onChange={(e) => setSelectedDeliveryMan(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select a delivery person
                      </option>
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
                      minDate={new Date()}
                      required
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
  )
}

export default AllParcel

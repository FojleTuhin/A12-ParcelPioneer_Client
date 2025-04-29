"use client"

import { useContext, useState } from "react"
import { Helmet } from "react-helmet-async"
import toast from "react-hot-toast"
import { FaSpinner } from "react-icons/fa"
import { MdOutlineAddAPhoto } from "react-icons/md"
import axios from "axios"

// Assuming these imports are correct for your project structure
import { AuthContext } from "@/Firebase/FirebaseProvider"
import useAxiosPublic from "@/hooks/useAxiosPublic"
import useUserRole from "@/hooks/useUserRole"

export default function UserProfile() {
  const { user, updateUser } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const [userRole, refetch] = useUserRole()

  // Separate loading states for photo and profile updates
  const [photoLoading, setPhotoLoading] = useState(false)
  const [profileLoading, setProfileLoading] = useState(false)

  // Handle photo upload separately
  const handlePhotoUpload = async (e) => {
    const image = e.target.files[0]
    if (!image) return

    try {
      setPhotoLoading(true)

      // Create form data for image upload
      const formData = new FormData()
      formData.append("image", image)

      // Upload to ImgBB
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData,
      )

      const photo = data.data.display_url

      // Update user photo in Firebase
      await updateUser(user.displayName, photo, user.phoneNumber)

      // Update user photo in your database
      await axiosPublic.put(`/users/${user.email}`, {
        photo: photo,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
      })

      toast.success("Photo updated successfully")
      refetch()
    } catch (error) {
      console.error("Error uploading photo:", error)
      toast.error("Failed to update photo")
    } finally {
      setPhotoLoading(false)
    }
  }

  // Handle profile info update separately
  const handleUpdateProfile = async (e) => {
    e.preventDefault()

    try {
      setProfileLoading(true)

      const displayName = e.target.displayName.value
      const phoneNumber = e.target.phoneNumber.value

      // Update user info in Firebase
      await updateUser(displayName, user.photoURL, phoneNumber)

      // Update user info in your database
      const result = await axiosPublic.put(`/users/${user.email}`, {
        displayName,
        phoneNumber,
        photo: user.photoURL,
      })

      if (result.data.modifiedCount > 0) {
        toast.success("Profile updated successfully")
      }

      refetch()
    } catch (error) {
      console.error("Error updating profile:", error)
      toast.error("Failed to update profile")
    } finally {
      setProfileLoading(false)
    }
  }

  return (
    <div className="px-5 py-4">
      <Helmet>
        <title>ParcelPioneer || Profile</title>
      </Helmet>

      {/* Photo Upload Section */}
      <div className="border rounded-2xl px-5 py-4 mb-5">
        <p className="mb-6 font-bold text-xl">Profile Photo</p>

        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              className="h-[100px] w-[100px] rounded-full border-[#3EA570] border-4"
              src={user?.photoURL || "/placeholder.svg"}
              alt="Profile"
            />

            <label htmlFor="photoInput" className="absolute bottom-0 right-0">
              <div className="bg-[#3EA570] h-9 w-9 rounded-full flex justify-center items-center cursor-pointer">
                {photoLoading ? (
                  <FaSpinner className="animate-spin text-white text-lg" />
                ) : (
                  <MdOutlineAddAPhoto className="text-2xl text-white" />
                )}
              </div>
            </label>

            <input
              id="photoInput"
              type="file"
              onChange={handlePhotoUpload}
              style={{ display: "none" }}
              accept="image/*"
            />
          </div>

          <p className="mt-3 text-sm text-gray-500">Click the icon to update your profile photo</p>
        </div>
      </div>

      {/* Profile Info Update Section */}
      <div className="border rounded-2xl px-5 py-4">
        <p className="mb-6 font-bold text-xl">Personal Information</p>

        <form onSubmit={handleUpdateProfile}>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="w-full md:w-[45%]">
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                defaultValue={userRole?.name}
                className="w-full border-[#E6E6EB] py-3 px-5 rounded-xl border-2 text-[#787878]"
              />
            </div>

            <div className="w-full md:w-[45%]">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={userRole?.phone}
                placeholder="Add your phone number"
                className="w-full border-[#E6E6EB] py-3 px-5 rounded-xl border-2 text-[#787878]"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={profileLoading}
              className="bg-[#EBFBE5] w-full md:w-[50%] border-[#3EA570] py-3 px-5 rounded-xl border-2 text-[#3EA570] font-bold"
            >
              {profileLoading ? <FaSpinner className="animate-spin m-auto" /> : "Update Profile Information"}
            </button>
          </div>
        </form>
      </div>

      {/* Role Information */}
      <div className="border rounded-2xl px-5 py-4 mt-5">
        <p className="font-bold">
          Role: <span className="bg-[#EBFBE5] text-[#3EA570] py-2 px-3 rounded-full">{userRole?.role}</span>
        </p>
      </div>
    </div>
  )
}

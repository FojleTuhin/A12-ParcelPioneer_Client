import { AuthContext } from "@/Firebase/FirebaseProvider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useUserRole from "@/hooks/useUserRole";
import axios from "axios";
import { Pointer } from "lucide-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { MdOutlineAddAPhoto } from "react-icons/md";
import Swal from "sweetalert2";



const UserProfile = () => {

    const { user, updateUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [userRole, refetch] = useUserRole();


    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const displayName = e.target.displayName.value;
        const phoneNumber = e.target.phoneNumber.value;

        const image = e.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)



        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData)
        const photo = data.data.display_url;



        const updateInfo = {
            displayName,
            phoneNumber,
            photo
        }

        await updateUser(displayName, photo, phoneNumber);
        refetch();

        await axiosPublic.put(`/users/${user.email}`, updateInfo)
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    toast.success("Update successfully done");

                    refetch();

                }


            })

        e.target.reset();
    }







    return (
        <div className=" px-5 py-4">
            <Helmet>
                <title>
                    ParcelPioneer || Profile
                </title>
            </Helmet>
            <div className="border rounded-2xl px-5 py-4">
                <p className="mb-6 font-bold text-xl">My Profile</p>

                <img className="h-[100px] w-[100px] rounded-full border-[#3EA570] border-4" src={user?.photoURL} alt="" />

                <form onSubmit={handleUpdateProfile}>
                    <div>
                        <label htmlFor="fileInput">
                            <div className="custom-file-input">
                                <div className="bg-[#3EA570] h-9 w-9 rounded-full text-center flex justify-center items-center relative bottom-8 left-16">

                                    <MdOutlineAddAPhoto cursor={Pointer} className="text-2xl text-white" />
                                </div>
                            </div>
                        </label>
                        <input id="fileInput" type="file" name="image" style={{ display: 'none' }} className="w-2" />
                    </div>

                    <div className="flex justify-between">
                        <input type="text" className="w-[45%] border-[#E6E6EB] py-3 px-5 rounded-xl border-2 text-[#787878]" name="displayName" defaultValue={userRole?.name} />
                        <br />
                        <input type="number" name="phoneNumber" className="w-[45%] border-[#E6E6EB] py-3 px-5 rounded-xl border-2 text-[#787878]" placeholder="Add your phone number" defaultValue={userRole.phone} />
                        <br />
                    </div>

                    <div className="">
                        <button className="mt-5 bg-[#EBFBE5] w-[50%] border-[#3EA570] py-3 px-5 rounded-xl border-2 text-[#3EA570] font-bold ">Confirm Change</button>
                    </div>
                </form>

            </div>

            <div className="border rounded-2xl px-5 py-4 mt-5">
                <p className="font-bold">Role: <span className="bg-[#EBFBE5] text-[#3EA570] py-2 px-3 rounded-full">{userRole.role}</span></p>

                <p className="font-bold mt-5">Total Order: <span className="bg-[#EBFBE5] text-[#3EA570] py-2 px-3 rounded-full">5</span></p>
            </div>
        </div>
    );
};

export default UserProfile;
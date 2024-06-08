import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";



const UserProfile = () => {

    const { user } = useContext(AuthContext)
    return (
        <div className=" px-5 py-4">
            <div className="border rounded-2xl px-5 py-4">
                <p className="mb-6 font-bold text-xl">My Profile</p>

                <img className="h-[100px] w-[100px] rounded-full border-[#3EA570] border-4" src={user?.photoURL} alt="" />

                <form>
                    <div className="bg-[#3EA570] h-9 w-9 rounded-full text-center flex justify-center items-center relative bottom-8 left-16">

                        <MdOutlineAddAPhoto className="text-2xl text-white" />
                    </div>

                    <input type="text" className="w-[50%] border-[#E6E6EB] py-4 px-5 rounded-xl border-2 text-[#787878]" defaultValue={user?.displayName} />
                    <br />

                    <button className="mt-5 bg-[#EBFBE5] w-[50%] border-[#3EA570] py-4 px-5 rounded-xl border-2 text-[#3EA570] font-bold ">Confirm Change</button>
                </form>

            </div>

            <div className="border rounded-2xl px-5 py-4 mt-5">
                <p className="font-bold">Role: <span className="bg-[#EBFBE5] text-[#3EA570] py-2 px-3 rounded-full">Regular User</span></p>

                <p className="font-bold mt-5">Total Order: <span className="bg-[#EBFBE5] text-[#3EA570] py-2 px-3 rounded-full">5</span></p>




            </div>
        </div>
    );
};

export default UserProfile;
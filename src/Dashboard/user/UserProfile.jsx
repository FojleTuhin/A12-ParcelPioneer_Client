import { AuthContext } from "@/Firebase/FirebaseProvider";
import { Pointer } from "lucide-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdOutlineAddAPhoto } from "react-icons/md";



const UserProfile = () => {


    const [image, setImage] = useState([])
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file)
        
    };

    const handleUpdateProfile = (e) =>{
        e.preventDefault();
        
        const displayName = e.target.displayName.value;
        const phoneNumber = e.target.phoneNumber.value;
        

        console.log(image, displayName, phoneNumber);
        e.target.reset();
    }

   

    


    const { user } = useContext(AuthContext)

    console.log(user);
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
                        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                    </div>

                    <div className="flex justify-between">
                        <input type="text" className="w-[45%] border-[#E6E6EB] py-3 px-5 rounded-xl border-2 text-[#787878]" name="displayName" defaultValue={user?.displayName} />
                        <br />
                        <input type="number" name="phoneNumber" className="w-[45%] border-[#E6E6EB] py-3 px-5 rounded-xl border-2 text-[#787878]" placeholder="Add your phone number" />
                        <br />
                    </div>

                    <div className="">
                        <button className="mt-5 bg-[#EBFBE5] w-[50%] border-[#3EA570] py-3 px-5 rounded-xl border-2 text-[#3EA570] font-bold ">Confirm Change</button>
                    </div>
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
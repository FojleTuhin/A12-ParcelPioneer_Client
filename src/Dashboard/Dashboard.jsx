import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="flex ">
                <div className="w-[20%] px-6 py-10 bg-[#EBFBE5] flex flex-col justy min-h-screen justify-between">


                    {
                        user &&
                        <ul>
                            <li className="font-bold text-xl">{user?.displayName}</li>
                            <hr className=" border-y-2" />
                            <Link to='/dashboard/bookAParcel'><li className="mt-5 font-semibold ">Book a parcel</li></Link>
                            <Link to='/dashboard/myParcel'><li className="mt-5 font-semibold ">My parcel</li></Link>
                            <Link to='/dashboard/userProfile'><li className="mt-5 font-semibold ">My Profile</li></Link>
                        </ul>
                    }

                    {
                        <ul>
                            <li className="font-bold text-xl">{user?.displayName}</li>
                            <hr className=" border-y-2" />
                            <Link to='/dashboard/bookAParcel'><li className="mt-5 font-semibold ">Delivery list</li></Link>
                            <Link to='/dashboard/myParcel'><li className="mt-5 font-semibold ">Reviews</li></Link>
                            <Link to='/dashboard/userProfile'><li className="mt-5 font-semibold ">My Profile</li></Link>
                        </ul>
                    }









                    <ul>

                        <Link to='/'><li className="mt-5 font-semibold ">Home</li></Link>
                        <Link to='/'><li className="mt-5 font-semibold ">Logout</li></Link>
                    </ul>

                </div>
                <div className="flex-1 min-h-screen">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
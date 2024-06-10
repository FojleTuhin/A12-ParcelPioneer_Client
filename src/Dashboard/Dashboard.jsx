import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ActivityIcon, LayoutGridIcon, MenuIcon, MountainIcon, UsersIcon } from "lucide-react";

const Dashboard = () => {

    const { logOut } = useContext(AuthContext);
    const handleSignOut = () => {

        logOut()
            .then(result => {
                console.log(result);
            })
            .catch()
    }

    return (
        // <div>
        //     <div className="flex ">
        //         <div className="w-[20%] px-6 py-10 bg-[#EBFBE5] flex flex-col justy min-h-screen justify-between">


        //             {/* {
        //                 <ul>
        //                     <li className="font-bold text-xl">{user?.displayName}</li>
        //                     <hr className=" border-y-2" />
        //                     <Link to='/dashboard/bookAParcel'><li className="mt-5 font-semibold ">Book a parcel</li></Link>
        //                     <Link to='/dashboard/myParcel'><li className="mt-5 font-semibold ">My parcel</li></Link>
        //                     <Link to='/dashboard/userProfile'><li className="mt-5 font-semibold ">My Profile</li></Link>
        //                 </ul>
        //             } */}

        //             {/* {
        //                 <ul>
        //                     <li className="font-bold text-xl">{user?.displayName}</li>
        //                     <hr className=" border-y-2" />
        //                     <Link to='/dashboard/deliveryList'><li className="mt-5 font-semibold ">Delivery list</li></Link>
        //                     <Link to='/dashboard/reviews'><li className="mt-5 font-semibold ">Reviews</li></Link>
        //                 </ul>
        //             } */}
        //             {
        //                 <ul>
        //                     <li className="font-bold text-xl">{user?.displayName}</li>
        //                     <hr className=" border-y-2" />
        //                     <Link to='/dashboard/statistics'><li className="mt-5 font-semibold ">Statistics</li></Link>
        //                     <Link to='/dashboard/allUser'><li className="mt-5 font-semibold ">All User</li></Link>
        //                     <Link to='/dashboard/allParcel'><li className="mt-5 font-semibold ">All Parcel</li></Link>
        //                     <Link to='/dashboard/allDeliveryMan'><li className="mt-5 font-semibold ">All Delivery Man</li></Link>
        //                 </ul>
        //             }









        //             <ul>

        //                 <Link to='/'><li className="mt-5 font-semibold ">Home</li></Link>
        //                 <Link to='/'><li className="mt-5 font-semibold ">Logout</li></Link>
        //             </ul>

        //         </div>
        //         <div className="flex-1 min-h-screen px-6 py-10">
        //             <Outlet></Outlet>
        //         </div>

        //     </div>
        // </div>
        <div className="flex h-screen w-full">
            <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r lg:bg-gray-100 dark:lg:bg-gray-800">
                <div className="flex h-full flex-col justify-between py-6 px-4">
                    <div className="space-y-6">
                        <Link to='/' className="flex items-center gap-2 font-bold" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-lg">ParcelPioneer</span>
                        </Link>
                        <nav className="space-y-1">
                            <Link
                                to='/dashboard/statistics'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <ActivityIcon className="h-5 w-5" />
                                Statistics
                            </Link>
                            <Link
                                to='/dashboard/allParcel'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <LayoutGridIcon className="h-5 w-5" />
                                All Parcel
                            </Link>
                            <Link
                                to='/dashboard/allUser'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <UsersIcon className="h-5 w-5" />
                                All Users
                            </Link>
                            <Link
                                to='/dashboard/allDeliveryMan'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <UsersIcon className="h-5 w-5" />
                                All Delivery Man
                            </Link>

                        </nav>
                    </div>
                    <div className="space-y-4">
                        <ul>

                            <Link to='/'><li className="mt-5 font-semibold ">Home</li></Link>
                            <Link><li onClick={handleSignOut} className="mt-5 font-semibold ">Logout</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link to='/' className="flex items-center gap-2 font-bold" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-lg">ParcelPioneer</span>
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <MenuIcon className="h-6 w-6" />
                                    <span className="sr-only">Toggle navigation</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64">
                                <div className="flex h-full flex-col justify-between py-6 px-4">
                                    <div className="space-y-6">
                                        <nav className="space-y-1">
                                            <Link
                                                to='/dashboard/statistics'
                                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                                prefetch={false}
                                            >
                                                <ActivityIcon className="h-5 w-5" />
                                                Statistics
                                            </Link>
                                            <Link
                                                to='/dashboard/allParcel'
                                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                                prefetch={false}
                                            >
                                                <LayoutGridIcon className="h-5 w-5" />
                                                All Parcel
                                            </Link>
                                            <Link
                                                to='/dashboard/allUser'
                                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                                prefetch={false}
                                            >
                                                <UsersIcon className="h-5 w-5" />
                                                All Users
                                            </Link>
                                            <Link
                                                to='/dashboard/allDeliveryMan'
                                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                                prefetch={false}
                                            >
                                                <UsersIcon className="h-5 w-5" />
                                                All Delivery Man
                                            </Link>

                                        </nav>
                                    </div>
                                    <div className="space-y-4">
                                        <ul>

                                            <Link to='/'><li className="mt-5 font-semibold ">Home</li></Link>
                                            <Link><li onClick={handleSignOut} className="mt-5 font-semibold ">Logout</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </header>
                <main className="p-4 lg:p-8">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
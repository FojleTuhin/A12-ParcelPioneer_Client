import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ActivityIcon, ImagesIcon, LayoutGridIcon, ListIcon, MenuIcon, MountainIcon, SaveIcon, UsersIcon } from "lucide-react";
import { MdReviews } from "react-icons/md";

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

        <div className="flex min-h-screen w-full">
            <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r lg:bg-gray-100 dark:lg:bg-gray-800">
                <div className="flex h-full flex-col justify-between py-6 px-4">
                    <div className="space-y-6">
                        <Link to='/' className="flex items-center gap-2 font-bold" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-lg">ParcelPioneer</span>
                        </Link>

                        {/* user dashboard. */}
                        {/* <nav className="space-y-1">
                            <Link
                                to='/dashboard/userProfile'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <UsersIcon className="h-5 w-5" />
                                User Profile
                            </Link>
                            <Link
                                to='/dashboard/bookAParcel'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <LayoutGridIcon className="h-5 w-5" />
                                Book a Parcel
                            </Link>
                            <Link
                                to='/dashboard/myParcel'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                
                                <SaveIcon className="h-5 w-5"/>
                               
                                My Parcel
                            </Link>
                            

                        </nav> */}


                        {/* admin dashboard */}
                        {/* <nav className="space-y-1">
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

                        </nav> */}


                        {/* Delivery Man dashboard. */}
                        <nav className="space-y-1">
                            <Link
                                to='/dashboard/deliveryList'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <ListIcon className="h-5 w-5"></ListIcon>
                                Delivery List
                                
                                
                            </Link>
                            <Link
                                to='/dashboard/reviews'
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <MdReviews className="h-5 w-5"></MdReviews>
                                Reviews
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
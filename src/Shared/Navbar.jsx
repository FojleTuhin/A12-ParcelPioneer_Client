import { Button } from "@/components/ui/button"
import { MenuIcon, MountainIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"


const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <MountainIcon className="h-6 w-6" />
                    <span className="text-lg font-semibold">ParcelPioneer</span>
                </Link>
                <div className="hidden md:flex gap-4">
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        Services
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        Portfolio
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        Contact
                    </Link>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="grid w-[200px] p-4">
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                Home
                            </Link>
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                About
                            </Link>
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                Services
                            </Link>
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                Portfolio
                            </Link>
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>        </div>
    );
};

export default Navbar;
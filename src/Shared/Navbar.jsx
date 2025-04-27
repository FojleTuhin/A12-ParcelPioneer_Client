import { Button } from "@/components/ui/button";
import { MenuIcon, MountainIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";
import { AuthContext } from "@/Firebase/FirebaseProvider";
import useUserRole from "@/hooks/useUserRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [userRole, refetch] = useUserRole();

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch();

    refetch();
  };

  return (
    <div className="lg:px-[100px] md:px-16 px-4 m-auto fixed w-full">
      <div className="flex items-center justify-between px-4 py-2 ">
        <Link to="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">ParcelPioneer</span>
        </Link>

        <div className="hidden items-center md:flex gap-4">
          <Link
            to="/"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>

          <Link
            to="/aboutUs"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About us
          </Link>

          <Link
            to="/services"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
        <div className="hidden items-center md:flex gap-4">
          {/* <Link
            to="/"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>

          <Link
            to="/aboutUs"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About us
          </Link>

          <Link
            to="/services"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link> */}

          <div>
            {/* for admin  */}
            {userRole.role === "admin" && (
              <Link
                to="/dashboard/statistics"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Dashboard
              </Link>
            )}

            {/* for user  */}
            {userRole.role === "regularUser" && (
              <Link
                to="/dashboard/userProfile"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Dashboard
              </Link>
            )}

            {/* for deliveryman  */}
            {userRole.role === "deliveryMan" && (
              <Link
                to="/dashboard/deliveryList"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Dashboard
              </Link>
            )}
          </div>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  className="h-10 w-10 rounded-full bg-cover"
                  src={user.photoURL}
                  alt=""
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.displayName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userRole.role === "admin" && (
                  <Link to="/dashboard/statistics">
                    {" "}
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                )}
                {userRole.role === "regularUser" && (
                  <Link to="/dashboard/userProfile">
                    {" "}
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                )}
                {userRole.role === "deliveryMan" && (
                  <Link to="/dashboard/deliveryList">
                    {" "}
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                )}
                <DropdownMenuItem>
                  <p onClick={handleSignOut}>Logout</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to="/login"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Login
            </Link>
          )}
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
              <Link
                to="/"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Home
              </Link>

              <Link
                to="/"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                About us
              </Link>

              <Link
                to="/"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Services
              </Link>

              <Link
                to="/"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Contact
              </Link>

              <div>
                {/* for admin  */}
                {userRole.role === "admin" && (
                  <Link
                    to="/dashboard/statistics"
                    className="text-lg font-medium hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    Dashboard
                  </Link>
                )}

                {/* for user  */}
                {userRole.role === "regularUser" && (
                  <Link
                    to="/dashboard/userProfile"
                    className="text-lg font-medium hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    Dashboard
                  </Link>
                )}

                {/* for deliveryman  */}
                {userRole.role === "deliveryMan" && (
                  <Link
                    to="/dashboard/deliveryList"
                    className="text-lg font-medium hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    Dashboard
                  </Link>
                )}
              </div>

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <img
                      className="h-10 w-10 rounded-full bg-cover"
                      src={user.photoURL}
                      alt=""
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{user.displayName}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {userRole.role === "admin" && (
                      <Link to="/dashboard/statistics">
                        {" "}
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                      </Link>
                    )}
                    {userRole.role === "regularUser" && (
                      <Link to="/dashboard/userProfile">
                        {" "}
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                      </Link>
                    )}
                    {userRole.role === "deliveryMan" && (
                      <Link to="/dashboard/deliveryList">
                        {" "}
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                      </Link>
                    )}
                    <DropdownMenuItem>
                      <p onClick={handleSignOut}>Logout</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to="/login"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Login
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>{" "}
    </div>
  );
};

export default Navbar;

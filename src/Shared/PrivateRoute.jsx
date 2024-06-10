import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location= useLocation();
    if (loading) {
        return <div className="px-[100px] flex justify-center  items-center min-h-screen  bg-[#F8F6F1] text-black">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;
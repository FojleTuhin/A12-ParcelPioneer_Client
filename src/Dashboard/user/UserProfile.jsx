import { AuthContext } from "@/Firebase/FirebaseProvider";
import { useContext } from "react";



const UserProfile = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>
           <p className="font-bold"> {user?.displayName}</p>
        </div>
    );
};

export default UserProfile;
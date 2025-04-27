
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const axiosPublic = useAxiosPublic();
    // const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })

    return [users, refetch]
};

export default useUsers;
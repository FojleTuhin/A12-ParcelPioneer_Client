import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '@/Firebase/FirebaseProvider';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

const useUserRole = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();


    const { data: userRole = [], refetch, isLoading } = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user.email}`);
            return res.data;
        }
    })


    return [userRole, refetch, isLoading];
};

export default useUserRole;
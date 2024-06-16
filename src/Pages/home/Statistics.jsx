import useAxiosPublic from '@/hooks/useAxiosPublic';
import useUsers from '@/hooks/useUsers';
import { useQuery } from '@tanstack/react-query';
import CountUp from 'react-countup';
const Statistics = () => {

    const axiosPublic = useAxiosPublic();
    const [users] = useUsers();
    
    const { data: allParcel = [] } = useQuery({
        queryKey: ['parcel'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allParcel');
            return res.data;
        }
    })
    const { data: totalDelivered = [] } = useQuery({
        queryKey: ['delivered'],
        queryFn: async () => {
            const res = await axiosPublic.get('/totalDelivered');
            return res.data;
        }
    })

    
    return (
        <div className="px-4 md:px-16 lg:px-[100px] flex flex-wrap justify-center gap-6  mt-12 mb-10">
            <div className="h-[150px] w-[300px] bg-[#EBFBE5] flex flex-col items-center justify-center rounded-2xl">
                <p className="text-xl"> Parcel Booked</p>
                <p className="font-semibold text-5xl">
                    <CountUp end={allParcel.length} duration={5}>
                    </CountUp>
                </p>
            </div>
            <div className="h-[150px] w-[300px] bg-[#FAECFF] flex flex-col items-center justify-center rounded-2xl">
                <p className="text-xl"> Parcel Delivered</p>
                <p className="font-semibold text-5xl">
                    <CountUp end={totalDelivered.length} duration={5}>
                    </CountUp>
                </p>
            </div>
            <div className="h-[150px] w-[300px] bg-[#EBFBE5] flex flex-col items-center justify-center rounded-2xl">
                <p className="text-xl"> User</p>
                <p className="font-semibold text-5xl">
                    <CountUp end={users.length} duration={5}>
                    </CountUp>
                </p>
            </div>
        </div>
    );
};

export default Statistics;
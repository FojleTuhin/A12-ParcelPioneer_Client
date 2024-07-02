import Title from "@/Shared/Title";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const TopDeliveryMan = () => {

    const axiosPublic = useAxiosPublic();

    const { data: TopDeliveryMan = [] } = useQuery({
        queryKey: ['deliveryMan'],
        queryFn: async () => {
            const res = await axiosPublic.get('/topDeliveryMan');
            return res.data;
        }
    })

    console.log(TopDeliveryMan);


    return (
        <div className="bg-[#F8F6F1] px-4 md:px-16 lg:px-[100px] py-10">
            <Title heading='Meet Our Top Couriers' subheading='Dedicated Professionals Ensuring Your Deliveries Arrive Safely and On Time'></Title>
            <div className=" flex flex-wrap justify-center gap-6  mt-12 mb-10 ">
                {
                    TopDeliveryMan.map(item =>
                        <div key={item._id} className="w-[300px]   shadow-lg">
                            <img className=" bg-cover h-[300px] w-full" src={item.photo} alt="" />
                            <div className="text-center font-semibold bg-white py-12">
                                <p className="font-bold text-xl">{item.name}</p>
                                <p>Parcel Delivered: {item.numberOfParcelDelivered}</p>
                                <p>Avg. Ratting: {item.averageRating}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopDeliveryMan;
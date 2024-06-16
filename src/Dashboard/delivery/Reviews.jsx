import { Rating } from "@smastrom/react-rating";
import { Helmet } from "react-helmet-async";
import '@smastrom/react-rating/style.css'
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useUserRole from "@/hooks/useUserRole";
const Reviews = () => {

    const axiosPublic = useAxiosPublic();
    const [userRole] = useUserRole();

    console.log(userRole._id);

    const { data: allfeedback = [] } = useQuery({
        queryKey: ['allfeedback', userRole._id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/feedback/${userRole._id}`);
            return res.data;
        }
    })


    console.log(allfeedback);
    return (
        <div className="px-4 pb-4 min-h-screen bg-[#F8F6F1] ">
            <Helmet>
                <title>
                    ParcelPioneer || Reviews
                </title>
            </Helmet>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-5">
                <h1 className="font-bold italic  text-xl text-center">Clients Feedbacks</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {
                    allfeedback.map(item =>
                        <div key={item._id} className="-mt-20">
                            <div className="h-[106px] w-[106px] rounded-full border-4 border-[#95D2B3] relative top-24 left-8">
                                <div className="h-[101px] w-[100px] rounded-full border-4 border-[#78ABA8]">
                                    <img className="h-[100px] w-[100px] rounded-full" src={item.photo} alt="" />
                                </div>
                            </div>
                            <div className="w-[350px] bg-gray-200 mt-10 px-6 py-6 rounded-2xl " >
                                <div className="ml-32">
                                    <p className="font-bold ">{item.name}</p>
                                    <div >
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={item.rating}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <p className=" mt-6">{item.feedback}</p>

                                <p className="text-right mt-6">{item.date}</p>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    );
};

export default Reviews;
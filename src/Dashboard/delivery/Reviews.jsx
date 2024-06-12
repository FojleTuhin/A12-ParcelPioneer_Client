import { Star } from "lucide-react";

const Reviews = () => {
    return (
        <div className="px-4 pb-4 bg-[#F8F6F1] ">
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-5">
                <h1 className="font-bold italic  text-xl text-center">Clients Feedbacks</h1>
                {/* <h1 className="font-bold text-3xl text-center">Feedbacks</h1> */}
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                <div className="-mt-20">
                    <div className="h-[106px] w-[106px] rounded-full border-4 border-[#95D2B3] relative top-24 left-8">
                        <div className="h-[101px] w-[100px] rounded-full border-4 border-[#78ABA8]">
                            <img className="h-[100px] w-[100px] rounded-full" src="https://i.ibb.co/FJSWbLF/IMG-20221204-WA0083.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-[350px] bg-[#686D76] mt-10 px-6 py-6 rounded-2xl " >
                        <div className="ml-32">
                            <p className="text-white ">Fojle Rabbi Tuhin</p>
                            <div className="flex ">
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                            </div>
                        </div>
                        <p className="text-gray-300 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident veniam fuga voluptatibus doloribus sequi corrupti officia quod autem excepturi, perspiciatis, aut culpa sed exercitationem, aliquam ipsum sint temporibus animi!</p>

                        <p className="text-right mt-6">12/06/2024</p>
                    </div>
                </div>
                <div className="-mt-20">
                    <div className="h-[106px] w-[106px] rounded-full border-4 border-[#95D2B3] relative top-24 left-8">
                        <div className="h-[101px] w-[100px] rounded-full border-4 border-[#78ABA8]">
                            <img className="h-[100px] w-[100px] rounded-full" src="https://i.ibb.co/FJSWbLF/IMG-20221204-WA0083.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-[350px] bg-[#686D76] mt-10 px-6 py-6 rounded-2xl " >
                        <div className="ml-32">
                            <p className="text-white ">Fojle Rabbi Tuhin</p>
                            <div className="flex ">
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                            </div>
                        </div>
                        <p className="text-gray-300 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident veniam fuga voluptatibus doloribus sequi corrupti officia quod autem excepturi, perspiciatis, aut culpa sed exercitationem, aliquam ipsum sint temporibus animi!</p>

                        <p className="text-right mt-6">12/06/2024</p>
                    </div>
                </div>
                <div className="-mt-20">
                    <div className="h-[106px] w-[106px] rounded-full border-4 border-[#95D2B3] relative top-24 left-8">
                        <div className="h-[101px] w-[100px] rounded-full border-4 border-[#78ABA8]">
                            <img className="h-[100px] w-[100px] rounded-full" src="https://i.ibb.co/FJSWbLF/IMG-20221204-WA0083.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-[350px] bg-[#686D76] mt-10 px-6 py-6 rounded-2xl " >
                        <div className="ml-32">
                            <p className="text-white ">Fojle Rabbi Tuhin</p>
                            <div className="flex ">
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                                <Star className="text-yellow-500"></Star>
                            </div>
                        </div>
                        <p className="text-gray-300 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident veniam fuga voluptatibus doloribus sequi corrupti officia quod autem excepturi, perspiciatis, aut culpa sed exercitationem, aliquam ipsum sint temporibus animi!</p>

                        <p className="text-right mt-6">12/06/2024</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Reviews;